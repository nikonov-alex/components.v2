import morphdom from "morphdom";

type Render<State> = { ( s: State ): HTMLElement };
type EventHandler<State> = { ( s: State, e: Event ): State };
type Events<State> = { [name: string]: EventHandler<State> };
type MutationHandler<State> = { ( s: State, elem: HTMLElement ): State };

type EmitPredicate<State> = { ( os: State, ns: State ): boolean };
type EventEmitter<State> = { ( s: State ): Event };
type EmitRecord<State> = { when: EmitPredicate<State>, emit: EventEmitter<State> | EventEmitter<State>[] }

type Setter<State, T> = { set: { ( s: State, v: T ): State }, predicate: { ( v: any ): v is T } }
type Getter<State, T> = { get: { ( s: State ): T } };
type Prop<State, T> = Getter<State, T> | Setter<State, T> | Getter<State, T> & Setter<State, T>;
const has_getter = <State, T>( prop: Prop<State, T> ): prop is Getter<State, T> =>
    "get" in prop;

type Args<State, Props extends {}> = {
    initialState: State,
    render: Render<State>,
    domchange?: MutationHandler<State>,
    events?: Events<State>,
    emit?: EmitRecord<State>[],
    props?: { [prop in keyof Props]: Prop<State, Props[prop]> }
};

abstract class _Component<State, Props extends {}> extends HTMLElement {

    protected _state: State;
    private _render: Render<State>;
    protected _root;
    private _emit?: EmitRecord<State>[];

    constructor( args: Args<State, Props>, stylesheet?: string ) {
        super();
        this._state = args.initialState;
        this._render = args.render;
        this._root = this._render( this._state );

        const shadowdom = this.attachShadow( {
            mode: "closed",
            delegatesFocus: true
        } );
        shadowdom.appendChild( this._root );
        if ( stylesheet ) {
            const link = document.createElement( "link" );
            link.rel = "stylesheet";
            link.href = stylesheet;
            shadowdom.appendChild( link );
        }
        if ( args.domchange ) {
            this._connectMutationObserver( args.domchange );
        }
        if ( args.events ) {
            this._bindEvents( args.events, shadowdom );
        }
        if ( args.props ) {
            this._defineProps( args.props );
        }
        this._emit = args.emit;
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


    private _bindEvents( events: Events<State>, shadowdom: ShadowRoot ) {
        const eventHandler = ( event: Event ) => {
            if ( [ "submit", "click" ].includes( event.type ) ) {
                event.preventDefault();
            }
            event.stopImmediatePropagation();

            const handler = events[event.type];
            this._changeState( handler( this._state, event ) );
        }

        Object.keys( events ).forEach( eventName => {
            shadowdom.addEventListener( eventName, eventHandler, true )
        } );
    }


    private _connectMutationObserver( handler: MutationHandler<State> ) {
        const domchanged = ( changes: MutationRecord[] ) => {
            this._changeState( handler( this._state, this ) );
        };

        const observer = new MutationObserver( domchanged );
        observer.observe( this, {
            subtree: true,
            childList: true,
            attributes: true,
            characterData: true
        } );
    }

    private _redraw() {
        const rendered = this._render( this._state );
        if ( this._root.nodeName !== rendered.nodeName ) {
            this._root.replaceWith( rendered );
            this._root = rendered;
        }
        else {
            morphdom( this._root, rendered );
        }
    }

    private _maybeEmitEvents( oldState: State ) {
        if ( this._emit ) {
            for ( const record of this._emit ) {
                if ( record.when( oldState, this._state ) ) {
                    if ( Array.isArray( record.emit ) ) {
                        record.emit.forEach( emitter => {
                            this.dispatchEvent( emitter( this._state ) );
                        } );
                    }
                    else {
                        this.dispatchEvent( record.emit( this._state ) );
                    }
                }
            }
        }
    }

    protected _changeState( newState: State ) {
        const oldState = this._state;
        this._state = newState;
        this._redraw();
        this._maybeEmitEvents( oldState );
    }

}


type Component<State, Props extends {}> = Props & _Component<State, Props>;
const Component: new <State, Props extends {}>( args: Args<State, Props>, stylesheet?: string ) => Component<State, Props> = _Component as any




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

    constructor( args: FormComponentArgs<State, Props>, stylesheet?: string ) {
        super( args, stylesheet );
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
        if ( this._validate ) {
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
const FormComponent: new <State, Props extends {}>( args: FormComponentArgs<State, Props>, stylesheet?: string ) => FormComponent<State, Props> = _FormComponent as any


export { Component, FormComponent };