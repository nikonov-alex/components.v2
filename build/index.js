var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.d(t,{uA:()=>_,s2:()=>E,Aq:()=>a});var n={};e.r(n),e.d(n,{boolean:()=>y,number:()=>N});var i={};e.r(i),e.d(i,{optional:()=>C,required:()=>O,update:()=>A});var r,a={};e.r(a),e.d(a,{ObjectBuilder:()=>i,Parse:()=>n});var o="undefined"==typeof document?void 0:document,s=!!o&&"content"in o.createElement("template"),d=!!o&&o.createRange&&"createContextualFragment"in o.createRange();function l(e,t){var n,i,r=e.nodeName,a=t.nodeName;return r===a||(n=r.charCodeAt(0),i=a.charCodeAt(0),n<=90&&i>=97?r===a.toUpperCase():i<=90&&n>=97&&a===r.toUpperCase())}function c(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var u={OPTION:function(e,t){var n=e.parentNode;if(n){var i=n.nodeName.toUpperCase();"OPTGROUP"===i&&(i=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==i||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}c(e,t,"selected")},INPUT:function(e,t){c(e,t,"checked"),c(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var i=e.firstChild;if(i){var r=i.nodeValue;if(r==n||!n&&r==e.placeholder)return;i.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,i,r=-1,a=0,o=e.firstChild;o;)if("OPTGROUP"===(i=o.nodeName&&o.nodeName.toUpperCase()))o=(n=o).firstChild;else{if("OPTION"===i){if(o.hasAttribute("selected")){r=a;break}a++}!(o=o.nextSibling)&&n&&(o=n.nextSibling,n=null)}e.selectedIndex=r}}};function h(){}function f(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}const v=function(e,t,n){if(n||(n={}),"string"==typeof t)if("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName){var i=t;(t=o.createElement("html")).innerHTML=i}else a=(a=t).trim(),t=s?function(e){var t=o.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(a):d?function(e){return r||(r=o.createRange()).selectNode(o.body),r.createContextualFragment(e).childNodes[0]}(a):function(e){var t=o.createElement("body");return t.innerHTML=e,t.childNodes[0]}(a);else 11===t.nodeType&&(t=t.firstElementChild);var a,c=n.getNodeKey||f,v=n.onBeforeNodeAdded||h,m=n.onNodeAdded||h,b=n.onBeforeElUpdated||h,p=n.onElUpdated||h,_=n.onBeforeNodeDiscarded||h,g=n.onNodeDiscarded||h,E=n.onBeforeElChildrenUpdated||h,y=n.skipFromChildren||h,N=n.addChild||function(e,t){return e.appendChild(t)},A=!0===n.childrenOnly,C=Object.create(null),O=[];function S(e){O.push(e)}function T(e,t){if(1===e.nodeType)for(var n=e.firstChild;n;){var i=void 0;t&&(i=c(n))?S(i):(g(n),n.firstChild&&T(n,t)),n=n.nextSibling}}function w(e,t,n){!1!==_(e)&&(t&&t.removeChild(e),g(e),T(e,n))}function x(e){m(e);for(var t=e.firstChild;t;){var n=t.nextSibling,i=c(t);if(i){var r=C[i];r&&l(t,r)?(t.parentNode.replaceChild(r,t),j(r,t)):x(t)}else x(t);t=n}}function j(e,t,n){var i=c(t);if(i&&delete C[i],!n){if(!1===b(e,t))return;if(function(e,t){var n,i,r,a,o=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var s=o.length-1;s>=0;s--)i=(n=o[s]).name,r=n.namespaceURI,a=n.value,r?(i=n.localName||i,e.getAttributeNS(r,i)!==a&&("xmlns"===n.prefix&&(i=n.name),e.setAttributeNS(r,i,a))):e.getAttribute(i)!==a&&e.setAttribute(i,a);for(var d=e.attributes,l=d.length-1;l>=0;l--)i=(n=d[l]).name,(r=n.namespaceURI)?(i=n.localName||i,t.hasAttributeNS(r,i)||e.removeAttributeNS(r,i)):t.hasAttribute(i)||e.removeAttribute(i)}}(e,t),p(e),!1===E(e,t))return}"TEXTAREA"!==e.nodeName?function(e,t){var n,i,r,a,s,d=y(e,t),h=t.firstChild,f=e.firstChild;e:for(;h;){for(a=h.nextSibling,n=c(h);!d&&f;){if(r=f.nextSibling,h.isSameNode&&h.isSameNode(f)){h=a,f=r;continue e}i=c(f);var m=f.nodeType,b=void 0;if(m===h.nodeType&&(1===m?(n?n!==i&&((s=C[n])?r===s?b=!1:(e.insertBefore(s,f),i?S(i):w(f,e,!0),f=s):b=!1):i&&(b=!1),(b=!1!==b&&l(f,h))&&j(f,h)):3!==m&&8!=m||(b=!0,f.nodeValue!==h.nodeValue&&(f.nodeValue=h.nodeValue))),b){h=a,f=r;continue e}i?S(i):w(f,e,!0),f=r}if(n&&(s=C[n])&&l(s,h))d||N(e,s),j(s,h);else{var p=v(h);!1!==p&&(p&&(h=p),h.actualize&&(h=h.actualize(e.ownerDocument||o)),N(e,h),x(h))}h=a,f=r}!function(e,t,n){for(;t;){var i=t.nextSibling;(n=c(t))?S(n):w(t,e,!0),t=i}}(e,f,i);var _=u[e.nodeName];_&&_(e,t)}(e,t):u.TEXTAREA(e,t)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var n=t.firstChild;n;){var i=c(n);i&&(C[i]=n),e(n),n=n.nextSibling}}(e);var V,M,U=e,P=U.nodeType,R=t.nodeType;if(!A)if(1===P)1===R?l(e,t)||(g(e),U=function(e,t){for(var n=e.firstChild;n;){var i=n.nextSibling;t.appendChild(n),n=i}return t}(e,(V=t.nodeName,(M=t.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==M?o.createElementNS(M,V):o.createElement(V)))):U=t;else if(3===P||8===P){if(R===P)return U.nodeValue!==t.nodeValue&&(U.nodeValue=t.nodeValue),U;U=t}if(U===t)g(e);else{if(t.isSameNode&&t.isSameNode(U))return;if(j(U,t,A),O)for(var L=0,I=O.length;L<I;L++){var k=C[O[L]];k&&w(k,k.parentNode,!1)}}return!A&&U!==e&&e.parentNode&&(U.actualize&&(U=U.actualize(e.ownerDocument||o)),e.parentNode.replaceChild(U,e)),U},m=e=>"get"in e,b=["hashchange","popstate"];class p extends HTMLElement{constructor(e,t){super(),this._globalEvents={},this._deferredRedraw=!1,this._state=e.initialState,this._render=e.render,this._root=this._render(this._state);const n=this.attachShadow({mode:"closed",clonable:!0,delegatesFocus:!0});if(n.appendChild(this._root),t)if("url"in t){const e=document.createElement("link");e.rel="stylesheet",e.href=t.url,n.appendChild(e)}else{const e=document.createElement("style");e.innerText=t.css,n.appendChild(e)}var i;e.domchange&&this._connectMutationObserver(e.domchange),e.events&&(this._bindEvents((i=e.events,Object.keys(i).reduce(((e,t)=>b.includes(t)?e:Object.assign(Object.assign({},e),{[t]:i[t]})),{})),n),this._globalEvents=(e=>Object.keys(e).reduce(((t,n)=>b.includes(n)?Object.assign(Object.assign({},t),{[n]:e[n]}):t),{}))(e.events)),e.props&&this._defineProps(e.props),this._emit=e.emit,this._globalEventHandler=this._globalEventHandler.bind(this),this._debug=!!e.debug}_defineProps(e){const t=this;for(let[n,i]of Object.entries(e)){const e={};if(m(i)){const n=i.get,r=function(){return n(t._state)};e.get=r,r.bind(e)}Object.defineProperty(this,n,e)}}_bindEvents(e,t){const n=t=>{["submit"].includes(t.type)&&t.preventDefault(),t.stopImmediatePropagation();const n=e[t.type];this._changeState(n(this._state,t))};Object.keys(e).forEach((e=>{t.addEventListener(e,n,!0)}))}_globalEventHandler(e){const t=this._globalEvents[e.type];this._changeState(t(this._state,e))}connectedCallback(){Object.keys(this._globalEvents).forEach((e=>{window.addEventListener(e,this._globalEventHandler,!0)}))}disconnectedCallback(){Object.keys(this._globalEvents).forEach((e=>{window.removeEventListener(e,this._globalEventHandler,!0)}))}_connectMutationObserver(e){new MutationObserver((t=>{this._changeState(e(this._state,this))})).observe(this,{subtree:!0,childList:!0,attributes:!0,characterData:!0})}_redraw(){const e=this._render(this._state);this._root.nodeName!==e.nodeName?(this._root.replaceWith(e),this._root=e):v(this._root,e)}_maybeEmitEvents(e){if(this._emit)for(const t of this._emit)t.when(e,this._state)&&(Array.isArray(t.emit)?t.emit.forEach((e=>{this.dispatchEvent(e(this._state))})):this.dispatchEvent(t.emit(this._state)))}_changeState(e){if(this._state===e)return;const t=this._state;this._state=e,this._deferredRedraw||(setTimeout((()=>{this._redraw(),this._deferredRedraw=!1}),0),this._deferredRedraw=!0),this._maybeEmitEvents(t),this._debug&&console.log("nikonov-components: transition from",t,"to",this._state)}}const _=p;class g extends p{constructor(e,t){super(e,t),this._internals=this.attachInternals(),this._formValue=e.formValue,this._validate=e.validate,this._internals.setFormValue(this._formValue(this._state))}_validityDiffers(e){var t,n,i,r,a,o,s,d,l,c;const u=this._internals.validity;return u.valueMissing!==(null!==(t=e.valueMissing)&&void 0!==t&&t)||u.stepMismatch!==(null!==(n=e.stepMismatch)&&void 0!==n&&n)||u.badInput!==(null!==(i=e.badInput)&&void 0!==i&&i)||u.customError!==(null!==(r=e.customError)&&void 0!==r&&r)||u.patternMismatch!==(null!==(a=e.patternMismatch)&&void 0!==a&&a)||u.rangeOverflow!==(null!==(o=e.rangeOverflow)&&void 0!==o&&o)||u.rangeUnderflow!==(null!==(s=e.rangeUnderflow)&&void 0!==s&&s)||u.tooLong!==(null!==(d=e.tooLong)&&void 0!==d&&d)||u.tooShort!==(null!==(l=e.tooShort)&&void 0!==l&&l)||u.typeMismatch!==(null!==(c=e.typeMismatch)&&void 0!==c&&c)}_maybeValidate(){if(this._validate){const[e,t]=this._validate(this._state);this._validityDiffers(e)&&this._internals.setValidity(e,t,this._root)}}_changeState(e){super._changeState(e),this._internals.setFormValue(this._formValue(this._state)),this._maybeValidate()}}g.formAssociated=!0;const E=g,y=(e,t)=>{return!!e.hasAttribute(t)&&("true"===(n=e.getAttribute(t).toLowerCase())||""===n);var n},N=(e,t)=>{return!(!e.hasAttribute(t)||""===e.getAttribute(t))&&(n=parseInt(e.getAttribute(t),10),!Number.isNaN(n)&&n);var n},A=(e,t,n,i)=>i(void 0===e[t]||e[t]!==n?Object.assign(Object.assign({},e),{[t]:n}):e),C=(e,t,n,i)=>n?A(e,t,n,i):i(e),O=(e,t,n,i)=>n instanceof Error?n:A(e,t,n,i);var S=t.uA,T=t.s2,w=t.Aq;export{S as Component,T as FormComponent,w as Utils};