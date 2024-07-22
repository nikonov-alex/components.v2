import morphdom from "morphdom";

type World = Window;
type EventChannel = "global" | "local";

type Render<State> = { ( s: State ): HTMLElement };
type EventHandler<State> = { ( s: State, e: Event, w: World ): State };
type EventRecord<State> = EventHandler<State> | {
    handler: EventHandler<State>,
    channel: EventChannel
};
type Events<State> = { [name: string]: EventHandler<State> };
type EventRecords<State> = { [name: string]: EventRecord<State> };
type MutationHandler<State> = { ( s: State, elem: HTMLElement, w: World ): State };

type EmitPredicate<State> = { ( os: State, ns: State ): boolean };
type EventEmitter<State> = { ( s: State ): Event };
type EmitRecord<State> = {
    when: EmitPredicate<State>,
    emit: EventEmitter<State> | EventEmitter<State>[],
    channel?: EventChannel
}

type Setter<State, T> = { set: { ( s: State, v: T ): State }, predicate: { ( v: any ): v is T } }
type Getter<State, T> = { get: { ( s: State ): T } };
type Prop<State, T> = Getter<State, T> | Setter<State, T> | Getter<State, T> & Setter<State, T>;
const has_getter = <State, T>( prop: Prop<State, T> ): prop is Getter<State, T> =>
    "get" in prop;

type ViewUpdated<State> = { ( state: State, elem: HTMLElement ): State };

type DOMChange<State> = MutationHandler<State> | {
    trigger: MutationHandler<State>,
    options: MutationObserverInit
};

type Args<State, Props extends {}> = {
    initialState: State | {( w: World ): State},
    render: Render<State>,
    viewupdated?: ViewUpdated<State>,
    domchange?: DOMChange<State>,
    events?: EventRecords<State>,
    emit?: EmitRecord<State>[],
    props?: { [prop in keyof Props]: Prop<State, Props[prop]> }
};

const isInitialFunc = <State>( value: unknown ): value is {( w: World ): State} =>
    typeof value === "function";

const localEvents = <State>( events: EventRecords<State> ): Events<State> =>
    Object.keys( events ).reduce( ( result, event ) => {
        const record = events[event];
        return typeof record === "function"
            ? {...result, [event]: record}
        : typeof record === "object" && record.channel === "local"
            ? {...result, [event]: record.handler}
        : result
    }, { } );

const globalEvents = <State>( events: EventRecords<State> ): Events<State> =>
    Object.keys( events ).reduce( ( result, event ) => {
        const record = events[event];
        return typeof record === "object" && record.channel === "global"
            ? {...result, [event]: record.handler}
            : result;
    }, { } );

type DOMMode = "light" | "shadow";

type RedrawMode = "replace" | "update";

type Options = {
    styles?: CSSStyleSheet,
    dommode?: DOMMode,
    debug?: boolean,
    redrawMode?: RedrawMode
}


abstract class _Component<State, Props extends {}> extends HTMLElement {

    protected _state: State;
    private _render: Render<State>;
    protected _root;
    private _emit?: EmitRecord<State>[];
    private _globalEvents: Events<State> = {};
    private _localEvents: Events<State> = {};
    private _debug: boolean;

    private _deferredRedraw = false;
    private _viewupdated?: ViewUpdated<State>;
    private _styles?: CSSStyleSheet;
    private _domchange?: DOMChange<State>;
    private _document: ShadowRoot | HTMLElement;
    protected _connected: boolean = false;
    private _domchangeObserver?: MutationObserver;
    private _redrawMode: RedrawMode;

    constructor( args: Args<State, Props>, options?: Options ) {
        super();
        this._state = isInitialFunc( args.initialState )
            ? args.initialState( window )
            : args.initialState;
        this._render = args.render;
        this._viewupdated = args.viewupdated;
        this._root = document.createElement( "span" );
        this._styles = options?.styles;
        this._domchange = args.domchange;

        let dommode = options?.dommode;
        if ( !dommode ) {
            dommode = "shadow";
        }

        this._redrawMode = options?.redrawMode || "update";

        this._document = "shadow" === dommode
            ? this.attachShadow( {
                mode: "closed",
                //@ts-ignore
                clonable: true,
                delegatesFocus: true
            } )
            : this;
        if ( options?.styles && "light" === dommode ) {
            document.adoptedStyleSheets.push( options.styles );
        }

        if ( args.events ) {
            this._globalEvents = globalEvents( args.events );
            this._localEvents = localEvents( args.events );
        }
        if ( args.props ) {
            this._defineProps( args.props );
        }
        this._emit = args.emit;
        this._globalEventHandler = this._globalEventHandler.bind( this );
        this._localEventHandler = this._localEventHandler.bind( this );
        this._debug = !!options?.debug;
    }


    private _defineProps( props: { [prop: string]: Prop<State, any> } ) {
        const $this = this;

        for ( let [ name, prop ] of Object.entries( props ) ) {
            const desc = {};
            if ( has_getter( prop ) ) {
                const $get = prop.get;
                const get = function () {
                    return $get( $this._state );
                };
                //@ts-ignore
                desc.get = get;
                get.bind( desc );
            }
            Object.defineProperty( this, name, desc );
        }
    }

    _localEventHandler( event: Event ) {
        if ( [ "submit" ].includes( event.type ) ) {
            event.preventDefault();
        }
        event.stopImmediatePropagation();

        const handler = this._localEvents[event.type];
        this._changeState( handler( this._state, event, window ) );
    }

    _globalEventHandler( event: Event ) {
        const handler = this._globalEvents[event.type];
        this._changeState( handler( this._state, event, window ) );
    }

    connectedCallback() {
        if ( this._domchange ) {
            this._connectMutationObserver( this._domchange );
            // first call after parse or insert
            const handler = typeof this._domchange === "function"
                ? this._domchange
                : this._domchange.trigger;
            this._changeState( handler( this._state, this, window ) );
        }

        this._root = this._render( this._state );
        this._document.appendChild( this._root );

        if ( this._styles && this._document instanceof ShadowRoot ) {
            this._document.adoptedStyleSheets.push( this._styles );
        }

        Object.keys( this._localEvents ).forEach( eventName => {
            this._document.addEventListener( eventName, this._localEventHandler, true )
        } );

        Object.keys( this._globalEvents ).forEach( eventName => {
            window.addEventListener( eventName, this._globalEventHandler, true )
        } );

        this._connected = true;
        if ( this._viewupdated ) {
            this._changeState( this._viewupdated( this._state, this._root ) );
        }
    }

    disconnectedCallback() {
        this._connected = false;
        this._document.innerHTML = "";
        if ( this._document instanceof ShadowRoot ) {
            this._document.adoptedStyleSheets = [];
        }
        this._root = document.createElement( "span" );

        this._maybeDisconnectMutationObserver();

        Object.keys( this._localEvents ).forEach( eventName => {
            this._document.removeEventListener( eventName, this._localEventHandler, true )
        } );

        Object.keys( this._globalEvents ).forEach( eventName => {
            window.removeEventListener( eventName, this._globalEventHandler, true )
        } );
    }


    private _connectMutationObserver( domchange: DOMChange<State> ) {
        if ( !this._domchangeObserver ) {
            const handler = typeof domchange === "function"
                ? domchange
                : domchange.trigger;
            const domchanged = (changes: MutationRecord[]) => {
                this._changeState(handler(this._state, this, window));
            };

            this._domchangeObserver = new MutationObserver(domchanged);
        }
        this._domchangeObserver.observe( this,
            typeof domchange === "function"
                ? {
                    subtree: true,
                    childList: true,
                    attributes: true,
                    characterData: true
                }
                : domchange.options
        );
    }

    private _maybeDisconnectMutationObserver() {
        if ( this._domchangeObserver ) {
            this._domchangeObserver.disconnect();
        }
    }

    private _redraw() {
        if ( !this._connected ) {
            return;
        }

        const rendered = this._render( this._state );
        if ( this._root.isEqualNode( rendered ) ) {
            return;
        }
        if ( this._redrawMode === "replace" || this._root.nodeName !== rendered.nodeName ) {
            this._root.replaceWith( rendered );
            this._root = rendered;
        }
        else {
            morphdom( this._root, rendered, {
                onBeforeElUpdated: ( fromEl, toEl ) =>
                    !fromEl.isEqualNode( toEl )
            } );
        }
        if ( this._viewupdated ) {
            this._changeState( this._viewupdated( this._state, this._root ) );
        }
    }

    private _maybeEmitEvents( oldState: State ) {
        if ( this._emit ) {
            for ( const record of this._emit ) {
                if ( record.when( oldState, this._state ) ) {
                    const channel = "global" === record.channel
                        ? window
                        : this;
                    if ( Array.isArray( record.emit ) ) {
                        record.emit.forEach( emitter => {
                            channel.dispatchEvent( emitter( this._state ) );
                        } );
                    }
                    else {
                        channel.dispatchEvent( record.emit( this._state ) );
                    }
                }
            }
        }
    }

    protected _changeState( newState: State ) {
        if ( this._state === newState ) {
            return;
        }
        const oldState = this._state;
        this._state = newState;
        if ( !this._deferredRedraw ) {
            setTimeout( () => {
                this._redraw();
                this._deferredRedraw = false;
            }, 0 );
            this._deferredRedraw = true;
        }
        this._maybeEmitEvents( oldState );
        if ( this._debug ) {
            console.log( "nikonov-components: transition from", oldState, "to", this._state );
        }
    }

}


type Component<State, Props extends {}> = Props & _Component<State, Props>;
const Component: new <State, Props extends {}>( args: Args<State, Props>, options?: Options ) => Component<State, Props> = _Component as any




type ValidateFunc<State> = { ( s: State ): [ValidityStateFlags, string] };

type FormComponentArgs<State, Props extends {}> = Args<State, Props> & {
    formValue: { ( s: State ): string },
    validate?: ValidateFunc<State>
};

abstract class _FormComponent<State, Props extends {}> extends _Component<State, Props> {
    static formAssociated = true;
    private _internals;
    private _formValue;
    private _validate?: ValidateFunc<State>;

    constructor( args: FormComponentArgs<State, Props>, options?: Options ) {
        super( args, options );
        this._internals = this.attachInternals();
        this._formValue = args.formValue;
        this._validate = args.validate;
        this._internals.setFormValue( this._formValue( this._state ) );
    }

    private _validityDiffers( flags: ValidityStateFlags ) {
        const validity = this._internals.validity;
        return validity.valueMissing !== ( flags.valueMissing ?? false ) ||
            validity.stepMismatch !== ( flags.stepMismatch ?? false ) ||
            validity.badInput !== ( flags.badInput ?? false ) ||
            validity.customError !== ( flags.customError ?? false ) ||
            validity.patternMismatch !== ( flags.patternMismatch ?? false ) ||
            validity.rangeOverflow !== ( flags.rangeOverflow ?? false ) ||
            validity.rangeUnderflow !== ( flags.rangeUnderflow ?? false ) ||
            validity.tooLong !== ( flags.tooLong ?? false ) ||
            validity.tooShort !== ( flags.tooShort ?? false ) ||
            validity.typeMismatch !== ( flags.typeMismatch ?? false );
    }

    private _maybeValidate() {
        if ( this._connected && this._validate ) {
            const [ flags, message ] = this._validate( this._state );
            if ( this._validityDiffers( flags ) ) {
                this._internals.setValidity( flags, message, this._root );
            }
        }
    }

    protected _changeState( newState: State ) {
        super._changeState( newState );
        this._internals.setFormValue( this._formValue( this._state ) );
        this._maybeValidate();
    }

}


type FormComponent<State, Props extends {}> = Props & _FormComponent<State, Props>;
const FormComponent: new <State, Props extends {}>( args: FormComponentArgs<State, Props>, options?: Options ) => FormComponent<State, Props> = _FormComponent as any


export { Component, FormComponent, Options, Args };