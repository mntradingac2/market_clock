true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
            fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
            fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (link.crossOrigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

const blueprint = '';

const blueprintIcons = '';

var n$1,l$3,u$2,t$2,i$2,o$2,r$1,f$2,c$2={},s$3=[],a$2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h$1=Array.isArray;function v$2(n,l){for(var u in l)n[u]=l[u];return n}function p$3(n){var l=n.parentNode;l&&l.removeChild(n);}function y$2(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$3(l,f,i,o,null)}function d$3(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$2:r};return null==r&&null!=l$3.vnode&&l$3.vnode(f),f}function k$2(n){return n.children}function b$2(n,l){this.props=n,this.context=l;}function g$3(n,l){if(null==l)return n.__?g$3(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?g$3(n):null}function m$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m$1(n)}}function w$3(n){(!n.__d&&(n.__d=!0)&&i$2.push(n)&&!x$1.__r++||o$2!==l$3.debounceRendering)&&((o$2=l$3.debounceRendering)||r$1)(x$1);}function x$1(){var n,l,u,t,o,r,e,c,s;for(i$2.sort(f$2);n=i$2.shift();)n.__d&&(l=i$2.length,t=void 0,o=void 0,r=void 0,c=(e=(u=n).__v).__e,(s=u.__P)&&(t=[],o=[],(r=v$2({},e)).__v=e.__v+1,L$1(s,e,r,u.__n,void 0!==s.ownerSVGElement,null!=e.__h?[c]:null,t,null==c?g$3(e):c,e.__h,o),M(t,e,o),e.__e!=c&&m$1(e)),i$2.length>l&&i$2.sort(f$2));x$1.__r=0;}function P(n,l,u,t,i,o,r,f,e,a,v){var p,y,_,b,m,w,x,P,C,H=0,I=t&&t.__k||s$3,T=I.length,j=T,z=l.length;for(u.__k=[],p=0;p<z;p++)null!=(b=u.__k[p]=null==(b=l[p])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?d$3(null,b,null,null,b):h$1(b)?d$3(k$2,{children:b},null,null,null):b.__b>0?d$3(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)?(b.__=u,b.__b=u.__b+1,-1===(P=A(b,I,x=p+H,j))?_=c$2:(_=I[P]||c$2,I[P]=void 0,j--),L$1(n,b,_,i,o,r,f,e,a,v),m=b.__e,(y=b.ref)&&_.ref!=y&&(_.ref&&O(_.ref,null,b),v.push(y,b.__c||m,b)),null!=m&&(null==w&&(w=m),(C=_===c$2||null===_.__v)?-1==P&&H--:P!==x&&(P===x+1?H++:P>x?j>z-x?H+=P-x:H--:H=P<x&&P==x-1?P-x:0),x=p+H,"function"!=typeof b.type||P===x&&_.__k!==b.__k?"function"==typeof b.type||P===x&&!C?void 0!==b.__d?(e=b.__d,b.__d=void 0):e=m.nextSibling:e=S(n,m,e):e=$$1(b,e,n),"function"==typeof u.type&&(u.__d=e))):(_=I[p])&&null==_.key&&_.__e&&(_.__e==e&&(e=g$3(_)),q$1(_,_,!1),I[p]=null);for(u.__e=w,p=T;p--;)null!=I[p]&&("function"==typeof u.type&&null!=I[p].__e&&I[p].__e==u.__d&&(u.__d=I[p].__e.nextSibling),q$1(I[p],I[p]));}function $$1(n,l,u){for(var t,i=n.__k,o=0;i&&o<i.length;o++)(t=i[o])&&(t.__=n,l="function"==typeof t.type?$$1(t,l,u):S(u,t.__e,l));return l}function C$1(n,l){return l=l||[],null==n||"boolean"==typeof n||(h$1(n)?n.some(function(n){C$1(n,l);}):l.push(n)),l}function S(n,l,u){return null==u||u.parentNode!==n?n.insertBefore(l,null):l==u&&null!=l.parentNode||n.insertBefore(l,u),l.nextSibling}function A(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type)return u;if(t>(null!=e?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&i==e.key&&o===e.type)return f;f++;}}return -1}function H$1(n,l,u,t,i){var o;for(o in u)"children"===o||"key"===o||o in l||T$1(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||T$1(n,o,l[o],u[o],t);}function I$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$2.test(l)?u:u+"px";}function T$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||I$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||I$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/,"$1")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t||n.addEventListener(l,o?z$1:j$1,o):n.removeEventListener(l,o?z$1:j$1,o);else if("dangerouslySetInnerHTML"!==l){if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function j$1(n){return this.l[n.type+!1](l$3.event?l$3.event(n):n)}function z$1(n){return this.l[n.type+!0](l$3.event?l$3.event(n):n)}function L$1(n,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,g,m,w,x,$,C,S,A,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=t.__h&&(c=t.__h,e=u.__e=t.__e,u.__h=null,r=[e]),(a=l$3.__b)&&a(u);n:if("function"==typeof T)try{if(w=u.props,x=(a=T.contextType)&&i[a.__c],$=a?x?x.props.value:a.__:i,t.__c?m=(p=u.__c=t.__c).__=p.__E:("prototype"in T&&T.prototype.render?u.__c=p=new T(w,$):(u.__c=p=new b$2(w,$),p.constructor=T,p.render=B$2),x&&x.sub(p),p.props=w,p.state||(p.state={}),p.context=$,p.__n=i,y=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=T.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v$2({},p.__s)),v$2(p.__s,T.getDerivedStateFromProps(w,p.__s))),d=p.props,_=p.state,p.__v=u,y)null==T.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(null==T.getDerivedStateFromProps&&w!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,$),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,$)||u.__v===t.__v)){for(u.__v!==t.__v&&(p.props=w,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),C=0;C<p._sb.length;C++)p.__h.push(p._sb[C]);p._sb=[],p.__h.length&&f.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,$),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,g);});}if(p.context=$,p.props=w,p.__P=n,p.__e=!1,S=l$3.__r,A=0,"prototype"in T&&T.prototype.render){for(p.state=p.__s,p.__d=!1,S&&S(u),a=p.render(p.props,p.state,p.context),H=0;H<p._sb.length;H++)p.__h.push(p._sb[H]);p._sb=[];}else do{p.__d=!1,S&&S(u),a=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++A<25);p.state=p.__s,null!=p.getChildContext&&(i=v$2(v$2({},i),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(d,_)),P(n,h$1(I=null!=a&&a.type===k$2&&null==a.key?a.props.children:a)?I:[I],u,t,i,o,r,f,e,c,s),p.base=u.__e,u.__h=null,p.__h.length&&f.push(p),m&&(p.__E=p.__=null);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$3.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=N$1(t.__e,u,t,i,o,r,f,c,s);(a=l$3.diffed)&&a(u);}function M(n,u,t){for(var i=0;i<t.length;i++)O(t[i],t[++i],t[++i]);l$3.__c&&l$3.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$3.__e(n,u.__v);}});}function N$1(l,u,t,i,o,r,f,e,s){var a,v,y,d=t.props,_=u.props,k=u.type,b=0;if("svg"===k&&(o=!0),null!=r)for(;b<r.length;b++)if((a=r[b])&&"setAttribute"in a==!!k&&(k?a.localName===k:3===a.nodeType)){l=a,r[b]=null;break}if(null==l){if(null===k)return document.createTextNode(_);l=o?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,_.is&&_),r=null,e=!1;}if(null===k)d===_||e&&l.data===_||(l.data=_);else {if(r=r&&n$1.call(l.childNodes),v=(d=t.props||c$2).dangerouslySetInnerHTML,y=_.dangerouslySetInnerHTML,!e){if(null!=r)for(d={},b=0;b<l.attributes.length;b++)d[l.attributes[b].name]=l.attributes[b].value;(y||v)&&(y&&(v&&y.__html==v.__html||y.__html===l.innerHTML)||(l.innerHTML=y&&y.__html||""));}if(H$1(l,_,d,o,e),y)u.__k=[];else if(P(l,h$1(b=u.props.children)?b:[b],u,t,i,o&&"foreignObject"!==k,r,f,r?r[0]:t.__k&&g$3(t,0),e,s),null!=r)for(b=r.length;b--;)null!=r[b]&&p$3(r[b]);e||("value"in _&&void 0!==(b=_.value)&&(b!==l.value||"progress"===k&&!b||"option"===k&&b!==d.value)&&T$1(l,"value",b,d.value,!1),"checked"in _&&void 0!==(b=_.checked)&&b!==l.checked&&T$1(l,"checked",b,d.checked,!1));}return l}function O(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$3.__e(n,t);}}function q$1(n,u,t){var i,o;if(l$3.unmount&&l$3.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||O(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$3.__e(n,u);}i.base=i.__P=null,n.__c=void 0;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q$1(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p$3(n.__e),n.__=n.__e=n.__d=void 0;}function B$2(n,l,u){return this.constructor(n,u)}function D$1(u,t,i){var o,r,f,e;l$3.__&&l$3.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],L$1(t,u=(!o&&i||t).__k=y$2(k$2,null,[u]),r||c$2,c$2,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n$1.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),M(f,u,e);}n$1=s$3.slice,l$3={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$2=0,t$2=function(n){return null!=n&&void 0===n.constructor},b$2.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v$2({},this.state),"function"==typeof n&&(n=n(v$2({},u),this.props)),n&&v$2(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w$3(this));},b$2.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w$3(this));},b$2.prototype.render=k$2,i$2=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$2=function(n,l){return n.__v.__b-l.__v.__b},x$1.__r=0;

var t$1,r,u$1,i$1,o$1=0,f$1=[],c$1=[],e$1=l$3.__b,a$1=l$3.__r,v$1=l$3.diffed,l$2=l$3.__c,m=l$3.unmount;function d$2(t,u){l$3.__h&&l$3.__h(r,t,o$1||u),o$1=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c$1}),i.__[t]}function h(n){return o$1=1,s$2(B$1,n)}function s$2(n,u,i){var o=d$2(t$1++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B$1(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function p$2(u,i){var o=d$2(t$1++,3);!l$3.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function y$1(u,i){var o=d$2(t$1++,4);!l$3.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__h.push(o));}function _$3(n){return o$1=5,F$1(function(){return {current:n}},[])}function F$1(n,r){var u=d$2(t$1++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function b$1(){for(var t;t=f$1.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k$1),t.__H.__h.forEach(w$2),t.__H.__h=[];}catch(r){t.__H.__h=[],l$3.__e(r,t.__v);}}l$3.__b=function(n){r=null,e$1&&e$1(n);},l$3.__r=function(n){a$1&&a$1(n),t$1=0;var i=(r=n.__c).__H;i&&(u$1===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c$1,n.__N=n.i=void 0;})):(i.__h.forEach(k$1),i.__h.forEach(w$2),i.__h=[],t$1=0)),u$1=r;},l$3.diffed=function(t){v$1&&v$1(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f$1.push(o)&&i$1===l$3.requestAnimationFrame||((i$1=l$3.requestAnimationFrame)||j)(b$1)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c$1&&(n.__=n.__V),n.i=void 0,n.__V=c$1;})),u$1=r=null;},l$3.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k$1),t.__h=t.__h.filter(function(n){return !n.__||w$2(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$3.__e(u,t.__v);}}),l$2&&l$2(t,r);},l$3.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k$1(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$3.__e(r,u.__v));};var g$2="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g$2&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$2&&(t=requestAnimationFrame(r));}function k$1(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w$2(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B$1(n,t){return "function"==typeof t?t(n):t}

function i(){throw new Error("Cycle detected")}function t(){if(!(f>1)){var i,t=!1;while(void 0!==s$1){var r=s$1;s$1=void 0;v++;while(void 0!==r){var n=r.o;r.o=void 0;r.f&=-3;if(!(8&r.f)&&a(r))try{r.c();}catch(r){if(!t){i=r;t=!0;}}r=n;}}v=0;f--;if(t)throw i}else f--;}var n=void 0;var s$1=void 0,f=0,v=0,e=0;function u(i){if(void 0!==n){var t=i.n;if(void 0===t||t.t!==n){t={i:0,S:i,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:t};if(void 0!==n.s)n.s.n=t;n.s=t;i.n=t;if(32&n.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=n.s;t.n=void 0;n.s.n=t;n.s=t;}return t}}}function c(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0;}c.prototype.h=function(){return !0};c.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i;}};c.prototype.U=function(i){if(void 0!==this.t){var t=i.e,r=i.x;if(void 0!==t){t.x=r;i.e=void 0;}if(void 0!==r){r.e=t;i.x=void 0;}if(i===this.t)this.t=r;}};c.prototype.subscribe=function(i){var t=this;return E(function(){var r=t.value,n=32&this.f;this.f&=-33;try{i(r);}finally{this.f|=n;}})};c.prototype.valueOf=function(){return this.value};c.prototype.toString=function(){return this.value+""};c.prototype.toJSON=function(){return this.value};c.prototype.peek=function(){return this.v};Object.defineProperty(c.prototype,"value",{get:function(){var i=u(this);if(void 0!==i)i.i=this.i;return this.v},set:function(r){if(n instanceof y)!function(){throw new Error("Computed cannot have side-effects")}();if(r!==this.v){if(v>100)i();this.v=r;this.i++;e++;f++;try{for(var o=this.t;void 0!==o;o=o.x)o.t.N();}finally{t();}}}});function d$1(i){return new c(i)}function a(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return !0;return !1}function l$1(i){for(var t=i.s;void 0!==t;t=t.n){var r=t.S.n;if(void 0!==r)t.r=r;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function w$1(i){var t=i.s,r=void 0;while(void 0!==t){var n=t.p;if(-1===t.i){t.S.U(t);if(void 0!==n)n.n=t.n;if(void 0!==t.n)t.n.p=n;}else r=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=n;}i.s=r;}function y(i){c.call(this,void 0);this.x=i;this.s=void 0;this.g=e-1;this.f=4;}(y.prototype=new c).h=function(){this.f&=-3;if(1&this.f)return !1;if(32==(36&this.f))return !0;this.f&=-5;if(this.g===e)return !0;this.g=e;this.f|=1;if(this.i>0&&!a(this)){this.f&=-2;return !0}var i=n;try{l$1(this);n=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}n=i;w$1(this);this.f&=-2;return !0};y.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t);}c.prototype.S.call(this,i);};y.prototype.U=function(i){if(void 0!==this.t){c.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t);}}};y.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N();}};y.prototype.peek=function(){if(!this.h())i();if(16&this.f)throw this.v;return this.v};Object.defineProperty(y.prototype,"value",{get:function(){if(1&this.f)i();var t=u(this);this.h();if(void 0!==t)t.i=this.i;if(16&this.f)throw this.v;return this.v}});function _$2(i){return new y(i)}function p$1(i){var r=i.u;i.u=void 0;if("function"==typeof r){f++;var o=n;n=void 0;try{r();}catch(t){i.f&=-2;i.f|=8;g$1(i);throw t}finally{n=o;t();}}}function g$1(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;p$1(i);}function b(i){if(n!==this)throw new Error("Out-of-order effect");w$1(this);n=i;this.f&=-2;if(8&this.f)g$1(this);t();}function x(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32;}x.prototype.c=function(){var i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();if("function"==typeof t)this.u=t;}finally{i();}};x.prototype.S=function(){if(1&this.f)i();this.f|=1;this.f&=-9;p$1(this);l$1(this);f++;var t=n;n=this;return b.bind(this,t)};x.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=s$1;s$1=this;}};x.prototype.d=function(){this.f|=8;if(!(1&this.f))g$1(this);};function E(i){var t=new x(i);try{t.c();}catch(i){t.d();throw i}return t.d.bind(t)}

var s;function l(n,i){l$3[n]=i.bind(null,l$3[n]||function(){});}function d(n){if(s)s();s=n&&n.S();}function p(n){var r=this,f=n.data,o=useSignal(f);o.value=f;var e=F$1(function(){var n=r.__v;while(n=n.__)if(n.__c){n.__c.__$f|=4;break}r.__$u.c=function(){var n;if(!t$2(e.peek())&&3===(null==(n=r.base)?void 0:n.nodeType))r.base.data=e.peek();else {r.__$f|=1;r.setState({});}};return _$2(function(){var n=o.value.value;return 0===n?0:!0===n?"":n||""})},[]);return e.value}p.displayName="_st";Object.defineProperties(c.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:p},props:{configurable:!0,get:function(){return {data:this}}},__b:{configurable:!0,value:1}});l("__b",function(n,r){if("string"==typeof r.type){var i,t=r.props;for(var f in t)if("children"!==f){var o=t[f];if(o instanceof c){if(!i)r.__np=i={};i[f]=o;t[f]=o.peek();}}}n(r);});l("__r",function(n,r){d();var i,t=r.__c;if(t){t.__$f&=-2;if(void 0===(i=t.__$u))t.__$u=i=function(n){var r;E(function(){r=this;});r.c=function(){t.__$f|=1;t.setState({});};return r}();}d(i);n(r);});l("__e",function(n,r,i,t){d();n(r,i,t);});l("diffed",function(n,r){d();var i;if("string"==typeof r.type&&(i=r.__e)){var t=r.__np,f=r.props;if(t){var o=i.U;if(o)for(var e in o){var u=o[e];if(void 0!==u&&!(e in t)){u.d();o[e]=void 0;}}else i.U=o={};for(var a in t){var c=o[a],s=t[a];if(void 0===c){c=_$1(i,a,s,f);o[a]=c;}else c.o(s,f);}}}n(r);});function _$1(n,r,i,t){var f=r in n&&void 0===n.ownerSVGElement,o=d$1(i);return {o:function(n,r){o.value=n;t=r;},d:E(function(){var i=o.value.value;if(t[r]!==i){t[r]=i;if(f)n[r]=i;else if(i)n.setAttribute(r,i);else n.removeAttribute(r);}})}}l("unmount",function(n,r){if("string"==typeof r.type){var i=r.__e;if(i){var t=i.U;if(t){i.U=void 0;for(var f in t){var o=t[f];if(o)o.d();}}}}else {var e=r.__c;if(e){var u=e.__$u;if(u){e.__$u=void 0;u.d();}}}n(r);});l("__h",function(n,r,i,t){if(t<3||9===t)r.__$f|=2;n(r,i,t);});b$2.prototype.shouldComponentUpdate=function(n,r){var i=this.__$u;if(!(i&&void 0!==i.s||4&this.__$f))return !0;if(3&this.__$f)return !0;for(var t in r)return !0;for(var f in n)if("__source"!==f&&n[f]!==this.props[f])return !0;for(var o in this.props)if(!(o in n))return !0;return !1};function useSignal(n){return F$1(function(){return d$1(n)},[])}

/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// tslint:disable:object-literal-sort-keys
var Elevation = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
};

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// tslint:disable:object-literal-sort-keys
/**
 * The four basic intents.
 */
var Intent = {
    NONE: "none",
    PRIMARY: "primary",
    SUCCESS: "success",
    WARNING: "warning",
    DANGER: "danger",
};

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var NS$1 = "bp5";
if (typeof BLUEPRINT_NAMESPACE !== "undefined") {
    NS$1 = BLUEPRINT_NAMESPACE;
}
else if (typeof REACT_APP_BLUEPRINT_NAMESPACE !== "undefined") {
    NS$1 = REACT_APP_BLUEPRINT_NAMESPACE;
}
// modifiers
var ACTIVE = "".concat(NS$1, "-active");
var FILL = "".concat(NS$1, "-fill");
var INTERACTIVE = "".concat(NS$1, "-interactive");
var LARGE = "".concat(NS$1, "-large");
var MINIMAL = "".concat(NS$1, "-minimal");
var ROUND = "".concat(NS$1, "-round");
intentClass(Intent.PRIMARY);
intentClass(Intent.SUCCESS);
intentClass(Intent.WARNING);
intentClass(Intent.DANGER);
var TEXT_OVERFLOW_ELLIPSIS = "".concat(NS$1, "-text-overflow-ellipsis");
var CARD = "".concat(NS$1, "-card");
var TAG = "".concat(NS$1, "-tag");
var TAG_REMOVE = "".concat(TAG, "-remove");
var ICON$1 = "".concat(NS$1, "-icon");
var ICON_STANDARD = "".concat(ICON$1, "-standard");
var ICON_LARGE = "".concat(ICON$1, "-large");
function elevationClass(elevation) {
    if (elevation === undefined) {
        return undefined;
    }
    return "".concat(NS$1, "-elevation-").concat(elevation);
}
function iconClass(iconName) {
    if (iconName == null) {
        return undefined;
    }
    return iconName.indexOf("".concat(NS$1, "-icon-")) === 0 ? iconName : "".concat(NS$1, "-icon-").concat(iconName);
}
function intentClass(intent) {
    if (intent == null || intent === Intent.NONE) {
        return undefined;
    }
    return "".concat(NS$1, "-intent-").concat(intent.toLowerCase());
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


var __assign$3 = function() {
  __assign$3 = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign$3.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function w(n){this.props=n;}(w.prototype=new b$2).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var R=l$3.__b;l$3.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k(n){function t(t){var e=g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=N,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var T=l$3.__e;l$3.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r);};var F=l$3.unmount;function I(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return I(n,t,e)})),n}function L(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function U(){this.__u=0,this.t=null,this.__b=null;}function D(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function V(){this.u=null,this.o=null;}l$3.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),F&&F(n);},(U.prototype=new b$2).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=D(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=L(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},U.prototype.componentWillUnmount=function(){this.t=[];},U.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=I(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&y$2(k$2,null,n.fallback);return i&&(i.__h=null),[y$2(k$2,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(V.prototype=new b$2).__a=function(n){var t=this,e=D(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u();};e?e(o):o();}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=C$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t);});};var B="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,H=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Z=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Y=/[A-Z0-9]/g,$="undefined"!=typeof document,q=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};b$2.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(b$2.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var K=l$3.event;function Q(){}function X(){return this.cancelBubble}function nn(){return this.defaultPrevented}l$3.event=function(n){return K&&(n=K(n)),n.persist=Q,n.isPropagationStopped=X,n.isDefaultPrevented=nn,n.nativeEvent=n};var en={enumerable:!1,configurable:!0,get:function(){return this.class}},rn=l$3.vnode;l$3.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||$&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||q(t.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":Z.test(o)?o=l:-1===e.indexOf("-")&&H.test(o)?o=o.replace(Y,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i;}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=C$1(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==e&&null!=u.defaultValue&&(u.value=C$1(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",en)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=B,rn&&rn(n);};var un=l$3.__r;l$3.__r=function(n){un&&un(n),n.__c;};var on=l$3.diffed;l$3.diffed=function(n){on&&on(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value);};

/*
 * Copyright 2020 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns whether the value is a function. Acts as a type guard. */
/* istanbul ignore next */
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(value) {
    return typeof value === "function";
}

/*
 * Copyright 2020 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns true if `node` is null/undefined, false, empty string, or an array
 * composed of those. If `node` is an array, only one level of the array is
 * checked, for performance reasons.
 */
function isReactNodeEmpty(node, skipArray) {
    if (skipArray === void 0) { skipArray = false; }
    return (node == null ||
        node === "" ||
        node === false ||
        (!skipArray &&
            Array.isArray(node) &&
            // only recurse one level through arrays, for performance
            (node.length === 0 || node.every(function (n) { return isReactNodeEmpty(n, true); }))));
}

/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DISPLAYNAME_PREFIX = "Blueprint5";
/** A collection of curated prop keys used across our Components which are not valid HTMLElement props. */
var INVALID_PROPS = [
    "active",
    "alignText",
    "asyncControl",
    "containerRef",
    "current",
    "elementRef",
    "fill",
    "icon",
    "iconSize",
    "inputClassName",
    "inputRef",
    "intent",
    "inline",
    "large",
    "loading",
    "leftElement",
    "leftIcon",
    "minimal",
    "onRemove",
    "outlined",
    "panel",
    "panelClassName",
    "popoverProps",
    "rightElement",
    "rightIcon",
    "round",
    "size",
    "small",
    "tagName",
    "text",
];
/**
 * Typically applied to HTMLElements to filter out disallowed props. When applied to a Component,
 * can filter props from being passed down to the children. Can also filter by a combined list of
 * supplied prop keys and the denylist (only appropriate for HTMLElements).
 *
 * @param props The original props object to filter down.
 * @param {string[]} invalidProps If supplied, overwrites the default denylist.
 * @param {boolean} shouldMerge If true, will merge supplied invalidProps and denylist together.
 */
function removeNonHTMLProps(props, invalidProps, shouldMerge) {
    if (invalidProps === void 0) { invalidProps = INVALID_PROPS; }
    if (shouldMerge === void 0) { shouldMerge = false; }
    if (shouldMerge) {
        invalidProps = invalidProps.concat(INVALID_PROPS);
    }
    return invalidProps.reduce(function (prev, curr) {
        // Props with hyphens (e.g. data-*) are always considered html props
        if (curr.indexOf("-") !== -1) {
            return prev;
        }
        if (prev.hasOwnProperty(curr)) {
            delete prev[curr];
        }
        return prev;
    }, __assign$3({}, props));
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
const classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign$2 = function() {
  __assign$2 = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign$2.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}

function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign$2({ delimiter: "", transform: pascalCaseTransform }, options));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign$1 = function() {
  __assign$1 = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign$1.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign$1({ delimiter: "." }, options));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function snakeCase(input, options) {
    if (options === void 0) { options = {}; }
    return dotCase(input, __assign({ delimiter: "_" }, options));
}

/*
 * Copyright 2022 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IconSize;
(function (IconSize) {
    IconSize[IconSize["STANDARD"] = 16] = "STANDARD";
    IconSize[IconSize["LARGE"] = 20] = "LARGE";
})(IconSize || (IconSize = {}));

const scriptRel = 'modulepreload';const assetsURL = function(dep, importerUrl) { return new URL(dep, importerUrl).href };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
    // @ts-expect-error true will be replaced with boolean later
    if (!true || !deps || deps.length === 0) {
        return baseModule();
    }
    const links = document.getElementsByTagName('link');
    return Promise.all(deps.map((dep) => {
        // @ts-expect-error assetsURL is declared before preload.toString()
        dep = assetsURL(dep, importerUrl);
        if (dep in seen)
            return;
        seen[dep] = true;
        const isCss = dep.endsWith('.css');
        const cssSelector = isCss ? '[rel="stylesheet"]' : '';
        const isBaseRelative = !!importerUrl;
        // check if the file is already preloaded by SSR markup
        if (isBaseRelative) {
            // When isBaseRelative is true then we have `importerUrl` and `dep` is
            // already converted to an absolute URL by the `assetsURL` function
            for (let i = links.length - 1; i >= 0; i--) {
                const link = links[i];
                // The `links[i].href` is an absolute URL thanks to browser doing the work
                // for us. See https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes:idl-domstring-5
                if (link.href === dep && (!isCss || link.rel === 'stylesheet')) {
                    return;
                }
            }
        }
        else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
            return;
        }
        const link = document.createElement('link');
        link.rel = isCss ? 'stylesheet' : scriptRel;
        if (!isCss) {
            link.as = 'script';
            link.crossOrigin = '';
        }
        link.href = dep;
        document.head.appendChild(link);
        if (isCss) {
            return new Promise((res, rej) => {
                link.addEventListener('load', res);
                link.addEventListener('error', () => rej(new Error(`Unable to preload CSS for ${dep}`)));
            });
        }
    }))
        .then(() => baseModule())
        .catch((err) => {
        const e = new Event('vite:preloadError', { cancelable: true });
        // @ts-expect-error custom payload
        e.payload = err;
        window.dispatchEvent(e);
        if (!e.defaultPrevented) {
            throw err;
        }
    });
};

var _a$1;
var BlueprintIcons_16;
(function (BlueprintIcons_16) {
    BlueprintIcons_16["AddClip"] = "add-clip";
    BlueprintIcons_16["AddColumnLeft"] = "add-column-left";
    BlueprintIcons_16["AddColumnRight"] = "add-column-right";
    BlueprintIcons_16["AddLocation"] = "add-location";
    BlueprintIcons_16["AddRowBottom"] = "add-row-bottom";
    BlueprintIcons_16["AddRowTop"] = "add-row-top";
    BlueprintIcons_16["AddToArtifact"] = "add-to-artifact";
    BlueprintIcons_16["AddToFolder"] = "add-to-folder";
    BlueprintIcons_16["Add"] = "add";
    BlueprintIcons_16["AimpointsTarget"] = "aimpoints-target";
    BlueprintIcons_16["Airplane"] = "airplane";
    BlueprintIcons_16["AlignCenter"] = "align-center";
    BlueprintIcons_16["AlignJustify"] = "align-justify";
    BlueprintIcons_16["AlignLeft"] = "align-left";
    BlueprintIcons_16["AlignRight"] = "align-right";
    BlueprintIcons_16["AlignmentBottom"] = "alignment-bottom";
    BlueprintIcons_16["AlignmentHorizontalCenter"] = "alignment-horizontal-center";
    BlueprintIcons_16["AlignmentLeft"] = "alignment-left";
    BlueprintIcons_16["AlignmentRight"] = "alignment-right";
    BlueprintIcons_16["AlignmentTop"] = "alignment-top";
    BlueprintIcons_16["AlignmentVerticalCenter"] = "alignment-vertical-center";
    BlueprintIcons_16["Ammunition"] = "ammunition";
    BlueprintIcons_16["Anchor"] = "anchor";
    BlueprintIcons_16["Annotation"] = "annotation";
    BlueprintIcons_16["Antenna"] = "antenna";
    BlueprintIcons_16["AppHeader"] = "app-header";
    BlueprintIcons_16["Application"] = "application";
    BlueprintIcons_16["Applications"] = "applications";
    BlueprintIcons_16["Archive"] = "archive";
    BlueprintIcons_16["AreaOfInterest"] = "area-of-interest";
    BlueprintIcons_16["ArrayBoolean"] = "array-boolean";
    BlueprintIcons_16["ArrayDate"] = "array-date";
    BlueprintIcons_16["ArrayFloatingPoint"] = "array-floating-point";
    BlueprintIcons_16["ArrayNumeric"] = "array-numeric";
    BlueprintIcons_16["ArrayString"] = "array-string";
    BlueprintIcons_16["ArrayTimestamp"] = "array-timestamp";
    BlueprintIcons_16["Array"] = "array";
    BlueprintIcons_16["ArrowBottomLeft"] = "arrow-bottom-left";
    BlueprintIcons_16["ArrowBottomRight"] = "arrow-bottom-right";
    BlueprintIcons_16["ArrowDown"] = "arrow-down";
    BlueprintIcons_16["ArrowLeft"] = "arrow-left";
    BlueprintIcons_16["ArrowRight"] = "arrow-right";
    BlueprintIcons_16["ArrowTopLeft"] = "arrow-top-left";
    BlueprintIcons_16["ArrowTopRight"] = "arrow-top-right";
    BlueprintIcons_16["ArrowUp"] = "arrow-up";
    BlueprintIcons_16["ArrowsHorizontal"] = "arrows-horizontal";
    BlueprintIcons_16["ArrowsVertical"] = "arrows-vertical";
    BlueprintIcons_16["Asterisk"] = "asterisk";
    BlueprintIcons_16["At"] = "at";
    BlueprintIcons_16["AutomaticUpdates"] = "automatic-updates";
    BlueprintIcons_16["Axle"] = "axle";
    BlueprintIcons_16["Backlink"] = "backlink";
    BlueprintIcons_16["Badge"] = "badge";
    BlueprintIcons_16["BanCircle"] = "ban-circle";
    BlueprintIcons_16["BankAccount"] = "bank-account";
    BlueprintIcons_16["Barcode"] = "barcode";
    BlueprintIcons_16["Blank"] = "blank";
    BlueprintIcons_16["BlockedPerson"] = "blocked-person";
    BlueprintIcons_16["Bold"] = "bold";
    BlueprintIcons_16["Book"] = "book";
    BlueprintIcons_16["Bookmark"] = "bookmark";
    BlueprintIcons_16["Box"] = "box";
    BlueprintIcons_16["Briefcase"] = "briefcase";
    BlueprintIcons_16["BringData"] = "bring-data";
    BlueprintIcons_16["Bug"] = "bug";
    BlueprintIcons_16["Buggy"] = "buggy";
    BlueprintIcons_16["Build"] = "build";
    BlueprintIcons_16["Calculator"] = "calculator";
    BlueprintIcons_16["Calendar"] = "calendar";
    BlueprintIcons_16["Camera"] = "camera";
    BlueprintIcons_16["CaretDown"] = "caret-down";
    BlueprintIcons_16["CaretLeft"] = "caret-left";
    BlueprintIcons_16["CaretRight"] = "caret-right";
    BlueprintIcons_16["CaretUp"] = "caret-up";
    BlueprintIcons_16["CargoShip"] = "cargo-ship";
    BlueprintIcons_16["CellTower"] = "cell-tower";
    BlueprintIcons_16["Changes"] = "changes";
    BlueprintIcons_16["Chart"] = "chart";
    BlueprintIcons_16["Chat"] = "chat";
    BlueprintIcons_16["ChevronBackward"] = "chevron-backward";
    BlueprintIcons_16["ChevronDown"] = "chevron-down";
    BlueprintIcons_16["ChevronForward"] = "chevron-forward";
    BlueprintIcons_16["ChevronLeft"] = "chevron-left";
    BlueprintIcons_16["ChevronRight"] = "chevron-right";
    BlueprintIcons_16["ChevronUp"] = "chevron-up";
    BlueprintIcons_16["CircleArrowDown"] = "circle-arrow-down";
    BlueprintIcons_16["CircleArrowLeft"] = "circle-arrow-left";
    BlueprintIcons_16["CircleArrowRight"] = "circle-arrow-right";
    BlueprintIcons_16["CircleArrowUp"] = "circle-arrow-up";
    BlueprintIcons_16["Circle"] = "circle";
    BlueprintIcons_16["Citation"] = "citation";
    BlueprintIcons_16["Clean"] = "clean";
    BlueprintIcons_16["Clip"] = "clip";
    BlueprintIcons_16["Clipboard"] = "clipboard";
    BlueprintIcons_16["CloudDownload"] = "cloud-download";
    BlueprintIcons_16["CloudUpload"] = "cloud-upload";
    BlueprintIcons_16["Cloud"] = "cloud";
    BlueprintIcons_16["CodeBlock"] = "code-block";
    BlueprintIcons_16["Code"] = "code";
    BlueprintIcons_16["Cog"] = "cog";
    BlueprintIcons_16["CollapseAll"] = "collapse-all";
    BlueprintIcons_16["ColorFill"] = "color-fill";
    BlueprintIcons_16["ColumnLayout"] = "column-layout";
    BlueprintIcons_16["Comment"] = "comment";
    BlueprintIcons_16["Comparison"] = "comparison";
    BlueprintIcons_16["Compass"] = "compass";
    BlueprintIcons_16["Compressed"] = "compressed";
    BlueprintIcons_16["Confirm"] = "confirm";
    BlueprintIcons_16["Console"] = "console";
    BlueprintIcons_16["Contrast"] = "contrast";
    BlueprintIcons_16["Control"] = "control";
    BlueprintIcons_16["CreditCard"] = "credit-card";
    BlueprintIcons_16["CrossCircle"] = "cross-circle";
    BlueprintIcons_16["Cross"] = "cross";
    BlueprintIcons_16["Crown"] = "crown";
    BlueprintIcons_16["CubeAdd"] = "cube-add";
    BlueprintIcons_16["CubeRemove"] = "cube-remove";
    BlueprintIcons_16["Cube"] = "cube";
    BlueprintIcons_16["CurvedRangeChart"] = "curved-range-chart";
    BlueprintIcons_16["Cut"] = "cut";
    BlueprintIcons_16["Cycle"] = "cycle";
    BlueprintIcons_16["Dashboard"] = "dashboard";
    BlueprintIcons_16["DataConnection"] = "data-connection";
    BlueprintIcons_16["DataLineage"] = "data-lineage";
    BlueprintIcons_16["Database"] = "database";
    BlueprintIcons_16["Delete"] = "delete";
    BlueprintIcons_16["Delta"] = "delta";
    BlueprintIcons_16["DeriveColumn"] = "derive-column";
    BlueprintIcons_16["Desktop"] = "desktop";
    BlueprintIcons_16["Detection"] = "detection";
    BlueprintIcons_16["Diagnosis"] = "diagnosis";
    BlueprintIcons_16["DiagramTree"] = "diagram-tree";
    BlueprintIcons_16["DirectionLeft"] = "direction-left";
    BlueprintIcons_16["DirectionRight"] = "direction-right";
    BlueprintIcons_16["Disable"] = "disable";
    BlueprintIcons_16["Divide"] = "divide";
    BlueprintIcons_16["DocumentOpen"] = "document-open";
    BlueprintIcons_16["DocumentShare"] = "document-share";
    BlueprintIcons_16["Document"] = "document";
    BlueprintIcons_16["Dollar"] = "dollar";
    BlueprintIcons_16["Dot"] = "dot";
    BlueprintIcons_16["DoubleCaretHorizontal"] = "double-caret-horizontal";
    BlueprintIcons_16["DoubleCaretVertical"] = "double-caret-vertical";
    BlueprintIcons_16["DoubleChevronDown"] = "double-chevron-down";
    BlueprintIcons_16["DoubleChevronLeft"] = "double-chevron-left";
    BlueprintIcons_16["DoubleChevronRight"] = "double-chevron-right";
    BlueprintIcons_16["DoubleChevronUp"] = "double-chevron-up";
    BlueprintIcons_16["DoughnutChart"] = "doughnut-chart";
    BlueprintIcons_16["Download"] = "download";
    BlueprintIcons_16["DragHandleHorizontal"] = "drag-handle-horizontal";
    BlueprintIcons_16["DragHandleVertical"] = "drag-handle-vertical";
    BlueprintIcons_16["Draw"] = "draw";
    BlueprintIcons_16["DrawerLeftFilled"] = "drawer-left-filled";
    BlueprintIcons_16["DrawerLeft"] = "drawer-left";
    BlueprintIcons_16["DrawerRightFilled"] = "drawer-right-filled";
    BlueprintIcons_16["DrawerRight"] = "drawer-right";
    BlueprintIcons_16["DriveTime"] = "drive-time";
    BlueprintIcons_16["Duplicate"] = "duplicate";
    BlueprintIcons_16["Edit"] = "edit";
    BlueprintIcons_16["Eject"] = "eject";
    BlueprintIcons_16["Emoji"] = "emoji";
    BlueprintIcons_16["Endorsed"] = "endorsed";
    BlueprintIcons_16["Envelope"] = "envelope";
    BlueprintIcons_16["Equals"] = "equals";
    BlueprintIcons_16["Eraser"] = "eraser";
    BlueprintIcons_16["Error"] = "error";
    BlueprintIcons_16["Euro"] = "euro";
    BlueprintIcons_16["Exchange"] = "exchange";
    BlueprintIcons_16["ExcludeRow"] = "exclude-row";
    BlueprintIcons_16["ExpandAll"] = "expand-all";
    BlueprintIcons_16["Export"] = "export";
    BlueprintIcons_16["EyeOff"] = "eye-off";
    BlueprintIcons_16["EyeOn"] = "eye-on";
    BlueprintIcons_16["EyeOpen"] = "eye-open";
    BlueprintIcons_16["FastBackward"] = "fast-backward";
    BlueprintIcons_16["FastForward"] = "fast-forward";
    BlueprintIcons_16["FeedSubscribed"] = "feed-subscribed";
    BlueprintIcons_16["Feed"] = "feed";
    BlueprintIcons_16["Film"] = "film";
    BlueprintIcons_16["FilterKeep"] = "filter-keep";
    BlueprintIcons_16["FilterList"] = "filter-list";
    BlueprintIcons_16["FilterOpen"] = "filter-open";
    BlueprintIcons_16["FilterRemove"] = "filter-remove";
    BlueprintIcons_16["Filter"] = "filter";
    BlueprintIcons_16["Flag"] = "flag";
    BlueprintIcons_16["Flame"] = "flame";
    BlueprintIcons_16["Flash"] = "flash";
    BlueprintIcons_16["FloatingPoint"] = "floating-point";
    BlueprintIcons_16["FloppyDisk"] = "floppy-disk";
    BlueprintIcons_16["FlowBranch"] = "flow-branch";
    BlueprintIcons_16["FlowEnd"] = "flow-end";
    BlueprintIcons_16["FlowLinear"] = "flow-linear";
    BlueprintIcons_16["FlowReviewBranch"] = "flow-review-branch";
    BlueprintIcons_16["FlowReview"] = "flow-review";
    BlueprintIcons_16["Flows"] = "flows";
    BlueprintIcons_16["FolderClose"] = "folder-close";
    BlueprintIcons_16["FolderNew"] = "folder-new";
    BlueprintIcons_16["FolderOpen"] = "folder-open";
    BlueprintIcons_16["FolderSharedOpen"] = "folder-shared-open";
    BlueprintIcons_16["FolderShared"] = "folder-shared";
    BlueprintIcons_16["Follower"] = "follower";
    BlueprintIcons_16["Following"] = "following";
    BlueprintIcons_16["Font"] = "font";
    BlueprintIcons_16["Fork"] = "fork";
    BlueprintIcons_16["Form"] = "form";
    BlueprintIcons_16["Fuel"] = "fuel";
    BlueprintIcons_16["FullCircle"] = "full-circle";
    BlueprintIcons_16["FullStackedChart"] = "full-stacked-chart";
    BlueprintIcons_16["Fullscreen"] = "fullscreen";
    BlueprintIcons_16["Function"] = "function";
    BlueprintIcons_16["GanttChart"] = "gantt-chart";
    BlueprintIcons_16["Geofence"] = "geofence";
    BlueprintIcons_16["Geolocation"] = "geolocation";
    BlueprintIcons_16["Geosearch"] = "geosearch";
    BlueprintIcons_16["GitBranch"] = "git-branch";
    BlueprintIcons_16["GitCommit"] = "git-commit";
    BlueprintIcons_16["GitMerge"] = "git-merge";
    BlueprintIcons_16["GitNewBranch"] = "git-new-branch";
    BlueprintIcons_16["GitPull"] = "git-pull";
    BlueprintIcons_16["GitPush"] = "git-push";
    BlueprintIcons_16["GitRepo"] = "git-repo";
    BlueprintIcons_16["Glass"] = "glass";
    BlueprintIcons_16["GlobeNetwork"] = "globe-network";
    BlueprintIcons_16["Globe"] = "globe";
    BlueprintIcons_16["GraphRemove"] = "graph-remove";
    BlueprintIcons_16["Graph"] = "graph";
    BlueprintIcons_16["GreaterThanOrEqualTo"] = "greater-than-or-equal-to";
    BlueprintIcons_16["GreaterThan"] = "greater-than";
    BlueprintIcons_16["GridView"] = "grid-view";
    BlueprintIcons_16["Grid"] = "grid";
    BlueprintIcons_16["GroupObjects"] = "group-objects";
    BlueprintIcons_16["GroupedBarChart"] = "grouped-bar-chart";
    BlueprintIcons_16["HandDown"] = "hand-down";
    BlueprintIcons_16["HandLeft"] = "hand-left";
    BlueprintIcons_16["HandRight"] = "hand-right";
    BlueprintIcons_16["HandUp"] = "hand-up";
    BlueprintIcons_16["Hand"] = "hand";
    BlueprintIcons_16["Hat"] = "hat";
    BlueprintIcons_16["HeaderOne"] = "header-one";
    BlueprintIcons_16["HeaderThree"] = "header-three";
    BlueprintIcons_16["HeaderTwo"] = "header-two";
    BlueprintIcons_16["Header"] = "header";
    BlueprintIcons_16["Headset"] = "headset";
    BlueprintIcons_16["HeartBroken"] = "heart-broken";
    BlueprintIcons_16["Heart"] = "heart";
    BlueprintIcons_16["HeatGrid"] = "heat-grid";
    BlueprintIcons_16["Heatmap"] = "heatmap";
    BlueprintIcons_16["Helicopter"] = "helicopter";
    BlueprintIcons_16["Help"] = "help";
    BlueprintIcons_16["HelperManagement"] = "helper-management";
    BlueprintIcons_16["HighPriority"] = "high-priority";
    BlueprintIcons_16["HighVoltagePole"] = "high-voltage-pole";
    BlueprintIcons_16["Highlight"] = "highlight";
    BlueprintIcons_16["History"] = "history";
    BlueprintIcons_16["Home"] = "home";
    BlueprintIcons_16["HorizontalBarChartAsc"] = "horizontal-bar-chart-asc";
    BlueprintIcons_16["HorizontalBarChartDesc"] = "horizontal-bar-chart-desc";
    BlueprintIcons_16["HorizontalBarChart"] = "horizontal-bar-chart";
    BlueprintIcons_16["HorizontalDistribution"] = "horizontal-distribution";
    BlueprintIcons_16["HorizontalInbetween"] = "horizontal-inbetween";
    BlueprintIcons_16["Hurricane"] = "hurricane";
    BlueprintIcons_16["IdNumber"] = "id-number";
    BlueprintIcons_16["ImageRotateLeft"] = "image-rotate-left";
    BlueprintIcons_16["ImageRotateRight"] = "image-rotate-right";
    BlueprintIcons_16["Import"] = "import";
    BlueprintIcons_16["InboxFiltered"] = "inbox-filtered";
    BlueprintIcons_16["InboxGeo"] = "inbox-geo";
    BlueprintIcons_16["InboxSearch"] = "inbox-search";
    BlueprintIcons_16["InboxUpdate"] = "inbox-update";
    BlueprintIcons_16["Inbox"] = "inbox";
    BlueprintIcons_16["InfoSign"] = "info-sign";
    BlueprintIcons_16["Inheritance"] = "inheritance";
    BlueprintIcons_16["InheritedGroup"] = "inherited-group";
    BlueprintIcons_16["InnerJoin"] = "inner-join";
    BlueprintIcons_16["Insert"] = "insert";
    BlueprintIcons_16["Intelligence"] = "intelligence";
    BlueprintIcons_16["Intersection"] = "intersection";
    BlueprintIcons_16["IpAddress"] = "ip-address";
    BlueprintIcons_16["IssueClosed"] = "issue-closed";
    BlueprintIcons_16["IssueNew"] = "issue-new";
    BlueprintIcons_16["Issue"] = "issue";
    BlueprintIcons_16["Italic"] = "italic";
    BlueprintIcons_16["JoinTable"] = "join-table";
    BlueprintIcons_16["KeyBackspace"] = "key-backspace";
    BlueprintIcons_16["KeyCommand"] = "key-command";
    BlueprintIcons_16["KeyControl"] = "key-control";
    BlueprintIcons_16["KeyDelete"] = "key-delete";
    BlueprintIcons_16["KeyEnter"] = "key-enter";
    BlueprintIcons_16["KeyEscape"] = "key-escape";
    BlueprintIcons_16["KeyOption"] = "key-option";
    BlueprintIcons_16["KeyShift"] = "key-shift";
    BlueprintIcons_16["KeyTab"] = "key-tab";
    BlueprintIcons_16["Key"] = "key";
    BlueprintIcons_16["KnownVehicle"] = "known-vehicle";
    BlueprintIcons_16["LabTest"] = "lab-test";
    BlueprintIcons_16["Label"] = "label";
    BlueprintIcons_16["LayerOutline"] = "layer-outline";
    BlueprintIcons_16["Layer"] = "layer";
    BlueprintIcons_16["Layers"] = "layers";
    BlueprintIcons_16["LayoutAuto"] = "layout-auto";
    BlueprintIcons_16["LayoutBalloon"] = "layout-balloon";
    BlueprintIcons_16["LayoutCircle"] = "layout-circle";
    BlueprintIcons_16["LayoutGrid"] = "layout-grid";
    BlueprintIcons_16["LayoutGroupBy"] = "layout-group-by";
    BlueprintIcons_16["LayoutHierarchy"] = "layout-hierarchy";
    BlueprintIcons_16["LayoutLinear"] = "layout-linear";
    BlueprintIcons_16["LayoutSkewGrid"] = "layout-skew-grid";
    BlueprintIcons_16["LayoutSortedClusters"] = "layout-sorted-clusters";
    BlueprintIcons_16["Layout"] = "layout";
    BlueprintIcons_16["Learning"] = "learning";
    BlueprintIcons_16["LeftJoin"] = "left-join";
    BlueprintIcons_16["LengthenText"] = "lengthen-text";
    BlueprintIcons_16["LessThanOrEqualTo"] = "less-than-or-equal-to";
    BlueprintIcons_16["LessThan"] = "less-than";
    BlueprintIcons_16["Lifesaver"] = "lifesaver";
    BlueprintIcons_16["Lightbulb"] = "lightbulb";
    BlueprintIcons_16["Lightning"] = "lightning";
    BlueprintIcons_16["Link"] = "link";
    BlueprintIcons_16["ListColumns"] = "list-columns";
    BlueprintIcons_16["ListDetailView"] = "list-detail-view";
    BlueprintIcons_16["List"] = "list";
    BlueprintIcons_16["Locate"] = "locate";
    BlueprintIcons_16["Lock"] = "lock";
    BlueprintIcons_16["Locomotive"] = "locomotive";
    BlueprintIcons_16["LogIn"] = "log-in";
    BlueprintIcons_16["LogOut"] = "log-out";
    BlueprintIcons_16["LowVoltagePole"] = "low-voltage-pole";
    BlueprintIcons_16["Manual"] = "manual";
    BlueprintIcons_16["ManuallyEnteredData"] = "manually-entered-data";
    BlueprintIcons_16["ManyToMany"] = "many-to-many";
    BlueprintIcons_16["ManyToOne"] = "many-to-one";
    BlueprintIcons_16["MapCreate"] = "map-create";
    BlueprintIcons_16["MapMarker"] = "map-marker";
    BlueprintIcons_16["Map"] = "map";
    BlueprintIcons_16["Maximize"] = "maximize";
    BlueprintIcons_16["Media"] = "media";
    BlueprintIcons_16["MenuClosed"] = "menu-closed";
    BlueprintIcons_16["MenuOpen"] = "menu-open";
    BlueprintIcons_16["Menu"] = "menu";
    BlueprintIcons_16["MergeColumns"] = "merge-columns";
    BlueprintIcons_16["MergeLinks"] = "merge-links";
    BlueprintIcons_16["Microphone"] = "microphone";
    BlueprintIcons_16["Minimize"] = "minimize";
    BlueprintIcons_16["Minus"] = "minus";
    BlueprintIcons_16["MobilePhone"] = "mobile-phone";
    BlueprintIcons_16["MobileVideo"] = "mobile-video";
    BlueprintIcons_16["ModalFilled"] = "modal-filled";
    BlueprintIcons_16["Modal"] = "modal";
    BlueprintIcons_16["Model"] = "model";
    BlueprintIcons_16["Moon"] = "moon";
    BlueprintIcons_16["More"] = "more";
    BlueprintIcons_16["Mountain"] = "mountain";
    BlueprintIcons_16["Move"] = "move";
    BlueprintIcons_16["Mugshot"] = "mugshot";
    BlueprintIcons_16["MultiSelect"] = "multi-select";
    BlueprintIcons_16["Music"] = "music";
    BlueprintIcons_16["Nest"] = "nest";
    BlueprintIcons_16["NewDrawing"] = "new-drawing";
    BlueprintIcons_16["NewGridItem"] = "new-grid-item";
    BlueprintIcons_16["NewLayer"] = "new-layer";
    BlueprintIcons_16["NewLayers"] = "new-layers";
    BlueprintIcons_16["NewLink"] = "new-link";
    BlueprintIcons_16["NewObject"] = "new-object";
    BlueprintIcons_16["NewPerson"] = "new-person";
    BlueprintIcons_16["NewPrescription"] = "new-prescription";
    BlueprintIcons_16["NewTextBox"] = "new-text-box";
    BlueprintIcons_16["Ninja"] = "ninja";
    BlueprintIcons_16["NotEqualTo"] = "not-equal-to";
    BlueprintIcons_16["NotificationsSnooze"] = "notifications-snooze";
    BlueprintIcons_16["NotificationsUpdated"] = "notifications-updated";
    BlueprintIcons_16["Notifications"] = "notifications";
    BlueprintIcons_16["NumberedList"] = "numbered-list";
    BlueprintIcons_16["Numerical"] = "numerical";
    BlueprintIcons_16["Office"] = "office";
    BlueprintIcons_16["Offline"] = "offline";
    BlueprintIcons_16["OilField"] = "oil-field";
    BlueprintIcons_16["OneColumn"] = "one-column";
    BlueprintIcons_16["OneToMany"] = "one-to-many";
    BlueprintIcons_16["OneToOne"] = "one-to-one";
    BlueprintIcons_16["OpenApplication"] = "open-application";
    BlueprintIcons_16["Outdated"] = "outdated";
    BlueprintIcons_16["PageLayout"] = "page-layout";
    BlueprintIcons_16["PanelStats"] = "panel-stats";
    BlueprintIcons_16["PanelTable"] = "panel-table";
    BlueprintIcons_16["Paperclip"] = "paperclip";
    BlueprintIcons_16["Paragraph"] = "paragraph";
    BlueprintIcons_16["PathSearch"] = "path-search";
    BlueprintIcons_16["Path"] = "path";
    BlueprintIcons_16["Pause"] = "pause";
    BlueprintIcons_16["People"] = "people";
    BlueprintIcons_16["Percentage"] = "percentage";
    BlueprintIcons_16["Person"] = "person";
    BlueprintIcons_16["Phone"] = "phone";
    BlueprintIcons_16["PieChart"] = "pie-chart";
    BlueprintIcons_16["Pin"] = "pin";
    BlueprintIcons_16["PivotTable"] = "pivot-table";
    BlueprintIcons_16["Pivot"] = "pivot";
    BlueprintIcons_16["Play"] = "play";
    BlueprintIcons_16["Playbook"] = "playbook";
    BlueprintIcons_16["Plus"] = "plus";
    BlueprintIcons_16["PolygonFilter"] = "polygon-filter";
    BlueprintIcons_16["Power"] = "power";
    BlueprintIcons_16["PredictiveAnalysis"] = "predictive-analysis";
    BlueprintIcons_16["Prescription"] = "prescription";
    BlueprintIcons_16["Presentation"] = "presentation";
    BlueprintIcons_16["Print"] = "print";
    BlueprintIcons_16["Projects"] = "projects";
    BlueprintIcons_16["Properties"] = "properties";
    BlueprintIcons_16["Property"] = "property";
    BlueprintIcons_16["PublishFunction"] = "publish-function";
    BlueprintIcons_16["Pulse"] = "pulse";
    BlueprintIcons_16["Rain"] = "rain";
    BlueprintIcons_16["Random"] = "random";
    BlueprintIcons_16["Record"] = "record";
    BlueprintIcons_16["RectHeight"] = "rect-height";
    BlueprintIcons_16["RectWidth"] = "rect-width";
    BlueprintIcons_16["Rectangle"] = "rectangle";
    BlueprintIcons_16["Redo"] = "redo";
    BlueprintIcons_16["Refresh"] = "refresh";
    BlueprintIcons_16["Regex"] = "regex";
    BlueprintIcons_16["RegressionChart"] = "regression-chart";
    BlueprintIcons_16["RemoveColumnLeft"] = "remove-column-left";
    BlueprintIcons_16["RemoveColumnRight"] = "remove-column-right";
    BlueprintIcons_16["RemoveColumn"] = "remove-column";
    BlueprintIcons_16["RemoveRowBottom"] = "remove-row-bottom";
    BlueprintIcons_16["RemoveRowTop"] = "remove-row-top";
    BlueprintIcons_16["Remove"] = "remove";
    BlueprintIcons_16["Repeat"] = "repeat";
    BlueprintIcons_16["Reset"] = "reset";
    BlueprintIcons_16["Resolve"] = "resolve";
    BlueprintIcons_16["Rig"] = "rig";
    BlueprintIcons_16["RightJoin"] = "right-join";
    BlueprintIcons_16["Ring"] = "ring";
    BlueprintIcons_16["RocketSlant"] = "rocket-slant";
    BlueprintIcons_16["Rocket"] = "rocket";
    BlueprintIcons_16["RotateDocument"] = "rotate-document";
    BlueprintIcons_16["RotatePage"] = "rotate-page";
    BlueprintIcons_16["Route"] = "route";
    BlueprintIcons_16["Satellite"] = "satellite";
    BlueprintIcons_16["Saved"] = "saved";
    BlueprintIcons_16["ScatterPlot"] = "scatter-plot";
    BlueprintIcons_16["SearchAround"] = "search-around";
    BlueprintIcons_16["SearchTemplate"] = "search-template";
    BlueprintIcons_16["SearchText"] = "search-text";
    BlueprintIcons_16["Search"] = "search";
    BlueprintIcons_16["SegmentedControl"] = "segmented-control";
    BlueprintIcons_16["Select"] = "select";
    BlueprintIcons_16["Selection"] = "selection";
    BlueprintIcons_16["SendMessage"] = "send-message";
    BlueprintIcons_16["SendToGraph"] = "send-to-graph";
    BlueprintIcons_16["SendToMap"] = "send-to-map";
    BlueprintIcons_16["SendTo"] = "send-to";
    BlueprintIcons_16["Sensor"] = "sensor";
    BlueprintIcons_16["SeriesAdd"] = "series-add";
    BlueprintIcons_16["SeriesConfiguration"] = "series-configuration";
    BlueprintIcons_16["SeriesDerived"] = "series-derived";
    BlueprintIcons_16["SeriesFiltered"] = "series-filtered";
    BlueprintIcons_16["SeriesSearch"] = "series-search";
    BlueprintIcons_16["Settings"] = "settings";
    BlueprintIcons_16["Shapes"] = "shapes";
    BlueprintIcons_16["Share"] = "share";
    BlueprintIcons_16["SharedFilter"] = "shared-filter";
    BlueprintIcons_16["Shield"] = "shield";
    BlueprintIcons_16["Ship"] = "ship";
    BlueprintIcons_16["Shop"] = "shop";
    BlueprintIcons_16["ShoppingCart"] = "shopping-cart";
    BlueprintIcons_16["ShortenText"] = "shorten-text";
    BlueprintIcons_16["SignalSearch"] = "signal-search";
    BlueprintIcons_16["SimCard"] = "sim-card";
    BlueprintIcons_16["Slash"] = "slash";
    BlueprintIcons_16["SmallCross"] = "small-cross";
    BlueprintIcons_16["SmallInfoSign"] = "small-info-sign";
    BlueprintIcons_16["SmallMinus"] = "small-minus";
    BlueprintIcons_16["SmallPlus"] = "small-plus";
    BlueprintIcons_16["SmallSquare"] = "small-square";
    BlueprintIcons_16["SmallTick"] = "small-tick";
    BlueprintIcons_16["Snowflake"] = "snowflake";
    BlueprintIcons_16["SocialMedia"] = "social-media";
    BlueprintIcons_16["SortAlphabeticalDesc"] = "sort-alphabetical-desc";
    BlueprintIcons_16["SortAlphabetical"] = "sort-alphabetical";
    BlueprintIcons_16["SortAsc"] = "sort-asc";
    BlueprintIcons_16["SortDesc"] = "sort-desc";
    BlueprintIcons_16["SortNumericalDesc"] = "sort-numerical-desc";
    BlueprintIcons_16["SortNumerical"] = "sort-numerical";
    BlueprintIcons_16["Sort"] = "sort";
    BlueprintIcons_16["SpellCheck"] = "spell-check";
    BlueprintIcons_16["SplitColumns"] = "split-columns";
    BlueprintIcons_16["Square"] = "square";
    BlueprintIcons_16["StackedChart"] = "stacked-chart";
    BlueprintIcons_16["StadiumGeometry"] = "stadium-geometry";
    BlueprintIcons_16["StarEmpty"] = "star-empty";
    BlueprintIcons_16["Star"] = "star";
    BlueprintIcons_16["StepBackward"] = "step-backward";
    BlueprintIcons_16["StepChart"] = "step-chart";
    BlueprintIcons_16["StepForward"] = "step-forward";
    BlueprintIcons_16["Stop"] = "stop";
    BlueprintIcons_16["Stopwatch"] = "stopwatch";
    BlueprintIcons_16["Strikethrough"] = "strikethrough";
    BlueprintIcons_16["Style"] = "style";
    BlueprintIcons_16["Subscript"] = "subscript";
    BlueprintIcons_16["Superscript"] = "superscript";
    BlueprintIcons_16["SwapHorizontal"] = "swap-horizontal";
    BlueprintIcons_16["SwapVertical"] = "swap-vertical";
    BlueprintIcons_16["Switch"] = "switch";
    BlueprintIcons_16["SymbolCircle"] = "symbol-circle";
    BlueprintIcons_16["SymbolCross"] = "symbol-cross";
    BlueprintIcons_16["SymbolDiamond"] = "symbol-diamond";
    BlueprintIcons_16["SymbolRectangle"] = "symbol-rectangle";
    BlueprintIcons_16["SymbolSquare"] = "symbol-square";
    BlueprintIcons_16["SymbolTriangleDown"] = "symbol-triangle-down";
    BlueprintIcons_16["SymbolTriangleUp"] = "symbol-triangle-up";
    BlueprintIcons_16["Syringe"] = "syringe";
    BlueprintIcons_16["Tag"] = "tag";
    BlueprintIcons_16["TakeAction"] = "take-action";
    BlueprintIcons_16["Tank"] = "tank";
    BlueprintIcons_16["Target"] = "target";
    BlueprintIcons_16["Taxi"] = "taxi";
    BlueprintIcons_16["Temperature"] = "temperature";
    BlueprintIcons_16["TextHighlight"] = "text-highlight";
    BlueprintIcons_16["ThDerived"] = "th-derived";
    BlueprintIcons_16["ThDisconnect"] = "th-disconnect";
    BlueprintIcons_16["ThFiltered"] = "th-filtered";
    BlueprintIcons_16["ThList"] = "th-list";
    BlueprintIcons_16["Th"] = "th";
    BlueprintIcons_16["ThirdParty"] = "third-party";
    BlueprintIcons_16["ThumbsDown"] = "thumbs-down";
    BlueprintIcons_16["ThumbsUp"] = "thumbs-up";
    BlueprintIcons_16["TickCircle"] = "tick-circle";
    BlueprintIcons_16["Tick"] = "tick";
    BlueprintIcons_16["Time"] = "time";
    BlueprintIcons_16["TimelineAreaChart"] = "timeline-area-chart";
    BlueprintIcons_16["TimelineBarChart"] = "timeline-bar-chart";
    BlueprintIcons_16["TimelineEvents"] = "timeline-events";
    BlueprintIcons_16["TimelineLineChart"] = "timeline-line-chart";
    BlueprintIcons_16["Tint"] = "tint";
    BlueprintIcons_16["Torch"] = "torch";
    BlueprintIcons_16["Tractor"] = "tractor";
    BlueprintIcons_16["Train"] = "train";
    BlueprintIcons_16["Translate"] = "translate";
    BlueprintIcons_16["Trash"] = "trash";
    BlueprintIcons_16["Tree"] = "tree";
    BlueprintIcons_16["TrendingDown"] = "trending-down";
    BlueprintIcons_16["TrendingUp"] = "trending-up";
    BlueprintIcons_16["Truck"] = "truck";
    BlueprintIcons_16["TwoColumns"] = "two-columns";
    BlueprintIcons_16["Unarchive"] = "unarchive";
    BlueprintIcons_16["Underline"] = "underline";
    BlueprintIcons_16["Undo"] = "undo";
    BlueprintIcons_16["UngroupObjects"] = "ungroup-objects";
    BlueprintIcons_16["UnknownVehicle"] = "unknown-vehicle";
    BlueprintIcons_16["Unlock"] = "unlock";
    BlueprintIcons_16["Unpin"] = "unpin";
    BlueprintIcons_16["Unresolve"] = "unresolve";
    BlueprintIcons_16["Updated"] = "updated";
    BlueprintIcons_16["Upload"] = "upload";
    BlueprintIcons_16["User"] = "user";
    BlueprintIcons_16["Variable"] = "variable";
    BlueprintIcons_16["VerticalBarChartAsc"] = "vertical-bar-chart-asc";
    BlueprintIcons_16["VerticalBarChartDesc"] = "vertical-bar-chart-desc";
    BlueprintIcons_16["VerticalDistribution"] = "vertical-distribution";
    BlueprintIcons_16["VerticalInbetween"] = "vertical-inbetween";
    BlueprintIcons_16["Video"] = "video";
    BlueprintIcons_16["Virus"] = "virus";
    BlueprintIcons_16["VolumeDown"] = "volume-down";
    BlueprintIcons_16["VolumeOff"] = "volume-off";
    BlueprintIcons_16["VolumeUp"] = "volume-up";
    BlueprintIcons_16["Walk"] = "walk";
    BlueprintIcons_16["WarningSign"] = "warning-sign";
    BlueprintIcons_16["WaterfallChart"] = "waterfall-chart";
    BlueprintIcons_16["Waves"] = "waves";
    BlueprintIcons_16["WidgetButton"] = "widget-button";
    BlueprintIcons_16["WidgetFooter"] = "widget-footer";
    BlueprintIcons_16["WidgetHeader"] = "widget-header";
    BlueprintIcons_16["Widget"] = "widget";
    BlueprintIcons_16["Wind"] = "wind";
    BlueprintIcons_16["Wrench"] = "wrench";
    BlueprintIcons_16["ZoomIn"] = "zoom-in";
    BlueprintIcons_16["ZoomOut"] = "zoom-out";
    BlueprintIcons_16["ZoomToFit"] = "zoom-to-fit";
})(BlueprintIcons_16 || (BlueprintIcons_16 = {}));
(_a$1 = {},
    _a$1[BlueprintIcons_16.AddClip] = "61697",
    _a$1[BlueprintIcons_16.AddColumnLeft] = "61698",
    _a$1[BlueprintIcons_16.AddColumnRight] = "61699",
    _a$1[BlueprintIcons_16.AddLocation] = "61700",
    _a$1[BlueprintIcons_16.AddRowBottom] = "61701",
    _a$1[BlueprintIcons_16.AddRowTop] = "61702",
    _a$1[BlueprintIcons_16.AddToArtifact] = "61703",
    _a$1[BlueprintIcons_16.AddToFolder] = "61704",
    _a$1[BlueprintIcons_16.Add] = "61705",
    _a$1[BlueprintIcons_16.AimpointsTarget] = "62261",
    _a$1[BlueprintIcons_16.Airplane] = "61706",
    _a$1[BlueprintIcons_16.AlignCenter] = "61707",
    _a$1[BlueprintIcons_16.AlignJustify] = "61708",
    _a$1[BlueprintIcons_16.AlignLeft] = "61709",
    _a$1[BlueprintIcons_16.AlignRight] = "61710",
    _a$1[BlueprintIcons_16.AlignmentBottom] = "61711",
    _a$1[BlueprintIcons_16.AlignmentHorizontalCenter] = "61712",
    _a$1[BlueprintIcons_16.AlignmentLeft] = "61713",
    _a$1[BlueprintIcons_16.AlignmentRight] = "61714",
    _a$1[BlueprintIcons_16.AlignmentTop] = "61715",
    _a$1[BlueprintIcons_16.AlignmentVerticalCenter] = "61716",
    _a$1[BlueprintIcons_16.Ammunition] = "62274",
    _a$1[BlueprintIcons_16.Anchor] = "62256",
    _a$1[BlueprintIcons_16.Annotation] = "61717",
    _a$1[BlueprintIcons_16.Antenna] = "61718",
    _a$1[BlueprintIcons_16.AppHeader] = "61719",
    _a$1[BlueprintIcons_16.Application] = "61720",
    _a$1[BlueprintIcons_16.Applications] = "61721",
    _a$1[BlueprintIcons_16.Archive] = "61722",
    _a$1[BlueprintIcons_16.AreaOfInterest] = "61723",
    _a$1[BlueprintIcons_16.ArrayBoolean] = "61724",
    _a$1[BlueprintIcons_16.ArrayDate] = "61725",
    _a$1[BlueprintIcons_16.ArrayFloatingPoint] = "62253",
    _a$1[BlueprintIcons_16.ArrayNumeric] = "61726",
    _a$1[BlueprintIcons_16.ArrayString] = "61727",
    _a$1[BlueprintIcons_16.ArrayTimestamp] = "61728",
    _a$1[BlueprintIcons_16.Array] = "61729",
    _a$1[BlueprintIcons_16.ArrowBottomLeft] = "61730",
    _a$1[BlueprintIcons_16.ArrowBottomRight] = "61731",
    _a$1[BlueprintIcons_16.ArrowDown] = "61732",
    _a$1[BlueprintIcons_16.ArrowLeft] = "61733",
    _a$1[BlueprintIcons_16.ArrowRight] = "61734",
    _a$1[BlueprintIcons_16.ArrowTopLeft] = "61735",
    _a$1[BlueprintIcons_16.ArrowTopRight] = "61736",
    _a$1[BlueprintIcons_16.ArrowUp] = "61737",
    _a$1[BlueprintIcons_16.ArrowsHorizontal] = "61738",
    _a$1[BlueprintIcons_16.ArrowsVertical] = "61739",
    _a$1[BlueprintIcons_16.Asterisk] = "61740",
    _a$1[BlueprintIcons_16.At] = "62257",
    _a$1[BlueprintIcons_16.AutomaticUpdates] = "61741",
    _a$1[BlueprintIcons_16.Axle] = "62264",
    _a$1[BlueprintIcons_16.Backlink] = "61742",
    _a$1[BlueprintIcons_16.Badge] = "61743",
    _a$1[BlueprintIcons_16.BanCircle] = "61744",
    _a$1[BlueprintIcons_16.BankAccount] = "61745",
    _a$1[BlueprintIcons_16.Barcode] = "61746",
    _a$1[BlueprintIcons_16.Blank] = "61747",
    _a$1[BlueprintIcons_16.BlockedPerson] = "61748",
    _a$1[BlueprintIcons_16.Bold] = "61749",
    _a$1[BlueprintIcons_16.Book] = "61750",
    _a$1[BlueprintIcons_16.Bookmark] = "61751",
    _a$1[BlueprintIcons_16.Box] = "61752",
    _a$1[BlueprintIcons_16.Briefcase] = "61753",
    _a$1[BlueprintIcons_16.BringData] = "61754",
    _a$1[BlueprintIcons_16.Bug] = "62254",
    _a$1[BlueprintIcons_16.Buggy] = "61755",
    _a$1[BlueprintIcons_16.Build] = "61756",
    _a$1[BlueprintIcons_16.Calculator] = "61757",
    _a$1[BlueprintIcons_16.Calendar] = "61758",
    _a$1[BlueprintIcons_16.Camera] = "61759",
    _a$1[BlueprintIcons_16.CaretDown] = "61760",
    _a$1[BlueprintIcons_16.CaretLeft] = "61761",
    _a$1[BlueprintIcons_16.CaretRight] = "61762",
    _a$1[BlueprintIcons_16.CaretUp] = "61763",
    _a$1[BlueprintIcons_16.CargoShip] = "61764",
    _a$1[BlueprintIcons_16.CellTower] = "61765",
    _a$1[BlueprintIcons_16.Changes] = "61766",
    _a$1[BlueprintIcons_16.Chart] = "61767",
    _a$1[BlueprintIcons_16.Chat] = "61768",
    _a$1[BlueprintIcons_16.ChevronBackward] = "61769",
    _a$1[BlueprintIcons_16.ChevronDown] = "61770",
    _a$1[BlueprintIcons_16.ChevronForward] = "61771",
    _a$1[BlueprintIcons_16.ChevronLeft] = "61772",
    _a$1[BlueprintIcons_16.ChevronRight] = "61773",
    _a$1[BlueprintIcons_16.ChevronUp] = "61774",
    _a$1[BlueprintIcons_16.CircleArrowDown] = "61775",
    _a$1[BlueprintIcons_16.CircleArrowLeft] = "61776",
    _a$1[BlueprintIcons_16.CircleArrowRight] = "61777",
    _a$1[BlueprintIcons_16.CircleArrowUp] = "61778",
    _a$1[BlueprintIcons_16.Circle] = "61779",
    _a$1[BlueprintIcons_16.Citation] = "61780",
    _a$1[BlueprintIcons_16.Clean] = "61781",
    _a$1[BlueprintIcons_16.Clip] = "61782",
    _a$1[BlueprintIcons_16.Clipboard] = "61783",
    _a$1[BlueprintIcons_16.CloudDownload] = "61784",
    _a$1[BlueprintIcons_16.CloudUpload] = "61785",
    _a$1[BlueprintIcons_16.Cloud] = "61786",
    _a$1[BlueprintIcons_16.CodeBlock] = "61787",
    _a$1[BlueprintIcons_16.Code] = "61788",
    _a$1[BlueprintIcons_16.Cog] = "61789",
    _a$1[BlueprintIcons_16.CollapseAll] = "61790",
    _a$1[BlueprintIcons_16.ColorFill] = "62248",
    _a$1[BlueprintIcons_16.ColumnLayout] = "61791",
    _a$1[BlueprintIcons_16.Comment] = "61792",
    _a$1[BlueprintIcons_16.Comparison] = "61793",
    _a$1[BlueprintIcons_16.Compass] = "61794",
    _a$1[BlueprintIcons_16.Compressed] = "61795",
    _a$1[BlueprintIcons_16.Confirm] = "61796",
    _a$1[BlueprintIcons_16.Console] = "61797",
    _a$1[BlueprintIcons_16.Contrast] = "61798",
    _a$1[BlueprintIcons_16.Control] = "61799",
    _a$1[BlueprintIcons_16.CreditCard] = "61800",
    _a$1[BlueprintIcons_16.CrossCircle] = "62262",
    _a$1[BlueprintIcons_16.Cross] = "61801",
    _a$1[BlueprintIcons_16.Crown] = "61802",
    _a$1[BlueprintIcons_16.CubeAdd] = "61803",
    _a$1[BlueprintIcons_16.CubeRemove] = "61804",
    _a$1[BlueprintIcons_16.Cube] = "61805",
    _a$1[BlueprintIcons_16.CurvedRangeChart] = "61806",
    _a$1[BlueprintIcons_16.Cut] = "61807",
    _a$1[BlueprintIcons_16.Cycle] = "61808",
    _a$1[BlueprintIcons_16.Dashboard] = "61809",
    _a$1[BlueprintIcons_16.DataConnection] = "61810",
    _a$1[BlueprintIcons_16.DataLineage] = "61811",
    _a$1[BlueprintIcons_16.Database] = "61812",
    _a$1[BlueprintIcons_16.Delete] = "61813",
    _a$1[BlueprintIcons_16.Delta] = "61814",
    _a$1[BlueprintIcons_16.DeriveColumn] = "61815",
    _a$1[BlueprintIcons_16.Desktop] = "61816",
    _a$1[BlueprintIcons_16.Detection] = "62273",
    _a$1[BlueprintIcons_16.Diagnosis] = "61817",
    _a$1[BlueprintIcons_16.DiagramTree] = "61818",
    _a$1[BlueprintIcons_16.DirectionLeft] = "61819",
    _a$1[BlueprintIcons_16.DirectionRight] = "61820",
    _a$1[BlueprintIcons_16.Disable] = "61821",
    _a$1[BlueprintIcons_16.Divide] = "62247",
    _a$1[BlueprintIcons_16.DocumentOpen] = "61822",
    _a$1[BlueprintIcons_16.DocumentShare] = "61823",
    _a$1[BlueprintIcons_16.Document] = "61824",
    _a$1[BlueprintIcons_16.Dollar] = "61825",
    _a$1[BlueprintIcons_16.Dot] = "61826",
    _a$1[BlueprintIcons_16.DoubleCaretHorizontal] = "61827",
    _a$1[BlueprintIcons_16.DoubleCaretVertical] = "61828",
    _a$1[BlueprintIcons_16.DoubleChevronDown] = "61829",
    _a$1[BlueprintIcons_16.DoubleChevronLeft] = "61830",
    _a$1[BlueprintIcons_16.DoubleChevronRight] = "61831",
    _a$1[BlueprintIcons_16.DoubleChevronUp] = "61832",
    _a$1[BlueprintIcons_16.DoughnutChart] = "61833",
    _a$1[BlueprintIcons_16.Download] = "61834",
    _a$1[BlueprintIcons_16.DragHandleHorizontal] = "61835",
    _a$1[BlueprintIcons_16.DragHandleVertical] = "61836",
    _a$1[BlueprintIcons_16.Draw] = "61837",
    _a$1[BlueprintIcons_16.DrawerLeftFilled] = "61838",
    _a$1[BlueprintIcons_16.DrawerLeft] = "61839",
    _a$1[BlueprintIcons_16.DrawerRightFilled] = "61840",
    _a$1[BlueprintIcons_16.DrawerRight] = "61841",
    _a$1[BlueprintIcons_16.DriveTime] = "61842",
    _a$1[BlueprintIcons_16.Duplicate] = "61843",
    _a$1[BlueprintIcons_16.Edit] = "61844",
    _a$1[BlueprintIcons_16.Eject] = "61845",
    _a$1[BlueprintIcons_16.Emoji] = "61846",
    _a$1[BlueprintIcons_16.Endorsed] = "61847",
    _a$1[BlueprintIcons_16.Envelope] = "61848",
    _a$1[BlueprintIcons_16.Equals] = "61849",
    _a$1[BlueprintIcons_16.Eraser] = "61850",
    _a$1[BlueprintIcons_16.Error] = "61851",
    _a$1[BlueprintIcons_16.Euro] = "61852",
    _a$1[BlueprintIcons_16.Exchange] = "61853",
    _a$1[BlueprintIcons_16.ExcludeRow] = "61854",
    _a$1[BlueprintIcons_16.ExpandAll] = "61855",
    _a$1[BlueprintIcons_16.Export] = "61856",
    _a$1[BlueprintIcons_16.EyeOff] = "61857",
    _a$1[BlueprintIcons_16.EyeOn] = "61858",
    _a$1[BlueprintIcons_16.EyeOpen] = "61859",
    _a$1[BlueprintIcons_16.FastBackward] = "61860",
    _a$1[BlueprintIcons_16.FastForward] = "61861",
    _a$1[BlueprintIcons_16.FeedSubscribed] = "61862",
    _a$1[BlueprintIcons_16.Feed] = "61863",
    _a$1[BlueprintIcons_16.Film] = "61864",
    _a$1[BlueprintIcons_16.FilterKeep] = "61865",
    _a$1[BlueprintIcons_16.FilterList] = "61866",
    _a$1[BlueprintIcons_16.FilterOpen] = "61867",
    _a$1[BlueprintIcons_16.FilterRemove] = "61868",
    _a$1[BlueprintIcons_16.Filter] = "61869",
    _a$1[BlueprintIcons_16.Flag] = "61870",
    _a$1[BlueprintIcons_16.Flame] = "61871",
    _a$1[BlueprintIcons_16.Flash] = "61872",
    _a$1[BlueprintIcons_16.FloatingPoint] = "62252",
    _a$1[BlueprintIcons_16.FloppyDisk] = "61873",
    _a$1[BlueprintIcons_16.FlowBranch] = "61874",
    _a$1[BlueprintIcons_16.FlowEnd] = "61875",
    _a$1[BlueprintIcons_16.FlowLinear] = "61876",
    _a$1[BlueprintIcons_16.FlowReviewBranch] = "61877",
    _a$1[BlueprintIcons_16.FlowReview] = "61878",
    _a$1[BlueprintIcons_16.Flows] = "61879",
    _a$1[BlueprintIcons_16.FolderClose] = "61880",
    _a$1[BlueprintIcons_16.FolderNew] = "61881",
    _a$1[BlueprintIcons_16.FolderOpen] = "61882",
    _a$1[BlueprintIcons_16.FolderSharedOpen] = "61883",
    _a$1[BlueprintIcons_16.FolderShared] = "61884",
    _a$1[BlueprintIcons_16.Follower] = "61885",
    _a$1[BlueprintIcons_16.Following] = "61886",
    _a$1[BlueprintIcons_16.Font] = "61887",
    _a$1[BlueprintIcons_16.Fork] = "61888",
    _a$1[BlueprintIcons_16.Form] = "61889",
    _a$1[BlueprintIcons_16.Fuel] = "62243",
    _a$1[BlueprintIcons_16.FullCircle] = "61890",
    _a$1[BlueprintIcons_16.FullStackedChart] = "61891",
    _a$1[BlueprintIcons_16.Fullscreen] = "61892",
    _a$1[BlueprintIcons_16.Function] = "61893",
    _a$1[BlueprintIcons_16.GanttChart] = "61894",
    _a$1[BlueprintIcons_16.Geofence] = "61895",
    _a$1[BlueprintIcons_16.Geolocation] = "61896",
    _a$1[BlueprintIcons_16.Geosearch] = "61897",
    _a$1[BlueprintIcons_16.GitBranch] = "61898",
    _a$1[BlueprintIcons_16.GitCommit] = "61899",
    _a$1[BlueprintIcons_16.GitMerge] = "61900",
    _a$1[BlueprintIcons_16.GitNewBranch] = "61901",
    _a$1[BlueprintIcons_16.GitPull] = "61902",
    _a$1[BlueprintIcons_16.GitPush] = "61903",
    _a$1[BlueprintIcons_16.GitRepo] = "61904",
    _a$1[BlueprintIcons_16.Glass] = "61905",
    _a$1[BlueprintIcons_16.GlobeNetwork] = "61906",
    _a$1[BlueprintIcons_16.Globe] = "61907",
    _a$1[BlueprintIcons_16.GraphRemove] = "61908",
    _a$1[BlueprintIcons_16.Graph] = "61909",
    _a$1[BlueprintIcons_16.GreaterThanOrEqualTo] = "61910",
    _a$1[BlueprintIcons_16.GreaterThan] = "61911",
    _a$1[BlueprintIcons_16.GridView] = "61912",
    _a$1[BlueprintIcons_16.Grid] = "61913",
    _a$1[BlueprintIcons_16.GroupObjects] = "61914",
    _a$1[BlueprintIcons_16.GroupedBarChart] = "61915",
    _a$1[BlueprintIcons_16.HandDown] = "61916",
    _a$1[BlueprintIcons_16.HandLeft] = "61917",
    _a$1[BlueprintIcons_16.HandRight] = "61918",
    _a$1[BlueprintIcons_16.HandUp] = "61919",
    _a$1[BlueprintIcons_16.Hand] = "61920",
    _a$1[BlueprintIcons_16.Hat] = "61921",
    _a$1[BlueprintIcons_16.HeaderOne] = "61922",
    _a$1[BlueprintIcons_16.HeaderThree] = "61923",
    _a$1[BlueprintIcons_16.HeaderTwo] = "61924",
    _a$1[BlueprintIcons_16.Header] = "61925",
    _a$1[BlueprintIcons_16.Headset] = "61926",
    _a$1[BlueprintIcons_16.HeartBroken] = "61927",
    _a$1[BlueprintIcons_16.Heart] = "61928",
    _a$1[BlueprintIcons_16.HeatGrid] = "61929",
    _a$1[BlueprintIcons_16.Heatmap] = "61930",
    _a$1[BlueprintIcons_16.Helicopter] = "61931",
    _a$1[BlueprintIcons_16.Help] = "61932",
    _a$1[BlueprintIcons_16.HelperManagement] = "61933",
    _a$1[BlueprintIcons_16.HighPriority] = "61934",
    _a$1[BlueprintIcons_16.HighVoltagePole] = "62259",
    _a$1[BlueprintIcons_16.Highlight] = "61935",
    _a$1[BlueprintIcons_16.History] = "61936",
    _a$1[BlueprintIcons_16.Home] = "61937",
    _a$1[BlueprintIcons_16.HorizontalBarChartAsc] = "61938",
    _a$1[BlueprintIcons_16.HorizontalBarChartDesc] = "61939",
    _a$1[BlueprintIcons_16.HorizontalBarChart] = "61940",
    _a$1[BlueprintIcons_16.HorizontalDistribution] = "61941",
    _a$1[BlueprintIcons_16.HorizontalInbetween] = "62249",
    _a$1[BlueprintIcons_16.Hurricane] = "61942",
    _a$1[BlueprintIcons_16.IdNumber] = "61943",
    _a$1[BlueprintIcons_16.ImageRotateLeft] = "61944",
    _a$1[BlueprintIcons_16.ImageRotateRight] = "61945",
    _a$1[BlueprintIcons_16.Import] = "61946",
    _a$1[BlueprintIcons_16.InboxFiltered] = "61947",
    _a$1[BlueprintIcons_16.InboxGeo] = "61948",
    _a$1[BlueprintIcons_16.InboxSearch] = "61949",
    _a$1[BlueprintIcons_16.InboxUpdate] = "61950",
    _a$1[BlueprintIcons_16.Inbox] = "61951",
    _a$1[BlueprintIcons_16.InfoSign] = "61952",
    _a$1[BlueprintIcons_16.Inheritance] = "61953",
    _a$1[BlueprintIcons_16.InheritedGroup] = "61954",
    _a$1[BlueprintIcons_16.InnerJoin] = "61955",
    _a$1[BlueprintIcons_16.Insert] = "61956",
    _a$1[BlueprintIcons_16.Intelligence] = "62263",
    _a$1[BlueprintIcons_16.Intersection] = "61957",
    _a$1[BlueprintIcons_16.IpAddress] = "61958",
    _a$1[BlueprintIcons_16.IssueClosed] = "61959",
    _a$1[BlueprintIcons_16.IssueNew] = "61960",
    _a$1[BlueprintIcons_16.Issue] = "61961",
    _a$1[BlueprintIcons_16.Italic] = "61962",
    _a$1[BlueprintIcons_16.JoinTable] = "61963",
    _a$1[BlueprintIcons_16.KeyBackspace] = "61964",
    _a$1[BlueprintIcons_16.KeyCommand] = "61965",
    _a$1[BlueprintIcons_16.KeyControl] = "61966",
    _a$1[BlueprintIcons_16.KeyDelete] = "61967",
    _a$1[BlueprintIcons_16.KeyEnter] = "61968",
    _a$1[BlueprintIcons_16.KeyEscape] = "61969",
    _a$1[BlueprintIcons_16.KeyOption] = "61970",
    _a$1[BlueprintIcons_16.KeyShift] = "61971",
    _a$1[BlueprintIcons_16.KeyTab] = "61972",
    _a$1[BlueprintIcons_16.Key] = "61973",
    _a$1[BlueprintIcons_16.KnownVehicle] = "61974",
    _a$1[BlueprintIcons_16.LabTest] = "61975",
    _a$1[BlueprintIcons_16.Label] = "61976",
    _a$1[BlueprintIcons_16.LayerOutline] = "61977",
    _a$1[BlueprintIcons_16.Layer] = "61978",
    _a$1[BlueprintIcons_16.Layers] = "61979",
    _a$1[BlueprintIcons_16.LayoutAuto] = "61980",
    _a$1[BlueprintIcons_16.LayoutBalloon] = "61981",
    _a$1[BlueprintIcons_16.LayoutCircle] = "61982",
    _a$1[BlueprintIcons_16.LayoutGrid] = "61983",
    _a$1[BlueprintIcons_16.LayoutGroupBy] = "61984",
    _a$1[BlueprintIcons_16.LayoutHierarchy] = "61985",
    _a$1[BlueprintIcons_16.LayoutLinear] = "61986",
    _a$1[BlueprintIcons_16.LayoutSkewGrid] = "61987",
    _a$1[BlueprintIcons_16.LayoutSortedClusters] = "61988",
    _a$1[BlueprintIcons_16.Layout] = "61989",
    _a$1[BlueprintIcons_16.Learning] = "61990",
    _a$1[BlueprintIcons_16.LeftJoin] = "61991",
    _a$1[BlueprintIcons_16.LengthenText] = "62270",
    _a$1[BlueprintIcons_16.LessThanOrEqualTo] = "61992",
    _a$1[BlueprintIcons_16.LessThan] = "61993",
    _a$1[BlueprintIcons_16.Lifesaver] = "61994",
    _a$1[BlueprintIcons_16.Lightbulb] = "61995",
    _a$1[BlueprintIcons_16.Lightning] = "61996",
    _a$1[BlueprintIcons_16.Link] = "61997",
    _a$1[BlueprintIcons_16.ListColumns] = "61998",
    _a$1[BlueprintIcons_16.ListDetailView] = "61999",
    _a$1[BlueprintIcons_16.List] = "62000",
    _a$1[BlueprintIcons_16.Locate] = "62001",
    _a$1[BlueprintIcons_16.Lock] = "62002",
    _a$1[BlueprintIcons_16.Locomotive] = "62267",
    _a$1[BlueprintIcons_16.LogIn] = "62003",
    _a$1[BlueprintIcons_16.LogOut] = "62004",
    _a$1[BlueprintIcons_16.LowVoltagePole] = "62258",
    _a$1[BlueprintIcons_16.Manual] = "62005",
    _a$1[BlueprintIcons_16.ManuallyEnteredData] = "62006",
    _a$1[BlueprintIcons_16.ManyToMany] = "62007",
    _a$1[BlueprintIcons_16.ManyToOne] = "62008",
    _a$1[BlueprintIcons_16.MapCreate] = "62009",
    _a$1[BlueprintIcons_16.MapMarker] = "62010",
    _a$1[BlueprintIcons_16.Map] = "62011",
    _a$1[BlueprintIcons_16.Maximize] = "62012",
    _a$1[BlueprintIcons_16.Media] = "62013",
    _a$1[BlueprintIcons_16.MenuClosed] = "62014",
    _a$1[BlueprintIcons_16.MenuOpen] = "62015",
    _a$1[BlueprintIcons_16.Menu] = "62016",
    _a$1[BlueprintIcons_16.MergeColumns] = "62017",
    _a$1[BlueprintIcons_16.MergeLinks] = "62018",
    _a$1[BlueprintIcons_16.Microphone] = "62275",
    _a$1[BlueprintIcons_16.Minimize] = "62019",
    _a$1[BlueprintIcons_16.Minus] = "62020",
    _a$1[BlueprintIcons_16.MobilePhone] = "62021",
    _a$1[BlueprintIcons_16.MobileVideo] = "62022",
    _a$1[BlueprintIcons_16.ModalFilled] = "62023",
    _a$1[BlueprintIcons_16.Modal] = "62024",
    _a$1[BlueprintIcons_16.Model] = "62269",
    _a$1[BlueprintIcons_16.Moon] = "62025",
    _a$1[BlueprintIcons_16.More] = "62026",
    _a$1[BlueprintIcons_16.Mountain] = "62027",
    _a$1[BlueprintIcons_16.Move] = "62028",
    _a$1[BlueprintIcons_16.Mugshot] = "62029",
    _a$1[BlueprintIcons_16.MultiSelect] = "62030",
    _a$1[BlueprintIcons_16.Music] = "62031",
    _a$1[BlueprintIcons_16.Nest] = "62032",
    _a$1[BlueprintIcons_16.NewDrawing] = "62033",
    _a$1[BlueprintIcons_16.NewGridItem] = "62034",
    _a$1[BlueprintIcons_16.NewLayer] = "62035",
    _a$1[BlueprintIcons_16.NewLayers] = "62036",
    _a$1[BlueprintIcons_16.NewLink] = "62037",
    _a$1[BlueprintIcons_16.NewObject] = "62038",
    _a$1[BlueprintIcons_16.NewPerson] = "62039",
    _a$1[BlueprintIcons_16.NewPrescription] = "62040",
    _a$1[BlueprintIcons_16.NewTextBox] = "62041",
    _a$1[BlueprintIcons_16.Ninja] = "62042",
    _a$1[BlueprintIcons_16.NotEqualTo] = "62043",
    _a$1[BlueprintIcons_16.NotificationsSnooze] = "62044",
    _a$1[BlueprintIcons_16.NotificationsUpdated] = "62045",
    _a$1[BlueprintIcons_16.Notifications] = "62046",
    _a$1[BlueprintIcons_16.NumberedList] = "62047",
    _a$1[BlueprintIcons_16.Numerical] = "62048",
    _a$1[BlueprintIcons_16.Office] = "62049",
    _a$1[BlueprintIcons_16.Offline] = "62050",
    _a$1[BlueprintIcons_16.OilField] = "62051",
    _a$1[BlueprintIcons_16.OneColumn] = "62052",
    _a$1[BlueprintIcons_16.OneToMany] = "62053",
    _a$1[BlueprintIcons_16.OneToOne] = "62054",
    _a$1[BlueprintIcons_16.OpenApplication] = "62251",
    _a$1[BlueprintIcons_16.Outdated] = "62055",
    _a$1[BlueprintIcons_16.PageLayout] = "62056",
    _a$1[BlueprintIcons_16.PanelStats] = "62057",
    _a$1[BlueprintIcons_16.PanelTable] = "62058",
    _a$1[BlueprintIcons_16.Paperclip] = "62059",
    _a$1[BlueprintIcons_16.Paragraph] = "62060",
    _a$1[BlueprintIcons_16.PathSearch] = "62061",
    _a$1[BlueprintIcons_16.Path] = "62062",
    _a$1[BlueprintIcons_16.Pause] = "62063",
    _a$1[BlueprintIcons_16.People] = "62064",
    _a$1[BlueprintIcons_16.Percentage] = "62065",
    _a$1[BlueprintIcons_16.Person] = "62066",
    _a$1[BlueprintIcons_16.Phone] = "62067",
    _a$1[BlueprintIcons_16.PieChart] = "62068",
    _a$1[BlueprintIcons_16.Pin] = "62069",
    _a$1[BlueprintIcons_16.PivotTable] = "62070",
    _a$1[BlueprintIcons_16.Pivot] = "62071",
    _a$1[BlueprintIcons_16.Play] = "62072",
    _a$1[BlueprintIcons_16.Playbook] = "62244",
    _a$1[BlueprintIcons_16.Plus] = "62073",
    _a$1[BlueprintIcons_16.PolygonFilter] = "62074",
    _a$1[BlueprintIcons_16.Power] = "62075",
    _a$1[BlueprintIcons_16.PredictiveAnalysis] = "62076",
    _a$1[BlueprintIcons_16.Prescription] = "62077",
    _a$1[BlueprintIcons_16.Presentation] = "62078",
    _a$1[BlueprintIcons_16.Print] = "62079",
    _a$1[BlueprintIcons_16.Projects] = "62080",
    _a$1[BlueprintIcons_16.Properties] = "62081",
    _a$1[BlueprintIcons_16.Property] = "62082",
    _a$1[BlueprintIcons_16.PublishFunction] = "62083",
    _a$1[BlueprintIcons_16.Pulse] = "62084",
    _a$1[BlueprintIcons_16.Rain] = "62085",
    _a$1[BlueprintIcons_16.Random] = "62086",
    _a$1[BlueprintIcons_16.Record] = "62087",
    _a$1[BlueprintIcons_16.RectHeight] = "62245",
    _a$1[BlueprintIcons_16.RectWidth] = "62246",
    _a$1[BlueprintIcons_16.Rectangle] = "62241",
    _a$1[BlueprintIcons_16.Redo] = "62088",
    _a$1[BlueprintIcons_16.Refresh] = "62089",
    _a$1[BlueprintIcons_16.Regex] = "62255",
    _a$1[BlueprintIcons_16.RegressionChart] = "62090",
    _a$1[BlueprintIcons_16.RemoveColumnLeft] = "62091",
    _a$1[BlueprintIcons_16.RemoveColumnRight] = "62092",
    _a$1[BlueprintIcons_16.RemoveColumn] = "62093",
    _a$1[BlueprintIcons_16.RemoveRowBottom] = "62094",
    _a$1[BlueprintIcons_16.RemoveRowTop] = "62095",
    _a$1[BlueprintIcons_16.Remove] = "62096",
    _a$1[BlueprintIcons_16.Repeat] = "62097",
    _a$1[BlueprintIcons_16.Reset] = "62098",
    _a$1[BlueprintIcons_16.Resolve] = "62099",
    _a$1[BlueprintIcons_16.Rig] = "62100",
    _a$1[BlueprintIcons_16.RightJoin] = "62101",
    _a$1[BlueprintIcons_16.Ring] = "62102",
    _a$1[BlueprintIcons_16.RocketSlant] = "62103",
    _a$1[BlueprintIcons_16.Rocket] = "62104",
    _a$1[BlueprintIcons_16.RotateDocument] = "62105",
    _a$1[BlueprintIcons_16.RotatePage] = "62106",
    _a$1[BlueprintIcons_16.Route] = "62107",
    _a$1[BlueprintIcons_16.Satellite] = "62108",
    _a$1[BlueprintIcons_16.Saved] = "62109",
    _a$1[BlueprintIcons_16.ScatterPlot] = "62110",
    _a$1[BlueprintIcons_16.SearchAround] = "62111",
    _a$1[BlueprintIcons_16.SearchTemplate] = "62112",
    _a$1[BlueprintIcons_16.SearchText] = "62113",
    _a$1[BlueprintIcons_16.Search] = "62114",
    _a$1[BlueprintIcons_16.SegmentedControl] = "62115",
    _a$1[BlueprintIcons_16.Select] = "62116",
    _a$1[BlueprintIcons_16.Selection] = "62117",
    _a$1[BlueprintIcons_16.SendMessage] = "62118",
    _a$1[BlueprintIcons_16.SendToGraph] = "62119",
    _a$1[BlueprintIcons_16.SendToMap] = "62120",
    _a$1[BlueprintIcons_16.SendTo] = "62121",
    _a$1[BlueprintIcons_16.Sensor] = "62268",
    _a$1[BlueprintIcons_16.SeriesAdd] = "62122",
    _a$1[BlueprintIcons_16.SeriesConfiguration] = "62123",
    _a$1[BlueprintIcons_16.SeriesDerived] = "62124",
    _a$1[BlueprintIcons_16.SeriesFiltered] = "62125",
    _a$1[BlueprintIcons_16.SeriesSearch] = "62126",
    _a$1[BlueprintIcons_16.Settings] = "62127",
    _a$1[BlueprintIcons_16.Shapes] = "62128",
    _a$1[BlueprintIcons_16.Share] = "62129",
    _a$1[BlueprintIcons_16.SharedFilter] = "62130",
    _a$1[BlueprintIcons_16.Shield] = "62131",
    _a$1[BlueprintIcons_16.Ship] = "62132",
    _a$1[BlueprintIcons_16.Shop] = "62133",
    _a$1[BlueprintIcons_16.ShoppingCart] = "62134",
    _a$1[BlueprintIcons_16.ShortenText] = "62271",
    _a$1[BlueprintIcons_16.SignalSearch] = "62135",
    _a$1[BlueprintIcons_16.SimCard] = "62136",
    _a$1[BlueprintIcons_16.Slash] = "62137",
    _a$1[BlueprintIcons_16.SmallCross] = "62138",
    _a$1[BlueprintIcons_16.SmallInfoSign] = "62260",
    _a$1[BlueprintIcons_16.SmallMinus] = "62139",
    _a$1[BlueprintIcons_16.SmallPlus] = "62140",
    _a$1[BlueprintIcons_16.SmallSquare] = "62141",
    _a$1[BlueprintIcons_16.SmallTick] = "62142",
    _a$1[BlueprintIcons_16.Snowflake] = "62143",
    _a$1[BlueprintIcons_16.SocialMedia] = "62144",
    _a$1[BlueprintIcons_16.SortAlphabeticalDesc] = "62145",
    _a$1[BlueprintIcons_16.SortAlphabetical] = "62146",
    _a$1[BlueprintIcons_16.SortAsc] = "62147",
    _a$1[BlueprintIcons_16.SortDesc] = "62148",
    _a$1[BlueprintIcons_16.SortNumericalDesc] = "62149",
    _a$1[BlueprintIcons_16.SortNumerical] = "62150",
    _a$1[BlueprintIcons_16.Sort] = "62151",
    _a$1[BlueprintIcons_16.SpellCheck] = "62272",
    _a$1[BlueprintIcons_16.SplitColumns] = "62152",
    _a$1[BlueprintIcons_16.Square] = "62153",
    _a$1[BlueprintIcons_16.StackedChart] = "62154",
    _a$1[BlueprintIcons_16.StadiumGeometry] = "62155",
    _a$1[BlueprintIcons_16.StarEmpty] = "62156",
    _a$1[BlueprintIcons_16.Star] = "62157",
    _a$1[BlueprintIcons_16.StepBackward] = "62158",
    _a$1[BlueprintIcons_16.StepChart] = "62159",
    _a$1[BlueprintIcons_16.StepForward] = "62160",
    _a$1[BlueprintIcons_16.Stop] = "62161",
    _a$1[BlueprintIcons_16.Stopwatch] = "62162",
    _a$1[BlueprintIcons_16.Strikethrough] = "62163",
    _a$1[BlueprintIcons_16.Style] = "62164",
    _a$1[BlueprintIcons_16.Subscript] = "62265",
    _a$1[BlueprintIcons_16.Superscript] = "62266",
    _a$1[BlueprintIcons_16.SwapHorizontal] = "62165",
    _a$1[BlueprintIcons_16.SwapVertical] = "62166",
    _a$1[BlueprintIcons_16.Switch] = "62167",
    _a$1[BlueprintIcons_16.SymbolCircle] = "62168",
    _a$1[BlueprintIcons_16.SymbolCross] = "62169",
    _a$1[BlueprintIcons_16.SymbolDiamond] = "62170",
    _a$1[BlueprintIcons_16.SymbolRectangle] = "62242",
    _a$1[BlueprintIcons_16.SymbolSquare] = "62171",
    _a$1[BlueprintIcons_16.SymbolTriangleDown] = "62172",
    _a$1[BlueprintIcons_16.SymbolTriangleUp] = "62173",
    _a$1[BlueprintIcons_16.Syringe] = "62174",
    _a$1[BlueprintIcons_16.Tag] = "62175",
    _a$1[BlueprintIcons_16.TakeAction] = "62176",
    _a$1[BlueprintIcons_16.Tank] = "62177",
    _a$1[BlueprintIcons_16.Target] = "62178",
    _a$1[BlueprintIcons_16.Taxi] = "62179",
    _a$1[BlueprintIcons_16.Temperature] = "62180",
    _a$1[BlueprintIcons_16.TextHighlight] = "62181",
    _a$1[BlueprintIcons_16.ThDerived] = "62182",
    _a$1[BlueprintIcons_16.ThDisconnect] = "62183",
    _a$1[BlueprintIcons_16.ThFiltered] = "62184",
    _a$1[BlueprintIcons_16.ThList] = "62185",
    _a$1[BlueprintIcons_16.Th] = "62186",
    _a$1[BlueprintIcons_16.ThirdParty] = "62187",
    _a$1[BlueprintIcons_16.ThumbsDown] = "62188",
    _a$1[BlueprintIcons_16.ThumbsUp] = "62189",
    _a$1[BlueprintIcons_16.TickCircle] = "62190",
    _a$1[BlueprintIcons_16.Tick] = "62191",
    _a$1[BlueprintIcons_16.Time] = "62192",
    _a$1[BlueprintIcons_16.TimelineAreaChart] = "62193",
    _a$1[BlueprintIcons_16.TimelineBarChart] = "62194",
    _a$1[BlueprintIcons_16.TimelineEvents] = "62195",
    _a$1[BlueprintIcons_16.TimelineLineChart] = "62196",
    _a$1[BlueprintIcons_16.Tint] = "62197",
    _a$1[BlueprintIcons_16.Torch] = "62198",
    _a$1[BlueprintIcons_16.Tractor] = "62199",
    _a$1[BlueprintIcons_16.Train] = "62200",
    _a$1[BlueprintIcons_16.Translate] = "62201",
    _a$1[BlueprintIcons_16.Trash] = "62202",
    _a$1[BlueprintIcons_16.Tree] = "62203",
    _a$1[BlueprintIcons_16.TrendingDown] = "62204",
    _a$1[BlueprintIcons_16.TrendingUp] = "62205",
    _a$1[BlueprintIcons_16.Truck] = "62206",
    _a$1[BlueprintIcons_16.TwoColumns] = "62207",
    _a$1[BlueprintIcons_16.Unarchive] = "62208",
    _a$1[BlueprintIcons_16.Underline] = "62209",
    _a$1[BlueprintIcons_16.Undo] = "62210",
    _a$1[BlueprintIcons_16.UngroupObjects] = "62211",
    _a$1[BlueprintIcons_16.UnknownVehicle] = "62212",
    _a$1[BlueprintIcons_16.Unlock] = "62213",
    _a$1[BlueprintIcons_16.Unpin] = "62214",
    _a$1[BlueprintIcons_16.Unresolve] = "62215",
    _a$1[BlueprintIcons_16.Updated] = "62216",
    _a$1[BlueprintIcons_16.Upload] = "62217",
    _a$1[BlueprintIcons_16.User] = "62218",
    _a$1[BlueprintIcons_16.Variable] = "62219",
    _a$1[BlueprintIcons_16.VerticalBarChartAsc] = "62220",
    _a$1[BlueprintIcons_16.VerticalBarChartDesc] = "62221",
    _a$1[BlueprintIcons_16.VerticalDistribution] = "62222",
    _a$1[BlueprintIcons_16.VerticalInbetween] = "62250",
    _a$1[BlueprintIcons_16.Video] = "62223",
    _a$1[BlueprintIcons_16.Virus] = "62224",
    _a$1[BlueprintIcons_16.VolumeDown] = "62225",
    _a$1[BlueprintIcons_16.VolumeOff] = "62226",
    _a$1[BlueprintIcons_16.VolumeUp] = "62227",
    _a$1[BlueprintIcons_16.Walk] = "62228",
    _a$1[BlueprintIcons_16.WarningSign] = "62229",
    _a$1[BlueprintIcons_16.WaterfallChart] = "62230",
    _a$1[BlueprintIcons_16.Waves] = "62231",
    _a$1[BlueprintIcons_16.WidgetButton] = "62232",
    _a$1[BlueprintIcons_16.WidgetFooter] = "62233",
    _a$1[BlueprintIcons_16.WidgetHeader] = "62234",
    _a$1[BlueprintIcons_16.Widget] = "62235",
    _a$1[BlueprintIcons_16.Wind] = "62236",
    _a$1[BlueprintIcons_16.Wrench] = "62237",
    _a$1[BlueprintIcons_16.ZoomIn] = "62238",
    _a$1[BlueprintIcons_16.ZoomOut] = "62239",
    _a$1[BlueprintIcons_16.ZoomToFit] = "62240",
    _a$1);

/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IconNamesNew = {};
var IconNamesLegacy = {};
for (var _i = 0, _a = Object.values(BlueprintIcons_16); _i < _a.length; _i++) {
    var name_1 = _a[_i];
    IconNamesNew[pascalCase(name_1)] = name_1;
    IconNamesLegacy[snakeCase(name_1).toUpperCase()] = name_1;
}
var IconNames = __assign$3(__assign$3({}, IconNamesNew), IconNamesLegacy);

/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns whether bundler-injected variable `NODE_ENV` equals `env`. */
function isNodeEnv(env) {
    return typeof NODE_ENV !== "undefined" && NODE_ENV === env;
}
/**
 * Wraps an async task with a performance timer. Only logs to console in development.
 */
function wrapWithTimer(taskDescription, task) {
    return __awaiter(this, void 0, void 0, function () {
        var shouldMeasure, start, time;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    shouldMeasure = isNodeEnv("development") && typeof performance !== "undefined";
                    /* eslint-disable no-console */
                    if (shouldMeasure) {
                        start = performance.now();
                        console.info("Started '".concat(taskDescription, "'..."));
                    }
                    return [4 /*yield*/, task()];
                case 1:
                    _a.sent();
                    if (shouldMeasure) {
                        time = Math.round(performance.now() - start);
                        console.info("Finished '".concat(taskDescription, "' in ").concat(time, "ms"));
                    }
                    return [2 /*return*/];
            }
        });
    });
}

function getLoaderFn(options) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, loader;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = options.loader, loader = _a === void 0 ? singleton.defaultLoader : _a;
                    if (!(typeof loader === "function")) return [3 /*break*/, 1];
                    return [2 /*return*/, loader];
                case 1:
                    if (!(loader === "all")) return [3 /*break*/, 3];
                    return [4 /*yield*/, __vitePreload(() => import('./allPathsLoader-496ffe62.js'),true?[]:void 0,import.meta.url)];
                case 2: return [2 /*return*/, (_b.sent()).allPathsLoader];
                case 3: return [4 /*yield*/, __vitePreload(() => import('./splitPathsBySizeLoader-5c1d449a.js'),true?[]:void 0,import.meta.url)];
                case 4: return [2 /*return*/, (_b.sent()).splitPathsBySizeLoader];
            }
        });
    });
}
/**
 * Blueprint icons loader.
 */
var Icons = /** @class */ (function () {
    function Icons() {
        /** @internal */
        this.defaultLoader = "split-by-size";
        /** @internal */
        this.loadedIconPaths16 = new Map();
        /** @internal */
        this.loadedIconPaths20 = new Map();
    }
    /**
     * Set global icon loading options for all subsequent `Icons.load()` calls.
     */
    Icons.setLoaderOptions = function (options) {
        if (options.loader !== undefined) {
            singleton.defaultLoader = options.loader;
        }
    };
    Icons.load = function (icons, size, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Array.isArray(icons)) {
                            icons = [icons];
                        }
                        return [4 /*yield*/, Promise.all(icons.map(function (icon) { return _this.loadImpl(icon, size, options); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Load all available icons for use in Blueprint components.
     */
    Icons.loadAll = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var allIcons;
            var _this = this;
            return __generator(this, function (_a) {
                allIcons = Object.values(IconNames);
                wrapWithTimer("[Blueprint] loading all icons", function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all([
                                    this.load(allIcons, IconSize.STANDARD, options),
                                    this.load(allIcons, IconSize.LARGE, options),
                                ])];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Get the icon SVG paths. Returns `undefined` if the icon has not been loaded yet.
     */
    Icons.getPaths = function (icon, size) {
        if (!this.isValidIconName(icon)) {
            // don't warn, since this.load() will have warned already
            return undefined;
        }
        var loadedIcons = size < IconSize.LARGE ? singleton.loadedIconPaths16 : singleton.loadedIconPaths20;
        return loadedIcons.get(icon);
    };
    Icons.loadImpl = function (icon, size, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var loadedIcons, loaderFn, supportedSize, paths, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isValidIconName(icon)) {
                            console.error("[Blueprint] Unknown icon '".concat(icon, "'"));
                            return [2 /*return*/];
                        }
                        loadedIcons = size < IconSize.LARGE ? singleton.loadedIconPaths16 : singleton.loadedIconPaths20;
                        if (loadedIcons.has(icon)) {
                            // already loaded, no-op
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, getLoaderFn(options)];
                    case 1:
                        loaderFn = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        supportedSize = size < IconSize.LARGE ? IconSize.STANDARD : IconSize.LARGE;
                        return [4 /*yield*/, loaderFn(icon, supportedSize)];
                    case 3:
                        paths = _a.sent();
                        loadedIcons.set(icon, paths);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error("[Blueprint] Unable to load ".concat(size, "px icon '").concat(icon, "'"), e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @returns true if the given string is a valid {@link IconName}
     */
    Icons.isValidIconName = function (iconName) {
        var allIcons = Object.values(IconNames);
        return allIcons.indexOf(iconName) >= 0;
    };
    return Icons;
}());
var singleton = new Icons();

/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var NS = "bp5";
var ICON = "".concat(NS, "-icon");

/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var uniqueCountForNamespace = new Map();
/** Generate a unique ID within a given namespace, using a simple counter-based implementation to avoid collisions. */
function uniqueId(namespace) {
    var _a;
    var curCount = (_a = uniqueCountForNamespace.get(namespace)) !== null && _a !== void 0 ? _a : 0;
    uniqueCountForNamespace.set(namespace, curCount + 1);
    return "".concat(namespace, "-").concat(curCount);
}

/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// eslint-disable-next-line prefer-arrow-callback
var SVGIconContainer = k(function (props, ref) {
    var children = props.children, className = props.className, color = props.color, htmlTitle = props.htmlTitle, iconName = props.iconName, _a = props.size, size = _a === void 0 ? IconSize.STANDARD : _a, svgProps = props.svgProps, _b = props.tagName, tagName = _b === void 0 ? "span" : _b, title = props.title, htmlProps = __rest(props, ["children", "className", "color", "htmlTitle", "iconName", "size", "svgProps", "tagName", "title"]);
    var isLarge = size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var viewBox = "0 0 ".concat(pixelGridSize, " ").concat(pixelGridSize);
    var titleId = uniqueId("iconTitle");
    var sharedSvgProps = __assign$3({ "data-icon": iconName, fill: color, height: size, role: "img", viewBox: viewBox, width: size }, svgProps);
    if (tagName === null) {
        return (y$2("svg", __assign$3({ "aria-labelledby": title ? titleId : undefined, ref: ref }, sharedSvgProps, htmlProps),
            title && y$2("title", { id: titleId }, title),
            children));
    }
    else {
        return y$2(tagName, __assign$3(__assign$3({}, htmlProps), { "aria-hidden": title ? undefined : true, className: classNames(ICON, "".concat(ICON, "-").concat(iconName), className), ref: ref, title: htmlTitle }), y$2("svg", __assign$3({}, sharedSvgProps),
            title && y$2("title", null, title),
            children));
    }
});
SVGIconContainer.displayName = "Blueprint5.SVGIconContainer";

/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SmallCross = k(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (y$2(SVGIconContainer, __assign$3({ iconName: "small-cross", ref: ref }, props),
        y$2("path", { d: isLarge ? "M228.2 200L294 265.8C297.8 269.4 300 274.4 300 280C300 291 291 300 280 300C274.4000000000001 300 269.4000000000001 297.8 265.8 294.2L200 228.2L134.2 294.2C130.6 297.8 125.6 300 120 300C109 300 100 291 100 280C100 274.4 102.2 269.4 105.8 265.8L171.8 200L106 134.2000000000001C102.2 130.6 100 125.6 100 120C100 109 109 100 120 100C125.6 100 130.6 102.2 134.2 105.8L200 171.8L265.8 106C269.4000000000001 102.2 274.4000000000001 100 280 100C291 100 300 109 300 120C300 125.6 297.8 130.6 294.2000000000001 134.2000000000001L228.2 200z" : "M188.2 160L234 205.8C237.8 209.4 240 214.4 240 220C240 231 231 240 220 240C214.4 240 209.4 237.8 205.8 234.2L160 188.2L114.2 234.2C110.6 237.8 105.6 240 100 240C89 240 80 231 80 220C80 214.4 82.2 209.4 85.8 205.8L131.8 160L86 114.2C82.2 110.6 80 105.6 80 100C80 89 89 80 100 80C105.6 80 110.6 82.2 114.2 85.8L160 131.8L205.8 86C209.4 82.2 214.4 80 220 80C231 80 240 89 240 100C240 105.6 237.8 110.6 234.2 114.2L188.2 160z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
SmallCross.defaultProps = {
    size: IconSize.STANDARD,
};
SmallCross.displayName = "Blueprint5.Icon.SmallCross";

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Icon component.
 *
 * @see https://blueprintjs.com/docs/#core/components/icon
 */
// eslint-disable-next-line prefer-arrow-callback
var Icon = k(function (props, ref) {
    var _a, _b;
    var autoLoad = props.autoLoad, className = props.className, color = props.color, icon = props.icon, intent = props.intent, tagName = props.tagName, svgProps = props.svgProps, title = props.title, htmlTitle = props.htmlTitle, htmlProps = __rest(props, ["autoLoad", "className", "color", "icon", "intent", "tagName", "svgProps", "title", "htmlTitle"]);
    // Preserve Blueprint v4.x behavior: iconSize prop takes predecence, then size prop, then fall back to default value
    // eslint-disable-next-line deprecation/deprecation
    var size = (_b = (_a = props.iconSize) !== null && _a !== void 0 ? _a : props.size) !== null && _b !== void 0 ? _b : IconSize.STANDARD;
    var _c = h(function () {
        return typeof icon === "string" ? Icons.getPaths(icon, size) : undefined;
    }), iconPaths = _c[0], setIconPaths = _c[1];
    p$2(function () {
        var shouldCancelIconLoading = false;
        if (typeof icon === "string") {
            // The icon may have been loaded already, in which case we can simply grab it.
            // N.B. when `autoLoad={true}`, we can't rely on simply calling Icons.load() here to re-load an icon module
            // which has already been loaded & cached, since it may have been loaded with special loading options which
            // this component knows nothing about.
            var loadedIconPaths = Icons.getPaths(icon, size);
            if (loadedIconPaths !== undefined) {
                setIconPaths(loadedIconPaths);
            }
            else if (autoLoad) {
                Icons.load(icon, size)
                    .then(function () {
                    // if this effect expired by the time icon loaded, then don't set state
                    if (!shouldCancelIconLoading) {
                        setIconPaths(Icons.getPaths(icon, size));
                    }
                })
                    .catch(function (reason) {
                    console.error("[Blueprint] Icon '".concat(icon, "' (").concat(size, "px) could not be loaded."), reason);
                });
            }
            else {
                console.error("[Blueprint] Icon '".concat(icon, "' (").concat(size, "px) is not loaded yet and autoLoad={false}, did you call Icons.load('").concat(icon, "', ").concat(size, ")?"));
            }
        }
        return function () {
            shouldCancelIconLoading = true;
        };
    }, [autoLoad, icon, size]);
    if (icon == null || typeof icon === "boolean") {
        return null;
    }
    else if (typeof icon !== "string") {
        return icon;
    }
    if (iconPaths == null) {
        // fall back to icon font if unloaded or unable to load SVG implementation
        var sizeClass = size === IconSize.STANDARD
            ? ICON_STANDARD
            : size === IconSize.LARGE
                ? ICON_LARGE
                : undefined;
        return y$2(tagName, __assign$3(__assign$3({}, removeNonHTMLProps(htmlProps)), { "aria-hidden": title ? undefined : true, className: classNames(ICON$1, sizeClass, iconClass(icon), intentClass(intent), className), "data-icon": icon, ref: ref, title: htmlTitle }));
    }
    else {
        var pathElements = iconPaths.map(function (d, i) { return y$2("path", { d: d, key: i, fillRule: "evenodd" }); });
        // HACKHACK: there is no good way to narrow the type of SVGIconContainerProps here because of the use
        // of a conditional type within the type union that defines that interface. So we cast to <any>.
        // see https://github.com/microsoft/TypeScript/issues/24929, https://github.com/microsoft/TypeScript/issues/33014
        return (y$2(SVGIconContainer, __assign$3({ children: pathElements, 
            // don't forward Classes.iconClass(icon) here, since the container will render that class
            className: classNames(intentClass(intent), className), color: color, htmlTitle: htmlTitle, iconName: icon, ref: ref, size: size, svgProps: svgProps, tagName: tagName, title: title }, removeNonHTMLProps(htmlProps))));
    }
});
Icon.defaultProps = {
    autoLoad: true,
    tagName: "span",
};
Icon.displayName = "".concat(DISPLAYNAME_PREFIX, ".Icon");

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Text component.
 *
 * @see https://blueprintjs.com/docs/#core/components/text
 */
var Text = function (_a) {
    var _b;
    var children = _a.children, _c = _a.tagName, tagName = _c === void 0 ? "div" : _c, title = _a.title, className = _a.className, ellipsize = _a.ellipsize, htmlProps = __rest(_a, ["children", "tagName", "title", "className", "ellipsize"]);
    var textRef = _$3();
    var _d = h(""), textContent = _d[0], setTextContent = _d[1];
    var _e = h(), isContentOverflowing = _e[0], setIsContentOverflowing = _e[1];
    // try to be conservative about running this effect, since querying scrollWidth causes the browser to reflow / recalculate styles,
    // which can be very expensive for long lists (for example, in long Menus)
    y$1(function () {
        var _a;
        if (((_a = textRef.current) === null || _a === void 0 ? void 0 : _a.textContent) != null) {
            setIsContentOverflowing(ellipsize && textRef.current.scrollWidth > textRef.current.clientWidth);
            setTextContent(textRef.current.textContent);
        }
    }, [textRef, children, ellipsize]);
    return y$2(tagName, __assign$3(__assign$3({}, htmlProps), { className: classNames((_b = {},
            _b[TEXT_OVERFLOW_ELLIPSIS] = ellipsize,
            _b), className), ref: textRef, title: title !== null && title !== void 0 ? title : (isContentOverflowing ? textContent : undefined) }), children);
};
Text.defaultProps = {
    ellipsize: false,
};
Text.displayName = "".concat(DISPLAYNAME_PREFIX, ".Text");

/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Card component.
 *
 * @see https://blueprintjs.com/docs/#core/components/card
 */
var Card = k(function (props, ref) {
    var _a;
    var className = props.className, elevation = props.elevation, interactive = props.interactive, htmlProps = __rest(props, ["className", "elevation", "interactive"]);
    var classes = classNames(CARD, (_a = {}, _a[INTERACTIVE] = interactive, _a), elevationClass(elevation), className);
    return y$2("div", __assign$3({ className: classes, ref: ref }, htmlProps));
});
Card.defaultProps = {
    elevation: Elevation.ZERO,
    interactive: false,
};
Card.displayName = "".concat(DISPLAYNAME_PREFIX, ".Card");

/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Tag component.
 *
 * @see https://blueprintjs.com/docs/#core/components/tag
 */
var Tag = k(function (props, ref) {
    var _a;
    var active = props.active, children = props.children, className = props.className, fill = props.fill, icon = props.icon, intent = props.intent, interactive = props.interactive, large = props.large, minimal = props.minimal, multiline = props.multiline, onRemove = props.onRemove, rightIcon = props.rightIcon, round = props.round, _b = props.tabIndex, tabIndex = _b === void 0 ? 0 : _b, htmlTitle = props.htmlTitle, htmlProps = __rest(props, ["active", "children", "className", "fill", "icon", "intent", "interactive", "large", "minimal", "multiline", "onRemove", "rightIcon", "round", "tabIndex", "htmlTitle"]);
    var isRemovable = isFunction(onRemove);
    var tagClasses = classNames(TAG, intentClass(intent), (_a = {},
        _a[ACTIVE] = active,
        _a[FILL] = fill,
        _a[INTERACTIVE] = interactive,
        _a[LARGE] = large,
        _a[MINIMAL] = minimal,
        _a[ROUND] = round,
        _a), className);
    var isLarge = large || tagClasses.indexOf(LARGE) >= 0;
    var handleRemoveClick = function (e) {
        var _a;
        (_a = props.onRemove) === null || _a === void 0 ? void 0 : _a.call(props, e, props);
    };
    var removeButton = isRemovable ? (y$2("button", { "aria-label": "Remove tag", type: "button", className: TAG_REMOVE, onClick: handleRemoveClick, tabIndex: tabIndex },
        y$2(SmallCross, { size: isLarge ? IconSize.LARGE : IconSize.STANDARD }))) : null;
    return (y$2("span", __assign$3({}, htmlProps, { className: tagClasses, tabIndex: interactive ? tabIndex : undefined, ref: ref }),
        y$2(Icon, { icon: icon }),
        !isReactNodeEmpty(children) && (y$2(Text, { className: FILL, ellipsize: !multiline, tagName: "span", title: htmlTitle }, children)),
        y$2(Icon, { icon: rightIcon }),
        removeButton));
});
Tag.displayName = "".concat(DISPLAYNAME_PREFIX, ".Tag");

var _=0;function o(o,e,n,t,f,l){var s,u,a={};for(u in e)"ref"==u?s=e[u]:a[u]=e[u];var i={type:o,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_,__source:f,__self:l};if("function"==typeof o&&(s=o.defaultProps))for(u in s)void 0===a[u]&&(a[u]=s[u]);return l$3.vnode&&l$3.vnode(i),i}

const hours = d$1({});
const timezoneMap = {
    "ET": -5,
    "GMT": 0,
    "JST": 9,
    "LOCAL": new Date().getTimezoneOffset() * -1 / 60
};
const marketTimezoneMap = {
    "NYSE": "ET",
    "LSE": "GMT",
    "TSE": "JST",
    "BVB": "LOCAL"
};
const marketTitles = {
    "NYSE": {
        name: "New York Stock Exchange",
        short: "NYSE"
    },
    "LSE": {
        name: "London Stock Exchange",
        short: "LSE"
    },
    "TSE": {
        name: "Tōkyō Shōken Torihikijo",
        short: "TSE"
    },
    "BVB": {
        name: "Bursa de Valori București",
        short: "BVB"
    }
};
const marketHours = {
    "NYSE": [
        {
            "open": 9.5,
            "close": 16
        }
    ],
    "LSE": [
        {
            "open": 8,
            "close": 16.5
        }
    ],
    "TSE": [
        {
            "open": 9,
            "close": 11.5
        },
        {
            "open": 12.5,
            "close": 15
        }
    ],
    "BVB": [
        {
            "open": 10,
            "close": 18.833333
        }
    ]
};
const adjustTime = (time, timezone)=>{
    return new Date(time.getTime() + timezoneMap[timezone] * 60 * 60 * 1000);
};
const parseDate = (date)=>{
    const ISO = date.toISOString();
    const [year, month, day] = ISO.split("T")[0].split("-");
    const [hour, minute, second] = ISO.split("T")[1].split(".")[0].split(":");
    return {
        year,
        month,
        day,
        hour,
        minute,
        second
    };
};
const marketHoursToDate = (market)=>{
    return marketHours[market].map((time)=>{
        let open = new Date();
        open = new Date(open.setHours(time.open));
        open = new Date(open.setMinutes(0));
        open = new Date(open.setSeconds(0));
        open = new Date(open.setMilliseconds(0));
        // if fractional hours, add minutes
        if (time.open % 1 !== 0) {
            open = new Date(open.setMinutes(parseInt(time.open.toString().split(".")[0])));
            open = new Date(open.setMinutes(parseInt('0.' + time.open.toString().split(".")[1]) * 60));
        }
        open = adjustTime(open, 'LOCAL');
        let close = new Date();
        close = new Date(close.setHours(time.close));
        close = new Date(close.setMinutes(0));
        close = new Date(close.setSeconds(0));
        close = new Date(close.setMilliseconds(0));
        // if fractional hours, add minutes
        if (time.close % 1 !== 0) {
            close = new Date(close.setMinutes(parseInt(time.close.toString().split(".")[0])));
            close = new Date(close.setMinutes(parseInt('0.' + time.close.toString().split(".")[1]) * 60));
        }
        close = adjustTime(close, 'LOCAL');
        return {
            open,
            close
        };
    });
};
const DifereceString = (date1, date2)=>{
    const diff = Math.abs(date1.getTime() - date2.getTime());
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    const pad = (n)=>n < 10 ? '0' + n : n;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};
const NearestInterval = (market)=>{
    const intervals = marketHoursToDate(market);
    const now = adjustTime(new Date(), 'LOCAL');
    const nearest = {
        open: intervals.reduce((prev, curr)=>{
            return Math.abs(curr.open.getTime() - now.getTime()) < Math.abs(prev.open.getTime() - now.getTime()) ? curr : prev;
        }).open,
        close: intervals.reduce((prev, curr)=>{
            return Math.abs(curr.close.getTime() - now.getTime()) < Math.abs(prev.close.getTime() - now.getTime()) ? curr : prev;
        }).close
    };
    return {
        nearest
    };
};
const isOpenInterval = (market, interval)=>{
    const open = parseDate(interval.open);
    const close = parseDate(interval.close);
    let hour = market.time.hour >= open.hour && market.time.hour <= close.hour;
    let minute = false;
    if (hour) {
        if (market.time.hour === open.hour) {
            minute = market.time.minute >= open.minute;
        }
        if (market.time.hour === close.hour) {
            minute = market.time.minute <= close.minute;
        }
        if (market.time.hour > open.hour && market.time.hour < close.hour) {
            minute = true;
        }
    }
    return hour && minute;
};
const isOpen = (market)=>{
    return market.schedule.map((interval)=>({
            ...interval,
            isopen: isOpenInterval(market, interval)
        }));
};
function playSound() {
    var a = new Audio('./bell.mp3');
    a.play();
}
const NightMode = ()=>{
    const now = new Date();
    if (now.getHours() > 18 || now.getHours() < 6) {
        document.body.classList.add('bp5-dark');
    } else {
        document.body.classList.remove('bp5-dark');
    }
};
const nearestSecond = ()=>{
    let now = new Date();
    return now.getTime() - now.setMilliseconds(0);
};
setTimeout(()=>{
    setInterval(()=>{
        let snapshot = hours.value;
        let update = Object.keys(marketTitles).reduce((prev, curr)=>{
            let data = {
                id: curr,
                name: marketTitles[curr].name,
                short: marketTitles[curr].short,
                open: false,
                description: '',
                time: parseDate(adjustTime(new Date(), marketTimezoneMap[curr])),
                schedule: marketHoursToDate(curr),
                diff: NearestInterval(curr),
                tto: {
                    open: DifereceString(adjustTime(new Date(), marketTimezoneMap[curr]), NearestInterval(curr).nearest.open),
                    close: DifereceString(adjustTime(new Date(), marketTimezoneMap[curr]), NearestInterval(curr).nearest.close)
                }
            };
            data.schedule = isOpen(data);
            data.open = data.schedule.some((interval)=>interval.isopen);
            data.description = data.open ? `Market closes in ${DifereceString(adjustTime(new Date(), marketTimezoneMap[curr]), NearestInterval(curr).nearest.close)}` : `Market opens in ${DifereceString(adjustTime(new Date(), marketTimezoneMap[curr]), NearestInterval(curr).nearest.open)}`;
            prev[curr] = data;
            return prev;
        }, {});
        Object.keys(update).forEach((market)=>{
            if (snapshot[market] && snapshot[market].open !== update[market].open) {
                playSound();
            }
        });
        hours.value = update;
        NightMode();
    }, 1000);
}, nearestSecond());
const screenSize = d$1({
    width: window.innerWidth,
    height: window.innerHeight
});
window.addEventListener('resize', ()=>{
    screenSize.value = {
        width: window.innerWidth,
        height: window.innerHeight
    };
});
const center = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};
const clockStyle = {
    fontSize: "5em",
    fontWeight: "bold"
};
const nameStyle = {
    display: "flex",
    justifyContent: "between",
    alignItems: "center",
    fontSize: "5em",
    fontWeight: "bold"
};
const descriptionStyle = {
    fontSize: "2em"
};
const cardStyle = {
    width: "30vw",
    margin: "1em"
};
const marketHoursStyle = {
    ...center,
    width: "100%"
};
const MarketClock = ({ market })=>{
    return o(k$2, {
        children: o(Card, {
            interactive: true,
            style: cardStyle,
            elevation: 2,
            children: o("div", {
                style: center,
                children: [
                    o("div", {
                        style: nameStyle,
                        children: [
                            market.short,
                            " ",
                            o(Icon, {
                                style: {
                                    margin: '0.4em'
                                },
                                size: 50,
                                intent: market.open ? Intent.SUCCESS : Intent.DANGER,
                                icon: "time"
                            })
                        ]
                    }),
                    o("div", {
                        style: clockStyle,
                        children: [
                            market.time.hour,
                            ":",
                            market.time.minute,
                            ":",
                            market.time.second
                        ]
                    }),
                    o("div", {
                        style: descriptionStyle,
                        children: market.description
                    }),
                    o("div", {
                        style: marketHoursStyle,
                        children: market.schedule.map((interval)=>{
                            const open = parseDate(interval.open);
                            const close = parseDate(interval.close);
                            return o("div", {
                                style: {
                                    width: "100%"
                                },
                                children: o(Tag, {
                                    large: true,
                                    minimal: true,
                                    fill: true,
                                    style: {
                                        margin: "0.5em"
                                    },
                                    intent: interval.isopen ? Intent.SUCCESS : Intent.DANGER,
                                    children: o("div", {
                                        style: {
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontWeight: "bold",
                                            fontSize: "1.5em"
                                        },
                                        children: [
                                            open.hour,
                                            ":",
                                            open.minute,
                                            " - ",
                                            close.hour,
                                            ":",
                                            close.minute
                                        ]
                                    })
                                })
                            });
                        })
                    })
                ]
            })
        })
    });
};
const App = ()=>{
    return o("div", {
        style: {
            height: "100vh",
            width: "100vw",
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            position: "absolute",
            top: 0,
            left: 0
        },
        className: "bp5-card",
        children: o("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap"
            },
            children: Object.keys(hours.value).map((market)=>{
                return o(MarketClock, {
                    market: hours.value[market]
                });
            })
        })
    });
};

const root = document.getElementById('root');
D$1(o(App, {}), root);

export { IconSize as I, __awaiter as _, __generator as a, __vitePreload as b, pascalCase as p };
//# sourceMappingURL=index-bdf8bba0.js.map
