import morphdom from "morphdom";
const has_getter = (prop) => "get" in prop;
class _Component extends HTMLElement {
    constructor(args, stylesheet) {
        super();
        this._state = args.initialState;
        this._render = args.render;
        this._root = this._render(this._state);
        const shadowdom = this.attachShadow({
            mode: "closed",
            delegatesFocus: true
        });
        shadowdom.appendChild(this._root);
        if (stylesheet) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = stylesheet;
            shadowdom.appendChild(link);
        }
        if (args.domchange) {
            this._connectMutationObserver(args.domchange);
        }
        if (args.events) {
            this._bindEvents(args.events, shadowdom);
        }
        if (args.props) {
            this._defineProps(args.props);
        }
        this._emit = args.emit;
    }
    _defineProps(props) {
        const $this = this;
        for (let [name, prop] of Object.entries(props)) {
            const desc = {};
            if (has_getter(prop)) {
                const $get = prop.get;
                const get = function () {
                    return $get($this._state);
                };
                //@ts-ignore
                desc.get = get;
                get.bind(desc);
            }
            Object.defineProperty(this, name, desc);
        }
    }
    _bindEvents(events, shadowdom) {
        const eventHandler = (event) => {
            if (["submit", "click"].includes(event.type)) {
                event.preventDefault();
            }
            event.stopImmediatePropagation();
            const handler = events[event.type];
            this._changeState(handler(this._state, event));
        };
        Object.keys(events).forEach(eventName => {
            shadowdom.addEventListener(eventName, eventHandler, true);
        });
    }
    _connectMutationObserver(handler) {
        const domchanged = (changes) => {
            this._changeState(handler(this._state, this));
        };
        const observer = new MutationObserver(domchanged);
        observer.observe(this, {
            subtree: true,
            childList: true,
            attributes: true,
            characterData: true
        });
    }
    _redraw() {
        const rendered = this._render(this._state);
        if (this._root.nodeName !== rendered.nodeName) {
            this._root.replaceWith(rendered);
            this._root = rendered;
        }
        else {
            morphdom(this._root, rendered);
        }
    }
    _maybeEmitEvents(oldState) {
        if (this._emit) {
            for (const record of this._emit) {
                if (record.when(oldState, this._state)) {
                    if (Array.isArray(record.emit)) {
                        record.emit.forEach(emitter => {
                            this.dispatchEvent(emitter(this._state));
                        });
                    }
                    else {
                        this.dispatchEvent(record.emit(this._state));
                    }
                }
            }
        }
    }
    _changeState(newState) {
        const oldState = this._state;
        this._state = newState;
        this._redraw();
        this._maybeEmitEvents(oldState);
    }
}
const Component = _Component;
class _FormComponent extends _Component {
    constructor(args, stylesheet) {
        super(args, stylesheet);
        this._internals = this.attachInternals();
        this._formValue = args.formValue;
        this._validate = args.validate;
        this._internals.setFormValue(this._formValue(this._state));
    }
    _validityDiffers(flags) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const validity = this._internals.validity;
        return validity.valueMissing !== ((_a = flags.valueMissing) !== null && _a !== void 0 ? _a : false) ||
            validity.stepMismatch !== ((_b = flags.stepMismatch) !== null && _b !== void 0 ? _b : false) ||
            validity.badInput !== ((_c = flags.badInput) !== null && _c !== void 0 ? _c : false) ||
            validity.customError !== ((_d = flags.customError) !== null && _d !== void 0 ? _d : false) ||
            validity.patternMismatch !== ((_e = flags.patternMismatch) !== null && _e !== void 0 ? _e : false) ||
            validity.rangeOverflow !== ((_f = flags.rangeOverflow) !== null && _f !== void 0 ? _f : false) ||
            validity.rangeUnderflow !== ((_g = flags.rangeUnderflow) !== null && _g !== void 0 ? _g : false) ||
            validity.tooLong !== ((_h = flags.tooLong) !== null && _h !== void 0 ? _h : false) ||
            validity.tooShort !== ((_j = flags.tooShort) !== null && _j !== void 0 ? _j : false) ||
            validity.typeMismatch !== ((_k = flags.typeMismatch) !== null && _k !== void 0 ? _k : false);
    }
    _maybeValidate() {
        if (this._validate) {
            const [flags, message] = this._validate(this._state);
            if (this._validityDiffers(flags)) {
                this._internals.setValidity(flags, message, this._root);
            }
        }
    }
    _changeState(newState) {
        super._changeState(newState);
        this._internals.setFormValue(this._formValue(this._state));
        this._maybeValidate();
    }
}
_FormComponent.formAssociated = true;
const FormComponent = _FormComponent;
export { Component, FormComponent };
//# sourceMappingURL=index.js.map