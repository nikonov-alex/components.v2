var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.d(t,{uA:()=>g,s2:()=>E,Aq:()=>a});var i={};e.r(i),e.d(i,{boolean:()=>q,int:()=>X,number:()=>z,positiveInt:()=>G});var n={};e.r(n),e.d(n,{optional:()=>K,required:()=>W,update:()=>Y});var r,a={};e.r(a),e.d(a,{ObjectBuilder:()=>n,Parse:()=>i});var o="undefined"==typeof document?void 0:document,s=!!o&&"content"in o.createElement("template"),d=!!o&&o.createRange&&"createContextualFragment"in o.createRange();function l(e,t){var i,n,r=e.nodeName,a=t.nodeName;return r===a||(i=r.charCodeAt(0),n=a.charCodeAt(0),i<=90&&n>=97?r===a.toUpperCase():n<=90&&i>=97&&a===r.toUpperCase())}function u(e,t,i){e[i]!==t[i]&&(e[i]=t[i],e[i]?e.setAttribute(i,""):e.removeAttribute(i))}var c={OPTION:function(e,t){var i=e.parentNode;if(i){var n=i.nodeName.toUpperCase();"OPTGROUP"===n&&(n=(i=i.parentNode)&&i.nodeName.toUpperCase()),"SELECT"!==n||i.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),i.selectedIndex=-1)}u(e,t,"selected")},INPUT:function(e,t){u(e,t,"checked"),u(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var i=t.value;e.value!==i&&(e.value=i);var n=e.firstChild;if(n){var r=n.nodeValue;if(r==i||!i&&r==e.placeholder)return;n.nodeValue=i}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var i,n,r=-1,a=0,o=e.firstChild;o;)if("OPTGROUP"===(n=o.nodeName&&o.nodeName.toUpperCase()))o=(i=o).firstChild;else{if("OPTION"===n){if(o.hasAttribute("selected")){r=a;break}a++}!(o=o.nextSibling)&&i&&(o=i.nextSibling,i=null)}e.selectedIndex=r}}};function h(){}function f(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}var v=function(e,t,i){if(i||(i={}),"string"==typeof t)if("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName){var n=t;(t=o.createElement("html")).innerHTML=n}else a=(a=t).trim(),t=s?function(e){var t=o.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(a):d?function(e){return r||(r=o.createRange()).selectNode(o.body),r.createContextualFragment(e).childNodes[0]}(a):function(e){var t=o.createElement("body");return t.innerHTML=e,t.childNodes[0]}(a);else 11===t.nodeType&&(t=t.firstElementChild);var a,u=i.getNodeKey||f,v=i.onBeforeNodeAdded||h,p=i.onNodeAdded||h,m=i.onBeforeElUpdated||h,b=i.onElUpdated||h,_=i.onBeforeNodeDiscarded||h,g=i.onNodeDiscarded||h,y=i.onBeforeElChildrenUpdated||h,E=i.skipFromChildren||h,N=i.addChild||function(e,t){return e.appendChild(t)},S=!0===i.childrenOnly,w=Object.create(null),A=[];function O(e){A.push(e)}function C(e,t){if(1===e.nodeType)for(var i=e.firstChild;i;){var n=void 0;t&&(n=u(i))?O(n):(g(i),i.firstChild&&C(i,t)),i=i.nextSibling}}function T(e,t,i){!1!==_(e)&&(t&&t.removeChild(e),g(e),C(e,i))}function j(e){p(e);for(var t=e.firstChild;t;){var i=t.nextSibling,n=u(t);if(n){var r=w[n];r&&l(t,r)?(t.parentNode.replaceChild(r,t),M(r,t)):j(t)}else j(t);t=i}}function M(e,t,i){var n=u(t);if(n&&delete w[n],!i){if(!1===m(e,t))return;if(function(e,t){var i,n,r,a,o=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var s=o.length-1;s>=0;s--)n=(i=o[s]).name,r=i.namespaceURI,a=i.value,r?(n=i.localName||n,e.getAttributeNS(r,n)!==a&&("xmlns"===i.prefix&&(n=i.name),e.setAttributeNS(r,n,a))):e.getAttribute(n)!==a&&e.setAttribute(n,a);for(var d=e.attributes,l=d.length-1;l>=0;l--)n=(i=d[l]).name,(r=i.namespaceURI)?(n=i.localName||n,t.hasAttributeNS(r,n)||e.removeAttributeNS(r,n)):t.hasAttribute(n)||e.removeAttribute(n)}}(e,t),b(e),!1===y(e,t))return}"TEXTAREA"!==e.nodeName?function(e,t){var i,n,r,a,s,d=E(e,t),h=t.firstChild,f=e.firstChild;e:for(;h;){for(a=h.nextSibling,i=u(h);!d&&f;){if(r=f.nextSibling,h.isSameNode&&h.isSameNode(f)){h=a,f=r;continue e}n=u(f);var p=f.nodeType,m=void 0;if(p===h.nodeType&&(1===p?(i?i!==n&&((s=w[i])?r===s?m=!1:(e.insertBefore(s,f),n?O(n):T(f,e,!0),f=s):m=!1):n&&(m=!1),(m=!1!==m&&l(f,h))&&M(f,h)):3!==p&&8!=p||(m=!0,f.nodeValue!==h.nodeValue&&(f.nodeValue=h.nodeValue))),m){h=a,f=r;continue e}n?O(n):T(f,e,!0),f=r}if(i&&(s=w[i])&&l(s,h))d||N(e,s),M(s,h);else{var b=v(h);!1!==b&&(b&&(h=b),h.actualize&&(h=h.actualize(e.ownerDocument||o)),N(e,h),j(h))}h=a,f=r}!function(e,t,i){for(;t;){var n=t.nextSibling;(i=u(t))?O(i):T(t,e,!0),t=n}}(e,f,n);var _=c[e.nodeName];_&&_(e,t)}(e,t):c.TEXTAREA(e,t)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var i=t.firstChild;i;){var n=u(i);n&&(w[n]=i),e(i),i=i.nextSibling}}(e);var P,x,V=e,U=V.nodeType,I=t.nodeType;if(!S)if(1===U)1===I?l(e,t)||(g(e),V=function(e,t){for(var i=e.firstChild;i;){var n=i.nextSibling;t.appendChild(i),i=n}return t}(e,(P=t.nodeName,(x=t.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==x?o.createElementNS(x,P):o.createElement(P)))):V=t;else if(3===U||8===U){if(I===U)return V.nodeValue!==t.nodeValue&&(V.nodeValue=t.nodeValue),V;V=t}if(V===t)g(e);else{if(t.isSameNode&&t.isSameNode(V))return;if(M(V,t,S),A)for(var L=0,R=A.length;L<R;L++){var k=w[A[L]];k&&T(k,k.parentNode,!1)}}return!S&&V!==e&&e.parentNode&&(V.actualize&&(V=V.actualize(e.ownerDocument||o)),e.parentNode.replaceChild(V,e)),V};const p=v,m=e=>"get"in e,b=["hashchange","popstate"];class _ extends HTMLElement{constructor(e,t){super(),this._globalEvents={},this._deferredRedraw=!1,this._state="function"==typeof e.initialState?e.initialState(window):e.initialState,this._render=e.render,this._viewupdated=e.viewupdated,this._root=this._render(this._state);const i=this.attachShadow({mode:"closed",clonable:!0,delegatesFocus:!0});if(i.appendChild(this._root),t)if("url"in t){const e=document.createElement("link");e.rel="stylesheet",e.href=t.url,i.appendChild(e)}else i.adoptedStyleSheets=[t.stylesheet];var n;e.domchange&&this._connectMutationObserver(e.domchange),e.events&&(this._bindEvents((n=e.events,Object.keys(n).reduce(((e,t)=>b.includes(t)?e:Object.assign(Object.assign({},e),{[t]:n[t]})),{})),i),this._globalEvents=(e=>Object.keys(e).reduce(((t,i)=>b.includes(i)?Object.assign(Object.assign({},t),{[i]:e[i]}):t),{}))(e.events)),e.props&&this._defineProps(e.props),this._emit=e.emit,this._globalEventHandler=this._globalEventHandler.bind(this),this._debug=!!e.debug,this._viewupdated&&this._changeState(this._viewupdated(this._state,this._root))}_defineProps(e){const t=this;for(let[i,n]of Object.entries(e)){const e={};if(m(n)){const i=n.get,r=function(){return i(t._state)};e.get=r,r.bind(e)}Object.defineProperty(this,i,e)}}_bindEvents(e,t){const i=t=>{["submit"].includes(t.type)&&t.preventDefault(),t.stopImmediatePropagation();const i=e[t.type];this._changeState(i(this._state,t,window))};Object.keys(e).forEach((e=>{t.addEventListener(e,i,!0)}))}_globalEventHandler(e){const t=this._globalEvents[e.type];this._changeState(t(this._state,e,window))}connectedCallback(){Object.keys(this._globalEvents).forEach((e=>{window.addEventListener(e,this._globalEventHandler,!0)}))}disconnectedCallback(){Object.keys(this._globalEvents).forEach((e=>{window.removeEventListener(e,this._globalEventHandler,!0)}))}_connectMutationObserver(e){new MutationObserver((t=>{this._changeState(e(this._state,this,window))})).observe(this,{subtree:!0,childList:!0,attributes:!0,characterData:!0})}_redraw(){const e=this._render(this._state);this._root.isEqualNode(e)||(this._root.nodeName!==e.nodeName?(this._root.replaceWith(e),this._root=e):p(this._root,e,{onBeforeElUpdated:(e,t)=>!e.isEqualNode(t)}),this._viewupdated&&this._changeState(this._viewupdated(this._state,this._root)))}_maybeEmitEvents(e){if(this._emit)for(const t of this._emit)t.when(e,this._state)&&(Array.isArray(t.emit)?t.emit.forEach((e=>{this.dispatchEvent(e(this._state))})):this.dispatchEvent(t.emit(this._state)))}_changeState(e){if(this._state===e)return;const t=this._state;this._state=e,this._deferredRedraw||(setTimeout((()=>{this._redraw(),this._deferredRedraw=!1}),0),this._deferredRedraw=!0),this._maybeEmitEvents(t),this._debug&&console.log("nikonov-components: transition from",t,"to",this._state)}}const g=_;class y extends _{constructor(e,t){super(e,t),this._internals=this.attachInternals(),this._formValue=e.formValue,this._validate=e.validate,this._internals.setFormValue(this._formValue(this._state))}_validityDiffers(e){var t,i,n,r,a,o,s,d,l,u;const c=this._internals.validity;return c.valueMissing!==(null!==(t=e.valueMissing)&&void 0!==t&&t)||c.stepMismatch!==(null!==(i=e.stepMismatch)&&void 0!==i&&i)||c.badInput!==(null!==(n=e.badInput)&&void 0!==n&&n)||c.customError!==(null!==(r=e.customError)&&void 0!==r&&r)||c.patternMismatch!==(null!==(a=e.patternMismatch)&&void 0!==a&&a)||c.rangeOverflow!==(null!==(o=e.rangeOverflow)&&void 0!==o&&o)||c.rangeUnderflow!==(null!==(s=e.rangeUnderflow)&&void 0!==s&&s)||c.tooLong!==(null!==(d=e.tooLong)&&void 0!==d&&d)||c.tooShort!==(null!==(l=e.tooShort)&&void 0!==l&&l)||c.typeMismatch!==(null!==(u=e.typeMismatch)&&void 0!==u&&u)}_maybeValidate(){if(this._validate){const[e,t]=this._validate(this._state);this._validityDiffers(e)&&this._internals.setValidity(e,t,this._root)}}_changeState(e){super._changeState(e),this._internals.setFormValue(this._formValue(this._state)),this._maybeValidate()}}y.formAssociated=!0;const E=y;var N={d:(e,t)=>{for(var i in t)N.o(t,i)&&!N.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},S={};N.d(S,{_u:()=>w,_w:()=>A,Er:()=>O});var w={};N.r(w),N.d(w,{EMPTY_LIST:()=>C,concat:()=>U,cons:()=>T,count:()=>k,filter:()=>V,find:()=>R,fold:()=>P,isEmpty:()=>j,list:()=>M,map:()=>x,prepend:()=>I,reverse:()=>L});var A={};N.r(A),N.d(A,{apply:()=>F,ifNotError:()=>D,ifNotFalse:()=>H});var O={};N.r(O);const C=null,T=(e,t)=>({first:e,rest:t}),j=e=>C===e,M=(...e)=>e.reduce(((e,t)=>T(t,e)),C),P=(e,t,i)=>j(e)?i:t(e.first,P(e.rest,t,i)),x=(e,t)=>P(e,((e,i)=>T(t(e),i)),C),V=(e,t)=>P(e,((e,i)=>t(e)?T(e,i):i),C),U=(e,t)=>P(e,T,t),I=(e,t)=>U(e,M(t)),L=e=>P(e,((e,t)=>I(t,e)),C),R=(e,t)=>!j(e)&&(t(e.first)?e.first:R(e.rest,t)),k=e=>j(e)?0:k(e.rest)+1,F=e=>(t,i)=>e(t)?t:i(t),H=F((e=>!1===e)),D=F((e=>e instanceof Error));var B=S._w;const q=(e,t)=>{return!!e.hasAttribute(t)&&("true"===(i=e.getAttribute(t).toLowerCase())||""===i);var i},z=(e,t)=>{return!(!e.hasAttribute(t)||""===e.getAttribute(t))&&(i=parseFloat(e.getAttribute(t)),!Number.isNaN(i)&&i);var i},X=(e,t)=>B.ifNotFalse(z(e,t),(e=>!!Number.isInteger(e)&&e)),G=(e,t)=>B.ifNotFalse(X(e,t),(e=>e>0&&e)),Y=(e,t,i,n)=>{return n((r=e[t]!==i)?Object.assign(Object.assign({},e),{[t]:i}):e,r);var r},K=(e,t,i,n)=>Y(e,t,i||void 0,n),W=(e,t,i,n)=>i instanceof Error?i:Y(e,t,i,n);var J=t.uA,Q=t.s2,Z=t.Aq;export{J as Component,Q as FormComponent,Z as Utils};