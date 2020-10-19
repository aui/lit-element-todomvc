/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${s}`);class n{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],l=document.createTreeWalker(e.content,133,null,!1);let c=0,d=-1,p=0;const{strings:u,values:{length:f}}=t;for(;p<f;){const t=l.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)r(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=u[p],i=a.exec(e)[2],s=i.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const r=n.split(o);this.parts.push({type:"attribute",index:d,name:i,strings:r}),p+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,n=e.split(o),l=n.length-1;for(let e=0;e<l;e++){let s,o=n[e];if(""===o)s=h();else{const t=a.exec(o);null!==t&&r(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(o)}i.insertBefore(s,t),this.parts.push({type:"node",index:++d})}""===n[l]?(i.insertBefore(h(),t),s.push(t)):t.data=n[l],p+=l}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(h(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(s.push(t),d--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),p++}}else l.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const r=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,h=()=>document.createComment(""),a=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(t,e){const{element:{content:i},parts:s}=t,o=document.createTreeWalker(i,133,null,!1);let n=p(s),r=s[n],l=-1,h=0;const a=[];let c=null;for(;o.nextNode();){l++;const t=o.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(a.push(t),null===c&&(c=t)),null!==c&&h++;void 0!==r&&r.index===l;)r.index=null!==c?-1:r.index-h,n=p(s,n),r=s[n]}a.forEach(t=>t.parentNode.removeChild(t))}const d=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=new WeakMap,f=t=>(...e)=>{const i=t(...e);return u.set(i,!0),i},g=t=>"function"==typeof t&&u.has(t),m={},b={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class w{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let n,r=0,h=0,a=o.nextNode();for(;r<s.length;)if(n=s[r],l(n)){for(;h<n.index;)h++,"TEMPLATE"===a.nodeName&&(i.push(a),o.currentNode=a.content),null===(a=o.nextNode())&&(o.currentNode=i.pop(),a=o.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=` ${i} `;class y{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",o=!1;for(let n=0;n<t;n++){const t=this.strings[n],r=t.lastIndexOf("\x3c!--");o=(r>-1||o)&&-1===t.indexOf("--\x3e",r+1);const l=a.exec(t);e+=null===l?t+(o?x:s):t.substr(0,l.index)+l[1]+l[2]+"$lit$"+l[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=t=>null===t||!("object"==typeof t||"function"==typeof t),k=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new $(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(v(t)||!k(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||v(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class _{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=h()),t.s(this.endNode=h())}insertAfterPart(t){t.s(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.i);){const t=this.i;this.i=m,t(this)}const t=this.i;t!==m&&(v(t)?t!==this.value&&this.o(t):t instanceof y?this.l(t):t instanceof Node?this.h(t):k(t)?this.p(t):t===b?(this.value=b,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}h(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.h(document.createTextNode(i)),this.value=t}l(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const i=new w(e,t.processor,this.options),s=i._clone();i.update(t.values),this.h(s),this.value=i}}p(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const o of t)i=e[s],void 0===i&&(i=new _(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(o),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;g(this.i);){const t=this.i;this.i=m,t(this)}if(this.i===m)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=m}}class M extends S{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends ${}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class D{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.u=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;g(this.i);){const t=this.i;this.i=m,t(this)}if(this.i===m)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.u,this.g),s&&(this.g=z(t),this.element.addEventListener(this.eventName,this.u,this.g)),this.value=t,this.i=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const z=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function T(t){let e=P.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},P.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const o=t.strings.join(i);return s=e.keyString.get(o),void 0===s&&(s=new n(t,t.getTemplateElement()),e.keyString.set(o,s)),e.stringsArray.set(t.strings,s),s}const P=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const j=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,s){const o=e[0];if("."===o){return new M(t,e.slice(1),i).parts}return"@"===o?[new D(t,e.slice(1),s.eventContext)]:"?"===o?[new C(t,e.slice(1),i)]:new S(t,e,i).parts}handleTextExpression(t){return new _(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const U=(t,...e)=>new y(t,e,"html",j)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,N=(t,e)=>`${t}--${e}`;let W=!0;void 0===window.ShadyCSS?W=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),W=!1);const F=t=>e=>{const s=N(e.type,t);let o=P.get(s);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},P.set(s,o));let r=o.stringsArray.get(e.strings);if(void 0!==r)return r;const l=e.strings.join(i);if(r=o.keyString.get(l),void 0===r){const i=e.getTemplateElement();W&&window.ShadyCSS.prepareTemplateDom(i,t),r=new n(e,i),o.keyString.set(l,r)}return o.stringsArray.set(e.strings,r),r},V=["html","svg"],q=new Set,L=(t,e,i)=>{q.add(t);const s=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=o[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{V.forEach(e=>{const i=P.get(N(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),c(t,i)})})})(t);const l=s.content;i?function(t,e,i=null){const{element:{content:s},parts:o}=t;if(null==i)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let r=p(o),l=0,h=-1;for(;n.nextNode();){for(h++,n.currentNode===i&&(l=d(e),i.parentNode.insertBefore(e,i));-1!==r&&o[r].index===h;){if(l>0){for(;-1!==r;)o[r].index+=l,r=p(o,r);return}r=p(o,r)}}}(i,r,l.firstChild):l.insertBefore(r,l.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const h=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(i){l.insertBefore(r,l.firstChild);const t=new Set;t.add(r),c(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const I={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:J};class R extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=H){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||H}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=J){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||I,o="function"==typeof s?s:s.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||I.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=H){const s=this.constructor,o=s._attributeNameForProperty(t,i);if(void 0!==o){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const s=this.constructor,o=s.getPropertyOptions(t);s._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}R.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const B="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class G{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(B?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof G)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new G(i,K)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const X={};class Y extends R{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?B?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==X&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return X}}Y.finalized=!0,Y.render=(t,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const o=s.scopeName,n=O.has(i),r=W&&11===i.nodeType&&!!i.host,l=r&&!q.has(o),h=l?document.createDocumentFragment():i;if(((t,i,s)=>{let o=O.get(i);void 0===o&&(e(i,i.firstChild),O.set(i,o=new _(Object.assign({templateFactory:T},s))),o.appendInto(i)),o.setValue(t),o.commit()})(t,h,Object.assign({templateFactory:F(o)},s)),l){const t=O.get(h);O.delete(h);const s=t.value instanceof w?t.value.template:void 0;L(o,h,s),e(i,i.firstChild),i.appendChild(h),O.set(i,t)}!n&&r&&window.ShadyCSS.styleElement(i.host)};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Z=new WeakMap,tt=f(t=>e=>{if(!(e instanceof $)||e instanceof E||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:s}=i.element;let o=Z.get(e);void 0===o&&(s.cssText=i.strings.join(" "),Z.set(e,o=new Set)),o.forEach(e=>{e in t||(o.delete(e),-1===e.indexOf("-")?s[e]=null:s.removeProperty(e))});for(const e in t)o.add(e),-1===e.indexOf("-")?s[e]=t[e]:s.setProperty(e,t[e])});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class et{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const it=new WeakMap,st=f(t=>e=>{if(!(e instanceof $)||e instanceof E||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:s}=i;let o=it.get(e);void 0===o&&(s.setAttribute("class",i.strings.join(" ")),it.set(e,o=new Set));const n=s.classList||new et(s);o.forEach(e=>{e in t||(n.remove(e),o.delete(e))});for(const e in t){const i=t[e];i!=o.has(e)&&(i?(n.add(e),o.add(e)):(n.remove(e),o.delete(e)))}"function"==typeof n.commit&&n.commit()}),ot=(t,e)=>{const i=t.startNode.parentNode,s=void 0===e?t.endNode:e.startNode,o=i.insertBefore(h(),s);i.insertBefore(h(),s);const n=new _(t.options);return n.insertAfterNode(o),n},nt=(t,e)=>(t.setValue(e),t.commit(),t),rt=(t,e,i)=>{const s=t.startNode.parentNode,o=i?i.startNode:t.endNode,n=e.endNode.nextSibling;n!==o&&((t,e,i=null,s=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,s),e=i}})(s,e.startNode,n,o)},lt=t=>{e(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},ht=(t,e,i)=>{const s=new Map;for(let o=e;o<=i;o++)s.set(t[o],o);return s},at=new WeakMap,ct=new WeakMap,dt=f((t,e,i)=>{let s;return void 0===i?i=e:void 0!==e&&(s=e),e=>{if(!(e instanceof _))throw new Error("repeat can only be used in text bindings");const o=at.get(e)||[],n=ct.get(e)||[],r=[],l=[],h=[];let a,c,d=0;for(const e of t)h[d]=s?s(e,d):d,l[d]=i(e,d),d++;let p=0,u=o.length-1,f=0,g=l.length-1;for(;p<=u&&f<=g;)if(null===o[p])p++;else if(null===o[u])u--;else if(n[p]===h[f])r[f]=nt(o[p],l[f]),p++,f++;else if(n[u]===h[g])r[g]=nt(o[u],l[g]),u--,g--;else if(n[p]===h[g])r[g]=nt(o[p],l[g]),rt(e,o[p],r[g+1]),p++,g--;else if(n[u]===h[f])r[f]=nt(o[u],l[f]),rt(e,o[u],o[p]),u--,f++;else if(void 0===a&&(a=ht(h,f,g),c=ht(n,p,u)),a.has(n[p]))if(a.has(n[u])){const t=c.get(h[f]),i=void 0!==t?o[t]:null;if(null===i){const t=ot(e,o[p]);nt(t,l[f]),r[f]=t}else r[f]=nt(i,l[f]),rt(e,i,o[p]),o[t]=null;f++}else lt(o[u]),u--;else lt(o[p]),p++;for(;f<=g;){const t=ot(e,r[g+1]);nt(t,l[f]),r[f++]=t}for(;p<=u;){const t=o[p++];null!==t&&lt(t)}at.set(e,r),ct.set(e,h)}}),pt={fetch:function(){const t=JSON.parse(localStorage.getItem("todos-lit-element")||"[]");return t.forEach((function(t,e){t.id=e})),pt.uid=t.length,t},save:function(t){localStorage.setItem("todos-lit-element",JSON.stringify(t))}},ut={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.completed}))},completed:function(t){return t.filter((function(t){return t.completed}))},pluralize:function(t){return 1===t?"item":"items"}};class ft extends Y{static get styles(){return Q`
      :host {
        font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        line-height: 1.4em;
        background: #f5f5f5;
        color: #4d4d4d;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 300;
      }
      
      button {
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        font-size: 100%;
        vertical-align: baseline;
        font-family: inherit;
        font-weight: inherit;
        color: inherit;
        -webkit-appearance: none;
        appearance: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :focus {
        outline: 0;
      }

      .hidden {
        display: none;
      }

      .todoapp {
        background: #fff;
        margin: 130px 0 40px 0;
        position: relative;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                    0 25px 50px 0 rgba(0, 0, 0, 0.1);
      }

      .todoapp input::-webkit-input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }

      .todoapp input::-moz-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }

      .todoapp input::input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
      }

      .todoapp h1 {
        position: absolute;
        top: -155px;
        width: 100%;
        font-size: 100px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
        -webkit-text-rendering: optimizeLegibility;
        -moz-text-rendering: optimizeLegibility;
        text-rendering: optimizeLegibility;
      }

      .new-todo,
      .edit {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .new-todo {
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
      }

      .main {
        position: relative;
        z-index: 2;
        border-top: 1px solid #e6e6e6;
      }

      .toggle-all {
        width: 1px;
        height: 1px;
        border: none; /* Mobile Safari */
        opacity: 0;
        position: absolute;
        right: 100%;
        bottom: 100%;
      }

      .toggle-all + label {
        width: 60px;
        height: 34px;
        font-size: 0;
        position: absolute;
        top: -52px;
        left: -13px;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }

      .toggle-all + label:before {
        content: '❯';
        font-size: 22px;
        color: #e6e6e6;
        padding: 10px 27px 10px 27px;
      }

      .toggle-all:checked + label:before {
        color: #737373;
      }

      .todo-list {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .todo-list li {
        position: relative;
        font-size: 24px;
        border-bottom: 1px solid #ededed;
      }

      .todo-list li:last-child {
        border-bottom: none;
      }

      .todo-list li.editing {
        border-bottom: none;
        padding: 0;
      }

      .todo-list li.editing .edit {
        display: block;
        width: calc(100% - 43px);
        padding: 12px 16px;
        margin: 0 0 0 43px;
      }

      .todo-list li.editing .view {
        display: none;
      }

      .todo-list li .toggle {
        text-align: center;
        width: 40px;
        /* auto, since non-WebKit browsers doesn't support input styling */
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        border: none; /* Mobile Safari */
        -webkit-appearance: none;
        appearance: none;
      }

      .todo-list li .toggle {
        opacity: 0;
      }

      .todo-list li .toggle + label {
        /*
          Firefox requires "#" to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
          IE and Edge requires *everything* to be escaped to render, so we do that instead of just the "#" - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
        */
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
        background-repeat: no-repeat;
        background-position: center left;
      }

      .todo-list li .toggle:checked + label {
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
      }

      .todo-list li label {
        word-break: break-all;
        padding: 15px 15px 15px 60px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
      }

      .todo-list li.completed label {
        color: #d9d9d9;
        text-decoration: line-through;
      }

      .todo-list li .destroy {
        display: none;
        position: absolute;
        top: 0;
        right: 10px;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto 0;
        font-size: 30px;
        color: #cc9a9a;
        margin-bottom: 11px;
        transition: color 0.2s ease-out;
      }

      .todo-list li .destroy:hover {
        color: #af5b5e;
      }

      .todo-list li .destroy:after {
        content: '×';
      }

      .todo-list li:hover .destroy {
        display: block;
      }

      .todo-list li .edit {
        display: none;
      }

      .todo-list li.editing:last-child {
        margin-bottom: -1px;
      }

      .footer {
        color: #777;
        padding: 10px 15px;
        height: 20px;
        text-align: center;
        border-top: 1px solid #e6e6e6;
      }

      .footer:before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                    0 8px 0 -3px #f6f6f6,
                    0 9px 1px -3px rgba(0, 0, 0, 0.2),
                    0 16px 0 -6px #f6f6f6,
                    0 17px 2px -6px rgba(0, 0, 0, 0.2);
      }

      .todo-count {
        float: left;
        text-align: left;
      }

      .todo-count strong {
        font-weight: 300;
      }

      .filters {
        margin: 0;
        padding: 0;
        list-style: none;
        position: absolute;
        right: 0;
        left: 0;
      }

      .filters li {
        display: inline;
      }

      .filters li a {
        color: inherit;
        margin: 3px;
        padding: 3px 7px;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 3px;
      }

      .filters li a:hover {
        border-color: rgba(175, 47, 47, 0.1);
      }

      .filters li a.selected {
        border-color: rgba(175, 47, 47, 0.2);
      }

      .clear-completed,
      html .clear-completed:active {
        float: right;
        position: relative;
        line-height: 20px;
        text-decoration: none;
        cursor: pointer;
      }

      .clear-completed:hover {
        text-decoration: underline;
      }

      .info {
        margin: 65px auto 0;
        color: #bfbfbf;
        font-size: 10px;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
        text-align: center;
      }

      .info p {
        line-height: 1;
      }

      .info a {
        color: inherit;
        text-decoration: none;
        font-weight: 400;
      }

      .info a:hover {
        text-decoration: underline;
      }

      /*
        Hack to remove background from Mobile Safari.
        Can't use it globally since it destroys checkboxes in Firefox
      */
      @media screen and (-webkit-min-device-pixel-ratio:0) {
        .toggle-all,
        .todo-list li .toggle {
          background: none;
        }

        .todo-list li .toggle {
          height: 40px;
        }
      }

      @media (max-width: 430px) {
        .footer {
          height: 50px;
        }

        .filters {
          bottom: 10px;
        }
      }
    `}static get properties(){return{todos:{type:Array},newTodo:{type:String},editedTodo:{type:Object},visibility:{type:String}}}constructor(){super(),this.todos=pt.fetch(),this.newTodo="",this.editedTodo=null,this.visibility="all"}render(){return U`
      <div class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <input
            class="new-todo"
            autofocus
            autocomplete="off"
            placeholder="What needs to be done?"
            .value=${this.newTodo}
            @input=${t=>{this.newTodo=t.target.value}}
            @keyup=${t=>{13===t.keyCode&&this.addTodo()}}
          >
        </header>
        <section class="main" style=${tt({display:this.todos.length?"":"none"})}>
          <input
            id="toggle-all"
            class="toggle-all"
            type="checkbox"
            ?checked=${this.allDone}
            @change=${t=>{this.toggleTodoAll(t.target.checked)}}
          >
          <label for="toggle-all"></label>
          <ul class="todo-list">

          ${dt(this.filteredTodos,t=>t.id,(t,e)=>U`
            <li
              class="${st({todo:!0,completed:t.completed,editing:t==this.editedTodo})}"
            >
              <div class="view">
                <input class="toggle" type="checkbox" ?checked=${t.completed} @change=${()=>{this.toggleTodo(t)}}>
                <label @dblclick=${()=>{this.editTodo(t)}}>${t.title}</label>
                <button class="destroy" @click=${()=>{this.removeTodo(t)}}></button>
              </div>
              <input
                class="edit"
                type="text"
                .value=${t.title}
                @input=${e=>{t.title=e.target.value}}
                @blur=${()=>{this.doneEdit(t)}}
                @keyup=${e=>{13===e.keyCode&&this.doneEdit(t),27===e.keyCode&&this.cancelEdit(t)}}
              >
            </li>
          `)}
          </ul>
        </section>
        <footer class="footer" style=${tt({display:this.todos.length?"":"none"})}>
          <span class="todo-count">
            <strong>${this.remaining}</strong> ${ut.pluralize(this.remaining)} left
          </span>
          <ul class="filters">
            <li>
              <a
                href="#/all"
                @click=${()=>{this.visibility="all"}}
                class=${st({selected:"all"==this.visibility})}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/active"
                @click=${()=>{this.visibility="active"}}
                class=${st({selected:"active"==this.visibility})}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/completed"
                @click=${()=>{this.visibility="completed"}}
                class=${st({selected:"completed"==this.visibility})}
              >
                Completed
              </a>
            </li>
          </ul>
          <button
            class="clear-completed"
            @click=${this.removeCompleted}
            style="${tt({display:this.todos.length>this.remaining?"":"none"})}"
          >
            Clear completed
          </button>
        </footer>
      </div>
      <footer class="info">
        <p>Double-click to edit a todo</p>
        <p>Written by <a href="https://github.com/aui">Aui</a></p>
        <p>Part of <a href="https://todomvc.com">TodoMVC</a></p>
      </footer>
    `}get filteredTodos(){return ut[this.visibility](this.todos)}get remaining(){return ut.active(this.todos).length}get allDone(){return 0===this.remaining}set allDone(t){this.todos.forEach((function(e){e.completed=t}))}save(){pt.save(this.todos),this.requestUpdate()}toggleTodo(t){t.completed=!t.completed,this.save()}toggleTodoAll(t){this.allDone=t,this.save()}addTodo(){const t=this.newTodo&&this.newTodo.trim();t&&(this.todos.push({id:pt.uid++,title:t,completed:!1}),this.newTodo="",this.save())}removeTodo(t){this.todos.splice(this.todos.indexOf(t),1),this.save()}editTodo(t){this.beforeEditCache=t.title,this.editedTodo=t}doneEdit(t){this.editedTodo&&(this.editedTodo=null,t.title=t.title.trim(),t.title||this.removeTodo(t),this.save())}cancelEdit(t){this.editedTodo=null,t.title=this.beforeEditCache}removeCompleted(){this.todos=ut.active(this.todos),this.save()}todoFocus(t,e){e&&t.focus()}}window.customElements.define("my-todo",ft);export{ft as MyTodo};
