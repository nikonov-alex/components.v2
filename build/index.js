var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.d(t,{uA:()=>g,s2:()=>E,Aq:()=>a});var i={};e.r(i),e.d(i,{boolean:()=>X,int:()=>Y,number:()=>G,positiveInt:()=>K});var n={};e.r(n),e.d(n,{optional:()=>J,required:()=>Q,update:()=>W});var r,a={};e.r(a),e.d(a,{ObjectBuilder:()=>n,Parse:()=>i});var o="undefined"==typeof document?void 0:document,s=!!o&&"content"in o.createElement("template"),d=!!o&&o.createRange&&"createContextualFragment"in o.createRange();function l(e,t){var i,n,r=e.nodeName,a=t.nodeName;return r===a||(i=r.charCodeAt(0),n=a.charCodeAt(0),i<=90&&n>=97?r===a.toUpperCase():n<=90&&i>=97&&a===r.toUpperCase())}function c(e,t,i){e[i]!==t[i]&&(e[i]=t[i],e[i]?e.setAttribute(i,""):e.removeAttribute(i))}var h={OPTION:function(e,t){var i=e.parentNode;if(i){var n=i.nodeName.toUpperCase();"OPTGROUP"===n&&(n=(i=i.parentNode)&&i.nodeName.toUpperCase()),"SELECT"!==n||i.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),i.selectedIndex=-1)}c(e,t,"selected")},INPUT:function(e,t){c(e,t,"checked"),c(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var i=t.value;e.value!==i&&(e.value=i);var n=e.firstChild;if(n){var r=n.nodeValue;if(r==i||!i&&r==e.placeholder)return;n.nodeValue=i}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var i,n,r=-1,a=0,o=e.firstChild;o;)if("OPTGROUP"===(n=o.nodeName&&o.nodeName.toUpperCase()))o=(i=o).firstChild;else{if("OPTION"===n){if(o.hasAttribute("selected")){r=a;break}a++}!(o=o.nextSibling)&&i&&(o=i.nextSibling,i=null)}e.selectedIndex=r}}};function u(){}function f(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}var v=function(e,t,i){if(i||(i={}),"string"==typeof t)if("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName){var n=t;(t=o.createElement("html")).innerHTML=n}else a=(a=t).trim(),t=s?function(e){var t=o.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(a):d?function(e){return r||(r=o.createRange()).selectNode(o.body),r.createContextualFragment(e).childNodes[0]}(a):function(e){var t=o.createElement("body");return t.innerHTML=e,t.childNodes[0]}(a);else 11===t.nodeType&&(t=t.firstElementChild);var a,c=i.getNodeKey||f,v=i.onBeforeNodeAdded||u,_=i.onNodeAdded||u,m=i.onBeforeElUpdated||u,p=i.onElUpdated||u,b=i.onBeforeNodeDiscarded||u,g=i.onNodeDiscarded||u,y=i.onBeforeElChildrenUpdated||u,E=i.skipFromChildren||u,N=i.addChild||function(e,t){return e.appendChild(t)},w=!0===i.childrenOnly,S=Object.create(null),O=[];function A(e){O.push(e)}function C(e,t){if(1===e.nodeType)for(var i=e.firstChild;i;){var n=void 0;t&&(n=c(i))?A(n):(g(i),i.firstChild&&C(i,t)),i=i.nextSibling}}function T(e,t,i){!1!==b(e)&&(t&&t.removeChild(e),g(e),C(e,i))}function j(e){_(e);for(var t=e.firstChild;t;){var i=t.nextSibling,n=c(t);if(n){var r=S[n];r&&l(t,r)?(t.parentNode.replaceChild(r,t),M(r,t)):j(t)}else j(t);t=i}}function M(e,t,i){var n=c(t);if(n&&delete S[n],!i){if(!1===m(e,t))return;if(function(e,t){var i,n,r,a,o=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var s=o.length-1;s>=0;s--)n=(i=o[s]).name,r=i.namespaceURI,a=i.value,r?(n=i.localName||n,e.getAttributeNS(r,n)!==a&&("xmlns"===i.prefix&&(n=i.name),e.setAttributeNS(r,n,a))):e.getAttribute(n)!==a&&e.setAttribute(n,a);for(var d=e.attributes,l=d.length-1;l>=0;l--)n=(i=d[l]).name,(r=i.namespaceURI)?(n=i.localName||n,t.hasAttributeNS(r,n)||e.removeAttributeNS(r,n)):t.hasAttribute(n)||e.removeAttribute(n)}}(e,t),p(e),!1===y(e,t))return}"TEXTAREA"!==e.nodeName?function(e,t){var i,n,r,a,s,d=E(e,t),u=t.firstChild,f=e.firstChild;e:for(;u;){for(a=u.nextSibling,i=c(u);!d&&f;){if(r=f.nextSibling,u.isSameNode&&u.isSameNode(f)){u=a,f=r;continue e}n=c(f);var _=f.nodeType,m=void 0;if(_===u.nodeType&&(1===_?(i?i!==n&&((s=S[i])?r===s?m=!1:(e.insertBefore(s,f),n?A(n):T(f,e,!0),f=s):m=!1):n&&(m=!1),(m=!1!==m&&l(f,u))&&M(f,u)):3!==_&&8!=_||(m=!0,f.nodeValue!==u.nodeValue&&(f.nodeValue=u.nodeValue))),m){u=a,f=r;continue e}n?A(n):T(f,e,!0),f=r}if(i&&(s=S[i])&&l(s,u))d||N(e,s),M(s,u);else{var p=v(u);!1!==p&&(p&&(u=p),u.actualize&&(u=u.actualize(e.ownerDocument||o)),N(e,u),j(u))}u=a,f=r}!function(e,t,i){for(;t;){var n=t.nextSibling;(i=c(t))?A(i):T(t,e,!0),t=n}}(e,f,n);var b=h[e.nodeName];b&&b(e,t)}(e,t):h.TEXTAREA(e,t)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var i=t.firstChild;i;){var n=c(i);n&&(S[n]=i),e(i),i=i.nextSibling}}(e);var P,x,V=e,U=V.nodeType,L=t.nodeType;if(!w)if(1===U)1===L?l(e,t)||(g(e),V=function(e,t){for(var i=e.firstChild;i;){var n=i.nextSibling;t.appendChild(i),i=n}return t}(e,(P=t.nodeName,(x=t.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==x?o.createElementNS(x,P):o.createElement(P)))):V=t;else if(3===U||8===U){if(L===U)return V.nodeValue!==t.nodeValue&&(V.nodeValue=t.nodeValue),V;V=t}if(V===t)g(e);else{if(t.isSameNode&&t.isSameNode(V))return;if(M(V,t,w),O)for(var H=0,I=O.length;H<I;H++){var R=S[O[H]];R&&T(R,R.parentNode,!1)}}return!w&&V!==e&&e.parentNode&&(V.actualize&&(V=V.actualize(e.ownerDocument||o)),e.parentNode.replaceChild(V,e)),V};const _=v,m=e=>"get"in e,p=["hashchange","popstate"];class b extends HTMLElement{constructor(e,t){var i;super(),this._globalEvents={},this._localEvents={},this._deferredRedraw=!1,this._connected=!1,this._state="function"==typeof e.initialState?e.initialState(window):e.initialState,this._render=e.render,this._viewupdated=e.viewupdated,this._root=document.createElement("span"),this._styles=t,this._domchange=e.domchange,this._shadowdom=this.attachShadow({mode:"closed",clonable:!0,delegatesFocus:!0}),e.events&&(this._globalEvents=(i=e.events,Object.keys(i).reduce(((e,t)=>p.includes(t)?Object.assign(Object.assign({},e),{[t]:i[t]}):e),{})),this._localEvents=(e=>Object.keys(e).reduce(((t,i)=>p.includes(i)?t:Object.assign(Object.assign({},t),{[i]:e[i]})),{}))(e.events)),e.props&&this._defineProps(e.props),this._emit=e.emit,this._globalEventHandler=this._globalEventHandler.bind(this),this._localEventHandler=this._localEventHandler.bind(this),this._debug=!!e.debug}_defineProps(e){const t=this;for(let[i,n]of Object.entries(e)){const e={};if(m(n)){const i=n.get,r=function(){return i(t._state)};e.get=r,r.bind(e)}Object.defineProperty(this,i,e)}}_localEventHandler(e){["submit"].includes(e.type)&&e.preventDefault(),e.stopImmediatePropagation();const t=this._localEvents[e.type];this._changeState(t(this._state,e,window))}_globalEventHandler(e){const t=this._globalEvents[e.type];this._changeState(t(this._state,e,window))}connectedCallback(){if(this._domchange){this._connectMutationObserver(this._domchange);const e="function"==typeof this._domchange?this._domchange:this._domchange.trigger;this._changeState(e(this._state,this,window))}this._root=this._render(this._state),this._shadowdom.appendChild(this._root),this._styles&&(this._shadowdom.adoptedStyleSheets=[this._styles]),Object.keys(this._localEvents).forEach((e=>{this._shadowdom.addEventListener(e,this._localEventHandler,!0)})),Object.keys(this._globalEvents).forEach((e=>{window.addEventListener(e,this._globalEventHandler,!0)})),this._connected=!0,this._viewupdated&&this._changeState(this._viewupdated(this._state,this._root))}disconnectedCallback(){this._connected=!1,this._shadowdom.innerHTML="",this._shadowdom.adoptedStyleSheets=[],this._root=document.createElement("span"),this._maybeDisconnectMutationObserver(),Object.keys(this._localEvents).forEach((e=>{this._shadowdom.removeEventListener(e,this._localEventHandler,!0)})),Object.keys(this._globalEvents).forEach((e=>{window.removeEventListener(e,this._globalEventHandler,!0)}))}_connectMutationObserver(e){if(!this._domchangeObserver){const t="function"==typeof e?e:e.trigger,i=e=>{this._changeState(t(this._state,this,window))};this._domchangeObserver=new MutationObserver(i)}this._domchangeObserver.observe(this,"function"==typeof e?{subtree:!0,childList:!0,attributes:!0,characterData:!0}:e.options)}_maybeDisconnectMutationObserver(){this._domchangeObserver&&this._domchangeObserver.disconnect()}_redraw(){if(!this._connected)return;const e=this._render(this._state);this._root.isEqualNode(e)||(this._root.nodeName!==e.nodeName?(this._root.replaceWith(e),this._root=e):_(this._root,e,{onBeforeElUpdated:(e,t)=>!e.isEqualNode(t)}),this._viewupdated&&this._changeState(this._viewupdated(this._state,this._root)))}_maybeEmitEvents(e){if(this._emit)for(const t of this._emit)t.when(e,this._state)&&(Array.isArray(t.emit)?t.emit.forEach((e=>{this.dispatchEvent(e(this._state))})):this.dispatchEvent(t.emit(this._state)))}_changeState(e){if(this._state===e)return;const t=this._state;this._state=e,this._deferredRedraw||(setTimeout((()=>{this._redraw(),this._deferredRedraw=!1}),0),this._deferredRedraw=!0),this._maybeEmitEvents(t),this._debug&&console.log("nikonov-components: transition from",t,"to",this._state)}}const g=b;class y extends b{constructor(e,t){super(e,t),this._internals=this.attachInternals(),this._formValue=e.formValue,this._validate=e.validate,this._internals.setFormValue(this._formValue(this._state))}_validityDiffers(e){var t,i,n,r,a,o,s,d,l,c;const h=this._internals.validity;return h.valueMissing!==(null!==(t=e.valueMissing)&&void 0!==t&&t)||h.stepMismatch!==(null!==(i=e.stepMismatch)&&void 0!==i&&i)||h.badInput!==(null!==(n=e.badInput)&&void 0!==n&&n)||h.customError!==(null!==(r=e.customError)&&void 0!==r&&r)||h.patternMismatch!==(null!==(a=e.patternMismatch)&&void 0!==a&&a)||h.rangeOverflow!==(null!==(o=e.rangeOverflow)&&void 0!==o&&o)||h.rangeUnderflow!==(null!==(s=e.rangeUnderflow)&&void 0!==s&&s)||h.tooLong!==(null!==(d=e.tooLong)&&void 0!==d&&d)||h.tooShort!==(null!==(l=e.tooShort)&&void 0!==l&&l)||h.typeMismatch!==(null!==(c=e.typeMismatch)&&void 0!==c&&c)}_maybeValidate(){if(this._connected&&this._validate){const[e,t]=this._validate(this._state);this._validityDiffers(e)&&this._internals.setValidity(e,t,this._root)}}_changeState(e){super._changeState(e),this._internals.setFormValue(this._formValue(this._state)),this._maybeValidate()}}y.formAssociated=!0;const E=y;var N={d:(e,t)=>{for(var i in t)N.o(t,i)&&!N.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},w={};N.d(w,{E1:()=>C,_u:()=>S,_w:()=>O,Er:()=>A});var S={};N.r(S),N.d(S,{EMPTY_LIST:()=>T,concat:()=>L,cons:()=>j,count:()=>k,filter:()=>U,find:()=>R,fold:()=>x,isEmpty:()=>M,list:()=>P,map:()=>V,prepend:()=>H,reverse:()=>I});var O={};N.r(O),N.d(O,{apply:()=>D,ifNotError:()=>B,ifNotFalse:()=>F});var A={};N.r(A);var C={};N.r(C),N.d(C,{array:()=>q});const T=null,j=(e,t)=>({first:e,rest:t}),M=e=>T===e,P=(...e)=>e.reduce(((e,t)=>j(t,e)),T),x=(e,t,i)=>M(e)?i:t(e.first,x(e.rest,t,i)),V=(e,t)=>x(e,((e,i)=>j(t(e),i)),T),U=(e,t)=>x(e,((e,i)=>t(e)?j(e,i):i),T),L=(e,t)=>x(e,j,t),H=(e,t)=>L(e,P(t)),I=e=>x(e,((e,t)=>H(t,e)),T),R=(e,t)=>!M(e)&&(t(e.first)?e.first:R(e.rest,t)),k=e=>M(e)?0:k(e.rest)+1,D=e=>(t,i)=>e(t)?t:i(t),F=D((e=>!1===e)),B=D((e=>e instanceof Error)),q=(e,t)=>Array.apply(null,Array(e)).map(((e,i)=>t(i)));var z=w._w;const X=(e,t)=>{return!!e.hasAttribute(t)&&("true"===(i=e.getAttribute(t).toLowerCase())||""===i);var i},G=(e,t)=>{return!(!e.hasAttribute(t)||""===e.getAttribute(t))&&(i=parseFloat(e.getAttribute(t)),!Number.isNaN(i)&&i);var i},Y=(e,t)=>z.ifNotFalse(G(e,t),(e=>!!Number.isInteger(e)&&e)),K=(e,t)=>z.ifNotFalse(Y(e,t),(e=>e>0&&e)),W=(e,t,i,n)=>{return n((r=e[t]!==i)?Object.assign(Object.assign({},e),{[t]:i}):e,r);var r},J=(e,t,i,n)=>W(e,t,i||void 0,n),Q=(e,t,i,n)=>i instanceof Error?i:W(e,t,i,n);var Z=t.uA,$=t.s2,ee=t.Aq;export{Z as Component,$ as FormComponent,ee as Utils};