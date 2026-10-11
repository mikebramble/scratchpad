(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const Zo=!1;var Us=Array.isArray,ap=Array.prototype.indexOf,Vs=Array.from,ip=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Af=Object.getOwnPropertyDescriptors,op=Object.prototype,sp=Array.prototype,Hs=Object.getPrototypeOf,kl=Object.isExtensible;function lp(t){return typeof t=="function"}const ur=()=>{};function cp(t){return t()}function Qo(t){for(var e=0;e<t.length;e++)t[e]()}function Mf(){var t,e,n=new Promise((r,a)=>{t=r,e=a});return{promise:n,resolve:t,reject:e}}function up(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const Ye=2,qs=4,wi=8,Ut=16,on=32,Xn=64,yi=128,Lt=512,He=1024,ot=2048,Vt=4096,gt=8192,Zt=16384,vi=32768,wn=65536,El=1<<17,jf=1<<18,Or=1<<19,Lf=1<<20,Bn=32768,es=1<<21,Gs=1<<22,gn=1<<23,Qt=Symbol("$state"),fp=Symbol("legacy props"),dp=Symbol(""),_r=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function _p(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function gp(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function pp(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function hp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function mp(t){throw new Error("https://svelte.dev/e/effect_orphan")}function bp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function wp(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function yp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function vp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function xp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Sp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Cf=1,$f=2,Tf=4,kp=8,Ep=16,Ap=1,Mp=2,jp=4,Lp=8,Cp=16,$p=1,Tp=2,Rp=4,Op=1,Np=2,Qe=Symbol(),Fp="http://www.w3.org/1999/xhtml";function Ip(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Wp(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Rf(t){return t===this.v}function zp(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Of(t){return!zp(t,this.v)}let Nr=!1,Pp=!1;function Dp(){Nr=!0}let Se=null;function vr(t){Se=t}function Mn(t,e=!1,n){Se={p:Se,i:!1,c:null,e:null,s:t,x:null,l:Nr&&!e?{s:null,u:null,$:[]}:null}}function jn(t){var e=Se,n=e.e;if(n!==null){e.e=null;for(var r of n)Yf(r)}return t!==void 0&&(e.x=t),e.i=!0,Se=e.p,t??{}}function da(){return!Nr||Se!==null&&Se.l===null}let On=[];function Nf(){var t=On;On=[],Qo(t)}function Zn(t){if(On.length===0&&!Yr){var e=On;queueMicrotask(()=>{e===On&&Nf()})}On.push(t)}function Bp(){for(;On.length>0;)Nf()}function Ff(t){var e=oe;if(e===null)return re.f|=gn,t;if((e.f&vi)===0){if((e.f&yi)===0)throw t;e.b.error(t)}else xr(t,e)}function xr(t,e){for(;e!==null;){if((e.f&yi)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t}const ja=new Set;let _e=null,Va=null,ft=null,vt=[],xi=null,ts=!1,Yr=!1;class Wt{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#r=0;#n=0;#l=null;#i=[];#a=[];skipped_effects=new Set;is_fork=!1;is_deferred(){return this.is_fork||this.#n>0}process(e){vt=[],Va=null,this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#o(r,n);this.is_fork||this.#u(),this.is_deferred()?(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects)):(Va=this,_e=null,Al(n.render_effects),Al(n.effects),Va=null,this.#l?.resolve()),ft=null}#o(e,n){e.f^=He;for(var r=e.first;r!==null;){var a=r.f,i=(a&(on|Xn))!==0,o=i&&(a&He)!==0,s=o||(a&gt)!==0||this.skipped_effects.has(r);if((r.f&yi)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[],block_effects:[]}),!s&&r.fn!==null){i?r.f^=He:(a&qs)!==0?n.effects.push(r):Ir(r)&&((r.f&Ut)!==0&&n.block_effects.push(r),kr(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===n.effect&&(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects),n=n.parent),r=c.next,c=c.parent}}#s(e){for(const n of e)((n.f&ot)!==0?this.#i:this.#a).push(n),this.#c(n.deps),qe(n,He)}#c(e){if(e!==null)for(const n of e)(n.f&Ye)===0||(n.f&Bn)===0||(n.f^=Bn,this.#c(n.deps))}capture(e,n){this.previous.has(e)||this.previous.set(e,n),(e.f&gn)===0&&(this.current.set(e,e.v),ft?.set(e,e.v))}activate(){_e=this,this.apply()}deactivate(){_e===this&&(_e=null,ft=null)}flush(){if(this.activate(),vt.length>0){if(If(),_e!==null&&_e!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#t)e(this);this.#t.clear()}#u(){if(this.#n===0){for(const e of this.#e)e();this.#e.clear()}this.#r===0&&this.#f()}#f(){if(ja.size>1){this.previous.clear();var e=ft,n=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of ja){if(i===this){n=!1;continue}const o=[];for(const[l,c]of this.current){if(i.current.has(l))if(n&&c!==i.current.get(l))i.current.set(l,c);else continue;o.push(l)}if(o.length===0)continue;const s=[...i.current.keys()].filter(l=>!this.current.has(l));if(s.length>0){var a=vt;vt=[];const l=new Set,c=new Map;for(const u of o)Wf(u,s,l,c);if(vt.length>0){_e=i,i.apply();for(const u of vt)i.#o(u,r);i.deactivate()}vt=a}}_e=null,ft=e}this.committed=!0,ja.delete(this)}increment(e){this.#r+=1,e&&(this.#n+=1)}decrement(e){this.#r-=1,e&&(this.#n-=1),this.revive()}revive(){for(const e of this.#i)qe(e,ot),Un(e);for(const e of this.#a)qe(e,Vt),Un(e);this.#i=[],this.#a=[],this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#l??=Mf()).promise}static ensure(){if(_e===null){const e=_e=new Wt;ja.add(_e),Yr||Wt.enqueue(()=>{_e===e&&e.flush()})}return _e}static enqueue(e){Zn(e)}apply(){}}function Up(t){var e=Yr;Yr=!0;try{for(var n;;){if(Bp(),vt.length===0&&(_e?.flush(),vt.length===0))return xi=null,n;If()}}finally{Yr=e}}function If(){var t=hn;ts=!0;var e=null;try{var n=0;for(oi(!0);vt.length>0;){var r=Wt.ensure();if(n++>1e3){var a,i;Vp()}r.process(vt),pn.clear()}}finally{ts=!1,oi(t),xi=null}}function Vp(){try{bp()}catch(t){xr(t,xi)}}let Kt=null;function Al(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(Zt|gt))===0&&Ir(r)&&(Kt=new Set,kr(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?ed(r):r.fn=null),Kt?.size>0)){pn.clear();for(const a of Kt){if((a.f&(Zt|gt))!==0)continue;const i=[a];let o=a.parent;for(;o!==null;)Kt.has(o)&&(Kt.delete(o),i.push(o)),o=o.parent;for(let s=i.length-1;s>=0;s--){const l=i[s];(l.f&(Zt|gt))===0&&kr(l)}}Kt.clear()}}Kt=null}}function Wf(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const a of t.reactions){const i=a.f;(i&Ye)!==0?Wf(a,e,n,r):(i&(Gs|Ut))!==0&&(i&ot)===0&&zf(a,e,r)&&(qe(a,ot),Un(a))}}function zf(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const a of t.deps){if(e.includes(a))return!0;if((a.f&Ye)!==0&&zf(a,e,n))return n.set(a,!0),!0}return n.set(t,!1),!1}function Un(t){for(var e=xi=t;e.parent!==null;){e=e.parent;var n=e.f;if(ts&&e===oe&&(n&Ut)!==0&&(n&jf)===0)return;if((n&(Xn|on))!==0){if((n&He)===0)return;e.f^=He}}vt.push(e)}function Hp(t){let e=0,n=Vn(0),r;return()=>{Si()&&(p(n),pa(()=>(e===0&&(r=V(()=>t(()=>Kr(n)))),e+=1,()=>{Zn(()=>{e-=1,e===0&&(r?.(),r=void 0,Kr(n))})})))}}var qp=wn|Or|yi;function Gp(t,e,n){new Jp(t,e,n)}class Jp{parent;#e=!1;#t;#r=null;#n;#l;#i;#a=null;#o=null;#s=null;#c=null;#u=null;#f=0;#d=0;#g=!1;#_=null;#w=Hp(()=>(this.#_=Vn(this.#f),()=>{this.#_=null}));constructor(e,n,r){this.#t=e,this.#n=n,this.#l=r,this.parent=oe.b,this.#e=!!this.#n.pending,this.#i=Ai(()=>{oe.b=this;{var a=this.#m();try{this.#a=xt(()=>r(a))}catch(i){this.error(i)}this.#d>0?this.#h():this.#e=!1}return()=>{this.#u?.remove()}},qp)}#y(){try{this.#a=xt(()=>this.#l(this.#t))}catch(e){this.error(e)}this.#e=!1}#v(){const e=this.#n.pending;e&&(this.#o=xt(()=>e(this.#t)),Wt.enqueue(()=>{var n=this.#m();this.#a=this.#p(()=>(Wt.ensure(),xt(()=>this.#l(n)))),this.#d>0?this.#h():(pr(this.#o,()=>{this.#o=null}),this.#e=!1)}))}#m(){var e=this.#t;return this.#e&&(this.#u=tn(),this.#t.before(this.#u),e=this.#u),e}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#p(e){var n=oe,r=re,a=Se;Bt(this.#i),at(this.#i),vr(this.#i.ctx);try{return e()}catch(i){return Ff(i),null}finally{Bt(n),at(r),vr(a)}}#h(){const e=this.#n.pending;this.#a!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),rd(this.#a,this.#c)),this.#o===null&&(this.#o=xt(()=>e(this.#t)))}#b(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(e);return}this.#d+=e,this.#d===0&&(this.#e=!1,this.#o&&pr(this.#o,()=>{this.#o=null}),this.#c&&(this.#t.before(this.#c),this.#c=null))}update_pending_count(e){this.#b(e),this.#f+=e,this.#_&&Sr(this.#_,this.#f)}get_effect_pending(){return this.#w(),p(this.#_)}error(e){var n=this.#n.onerror;let r=this.#n.failed;if(this.#g||!n&&!r)throw e;this.#a&&(it(this.#a),this.#a=null),this.#o&&(it(this.#o),this.#o=null),this.#s&&(it(this.#s),this.#s=null);var a=!1,i=!1;const o=()=>{if(a){Wp();return}a=!0,i&&Sp(),Wt.ensure(),this.#f=0,this.#s!==null&&pr(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#a=this.#p(()=>(this.#g=!1,xt(()=>this.#l(this.#t)))),this.#d>0?this.#h():this.#e=!1};var s=re;try{at(null),i=!0,n?.(e,o),i=!1}catch(l){xr(l,this.#i&&this.#i.parent)}finally{at(s)}r&&Zn(()=>{this.#s=this.#p(()=>{Wt.ensure(),this.#g=!0;try{return xt(()=>{r(this.#t,()=>e,()=>o)})}catch(l){return xr(l,this.#i.parent),null}finally{this.#g=!1}})})}}function Yp(t,e,n,r){const a=da()?_a:fn;if(n.length===0&&t.length===0){r(e.map(a));return}var i=_e,o=oe,s=Kp();function l(){Promise.all(n.map(c=>Xp(c))).then(c=>{s();try{r([...e.map(a),...c])}catch(u){(o.f&Zt)===0&&xr(u,o)}i?.deactivate(),ni()}).catch(c=>{xr(c,o)})}t.length>0?Promise.all(t).then(()=>{s();try{return l()}finally{i?.deactivate(),ni()}}):l()}function Kp(){var t=oe,e=re,n=Se,r=_e;return function(i=!0){Bt(t),at(e),vr(n),i&&r?.activate()}}function ni(){Bt(null),at(null),vr(null)}function _a(t){var e=Ye|ot,n=re!==null&&(re.f&Ye)!==0?re:null;return oe!==null&&(oe.f|=Or),{ctx:Se,deps:null,effects:null,equals:Rf,f:e,fn:t,reactions:null,rv:0,v:Qe,wv:0,parent:n??oe,ac:null}}function Xp(t,e){let n=oe;n===null&&gp();var r=n.b,a=void 0,i=Vn(Qe),o=!re,s=new Map;return c0(()=>{var l=Mf();a=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{c===_e&&c.committed&&c.deactivate(),ni()})}catch(d){l.reject(d),ni()}var c=_e;if(o){var u=!r.is_pending();r.update_pending_count(1),c.increment(u),s.get(c)?.reject(_r),s.delete(c),s.set(c,l)}const f=(d,_=void 0)=>{if(c.activate(),_)_!==_r&&(i.f|=gn,Sr(i,_));else{(i.f&gn)!==0&&(i.f^=gn),Sr(i,d);for(const[h,g]of s){if(s.delete(h),h===c)break;g.reject(_r)}}o&&(r.update_pending_count(-1),c.decrement(u))};l.promise.then(f,d=>f(null,d||"unknown"))}),ki(()=>{for(const l of s.values())l.reject(_r)}),new Promise(l=>{function c(u){function f(){u===a?l(i):c(a)}u.then(f,f)}c(a)})}function ri(t){const e=_a(t);return ad(e),e}function fn(t){const e=_a(t);return e.equals=Of,e}function Pf(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)it(e[n])}}function Zp(t){for(var e=t.parent;e!==null;){if((e.f&Ye)===0)return(e.f&Zt)===0?e:null;e=e.parent}return null}function Js(t){var e,n=oe;Bt(Zp(t));try{t.f&=~Bn,Pf(t),e=ld(t)}finally{Bt(n)}return e}function Df(t){var e=Js(t);if(t.equals(e)||(t.v=e,t.wv=od()),!Qn)if(ft!==null)Si()&&ft.set(t,t.v);else{var n=(t.f&Lt)===0?Vt:He;qe(t,n)}}let ns=new Set;const pn=new Map;let Bf=!1;function Vn(t,e){var n={f:0,v:t,reactions:null,equals:Rf,rv:0,wv:0};return n}function Pe(t,e){const n=Vn(t);return ad(n),n}function ue(t,e=!1,n=!0){const r=Vn(t);return e||(r.equals=Of),Nr&&n&&Se!==null&&Se.l!==null&&(Se.l.s??=[]).push(r),r}function T(t,e,n=!1){re!==null&&(!zt||(re.f&El)!==0)&&da()&&(re.f&(Ye|Ut|Gs|El))!==0&&!en?.includes(t)&&xp();let r=n?dn(e):e;return Sr(t,r)}function Sr(t,e){if(!t.equals(e)){var n=t.v;Qn?pn.set(t,e):pn.set(t,n),t.v=e;var r=Wt.ensure();r.capture(t,n),(t.f&Ye)!==0&&((t.f&ot)!==0&&Js(t),qe(t,(t.f&Lt)!==0?He:Vt)),t.wv=od(),Uf(t,ot),da()&&oe!==null&&(oe.f&He)!==0&&(oe.f&(on|Xn))===0&&(yt===null?f0([t]):yt.push(t)),!r.is_fork&&ns.size>0&&!Bf&&Qp()}return e}function Qp(){Bf=!1;var t=hn;oi(!0);const e=Array.from(ns);try{for(const n of e)(n.f&He)!==0&&qe(n,Vt),Ir(n)&&kr(n)}finally{oi(t)}ns.clear()}function e0(t,e=1){var n=p(t);return T(t,e===1?++n:--n)}function Kr(t){T(t,t.v+1)}function Uf(t,e){var n=t.reactions;if(n!==null)for(var r=da(),a=n.length,i=0;i<a;i++){var o=n[i],s=o.f;if(!(!r&&o===oe)){var l=(s&ot)===0;if(l&&qe(o,e),(s&Ye)!==0){var c=o;ft?.delete(c),(s&Bn)===0&&(s&Lt&&(o.f|=Bn),Uf(c,Vt))}else l&&((s&Ut)!==0&&Kt!==null&&Kt.add(o),Un(o))}}}function dn(t){if(typeof t!="object"||t===null||Qt in t)return t;const e=Hs(t);if(e!==op&&e!==sp)return t;var n=new Map,r=Us(t),a=Pe(0),i=zn,o=s=>{if(zn===i)return s();var l=re,c=zn;at(null),Cl(i);var u=s();return at(l),Cl(c),u};return r&&n.set("length",Pe(t.length)),new Proxy(t,{defineProperty(s,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&yp();var u=n.get(l);return u===void 0?u=o(()=>{var f=Pe(c.value);return n.set(l,f),f}):T(u,c.value,!0),!0},deleteProperty(s,l){var c=n.get(l);if(c===void 0){if(l in s){const u=o(()=>Pe(Qe));n.set(l,u),Kr(a)}}else T(c,Qe),Kr(a);return!0},get(s,l,c){if(l===Qt)return t;var u=n.get(l),f=l in s;if(u===void 0&&(!f||Wn(s,l)?.writable)&&(u=o(()=>{var _=dn(f?s[l]:Qe),h=Pe(_);return h}),n.set(l,u)),u!==void 0){var d=p(u);return d===Qe?void 0:d}return Reflect.get(s,l,c)},getOwnPropertyDescriptor(s,l){var c=Reflect.getOwnPropertyDescriptor(s,l);if(c&&"value"in c){var u=n.get(l);u&&(c.value=p(u))}else if(c===void 0){var f=n.get(l),d=f?.v;if(f!==void 0&&d!==Qe)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(s,l){if(l===Qt)return!0;var c=n.get(l),u=c!==void 0&&c.v!==Qe||Reflect.has(s,l);if(c!==void 0||oe!==null&&(!u||Wn(s,l)?.writable)){c===void 0&&(c=o(()=>{var d=u?dn(s[l]):Qe,_=Pe(d);return _}),n.set(l,c));var f=p(c);if(f===Qe)return!1}return u},set(s,l,c,u){var f=n.get(l),d=l in s;if(r&&l==="length")for(var _=c;_<f.v;_+=1){var h=n.get(_+"");h!==void 0?T(h,Qe):_ in s&&(h=o(()=>Pe(Qe)),n.set(_+"",h))}if(f===void 0)(!d||Wn(s,l)?.writable)&&(f=o(()=>Pe(void 0)),T(f,dn(c)),n.set(l,f));else{d=f.v!==Qe;var g=o(()=>dn(c));T(f,g)}var m=Reflect.getOwnPropertyDescriptor(s,l);if(m?.set&&m.set.call(u,c),!d){if(r&&typeof l=="string"){var w=n.get("length"),b=Number(l);Number.isInteger(b)&&b>=w.v&&T(w,b+1)}Kr(a)}return!0},ownKeys(s){p(a);var l=Reflect.ownKeys(s).filter(f=>{var d=n.get(f);return d===void 0||d.v!==Qe});for(var[c,u]of n)u.v!==Qe&&!(c in s)&&l.push(c);return l},setPrototypeOf(){vp()}})}function Ml(t){try{if(t!==null&&typeof t=="object"&&Qt in t)return t[Qt]}catch{}return t}function t0(t,e){return Object.is(Ml(t),Ml(e))}var ai,Vf,Hf,qf;function n0(){if(ai===void 0){ai=window,Vf=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Hf=Wn(e,"firstChild").get,qf=Wn(e,"nextSibling").get,kl(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),kl(n)&&(n.__t=void 0)}}function tn(t=""){return document.createTextNode(t)}function _n(t){return Hf.call(t)}function ga(t){return qf.call(t)}function O(t,e){return _n(t)}function aa(t,e=!1){{var n=_n(t);return n instanceof Comment&&n.data===""?ga(n):n}}function z(t,e=1,n=!1){let r=t;for(;e--;)r=ga(r);return r}function r0(t){t.textContent=""}function Gf(){return!1}let jl=!1;function a0(){jl||(jl=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function Fr(t){var e=re,n=oe;at(null),Bt(null);try{return t()}finally{at(e),Bt(n)}}function i0(t,e,n,r=n){t.addEventListener(e,()=>Fr(n));const a=t.__on_r;a?t.__on_r=()=>{a(),r(!0)}:t.__on_r=()=>r(!0),a0()}function Jf(t){oe===null&&(re===null&&mp(),hp()),Qn&&pp()}function o0(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Ht(t,e,n){var r=oe;r!==null&&(r.f&gt)!==0&&(t|=gt);var a={ctx:Se,deps:null,nodes_start:null,nodes_end:null,f:t|ot|Lt,first:null,fn:e,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{kr(a),a.f|=vi}catch(s){throw it(a),s}else e!==null&&Un(a);var i=a;if(n&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Or)===0&&(i=i.first,(t&Ut)!==0&&(t&wn)!==0&&i!==null&&(i.f|=wn)),i!==null&&(i.parent=r,r!==null&&o0(i,r),re!==null&&(re.f&Ye)!==0&&(t&Xn)===0)){var o=re;(o.effects??=[]).push(i)}return a}function Si(){return re!==null&&!zt}function ki(t){const e=Ht(wi,null,!1);return qe(e,He),e.teardown=t,e}function ii(t){Jf();var e=oe.f,n=!re&&(e&on)!==0&&(e&vi)===0;if(n){var r=Se;(r.e??=[]).push(t)}else return Yf(t)}function Yf(t){return Ht(qs|Lf,t,!1)}function s0(t){return Jf(),Ht(wi|Lf,t,!0)}function l0(t){Wt.ensure();const e=Ht(Xn|Or,t,!0);return(n={})=>new Promise(r=>{n.outro?pr(e,()=>{it(e),r(void 0)}):(it(e),r(void 0))})}function Kf(t){return Ht(qs,t,!1)}function De(t,e){var n=Se,r={effect:null,ran:!1,deps:t};n.l.$.push(r),r.effect=pa(()=>{t(),!r.ran&&(r.ran=!0,V(e))})}function Ei(){var t=Se;pa(()=>{for(var e of t.l.$){e.deps();var n=e.effect;(n.f&He)!==0&&qe(n,Vt),Ir(n)&&kr(n),e.ran=!1}})}function c0(t){return Ht(Gs|Or,t,!0)}function pa(t,e=0){return Ht(wi|e,t,!0)}function We(t,e=[],n=[],r=[]){Yp(r,e,n,a=>{Ht(wi,()=>t(...a.map(p)),!0)})}function Ai(t,e=0){var n=Ht(Ut|e,t,!0);return n}function xt(t){return Ht(on|Or,t,!0)}function Xf(t){var e=t.teardown;if(e!==null){const n=Qn,r=re;Ll(!0),at(null);try{e.call(null)}finally{Ll(n),at(r)}}}function Zf(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const a=n.ac;a!==null&&Fr(()=>{a.abort(_r)});var r=n.next;(n.f&Xn)!==0?n.parent=null:it(n,e),n=r}}function u0(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&on)===0&&it(e),e=n}}function it(t,e=!0){var n=!1;(e||(t.f&jf)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(Qf(t.nodes_start,t.nodes_end),n=!0),Zf(t,e&&!n),si(t,0),qe(t,Zt);var r=t.transitions;if(r!==null)for(const i of r)i.stop();Xf(t);var a=t.parent;a!==null&&a.first!==null&&ed(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function Qf(t,e){for(;t!==null;){var n=t===e?null:ga(t);t.remove(),t=n}}function ed(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function pr(t,e,n=!0){var r=[];Ys(t,r,!0),td(r,()=>{n&&it(t),e&&e()})}function td(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var a of t)a.out(r)}else e()}function Ys(t,e,n){if((t.f&gt)===0){if(t.f^=gt,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&e.push(o);for(var r=t.first;r!==null;){var a=r.next,i=(r.f&wn)!==0||(r.f&on)!==0&&(t.f&Ut)!==0;Ys(r,e,i?n:!1),r=a}}}function Ks(t){nd(t,!0)}function nd(t,e){if((t.f&gt)!==0){t.f^=gt,(t.f&He)===0&&(qe(t,ot),Un(t));for(var n=t.first;n!==null;){var r=n.next,a=(n.f&wn)!==0||(n.f&on)!==0;nd(n,a?e:!1),n=r}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}function rd(t,e){for(var n=t.nodes_start,r=t.nodes_end;n!==null;){var a=n===r?null:ga(n);e.append(n),n=a}}let hn=!1;function oi(t){hn=t}let Qn=!1;function Ll(t){Qn=t}let re=null,zt=!1;function at(t){re=t}let oe=null;function Bt(t){oe=t}let en=null;function ad(t){re!==null&&(en===null?en=[t]:en.push(t))}let tt=null,ut=0,yt=null;function f0(t){yt=t}let id=1,ia=0,zn=ia;function Cl(t){zn=t}function od(){return++id}function Ir(t){var e=t.f;if((e&ot)!==0)return!0;if(e&Ye&&(t.f&=~Bn),(e&Vt)!==0){var n=t.deps;if(n!==null)for(var r=n.length,a=0;a<r;a++){var i=n[a];if(Ir(i)&&Df(i),i.wv>t.wv)return!0}(e&Lt)!==0&&ft===null&&qe(t,He)}return!1}function sd(t,e,n=!0){var r=t.reactions;if(r!==null&&!en?.includes(t))for(var a=0;a<r.length;a++){var i=r[a];(i.f&Ye)!==0?sd(i,e,!1):e===i&&(n?qe(i,ot):(i.f&He)!==0&&qe(i,Vt),Un(i))}}function ld(t){var e=tt,n=ut,r=yt,a=re,i=en,o=Se,s=zt,l=zn,c=t.f;tt=null,ut=0,yt=null,re=(c&(on|Xn))===0?t:null,en=null,vr(t.ctx),zt=!1,zn=++ia,t.ac!==null&&(Fr(()=>{t.ac.abort(_r)}),t.ac=null);try{t.f|=es;var u=t.fn,f=u(),d=t.deps;if(tt!==null){var _;if(si(t,ut),d!==null&&ut>0)for(d.length=ut+tt.length,_=0;_<tt.length;_++)d[ut+_]=tt[_];else t.deps=d=tt;if(hn&&Si()&&(t.f&Lt)!==0)for(_=ut;_<d.length;_++)(d[_].reactions??=[]).push(t)}else d!==null&&ut<d.length&&(si(t,ut),d.length=ut);if(da()&&yt!==null&&!zt&&d!==null&&(t.f&(Ye|Vt|ot))===0)for(_=0;_<yt.length;_++)sd(yt[_],t);return a!==null&&a!==t&&(ia++,yt!==null&&(r===null?r=yt:r.push(...yt))),(t.f&gn)!==0&&(t.f^=gn),f}catch(h){return Ff(h)}finally{t.f^=es,tt=e,ut=n,yt=r,re=a,en=i,vr(o),zt=s,zn=l}}function d0(t,e){let n=e.reactions;if(n!==null){var r=ap.call(n,t);if(r!==-1){var a=n.length-1;a===0?n=e.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(e.f&Ye)!==0&&(tt===null||!tt.includes(e))&&(qe(e,Vt),(e.f&Lt)!==0&&(e.f^=Lt,e.f&=~Bn),Pf(e),si(e,0))}function si(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)d0(t,n[r])}function kr(t){var e=t.f;if((e&Zt)===0){qe(t,He);var n=oe,r=hn;oe=t,hn=!0;try{(e&Ut)!==0?u0(t):Zf(t),Xf(t);var a=ld(t);t.teardown=typeof a=="function"?a:null,t.wv=id;var i;Zo&&Pp&&(t.f&ot)!==0&&t.deps}finally{hn=r,oe=n}}}async function cd(){await Promise.resolve(),Up()}function p(t){var e=t.f,n=(e&Ye)!==0;if(re!==null&&!zt){var r=oe!==null&&(oe.f&Zt)!==0;if(!r&&!en?.includes(t)){var a=re.deps;if((re.f&es)!==0)t.rv<ia&&(t.rv=ia,tt===null&&a!==null&&a[ut]===t?ut++:tt===null?tt=[t]:tt.includes(t)||tt.push(t));else{(re.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[re]:i.includes(re)||i.push(re)}}}if(Qn){if(pn.has(t))return pn.get(t);if(n){var o=t,s=o.v;return((o.f&He)===0&&o.reactions!==null||fd(o))&&(s=Js(o)),pn.set(o,s),s}}else if(n){if(o=t,ft?.has(o))return ft.get(o);Ir(o)&&Df(o),hn&&Si()&&(o.f&Lt)===0&&ud(o)}else if(ft?.has(t))return ft.get(t);if((t.f&gn)!==0)throw t.v;return t.v}function ud(t){if(t.deps!==null){t.f^=Lt;for(const e of t.deps)(e.reactions??=[]).push(t),(e.f&Ye)!==0&&(e.f&Lt)===0&&ud(e)}}function fd(t){if(t.v===Qe)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(pn.has(e)||(e.f&Ye)!==0&&fd(e))return!0;return!1}function V(t){var e=zt;try{return zt=!0,t()}finally{zt=e}}const _0=-7169;function qe(t,e){t.f=t.f&_0|e}function Z(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Qt in t)rs(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Qt in n&&rs(n)}}}function rs(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{rs(t[r],e)}catch{}const n=Hs(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Af(n);for(let a in r){const i=r[a].get;if(i)try{i.call(t)}catch{}}}}}const g0=["touchstart","touchmove"];function p0(t){return g0.includes(t)}const dd=new Set,as=new Set;function h0(t,e,n,r={}){function a(i){if(r.capture||zr.call(e,i),!i.cancelBubble)return Fr(()=>n?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Zn(()=>{e.addEventListener(t,a,r)}):e.addEventListener(t,a,r),a}function Te(t,e,n,r,a){var i={capture:r,passive:a},o=h0(t,e,n,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ki(()=>{e.removeEventListener(t,o,i)})}function _d(t){for(var e=0;e<t.length;e++)dd.add(t[e]);for(var n of as)n(t)}let $l=null;function zr(t){var e=this,n=e.ownerDocument,r=t.type,a=t.composedPath?.()||[],i=a[0]||t.target;$l=t;var o=0,s=$l===t&&t.__root;if(s){var l=a.indexOf(s);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=a.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(i=a[o]||t.target,i!==e){ip(t,"currentTarget",{configurable:!0,get(){return i||n}});var u=re,f=oe;at(null),Bt(null);try{for(var d,_=[];i!==null;){var h=i.assignedSlot||i.parentNode||i.host||null;try{var g=i["__"+r];g!=null&&(!i.disabled||t.target===i)&&g.call(i,t)}catch(m){d?_.push(m):d=m}if(t.cancelBubble||h===e||h===null)break;i=h}if(d){for(let m of _)queueMicrotask(()=>{throw m});throw d}}finally{t.__root=e,delete t.currentTarget,at(u),Bt(f)}}}function gd(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function oa(t,e){var n=oe;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function de(t,e){var n=(e&Op)!==0,r=(e&Np)!==0,a,i=!t.startsWith("<!>");return()=>{a===void 0&&(a=gd(i?t:"<!>"+t),n||(a=_n(a)));var o=r||Vf?document.importNode(a,!0):a.cloneNode(!0);if(n){var s=_n(o),l=o.lastChild;oa(s,l)}else oa(o,o);return o}}function is(t=""){{var e=tn(t+"");return oa(e,e),e}}function li(){var t=document.createDocumentFragment(),e=document.createComment(""),n=tn();return t.append(e,n),oa(e,n),t}function ne(t,e){t!==null&&t.before(e)}let os=!0;function Re(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function m0(t,e){return b0(t,e)}const tr=new Map;function b0(t,{target:e,anchor:n,props:r={},events:a,context:i,intro:o=!0}){n0();var s=new Set,l=f=>{for(var d=0;d<f.length;d++){var _=f[d];if(!s.has(_)){s.add(_);var h=p0(_);e.addEventListener(_,zr,{passive:h});var g=tr.get(_);g===void 0?(document.addEventListener(_,zr,{passive:h}),tr.set(_,1)):tr.set(_,g+1)}}};l(Vs(dd)),as.add(l);var c=void 0,u=l0(()=>{var f=n??e.appendChild(tn());return Gp(f,{pending:()=>{}},d=>{if(i){Mn({});var _=Se;_.c=i}a&&(r.$$events=a),os=o,c=t(d,r)||{},os=!0,i&&jn()}),()=>{for(var d of s){e.removeEventListener(d,zr);var _=tr.get(d);--_===0?(document.removeEventListener(d,zr),tr.delete(d)):tr.set(d,_)}as.delete(l),f!==n&&f.parentNode?.removeChild(f)}});return w0.set(c,u),c}let w0=new WeakMap;class pd{anchor;#e=new Map;#t=new Map;#r=new Map;#n=new Set;#l=!0;constructor(e,n=!0){this.anchor=e,this.#l=n}#i=()=>{var e=_e;if(this.#e.has(e)){var n=this.#e.get(e),r=this.#t.get(n);if(r)Ks(r),this.#n.delete(n);else{var a=this.#r.get(n);a&&(this.#t.set(n,a.effect),this.#r.delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[i,o]of this.#e){if(this.#e.delete(i),i===e)break;const s=this.#r.get(o);s&&(it(s.effect),this.#r.delete(o))}for(const[i,o]of this.#t){if(i===n||this.#n.has(i))continue;const s=()=>{if(Array.from(this.#e.values()).includes(i)){var c=document.createDocumentFragment();rd(o,c),c.append(tn()),this.#r.set(i,{effect:o,fragment:c})}else it(o);this.#n.delete(i),this.#t.delete(i)};this.#l||!r?(this.#n.add(i),pr(o,s,!1)):s()}}};#a=e=>{this.#e.delete(e);const n=Array.from(this.#e.values());for(const[r,a]of this.#r)n.includes(r)||(it(a.effect),this.#r.delete(r))};ensure(e,n){var r=_e,a=Gf();if(n&&!this.#t.has(e)&&!this.#r.has(e))if(a){var i=document.createDocumentFragment(),o=tn();i.append(o),this.#r.set(e,{effect:xt(()=>n(o)),fragment:i})}else this.#t.set(e,xt(()=>n(this.anchor)));if(this.#e.set(r,e),a){for(const[s,l]of this.#t)s===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[s,l]of this.#r)s===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#i),r.ondiscard(this.#a)}else this.#i()}}function Be(t,e,n=!1){var r=new pd(t),a=n?wn:0;function i(o,s){r.ensure(o,s)}Ai(()=>{var o=!1;e((s,l=!0)=>{o=!0,i(l,s)}),o||i(!1,null)},a)}function Hn(t,e){return e}function y0(t,e,n){for(var r=[],a=e.length,i=0;i<a;i++)Ys(e[i].e,r,!0);td(r,()=>{var o=r.length===0&&n!==null;if(o){var s=n,l=s.parentNode;r0(l),l.append(s),t.items.clear(),Rt(t,e[0].prev,e[a-1].next)}for(var c=0;c<a;c++){var u=e[c];o||(t.items.delete(u.k),Rt(t,u.prev,u.next)),it(u.e,!o)}t.first===e[0]&&(t.first=e[0].prev)})}function qn(t,e,n,r,a,i=null){var o=t,s=new Map,l=null,c=(e&Tf)!==0,u=(e&Cf)!==0,f=(e&$f)!==0;if(c){var d=t;o=d.appendChild(tn())}var _=null,h=fn(()=>{var E=n();return Us(E)?E:E==null?[]:Vs(E)}),g,m=!0;function w(){v0(k,g,o,e,r),_!==null&&(g.length===0?(_.fragment?(o.before(_.fragment),_.fragment=null):Ks(_.effect),b.first=_.effect):pr(_.effect,()=>{_=null}))}var b=Ai(()=>{g=p(h);for(var E=g.length,x=new Set,S=_e,A=null,$=Gf(),L=0;L<E;L+=1){var j=g[L],C=r(j,L),H=m?null:s.get(C);H?(u&&Sr(H.v,j),f?Sr(H.i,L):H.i=L,$&&S.skipped_effects.delete(H.e)):(H=x0(m?o:null,A,j,C,L,a,e,n),m&&(H.o=!0,A===null?l=H:A.next=H,A=H),s.set(C,H)),x.add(C)}if(E===0&&i&&!_)if(m)_={fragment:null,effect:xt(()=>i(o))};else{var q=document.createDocumentFragment(),U=tn();q.append(U),_={fragment:q,effect:xt(()=>i(U))}}if(!m)if($){for(const[P,D]of s)x.has(P)||S.skipped_effects.add(D.e);S.oncommit(w),S.ondiscard(()=>{})}else w();p(h)}),k={effect:b,items:s,first:l};m=!1}function v0(t,e,n,r,a){var i=(r&kp)!==0,o=e.length,s=t.items,l=t.first,c,u=null,f,d=[],_=[],h,g,m,w;if(i)for(w=0;w<o;w+=1)h=e[w],g=a(h,w),m=s.get(g),m.a?.measure(),(f??=new Set).add(m);for(w=0;w<o;w+=1){if(h=e[w],g=a(h,w),m=s.get(g),t.first??=m,!m.o){m.o=!0;var b=u?u.next:l;Rt(t,u,m),Rt(t,m,b),Ui(m,b,n),u=m,d=[],_=[],l=u.next;continue}if((m.e.f&gt)!==0&&(Ks(m.e),i&&(m.a?.unfix(),(f??=new Set).delete(m))),m!==l){if(c!==void 0&&c.has(m)){if(d.length<_.length){var k=_[0],E;u=k.prev;var x=d[0],S=d[d.length-1];for(E=0;E<d.length;E+=1)Ui(d[E],k,n);for(E=0;E<_.length;E+=1)c.delete(_[E]);Rt(t,x.prev,S.next),Rt(t,u,x),Rt(t,S,k),l=k,u=S,w-=1,d=[],_=[]}else c.delete(m),Ui(m,l,n),Rt(t,m.prev,m.next),Rt(t,m,u===null?t.first:u.next),Rt(t,u,m),u=m;continue}for(d=[],_=[];l!==null&&l.k!==g;)(l.e.f&gt)===0&&(c??=new Set).add(l),_.push(l),l=l.next;if(l===null)continue;m=l}d.push(m),u=m,l=m.next}if(l!==null||c!==void 0){for(var A=c===void 0?[]:Vs(c);l!==null;)(l.e.f&gt)===0&&A.push(l),l=l.next;var $=A.length;if($>0){var L=(r&Tf)!==0&&o===0?n:null;if(i){for(w=0;w<$;w+=1)A[w].a?.measure();for(w=0;w<$;w+=1)A[w].a?.fix()}y0(t,A,L)}}i&&Zn(()=>{if(f!==void 0)for(m of f)m.a?.apply()})}function x0(t,e,n,r,a,i,o,s){var l=(o&Cf)!==0,c=(o&Ep)===0,u=l?c?ue(n,!1,!1):Vn(n):n,f=(o&$f)===0?a:Vn(a),d={i:f,v:u,k:r,a:null,e:null,o:!1,prev:e,next:null};if(t===null){var _=document.createDocumentFragment();_.append(t=tn())}return d.e=xt(()=>i(t,u,f,s)),e!==null&&(e.next=d),d}function Ui(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,a=e?e.e.nodes_start:n,i=t.e.nodes_start;i!==null&&i!==r;){var o=ga(i);a.before(i),i=o}}function Rt(t,e,n){e===null?(t.first=n,t.effect.first=n&&n.e):(e.e.next&&(e.e.next.prev=null),e.next=n,e.e.next=n&&n.e),n===null?t.effect.last=e&&e.e:(n.e.prev&&(n.e.prev.next=null),n.prev=e,n.e.prev=e&&e.e)}function S0(t,e,n=!1,r=!1,a=!1){var i=t,o="";We(()=>{var s=oe;if(o!==(o=e()??"")&&(s.nodes_start!==null&&(Qf(s.nodes_start,s.nodes_end),s.nodes_start=s.nodes_end=null),o!=="")){var l=o+"";n?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var c=gd(l);if((n||r)&&(c=_n(c)),oa(_n(c),c.lastChild),n||r)for(;_n(c);)i.before(_n(c));else i.before(c)}})}function k0(t,e,...n){var r=new pd(t);Ai(()=>{const a=e()??null;r.ensure(a,a&&(i=>a(i,...n)))},wn)}function hd(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(n=hd(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function E0(){for(var t,e,n=0,r="",a=arguments.length;n<a;n++)(t=arguments[n])&&(e=hd(t))&&(r&&(r+=" "),r+=e);return r}function fr(t){return typeof t=="object"?E0(t):t??""}function A0(t,e,n){var r=t==null?"":""+t;return r===""?null:r}function M0(t,e){return t==null?null:String(t)}function Ve(t,e,n,r,a,i){var o=t.__className;if(o!==n||o===void 0){var s=A0(n);s==null?t.removeAttribute("class"):e?t.className=s:t.setAttribute("class",s),t.__className=n}return i}function md(t,e,n,r){var a=t.__style;if(a!==e){var i=M0(e);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}return r}function Xs(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Us(e))return Ip();for(var r of t.options)r.selected=e.includes(Tl(r));return}for(r of t.options){var a=Tl(r);if(t0(a,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function bd(t){var e=new MutationObserver(()=>{Xs(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ki(()=>{e.disconnect()})}function Tl(t){return"__value"in t?t.__value:t.value}const j0=Symbol("is custom element"),L0=Symbol("is html");function Pn(t,e,n,r){var a=C0(t);a[e]!==(a[e]=n)&&(e==="loading"&&(t[dp]=n),n==null?t.removeAttribute(e):typeof n!="string"&&$0(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function C0(t){return t.__attributes??={[j0]:t.nodeName.includes("-"),[L0]:t.namespaceURI===Fp}}var Rl=new Map;function $0(t){var e=t.getAttribute("is")||t.nodeName,n=Rl.get(e);if(n)return n;Rl.set(e,n=[]);for(var r,a=t,i=Element.prototype;i!==a;){r=Af(a);for(var o in r)r[o].set&&n.push(o);a=Hs(a)}return n}const T0=()=>performance.now(),Xt={tick:t=>requestAnimationFrame(t),now:()=>T0(),tasks:new Set};function wd(){const t=Xt.now();Xt.tasks.forEach(e=>{e.c(t)||(Xt.tasks.delete(e),e.f())}),Xt.tasks.size!==0&&Xt.tick(wd)}function R0(t){let e;return Xt.tasks.size===0&&Xt.tick(wd),{promise:new Promise(n=>{Xt.tasks.add(e={c:t,f:n})}),abort(){Xt.tasks.delete(e)}}}function La(t,e){Fr(()=>{t.dispatchEvent(new CustomEvent(e))})}function O0(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function Ol(t){const e={},n=t.split(";");for(const r of n){const[a,i]=r.split(":");if(!a||i===void 0)break;const o=O0(a.trim());e[o]=i.trim()}return e}const N0=t=>t;function Nn(t,e,n,r){var a=(t&$p)!==0,i=(t&Tp)!==0,o=a&&i,s=(t&Rp)!==0,l=o?"both":a?"in":"out",c,u=e.inert,f=e.style.overflow,d,_;function h(){return Fr(()=>c??=n()(e,r?.()??{},{direction:l}))}var g={is_global:s,in(){if(e.inert=u,!a){_?.abort(),_?.reset?.();return}i||d?.abort(),La(e,"introstart"),d=ss(e,h(),_,1,()=>{La(e,"introend"),d?.abort(),d=c=void 0,e.style.overflow=f})},out(k){if(!i){k?.(),c=void 0;return}e.inert=!0,La(e,"outrostart"),_=ss(e,h(),d,0,()=>{La(e,"outroend"),k?.()})},stop:()=>{d?.abort(),_?.abort()}},m=oe;if((m.transitions??=[]).push(g),a&&os){var w=s;if(!w){for(var b=m.parent;b&&(b.f&wn)!==0;)for(;(b=b.parent)&&(b.f&Ut)===0;);w=!b||(b.f&vi)!==0}w&&Kf(()=>{V(()=>g.in())})}}function ss(t,e,n,r,a){var i=r===1;if(lp(e)){var o,s=!1;return Zn(()=>{if(!s){var m=e({direction:i?"in":"out"});o=ss(t,m,n,r,a)}}),{abort:()=>{s=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!e?.duration)return a(),{abort:ur,deactivate:ur,reset:ur,t:()=>r};const{delay:l=0,css:c,tick:u,easing:f=N0}=e;var d=[];if(i&&n===void 0&&(u&&u(0,1),c)){var _=Ol(c(0,1));d.push(_,_)}var h=()=>1-r,g=t.animate(d,{duration:l,fill:"forwards"});return g.onfinish=()=>{g.cancel();var m=n?.t()??1-r;n?.abort();var w=r-m,b=e.duration*Math.abs(w),k=[];if(b>0){var E=!1;if(c)for(var x=Math.ceil(b/16.666666666666668),S=0;S<=x;S+=1){var A=m+w*f(S/x),$=Ol(c(A,1-A));k.push($),E||=$.overflow==="hidden"}E&&(t.style.overflow="hidden"),h=()=>{var L=g.currentTime;return m+w*f(L/b)},u&&R0(()=>{if(g.playState!=="running")return!1;var L=h();return u(L,1-L),!0})}g=t.animate(k,{duration:b,fill:"forwards"}),g.onfinish=()=>{h=()=>r,u?.(r,1-r),a()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=ur)},deactivate:()=>{a=ur},reset:()=>{r===0&&u?.(1,0)},t:()=>h()}}function F0(t,e,n=e){var r=new WeakSet;i0(t,"input",async a=>{var i=a?t.defaultValue:t.value;if(i=Vi(t)?Hi(i):i,n(i),_e!==null&&r.add(_e),await cd(),i!==(i=e())){var o=t.selectionStart,s=t.selectionEnd,l=t.value.length;if(t.value=i??"",s!==null){var c=t.value.length;o===s&&s===l&&c>l?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=o,t.selectionEnd=Math.min(s,c))}}}),V(e)==null&&t.value&&(n(Vi(t)?Hi(t.value):t.value),_e!==null&&r.add(_e)),pa(()=>{var a=e();if(t===document.activeElement){var i=Va??_e;if(r.has(i))return}Vi(t)&&a===Hi(t.value)||t.type==="date"&&!a&&!t.value||a!==t.value&&(t.value=a??"")})}function Vi(t){var e=t.type;return e==="number"||e==="range"}function Hi(t){return t===""?null:+t}function I0(t,e,n){var r=Wn(t,e);r&&r.set&&(t[e]=n,ki(()=>{t[e]=null}))}function Nl(t,e){return t===e||t?.[Qt]===e}function Er(t={},e,n,r){return Kf(()=>{var a,i;return pa(()=>{a=i,i=[],V(()=>{t!==n(...i)&&(e(t,...i),a&&Nl(n(...a),t)&&e(null,...a))})}),()=>{Zn(()=>{i&&Nl(n(...i),t)&&e(null,...i)})}}),t}function Mi(t=!1){const e=Se,n=e.l.u;if(!n)return;let r=()=>Z(e.s);if(t){let a=0,i={};const o=_a(()=>{let s=!1;const l=e.s;for(const c in l)l[c]!==i[c]&&(i[c]=l[c],s=!0);return s&&a++,a});r=()=>p(o)}n.b.length&&s0(()=>{Fl(e,r),Qo(n.b)}),ii(()=>{const a=V(()=>n.m.map(cp));return()=>{for(const i of a)typeof i=="function"&&i()}}),n.a.length&&ii(()=>{Fl(e,r),Qo(n.a)})}function Fl(t,e){if(t.l.s)for(const n of t.l.s)p(n);e()}let Ca=!1;function W0(t){var e=Ca;try{return Ca=!1,[t(),Ca]}finally{Ca=e}}function te(t,e,n,r){var a=!Nr||(n&Mp)!==0,i=(n&Lp)!==0,o=(n&Cp)!==0,s=r,l=!0,c=()=>(l&&(l=!1,s=o?V(r):r),s),u;if(i){var f=Qt in t||fp in t;u=Wn(t,e)?.set??(f&&e in t?k=>t[e]=k:void 0)}var d,_=!1;i?[d,_]=W0(()=>t[e]):d=t[e],d===void 0&&r!==void 0&&(d=c(),u&&(a&&wp(),u(d)));var h;if(a?h=()=>{var k=t[e];return k===void 0?c():(l=!0,k)}:h=()=>{var k=t[e];return k!==void 0&&(s=void 0),k===void 0?s:k},a&&(n&jp)===0)return h;if(u){var g=t.$$legacy;return(function(k,E){return arguments.length>0?((!a||!E||g||_)&&u(E?h():k),k):h()})}var m=!1,w=((n&Ap)!==0?_a:fn)(()=>(m=!1,h()));i&&p(w);var b=oe;return(function(k,E){if(arguments.length>0){const x=E?p(w):a&&i?dn(k):k;return T(w,x),m=!0,s!==void 0&&(s=x),k}return Qn&&m||(b.f&Zt)!==0?w.v:p(w)})}function yd(t){Se===null&&_p(),Nr&&Se.l!==null?z0(Se).m.push(t):ii(()=>{const e=V(t);if(typeof e=="function")return e})}function z0(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const P0="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(P0);const D0="modulepreload",B0=function(t,e){return new URL(t,e).href},Il={},vd=function(e,n,r){let a=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");a=c(n.map(u=>{if(u=B0(u,r),u in Il)return;Il[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(r)for(let h=o.length-1;h>=0;h--){const g=o[h];if(g.href===u&&(!f||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":D0,f||(_.as="script"),_.crossOrigin="",_.href=u,l&&_.setAttribute("nonce",l),document.head.appendChild(_),f)return new Promise((h,g)=>{_.addEventListener("load",h),_.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return a.then(o=>{for(const s of o||[])s.status==="rejected"&&i(s.reason);return e().catch(i)})};Dp();var U0=Object.defineProperty,xd=t=>{throw TypeError(t)},V0=(t,e,n)=>e in t?U0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,qi=(t,e,n)=>V0(t,typeof e!="symbol"?e+"":e,n),Sd=(t,e,n)=>e.has(t)||xd("Cannot "+n),Yt=(t,e,n)=>(Sd(t,e,"read from private field"),e.get(t)),Wl=(t,e,n)=>e.has(t)?xd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),$a=(t,e,n,r)=>(Sd(t,e,"write to private field"),e.set(t,n),n),dr,kt;const un=Object.freeze({American:0,0:"American",British:1,1:"British",Australian:2,2:"Australian",Canadian:3,3:"Canadian",Indian:4,4:"Indian"}),Pr=Object.freeze({Plain:0,0:"Plain",Markdown:1,1:"Markdown",Typst:2,2:"Typst"});let Gn=class Ha{static __wrap(e){const n=Object.create(Ha.prototype);return n.__wbg_ptr=e,zl.register(n,n.__wbg_ptr,n),n}static __unwrap(e){return e instanceof Ha?e.__destroy_into_raw():0}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,zl.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_lint_free(e,0)}static from_json(e){const n=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=se,a=y.lint_from_json(n,r);if(a[2])throw Ot(a[1]);return Ha.__wrap(a[0])}get_problem_text(){let e,n;try{const r=y.lint_get_problem_text(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}lint_kind(){let e,n;try{const r=y.lint_lint_kind(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}lint_kind_pretty(){let e,n;try{const r=y.lint_lint_kind_pretty(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}message(){let e,n;try{const r=y.lint_message(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}message_html(){let e,n;try{const r=y.lint_message_html(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}span(){const e=y.lint_span(this.__wbg_ptr);return ui.__wrap(e)}suggestion_count(){return y.lint_suggestion_count(this.__wbg_ptr)>>>0}suggestions(){const e=y.lint_suggestions(this.__wbg_ptr);var n=Xr(e[0],e[1]);return y.__wbindgen_free(e[0],e[1]*4,4),n}to_json(){let e,n;try{const r=y.lint_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}};Symbol.dispose&&(Gn.prototype[Symbol.dispose]=Gn.prototype.free);let ls=class cs{static __wrap(e){const n=Object.create(cs.prototype);return n.__wbg_ptr=e,Pl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Pl.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_linter_free(e,0)}apply_suggestion(e,n,r){let a,i;try{const l=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),c=se;Gi(n,Gn),Gi(r,sa);const u=y.linter_apply_suggestion(this.__wbg_ptr,l,c,n.__wbg_ptr,r.__wbg_ptr);var o=u[0],s=u[1];if(u[3])throw o=0,s=0,Ot(u[2]);return a=o,i=s,ae(o,s)}finally{y.__wbindgen_free(a,i,1)}}clear_ignored_lints(){y.linter_clear_ignored_lints(this.__wbg_ptr)}clear_words(){y.linter_clear_words(this.__wbg_ptr)}context_hash(e,n){const r=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),a=se;Gi(n,Gn);const i=y.linter_context_hash(this.__wbg_ptr,r,a,n.__wbg_ptr);return BigInt.asUintN(64,i)}export_ignored_lints(){let e,n;try{const r=y.linter_export_ignored_lints(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}export_words(){const e=y.linter_export_words(this.__wbg_ptr);var n=Xr(e[0],e[1]);return y.__wbindgen_free(e[0],e[1]*4,4),n}generate_stats_file(){let e,n;try{const r=y.linter_generate_stats_file(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_dialect(){return y.linter_get_dialect(this.__wbg_ptr)}get_lint_config_as_json(){let e,n;try{const r=y.linter_get_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_lint_config_as_object(){return y.linter_get_lint_config_as_object(this.__wbg_ptr)}get_lint_descriptions_as_json(){let e,n;try{const r=y.linter_get_lint_descriptions_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_lint_descriptions_as_object(){return y.linter_get_lint_descriptions_as_object(this.__wbg_ptr)}get_lint_descriptions_html_as_json(){let e,n;try{const r=y.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_lint_descriptions_html_as_object(){return y.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr)}get_structured_lint_config_as_json(){let e,n;try{const r=y.linter_get_structured_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_structured_lint_config_as_object(){return y.linter_get_structured_lint_config_as_object(this.__wbg_ptr)}ignore_hashes(e){const n=K0(e,y.__wbindgen_malloc),r=se;y.linter_ignore_hashes(this.__wbg_ptr,n,r)}ignore_lints(e,n){const r=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),a=se,i=ds(n,y.__wbindgen_malloc),o=se;y.linter_ignore_lints(this.__wbg_ptr,r,a,i,o)}import_ignored_lints(e){const n=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=se,a=y.linter_import_ignored_lints(this.__wbg_ptr,n,r);if(a[1])throw Ot(a[0])}import_stats_file(e){const n=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=se,a=y.linter_import_stats_file(this.__wbg_ptr,n,r);if(a[1])throw Ot(a[0])}import_weirpack(e){const n=X0(e,y.__wbindgen_malloc),r=se,a=y.linter_import_weirpack(this.__wbg_ptr,n,r);if(a[2])throw Ot(a[1]);return Ot(a[0])}import_words(e){const n=ds(e,y.__wbindgen_malloc),r=se;y.linter_import_words(this.__wbg_ptr,n,r)}is_likely_english(e){const n=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=se;return y.linter_is_likely_english(this.__wbg_ptr,n,r)!==0}isolate_english(e){let n,r;try{const a=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),i=se,o=y.linter_isolate_english(this.__wbg_ptr,a,i);return n=o[0],r=o[1],ae(o[0],o[1])}finally{y.__wbindgen_free(n,r,1)}}lint(e,n,r,a,i,o){const s=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),l=se;var c=Ft(a)?0:Ce(a,y.__wbindgen_malloc,y.__wbindgen_realloc),u=se;const f=y.linter_lint(this.__wbg_ptr,s,l,n,r,c,u,i,o);var d=Xr(f[0],f[1]);return y.__wbindgen_free(f[0],f[1]*4,4),d}static new(e){const n=y.linter_new(e);return cs.__wrap(n)}organized_lints(e,n,r,a,i,o){const s=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),l=se;var c=Ft(a)?0:Ce(a,y.__wbindgen_malloc,y.__wbindgen_realloc),u=se;const f=y.linter_organized_lints(this.__wbg_ptr,s,l,n,r,c,u,i,o);var d=Xr(f[0],f[1]);return y.__wbindgen_free(f[0],f[1]*4,4),d}set_lint_config_from_json(e){const n=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=se,a=y.linter_set_lint_config_from_json(this.__wbg_ptr,n,r);if(a[1])throw Ot(a[0])}set_lint_config_from_object(e){const n=y.linter_set_lint_config_from_object(this.__wbg_ptr,e);if(n[1])throw Ot(n[0])}summarize_stats(e,n){return y.linter_summarize_stats(this.__wbg_ptr,!Ft(e),Ft(e)?BigInt(0):e,!Ft(n),Ft(n)?BigInt(0):n)}};Symbol.dispose&&(ls.prototype[Symbol.dispose]=ls.prototype.free);let ci=class kd{static __wrap(e){const n=Object.create(kd.prototype);return n.__wbg_ptr=e,Dl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Dl.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_organizedgroup_free(e,0)}get group(){let e,n;try{const r=y.__wbg_get_organizedgroup_group(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get lints(){const e=y.__wbg_get_organizedgroup_lints(this.__wbg_ptr);var n=Xr(e[0],e[1]);return y.__wbindgen_free(e[0],e[1]*4,4),n}set group(e){const n=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=se;y.__wbg_set_organizedgroup_group(this.__wbg_ptr,n,r)}set lints(e){const n=ds(e,y.__wbindgen_malloc),r=se;y.__wbg_set_organizedgroup_lints(this.__wbg_ptr,n,r)}};Symbol.dispose&&(ci.prototype[Symbol.dispose]=ci.prototype.free);let ui=class qa{static __wrap(e){const n=Object.create(qa.prototype);return n.__wbg_ptr=e,Bl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Bl.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_span_free(e,0)}get end(){return y.__wbg_get_span_end(this.__wbg_ptr)>>>0}get start(){return y.__wbg_get_span_start(this.__wbg_ptr)>>>0}set end(e){y.__wbg_set_span_end(this.__wbg_ptr,e)}set start(e){y.__wbg_set_span_start(this.__wbg_ptr,e)}static from_json(e){const n=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=se,a=y.span_from_json(n,r);if(a[2])throw Ot(a[1]);return qa.__wrap(a[0])}is_empty(){return y.span_is_empty(this.__wbg_ptr)!==0}len(){return y.span_len(this.__wbg_ptr)>>>0}static new(e,n){const r=y.span_new(e,n);return qa.__wrap(r)}to_json(){let e,n;try{const r=y.span_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}};Symbol.dispose&&(ui.prototype[Symbol.dispose]=ui.prototype.free);let sa=class us{static __wrap(e){const n=Object.create(us.prototype);return n.__wbg_ptr=e,Ul.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Ul.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_suggestion_free(e,0)}static from_json(e){const n=Ce(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=se,a=y.suggestion_from_json(n,r);if(a[2])throw Ot(a[1]);return us.__wrap(a[0])}get_replacement_text(){let e,n;try{const r=y.suggestion_get_replacement_text(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}kind(){return y.suggestion_kind(this.__wbg_ptr)}to_json(){let e,n;try{const r=y.suggestion_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ae(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}};Symbol.dispose&&(sa.prototype[Symbol.dispose]=sa.prototype.free);const Ge=Object.freeze({Replace:0,0:"Replace",Remove:1,1:"Remove",InsertAfter:2,2:"InsertAfter"});function H0(){return y.get_default_lint_config()}function q0(){let t,e;try{const n=y.get_default_lint_config_as_json();return t=n[0],e=n[1],ae(n[0],n[1])}finally{y.__wbindgen_free(t,e,1)}}function G0(){y.setup()}function J0(t){let e,n;try{const r=Ce(t,y.__wbindgen_malloc,y.__wbindgen_realloc),a=se,i=y.to_title_case(r,a);return e=i[0],n=i[1],ae(i[0],i[1])}finally{y.__wbindgen_free(e,n,1)}}function Ed(){return{__proto__:null,"./harper_wasm_slim_bg.js":{__proto__:null,__wbg_Error_408e67f47ca7b58b:function(e,n){return Error(ae(e,n))},__wbg_String_8564e559799eccda:function(e,n){const r=String(n),a=Ce(r,y.__wbindgen_malloc,y.__wbindgen_realloc),i=se;bt().setInt32(e+4,i,!0),bt().setInt32(e+0,a,!0)},__wbg___wbindgen_boolean_get_c9c83ebd41b34df3:function(e){const n=e,r=typeof n=="boolean"?n:void 0;return Ft(r)?16777215:r?1:0},__wbg___wbindgen_debug_string_a57024b9c6e4a48b:function(e,n){const r=fs(n),a=Ce(r,y.__wbindgen_malloc,y.__wbindgen_realloc),i=se;bt().setInt32(e+4,i,!0),bt().setInt32(e+0,a,!0)},__wbg___wbindgen_is_function_5e4570eb24ffa122:function(e){return typeof e=="function"},__wbg___wbindgen_is_object_a2790eb24c211ea0:function(e){const n=e;return typeof n=="object"&&n!==null},__wbg___wbindgen_is_string_e6f02f0ea5f20a32:function(e){return typeof e=="string"},__wbg___wbindgen_jsval_loose_eq_acf2776254a8d832:function(e,n){return e==n},__wbg___wbindgen_number_get_136b9679cab35cfb:function(e,n){const r=n,a=typeof r=="number"?r:void 0;bt().setFloat64(e+8,Ft(a)?0:a,!0),bt().setInt32(e+0,!Ft(a),!0)},__wbg___wbindgen_string_get_d154f1e671052120:function(e,n){const r=n,a=typeof r=="string"?r:void 0;var i=Ft(a)?0:Ce(a,y.__wbindgen_malloc,y.__wbindgen_realloc),o=se;bt().setInt32(e+4,o,!0),bt().setInt32(e+0,i,!0)},__wbg___wbindgen_throw_bb96b2010945f0bc:function(e,n){throw new Error(ae(e,n))},__wbg_call_1c5886ab9c57d1c7:function(){return nr(function(e,n){return e.call(n)},arguments)},__wbg_done_669171204c3dcae2:function(e){return e.done},__wbg_entries_7774d489e1da5f4f:function(e){return Object.entries(e)},__wbg_error_757e9472f8410341:function(e,n){let r,a;try{r=e,a=n,console.error(ae(e,n))}finally{y.__wbindgen_free(r,a,1)}},__wbg_getRandomValues_a608c4436c19407a:function(){return nr(function(e,n){globalThis.crypto.getRandomValues(Ji(e,n))},arguments)},__wbg_getRandomValues_e446ea5ffdd14ee5:function(){return nr(function(e,n){globalThis.crypto.getRandomValues(Ji(e,n))},arguments)},__wbg_getTime_63fb0332e6c4ec17:function(e){return e.getTime()},__wbg_get_c0c8f8d7da0c03dd:function(e,n){return e[n>>>0]},__wbg_get_d173c0308df22d37:function(){return nr(function(e,n){return Reflect.get(e,n)},arguments)},__wbg_get_unchecked_e20b893aeafc3fca:function(e,n){return e[n>>>0]},__wbg_instanceof_ArrayBuffer_993d02d2d254cad1:function(e){let n;try{n=e instanceof ArrayBuffer}catch{n=!1}return n},__wbg_instanceof_Uint8Array_f935dbb0aa7cdeed:function(e){let n;try{n=e instanceof Uint8Array}catch{n=!1}return n},__wbg_iterator_5cebbb86e33c6dd6:function(){return Symbol.iterator},__wbg_length_36bd29c6848c2144:function(e){return e.length},__wbg_length_ecfa2c63d3d0d82c:function(e){return e.length},__wbg_lint_new:function(e){return Gn.__wrap(e)},__wbg_lint_unwrap:function(e){return Gn.__unwrap(e)},__wbg_log_1f8cbb01c83d06c2:function(e,n,r,a,i,o,s,l){let c,u;try{c=e,u=n,console.log(ae(e,n),ae(r,a),ae(i,o),ae(s,l))}finally{y.__wbindgen_free(c,u,1)}},__wbg_log_a54ca6b45e09078a:function(e,n){let r,a;try{r=e,a=n,console.log(ae(e,n))}finally{y.__wbindgen_free(r,a,1)}},__wbg_mark_6b7f03786f5e4d61:function(e,n){performance.mark(ae(e,n))},__wbg_measure_0e21b33a1c6e3a29:function(){return nr(function(e,n,r,a){let i,o,s,l;try{i=e,o=n,s=r,l=a,performance.measure(ae(e,n),ae(r,a))}finally{y.__wbindgen_free(i,o,1),y.__wbindgen_free(s,l,1)}},arguments)},__wbg_new_0_f117d868b403dc07:function(){return new Date},__wbg_new_116be93542d39019:function(){return new Array},__wbg_new_227d7c05414eb861:function(){return new Error},__wbg_new_77cc4f4f472aeb81:function(e){return new Uint8Array(e)},__wbg_new_cdf041679ded4c5f:function(){return new Map},__wbg_new_ebe3e0f6837f0879:function(){return new Object},__wbg_next_42cf16ee0dafc9e2:function(){return nr(function(e){return e.next()},arguments)},__wbg_next_8f26b64fa5e9f64b:function(e){return e.next},__wbg_organizedgroup_new:function(e){return ci.__wrap(e)},__wbg_prototypesetcall_de8e0d9553586985:function(e,n,r){Uint8Array.prototype.set.call(Ji(e,n),r)},__wbg_set_014226dfeca53178:function(e,n,r){return e.set(n,r)},__wbg_set_6be42768c690e380:function(e,n,r){e[n]=r},__wbg_set_a80955eb93b145c6:function(e,n,r){e[n>>>0]=r},__wbg_stack_3b0d974bbf31e44f:function(e,n){const r=n.stack,a=Ce(r,y.__wbindgen_malloc,y.__wbindgen_realloc),i=se;bt().setInt32(e+4,i,!0),bt().setInt32(e+0,a,!0)},__wbg_suggestion_new:function(e){return sa.__wrap(e)},__wbg_value_1e2369fab29b420e:function(e){return e.value},__wbindgen_cast_0000000000000001:function(e){return e},__wbindgen_cast_0000000000000002:function(e,n){return ae(e,n)},__wbindgen_init_externref_table:function(){const e=y.__wbindgen_externrefs,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)}}}}const zl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_lint_free(t,1)),Pl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_linter_free(t,1)),Dl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_organizedgroup_free(t,1)),Bl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_span_free(t,1)),Ul=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_suggestion_free(t,1));function Ad(t){const e=y.__externref_table_alloc();return y.__wbindgen_externrefs.set(e,t),e}function Gi(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`)}function fs(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const a=t.description;return a==null?"Symbol":`Symbol(${a})`}if(e=="function"){const a=t.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(t)){const a=t.length;let i="[";a>0&&(i+=fs(t[0]));for(let o=1;o<a;o++)i+=", "+fs(t[o]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n&&n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function Xr(t,e){t=t>>>0;const n=bt(),r=[];for(let a=t;a<t+4*e;a+=4)r.push(y.__wbindgen_externrefs.get(n.getUint32(a,!0)));return y.__externref_drop_slice(t,e),r}function Ji(t,e){return t=t>>>0,hr().subarray(t/1,t/1+e)}let Dr=null;function Y0(){return(Dr===null||Dr.byteLength===0)&&(Dr=new BigUint64Array(y.memory.buffer)),Dr}let $n=null;function bt(){return($n===null||$n.buffer.detached===!0||$n.buffer.detached===void 0&&$n.buffer!==y.memory.buffer)&&($n=new DataView(y.memory.buffer)),$n}function ae(t,e){return Q0(t>>>0,e)}let Br=null;function hr(){return(Br===null||Br.byteLength===0)&&(Br=new Uint8Array(y.memory.buffer)),Br}function nr(t,e){try{return t.apply(this,e)}catch(n){const r=Ad(n);y.__wbindgen_exn_store(r)}}function Ft(t){return t==null}function K0(t,e){const n=e(t.length*8,8)>>>0;return Y0().set(t,n/8),se=t.length,n}function X0(t,e){const n=e(t.length*1,1)>>>0;return hr().set(t,n/1),se=t.length,n}function ds(t,e){const n=e(t.length*4,4)>>>0;for(let r=0;r<t.length;r++){const a=Ad(t[r]);bt().setUint32(n+4*r,a,!0)}return se=t.length,n}function Ce(t,e,n){if(n===void 0){const s=Zr.encode(t),l=e(s.length,1)>>>0;return hr().subarray(l,l+s.length).set(s),se=s.length,l}let r=t.length,a=e(r,1)>>>0;const i=hr();let o=0;for(;o<r;o++){const s=t.charCodeAt(o);if(s>127)break;i[a+o]=s}if(o!==r){o!==0&&(t=t.slice(o)),a=n(a,r,r=o+t.length*3,1)>>>0;const s=hr().subarray(a+o,a+r),l=Zr.encodeInto(t,s);o+=l.written,a=n(a,r,o,1)>>>0}return se=o,a}function Ot(t){const e=y.__wbindgen_externrefs.get(t);return y.__externref_table_dealloc(t),e}let Ga=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ga.decode();const Z0=2146435072;let Yi=0;function Q0(t,e){return Yi+=e,Yi>=Z0&&(Ga=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Ga.decode(),Yi=e),Ga.decode(hr().subarray(t,t+e))}const Zr=new TextEncoder;"encodeInto"in Zr||(Zr.encodeInto=function(t,e){const n=Zr.encode(t);return e.set(n),{read:t.length,written:n.length}});let se=0,y;function Md(t,e){return y=t.exports,Dr=null,$n=null,Br=null,y.__wbindgen_start(),y}async function eh(t,e){if(typeof Response=="function"&&t instanceof Response){if(!t.ok)throw new Error(`failed to fetch Wasm: ${t.status} ${t.statusText} fetching '${t.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(a){if(n(t.type)&&t.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",a);else throw a}const r=await t.arrayBuffer();return await WebAssembly.instantiate(r,e)}else{const r=await WebAssembly.instantiate(t,e);return r instanceof WebAssembly.Instance?{instance:r,module:t}:r}function n(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}function th(t){if(y!==void 0)return y;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module:t}=t:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const e=Ed();t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t));const n=new WebAssembly.Instance(t,e);return Md(n)}async function jd(t){if(y!==void 0)return y;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),t===void 0&&(t=new URL);const e=Ed();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n}=await eh(await t,e);return Md(n)}const nh=Object.freeze(Object.defineProperty({__proto__:null,Dialect:un,Language:Pr,Lint:Gn,Linter:ls,OrganizedGroup:ci,Span:ui,Suggestion:sa,SuggestionKind:Ge,default:jd,get_default_lint_config:H0,get_default_lint_config_as_json:q0,initSync:th,setup:G0,to_title_case:J0},Symbol.toStringTag,{value:"Module"})),rh=Object.freeze({American:0,0:"American",British:1,1:"British",Australian:2,2:"Australian",Canadian:3,3:"Canadian",Indian:4,4:"Indian"}),ah=Object.freeze({Plain:0,0:"Plain",Markdown:1,1:"Markdown",Typst:2,2:"Typst"});class jt{static __wrap(e){const n=Object.create(jt.prototype);return n.__wbg_ptr=e,Vl.register(n,n.__wbg_ptr,n),n}static __unwrap(e){return e instanceof jt?e.__destroy_into_raw():0}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Vl.unregister(this),e}free(){const e=this.__destroy_into_raw();v.__wbg_lint_free(e,0)}static from_json(e){const n=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=le,a=v.lint_from_json(n,r);if(a[2])throw Nt(a[1]);return jt.__wrap(a[0])}get_problem_text(){let e,n;try{const r=v.lint_get_problem_text(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}lint_kind(){let e,n;try{const r=v.lint_lint_kind(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}lint_kind_pretty(){let e,n;try{const r=v.lint_lint_kind_pretty(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}message(){let e,n;try{const r=v.lint_message(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}message_html(){let e,n;try{const r=v.lint_message_html(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}span(){const e=v.lint_span(this.__wbg_ptr);return mn.__wrap(e)}suggestion_count(){return v.lint_suggestion_count(this.__wbg_ptr)>>>0}suggestions(){const e=v.lint_suggestions(this.__wbg_ptr);var n=Qr(e[0],e[1]);return v.__wbindgen_free(e[0],e[1]*4,4),n}to_json(){let e,n;try{const r=v.lint_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}}Symbol.dispose&&(jt.prototype[Symbol.dispose]=jt.prototype.free);class Ar{static __wrap(e){const n=Object.create(Ar.prototype);return n.__wbg_ptr=e,Hl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Hl.unregister(this),e}free(){const e=this.__destroy_into_raw();v.__wbg_linter_free(e,0)}apply_suggestion(e,n,r){let a,i;try{const l=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),c=le;Ki(n,jt),Ki(r,yn);const u=v.linter_apply_suggestion(this.__wbg_ptr,l,c,n.__wbg_ptr,r.__wbg_ptr);var o=u[0],s=u[1];if(u[3])throw o=0,s=0,Nt(u[2]);return a=o,i=s,ie(o,s)}finally{v.__wbindgen_free(a,i,1)}}clear_ignored_lints(){v.linter_clear_ignored_lints(this.__wbg_ptr)}clear_words(){v.linter_clear_words(this.__wbg_ptr)}context_hash(e,n){const r=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),a=le;Ki(n,jt);const i=v.linter_context_hash(this.__wbg_ptr,r,a,n.__wbg_ptr);return BigInt.asUintN(64,i)}export_ignored_lints(){let e,n;try{const r=v.linter_export_ignored_lints(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}export_words(){const e=v.linter_export_words(this.__wbg_ptr);var n=Qr(e[0],e[1]);return v.__wbindgen_free(e[0],e[1]*4,4),n}generate_stats_file(){let e,n;try{const r=v.linter_generate_stats_file(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get_dialect(){return v.linter_get_dialect(this.__wbg_ptr)}get_lint_config_as_json(){let e,n;try{const r=v.linter_get_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get_lint_config_as_object(){return v.linter_get_lint_config_as_object(this.__wbg_ptr)}get_lint_descriptions_as_json(){let e,n;try{const r=v.linter_get_lint_descriptions_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get_lint_descriptions_as_object(){return v.linter_get_lint_descriptions_as_object(this.__wbg_ptr)}get_lint_descriptions_html_as_json(){let e,n;try{const r=v.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get_lint_descriptions_html_as_object(){return v.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr)}get_structured_lint_config_as_json(){let e,n;try{const r=v.linter_get_structured_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get_structured_lint_config_as_object(){return v.linter_get_structured_lint_config_as_object(this.__wbg_ptr)}ignore_hashes(e){const n=fh(e,v.__wbindgen_malloc),r=le;v.linter_ignore_hashes(this.__wbg_ptr,n,r)}ignore_lints(e,n){const r=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),a=le,i=gs(n,v.__wbindgen_malloc),o=le;v.linter_ignore_lints(this.__wbg_ptr,r,a,i,o)}import_ignored_lints(e){const n=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=le,a=v.linter_import_ignored_lints(this.__wbg_ptr,n,r);if(a[1])throw Nt(a[0])}import_stats_file(e){const n=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=le,a=v.linter_import_stats_file(this.__wbg_ptr,n,r);if(a[1])throw Nt(a[0])}import_weirpack(e){const n=dh(e,v.__wbindgen_malloc),r=le,a=v.linter_import_weirpack(this.__wbg_ptr,n,r);if(a[2])throw Nt(a[1]);return Nt(a[0])}import_words(e){const n=gs(e,v.__wbindgen_malloc),r=le;v.linter_import_words(this.__wbg_ptr,n,r)}is_likely_english(e){const n=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=le;return v.linter_is_likely_english(this.__wbg_ptr,n,r)!==0}isolate_english(e){let n,r;try{const a=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),i=le,o=v.linter_isolate_english(this.__wbg_ptr,a,i);return n=o[0],r=o[1],ie(o[0],o[1])}finally{v.__wbindgen_free(n,r,1)}}lint(e,n,r,a,i,o){const s=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),l=le;var c=It(a)?0:$e(a,v.__wbindgen_malloc,v.__wbindgen_realloc),u=le;const f=v.linter_lint(this.__wbg_ptr,s,l,n,r,c,u,i,o);var d=Qr(f[0],f[1]);return v.__wbindgen_free(f[0],f[1]*4,4),d}static new(e){const n=v.linter_new(e);return Ar.__wrap(n)}organized_lints(e,n,r,a,i,o){const s=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),l=le;var c=It(a)?0:$e(a,v.__wbindgen_malloc,v.__wbindgen_realloc),u=le;const f=v.linter_organized_lints(this.__wbg_ptr,s,l,n,r,c,u,i,o);var d=Qr(f[0],f[1]);return v.__wbindgen_free(f[0],f[1]*4,4),d}set_lint_config_from_json(e){const n=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=le,a=v.linter_set_lint_config_from_json(this.__wbg_ptr,n,r);if(a[1])throw Nt(a[0])}set_lint_config_from_object(e){const n=v.linter_set_lint_config_from_object(this.__wbg_ptr,e);if(n[1])throw Nt(n[0])}summarize_stats(e,n){return v.linter_summarize_stats(this.__wbg_ptr,!It(e),It(e)?BigInt(0):e,!It(n),It(n)?BigInt(0):n)}}Symbol.dispose&&(Ar.prototype[Symbol.dispose]=Ar.prototype.free);class Mr{static __wrap(e){const n=Object.create(Mr.prototype);return n.__wbg_ptr=e,ql.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ql.unregister(this),e}free(){const e=this.__destroy_into_raw();v.__wbg_organizedgroup_free(e,0)}get group(){let e,n;try{const r=v.__wbg_get_organizedgroup_group(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get lints(){const e=v.__wbg_get_organizedgroup_lints(this.__wbg_ptr);var n=Qr(e[0],e[1]);return v.__wbindgen_free(e[0],e[1]*4,4),n}set group(e){const n=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=le;v.__wbg_set_organizedgroup_group(this.__wbg_ptr,n,r)}set lints(e){const n=gs(e,v.__wbindgen_malloc),r=le;v.__wbg_set_organizedgroup_lints(this.__wbg_ptr,n,r)}}Symbol.dispose&&(Mr.prototype[Symbol.dispose]=Mr.prototype.free);class mn{static __wrap(e){const n=Object.create(mn.prototype);return n.__wbg_ptr=e,Gl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Gl.unregister(this),e}free(){const e=this.__destroy_into_raw();v.__wbg_span_free(e,0)}get end(){return v.__wbg_get_span_end(this.__wbg_ptr)>>>0}get start(){return v.__wbg_get_span_start(this.__wbg_ptr)>>>0}set end(e){v.__wbg_set_span_end(this.__wbg_ptr,e)}set start(e){v.__wbg_set_span_start(this.__wbg_ptr,e)}static from_json(e){const n=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=le,a=v.span_from_json(n,r);if(a[2])throw Nt(a[1]);return mn.__wrap(a[0])}is_empty(){return v.span_is_empty(this.__wbg_ptr)!==0}len(){return v.span_len(this.__wbg_ptr)>>>0}static new(e,n){const r=v.span_new(e,n);return mn.__wrap(r)}to_json(){let e,n;try{const r=v.span_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}}Symbol.dispose&&(mn.prototype[Symbol.dispose]=mn.prototype.free);class yn{static __wrap(e){const n=Object.create(yn.prototype);return n.__wbg_ptr=e,Jl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Jl.unregister(this),e}free(){const e=this.__destroy_into_raw();v.__wbg_suggestion_free(e,0)}static from_json(e){const n=$e(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=le,a=v.suggestion_from_json(n,r);if(a[2])throw Nt(a[1]);return yn.__wrap(a[0])}get_replacement_text(){let e,n;try{const r=v.suggestion_get_replacement_text(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}kind(){return v.suggestion_kind(this.__wbg_ptr)}to_json(){let e,n;try{const r=v.suggestion_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}}Symbol.dispose&&(yn.prototype[Symbol.dispose]=yn.prototype.free);const ih=Object.freeze({Replace:0,0:"Replace",Remove:1,1:"Remove",InsertAfter:2,2:"InsertAfter"});function oh(){return v.get_default_lint_config()}function sh(){let t,e;try{const n=v.get_default_lint_config_as_json();return t=n[0],e=n[1],ie(n[0],n[1])}finally{v.__wbindgen_free(t,e,1)}}function lh(){v.setup()}function ch(t){let e,n;try{const r=$e(t,v.__wbindgen_malloc,v.__wbindgen_realloc),a=le,i=v.to_title_case(r,a);return e=i[0],n=i[1],ie(i[0],i[1])}finally{v.__wbindgen_free(e,n,1)}}function Ld(){return{__proto__:null,"./harper_wasm_bg.js":{__proto__:null,__wbg_Error_408e67f47ca7b58b:function(e,n){return Error(ie(e,n))},__wbg_String_8564e559799eccda:function(e,n){const r=String(n),a=$e(r,v.__wbindgen_malloc,v.__wbindgen_realloc),i=le;wt().setInt32(e+4,i,!0),wt().setInt32(e+0,a,!0)},__wbg___wbindgen_boolean_get_c9c83ebd41b34df3:function(e){const n=e,r=typeof n=="boolean"?n:void 0;return It(r)?16777215:r?1:0},__wbg___wbindgen_debug_string_a57024b9c6e4a48b:function(e,n){const r=_s(n),a=$e(r,v.__wbindgen_malloc,v.__wbindgen_realloc),i=le;wt().setInt32(e+4,i,!0),wt().setInt32(e+0,a,!0)},__wbg___wbindgen_is_function_5e4570eb24ffa122:function(e){return typeof e=="function"},__wbg___wbindgen_is_object_a2790eb24c211ea0:function(e){const n=e;return typeof n=="object"&&n!==null},__wbg___wbindgen_is_string_e6f02f0ea5f20a32:function(e){return typeof e=="string"},__wbg___wbindgen_jsval_loose_eq_acf2776254a8d832:function(e,n){return e==n},__wbg___wbindgen_number_get_136b9679cab35cfb:function(e,n){const r=n,a=typeof r=="number"?r:void 0;wt().setFloat64(e+8,It(a)?0:a,!0),wt().setInt32(e+0,!It(a),!0)},__wbg___wbindgen_string_get_d154f1e671052120:function(e,n){const r=n,a=typeof r=="string"?r:void 0;var i=It(a)?0:$e(a,v.__wbindgen_malloc,v.__wbindgen_realloc),o=le;wt().setInt32(e+4,o,!0),wt().setInt32(e+0,i,!0)},__wbg___wbindgen_throw_bb96b2010945f0bc:function(e,n){throw new Error(ie(e,n))},__wbg_call_1c5886ab9c57d1c7:function(){return rr(function(e,n){return e.call(n)},arguments)},__wbg_done_669171204c3dcae2:function(e){return e.done},__wbg_entries_7774d489e1da5f4f:function(e){return Object.entries(e)},__wbg_error_757e9472f8410341:function(e,n){let r,a;try{r=e,a=n,console.error(ie(e,n))}finally{v.__wbindgen_free(r,a,1)}},__wbg_getRandomValues_a608c4436c19407a:function(){return rr(function(e,n){globalThis.crypto.getRandomValues(Xi(e,n))},arguments)},__wbg_getRandomValues_e446ea5ffdd14ee5:function(){return rr(function(e,n){globalThis.crypto.getRandomValues(Xi(e,n))},arguments)},__wbg_getTime_63fb0332e6c4ec17:function(e){return e.getTime()},__wbg_get_c0c8f8d7da0c03dd:function(e,n){return e[n>>>0]},__wbg_get_d173c0308df22d37:function(){return rr(function(e,n){return Reflect.get(e,n)},arguments)},__wbg_get_unchecked_e20b893aeafc3fca:function(e,n){return e[n>>>0]},__wbg_instanceof_ArrayBuffer_993d02d2d254cad1:function(e){let n;try{n=e instanceof ArrayBuffer}catch{n=!1}return n},__wbg_instanceof_Uint8Array_f935dbb0aa7cdeed:function(e){let n;try{n=e instanceof Uint8Array}catch{n=!1}return n},__wbg_iterator_5cebbb86e33c6dd6:function(){return Symbol.iterator},__wbg_length_36bd29c6848c2144:function(e){return e.length},__wbg_length_ecfa2c63d3d0d82c:function(e){return e.length},__wbg_lint_new:function(e){return jt.__wrap(e)},__wbg_lint_unwrap:function(e){return jt.__unwrap(e)},__wbg_log_1f8cbb01c83d06c2:function(e,n,r,a,i,o,s,l){let c,u;try{c=e,u=n,console.log(ie(e,n),ie(r,a),ie(i,o),ie(s,l))}finally{v.__wbindgen_free(c,u,1)}},__wbg_log_a54ca6b45e09078a:function(e,n){let r,a;try{r=e,a=n,console.log(ie(e,n))}finally{v.__wbindgen_free(r,a,1)}},__wbg_mark_6b7f03786f5e4d61:function(e,n){performance.mark(ie(e,n))},__wbg_measure_0e21b33a1c6e3a29:function(){return rr(function(e,n,r,a){let i,o,s,l;try{i=e,o=n,s=r,l=a,performance.measure(ie(e,n),ie(r,a))}finally{v.__wbindgen_free(i,o,1),v.__wbindgen_free(s,l,1)}},arguments)},__wbg_new_0_f117d868b403dc07:function(){return new Date},__wbg_new_116be93542d39019:function(){return new Array},__wbg_new_227d7c05414eb861:function(){return new Error},__wbg_new_77cc4f4f472aeb81:function(e){return new Uint8Array(e)},__wbg_new_cdf041679ded4c5f:function(){return new Map},__wbg_new_ebe3e0f6837f0879:function(){return new Object},__wbg_next_42cf16ee0dafc9e2:function(){return rr(function(e){return e.next()},arguments)},__wbg_next_8f26b64fa5e9f64b:function(e){return e.next},__wbg_organizedgroup_new:function(e){return Mr.__wrap(e)},__wbg_prototypesetcall_de8e0d9553586985:function(e,n,r){Uint8Array.prototype.set.call(Xi(e,n),r)},__wbg_set_014226dfeca53178:function(e,n,r){return e.set(n,r)},__wbg_set_6be42768c690e380:function(e,n,r){e[n]=r},__wbg_set_a80955eb93b145c6:function(e,n,r){e[n>>>0]=r},__wbg_stack_3b0d974bbf31e44f:function(e,n){const r=n.stack,a=$e(r,v.__wbindgen_malloc,v.__wbindgen_realloc),i=le;wt().setInt32(e+4,i,!0),wt().setInt32(e+0,a,!0)},__wbg_suggestion_new:function(e){return yn.__wrap(e)},__wbg_value_1e2369fab29b420e:function(e){return e.value},__wbindgen_cast_0000000000000001:function(e){return e},__wbindgen_cast_0000000000000002:function(e,n){return ie(e,n)},__wbindgen_init_externref_table:function(){const e=v.__wbindgen_externrefs,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)}}}}const Vl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>v.__wbg_lint_free(t,1)),Hl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>v.__wbg_linter_free(t,1)),ql=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>v.__wbg_organizedgroup_free(t,1)),Gl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>v.__wbg_span_free(t,1)),Jl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>v.__wbg_suggestion_free(t,1));function Cd(t){const e=v.__externref_table_alloc();return v.__wbindgen_externrefs.set(e,t),e}function Ki(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`)}function _s(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const a=t.description;return a==null?"Symbol":`Symbol(${a})`}if(e=="function"){const a=t.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(t)){const a=t.length;let i="[";a>0&&(i+=_s(t[0]));for(let o=1;o<a;o++)i+=", "+_s(t[o]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n&&n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function Qr(t,e){t=t>>>0;const n=wt(),r=[];for(let a=t;a<t+4*e;a+=4)r.push(v.__wbindgen_externrefs.get(n.getUint32(a,!0)));return v.__externref_drop_slice(t,e),r}function Xi(t,e){return t=t>>>0,mr().subarray(t/1,t/1+e)}let Ur=null;function uh(){return(Ur===null||Ur.byteLength===0)&&(Ur=new BigUint64Array(v.memory.buffer)),Ur}let Tn=null;function wt(){return(Tn===null||Tn.buffer.detached===!0||Tn.buffer.detached===void 0&&Tn.buffer!==v.memory.buffer)&&(Tn=new DataView(v.memory.buffer)),Tn}function ie(t,e){return gh(t>>>0,e)}let Vr=null;function mr(){return(Vr===null||Vr.byteLength===0)&&(Vr=new Uint8Array(v.memory.buffer)),Vr}function rr(t,e){try{return t.apply(this,e)}catch(n){const r=Cd(n);v.__wbindgen_exn_store(r)}}function It(t){return t==null}function fh(t,e){const n=e(t.length*8,8)>>>0;return uh().set(t,n/8),le=t.length,n}function dh(t,e){const n=e(t.length*1,1)>>>0;return mr().set(t,n/1),le=t.length,n}function gs(t,e){const n=e(t.length*4,4)>>>0;for(let r=0;r<t.length;r++){const a=Cd(t[r]);wt().setUint32(n+4*r,a,!0)}return le=t.length,n}function $e(t,e,n){if(n===void 0){const s=ea.encode(t),l=e(s.length,1)>>>0;return mr().subarray(l,l+s.length).set(s),le=s.length,l}let r=t.length,a=e(r,1)>>>0;const i=mr();let o=0;for(;o<r;o++){const s=t.charCodeAt(o);if(s>127)break;i[a+o]=s}if(o!==r){o!==0&&(t=t.slice(o)),a=n(a,r,r=o+t.length*3,1)>>>0;const s=mr().subarray(a+o,a+r),l=ea.encodeInto(t,s);o+=l.written,a=n(a,r,o,1)>>>0}return le=o,a}function Nt(t){const e=v.__wbindgen_externrefs.get(t);return v.__externref_table_dealloc(t),e}let Ja=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ja.decode();const _h=2146435072;let Zi=0;function gh(t,e){return Zi+=e,Zi>=_h&&(Ja=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Ja.decode(),Zi=e),Ja.decode(mr().subarray(t,t+e))}const ea=new TextEncoder;"encodeInto"in ea||(ea.encodeInto=function(t,e){const n=ea.encode(t);return e.set(n),{read:t.length,written:n.length}});let le=0,v;function $d(t,e){return v=t.exports,Ur=null,Tn=null,Vr=null,v.__wbindgen_start(),v}async function ph(t,e){if(typeof Response=="function"&&t instanceof Response){if(!t.ok)throw new Error(`failed to fetch Wasm: ${t.status} ${t.statusText} fetching '${t.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(a){if(n(t.type)&&t.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",a);else throw a}const r=await t.arrayBuffer();return await WebAssembly.instantiate(r,e)}else{const r=await WebAssembly.instantiate(t,e);return r instanceof WebAssembly.Instance?{instance:r,module:t}:r}function n(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}function hh(t){if(v!==void 0)return v;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module:t}=t:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const e=Ld();t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t));const n=new WebAssembly.Instance(t,e);return $d(n)}async function mh(t){if(v!==void 0)return v;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),t===void 0&&(t=new URL);const e=Ld();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n}=await ph(await t,e);return $d(n)}const bh=Object.freeze(Object.defineProperty({__proto__:null,Dialect:rh,Language:ah,Lint:jt,Linter:Ar,OrganizedGroup:Mr,Span:mn,Suggestion:yn,SuggestionKind:ih,default:mh,get_default_lint_config:oh,get_default_lint_config_as_json:sh,initSync:hh,setup:lh,to_title_case:ch},Symbol.toStringTag,{value:"Module"})),wh=class Ya extends Promise{constructor(e){super(n=>{n()}),Wl(this,dr),Wl(this,kt),$a(this,dr,e)}static from(e){return new Ya(n=>{n(e())})}static resolve(e){return new Ya(n=>{n(e)})}static reject(e){return new Ya((n,r)=>{r(e)})}then(e,n){return Yt(this,kt)??$a(this,kt,new Promise(Yt(this,dr))),Yt(this,kt).then(e,n)}catch(e){return Yt(this,kt)??$a(this,kt,new Promise(Yt(this,dr))),Yt(this,kt).catch(e)}finally(e){return Yt(this,kt)??$a(this,kt,new Promise(Yt(this,dr))),Yt(this,kt).finally(e)}};dr=new WeakMap;kt=new WeakMap;let Zs=wh;const yh=(t,e,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const a=Object.getOwnPropertyDescriptor(t,n),i=Object.getOwnPropertyDescriptor(e,n);!vh(a,i)&&r||Object.defineProperty(t,n,i)},vh=function(t,e){return t===void 0||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},xh=(t,e)=>{const n=Object.getPrototypeOf(e);n!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,n)},Sh=(t,e)=>`/* Wrapped ${t}*/
${e}`,kh=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Eh=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Ah=(t,e,n)=>{const r=n===""?"":`with ${n.trim()}() `,a=Sh.bind(null,r,e.toString());Object.defineProperty(a,"name",Eh),Object.defineProperty(t,"toString",{...kh,value:a})};function Mh(t,e,{ignoreNonConfigurable:n=!1}={}){const{name:r}=t;for(const a of Reflect.ownKeys(e))yh(t,e,a,n);return xh(t,e),Ah(t,e,r),t}const jh=new WeakMap;function Yl(t,{cacheKey:e=([r])=>r,cache:n=new Map}={}){const r=new Map,a=function(...i){const o=e(i);if(r.has(o))return r.get(o);const s=(async()=>{try{if(n&&await n.has(o))return await n.get(o);const c=await t.apply(this,i);try{return c}finally{n&&await n.set(o,c)}}finally{r.delete(o)}})();return r.set(o,s),s};return Mh(a,t,{ignoreNonConfigurable:!0}),jh.set(a,n),a}function Td(t){return t.includes("harper_wasm_slim")?"slim":"full"}function Lh(t){return t.glueFlavor??Td(typeof t.url=="string"?t.url:t.url.href)}function Ch(t){return t==="slim"?nh:bh}function $h(t,e){return e==="slim"?t:t.includes("harper_wasm_bg.wasm")?t.replace("harper_wasm_bg.wasm","harper_wasm_slim_bg.wasm"):null}function Kl(t){return typeof process<"u"&&t.startsWith("file://")?vd(()=>import("./vite-browser-external-BIHI7g3E.js"),[],import.meta.url).then(e=>new Promise((n,r)=>{e.readFile(new URL(t).pathname,(a,i)=>{a&&r(a),n(i)})})):t}async function Xl(t,e){const n=Ch(e),r=$h(t,e);if(r!=null)try{await jd({module_or_path:Kl(r)})}catch(a){if(e==="slim")throw a}return await n.default({module_or_path:Kl(t)}),n}const Th={full:Yl(t=>Xl(t,"full")),slim:Yl(t=>Xl(t,"slim"))};function Rd(t,e){return Th[e](t)}class Od{constructor(){qi(this,"url",""),qi(this,"glueFlavor","full"),qi(this,"inner",null)}static create(e,n){const r=new Rh;return r.url=e,r.glueFlavor=n??Td(typeof e=="string"?e:e.href),r.inner=Zs.from(()=>Rd(typeof r.url=="string"?r.url:r.url.href,r.glueFlavor)),r}async getDefaultLintConfigAsJSON(){return(await this.inner).get_default_lint_config_as_json()}async getDefaultLintConfig(){return(await this.inner).get_default_lint_config()}async toTitleCase(e){return(await this.inner).to_title_case(e)}async setup(){(await this.inner).setup()}}class Rh extends Od{async createLinter(e){return(await this.getBinaryModule()).Linter.new(e??un.American)}async getBinaryModule(){return await Zs.from(()=>Rd(typeof this.url=="string"?this.url:this.url.href,this.glueFlavor))}}var Oh=Object.defineProperty,Nh=(t,e,n)=>e in t?Oh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,At=(t,e,n)=>Nh(t,typeof e!="symbol"?e+"":e,n);function Fh(t){switch(t){case"plaintext":return Pr.Plain;case"typst":return Pr.Typst;case"markdown":case void 0:return Pr.Markdown;default:return console.warn(`Unknown Harper language '${String(t)}'; using markdown.`),Pr.Markdown}}function Zl(t,e){return[t,Fh(e?.language),e?.forceAllHeadings??!1,e?.regex_mask,e?.dedup??!0,e?.isolateEnglish??!1]}class Ih{constructor(e){At(this,"binary"),At(this,"inner"),At(this,"disposed",!1),this.binary=e.binary,this.binary.setup(),this.inner=this.createInner(e.dialect)}createInner(e){return Zs.from(async()=>(await this.binary.setup(),this.binary.createLinter(e)))}async setup(){await this.lint("",{language:"plaintext"});const e=await this.exportIgnoredLints();await this.importIgnoredLints(e)}async lint(e,n){return(await this.inner).lint(...Zl(e,n))}async organizedLints(e,n){const a=(await this.inner).organized_lints(...Zl(e,n)),i={};for(const o of a)i[o.group]=o.lints,o.free();return i}async applySuggestion(e,n,r){return(await this.inner).apply_suggestion(e,n,r)}async isLikelyEnglish(e){return(await this.inner).is_likely_english(e)}async isolateEnglish(e){return(await this.inner).isolate_english(e)}async getLintConfig(){return(await this.inner).get_lint_config_as_object()}async getDefaultLintConfigAsJSON(){return await this.binary.getDefaultLintConfigAsJSON()}async getDefaultLintConfig(){return await this.binary.getDefaultLintConfig()}async getStructuredLintConfig(){return(await this.inner).get_structured_lint_config_as_object()}async getStructuredLintConfigJSON(){return(await this.inner).get_structured_lint_config_as_json()}async setLintConfig(e){(await this.inner).set_lint_config_from_object(e)}async getLintConfigAsJSON(){return(await this.inner).get_lint_config_as_json()}async setLintConfigWithJSON(e){(await this.inner).set_lint_config_from_json(e)}async toTitleCase(e){return await this.binary.toTitleCase(e)}async getLintDescriptions(){return(await this.inner).get_lint_descriptions_as_object()}async getLintDescriptionsAsJSON(){return(await this.inner).get_lint_descriptions_as_json()}async getLintDescriptionsHTML(){return(await this.inner).get_lint_descriptions_html_as_object()}async getLintDescriptionsHTMLAsJSON(){return(await this.inner).get_lint_descriptions_html_as_json()}async ignoreLint(e,n){return await this.ignoreLints(e,[n])}async ignoreLints(e,n){(await this.inner).ignore_lints(e,n)}async ignoreLintHash(e){(await this.inner).ignore_hashes(new BigUint64Array([e]))}async exportIgnoredLints(){return(await this.inner).export_ignored_lints()}async importIgnoredLints(e){(await this.inner).import_ignored_lints(e)}async contextHash(e,n){return(await this.inner).context_hash(e,n)}async clearIgnoredLints(){(await this.inner).clear_ignored_lints()}async clearWords(){return(await this.inner).clear_words()}async importWords(e){return(await this.inner).import_words(e)}async exportWords(){return(await this.inner).export_words()}async getDialect(){return(await this.inner).get_dialect()}async setDialect(e){const n=await this.inner;return n.get_dialect()!==e&&(n.free(),this.inner=this.createInner(e)),Promise.resolve()}async summarizeStats(e,n){return(await this.inner).summarize_stats(e,n)}async generateStatsFile(){return(await this.inner).generate_stats_file()}async importStatsFile(e){return(await this.inner).import_stats_file(e)}async loadWeirpackFromBlob(e){const n=new Uint8Array(await e.arrayBuffer());return this.loadWeirpackFromBytes(n)}async loadWeirpackFromBytes(e){const n=await this.inner,r=e instanceof Uint8Array?e:Uint8Array.from(e);return n.import_weirpack(r)}async dispose(){if(this.disposed)return;this.disposed=!0,(await this.inner).free()}}function Wh(t,e){if(!t)throw new Error("Assertion failed")}class zh{constructor(e){At(this,"binary"),this.binary=e,this.binary.setup()}async serializeArg(e){var n;const{Lint:r,Span:a,Suggestion:i}=await this.binary.getBinaryModule();if(Array.isArray(e))return{json:JSON.stringify(await Promise.all(e.map(s=>this.serializeArg(s)))),type:"Array"};const o=typeof e;switch(o){case"string":case"number":case"boolean":case"undefined":return{json:JSON.stringify(e),type:o};case"bigint":return{json:e.toString(),type:o}}if(e.to_json!==void 0){const s=e.to_json();let l;const c=(n=e.constructor)==null?void 0:n.name;if(e instanceof r||c==="Lint"?l="Lint":e instanceof i||c==="Suggestion"?l="Suggestion":(e instanceof a||c==="Span")&&(l="Span"),l===void 0)throw new Error("Unhandled case: type undefined");return{json:s,type:l}}if(o=="object")return{json:JSON.stringify(await Promise.all(Object.entries(e).map(([s,l])=>this.serializeArg([s,l])))),type:"object"};throw new Error(`Unhandled case: ${e}`)}async serialize(e){return{procName:e.procName,args:await Promise.all(e.args.map(n=>this.serializeArg(n)))}}async deserializeArg(e){const{Lint:n,Span:r,Suggestion:a}=await this.binary.getBinaryModule();switch(e.type){case"bigint":return BigInt(e.json);case"undefined":return;case"boolean":case"number":case"string":return JSON.parse(e.json);case"Suggestion":return a.from_json(e.json);case"Lint":return n.from_json(e.json);case"Span":return r.from_json(e.json);case"Array":{const i=JSON.parse(e.json);return Wh(Array.isArray(i)),await Promise.all(i.map(o=>this.deserializeArg(o)))}case"object":{const i=JSON.parse(e.json);return Object.fromEntries(await Promise.all(i.map(o=>this.deserializeArg(o))))}default:throw new Error(`Unhandled case: ${e.type}`)}}async deserialize(e){return{procName:e.procName,args:await Promise.all(e.args.map(n=>this.deserializeArg(n)))}}}const Nd=`var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _executor, _promise;
const Dialect$1 = Object.freeze({
  American: 0,
  "0": "American",
  British: 1,
  "1": "British",
  Australian: 2,
  "2": "Australian",
  Canadian: 3,
  "3": "Canadian",
  Indian: 4,
  "4": "Indian"
});
const Language$1 = Object.freeze({
  Plain: 0,
  "0": "Plain",
  Markdown: 1,
  "1": "Markdown",
  Typst: 2,
  "2": "Typst"
});
let Lint$1 = class Lint {
  static __wrap(ptr) {
    const obj = Object.create(Lint.prototype);
    obj.__wbg_ptr = ptr;
    LintFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof Lint)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LintFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_lint_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Lint}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.lint_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return Lint.__wrap(ret[0]);
  }
  /**
   * Get the content of the source material pointed to by [\`Self::span\`]
   * @returns {string}
   */
  get_problem_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_get_problem_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_lint_kind(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind_pretty() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_lint_kind_pretty(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error.
   * @returns {string}
   */
  message() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_message(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error as HTML.
   * @returns {string}
   */
  message_html() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_message_html(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the location of the problematic text.
   * @returns {Span}
   */
  span() {
    const ret = wasm$1.lint_span(this.__wbg_ptr);
    return Span$1.__wrap(ret);
  }
  /**
   * Equivalent to calling \`.length\` on the result of \`suggestions()\`.
   * @returns {number}
   */
  suggestion_count() {
    const ret = wasm$1.lint_suggestion_count(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * Get an array of any suggestions that may resolve the issue.
   * @returns {Suggestion[]}
   */
  suggestions() {
    const ret = wasm$1.lint_suggestions(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0$1(ret[0], ret[1]);
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.lint_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) Lint$1.prototype[Symbol.dispose] = Lint$1.prototype.free;
let Linter$1 = class Linter {
  static __wrap(ptr) {
    const obj = Object.create(Linter.prototype);
    obj.__wbg_ptr = ptr;
    LinterFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LinterFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_linter_free(ptr, 0);
  }
  /**
   * Apply a suggestion from a given lint.
   * This action will be logged to the Linter's statistics.
   * @param {string} source_text
   * @param {Lint} lint
   * @param {Suggestion} suggestion
   * @returns {string}
   */
  apply_suggestion(source_text, lint, suggestion) {
    let deferred3_0;
    let deferred3_1;
    try {
      const ptr0 = passStringToWasm0$1(source_text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN$1;
      _assertClass$1(lint, Lint$1);
      _assertClass$1(suggestion, Suggestion$1);
      const ret = wasm$1.linter_apply_suggestion(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr, suggestion.__wbg_ptr);
      var ptr2 = ret[0];
      var len2 = ret[1];
      if (ret[3]) {
        ptr2 = 0;
        len2 = 0;
        throw takeFromExternrefTable0$1(ret[2]);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0$1(ptr2, len2);
    } finally {
      wasm$1.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
  }
  clear_ignored_lints() {
    wasm$1.linter_clear_ignored_lints(this.__wbg_ptr);
  }
  /**
   * Clear the user dictionary.
   */
  clear_words() {
    wasm$1.linter_clear_words(this.__wbg_ptr);
  }
  /**
   * Compute the context hash of a given lint.
   * @param {string} source_text
   * @param {Lint} lint
   * @returns {bigint}
   */
  context_hash(source_text, lint) {
    const ptr0 = passStringToWasm0$1(source_text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    _assertClass$1(lint, Lint$1);
    const ret = wasm$1.linter_context_hash(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * Export the linter's ignored lints as a privacy-respecting JSON list of hashes.
   * @returns {string}
   */
  export_ignored_lints() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_export_ignored_lints(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Export words from the dictionary.
   * Note: this will only return words previously added by [\`Self::import_words\`].
   * @returns {string[]}
   */
  export_words() {
    const ret = wasm$1.linter_export_words(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0$1(ret[0], ret[1]);
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  generate_stats_file() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_generate_stats_file(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the dialect this struct was constructed for.
   * @returns {Dialect}
   */
  get_dialect() {
    const ret = wasm$1.linter_get_dialect(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_lint_config_as_object() {
    const ret = wasm$1.linter_get_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {string}
   */
  get_lint_descriptions_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_lint_descriptions_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {any}
   */
  get_lint_descriptions_as_object() {
    const ret = wasm$1.linter_get_lint_descriptions_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {string}
   */
  get_lint_descriptions_html_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {any}
   */
  get_lint_descriptions_html_as_object() {
    const ret = wasm$1.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_structured_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.linter_get_structured_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_structured_lint_config_as_object() {
    const ret = wasm$1.linter_get_structured_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Add a specific context hash to the ignored lints list.
   * @param {BigUint64Array} hashes
   */
  ignore_hashes(hashes) {
    const ptr0 = passArray64ToWasm0$1(hashes, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.linter_ignore_hashes(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {string} source_text
   * @param {Lint[]} lints
   */
  ignore_lints(source_text, lints) {
    const ptr0 = passStringToWasm0$1(source_text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ptr1 = passArrayJsValueToWasm0$1(lints, wasm$1.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN$1;
    wasm$1.linter_ignore_lints(this.__wbg_ptr, ptr0, len0, ptr1, len1);
  }
  /**
   * Import into the linter's ignored lints from a privacy-respecting JSON list of hashes.
   * @param {string} json
   */
  import_ignored_lints(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_import_ignored_lints(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * @param {string} file
   */
  import_stats_file(file) {
    const ptr0 = passStringToWasm0$1(file, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_import_stats_file(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * Load a Weirpack from raw bytes, merging its rules into the current linter.
   * Returns test failures if any are found, and does not import in that case.
   * @param {Uint8Array} bytes
   * @returns {any}
   */
  import_weirpack(bytes) {
    const ptr0 = passArray8ToWasm0$1(bytes, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_import_weirpack(this.__wbg_ptr, ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return takeFromExternrefTable0$1(ret[0]);
  }
  /**
   * Import words into the dictionary.
   * @param {string[]} additional_words
   */
  import_words(additional_words) {
    const ptr0 = passArrayJsValueToWasm0$1(additional_words, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.linter_import_words(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Helper method to quickly check if a plain string is likely intended to be English
   * @param {string} text
   * @returns {boolean}
   */
  is_likely_english(text) {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_is_likely_english(this.__wbg_ptr, ptr0, len0);
    return ret !== 0;
  }
  /**
   * Helper method to remove non-English text from a plain English document.
   * @param {string} text
   * @returns {string}
   */
  isolate_english(text) {
    let deferred2_0;
    let deferred2_1;
    try {
      const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN$1;
      const ret = wasm$1.linter_isolate_english(this.__wbg_ptr, ptr0, len0);
      deferred2_0 = ret[0];
      deferred2_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Perform the configured linting on the provided text.
   *
   * If the provided regex mask cannot be parsed, this method will return an empty array.
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {Lint[]}
   */
  lint(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    var ptr1 = isLikeNone$1(regex_mask) ? 0 : passStringToWasm0$1(regex_mask, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_lint(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0$1(ret[0], ret[1]);
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * Construct a new \`Linter\`.
   * Note that this can mean constructing the curated dictionary, which is the most expensive operation
   * in Harper.
   * @param {Dialect} dialect
   * @returns {Linter}
   */
  static new(dialect) {
    const ret = wasm$1.linter_new(dialect);
    return Linter.__wrap(ret);
  }
  /**
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {OrganizedGroup[]}
   */
  organized_lints(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    var ptr1 = isLikeNone$1(regex_mask) ? 0 : passStringToWasm0$1(regex_mask, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_organized_lints(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0$1(ret[0], ret[1]);
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * @param {string} json
   */
  set_lint_config_from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.linter_set_lint_config_from_json(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * @param {any} object
   */
  set_lint_config_from_object(object) {
    const ret = wasm$1.linter_set_lint_config_from_object(this.__wbg_ptr, object);
    if (ret[1]) {
      throw takeFromExternrefTable0$1(ret[0]);
    }
  }
  /**
   * @param {bigint | null} [start_time]
   * @param {bigint | null} [end_time]
   * @returns {any}
   */
  summarize_stats(start_time, end_time) {
    const ret = wasm$1.linter_summarize_stats(this.__wbg_ptr, !isLikeNone$1(start_time), isLikeNone$1(start_time) ? BigInt(0) : start_time, !isLikeNone$1(end_time), isLikeNone$1(end_time) ? BigInt(0) : end_time);
    return ret;
  }
};
if (Symbol.dispose) Linter$1.prototype[Symbol.dispose] = Linter$1.prototype.free;
let OrganizedGroup$1 = class OrganizedGroup {
  static __wrap(ptr) {
    const obj = Object.create(OrganizedGroup.prototype);
    obj.__wbg_ptr = ptr;
    OrganizedGroupFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    OrganizedGroupFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_organizedgroup_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get group() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.__wbg_get_organizedgroup_group(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {Lint[]}
   */
  get lints() {
    const ret = wasm$1.__wbg_get_organizedgroup_lints(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0$1(ret[0], ret[1]);
    wasm$1.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @param {string} arg0
   */
  set group(arg0) {
    const ptr0 = passStringToWasm0$1(arg0, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.__wbg_set_organizedgroup_group(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {Lint[]} arg0
   */
  set lints(arg0) {
    const ptr0 = passArrayJsValueToWasm0$1(arg0, wasm$1.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN$1;
    wasm$1.__wbg_set_organizedgroup_lints(this.__wbg_ptr, ptr0, len0);
  }
};
if (Symbol.dispose) OrganizedGroup$1.prototype[Symbol.dispose] = OrganizedGroup$1.prototype.free;
let Span$1 = class Span {
  static __wrap(ptr) {
    const obj = Object.create(Span.prototype);
    obj.__wbg_ptr = ptr;
    SpanFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SpanFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_span_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  get end() {
    const ret = wasm$1.__wbg_get_span_end(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {number}
   */
  get start() {
    const ret = wasm$1.__wbg_get_span_start(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set end(arg0) {
    wasm$1.__wbg_set_span_end(this.__wbg_ptr, arg0);
  }
  /**
   * @param {number} arg0
   */
  set start(arg0) {
    wasm$1.__wbg_set_span_start(this.__wbg_ptr, arg0);
  }
  /**
   * @param {string} json
   * @returns {Span}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.span_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return Span.__wrap(ret[0]);
  }
  /**
   * @returns {boolean}
   */
  is_empty() {
    const ret = wasm$1.span_is_empty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {number}
   */
  len() {
    const ret = wasm$1.span_len(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} start
   * @param {number} end
   * @returns {Span}
   */
  static new(start, end) {
    const ret = wasm$1.span_new(start, end);
    return Span.__wrap(ret);
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.span_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) Span$1.prototype[Symbol.dispose] = Span$1.prototype.free;
let Suggestion$1 = class Suggestion {
  static __wrap(ptr) {
    const obj = Object.create(Suggestion.prototype);
    obj.__wbg_ptr = ptr;
    SuggestionFinalization$1.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SuggestionFinalization$1.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_suggestion_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Suggestion}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0$1(json, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.suggestion_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0$1(ret[1]);
    }
    return Suggestion.__wrap(ret[0]);
  }
  /**
   * Get the text that is going to replace the problematic section.
   * If [\`Self::kind\`] is \`SuggestionKind::Remove\`, this will return an empty
   * string.
   * @returns {string}
   */
  get_replacement_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.suggestion_get_replacement_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {SuggestionKind}
   */
  kind() {
    const ret = wasm$1.suggestion_kind(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm$1.suggestion_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0$1(ret[0], ret[1]);
    } finally {
      wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
};
if (Symbol.dispose) Suggestion$1.prototype[Symbol.dispose] = Suggestion$1.prototype.free;
const SuggestionKind$1 = Object.freeze({
  /**
   * Replace the problematic text.
   */
  Replace: 0,
  "0": "Replace",
  /**
   * Remove the problematic text.
   */
  Remove: 1,
  "1": "Remove",
  /**
   * Insert additional text after the error.
   */
  InsertAfter: 2,
  "2": "InsertAfter"
});
function get_default_lint_config$1() {
  const ret = wasm$1.get_default_lint_config();
  return ret;
}
function get_default_lint_config_as_json$1() {
  let deferred1_0;
  let deferred1_1;
  try {
    const ret = wasm$1.get_default_lint_config_as_json();
    deferred1_0 = ret[0];
    deferred1_1 = ret[1];
    return getStringFromWasm0$1(ret[0], ret[1]);
  } finally {
    wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
  }
}
function setup$1() {
  wasm$1.setup();
}
function to_title_case$1(text) {
  let deferred2_0;
  let deferred2_1;
  try {
    const ptr0 = passStringToWasm0$1(text, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN$1;
    const ret = wasm$1.to_title_case(ptr0, len0);
    deferred2_0 = ret[0];
    deferred2_1 = ret[1];
    return getStringFromWasm0$1(ret[0], ret[1]);
  } finally {
    wasm$1.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}
function __wbg_get_imports$1() {
  const import0 = {
    __proto__: null,
    __wbg_Error_408e67f47ca7b58b: function(arg0, arg1) {
      const ret = Error(getStringFromWasm0$1(arg0, arg1));
      return ret;
    },
    __wbg_String_8564e559799eccda: function(arg0, arg1) {
      const ret = String(arg1);
      const ptr1 = passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_boolean_get_c9c83ebd41b34df3: function(arg0) {
      const v = arg0;
      const ret = typeof v === "boolean" ? v : void 0;
      return isLikeNone$1(ret) ? 16777215 : ret ? 1 : 0;
    },
    __wbg___wbindgen_debug_string_a57024b9c6e4a48b: function(arg0, arg1) {
      const ret = debugString$1(arg1);
      const ptr1 = passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_is_function_5e4570eb24ffa122: function(arg0) {
      const ret = typeof arg0 === "function";
      return ret;
    },
    __wbg___wbindgen_is_object_a2790eb24c211ea0: function(arg0) {
      const val = arg0;
      const ret = typeof val === "object" && val !== null;
      return ret;
    },
    __wbg___wbindgen_is_string_e6f02f0ea5f20a32: function(arg0) {
      const ret = typeof arg0 === "string";
      return ret;
    },
    __wbg___wbindgen_jsval_loose_eq_acf2776254a8d832: function(arg0, arg1) {
      const ret = arg0 == arg1;
      return ret;
    },
    __wbg___wbindgen_number_get_136b9679cab35cfb: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "number" ? obj : void 0;
      getDataViewMemory0$1().setFloat64(arg0 + 8 * 1, isLikeNone$1(ret) ? 0 : ret, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, !isLikeNone$1(ret), true);
    },
    __wbg___wbindgen_string_get_d154f1e671052120: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "string" ? obj : void 0;
      var ptr1 = isLikeNone$1(ret) ? 0 : passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_throw_bb96b2010945f0bc: function(arg0, arg1) {
      throw new Error(getStringFromWasm0$1(arg0, arg1));
    },
    __wbg_call_1c5886ab9c57d1c7: function() {
      return handleError$1(function(arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
      }, arguments);
    },
    __wbg_done_669171204c3dcae2: function(arg0) {
      const ret = arg0.done;
      return ret;
    },
    __wbg_entries_7774d489e1da5f4f: function(arg0) {
      const ret = Object.entries(arg0);
      return ret;
    },
    __wbg_error_757e9472f8410341: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0$1(arg0, arg1));
      } finally {
        wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_getRandomValues_a608c4436c19407a: function() {
      return handleError$1(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0$1(arg0, arg1));
      }, arguments);
    },
    __wbg_getRandomValues_e446ea5ffdd14ee5: function() {
      return handleError$1(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0$1(arg0, arg1));
      }, arguments);
    },
    __wbg_getTime_63fb0332e6c4ec17: function(arg0) {
      const ret = arg0.getTime();
      return ret;
    },
    __wbg_get_c0c8f8d7da0c03dd: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_d173c0308df22d37: function() {
      return handleError$1(function(arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_unchecked_e20b893aeafc3fca: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_instanceof_ArrayBuffer_993d02d2d254cad1: function(arg0) {
      let result;
      try {
        result = arg0 instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Uint8Array_f935dbb0aa7cdeed: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_iterator_5cebbb86e33c6dd6: function() {
      const ret = Symbol.iterator;
      return ret;
    },
    __wbg_length_36bd29c6848c2144: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_length_ecfa2c63d3d0d82c: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_lint_new: function(arg0) {
      const ret = Lint$1.__wrap(arg0);
      return ret;
    },
    __wbg_lint_unwrap: function(arg0) {
      const ret = Lint$1.__unwrap(arg0);
      return ret;
    },
    __wbg_log_1f8cbb01c83d06c2: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0$1(arg0, arg1), getStringFromWasm0$1(arg2, arg3), getStringFromWasm0$1(arg4, arg5), getStringFromWasm0$1(arg6, arg7));
      } finally {
        wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_log_a54ca6b45e09078a: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0$1(arg0, arg1));
      } finally {
        wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_mark_6b7f03786f5e4d61: function(arg0, arg1) {
      performance.mark(getStringFromWasm0$1(arg0, arg1));
    },
    __wbg_measure_0e21b33a1c6e3a29: function() {
      return handleError$1(function(arg0, arg1, arg2, arg3) {
        let deferred0_0;
        let deferred0_1;
        let deferred1_0;
        let deferred1_1;
        try {
          deferred0_0 = arg0;
          deferred0_1 = arg1;
          deferred1_0 = arg2;
          deferred1_1 = arg3;
          performance.measure(getStringFromWasm0$1(arg0, arg1), getStringFromWasm0$1(arg2, arg3));
        } finally {
          wasm$1.__wbindgen_free(deferred0_0, deferred0_1, 1);
          wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
      }, arguments);
    },
    __wbg_new_0_f117d868b403dc07: function() {
      const ret = /* @__PURE__ */ new Date();
      return ret;
    },
    __wbg_new_116be93542d39019: function() {
      const ret = new Array();
      return ret;
    },
    __wbg_new_227d7c05414eb861: function() {
      const ret = new Error();
      return ret;
    },
    __wbg_new_77cc4f4f472aeb81: function(arg0) {
      const ret = new Uint8Array(arg0);
      return ret;
    },
    __wbg_new_cdf041679ded4c5f: function() {
      const ret = /* @__PURE__ */ new Map();
      return ret;
    },
    __wbg_new_ebe3e0f6837f0879: function() {
      const ret = new Object();
      return ret;
    },
    __wbg_next_42cf16ee0dafc9e2: function() {
      return handleError$1(function(arg0) {
        const ret = arg0.next();
        return ret;
      }, arguments);
    },
    __wbg_next_8f26b64fa5e9f64b: function(arg0) {
      const ret = arg0.next;
      return ret;
    },
    __wbg_organizedgroup_new: function(arg0) {
      const ret = OrganizedGroup$1.__wrap(arg0);
      return ret;
    },
    __wbg_prototypesetcall_de8e0d9553586985: function(arg0, arg1, arg2) {
      Uint8Array.prototype.set.call(getArrayU8FromWasm0$1(arg0, arg1), arg2);
    },
    __wbg_set_014226dfeca53178: function(arg0, arg1, arg2) {
      const ret = arg0.set(arg1, arg2);
      return ret;
    },
    __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    },
    __wbg_set_a80955eb93b145c6: function(arg0, arg1, arg2) {
      arg0[arg1 >>> 0] = arg2;
    },
    __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
      const ret = arg1.stack;
      const ptr1 = passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_suggestion_new: function(arg0) {
      const ret = Suggestion$1.__wrap(arg0);
      return ret;
    },
    __wbg_value_1e2369fab29b420e: function(arg0) {
      const ret = arg0.value;
      return ret;
    },
    __wbindgen_cast_0000000000000001: function(arg0) {
      const ret = arg0;
      return ret;
    },
    __wbindgen_cast_0000000000000002: function(arg0, arg1) {
      const ret = getStringFromWasm0$1(arg0, arg1);
      return ret;
    },
    __wbindgen_init_externref_table: function() {
      const table = wasm$1.__wbindgen_externrefs;
      const offset = table.grow(4);
      table.set(0, void 0);
      table.set(offset + 0, void 0);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    }
  };
  return {
    __proto__: null,
    "./harper_wasm_slim_bg.js": import0
  };
}
const LintFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_lint_free(ptr, 1));
const LinterFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_linter_free(ptr, 1));
const OrganizedGroupFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_organizedgroup_free(ptr, 1));
const SpanFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_span_free(ptr, 1));
const SuggestionFinalization$1 = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm$1.__wbg_suggestion_free(ptr, 1));
function addToExternrefTable0$1(obj) {
  const idx = wasm$1.__externref_table_alloc();
  wasm$1.__wbindgen_externrefs.set(idx, obj);
  return idx;
}
function _assertClass$1(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(\`expected instance of \${klass.name}\`);
  }
}
function debugString$1(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return \`\${val}\`;
  }
  if (type == "string") {
    return \`"\${val}"\`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return \`Symbol(\${description})\`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return \`Function(\${name})\`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString$1(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString$1(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return \`\${val.name}: \${val.message}
\${val.stack}\`;
  }
  return className;
}
function getArrayJsValueFromWasm0$1(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getDataViewMemory0$1();
  const result = [];
  for (let i = ptr; i < ptr + 4 * len; i += 4) {
    result.push(wasm$1.__wbindgen_externrefs.get(mem.getUint32(i, true)));
  }
  wasm$1.__externref_drop_slice(ptr, len);
  return result;
}
function getArrayU8FromWasm0$1(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0$1().subarray(ptr / 1, ptr / 1 + len);
}
let cachedBigUint64ArrayMemory0$1 = null;
function getBigUint64ArrayMemory0$1() {
  if (cachedBigUint64ArrayMemory0$1 === null || cachedBigUint64ArrayMemory0$1.byteLength === 0) {
    cachedBigUint64ArrayMemory0$1 = new BigUint64Array(wasm$1.memory.buffer);
  }
  return cachedBigUint64ArrayMemory0$1;
}
let cachedDataViewMemory0$1 = null;
function getDataViewMemory0$1() {
  if (cachedDataViewMemory0$1 === null || cachedDataViewMemory0$1.buffer.detached === true || cachedDataViewMemory0$1.buffer.detached === void 0 && cachedDataViewMemory0$1.buffer !== wasm$1.memory.buffer) {
    cachedDataViewMemory0$1 = new DataView(wasm$1.memory.buffer);
  }
  return cachedDataViewMemory0$1;
}
function getStringFromWasm0$1(ptr, len) {
  return decodeText$1(ptr >>> 0, len);
}
let cachedUint8ArrayMemory0$1 = null;
function getUint8ArrayMemory0$1() {
  if (cachedUint8ArrayMemory0$1 === null || cachedUint8ArrayMemory0$1.byteLength === 0) {
    cachedUint8ArrayMemory0$1 = new Uint8Array(wasm$1.memory.buffer);
  }
  return cachedUint8ArrayMemory0$1;
}
function handleError$1(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    const idx = addToExternrefTable0$1(e);
    wasm$1.__wbindgen_exn_store(idx);
  }
}
function isLikeNone$1(x) {
  return x === void 0 || x === null;
}
function passArray64ToWasm0$1(arg, malloc) {
  const ptr = malloc(arg.length * 8, 8) >>> 0;
  getBigUint64ArrayMemory0$1().set(arg, ptr / 8);
  WASM_VECTOR_LEN$1 = arg.length;
  return ptr;
}
function passArray8ToWasm0$1(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0$1().set(arg, ptr / 1);
  WASM_VECTOR_LEN$1 = arg.length;
  return ptr;
}
function passArrayJsValueToWasm0$1(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  for (let i = 0; i < array.length; i++) {
    const add = addToExternrefTable0$1(array[i]);
    getDataViewMemory0$1().setUint32(ptr + 4 * i, add, true);
  }
  WASM_VECTOR_LEN$1 = array.length;
  return ptr;
}
function passStringToWasm0$1(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder$1.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0$1().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN$1 = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0$1();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0$1().subarray(ptr + offset, ptr + len);
    const ret = cachedTextEncoder$1.encodeInto(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN$1 = offset;
  return ptr;
}
function takeFromExternrefTable0$1(idx) {
  const value = wasm$1.__wbindgen_externrefs.get(idx);
  wasm$1.__externref_table_dealloc(idx);
  return value;
}
let cachedTextDecoder$1 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder$1.decode();
const MAX_SAFARI_DECODE_BYTES$1 = 2146435072;
let numBytesDecoded$1 = 0;
function decodeText$1(ptr, len) {
  numBytesDecoded$1 += len;
  if (numBytesDecoded$1 >= MAX_SAFARI_DECODE_BYTES$1) {
    cachedTextDecoder$1 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder$1.decode();
    numBytesDecoded$1 = len;
  }
  return cachedTextDecoder$1.decode(getUint8ArrayMemory0$1().subarray(ptr, ptr + len));
}
const cachedTextEncoder$1 = new TextEncoder();
if (!("encodeInto" in cachedTextEncoder$1)) {
  cachedTextEncoder$1.encodeInto = function(arg, view) {
    const buf = cachedTextEncoder$1.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
}
let WASM_VECTOR_LEN$1 = 0;
let wasm$1;
function __wbg_finalize_init$1(instance, module) {
  wasm$1 = instance.exports;
  cachedBigUint64ArrayMemory0$1 = null;
  cachedDataViewMemory0$1 = null;
  cachedUint8ArrayMemory0$1 = null;
  wasm$1.__wbindgen_start();
  return wasm$1;
}
async function __wbg_load$1(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (!module.ok) {
      throw new Error(\`failed to fetch Wasm: \${module.status} \${module.statusText} fetching '\${module.url}'\`);
    }
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        const validResponse = expectedResponseType(module.type);
        if (validResponse && module.headers.get("Content-Type") !== "application/wasm") {
          console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
  function expectedResponseType(type) {
    switch (type) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function initSync$1(module) {
  if (wasm$1 !== void 0) return wasm$1;
  if (module !== void 0) {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      ({ module } = module);
    } else {
      console.warn("using deprecated parameters for \`initSync()\`; pass a single object instead");
    }
  }
  const imports = __wbg_get_imports$1();
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init$1(instance);
}
async function __wbg_init$1(module_or_path) {
  if (wasm$1 !== void 0) return wasm$1;
  if (module_or_path !== void 0) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({ module_or_path } = module_or_path);
    } else {
      console.warn("using deprecated parameters for the initialization function; pass a single object instead");
    }
  }
  if (module_or_path === void 0) {
    module_or_path = new URL();
  }
  const imports = __wbg_get_imports$1();
  if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  const { instance, module } = await __wbg_load$1(await module_or_path, imports);
  return __wbg_finalize_init$1(instance);
}
var defaultGlue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Dialect: Dialect$1,
  Language: Language$1,
  Lint: Lint$1,
  Linter: Linter$1,
  OrganizedGroup: OrganizedGroup$1,
  Span: Span$1,
  Suggestion: Suggestion$1,
  SuggestionKind: SuggestionKind$1,
  default: __wbg_init$1,
  get_default_lint_config: get_default_lint_config$1,
  get_default_lint_config_as_json: get_default_lint_config_as_json$1,
  initSync: initSync$1,
  setup: setup$1,
  to_title_case: to_title_case$1
});
const Dialect = Object.freeze({
  American: 0,
  "0": "American",
  British: 1,
  "1": "British",
  Australian: 2,
  "2": "Australian",
  Canadian: 3,
  "3": "Canadian",
  Indian: 4,
  "4": "Indian"
});
const Language = Object.freeze({
  Plain: 0,
  "0": "Plain",
  Markdown: 1,
  "1": "Markdown",
  Typst: 2,
  "2": "Typst"
});
class Lint2 {
  static __wrap(ptr) {
    const obj = Object.create(Lint2.prototype);
    obj.__wbg_ptr = ptr;
    LintFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  static __unwrap(jsValue) {
    if (!(jsValue instanceof Lint2)) {
      return 0;
    }
    return jsValue.__destroy_into_raw();
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LintFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_lint_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Lint}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.lint_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Lint2.__wrap(ret[0]);
  }
  /**
   * Get the content of the source material pointed to by [\`Self::span\`]
   * @returns {string}
   */
  get_problem_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_get_problem_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_lint_kind(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a string representing the general category of the lint.
   * @returns {string}
   */
  lint_kind_pretty() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_lint_kind_pretty(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error.
   * @returns {string}
   */
  message() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_message(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a description of the error as HTML.
   * @returns {string}
   */
  message_html() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_message_html(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the location of the problematic text.
   * @returns {Span}
   */
  span() {
    const ret = wasm.lint_span(this.__wbg_ptr);
    return Span2.__wrap(ret);
  }
  /**
   * Equivalent to calling \`.length\` on the result of \`suggestions()\`.
   * @returns {number}
   */
  suggestion_count() {
    const ret = wasm.lint_suggestion_count(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * Get an array of any suggestions that may resolve the issue.
   * @returns {Suggestion[]}
   */
  suggestions() {
    const ret = wasm.lint_suggestions(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]);
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.lint_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
if (Symbol.dispose) Lint2.prototype[Symbol.dispose] = Lint2.prototype.free;
class Linter2 {
  static __wrap(ptr) {
    const obj = Object.create(Linter2.prototype);
    obj.__wbg_ptr = ptr;
    LinterFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    LinterFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_linter_free(ptr, 0);
  }
  /**
   * Apply a suggestion from a given lint.
   * This action will be logged to the Linter's statistics.
   * @param {string} source_text
   * @param {Lint} lint
   * @param {Suggestion} suggestion
   * @returns {string}
   */
  apply_suggestion(source_text, lint, suggestion) {
    let deferred3_0;
    let deferred3_1;
    try {
      const ptr0 = passStringToWasm0(source_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      _assertClass(lint, Lint2);
      _assertClass(suggestion, Suggestion2);
      const ret = wasm.linter_apply_suggestion(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr, suggestion.__wbg_ptr);
      var ptr2 = ret[0];
      var len2 = ret[1];
      if (ret[3]) {
        ptr2 = 0;
        len2 = 0;
        throw takeFromExternrefTable0(ret[2]);
      }
      deferred3_0 = ptr2;
      deferred3_1 = len2;
      return getStringFromWasm0(ptr2, len2);
    } finally {
      wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
  }
  clear_ignored_lints() {
    wasm.linter_clear_ignored_lints(this.__wbg_ptr);
  }
  /**
   * Clear the user dictionary.
   */
  clear_words() {
    wasm.linter_clear_words(this.__wbg_ptr);
  }
  /**
   * Compute the context hash of a given lint.
   * @param {string} source_text
   * @param {Lint} lint
   * @returns {bigint}
   */
  context_hash(source_text, lint) {
    const ptr0 = passStringToWasm0(source_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(lint, Lint2);
    const ret = wasm.linter_context_hash(this.__wbg_ptr, ptr0, len0, lint.__wbg_ptr);
    return BigInt.asUintN(64, ret);
  }
  /**
   * Export the linter's ignored lints as a privacy-respecting JSON list of hashes.
   * @returns {string}
   */
  export_ignored_lints() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_export_ignored_lints(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Export words from the dictionary.
   * Note: this will only return words previously added by [\`Self::import_words\`].
   * @returns {string[]}
   */
  export_words() {
    const ret = wasm.linter_export_words(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]);
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @returns {string}
   */
  generate_stats_file() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_generate_stats_file(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get the dialect this struct was constructed for.
   * @returns {Dialect}
   */
  get_dialect() {
    const ret = wasm.linter_get_dialect(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_lint_config_as_object() {
    const ret = wasm.linter_get_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {string}
   */
  get_lint_descriptions_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_lint_descriptions_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as Markdown.
   * @returns {any}
   */
  get_lint_descriptions_as_object() {
    const ret = wasm.linter_get_lint_descriptions_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Get a JSON map containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {string}
   */
  get_lint_descriptions_html_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * Get a Record containing the descriptions of all the linting rules, formatted as HTML.
   * @returns {any}
   */
  get_lint_descriptions_html_as_object() {
    const ret = wasm.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  get_structured_lint_config_as_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.linter_get_structured_lint_config_as_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {any}
   */
  get_structured_lint_config_as_object() {
    const ret = wasm.linter_get_structured_lint_config_as_object(this.__wbg_ptr);
    return ret;
  }
  /**
   * Add a specific context hash to the ignored lints list.
   * @param {BigUint64Array} hashes
   */
  ignore_hashes(hashes) {
    const ptr0 = passArray64ToWasm0(hashes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.linter_ignore_hashes(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {string} source_text
   * @param {Lint[]} lints
   */
  ignore_lints(source_text, lints) {
    const ptr0 = passStringToWasm0(source_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayJsValueToWasm0(lints, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    wasm.linter_ignore_lints(this.__wbg_ptr, ptr0, len0, ptr1, len1);
  }
  /**
   * Import into the linter's ignored lints from a privacy-respecting JSON list of hashes.
   * @param {string} json
   */
  import_ignored_lints(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_import_ignored_lints(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @param {string} file
   */
  import_stats_file(file) {
    const ptr0 = passStringToWasm0(file, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_import_stats_file(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * Load a Weirpack from raw bytes, merging its rules into the current linter.
   * Returns test failures if any are found, and does not import in that case.
   * @param {Uint8Array} bytes
   * @returns {any}
   */
  import_weirpack(bytes) {
    const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_import_weirpack(this.__wbg_ptr, ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
  }
  /**
   * Import words into the dictionary.
   * @param {string[]} additional_words
   */
  import_words(additional_words) {
    const ptr0 = passArrayJsValueToWasm0(additional_words, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.linter_import_words(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * Helper method to quickly check if a plain string is likely intended to be English
   * @param {string} text
   * @returns {boolean}
   */
  is_likely_english(text) {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_is_likely_english(this.__wbg_ptr, ptr0, len0);
    return ret !== 0;
  }
  /**
   * Helper method to remove non-English text from a plain English document.
   * @param {string} text
   * @returns {string}
   */
  isolate_english(text) {
    let deferred2_0;
    let deferred2_1;
    try {
      const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.linter_isolate_english(this.__wbg_ptr, ptr0, len0);
      deferred2_0 = ret[0];
      deferred2_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
  }
  /**
   * Perform the configured linting on the provided text.
   *
   * If the provided regex mask cannot be parsed, this method will return an empty array.
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {Lint[]}
   */
  lint(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(regex_mask) ? 0 : passStringToWasm0(regex_mask, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    const ret = wasm.linter_lint(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0(ret[0], ret[1]);
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * Construct a new \`Linter\`.
   * Note that this can mean constructing the curated dictionary, which is the most expensive operation
   * in Harper.
   * @param {Dialect} dialect
   * @returns {Linter}
   */
  static new(dialect) {
    const ret = wasm.linter_new(dialect);
    return Linter2.__wrap(ret);
  }
  /**
   * @param {string} text
   * @param {Language} language
   * @param {boolean} all_headings
   * @param {string | null | undefined} regex_mask
   * @param {boolean} dedup
   * @param {boolean} isolate_english
   * @returns {OrganizedGroup[]}
   */
  organized_lints(text, language, all_headings, regex_mask, dedup, isolate_english) {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(regex_mask) ? 0 : passStringToWasm0(regex_mask, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    const ret = wasm.linter_organized_lints(this.__wbg_ptr, ptr0, len0, language, all_headings, ptr1, len1, dedup, isolate_english);
    var v3 = getArrayJsValueFromWasm0(ret[0], ret[1]);
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
  }
  /**
   * @param {string} json
   */
  set_lint_config_from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linter_set_lint_config_from_json(this.__wbg_ptr, ptr0, len0);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @param {any} object
   */
  set_lint_config_from_object(object) {
    const ret = wasm.linter_set_lint_config_from_object(this.__wbg_ptr, object);
    if (ret[1]) {
      throw takeFromExternrefTable0(ret[0]);
    }
  }
  /**
   * @param {bigint | null} [start_time]
   * @param {bigint | null} [end_time]
   * @returns {any}
   */
  summarize_stats(start_time, end_time) {
    const ret = wasm.linter_summarize_stats(this.__wbg_ptr, !isLikeNone(start_time), isLikeNone(start_time) ? BigInt(0) : start_time, !isLikeNone(end_time), isLikeNone(end_time) ? BigInt(0) : end_time);
    return ret;
  }
}
if (Symbol.dispose) Linter2.prototype[Symbol.dispose] = Linter2.prototype.free;
class OrganizedGroup2 {
  static __wrap(ptr) {
    const obj = Object.create(OrganizedGroup2.prototype);
    obj.__wbg_ptr = ptr;
    OrganizedGroupFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    OrganizedGroupFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_organizedgroup_free(ptr, 0);
  }
  /**
   * @returns {string}
   */
  get group() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.__wbg_get_organizedgroup_group(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {Lint[]}
   */
  get lints() {
    const ret = wasm.__wbg_get_organizedgroup_lints(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]);
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @param {string} arg0
   */
  set group(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_organizedgroup_group(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @param {Lint[]} arg0
   */
  set lints(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_organizedgroup_lints(this.__wbg_ptr, ptr0, len0);
  }
}
if (Symbol.dispose) OrganizedGroup2.prototype[Symbol.dispose] = OrganizedGroup2.prototype.free;
class Span2 {
  static __wrap(ptr) {
    const obj = Object.create(Span2.prototype);
    obj.__wbg_ptr = ptr;
    SpanFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SpanFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_span_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  get end() {
    const ret = wasm.__wbg_get_span_end(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @returns {number}
   */
  get start() {
    const ret = wasm.__wbg_get_span_start(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set end(arg0) {
    wasm.__wbg_set_span_end(this.__wbg_ptr, arg0);
  }
  /**
   * @param {number} arg0
   */
  set start(arg0) {
    wasm.__wbg_set_span_start(this.__wbg_ptr, arg0);
  }
  /**
   * @param {string} json
   * @returns {Span}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.span_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Span2.__wrap(ret[0]);
  }
  /**
   * @returns {boolean}
   */
  is_empty() {
    const ret = wasm.span_is_empty(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @returns {number}
   */
  len() {
    const ret = wasm.span_len(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} start
   * @param {number} end
   * @returns {Span}
   */
  static new(start, end) {
    const ret = wasm.span_new(start, end);
    return Span2.__wrap(ret);
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.span_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
if (Symbol.dispose) Span2.prototype[Symbol.dispose] = Span2.prototype.free;
class Suggestion2 {
  static __wrap(ptr) {
    const obj = Object.create(Suggestion2.prototype);
    obj.__wbg_ptr = ptr;
    SuggestionFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    SuggestionFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_suggestion_free(ptr, 0);
  }
  /**
   * @param {string} json
   * @returns {Suggestion}
   */
  static from_json(json) {
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.suggestion_from_json(ptr0, len0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    return Suggestion2.__wrap(ret[0]);
  }
  /**
   * Get the text that is going to replace the problematic section.
   * If [\`Self::kind\`] is \`SuggestionKind::Remove\`, this will return an empty
   * string.
   * @returns {string}
   */
  get_replacement_text() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.suggestion_get_replacement_text(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @returns {SuggestionKind}
   */
  kind() {
    const ret = wasm.suggestion_kind(this.__wbg_ptr);
    return ret;
  }
  /**
   * @returns {string}
   */
  to_json() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.suggestion_to_json(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
}
if (Symbol.dispose) Suggestion2.prototype[Symbol.dispose] = Suggestion2.prototype.free;
const SuggestionKind = Object.freeze({
  /**
   * Replace the problematic text.
   */
  Replace: 0,
  "0": "Replace",
  /**
   * Remove the problematic text.
   */
  Remove: 1,
  "1": "Remove",
  /**
   * Insert additional text after the error.
   */
  InsertAfter: 2,
  "2": "InsertAfter"
});
function get_default_lint_config() {
  const ret = wasm.get_default_lint_config();
  return ret;
}
function get_default_lint_config_as_json() {
  let deferred1_0;
  let deferred1_1;
  try {
    const ret = wasm.get_default_lint_config_as_json();
    deferred1_0 = ret[0];
    deferred1_1 = ret[1];
    return getStringFromWasm0(ret[0], ret[1]);
  } finally {
    wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
  }
}
function setup() {
  wasm.setup();
}
function to_title_case(text) {
  let deferred2_0;
  let deferred2_1;
  try {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.to_title_case(ptr0, len0);
    deferred2_0 = ret[0];
    deferred2_1 = ret[1];
    return getStringFromWasm0(ret[0], ret[1]);
  } finally {
    wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}
function __wbg_get_imports() {
  const import0 = {
    __proto__: null,
    __wbg_Error_408e67f47ca7b58b: function(arg0, arg1) {
      const ret = Error(getStringFromWasm0(arg0, arg1));
      return ret;
    },
    __wbg_String_8564e559799eccda: function(arg0, arg1) {
      const ret = String(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_boolean_get_c9c83ebd41b34df3: function(arg0) {
      const v = arg0;
      const ret = typeof v === "boolean" ? v : void 0;
      return isLikeNone(ret) ? 16777215 : ret ? 1 : 0;
    },
    __wbg___wbindgen_debug_string_a57024b9c6e4a48b: function(arg0, arg1) {
      const ret = debugString(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_is_function_5e4570eb24ffa122: function(arg0) {
      const ret = typeof arg0 === "function";
      return ret;
    },
    __wbg___wbindgen_is_object_a2790eb24c211ea0: function(arg0) {
      const val = arg0;
      const ret = typeof val === "object" && val !== null;
      return ret;
    },
    __wbg___wbindgen_is_string_e6f02f0ea5f20a32: function(arg0) {
      const ret = typeof arg0 === "string";
      return ret;
    },
    __wbg___wbindgen_jsval_loose_eq_acf2776254a8d832: function(arg0, arg1) {
      const ret = arg0 == arg1;
      return ret;
    },
    __wbg___wbindgen_number_get_136b9679cab35cfb: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "number" ? obj : void 0;
      getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    },
    __wbg___wbindgen_string_get_d154f1e671052120: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "string" ? obj : void 0;
      var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_throw_bb96b2010945f0bc: function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
    __wbg_call_1c5886ab9c57d1c7: function() {
      return handleError(function(arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
      }, arguments);
    },
    __wbg_done_669171204c3dcae2: function(arg0) {
      const ret = arg0.done;
      return ret;
    },
    __wbg_entries_7774d489e1da5f4f: function(arg0) {
      const ret = Object.entries(arg0);
      return ret;
    },
    __wbg_error_757e9472f8410341: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_getRandomValues_a608c4436c19407a: function() {
      return handleError(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getRandomValues_e446ea5ffdd14ee5: function() {
      return handleError(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getTime_63fb0332e6c4ec17: function(arg0) {
      const ret = arg0.getTime();
      return ret;
    },
    __wbg_get_c0c8f8d7da0c03dd: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_d173c0308df22d37: function() {
      return handleError(function(arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_unchecked_e20b893aeafc3fca: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_instanceof_ArrayBuffer_993d02d2d254cad1: function(arg0) {
      let result;
      try {
        result = arg0 instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Uint8Array_f935dbb0aa7cdeed: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_iterator_5cebbb86e33c6dd6: function() {
      const ret = Symbol.iterator;
      return ret;
    },
    __wbg_length_36bd29c6848c2144: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_length_ecfa2c63d3d0d82c: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_lint_new: function(arg0) {
      const ret = Lint2.__wrap(arg0);
      return ret;
    },
    __wbg_lint_unwrap: function(arg0) {
      const ret = Lint2.__unwrap(arg0);
      return ret;
    },
    __wbg_log_1f8cbb01c83d06c2: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_log_a54ca6b45e09078a: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_mark_6b7f03786f5e4d61: function(arg0, arg1) {
      performance.mark(getStringFromWasm0(arg0, arg1));
    },
    __wbg_measure_0e21b33a1c6e3a29: function() {
      return handleError(function(arg0, arg1, arg2, arg3) {
        let deferred0_0;
        let deferred0_1;
        let deferred1_0;
        let deferred1_1;
        try {
          deferred0_0 = arg0;
          deferred0_1 = arg1;
          deferred1_0 = arg2;
          deferred1_1 = arg3;
          performance.measure(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        } finally {
          wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
          wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
      }, arguments);
    },
    __wbg_new_0_f117d868b403dc07: function() {
      const ret = /* @__PURE__ */ new Date();
      return ret;
    },
    __wbg_new_116be93542d39019: function() {
      const ret = new Array();
      return ret;
    },
    __wbg_new_227d7c05414eb861: function() {
      const ret = new Error();
      return ret;
    },
    __wbg_new_77cc4f4f472aeb81: function(arg0) {
      const ret = new Uint8Array(arg0);
      return ret;
    },
    __wbg_new_cdf041679ded4c5f: function() {
      const ret = /* @__PURE__ */ new Map();
      return ret;
    },
    __wbg_new_ebe3e0f6837f0879: function() {
      const ret = new Object();
      return ret;
    },
    __wbg_next_42cf16ee0dafc9e2: function() {
      return handleError(function(arg0) {
        const ret = arg0.next();
        return ret;
      }, arguments);
    },
    __wbg_next_8f26b64fa5e9f64b: function(arg0) {
      const ret = arg0.next;
      return ret;
    },
    __wbg_organizedgroup_new: function(arg0) {
      const ret = OrganizedGroup2.__wrap(arg0);
      return ret;
    },
    __wbg_prototypesetcall_de8e0d9553586985: function(arg0, arg1, arg2) {
      Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
    },
    __wbg_set_014226dfeca53178: function(arg0, arg1, arg2) {
      const ret = arg0.set(arg1, arg2);
      return ret;
    },
    __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    },
    __wbg_set_a80955eb93b145c6: function(arg0, arg1, arg2) {
      arg0[arg1 >>> 0] = arg2;
    },
    __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
      const ret = arg1.stack;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_suggestion_new: function(arg0) {
      const ret = Suggestion2.__wrap(arg0);
      return ret;
    },
    __wbg_value_1e2369fab29b420e: function(arg0) {
      const ret = arg0.value;
      return ret;
    },
    __wbindgen_cast_0000000000000001: function(arg0) {
      const ret = arg0;
      return ret;
    },
    __wbindgen_cast_0000000000000002: function(arg0, arg1) {
      const ret = getStringFromWasm0(arg0, arg1);
      return ret;
    },
    __wbindgen_init_externref_table: function() {
      const table = wasm.__wbindgen_externrefs;
      const offset = table.grow(4);
      table.set(0, void 0);
      table.set(offset + 0, void 0);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    }
  };
  return {
    __proto__: null,
    "./harper_wasm_bg.js": import0
  };
}
const LintFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_lint_free(ptr, 1));
const LinterFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_linter_free(ptr, 1));
const OrganizedGroupFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_organizedgroup_free(ptr, 1));
const SpanFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_span_free(ptr, 1));
const SuggestionFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_suggestion_free(ptr, 1));
function addToExternrefTable0(obj) {
  const idx = wasm.__externref_table_alloc();
  wasm.__wbindgen_externrefs.set(idx, obj);
  return idx;
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(\`expected instance of \${klass.name}\`);
  }
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return \`\${val}\`;
  }
  if (type == "string") {
    return \`"\${val}"\`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return \`Symbol(\${description})\`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return \`Function(\${name})\`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return \`\${val.name}: \${val.message}
\${val.stack}\`;
  }
  return className;
}
function getArrayJsValueFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getDataViewMemory0();
  const result = [];
  for (let i = ptr; i < ptr + 4 * len; i += 4) {
    result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
  }
  wasm.__externref_drop_slice(ptr, len);
  return result;
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
let cachedBigUint64ArrayMemory0 = null;
function getBigUint64ArrayMemory0() {
  if (cachedBigUint64ArrayMemory0 === null || cachedBigUint64ArrayMemory0.byteLength === 0) {
    cachedBigUint64ArrayMemory0 = new BigUint64Array(wasm.memory.buffer);
  }
  return cachedBigUint64ArrayMemory0;
}
let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === void 0 && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
function getStringFromWasm0(ptr, len) {
  return decodeText(ptr >>> 0, len);
}
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    const idx = addToExternrefTable0(e);
    wasm.__wbindgen_exn_store(idx);
  }
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
function passArray64ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 8, 8) >>> 0;
  getBigUint64ArrayMemory0().set(arg, ptr / 8);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8ArrayMemory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function passArrayJsValueToWasm0(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  for (let i = 0; i < array.length; i++) {
    const add = addToExternrefTable0(array[i]);
    getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
  }
  WASM_VECTOR_LEN = array.length;
  return ptr;
}
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = cachedTextEncoder.encodeInto(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function takeFromExternrefTable0(idx) {
  const value = wasm.__wbindgen_externrefs.get(idx);
  wasm.__externref_table_dealloc(idx);
  return value;
}
let cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
  numBytesDecoded += len;
  if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
    cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    numBytesDecoded = len;
  }
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
const cachedTextEncoder = new TextEncoder();
if (!("encodeInto" in cachedTextEncoder)) {
  cachedTextEncoder.encodeInto = function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
}
let WASM_VECTOR_LEN = 0;
let wasm;
function __wbg_finalize_init(instance, module) {
  wasm = instance.exports;
  cachedBigUint64ArrayMemory0 = null;
  cachedDataViewMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
async function __wbg_load(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (!module.ok) {
      throw new Error(\`failed to fetch Wasm: \${module.status} \${module.statusText} fetching '\${module.url}'\`);
    }
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        const validResponse = expectedResponseType(module.type);
        if (validResponse && module.headers.get("Content-Type") !== "application/wasm") {
          console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
  function expectedResponseType(type) {
    switch (type) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function initSync(module) {
  if (wasm !== void 0) return wasm;
  if (module !== void 0) {
    if (Object.getPrototypeOf(module) === Object.prototype) {
      ({ module } = module);
    } else {
      console.warn("using deprecated parameters for \`initSync()\`; pass a single object instead");
    }
  }
  const imports = __wbg_get_imports();
  if (!(module instanceof WebAssembly.Module)) {
    module = new WebAssembly.Module(module);
  }
  const instance = new WebAssembly.Instance(module, imports);
  return __wbg_finalize_init(instance);
}
async function __wbg_init(module_or_path) {
  if (wasm !== void 0) return wasm;
  if (module_or_path !== void 0) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({ module_or_path } = module_or_path);
    } else {
      console.warn("using deprecated parameters for the initialization function; pass a single object instead");
    }
  }
  if (module_or_path === void 0) {
    module_or_path = new URL();
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  const { instance, module } = await __wbg_load(await module_or_path, imports);
  return __wbg_finalize_init(instance);
}
var fullGlue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Dialect,
  Language,
  Lint: Lint2,
  Linter: Linter2,
  OrganizedGroup: OrganizedGroup2,
  Span: Span2,
  Suggestion: Suggestion2,
  SuggestionKind,
  default: __wbg_init,
  get_default_lint_config,
  get_default_lint_config_as_json,
  initSync,
  setup,
  to_title_case
});
const _PLazy = class _PLazy extends Promise {
  constructor(executor) {
    super((resolve) => {
      resolve();
    });
    __privateAdd(this, _executor);
    __privateAdd(this, _promise);
    __privateSet(this, _executor, executor);
  }
  static from(function_) {
    return new _PLazy((resolve) => {
      resolve(function_());
    });
  }
  static resolve(value) {
    return new _PLazy((resolve) => {
      resolve(value);
    });
  }
  static reject(error) {
    return new _PLazy((resolve, reject) => {
      reject(error);
    });
  }
  then(onFulfilled, onRejected) {
    __privateGet(this, _promise) ?? __privateSet(this, _promise, new Promise(__privateGet(this, _executor)));
    return __privateGet(this, _promise).then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    __privateGet(this, _promise) ?? __privateSet(this, _promise, new Promise(__privateGet(this, _executor)));
    return __privateGet(this, _promise).catch(onRejected);
  }
  finally(onFinally) {
    __privateGet(this, _promise) ?? __privateSet(this, _promise, new Promise(__privateGet(this, _executor)));
    return __privateGet(this, _promise).finally(onFinally);
  }
};
_executor = new WeakMap();
_promise = new WeakMap();
let PLazy = _PLazy;
const copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
const canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
const changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
const wrappedToString = (withName, fromBody) => \`/* Wrapped \${withName}*/
\${fromBody}\`;
const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
const changeToString = (to, from, name) => {
  const withName = name === "" ? "" : \`with \${name.trim()}() \`;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  Object.defineProperty(to, "toString", { ...toStringDescriptor, value: newToString });
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}
const cacheStore = /* @__PURE__ */ new WeakMap();
function pMemoize(fn, { cacheKey = ([firstArgument]) => firstArgument, cache = /* @__PURE__ */ new Map() } = {}) {
  const promiseCache = /* @__PURE__ */ new Map();
  const memoized = function(...arguments_) {
    const key = cacheKey(arguments_);
    if (promiseCache.has(key)) {
      return promiseCache.get(key);
    }
    const promise = (async () => {
      try {
        if (cache && await cache.has(key)) {
          return await cache.get(key);
        }
        const promise2 = fn.apply(this, arguments_);
        const result = await promise2;
        try {
          return result;
        } finally {
          if (cache) {
            await cache.set(key, result);
          }
        }
      } finally {
        promiseCache.delete(key);
      }
    })();
    promiseCache.set(key, promise);
    return promise;
  };
  mimicFunction(memoized, fn, {
    ignoreNonConfigurable: true
  });
  cacheStore.set(memoized, cache);
  return memoized;
}
function inferGlueFlavor(binary) {
  return binary.includes("harper_wasm_slim") ? "slim" : "full";
}
function loadGlue(glueFlavor) {
  if (glueFlavor === "slim") {
    return defaultGlue;
  }
  return fullGlue;
}
function getDefaultGlueBinary(binary, glueFlavor) {
  if (glueFlavor === "slim") {
    return binary;
  }
  if (binary.includes("harper_wasm_bg.wasm")) {
    return binary.replace("harper_wasm_bg.wasm", "harper_wasm_slim_bg.wasm");
  }
  return null;
}
function getInitInput(binary) {
  if (typeof process !== "undefined" && binary.startsWith("file://")) {
    return Promise.resolve().then(function() {
      return __viteBrowserExternal$1;
    }).then(
      (fs) => new Promise((resolve, reject) => {
        fs.readFile(new URL(binary).pathname, (err, data) => {
          if (err) reject(err);
          resolve(data);
        });
      })
    );
  }
  return binary;
}
async function loadBinaryUncached(binary, glueFlavor) {
  const exports = loadGlue(glueFlavor);
  const defaultGlueBinary = getDefaultGlueBinary(binary, glueFlavor);
  if (defaultGlueBinary != null) {
    try {
      await __wbg_init$1({ module_or_path: getInitInput(defaultGlueBinary) });
    } catch (err) {
      if (glueFlavor === "slim") {
        throw err;
      }
    }
  }
  await exports.default({ module_or_path: getInitInput(binary) });
  return exports;
}
const loadBinaryByFlavor = {
  full: pMemoize((binary) => loadBinaryUncached(binary, "full")),
  slim: pMemoize((binary) => loadBinaryUncached(binary, "slim"))
};
function loadBinary(binary, glueFlavor) {
  return loadBinaryByFlavor[glueFlavor](binary);
}
class BinaryModuleImpl {
  constructor() {
    __publicField(this, "url", "");
    __publicField(this, "glueFlavor", "full");
    __publicField(this, "inner", null);
  }
  /** Load a binary from a specified URL. This is the only recommended way to construct this type. */
  static create(url, glueFlavor) {
    const module = new SuperBinaryModule();
    module.url = url;
    module.glueFlavor = glueFlavor ?? inferGlueFlavor(typeof url === "string" ? url : url.href);
    module.inner = PLazy.from(
      () => loadBinary(typeof module.url === "string" ? module.url : module.url.href, module.glueFlavor)
    );
    return module;
  }
  async getDefaultLintConfigAsJSON() {
    const exported = await this.inner;
    return exported.get_default_lint_config_as_json();
  }
  async getDefaultLintConfig() {
    const exported = await this.inner;
    return exported.get_default_lint_config();
  }
  async toTitleCase(text) {
    const exported = await this.inner;
    return exported.to_title_case(text);
  }
  async setup() {
    const exported = await this.inner;
    exported.setup();
  }
}
class SuperBinaryModule extends BinaryModuleImpl {
  async createLinter(dialect) {
    const exported = await this.getBinaryModule();
    return exported.Linter.new(dialect ?? Dialect$1.American);
  }
  async getBinaryModule() {
    return await PLazy.from(
      () => loadBinary(typeof this.url === "string" ? this.url : this.url.href, this.glueFlavor)
    );
  }
}
function toWasmLanguage(language) {
  switch (language) {
    case "plaintext":
      return Language$1.Plain;
    case "typst":
      return Language$1.Typst;
    case "markdown":
    case void 0:
      return Language$1.Markdown;
    default:
      console.warn(\`Unknown Harper language '\${String(language)}'; using markdown.\`);
      return Language$1.Markdown;
  }
}
function toWasmLintArgs(text, options) {
  return [
    text,
    toWasmLanguage(options == null ? void 0 : options.language),
    (options == null ? void 0 : options.forceAllHeadings) ?? false,
    options == null ? void 0 : options.regex_mask,
    (options == null ? void 0 : options.dedup) ?? true,
    (options == null ? void 0 : options.isolateEnglish) ?? false
  ];
}
class LocalLinter {
  constructor(init) {
    __publicField(this, "binary");
    __publicField(this, "inner");
    __publicField(this, "disposed", false);
    this.binary = init.binary;
    this.binary.setup();
    this.inner = this.createInner(init.dialect);
  }
  createInner(dialect) {
    return PLazy.from(async () => {
      await this.binary.setup();
      return this.binary.createLinter(dialect);
    });
  }
  async setup() {
    await this.lint("", { language: "plaintext" });
    const exported = await this.exportIgnoredLints();
    await this.importIgnoredLints(exported);
  }
  async lint(text, options) {
    const inner = await this.inner;
    return inner.lint(...toWasmLintArgs(text, options));
  }
  async organizedLints(text, options) {
    const inner = await this.inner;
    const lintGroups = inner.organized_lints(...toWasmLintArgs(text, options));
    const output = {};
    for (const group of lintGroups) {
      output[group.group] = group.lints;
      group.free();
    }
    return output;
  }
  async applySuggestion(text, lint, suggestion) {
    const inner = await this.inner;
    return inner.apply_suggestion(text, lint, suggestion);
  }
  async isLikelyEnglish(text) {
    const inner = await this.inner;
    return inner.is_likely_english(text);
  }
  async isolateEnglish(text) {
    const inner = await this.inner;
    return inner.isolate_english(text);
  }
  async getLintConfig() {
    const inner = await this.inner;
    return inner.get_lint_config_as_object();
  }
  async getDefaultLintConfigAsJSON() {
    return await this.binary.getDefaultLintConfigAsJSON();
  }
  async getDefaultLintConfig() {
    return await this.binary.getDefaultLintConfig();
  }
  async getStructuredLintConfig() {
    const inner = await this.inner;
    return inner.get_structured_lint_config_as_object();
  }
  async getStructuredLintConfigJSON() {
    const inner = await this.inner;
    return inner.get_structured_lint_config_as_json();
  }
  async setLintConfig(config) {
    const inner = await this.inner;
    inner.set_lint_config_from_object(config);
  }
  async getLintConfigAsJSON() {
    const inner = await this.inner;
    return inner.get_lint_config_as_json();
  }
  async setLintConfigWithJSON(config) {
    const inner = await this.inner;
    inner.set_lint_config_from_json(config);
  }
  async toTitleCase(text) {
    return await this.binary.toTitleCase(text);
  }
  async getLintDescriptions() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_as_object();
  }
  async getLintDescriptionsAsJSON() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_as_json();
  }
  async getLintDescriptionsHTML() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_html_as_object();
  }
  async getLintDescriptionsHTMLAsJSON() {
    const inner = await this.inner;
    return inner.get_lint_descriptions_html_as_json();
  }
  async ignoreLint(source, lint) {
    return await this.ignoreLints(source, [lint]);
  }
  async ignoreLints(source, lints) {
    const inner = await this.inner;
    inner.ignore_lints(source, lints);
  }
  async ignoreLintHash(hash) {
    const inner = await this.inner;
    inner.ignore_hashes(new BigUint64Array([hash]));
  }
  async exportIgnoredLints() {
    const inner = await this.inner;
    return inner.export_ignored_lints();
  }
  async importIgnoredLints(json) {
    const inner = await this.inner;
    inner.import_ignored_lints(json);
  }
  async contextHash(source, lint) {
    const inner = await this.inner;
    return inner.context_hash(source, lint);
  }
  async clearIgnoredLints() {
    const inner = await this.inner;
    inner.clear_ignored_lints();
  }
  async clearWords() {
    const inner = await this.inner;
    return inner.clear_words();
  }
  async importWords(words) {
    const inner = await this.inner;
    return inner.import_words(words);
  }
  async exportWords() {
    const inner = await this.inner;
    return inner.export_words();
  }
  async getDialect() {
    const inner = await this.inner;
    return inner.get_dialect();
  }
  async setDialect(dialect) {
    const inner = await this.inner;
    if (inner.get_dialect() !== dialect) {
      inner.free();
      this.inner = this.createInner(dialect);
    }
    return Promise.resolve();
  }
  async summarizeStats(start, end) {
    const inner = await this.inner;
    return inner.summarize_stats(start, end);
  }
  async generateStatsFile() {
    const inner = await this.inner;
    return inner.generate_stats_file();
  }
  async importStatsFile(statsFile) {
    const inner = await this.inner;
    return inner.import_stats_file(statsFile);
  }
  /**
   * Load a Weirpack from a Blob.
   *
   * Returns \`undefined\` if tests pass and rules are imported, otherwise returns
   * the Weirpack test failures.
   */
  async loadWeirpackFromBlob(blob) {
    const bytes = new Uint8Array(await blob.arrayBuffer());
    return this.loadWeirpackFromBytes(bytes);
  }
  /**
   * Load a Weirpack from a byte array.
   *
   * Returns \`undefined\` if tests pass and rules are imported, otherwise returns
   * the Weirpack test failures.
   */
  async loadWeirpackFromBytes(bytes) {
    const inner = await this.inner;
    const data = bytes instanceof Uint8Array ? bytes : Uint8Array.from(bytes);
    const result = inner.import_weirpack(data);
    return result;
  }
  async dispose() {
    if (this.disposed) {
      return;
    }
    this.disposed = true;
    const inner = await this.inner;
    inner.free();
  }
}
function assert(condition, message) {
  if (!condition) {
    throw new Error("Assertion failed");
  }
}
function isSerializedRequest(v) {
  return typeof v === "object" && v !== null && "procName" in v && "args" in v;
}
class Serializer {
  constructor(binary) {
    __publicField(this, "binary");
    this.binary = binary;
    this.binary.setup();
  }
  async serializeArg(arg) {
    var _a;
    const { Lint: Lint3, Span: Span3, Suggestion: Suggestion3 } = await this.binary.getBinaryModule();
    if (Array.isArray(arg)) {
      return {
        json: JSON.stringify(await Promise.all(arg.map((a) => this.serializeArg(a)))),
        type: "Array"
      };
    }
    const argType = typeof arg;
    switch (argType) {
      case "string":
      case "number":
      case "boolean":
      case "undefined":
        return { json: JSON.stringify(arg), type: argType };
      case "bigint":
        return { json: arg.toString(), type: argType };
    }
    if (arg.to_json !== void 0) {
      const json = arg.to_json();
      let type;
      const constructorName = (_a = arg.constructor) == null ? void 0 : _a.name;
      if (arg instanceof Lint3 || constructorName === "Lint") {
        type = "Lint";
      } else if (arg instanceof Suggestion3 || constructorName === "Suggestion") {
        type = "Suggestion";
      } else if (arg instanceof Span3 || constructorName === "Span") {
        type = "Span";
      }
      if (type === void 0) {
        throw new Error("Unhandled case: type undefined");
      }
      return { json, type };
    }
    if (argType == "object") {
      return {
        json: JSON.stringify(
          await Promise.all(
            Object.entries(arg).map(([key, value]) => this.serializeArg([key, value]))
          )
        ),
        type: "object"
      };
    }
    throw new Error(\`Unhandled case: \${arg}\`);
  }
  async serialize(req) {
    return {
      procName: req.procName,
      args: await Promise.all(req.args.map((arg) => this.serializeArg(arg)))
    };
  }
  async deserializeArg(requestArg) {
    const { Lint: Lint3, Span: Span3, Suggestion: Suggestion3 } = await this.binary.getBinaryModule();
    switch (requestArg.type) {
      case "bigint":
        return BigInt(requestArg.json);
      case "undefined":
        return void 0;
      case "boolean":
      case "number":
      case "string":
        return JSON.parse(requestArg.json);
      case "Suggestion":
        return Suggestion3.from_json(requestArg.json);
      case "Lint":
        return Lint3.from_json(requestArg.json);
      case "Span":
        return Span3.from_json(requestArg.json);
      case "Array": {
        const parsed = JSON.parse(requestArg.json);
        assert(Array.isArray(parsed));
        return await Promise.all(parsed.map((arg) => this.deserializeArg(arg)));
      }
      case "object": {
        const parsed = JSON.parse(requestArg.json);
        return Object.fromEntries(
          await Promise.all(parsed.map((val) => this.deserializeArg(val)))
        );
      }
      default:
        throw new Error(\`Unhandled case: \${requestArg.type}\`);
    }
  }
  async deserialize(request) {
    return {
      procName: request.procName,
      args: await Promise.all(request.args.map((arg) => this.deserializeArg(arg)))
    };
  }
}
self.postMessage("ready");
self.onmessage = (e) => {
  const [binaryUrl, dialect, glueFlavor] = e.data;
  if (typeof binaryUrl !== "string") {
    throw new TypeError(\`Expected binary to be a string of url but got \${typeof binaryUrl}.\`);
  }
  if (glueFlavor !== void 0 && glueFlavor !== "full" && glueFlavor !== "slim") {
    throw new TypeError(\`Expected glue flavor to be "full" or "slim" but got \${glueFlavor}.\`);
  }
  const binary = SuperBinaryModule.create(binaryUrl, glueFlavor);
  const serializer = new Serializer(binary);
  const linter = new LocalLinter({ binary, dialect });
  async function processRequest(v) {
    const { procName, args } = await serializer.deserialize(v);
    if (procName in linter) {
      const res = await linter[procName](...args);
      postMessage(await serializer.serializeArg(res));
    }
  }
  self.onmessage = (e2) => {
    if (isSerializedRequest(e2.data)) {
      processRequest(e2.data);
    }
  };
};
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __viteBrowserExternal
});
`,Ql=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",Nd],{type:"text/javascript;charset=utf-8"});function Ph(t){let e;try{if(e=Ql&&(self.URL||self.webkitURL).createObjectURL(Ql),!e)throw"";const n=new Worker(e,{type:"module",name:t?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Nd),{type:"module",name:t?.name})}}class Dh{constructor(e){At(this,"binary"),At(this,"serializer"),At(this,"dialect"),At(this,"worker"),At(this,"requestQueue"),At(this,"working",!0),At(this,"disposed",!1),this.binary=e.binary,this.serializer=new zh(this.binary),this.dialect=e.dialect,this.worker=new Ph,this.requestQueue=[],this.worker.onmessage=()=>{this.setupMainEventListeners(),this.worker.postMessage([this.binary.url,this.dialect,Lh(this.binary)]),this.working=!1,this.submitRemainingRequests()}}setupMainEventListeners(){this.worker.onmessage=e=>{const{resolve:n}=this.requestQueue.shift();this.serializer.deserializeArg(e.data).then(r=>{n(r),this.working=!1,this.submitRemainingRequests()})},this.worker.onmessageerror=e=>{const{reject:n}=this.requestQueue.shift();n(e.data),this.working=!1,this.submitRemainingRequests()}}setup(){return this.rpc("setup",[])}lint(e,n){return this.rpc("lint",[e,n])}organizedLints(e,n){return this.rpc("organizedLints",[e,n])}applySuggestion(e,n,r){return this.rpc("applySuggestion",[e,n,r])}isLikelyEnglish(e){return this.rpc("isLikelyEnglish",[e])}isolateEnglish(e){return this.rpc("isolateEnglish",[e])}async getLintConfig(){return JSON.parse(await this.getLintConfigAsJSON())}setLintConfig(e){return this.setLintConfigWithJSON(JSON.stringify(e))}getLintConfigAsJSON(){return this.rpc("getLintConfigAsJSON",[])}setLintConfigWithJSON(e){return this.rpc("setLintConfigWithJSON",[e])}toTitleCase(e){return this.rpc("toTitleCase",[e])}getLintDescriptionsAsJSON(){return this.rpc("getLintDescriptionsAsJSON",[])}async getLintDescriptions(){return JSON.parse(await this.getLintDescriptionsAsJSON())}getLintDescriptionsHTMLAsJSON(){return this.rpc("getLintDescriptionsHTMLAsJSON",[])}async getLintDescriptionsHTML(){return JSON.parse(await this.getLintDescriptionsHTMLAsJSON())}getDefaultLintConfigAsJSON(){return this.rpc("getDefaultLintConfigAsJSON",[])}async getDefaultLintConfig(){return JSON.parse(await this.getDefaultLintConfigAsJSON())}async getStructuredLintConfig(){return JSON.parse(await this.getStructuredLintConfigJSON())}getStructuredLintConfigJSON(){return this.rpc("getStructuredLintConfigJSON",[])}async dispose(){this.disposed||(await this.rpc("dispose",[]),this.disposed=!0,this.requestQueue=[],this.worker.terminate())}ignoreLint(e,n){return this.ignoreLints(e,[n])}ignoreLints(e,n){return this.rpc("ignoreLints",[e,n])}ignoreLintHash(e){return this.rpc("ignoreLintHash",[e])}exportIgnoredLints(){return this.rpc("exportIgnoredLints",[])}importIgnoredLints(e){return this.rpc("importIgnoredLints",[e])}contextHash(e,n){return this.rpc("contextHash",[e,n])}clearIgnoredLints(){return this.rpc("clearIgnoredLints",[])}clearWords(){return this.rpc("clearWords",[])}importWords(e){return this.rpc("importWords",[e])}exportWords(){return this.rpc("exportWords",[])}getDialect(){return this.rpc("getDialect",[])}setDialect(e){return this.rpc("setDialect",[e])}summarizeStats(e,n){return this.rpc("summarizeStats",[e,n])}generateStatsFile(){return this.rpc("generateStatsFile",[])}importStatsFile(e){return this.rpc("importStatsFile",[e])}async loadWeirpackFromBlob(e){const n=new Uint8Array(await e.arrayBuffer()),r=Array.from(n);return await this.rpc("loadWeirpackFromBytes",[r])}async loadWeirpackFromBytes(e){const n=Array.from(e);return await this.rpc("loadWeirpackFromBytes",[n])}async rpc(e,n){if(this.disposed)throw new Error("WorkerLinter has been disposed.");return new Promise((a,i)=>{this.requestQueue.push({resolve:a,reject:i,request:{procName:e,args:n}}),this.submitRemainingRequests()})}async submitRemainingRequests(){if(!this.working)if(this.working=!0,this.requestQueue.length>0){const{request:e}=this.requestQueue[0],n=await this.serializer.serialize(e);this.worker.postMessage(n)}else this.working=!1}}var ha=Uint8Array,Fd=Uint16Array,Bh=Int32Array,Uh=new ha([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Vh=new ha([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Id=function(t,e){for(var n=new Fd(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var a=new Bh(n[30]),r=1;r<30;++r)for(var i=n[r];i<n[r+1];++i)a[i]=i-n[r]<<5|r;return{b:n,r:a}},Wd=Id(Uh,2),Hh=Wd.b,qh=Wd.r;Hh[28]=258,qh[258]=28;Id(Vh,0);var Gh=new Fd(32768);for(var be=0;be<32768;++be){var ln=(be&43690)>>1|(be&21845)<<1;ln=(ln&52428)>>2|(ln&13107)<<2,ln=(ln&61680)>>4|(ln&3855)<<4,Gh[be]=((ln&65280)>>8|(ln&255)<<8)>>1}var ji=new ha(288);for(var be=0;be<144;++be)ji[be]=8;for(var be=144;be<256;++be)ji[be]=9;for(var be=256;be<280;++be)ji[be]=7;for(var be=280;be<288;++be)ji[be]=8;var Jh=new ha(32);for(var be=0;be<32;++be)Jh[be]=5;var Yh=new ha(0),Kh=typeof TextDecoder<"u"&&new TextDecoder,Xh=0;try{Kh.decode(Yh,{stream:!0}),Xh=1}catch{}const Zh=t=>t;function zd(t){const e=t-1;return e*e*e+1}function ec(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function Ka(t,{delay:e=0,duration:n=400,easing:r=Zh}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:i=>`opacity: ${i*a}`}}function Qh(t,{delay:e=0,duration:n=400,easing:r=zd,x:a=0,y:i=0,opacity:o=0}={}){const s=getComputedStyle(t),l=+s.opacity,c=s.transform==="none"?"":s.transform,u=l*(1-o),[f,d]=ec(a),[_,h]=ec(i);return{delay:e,duration:n,easing:r,css:(g,m)=>`
			transform: ${c} translate(${(1-g)*f}${d}, ${(1-g)*_}${h});
			opacity: ${l-u*m}`}}function tc(t,{delay:e=0,duration:n=400,easing:r=zd,axis:a="y"}={}){const i=getComputedStyle(t),o=+i.opacity,s=a==="y"?"height":"width",l=parseFloat(i[s]),c=a==="y"?["top","bottom"]:["left","right"],u=c.map(w=>`${w[0].toUpperCase()}${w.slice(1)}`),f=parseFloat(i[`padding${u[0]}`]),d=parseFloat(i[`padding${u[1]}`]),_=parseFloat(i[`margin${u[0]}`]),h=parseFloat(i[`margin${u[1]}`]),g=parseFloat(i[`border${u[0]}Width`]),m=parseFloat(i[`border${u[1]}Width`]);return{delay:e,duration:n,easing:r,css:w=>`overflow: hidden;opacity: ${Math.min(w*20,1)*o};${s}: ${w*l}px;padding-${c[0]}: ${w*f}px;padding-${c[1]}: ${w*d}px;margin-${c[0]}: ${w*_}px;margin-${c[1]}: ${w*h}px;border-${c[0]}-width: ${w*g}px;border-${c[1]}-width: ${w*m}px;min-${s}: 0`}}function em(t){const e=t-1;return e*e*e+1}function tm(t,e){Mn(e,!0);let n=te(e,"active",3,!1),r=te(e,"delayMs",3,0),a=Pe(!1),i=null;function o(){i!=null&&(clearTimeout(i),i=null)}ii(()=>{if(o(),!n()){T(a,!1);return}return i=setTimeout(()=>{T(a,!0),i=null},r()),o});var s=li(),l=aa(s);{var c=u=>{var f=li(),d=aa(f);k0(d,()=>e.children??ur),ne(u,f)};Be(l,u=>{p(a)&&u(c)})}ne(t,s),jn()}var nm=Object.defineProperty,rm=(t,e,n)=>e in t?nm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,X=(t,e,n)=>rm(t,typeof e!="symbol"?e+"":e,n);function am(){return{x:0,y:0,width:window.innerWidth,height:window.innerHeight}}function Fn(t,e){const[n,r]=t;return n>=e.x&&n<=e.x+e.width&&r>=e.y&&r<=e.y+e.height}function Qi(t){const e=am();return!!(Fn([t.x,t.y],e)||Fn([t.x+t.width,t.y],e)||Fn([t.x+t.width,t.y+t.height],e)||Fn([t.x,t.y+t.height],e))}function Pd(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function jr(t){return{x:t.x,y:t.y,width:t.width,height:t.height}}function Dd(t,e){const n=[t.x,t.y+t.height],r=[t.x+t.width,t.y+t.height];return Fn(n,e)&&Fn(r,e)}function Bd(t,e){const n=t.x+t.width/2,r=t.y+t.height/2;let a=Number.POSITIVE_INFINITY,i=-1;for(let o=0;o<e.length;o++){const s=e[o];if(Pd(t,s))return o;const l=s.x+s.width/2,c=s.y+s.height/2,u=Math.hypot(l-n,c-r);u<a&&(a=u,i=o)}return i}function Ud(t,e){const n=Math.max(t.x,e.x),r=Math.max(t.y,e.y),a=Math.min(t.x+t.width,e.x+e.width),i=Math.min(t.y+t.height,e.y+e.height);return{x:n,y:r,width:Math.max(0,a-n),height:Math.max(0,i-r)}}function im(t){const e=[];for(let n=0;n<t.length;n++){const r=t[n];e.push(r)}return e}function Qs(t){const e=[],n=im(t.childNodes);if(n.length===0)return[t];for(const r of n)Qs(r).forEach(a=>{e.push(a)});return e}function Vd(t,e){const n=Qs(t),r=document.createRange();let a=0,i=!1;for(let o=0;o<n.length;o++){const s=n[o];if(s.nodeName==="BR"){a+=1;continue}const l=s.textContent??"";if(a+l.length>e.start&&!i&&(r.setStart(s,e.start-a),i=!0),i&&a+l.length>=e.end)return r.setEnd(s,e.end-a),r;a+=l?.length??0}return null}const eo=typeof document<"u"?document.createRange():null;function om(t){if(!(t instanceof Element))return!1;const e=t.tagName.toLowerCase();return/^h[1-6]$/.test(e)?!0:t.getAttribute("role")?.toLowerCase()==="heading"}function sm(t){try{if(!t||!t.ownerDocument)return!1;if(t instanceof Element){if(!t.isConnected)return!1;if(t.getAttribute("data-harper-google-docs-target")==="true"){const o=t.closest(".kix-appview-editor");return o?Qi(o.getBoundingClientRect()):!1}const r=t.getBoundingClientRect();if(!Qi(r))return!1;const a=t.checkVisibility;if(typeof a=="function")return a.call(t);const i=getComputedStyle(t);return!(i.display==="none"||i.visibility==="hidden"||i.opacity==="0")}if(!eo)return!1;const e=t.parentElement;if(e&&!e.isConnected)return!1;eo.selectNode(t);const n=eo.getBoundingClientRect();return Qi(n)}catch{return!1}}const Hd=class cn{constructor(e,n,r){if(X(this,"field"),X(this,"startOffset"),X(this,"endOffset"),X(this,"arena"),!(e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement))throw new Error("TextFieldRange expects an HTMLTextAreaElement or HTMLInputElement");this.field=e,this.startOffset=n,this.endOffset=r,this.arena=cn.ensureArena(this.field),this.arena.refs++}static ensureArena(e){const n=cn.arenas.get(e);if(n!=null&&n.mirror.isConnected)return n;if(n){try{n.mirror.remove()}catch{}cn.arenas.delete(e)}const r=document.createElement("div");r.className="harper-textfield-mirror";const a=window.getComputedStyle(e);["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","lineHeight","textTransform","paddingTop","paddingRight","paddingBottom","paddingLeft","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","boxSizing","overflowX","overflowY"].forEach(s=>{r.style[s]=a[s]}),e instanceof HTMLTextAreaElement&&(r.style.overflowX="auto",r.style.overflowY="auto"),cn.positionMirror(r,e),Object.assign(r.style,{boxSizing:"border-box",whiteSpace:e.tagName.toLowerCase()==="textarea"?"pre-wrap":"pre",wordWrap:"break-word",visibility:"hidden",position:"absolute",pointerEvents:"none"});const i=document.createTextNode("");r.appendChild(i),i.nodeValue=e.value,document.body.appendChild(r),r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft;const o={mirror:r,text:i,refs:0};return cn.arenas.set(e,o),o}static positionMirror(e,n){const r=n.getBoundingClientRect(),a=window.scrollY||document.documentElement.scrollTop,i=window.scrollX||document.documentElement.scrollLeft;Object.assign(e.style,{top:`${r.top+a}px`,left:`${r.left+i}px`,width:`${r.width}px`,height:`${r.height}px`})}syncMirror(){this.arena.text.nodeValue=this.field.value,this.arena.mirror.scrollTop=this.field.scrollTop,this.arena.mirror.scrollLeft=this.field.scrollLeft,cn.positionMirror(this.arena.mirror,this.field)}getClientRects(){this.syncMirror();const e=document.createRange();e.setStart(this.arena.text,this.startOffset),e.setEnd(this.arena.text,this.endOffset);let n=Array.from(e.getClientRects());const r=jr(this.field.getBoundingClientRect());return n=n.filter(a=>{const i=jr(a);return Pd(i,r)}),n}getBoundingClientRect(){return this.syncMirror(),this.arena.mirror.getBoundingClientRect()}detach(){var e;if(this.arena.refs=Math.max(0,this.arena.refs-1),!document.contains(this.field)){try{(e=this.arena.mirror.parentNode)==null||e.removeChild(this.arena.mirror)}catch{}cn.arenas.delete(this.field)}}};X(Hd,"arenas",new WeakMap);let qd=Hd;function ht(t,e){let n=t;for(;n!=null;){if(e(n))return n;n=n.parentElement}return null}function lm(t){return ht(t,e=>!$t(e)&&e.closest("article, main, section")!=null)}function Gd(t){return ht(t,e=>!$t(e)&&e.classList.contains("public-DraftEditor-content"))}function cm(t){return ht(t,e=>!$t(e)&&e.classList.contains("ProseMirror"))}function el(t){return ht(t,e=>!$t(e)&&e.classList.contains("cm-editor"))}function um(){return document.getElementById("notion-app")}function Jd(t){return ht(t,e=>!$t(e)&&e.getAttribute("data-slate-editor")==="true")}function Yd(t){return ht(t,e=>!$t(e)&&e.getAttribute("data-lexical-editor")==="true")}function fm(t){return ht(t,e=>!$t(e)&&e.classList.contains("ck-editor__editable"))}function dm(t){return ht(t,e=>e.nodeName=="MAIN"&&location.hostname=="medium.com")}function _m(t){return ht(t,e=>!$t(e)&&e.nodeName=="SHREDDIT-COMPOSER")}function gm(t){return ht(t,e=>!$t(e)&&e.classList.contains("ql-container"))}function pm(t){return ht(t,e=>!$t(e)&&(e.id==="p2"||e.classList.contains("p2")))}function hm(t){return ht(t,e=>!$t(e)&&(e.id==="editor"||e.classList.contains("editor-styles-wrapper")))}function mm(t){return ht(t,e=>e.nodeName=="TRIX-EDITOR")}function Kd(){const t=document.activeElement;if(t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement&&t.type==="text"){if(t.selectionStart==null||t.selectionEnd==null||t.selectionStart!==t.selectionEnd)return null;const r=t.selectionStart,a=new qd(t,r,r),i=a.getClientRects();return a.detach(),i.length?jr(i[0]):null}const e=window.getSelection();if(!e||e.rangeCount===0)return null;const n=e.getRangeAt(0);return n.collapsed?jr(n.getBoundingClientRect()):null}function ps(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement}function $t(t){return t.nodeType===Node.TEXT_NODE}let to;function bm(){return to!==void 0||(to=document.createElement("canvas").getContext("2d")),to}function wm(t,e,n,r){const a=t.getBoundingClientRect();if(a.width<=0||a.height<=0)return null;const i=Math.max(0,Math.min(n,e.length)),o=Math.max(i,Math.min(r,e.length));if(i===o)return null;const s=bm();if(s==null)return a;const l=getComputedStyle(t),c=l.font&&l.font!==""?l.font:`${l.fontStyle} ${l.fontVariant} ${l.fontWeight} ${l.fontSize} / ${l.lineHeight} ${l.fontFamily}`;s.font=c;const u=e.slice(0,i),f=e.slice(i,o),d=s.measureText(u).width,_=Math.max(1,s.measureText(f).width),h=Number.parseFloat(l.letterSpacing),g=Number.isFinite(h)?h:0,m=d+Math.max(0,i-1)*g,w=_+Math.max(0,o-i-1)*g,b=a.x+Math.min(a.width,Math.max(0,m)),k=Math.max(1,Math.min(a.right-b,w));return new DOMRect(b,a.y,k,a.height)}function nc(t,e){const n=Math.min(t.length,e.length);let r=0;for(;r<n&&t.charCodeAt(r)===e.charCodeAt(r);)r+=1;return r}function rc(t,e){const n=Math.min(t.length,e.length);let r=0;for(;r<n&&t.charCodeAt(t.length-1-r)===e.charCodeAt(e.length-1-r);)r+=1;return r}function ac(t,e){if(!t||!e)return 0;const n=new Array(e.length+1).fill(0),r=new Array(e.length+1).fill(0);for(let a=1;a<=t.length;a+=1){r[0]=0;for(let i=1;i<=e.length;i+=1)t.charCodeAt(a-1)===e.charCodeAt(i-1)?r[i]=n[i-1]+1:r[i]=Math.max(n[i],r[i-1]);for(let i=0;i<=e.length;i+=1)n[i]=r[i]}return n[e.length]}function ym(t,e){const n=Math.max(0,Math.min(e.span.start,e.source.length)),r=Math.max(n,Math.min(e.span.end,e.source.length)),a=e.source.slice(n,r);if(a.length===0)return null;if(t.slice(n,r)===a)return{start:n,end:r};const i=r-n,o=t.length-e.source.length,s=Math.max(0,n+o);for(let g=-12;g<=12;g+=1){const m=s+g;if(m<0)continue;const w=m+i;if(!(w>t.length)&&t.slice(m,w)===a)return{start:m,end:w}}const l=64,c=e.source.slice(Math.max(0,n-l),n),u=e.source.slice(r,Math.min(e.source.length,r+l)),f=Math.max(c.length*2,c.length+64),d=Math.max(u.length*2,u.length+64),_=[];let h=0;for(;h<=t.length;){const g=t.indexOf(a,h);if(g<0)break;const m=g+a.length,w=t.slice(Math.max(0,g-f),g),b=t.slice(m,Math.min(t.length,m+d));let k=0;k+=ac(c,w)*8,k+=ac(u,b)*8,k+=nc(c,w)*4,k+=rc(c,w)*4,k+=nc(u,b)*4,k+=rc(u,b)*4,k-=Math.abs(g-s)/1e3,_.push({start:g,end:m,score:k}),h=g+1}return _.length===0?null:(_.sort((g,m)=>m.score-g.score),{start:_[0].start,end:_[0].end})}function Xd(t){return t.getAttribute("data-harper-google-docs-target")==="true"}function vm(t,e){var n,r;const a=Qs(t),i=[];let o=0;for(const s of a){const l=s.textContent??"",c=l.length,u=o,f=u+c;o=f;const d=Math.max(0,e.start-u),_=Math.min(c,e.end-u);if(c===0||f<=e.start||u>=e.end)continue;const h=xm(s,t);if(h!=null){const b=wm(h,l,d,_);if(b!=null&&b.width>0&&b.height>0){i.push(b);continue}}const g=document.createRange();g.setStart(s,d),g.setEnd(s,_);const m=Array.from(g.getClientRects()).filter(b=>b.width>0&&b.height>0);if(m.length>0){i.push(...m),(n=g.detach)==null||n.call(g);continue}const w=h?.getBoundingClientRect();w!=null&&w.width>0&&w.height>0&&i.push(w),(r=g.detach)==null||r.call(g)}return i}function xm(t,e){let n=t.parentElement;for(;n!=null&&n!==e;){if(getComputedStyle(n).position==="absolute")return n;n=n.parentElement}return null}async function Sm(t,e,n){try{const r=Math.max(0,Math.min(t.start,n.length)),a=Math.max(r,Math.min(t.end,n.length)),i=n.slice(r,a),o=64,s=n.slice(Math.max(0,r-o),r),l=n.slice(a,Math.min(n.length,a+o)),c={start:t.start,end:t.end,replacementText:e,expectedText:i,beforeContext:s,afterContext:l},u=window.__harperGoogleDocsBridgeClient;return u&&typeof u.replaceText=="function"?!!await u.replaceText(c.start,c.end,c.replacementText,c.expectedText,c.beforeContext,c.afterContext):!1}catch{return!1}}const Zd=".kix-appview-editor",km="data-harper-gdocs-syncing";function Em(t,e,n,r){if(!Xd(t))return null;try{const a=document.querySelector(Zd),i=t.textContent??"",o=ym(i,e);if(!a||o==null)return[];const s=vm(t,o),l=jr(a.getBoundingClientRect());if(s.length===0)return[];const c=[];for(const u of s){if(!Dd(u,l))continue;const f=Ud(u,l);c.push({x:f.x,y:f.y,width:f.width,height:f.height,lint:e,source:a,rule:n,applySuggestion:async d=>{const _=Lm(d,o,i);await Sm(o,_,i)},ignoreLint:r.ignoreLint?()=>r.ignoreLint(e.context_hash):void 0})}return c}catch{return[]}}function ma(t){return t instanceof HTMLElement&&(t.classList.contains("kix-appview-editor")||t.closest(Zd)!=null)}function ic(t){return ma(t)&&t.getAttribute(km)==="true"}function Am(t){return ma(t)?t:null}function Mm(t){if(!ma(t))return null;const e=t.getBoundingClientRect();return{x:e.x-t.scrollLeft,y:e.y-t.scrollTop}}function jm(t,e){return ma(e)?(t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.width="0px",t.style.height="0px",t.style.contain="none",t.style.transform="none",t.style.zIndex="2147483647",!0):!1}function Lm(t,e,n){switch(t.kind){case Ge.Replace:return t.replacement_text;case Ge.Remove:return"";case Ge.InsertAfter:return n.slice(e.start,e.end)+t.replacement_text}}async function Cm(t,e,n){const r=e.span(),a={start:r.start,end:r.end};return r.free(),{span:a,message_html:e.message_html(),problem_text:e.get_problem_text(),lint_kind:e.lint_kind(),lint_kind_pretty:e.lint_kind_pretty(),suggestions:e.suggestions().map(i=>{const o={kind:i.kind(),replacement_text:i.get_replacement_text()};return i.free(),o}),context_hash:(await n.contextHash(t,e)).toString(),source:t}}function $m(t,e,n){switch(n.kind){case Ge.Remove:return t.slice(0,e.start)+t.slice(e.end);case Ge.Replace:return t.slice(0,e.start)+n.replacement_text+t.slice(e.end);case Ge.InsertAfter:return t.slice(0,e.end)+n.replacement_text+t.slice(e.end)}}function Tm(t,e,n,r){var a;const i=Em(t,e,n,r);if(i!=null)return i;try{let o=null;if(ps(t)?o=new qd(t,e.span.start,e.span.end):o=Vd(t,e.span),!o)return[];const s=Array.from(o.getClientRects?o.getClientRects():[]),l=jr(o.getBoundingClientRect());(a=o.detach)==null||a.call(o);const c=[];let u=null;if(t.tagName==null?u=t.parentElement:u=t,u==null)return[];for(const f of s){if(!Dd(f,l))continue;const d=Ud(f,l);c.push({x:d.x,y:d.y,width:d.width,height:d.height,lint:e,source:u,rule:n,range:o instanceof Range?o:void 0,applySuggestion:_=>{const h=ps(t)?t.value:t.innerText;Om(t,e.span,Rm(_,e.span,h))},ignoreLint:r.ignoreLint?()=>r.ignoreLint(e.context_hash):void 0})}return c}catch{return[]}}function Rm(t,e,n){switch(t.kind){case Ge.Replace:return t.replacement_text;case Ge.Remove:return"";case Ge.InsertAfter:return n.slice(e.start,e.end)+t.replacement_text}}function Om(t,e,n){ps(t)?Nm(t,e,n):Yd(t)!=null?Fm(t,e,n):Gd(t)!=null?Im(t,e,n):el(t)!=null?zm(t,e,n):Jd(t)!=null||fm(t)!=null?Wm(t,e,n):Pm(t,e,n),t.dispatchEvent(new Event("change",{bubbles:!0}))}function Nm(t,e,n){t.focus(),t.setSelectionRange(e.start,e.end),document.execCommand("insertText",!1,n)}function Fm(t,e,n){const r=ba(t,e);if(!r)return;const{doc:a,sel:i,range:o}=r;wa(a,i,o,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1}))}function Im(t,e,n){const r=ba(t,e);if(!r)return;const{doc:a,sel:i,range:o}=r;setTimeout(()=>{const s=new InputEvent("beforeinput",{bubbles:!0,cancelable:!0,inputType:"insertText",data:n});t.dispatchEvent(s),s.defaultPrevented||wa(a,i,o,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText"}))},0)}function ba(t,e){var n;const r=t.ownerDocument,a=(n=r.defaultView)==null?void 0:n.getSelection();if(!a)return null;t.focus();const i=Vd(t,e);return i?(a.removeAllRanges(),a.addRange(i),{doc:r,sel:a,range:i}):null}function Wm(t,e,n){const r=ba(t,e);if(!r)return;const{doc:a,sel:i,range:o}=r,s={bubbles:!0,cancelable:!0,inputType:"insertReplacementText",data:n};"StaticRange"in self&&(s.targetRanges=[new StaticRange(o)]);const l=new InputEvent("beforeinput",s);t.dispatchEvent(l),l.defaultPrevented||(wa(a,i,o,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1})))}function zm(t,e,n){const r=ba(t,e);if(!r)return;const{doc:a,sel:i,range:o}=r,s={bubbles:!0,cancelable:!0,inputType:"insertReplacementText",data:n};"StaticRange"in self&&(s.targetRanges=[new StaticRange(o)]);const l=new InputEvent("beforeinput",s);t.dispatchEvent(l),l.defaultPrevented||(wa(a,i,o,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1,inputType:"insertReplacementText",data:n})))}function wa(t,e,n,r){const a=n.startContainer,i=n.endContainer;if(a===i&&a.nodeType===Node.TEXT_NODE){const o=a,s=n.startOffset,l=n.endOffset,c=o.textContent||"",u=c.substring(0,s)+r+c.substring(l);o.textContent=u;const f=t.createRange(),d=s+r.length;f.setStart(o,d),f.setEnd(o,d),e.removeAllRanges(),e.addRange(f)}else{n.deleteContents();const o=t.createTextNode(r);n.insertNode(o);const s=t.createRange();s.setStartAfter(o),s.setEndAfter(o),e.removeAllRanges(),e.addRange(s)}}function Pm(t,e,n){if(e&&n!==void 0){const r=ba(t,e);if(r){const{doc:a,sel:i,range:o}=r;wa(a,i,o,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1}));return}}t.textContent=$m(t.innerText,e,{kind:Ge.Replace,replacement_text:n}),t.dispatchEvent(new InputEvent("input",{bubbles:!0}))}var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Li(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Dm(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var a=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:function(){return t[r]}})}),n}var no,oc;function tl(){if(oc)return no;oc=1;var t=Array.isArray,e=Object.prototype.toString;no=t||n;function n(r){return e.call(r)==="[object Array]"}return no}var sc,lc;function ya(){return lc||(lc=1,sc="2"),sc}var ro,cc;function va(){if(cc)return ro;cc=1;var t=ya();ro=e;function e(n){return n&&n.type==="VirtualNode"&&n.version===t}return ro}var ao,uc;function er(){if(uc)return ao;uc=1,ao=t;function t(e){return e&&e.type==="Widget"}return ao}var io,fc;function Ci(){if(fc)return io;fc=1,io=t;function t(e){return e&&e.type==="Thunk"}return io}var oo,dc;function $i(){if(dc)return oo;dc=1,oo=t;function t(e){return e&&(typeof e.hook=="function"&&!e.hasOwnProperty("hook")||typeof e.unhook=="function"&&!e.hasOwnProperty("unhook"))}return oo}var so,_c;function Qd(){if(_c)return so;_c=1;var t=ya(),e=va(),n=er(),r=Ci(),a=$i();so=s;var i={},o=[];function s(l,c,u,f,d){this.tagName=l,this.properties=c||i,this.children=u||o,this.key=f!=null?String(f):void 0,this.namespace=typeof d=="string"?d:null;var _=u&&u.length||0,h=0,g=!1,m=!1,w=!1,b;for(var k in c)if(c.hasOwnProperty(k)){var E=c[k];a(E)&&E.unhook&&(b||(b={}),b[k]=E)}for(var x=0;x<_;x++){var S=u[x];e(S)?(h+=S.count||0,!g&&S.hasWidgets&&(g=!0),!m&&S.hasThunks&&(m=!0),!w&&(S.hooks||S.descendantHooks)&&(w=!0)):!g&&n(S)?typeof S.destroy=="function"&&(g=!0):!m&&r(S)&&(m=!0)}this.count=_+h,this.hasWidgets=g,this.hasThunks=m,this.hooks=b,this.descendantHooks=w}return s.prototype.version=t,s.prototype.type="VirtualNode",so}var lo,gc;function e_(){if(gc)return lo;gc=1;var t=ya();lo=e;function e(n){this.text=String(n)}return e.prototype.version=t,e.prototype.type="VirtualText",lo}var co,pc;function Ti(){if(pc)return co;pc=1;var t=ya();co=e;function e(n){return n&&n.type==="VirtualText"&&n.version===t}return co}var hc,mc;function Bm(){return mc||(mc=1,hc=(function(t){var e=String.prototype.split,n=/()??/.exec("")[1]===t,r;return r=function(a,u,o){if(Object.prototype.toString.call(u)!=="[object RegExp]")return e.call(a,u,o);var s=[],l=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.extended?"x":"")+(u.sticky?"y":""),c=0,u=new RegExp(u.source,l+"g"),f,d,_,h;for(a+="",n||(f=new RegExp("^"+u.source+"$(?!\\s)",l)),o=o===t?-1>>>0:o>>>0;(d=u.exec(a))&&(_=d.index+d[0].length,!(_>c&&(s.push(a.slice(c,d.index)),!n&&d.length>1&&d[0].replace(f,function(){for(var g=1;g<arguments.length-2;g++)arguments[g]===t&&(d[g]=t)}),d.length>1&&d.index<a.length&&Array.prototype.push.apply(s,d.slice(1)),h=d[0].length,c=_,s.length>=o)));)u.lastIndex===d.index&&u.lastIndex++;return c===a.length?(h||!u.test(""))&&s.push(""):s.push(a.slice(c)),s.length>o?s.slice(0,o):s},r})()),hc}var uo,bc;function Um(){if(bc)return uo;bc=1;var t=Bm(),e=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,n=/^\.|#/;uo=r;function r(a,i){if(!a)return"DIV";var o=!i.hasOwnProperty("id"),s=t(a,e),l=null;n.test(s[1])&&(l="DIV");var c,u,f,d;for(d=0;d<s.length;d++)u=s[d],u&&(f=u.charAt(0),l?f==="."?(c=c||[],c.push(u.substring(1,u.length))):f==="#"&&o&&(i.id=u.substring(1,u.length)):l=u);return c&&(i.className&&c.push(i.className),i.className=c.join(" ")),i.namespace?l:l.toUpperCase()}return uo}var fo,wc;function Vm(){if(wc)return fo;wc=1,fo=t;function t(e){if(!(this instanceof t))return new t(e);this.value=e}return t.prototype.hook=function(e,n){e[n]!==this.value&&(e[n]=this.value)},fo}var _o,yc;function Hm(){if(yc)return _o;yc=1;var t=typeof window<"u"?window:typeof fi<"u"?fi:{};_o=e;function e(n,r){return n in t?t[n]:(t[n]=r,r)}return _o}var go,vc;function qm(){if(vc)return go;vc=1;var t=Hm();go=e;function e(n,r,a){var i="__INDIVIDUAL_ONE_VERSION_"+n,o=i+"_ENFORCE_SINGLETON",s=t(o,r);if(s!==r)throw new Error("Can only have one copy of "+n+`.
You already have version `+s+` installed.
This means you cannot install version `+r);return t(i,a)}return go}var po,xc;function Gm(){if(xc)return po;xc=1;var t=qm(),e="7";t("ev-store",e);var n="__EV_STORE_KEY@"+e;po=r;function r(a){var i=a[n];return i||(i=a[n]={}),i}return po}var ho,Sc;function Jm(){if(Sc)return ho;Sc=1;var t=Gm();ho=e;function e(n){if(!(this instanceof e))return new e(n);this.value=n}return e.prototype.hook=function(n,r){var a=t(n),i=r.substr(3);a[i]=this.value},e.prototype.unhook=function(n,r){var a=t(n),i=r.substr(3);a[i]=void 0},ho}var mo,kc;function Ym(){if(kc)return mo;kc=1;var t=tl(),e=Qd(),n=e_(),r=va(),a=Ti(),i=er(),o=$i(),s=Ci(),l=Um(),c=Vm(),u=Jm();mo=f;function f(b,k,E){var x=[],S,A,$,L;return!E&&g(k)&&(E=k,A={}),A=A||k||{},S=l(b,A),A.hasOwnProperty("key")&&($=A.key,A.key=void 0),A.hasOwnProperty("namespace")&&(L=A.namespace,A.namespace=void 0),S==="INPUT"&&!L&&A.hasOwnProperty("value")&&A.value!==void 0&&!o(A.value)&&(A.value=c(A.value)),_(A),E!=null&&d(E,x,S,A),new e(S,A,x,$,L)}function d(b,k,E,x){if(typeof b=="string")k.push(new n(b));else if(typeof b=="number")k.push(new n(String(b)));else if(h(b))k.push(b);else if(t(b))for(var S=0;S<b.length;S++)d(b[S],k,E,x);else{if(b==null)return;throw m({foreignObject:b,parentVnode:{tagName:E,properties:x}})}}function _(b){for(var k in b)if(b.hasOwnProperty(k)){var E=b[k];if(o(E))continue;k.substr(0,3)==="ev-"&&(b[k]=u(E))}}function h(b){return r(b)||a(b)||i(b)||s(b)}function g(b){return typeof b=="string"||t(b)||h(b)}function m(b){var k=new Error;return k.type="virtual-hyperscript.unexpected.virtual-element",k.message=`Unexpected virtual child passed to h().
Expected a VNode / Vthunk / VWidget / string but:
got:
`+w(b.foreignObject)+`.
The parent vnode is:
`+w(b.parentVnode),k.foreignObject=b.foreignObject,k.parentVnode=b.parentVnode,k}function w(b){try{return JSON.stringify(b,null,"    ")}catch{return String(b)}}return mo}var bo,Ec;function t_(){if(Ec)return bo;Ec=1;var t=Ym();return bo=t,bo}var Km=t_();const Xa=Li(Km);function xe(t,e){let n=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(o=>[o]));let r=e[0].length,a=e[0].map((o,s)=>e.map(l=>l[s])),i=t.map(o=>a.map(s=>{let l=0;if(!Array.isArray(o)){for(let c of s)l+=o*c;return l}for(let c=0;c<o.length;c++)l+=o[c]*(s[c]||0);return l}));return n===1&&(i=i[0]),r===1?i.map(o=>o[0]):i}function xa(t){return bn(t)==="string"}function bn(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function di(t,{precision:e,unit:n}){return vn(t)?"none":n_(t,e)+(n??"")}function vn(t){return Number.isNaN(t)||t instanceof Number&&t?.none}function Ie(t){return vn(t)?0:t}function n_(t,e){if(t===0)return 0;let n=~~t,r=0;n&&e&&(r=~~Math.log10(Math.abs(n))+1);const a=10**(e-r);return Math.floor(t*a+.5)/a}const Xm={deg:1,grad:.9,rad:180/Math.PI,turn:360};function r_(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,a=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let i=t.match(e);if(i){let o=[];return i[2].replace(a,(s,l)=>{let c=l.match(r),u=l;if(c){let f=c[0],d=u.slice(0,-f.length);f==="%"?(u=new Number(d/100),u.type="<percentage>"):(u=new Number(d*Xm[f]),u.type="<angle>",u.unit=f)}else n.test(u)?(u=new Number(u),u.type="<number>"):u==="none"&&(u=new Number(NaN),u.none=!0);s.startsWith("/")&&(u=u instanceof Number?u:new Number(u),u.alpha=!0),typeof u=="object"&&u instanceof Number&&(u.raw=l),o.push(u)}),{name:i[1].toLowerCase(),rawName:i[1],rawArgs:i[2],args:o}}}function a_(t){return t[t.length-1]}function la(t,e,n){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*n}function i_(t,e,n){return(n-t)/(e-t)}function nl(t,e,n){return la(e[0],e[1],i_(t[0],t[1],n))}function o_(t){return t.map(e=>e.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let a=new String(r[1]);return a.range=[+r[2],+r[3]],a}return n}))}function s_(t,e,n){return Math.max(Math.min(n,e),t)}function Ri(t,e){return Math.sign(t)===Math.sign(e)?t:-t}function Pt(t,e){return Ri(Math.abs(t)**e,t)}function rl(t,e){return e===0?0:t/e}function l_(t,e,n=0,r=t.length){for(;n<r;){const a=n+r>>1;t[a]<e?n=a+1:r=a}return n}var Zm=Object.freeze({__proto__:null,bisectLeft:l_,clamp:s_,copySign:Ri,interpolate:la,interpolateInv:i_,isNone:vn,isString:xa,last:a_,mapRange:nl,multiplyMatrices:xe,parseCoordGrammar:o_,parseFunction:r_,serializeNumber:di,skipNone:Ie,spow:Pt,toPrecision:n_,type:bn,zdiv:rl});class Qm{add(e,n,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(a){this[a]=this[a]||[],n&&this[a][r?"unshift":"push"](n)},this)}run(e,n){this[e]=this[e]||[],this[e].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const xn=new Qm;var Ac,Mc,jc,pt={gamut_mapping:"css",precision:5,deltaE:"76",verbose:((jc=(Mc=(Ac=globalThis?.process)==null?void 0:Ac.env)==null?void 0:Mc.NODE_ENV)==null?void 0:jc.toLowerCase())!=="test",warn:function(t){var e,n;this.verbose&&((n=(e=globalThis?.console)==null?void 0:e.warn)==null||n.call(e,t))}};const nt={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function hs(t){return Array.isArray(t)?t:nt[t]}function _i(t,e,n,r={}){if(t=hs(t),e=hs(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return n;let a={W1:t,W2:e,XYZ:n,options:r};if(xn.run("chromatic-adaptation-start",a),a.M||(a.W1===nt.D65&&a.W2===nt.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===nt.D50&&a.W2===nt.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),xn.run("chromatic-adaptation-end",a),a.M)return xe(a.M,a.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const e1=new Set(["<number>","<percentage>","<angle>"]);function Lc(t,e,n,r){return Object.entries(t.coords).map(([a,i],o)=>{let s=e.coordGrammar[o],l=r[o],c=l?.type,u;if(l.none?u=s.find(_=>e1.has(_)):u=s.find(_=>_==c),!u){let _=i.name||a;throw new TypeError(`${c??l.raw} not allowed for ${_} in ${n}()`)}let f=u.range;c==="<percentage>"&&(f||(f=[0,1]));let d=i.range||i.refRange;return f&&d&&(r[o]=nl(f,d,r[o])),u})}function c_(t,{meta:e}={}){var n,r,a,i;let o={str:(n=String(t))==null?void 0:n.trim()};if(xn.run("parse-start",o),o.color)return o.color;if(o.parsed=r_(o.str),o.parsed){let s=o.parsed.name;if(s==="color"){let l=o.parsed.args.shift(),c=l.startsWith("--")?l.substring(2):`--${l}`,u=[l,c],f=o.parsed.rawArgs.indexOf("/")>0?o.parsed.args.pop():1;for(let h of I.all){let g=h.getFormat("color");if(g&&(u.includes(g.id)||(r=g.ids)!=null&&r.filter(m=>u.includes(m)).length)){const m=Object.keys(h.coords).map((b,k)=>o.parsed.args[k]||0);let w;return g.coordGrammar&&(w=Lc(h,g,"color",m)),e&&Object.assign(e,{formatId:"color",types:w}),g.id.startsWith("--")&&!l.startsWith("--")&&pt.warn(`${h.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${g.id}) instead of color(${l}).`),l.startsWith("--")&&!g.id.startsWith("--")&&pt.warn(`${h.name} is a standard space and supported in the CSS spec. Use color(${g.id}) instead of prefixed color(${l}).`),{spaceId:h.id,coords:m,alpha:f}}}let d="",_=l in I.registry?l:c;if(_ in I.registry){let h=(i=(a=I.registry[_].formats)==null?void 0:a.color)==null?void 0:i.id;h&&(d=`Did you mean color(${h})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of I.all){let c=l.getFormat(s);if(c&&c.type==="function"){let u=1;(c.lastAlpha||a_(o.parsed.args).alpha)&&(u=o.parsed.args.pop());let f=o.parsed.args,d;return c.coordGrammar&&(d=Lc(l,c,s,f)),e&&Object.assign(e,{formatId:c.name,types:d}),{spaceId:l.id,coords:f,alpha:u}}}}else for(let s of I.all)for(let l in s.formats){let c=s.formats[l];if(c.type!=="custom"||c.test&&!c.test(o.str))continue;let u=c.parse(o.str);if(u)return u.alpha??(u.alpha=1),e&&(e.formatId=l),u}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function Y(t){if(Array.isArray(t))return t.map(Y);if(!t)throw new TypeError("Empty color reference");xa(t)&&(t=c_(t));let e=t.space||t.spaceId;return e instanceof I||(t.space=I.get(e)),t.alpha===void 0&&(t.alpha=1),t}const t1=75e-6,ms=class Et{constructor(e){var n;this.id=e.id,this.name=e.name,this.base=e.base?Et.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let a=e.white??this.base.white??"D65";this.white=hs(a),this.formats=e.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||(o.type="function"),o.name||(o.name=i)}(n=this.formats.color)!=null&&n.id||(this.formats.color={...this.formats.color??{},id:e.cssId||this.id}),e.gamutSpace?this.gamutSpace=e.gamutSpace==="self"?this:Et.get(e.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=e.referred,Object.defineProperty(this,"path",{value:n1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),xn.run("colorspace-init-end",this)}inGamut(e,{epsilon:n=t1}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:n});let r=Object.values(this.coords);return e.every((a,i)=>{let o=r[i];if(o.type!=="angle"&&o.range){if(Number.isNaN(a))return!0;let[s,l]=o.range;return(s===void 0||a>=s-n)&&(l===void 0||a<=l+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!("range"in e))}get cssId(){var e,n;return((n=(e=this.formats)==null?void 0:e.color)==null?void 0:n.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=Cc(e,this),e;let n;return e==="default"?n=Object.values(this.formats)[0]:n=this.formats[e],n?(n=Cc(n,this),n):null}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(e,n){if(arguments.length===1){const s=Y(e);[e,n]=[s.space,s.coords]}if(e=Et.get(e),this.equals(e))return n;n=n.map(s=>Number.isNaN(s)?0:s);let r=this.path,a=e.path,i,o;for(let s=0;s<r.length&&r[s].equals(a[s]);s++)i=r[s],o=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let s=r.length-1;s>o;s--)n=r[s].toBase(n);for(let s=o+1;s<a.length;s++)n=a[s].fromBase(n);return n}from(e,n){if(arguments.length===1){const r=Y(e);[e,n]=[r.space,r.coords]}return e=Et.get(e),e.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let n in this.coords){let r=this.coords[n],a=r.range||r.refRange;e.push(a?.min??0)}return e}static get all(){return[...new Set(Object.values(Et.registry))]}static register(e,n){if(arguments.length===1&&(n=arguments[0],e=n.id),n=this.get(n),this.registry[e]&&this.registry[e]!==n)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(e,...n){if(!e||e instanceof Et)return e;if(bn(e)==="string"){let r=Et.registry[e.toLowerCase()];if(!r)throw new TypeError(`No color space found with id = "${e}"`);return r}if(n.length)return Et.get(...n);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,n){var r;let a=bn(e),i,o;if(a==="string"?e.includes(".")?[i,o]=e.split("."):[i,o]=[,e]:Array.isArray(e)?[i,o]=e:(i=e.space,o=e.coordId),i=Et.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(a=bn(o),a==="number"||a==="string"&&o>=0){let c=Object.entries(i.coords)[o];if(c)return{space:i,id:c[0],index:o,...c[1]}}i=Et.get(i);let s=o.toLowerCase(),l=0;for(let c in i.coords){let u=i.coords[c];if(c.toLowerCase()===s||((r=u.name)==null?void 0:r.toLowerCase())===s)return{space:i,id:c,index:l,...u};l++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}};X(ms,"registry",{}),X(ms,"DEFAULT_FORMAT",{type:"functions",name:"color"});let I=ms;function n1(t){let e=[t];for(let n=t;n=n.base;)e.push(n);return e}function Cc(t,{coords:e}={}){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=o_(t.coords);let n=Object.entries(e).map(([r,a],i)=>{let o=t.coordGrammar[i][0],s=a.range||a.refRange,l=o.range,c="";return o=="<percentage>"?(l=[0,100],c="%"):o=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});t.serializeCoords=(r,a)=>r.map((i,o)=>{let{fromRange:s,toRange:l,suffix:c}=n[o];return s&&l&&(i=nl(s,l,i)),i=di(i,{precision:a,unit:c}),i})}return t}var Je=new I({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class st extends I{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Je),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=n=>{let r=xe(e.toXYZ_M,n);return this.white!==this.base.white&&(r=_i(this.white,this.base.white,r)),r}),e.fromBase??(e.fromBase=n=>(n=_i(this.base.white,this.white,n),xe(e.fromXYZ_M,n)))),e.referred??(e.referred="display"),super(e)}}function Sa(t,e){return t=Y(t),!e||t.space.equals(e)?t.coords.slice():(e=I.get(e),e.from(t))}function dt(t,e){t=Y(t);let{space:n,index:r}=I.resolveCoord(e,t.space);return Sa(t,n)[r]}function al(t,e,n){return t=Y(t),e=I.get(e),t.coords=e.to(t.space,n),t}al.returns="color";function nn(t,e,n){if(t=Y(t),arguments.length===2&&bn(arguments[1])==="object"){let r=arguments[1];for(let a in r)nn(t,a,r[a])}else{typeof n=="function"&&(n=n(dt(t,e)));let{space:r,index:a}=I.resolveCoord(e,t.space),i=Sa(t,r);i[a]=n,al(t,r,i)}return t}nn.returns="color";var il=new I({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Je,fromBase:t=>_i(Je.white,"D50",t),toBase:t=>_i("D50",Je.white,t)});const r1=216/24389,$c=24/116,Ta=24389/27;let wo=nt.D50;var _t=new I({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:wo,base:il,fromBase(t){let e=t.map((n,r)=>n/wo[r]).map(n=>n>r1?Math.cbrt(n):(Ta*n+16)/116);return[116*e[1]-16,500*(e[0]-e[1]),200*(e[1]-e[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>$c?Math.pow(e[0],3):(116*e[0]-16)/Ta,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/Ta,e[2]>$c?Math.pow(e[2],3):(116*e[2]-16)/Ta].map((n,r)=>n*wo[r])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function qt(t){return(t%360+360)%360}function a1(t,e){if(t==="raw")return e;let[n,r]=e.map(qt),a=r-n;return t==="increasing"?a<0&&(r+=360):t==="decreasing"?a>0&&(n+=360):t==="longer"?-180<a&&a<180&&(a>0?n+=360:r+=360):t==="shorter"&&(a>180?n+=360:a<-180&&(r+=360)),[n,r]}var ca=new I({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:_t,fromBase(t){let[e,n,r]=t,a;const i=.02;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),qt(a)]},toBase(t){let[e,n,r]=t;return n<0&&(n=0),isNaN(r)&&(r=0),[e,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Tc=25**7,gi=Math.PI,Rc=180/gi,ar=gi/180;function Oc(t){const e=t*t;return e*e*e*t}function u_(t,e,{kL:n=1,kC:r=1,kH:a=1}={}){[t,e]=Y([t,e]);let[i,o,s]=_t.from(t),l=ca.from(_t,[i,o,s])[1],[c,u,f]=_t.from(e),d=ca.from(_t,[c,u,f])[1];l<0&&(l=0),d<0&&(d=0);let _=(l+d)/2,h=Oc(_),g=.5*(1-Math.sqrt(h/(h+Tc))),m=(1+g)*o,w=(1+g)*u,b=Math.sqrt(m**2+s**2),k=Math.sqrt(w**2+f**2),E=m===0&&s===0?0:Math.atan2(s,m),x=w===0&&f===0?0:Math.atan2(f,w);E<0&&(E+=2*gi),x<0&&(x+=2*gi),E*=Rc,x*=Rc;let S=c-i,A=k-b,$=x-E,L=E+x,j=Math.abs($),C;b*k===0?C=0:j<=180?C=$:$>180?C=$-360:$<-180?C=$+360:pt.warn("the unthinkable has happened");let H=2*Math.sqrt(k*b)*Math.sin(C*ar/2),q=(i+c)/2,U=(b+k)/2,P=Oc(U),D;b*k===0?D=L:j<=180?D=L/2:L<360?D=(L+360)/2:D=(L-360)/2;let Q=(q-50)**2,fe=1+.015*Q/Math.sqrt(20+Q),pe=1+.045*U,Ue=1;Ue-=.17*Math.cos((D-30)*ar),Ue+=.24*Math.cos(2*D*ar),Ue+=.32*Math.cos((3*D+6)*ar),Ue-=.2*Math.cos((4*D-63)*ar);let je=1+.015*U*Ue,Oe=30*Math.exp(-1*((D-275)/25)**2),he=2*Math.sqrt(P/(P+Tc)),ke=-1*Math.sin(2*Oe*ar)*he,Ee=(S/(n*fe))**2;return Ee+=(A/(r*pe))**2,Ee+=(H/(a*je))**2,Ee+=ke*(A/(r*pe))*(H/(a*je)),Math.sqrt(Ee)}const i1=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],o1=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],s1=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],l1=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Lr=new I({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Je,fromBase(t){let e=xe(i1,t).map(n=>Math.cbrt(n));return xe(s1,e)},toBase(t){let e=xe(l1,t).map(n=>n**3);return xe(o1,e)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function bs(t,e){[t,e]=Y([t,e]);let[n,r,a]=Lr.from(t),[i,o,s]=Lr.from(e),l=n-i,c=r-o,u=a-s;return Math.sqrt(l**2+c**2+u**2)}const c1=75e-6;function Dn(t,e,{epsilon:n=c1}={}){t=Y(t),e||(e=t.space),e=I.get(e);let r=t.coords;return e!==t.space&&(r=e.from(t)),e.inGamut(r,{epsilon:n})}function Cr(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function f_(t,e,n="lab"){n=I.get(n);let r=n.from(t),a=n.from(e);return Math.sqrt(r.reduce((i,o,s)=>{let l=a[s];return isNaN(o)||isNaN(l)?i:i+(l-o)**2},0))}function u1(t,e){return f_(t,e,"lab")}const f1=Math.PI,Nc=f1/180;function d1(t,e,{l:n=2,c:r=1}={}){[t,e]=Y([t,e]);let[a,i,o]=_t.from(t),[,s,l]=ca.from(_t,[a,i,o]),[c,u,f]=_t.from(e),d=ca.from(_t,[c,u,f])[1];s<0&&(s=0),d<0&&(d=0);let _=a-c,h=s-d,g=i-u,m=o-f,w=g**2+m**2-h**2,b=.511;a>=16&&(b=.040975*a/(1+.01765*a));let k=.0638*s/(1+.0131*s)+.638,E;Number.isNaN(l)&&(l=0),l>=164&&l<=345?E=.56+Math.abs(.2*Math.cos((l+168)*Nc)):E=.36+Math.abs(.4*Math.cos((l+35)*Nc));let x=Math.pow(s,4),S=Math.sqrt(x/(x+1900)),A=k*(S*E+1-S),$=(_/(n*b))**2;return $+=(h/(r*k))**2,$+=w/A**2,Math.sqrt($)}const Fc=203;var ol=new I({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Je,fromBase(t){return t.map(e=>Math.max(e*Fc,0))},toBase(t){return t.map(e=>Math.max(e/Fc,0))}});const Ra=1.15,Oa=.66,Ic=2610/2**14,_1=2**14/2610,Wc=3424/2**12,zc=2413/2**7,Pc=2392/2**7,g1=1.7*2523/2**5,Dc=2**5/(1.7*2523),Na=-.56,yo=16295499532821565e-27,p1=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],h1=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],m1=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],b1=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var d_=new I({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:ol,fromBase(t){let[e,n,r]=t,a=Ra*e-(Ra-1)*r,i=Oa*n-(Oa-1)*e,o=xe(p1,[a,i,r]).map(function(u){let f=Wc+zc*(u/1e4)**Ic,d=1+Pc*(u/1e4)**Ic;return(f/d)**g1}),[s,l,c]=xe(m1,o);return[(1+Na)*s/(1+Na*s)-yo,l,c]},toBase(t){let[e,n,r]=t,a=(e+yo)/(1+Na-Na*(e+yo)),i=xe(b1,[a,n,r]).map(function(f){let d=Wc-f**Dc,_=Pc*f**Dc-zc;return 1e4*(d/_)**_1}),[o,s,l]=xe(h1,i),c=(o+(Ra-1)*l)/Ra,u=(s+(Oa-1)*c)/Oa;return[c,u,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),ws=new I({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:d_,fromBase(t){let[e,n,r]=t,a;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),qt(a)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]}});function w1(t,e){[t,e]=Y([t,e]);let[n,r,a]=ws.from(t),[i,o,s]=ws.from(e),l=n-i,c=r-o;Number.isNaN(a)&&Number.isNaN(s)?(a=0,s=0):Number.isNaN(a)?a=s:Number.isNaN(s)&&(s=a);let u=a-s,f=2*Math.sqrt(r*o)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+f**2)}const __=3424/4096,g_=2413/128,p_=2392/128,Bc=2610/16384,y1=2523/32,v1=16384/2610,Uc=32/2523,x1=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],S1=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],k1=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],E1=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var ys=new I({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:ol,fromBase(t){let e=xe(x1,t);return A1(e)},toBase(t){let e=M1(t);return xe(E1,e)}});function A1(t){let e=t.map(function(n){let r=__+g_*(n/1e4)**Bc,a=1+p_*(n/1e4)**Bc;return(r/a)**y1});return xe(S1,e)}function M1(t){return xe(k1,t).map(function(e){let n=Math.max(e**Uc-__,0),r=g_-p_*e**Uc;return 1e4*(n/r)**v1})}function j1(t,e){[t,e]=Y([t,e]);let[n,r,a]=ys.from(t),[i,o,s]=ys.from(e);return 720*Math.sqrt((n-i)**2+.25*(r-o)**2+(a-s)**2)}const L1=nt.D65,h_=.42,Vc=1/h_,vo=2*Math.PI,m_=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],C1=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],$1=[[460,451,288],[460,-891,-261],[460,-220,-6300]],T1={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Rn={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},R1=180/Math.PI,Hc=Math.PI/180;function b_(t,e){return t.map(n=>{const r=Pt(e*Math.abs(n)*.01,h_);return 400*Ri(r,n)/(r+27.13)})}function O1(t,e){const n=100/e*27.13**Vc;return t.map(r=>{const a=Math.abs(r);return Ri(n*Pt(a/(400-a),Vc),r)})}function N1(t){let e=qt(t);e<=Rn.h[0]&&(e+=360);const n=l_(Rn.h,e)-1,[r,a]=Rn.h.slice(n,n+2),[i,o]=Rn.e.slice(n,n+2),s=Rn.H[n],l=(e-r)/i;return s+100*l/(l+(a-e)/o)}function F1(t){let e=(t%400+400)%400;const n=Math.floor(.01*e);e=e%100;const[r,a]=Rn.h.slice(n,n+2),[i,o]=Rn.e.slice(n,n+2);return qt((e*(o*r-i*a)-100*r*o)/(e*(o-i)-100*o))}function w_(t,e,n,r,a){const i={};i.discounting=a,i.refWhite=t,i.surround=r;const o=t.map(h=>h*100);i.la=e,i.yb=n;const s=o[1],l=xe(m_,o);r=T1[i.surround];const c=r[0];i.c=r[1],i.nc=r[2];const u=(1/(5*i.la+1))**4;i.fl=u*i.la+.1*(1-u)*(1-u)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/s,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const f=Math.max(Math.min(c*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=l.map(h=>la(1,s/h,f)),i.dRgbInv=i.dRgb.map(h=>1/h);const d=l.map((h,g)=>h*i.dRgb[g]),_=b_(d,i.fl);return i.aW=i.nbb*(2*_[0]+_[1]+.05*_[2]),i}const qc=w_(L1,64/Math.PI*.2,20,"average",!1);function vs(t,e){if(!(t.J!==void 0^t.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(t.C!==void 0^t.M!==void 0^t.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(t.h!==void 0^t.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(t.J===0||t.Q===0)return[0,0,0];let n=0;t.h!==void 0?n=qt(t.h)*Hc:n=F1(t.H)*Hc;const r=Math.cos(n),a=Math.sin(n);let i=0;t.J!==void 0?i=Pt(t.J,1/2)*.1:t.Q!==void 0&&(i=.25*e.c*t.Q/((e.aW+4)*e.flRoot));let o=0;t.C!==void 0?o=t.C/i:t.M!==void 0?o=t.M/e.flRoot/i:t.s!==void 0&&(o=4e-4*t.s**2*(e.aW+4)/e.c);const s=Pt(o*Math.pow(1.64-Math.pow(.29,e.n),-.73),10/9),l=.25*(Math.cos(n+2)+3.8),c=e.aW*Pt(i,2/e.c/e.z),u=5e4/13*e.nc*e.ncb*l,f=c/e.nbb,d=23*(f+.305)*rl(s,23*u+s*(11*r+108*a)),_=d*r,h=d*a,g=O1(xe($1,[f,_,h]).map(m=>m*1/1403),e.fl);return xe(C1,g.map((m,w)=>m*e.dRgbInv[w])).map(m=>m/100)}function y_(t,e){const n=t.map(k=>k*100),r=b_(xe(m_,n).map((k,E)=>k*e.dRgb[E]),e.fl),a=r[0]+(-12*r[1]+r[2])/11,i=(r[0]+r[1]-2*r[2])/9,o=(Math.atan2(i,a)%vo+vo)%vo,s=.25*(Math.cos(o+2)+3.8),l=5e4/13*e.nc*e.ncb*rl(s*Math.sqrt(a**2+i**2),r[0]+r[1]+1.05*r[2]+.305),c=Pt(l,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),u=e.nbb*(2*r[0]+r[1]+.05*r[2]),f=Pt(u/e.aW,.5*e.c*e.z),d=100*Pt(f,2),_=4/e.c*f*(e.aW+4)*e.flRoot,h=c*f,g=h*e.flRoot,m=qt(o*R1),w=N1(m),b=50*Pt(e.c*c/(e.aW+4),1/2);return{J:d,C:h,h:m,s:b,Q:_,M:g,H:w}}var I1=new I({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Je,fromBase(t){const e=y_(t,qc);return[e.J,e.M,e.h]},toBase(t){return vs({J:t[0],M:t[1],h:t[2]},qc)}});const W1=nt.D65,z1=216/24389,v_=24389/27;function P1(t){return 116*(t>z1?Math.cbrt(t):(v_*t+16)/116)-16}function xs(t){return t>8?Math.pow((t+16)/116,3):t/v_}function D1(t,e){let[n,r,a]=t,i=[],o=0;if(a===0)return[0,0,0];let s=xs(a);a>0?o=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:o=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const l=2e-12,c=15;let u=0,f=1/0;for(;u<=c;){i=vs({J:o,C:r,h:n},e);const d=Math.abs(i[1]-s);if(d<f){if(d<=l)return i;f=d}o=o-(i[1]-s)*o/(2*i[1]),u+=1}return vs({J:o,C:r,h:n},e)}function B1(t,e){const n=P1(t[1]);if(n===0)return[0,0,0];const r=y_(t,sl);return[qt(r.h),r.C,n]}const sl=w_(W1,200/Math.PI*xs(50),xs(50)*100,"average",!1);var ua=new I({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Je,fromBase(t){return B1(t)},toBase(t){return D1(t,sl)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const U1=Math.PI/180,Gc=[1,.007,.0228];function Jc(t){t[1]<0&&(t=ua.fromBase(ua.toBase(t)));const e=Math.log(Math.max(1+Gc[2]*t[1]*sl.flRoot,1))/Gc[2],n=t[0]*U1,r=e*Math.cos(n),a=e*Math.sin(n);return[t[2],r,a]}function V1(t,e){[t,e]=Y([t,e]);let[n,r,a]=Jc(ua.from(t)),[i,o,s]=Jc(ua.from(e));return Math.sqrt((n-i)**2+(r-o)**2+(a-s)**2)}var $r={deltaE76:u1,deltaECMC:d1,deltaE2000:u_,deltaEJz:w1,deltaEITP:j1,deltaEOK:bs,deltaEHCT:V1};function H1(t){const e=t?Math.floor(Math.log10(Math.abs(t))):0;return Math.max(parseFloat(`1e${e-2}`),1e-6)}const Yc={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Sn(t,{method:e=pt.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:a=2,blackWhiteClamp:i={}}={}){if(t=Y(t),xa(arguments[1])?n=arguments[1]:n||(n=t.space),n=I.get(n),Dn(t,n,{epsilon:0}))return t;let o;if(e==="css")o=q1(t,{space:n});else{if(e!=="clip"&&!Dn(t,n)){Object.prototype.hasOwnProperty.call(Yc,e)&&({method:e,jnd:a,deltaEMethod:r,blackWhiteClamp:i}=Yc[e]);let s=u_;if(r!==""){for(let c in $r)if("deltae"+r.toLowerCase()===c.toLowerCase()){s=$r[c];break}}let l=Sn(ve(t,n),{method:"clip",space:n});if(s(t,l)>a){if(Object.keys(i).length===3){let w=I.resolveCoord(i.channel),b=dt(ve(t,w.space),w.id);if(vn(b)&&(b=0),b>=i.max)return ve({space:"xyz-d65",coords:nt.D65},t.space);if(b<=i.min)return ve({space:"xyz-d65",coords:[0,0,0]},t.space)}let c=I.resolveCoord(e),u=c.space,f=c.id,d=ve(t,u);d.coords.forEach((w,b)=>{vn(w)&&(d.coords[b]=0)});let _=(c.range||c.refRange)[0],h=H1(a),g=_,m=dt(d,f);for(;m-g>h;){let w=Cr(d);w=Sn(w,{space:n,method:"clip"}),s(d,w)-a<h?g=dt(d,f):m=dt(d,f),nn(d,f,(g+m)/2)}o=ve(d,n)}else o=l}else o=ve(t,n);if(e==="clip"||!Dn(o,n,{epsilon:0})){let s=Object.values(n.coords).map(l=>l.range||[]);o.coords=o.coords.map((l,c)=>{let[u,f]=s[c];return u!==void 0&&(l=Math.max(u,l)),f!==void 0&&(l=Math.min(l,f)),l})}}return n!==t.space&&(o=ve(o,t.space)),t.coords=o.coords,t}Sn.returns="color";const Kc={WHITE:{space:Lr,coords:[1,0,0]},BLACK:{space:Lr,coords:[0,0,0]}};function q1(t,{space:e}={}){t=Y(t),e||(e=t.space),e=I.get(e);const n=I.get("oklch");if(e.isUnbounded)return ve(t,e);const r=ve(t,n);let a=r.coords[0];if(a>=1){const d=ve(Kc.WHITE,e);return d.alpha=t.alpha,ve(d,e)}if(a<=0){const d=ve(Kc.BLACK,e);return d.alpha=t.alpha,ve(d,e)}if(Dn(r,e,{epsilon:0}))return ve(r,e);function i(d){const _=ve(d,e),h=Object.values(e.coords);return _.coords=_.coords.map((g,m)=>{if("range"in h[m]){const[w,b]=h[m].range;return s_(w,g,b)}return g}),_}let o=0,s=r.coords[1],l=!0,c=Cr(r),u=i(c),f=bs(u,c);if(f<.02)return u;for(;s-o>1e-4;){const d=(o+s)/2;if(c.coords[1]=d,l&&Dn(c,e,{epsilon:0}))o=d;else if(u=i(c),f=bs(u,c),f<.02){if(.02-f<1e-4)break;l=!1,o=d}else s=d}return u}function ve(t,e,{inGamut:n}={}){t=Y(t),e=I.get(e);let r=e.from(t),a={space:e,coords:r,alpha:t.alpha};return n&&(a=Sn(a,n===!0?void 0:n)),a}ve.returns="color";function ta(t,{precision:e=pt.precision,format:n="default",inGamut:r=!0,...a}={}){var i;let o;t=Y(t);let s=n;n=t.space.getFormat(n)??t.space.getFormat("default")??I.DEFAULT_FORMAT;let l=t.coords.slice();if(r||(r=n.toGamut),r&&!Dn(t)&&(l=Sn(Cr(t),r===!0?void 0:r).coords),n.type==="custom")if(a.precision=e,n.serialize)o=n.serialize(l,t.alpha,a);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=n.name||"color";n.serializeCoords?l=n.serializeCoords(l,e):e!==null&&(l=l.map(_=>di(_,{precision:e})));let u=[...l];if(c==="color"){let _=n.id||((i=n.ids)==null?void 0:i[0])||t.space.id;u.unshift(_)}let f=t.alpha;e!==null&&(f=di(f,{precision:e}));let d=t.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${f}`;o=`${c}(${u.join(n.commas?", ":" ")}${d})`}return o}const G1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],J1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Oi=new st({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:G1,fromXYZ_M:J1});const Fa=1.09929682680944,Xc=.018053968510807;var x_=new st({id:"rec2020",name:"REC.2020",base:Oi,toBase(t){return t.map(function(e){return e<Xc*4.5?e/4.5:Math.pow((e+Fa-1)/Fa,1/.45)})},fromBase(t){return t.map(function(e){return e>=Xc?Fa*Math.pow(e,.45)-(Fa-1):4.5*e})}});const Y1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],K1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var S_=new st({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Y1,fromXYZ_M:K1});const X1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Gt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var k_=new st({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:X1,fromXYZ_M:Gt}),Zc={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Qc=Array(3).fill("<percentage> | <number>[0, 255]"),eu=Array(3).fill("<number>[0, 255]");var Tr=new st({id:"srgb",name:"sRGB",base:k_,fromBase:t=>t.map(e=>{let n=e<0?-1:1,r=e*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let n=e<0?-1:1,r=e*n;return r<=.04045?e/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:Qc},rgb_number:{name:"rgb",commas:!0,coords:eu,noAlpha:!0},color:{},rgba:{coords:Qc,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:eu},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,n=>{e.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:n=!0}={})=>{e<1&&t.push(e),t=t.map(a=>Math.round(a*255));let r=n&&t.every(a=>a%17===0);return"#"+t.map(a=>r?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=Zc.black,e.alpha=0):e.coords=Zc[t],e.coords)return e}}}}),E_=new st({id:"p3",cssId:"display-p3",name:"P3",base:S_,fromBase:Tr.fromBase,toBase:Tr.toBase});pt.display_space=Tr;let tu;if(typeof CSS<"u"&&CSS.supports)for(let t of[_t,x_,E_]){let e=t.getMinCoords(),n=ta({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){pt.display_space=t;break}}function Z1(t,{space:e=pt.display_space,...n}={}){let r=ta(t,n);if(typeof CSS>"u"||CSS.supports("color",r)||!pt.display_space)r=new String(r),r.color=t;else{let a=t;if((t.coords.some(vn)||vn(t.alpha))&&!(tu??(tu=CSS.supports("color","hsl(none 50% 50%)")))&&(a=Cr(t),a.coords=a.coords.map(Ie),a.alpha=Ie(a.alpha),r=ta(a,n),CSS.supports("color",r)))return r=new String(r),r.color=a,r;a=ve(a,e),r=new String(ta(a,n)),r.color=a}return r}function Q1(t,e){return t=Y(t),e=Y(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((n,r)=>n===e.coords[r])}function kn(t){return dt(t,[Je,"y"])}function A_(t,e){nn(t,[Je,"y"],e)}function eb(t){Object.defineProperty(t.prototype,"luminance",{get(){return kn(this)},set(e){A_(this,e)}})}var tb=Object.freeze({__proto__:null,getLuminance:kn,register:eb,setLuminance:A_});function nb(t,e){t=Y(t),e=Y(e);let n=Math.max(kn(t),0),r=Math.max(kn(e),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const rb=.56,ab=.57,ib=.62,ob=.65,nu=.022,sb=1.414,lb=.1,cb=5e-4,ub=1.14,ru=.027,fb=1.14;function au(t){return t>=nu?t:t+(nu-t)**sb}function ir(t){let e=t<0?-1:1,n=Math.abs(t);return e*Math.pow(n,2.4)}function db(t,e){e=Y(e),t=Y(t);let n,r,a,i,o,s;e=ve(e,"srgb"),[i,o,s]=e.coords;let l=ir(i)*.2126729+ir(o)*.7151522+ir(s)*.072175;t=ve(t,"srgb"),[i,o,s]=t.coords;let c=ir(i)*.2126729+ir(o)*.7151522+ir(s)*.072175,u=au(l),f=au(c),d=f>u;return Math.abs(f-u)<cb?r=0:d?(n=f**rb-u**ab,r=n*ub):(n=f**ob-u**ib,r=n*fb),Math.abs(r)<lb?a=0:r>0?a=r-ru:a=r+ru,a*100}function _b(t,e){t=Y(t),e=Y(e);let n=Math.max(kn(t),0),r=Math.max(kn(e),0);r>n&&([n,r]=[r,n]);let a=n+r;return a===0?0:(n-r)/a}const gb=5e4;function pb(t,e){t=Y(t),e=Y(e);let n=Math.max(kn(t),0),r=Math.max(kn(e),0);return r>n&&([n,r]=[r,n]),r===0?gb:(n-r)/r}function hb(t,e){t=Y(t),e=Y(e);let n=dt(t,[_t,"l"]),r=dt(e,[_t,"l"]);return Math.abs(n-r)}const mb=216/24389,iu=24/116,Ia=24389/27;let xo=nt.D65;var Ss=new I({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:xo,base:Je,fromBase(t){let e=t.map((n,r)=>n/xo[r]).map(n=>n>mb?Math.cbrt(n):(Ia*n+16)/116);return[116*e[1]-16,500*(e[0]-e[1]),200*(e[1]-e[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>iu?Math.pow(e[0],3):(116*e[0]-16)/Ia,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/Ia,e[2]>iu?Math.pow(e[2],3):(116*e[2]-16)/Ia].map((n,r)=>n*xo[r])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const So=Math.pow(5,.5)*.5+.5;function bb(t,e){t=Y(t),e=Y(e);let n=dt(t,[Ss,"l"]),r=dt(e,[Ss,"l"]),a=Math.abs(Math.pow(n,So)-Math.pow(r,So)),i=Math.pow(a,1/So)*Math.SQRT2-40;return i<7.5?0:i}var Za=Object.freeze({__proto__:null,contrastAPCA:db,contrastDeltaPhi:bb,contrastLstar:hb,contrastMichelson:_b,contrastWCAG21:nb,contrastWeber:pb});function wb(t,e,n={}){xa(n)&&(n={algorithm:n});let{algorithm:r,...a}=n;if(!r){let i=Object.keys(Za).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}t=Y(t),e=Y(e);for(let i in Za)if("contrast"+r.toLowerCase()===i.toLowerCase())return Za[i](t,e,a);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function Ni(t){let[e,n,r]=Sa(t,Je),a=e+15*n+3*r;return[4*e/a,9*n/a]}function M_(t){let[e,n,r]=Sa(t,Je),a=e+n+r;return[e/a,n/a]}function yb(t){Object.defineProperty(t.prototype,"uv",{get(){return Ni(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return M_(this)}})}var vb=Object.freeze({__proto__:null,register:yb,uv:Ni,xy:M_});function Hr(t,e,n={}){xa(n)&&(n={method:n});let{method:r=pt.deltaE,...a}=n;for(let i in $r)if("deltae"+r.toLowerCase()===i.toLowerCase())return $r[i](t,e,a);throw new TypeError(`Unknown deltaE method: ${r}`)}function xb(t,e=.25){let n=[I.get("oklch","lch"),"l"];return nn(t,n,r=>r*(1+e))}function Sb(t,e=.25){let n=[I.get("oklch","lch"),"l"];return nn(t,n,r=>r*(1-e))}var kb=Object.freeze({__proto__:null,darken:Sb,lighten:xb});function j_(t,e,n=.5,r={}){return[t,e]=[Y(t),Y(e)],bn(n)==="object"&&([n,r]=[.5,n]),ka(t,e,r)(n)}function L_(t,e,n={}){let r;ll(t)&&([r,n]=[t,e],[t,e]=r.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:i,steps:o=2,maxSteps:s=1e3,...l}=n;r||([t,e]=[Y(t),Y(e)],r=ka(t,e,l));let c=Hr(t,e),u=a>0?Math.max(o,Math.ceil(c/a)+1):o,f=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)f=[{p:.5,color:r(.5)}];else{let d=1/(u-1);f=Array.from({length:u},(_,h)=>{let g=h*d;return{p:g,color:r(g)}})}if(a>0){let d=f.reduce((_,h,g)=>{if(g===0)return 0;let m=Hr(h.color,f[g-1].color,i);return Math.max(_,m)},0);for(;d>a;){d=0;for(let _=1;_<f.length&&f.length<s;_++){let h=f[_-1],g=f[_],m=(g.p+h.p)/2,w=r(m);d=Math.max(d,Hr(w,h.color),Hr(w,g.color)),f.splice(_,0,{p:m,color:r(m)}),_++}}}return f=f.map(d=>d.color),f}function ka(t,e,n={}){if(ll(t)){let[l,c]=[t,e];return ka(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:r,outputSpace:a,progression:i,premultiplied:o}=n;t=Y(t),e=Y(e),t=Cr(t),e=Cr(e);let s={colors:[t,e],options:n};if(r?r=I.get(r):r=I.registry[pt.interpolationSpace]||t.space,a=a?I.get(a):r,t=ve(t,r),e=ve(e,r),t=Sn(t),e=Sn(e),r.coords.h&&r.coords.h.type==="angle"){let l=n.hue=n.hue||"shorter",c=[r,"h"],[u,f]=[dt(t,c),dt(e,c)];isNaN(u)&&!isNaN(f)?u=f:isNaN(f)&&!isNaN(u)&&(f=u),[u,f]=a1(l,[u,f]),nn(t,c,u),nn(e,c,f)}return o&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=i?i(l):l;let c=t.coords.map((d,_)=>{let h=e.coords[_];return la(d,h,l)}),u=la(t.alpha,e.alpha,l),f={space:r,coords:c,alpha:u};return o&&(f.coords=f.coords.map(d=>d/u)),a!==r&&(f=ve(f,a)),f},{rangeArgs:s})}function ll(t){return bn(t)==="function"&&!!t.rangeArgs}pt.interpolationSpace="lab";function Eb(t){t.defineFunction("mix",j_,{returns:"color"}),t.defineFunction("range",ka,{returns:"function<color>"}),t.defineFunction("steps",L_,{returns:"array<color>"})}var Ab=Object.freeze({__proto__:null,isRange:ll,mix:j_,range:ka,register:Eb,steps:L_}),C_=new I({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Tr,fromBase:t=>{let e=Math.max(...t),n=Math.min(...t),[r,a,i]=t,[o,s,l]=[NaN,0,(n+e)/2],c=e-n;if(c!==0){switch(s=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case r:o=(a-i)/c+(a<i?6:0);break;case a:o=(i-r)/c+2;break;case i:o=(r-a)/c+4}o=o*60}return s<0&&(o+=180,s=Math.abs(s)),o>=360&&(o-=360),[o,s*100,l*100]},toBase:t=>{let[e,n,r]=t;e=e%360,e<0&&(e+=360),n/=100,r/=100;function a(i){let o=(i+e/30)%12,s=n*Math.min(r,1-r);return r-s*Math.max(-1,Math.min(o-3,9-o,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),$_=new I({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:C_,fromBase(t){let[e,n,r]=t;n/=100,r/=100;let a=r+n*Math.min(r,1-r);return[e,a===0?0:200*(1-r/a),100*a]},toBase(t){let[e,n,r]=t;n/=100,r/=100;let a=r*(1-n/2);return[e,a===0||a===1?0:(r-a)/Math.min(a,1-a)*100,a*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Mb=new I({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:$_,fromBase(t){let[e,n,r]=t;return[e,r*(100-n)/100,100-r]},toBase(t){let[e,n,r]=t;n/=100,r/=100;let a=n+r;if(a>=1){let s=n/a;return[e,0,s*100]}let i=1-r,o=i===0?0:1-n/i;return[e,o*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const jb=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Lb=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var T_=new st({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:jb,fromXYZ_M:Lb}),Cb=new st({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:T_,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e))});const $b=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],Tb=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var R_=new st({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:il,toXYZ_M:$b,fromXYZ_M:Tb});const Rb=1/512,Ob=16/512;var Nb=new st({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:R_,toBase(t){return t.map(e=>e<Ob?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=Rb?e**(1/1.8):16*e)}}),Fb=new I({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Lr,fromBase(t){let[e,n,r]=t,a;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),qt(a)]},toBase(t){let[e,n,r]=t,a,i;return isNaN(r)?(a=0,i=0):(a=n*Math.cos(r*Math.PI/180),i=n*Math.sin(r*Math.PI/180)),[e,a,i]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let O_=nt.D65;const Ib=216/24389,ou=24389/27,[su,lu]=Ni({space:Je,coords:O_});var N_=new I({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:O_,base:Je,fromBase(t){let e=[Ie(t[0]),Ie(t[1]),Ie(t[2])],n=e[1],[r,a]=Ni({space:Je,coords:e});if(!Number.isFinite(r)||!Number.isFinite(a))return[0,0,0];let i=n<=Ib?ou*n:116*Math.cbrt(n)-16;return[i,13*i*(r-su),13*i*(a-lu)]},toBase(t){let[e,n,r]=t;if(e===0||vn(e))return[0,0,0];n=Ie(n),r=Ie(r);let a=n/(13*e)+su,i=r/(13*e)+lu,o=e<=8?e/ou:Math.pow((e+16)/116,3);return[o*(9*a/(4*i)),o,o*((12-3*a-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),cl=new I({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:N_,fromBase(t){let[e,n,r]=t,a;const i=.02;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),qt(a)]},toBase(t){let[e,n,r]=t;return n<0&&(n=0),isNaN(r)&&(r=0),[e,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Wb=216/24389,zb=24389/27,cu=Gt[0][0],uu=Gt[0][1],ko=Gt[0][2],fu=Gt[1][0],du=Gt[1][1],Eo=Gt[1][2],_u=Gt[2][0],gu=Gt[2][1],Ao=Gt[2][2];function or(t,e,n){const r=e/(Math.sin(n)-t*Math.cos(n));return r<0?1/0:r}function pi(t){const e=Math.pow(t+16,3)/1560896,n=e>Wb?e:t/zb,r=n*(284517*cu-94839*ko),a=n*(838422*ko+769860*uu+731718*cu),i=n*(632260*ko-126452*uu),o=n*(284517*fu-94839*Eo),s=n*(838422*Eo+769860*du+731718*fu),l=n*(632260*Eo-126452*du),c=n*(284517*_u-94839*Ao),u=n*(838422*Ao+769860*gu+731718*_u),f=n*(632260*Ao-126452*gu);return{r0s:r/i,r0i:a*t/i,r1s:r/(i+126452),r1i:(a-769860)*t/(i+126452),g0s:o/l,g0i:s*t/l,g1s:o/(l+126452),g1i:(s-769860)*t/(l+126452),b0s:c/f,b0i:u*t/f,b1s:c/(f+126452),b1i:(u-769860)*t/(f+126452)}}function pu(t,e){const n=e/360*Math.PI*2,r=or(t.r0s,t.r0i,n),a=or(t.r1s,t.r1i,n),i=or(t.g0s,t.g0i,n),o=or(t.g1s,t.g1i,n),s=or(t.b0s,t.b0i,n),l=or(t.b1s,t.b1i,n);return Math.min(r,a,i,o,s,l)}var Pb=new I({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:cl,gamutSpace:Tr,fromBase(t){let[e,n,r]=[Ie(t[0]),Ie(t[1]),Ie(t[2])],a;if(e>99.9999999)a=0,e=100;else if(e<1e-8)a=0,e=0;else{let i=pi(e),o=pu(i,r);a=n/o*100}return[r,a,e]},toBase(t){let[e,n,r]=[Ie(t[0]),Ie(t[1]),Ie(t[2])],a;if(r>99.9999999)r=100,a=0;else if(r<1e-8)r=0,a=0;else{let i=pi(r);a=pu(i,e)/100*n}return[r,a,e]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});function sr(t,e){return Math.abs(e)/Math.sqrt(Math.pow(t,2)+1)}function hu(t){let e=sr(t.r0s,t.r0i),n=sr(t.r1s,t.r1i),r=sr(t.g0s,t.g0i),a=sr(t.g1s,t.g1i),i=sr(t.b0s,t.b0i),o=sr(t.b1s,t.b1i);return Math.min(e,n,r,a,i,o)}var Db=new I({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:cl,gamutSpace:"self",fromBase(t){let[e,n,r]=[Ie(t[0]),Ie(t[1]),Ie(t[2])],a;if(e>99.9999999)a=0,e=100;else if(e<1e-8)a=0,e=0;else{let i=pi(e),o=hu(i);a=n/o*100}return[r,a,e]},toBase(t){let[e,n,r]=[Ie(t[0]),Ie(t[1]),Ie(t[2])],a;if(r>99.9999999)r=100,a=0;else if(r<1e-8)r=0,a=0;else{let i=pi(r);a=hu(i)/100*n}return[r,a,e]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const mu=203,bu=2610/2**14,Bb=2**14/2610,Ub=2523/2**5,wu=2**5/2523,yu=3424/2**12,vu=2413/2**7,xu=2392/2**7;var Vb=new st({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Oi,toBase(t){return t.map(function(e){return(Math.max(e**wu-yu,0)/(vu-xu*e**wu))**Bb*1e4/mu})},fromBase(t){return t.map(function(e){let n=Math.max(e*mu/1e4,0),r=yu+vu*n**bu,a=1+xu*n**bu;return(r/a)**Ub})}});const Su=.17883277,ku=.28466892,Eu=.55991073,Mo=3.7743;var Hb=new st({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Oi,toBase(t){return t.map(function(e){return e<=.5?e**2/3*Mo:(Math.exp((e-Eu)/Su)+ku)/12*Mo})},fromBase(t){return t.map(function(e){return e/=Mo,e<=1/12?Math.sqrt(3*e):Su*Math.log(12*e-ku)+Eu})}});const F_={};xn.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=I_(t.W1,t.W2,t.options.method))});xn.add("chromatic-adaptation-end",t=>{t.M||(t.M=I_(t.W1,t.W2,t.options.method))});function Fi({id:t,toCone_M:e,fromCone_M:n}){F_[t]=arguments[0]}function I_(t,e,n="Bradford"){let r=F_[n],[a,i,o]=xe(r.toCone_M,t),[s,l,c]=xe(r.toCone_M,e),u=[[s/a,0,0],[0,l/i,0],[0,0,c/o]],f=xe(u,r.toCone_M);return xe(r.fromCone_M,f)}Fi({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Fi({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Fi({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Fi({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(nt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});nt.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const qb=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Gb=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var W_=new st({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:nt.ACES,toXYZ_M:qb,fromXYZ_M:Gb});const Wa=2**-16,jo=-.35828683,za=(Math.log2(65504)+9.72)/17.52;var Jb=new st({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[jo,za],name:"Red"},g:{range:[jo,za],name:"Green"},b:{range:[jo,za],name:"Blue"}},referred:"scene",base:W_,toBase(t){const e=-.3013698630136986;return t.map(function(n){return n<=e?(2**(n*17.52-9.72)-Wa)*2:n<za?2**(n*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(Wa)+9.72)/17.52:e<Wa?(Math.log2(Wa+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),Au=Object.freeze({__proto__:null,A98RGB:Cb,A98RGB_Linear:T_,ACEScc:Jb,ACEScg:W_,CAM16_JMh:I1,HCT:ua,HPLuv:Db,HSL:C_,HSLuv:Pb,HSV:$_,HWB:Mb,ICTCP:ys,JzCzHz:ws,Jzazbz:d_,LCH:ca,LCHuv:cl,Lab:_t,Lab_D65:Ss,Luv:N_,OKLCH:Fb,OKLab:Lr,P3:E_,P3_Linear:S_,ProPhoto:Nb,ProPhoto_Linear:R_,REC_2020:x_,REC_2020_Linear:Oi,REC_2100_HLG:Hb,REC_2100_PQ:Vb,XYZ_ABS_D65:ol,XYZ_D50:il,XYZ_D65:Je,sRGB:Tr,sRGB_Linear:k_});class ge{constructor(...e){let n;e.length===1&&(n=Y(e[0]));let r,a,i;n?(r=n.space||n.spaceId,a=n.coords,i=n.alpha):[r,a,i]=e,Object.defineProperty(this,"space",{value:I.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=i>1||i===void 0?1:i<0?0:i;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:s=>this.set(o,s)})}get spaceId(){return this.space.id}clone(){return new ge(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let n=Z1(this,...e);return n.color=new ge(n.color),n}static get(e,...n){return e instanceof ge?e:new ge(e,...n)}static defineFunction(e,n,r=n){let{instance:a=!0,returns:i}=r,o=function(...s){let l=n(...s);if(i==="color")l=ge.get(l);else if(i==="function<color>"){let c=l;l=function(...u){let f=c(...u);return ge.get(f)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>ge.get(c)));return l};e in ge||(ge[e]=o),a&&(ge.prototype[e]=function(...s){return o(this,...s)})}static defineFunctions(e){for(let n in e)ge.defineFunction(n,e[n],e[n])}static extend(e){if(e.register)e.register(ge);else for(let n in e)ge.defineFunction(n,e[n])}}ge.defineFunctions({get:dt,getAll:Sa,set:nn,setAll:al,to:ve,equals:Q1,inGamut:Dn,toGamut:Sn,distance:f_,toString:ta});Object.assign(ge,{util:Zm,hooks:xn,WHITES:nt,Space:I,spaces:I.registry,parse:c_,defaults:pt});for(let t of Object.keys(Au))I.register(Au[t]);for(let t in I.registry)ks(t,I.registry[t]);xn.add("colorspace-init-end",t=>{var e;ks(t.id,t),(e=t.aliases)==null||e.forEach(n=>{ks(n,t)})});function ks(t,e){let n=t.replace(/-/g,"_");Object.defineProperty(ge.prototype,n,{get(){let r=this.getAll(t);return typeof Proxy>"u"?r:new Proxy(r,{has:(a,i)=>{try{return I.resolveCoord([e,i]),!0}catch{}return Reflect.has(a,i)},get:(a,i,o)=>{if(i&&typeof i!="symbol"&&!(i in a)){let{index:s}=I.resolveCoord([e,i]);if(s>=0)return a[s]}return Reflect.get(a,i,o)},set:(a,i,o,s)=>{if(i&&typeof i!="symbol"&&!(i in a)||i>=0){let{index:l}=I.resolveCoord([e,i]);if(l>=0)return a[l]=o,this.setAll(t,a),!0}return Reflect.set(a,i,o,s)}})},set(r){this.setAll(t,r)},configurable:!0,enumerable:!0})}ge.extend($r);ge.extend({deltaE:Hr});Object.assign(ge,{deltaEMethods:$r});ge.extend(kb);ge.extend({contrast:wb});ge.extend(vb);ge.extend(tb);ge.extend(Ab);ge.extend(Za);const Yb={Agreement:"#228B22",BoundaryError:"#8B4513",Capitalization:"#540D6E",Eggcorn:"#FF8C00",Enhancement:"#0EAD69",Formatting:"#7D3C98",Grammar:"#9B59B6",Malapropism:"#C71585",Miscellaneous:"#3BCEAC",Nonstandard:"#008B8B",Punctuation:"#D4850F",Readability:"#2E8B57",Redundancy:"#4682B4",Regionalism:"#C061CB",Repetition:"#00A67C",Spelling:"#EE4266",Style:"#FFD23F",Typo:"#FF6B35",Usage:"#1E90FF",WordChoice:"#228B22",WordOrder:"#4D4DFF"};function br(t){const e=Yb[t];if(!e)throw new Error(`Unexpected lint kind: ${t}`);return e}const Kb={},Xb=Object.freeze(Object.defineProperty({__proto__:null,default:Kb},Symbol.toStringTag,{value:"Module"})),Zb=Dm(Xb);var Lo,Mu;function z_(){if(Mu)return Lo;Mu=1;var t=typeof fi<"u"?fi:typeof window<"u"?window:{},e=Zb,n;return typeof document<"u"?n=document:(n=t["__GLOBAL_DOCUMENT_CACHE@4"],n||(n=t["__GLOBAL_DOCUMENT_CACHE@4"]=e)),Lo=n,Lo}var ju,Lu;function P_(){return Lu||(Lu=1,ju=function(t){return typeof t=="object"&&t!==null}),ju}var Co,Cu;function D_(){if(Cu)return Co;Cu=1;var t=P_(),e=$i();Co=n;function n(o,s,l){for(var c in s){var u=s[c];u===void 0?r(o,c,u,l):e(u)?(r(o,c,u,l),u.hook&&u.hook(o,c,l?l[c]:void 0)):t(u)?a(o,s,l,c,u):o[c]=u}}function r(o,s,l,c){if(c){var u=c[s];if(e(u))u.unhook&&u.unhook(o,s,l);else if(s==="attributes")for(var f in u)o.removeAttribute(f);else if(s==="style")for(var d in u)o.style[d]="";else typeof u=="string"?o[s]="":o[s]=null}}function a(o,s,l,c,u){var f=l?l[c]:void 0;if(c==="attributes"){for(var d in u){var _=u[d];_===void 0?o.removeAttribute(d):o.setAttribute(d,_)}return}if(f&&t(f)&&i(f)!==i(u)){o[c]=u;return}t(o[c])||(o[c]={});var h=c==="style"?"":void 0;for(var g in u){var m=u[g];o[c][g]=m===void 0?h:m}}function i(o){if(Object.getPrototypeOf)return Object.getPrototypeOf(o);if(o.__proto__)return o.__proto__;if(o.constructor)return o.constructor.prototype}return Co}var $o,$u;function B_(){if($u)return $o;$u=1;var t=va(),e=Ti(),n=er(),r=Ci();$o=a;function a(o,s){var l=o,c=s;return r(s)&&(c=i(s,o)),r(o)&&(l=i(o,null)),{a:l,b:c}}function i(o,s){var l=o.vnode;if(l||(l=o.vnode=o.render(s)),!(t(l)||e(l)||n(l)))throw new Error("thunk did not return a valid node");return l}return $o}var To,Tu;function U_(){if(Tu)return To;Tu=1;var t=z_(),e=D_(),n=va(),r=Ti(),a=er(),i=B_();To=o;function o(s,l){var c=l&&l.document||t,u=l?l.warn:null;if(s=i(s).a,a(s))return s.init();if(r(s))return c.createTextNode(s.text);if(!n(s))return u&&u("Item is not a valid virtual dom node",s),null;var f=s.namespace===null?c.createElement(s.tagName):c.createElementNS(s.namespace,s.tagName),d=s.properties;e(f,d);for(var _=s.children,h=0;h<_.length;h++){var g=o(_[h],l);g&&f.appendChild(g)}return f}return To}var Ro,Ru;function V_(){if(Ru)return Ro;Ru=1;var t=U_();return Ro=t,Ro}var Qb=V_();const ew=Li(Qb);var Oo,Ou;function H_(){if(Ou)return Oo;Ou=1;var t=ya();e.NONE=0,e.VTEXT=1,e.VNODE=2,e.WIDGET=3,e.PROPS=4,e.ORDER=5,e.INSERT=6,e.REMOVE=7,e.THUNK=8,Oo=e;function e(n,r,a){this.type=Number(n),this.vNode=r,this.patch=a}return e.prototype.version=t,e.prototype.type="VirtualPatch",Oo}var No,Nu;function tw(){if(Nu)return No;Nu=1;var t=P_(),e=$i();No=n;function n(a,i){var o;for(var s in a){s in i||(o=o||{},o[s]=void 0);var l=a[s],c=i[s];if(l!==c)if(t(l)&&t(c))if(r(c)!==r(l))o=o||{},o[s]=c;else if(e(c))o=o||{},o[s]=c;else{var u=n(l,c);u&&(o=o||{},o[s]=u)}else o=o||{},o[s]=c}for(var f in i)f in a||(o=o||{},o[f]=i[f]);return o}function r(a){if(Object.getPrototypeOf)return Object.getPrototypeOf(a);if(a.__proto__)return a.__proto__;if(a.constructor)return a.constructor.prototype}return No}var Fo,Fu;function nw(){if(Fu)return Fo;Fu=1;var t=tl(),e=H_(),n=va(),r=Ti(),a=er(),i=Ci(),o=B_(),s=tw();Fo=l;function l(x,S){var A={a:x};return c(x,S,A,0),A}function c(x,S,A,$){if(x!==S){var L=A[$],j=!1;if(i(x)||i(S))_(x,S,A,$);else if(S==null)a(x)||(f(x,A,$),L=A[$]),L=E(L,new e(e.REMOVE,x,S));else if(n(S))if(n(x))if(x.tagName===S.tagName&&x.namespace===S.namespace&&x.key===S.key){var C=s(x.properties,S.properties);C&&(L=E(L,new e(e.PROPS,x,C))),L=u(x,S,A,L,$)}else L=E(L,new e(e.VNODE,x,S)),j=!0;else L=E(L,new e(e.VNODE,x,S)),j=!0;else r(S)?r(x)?x.text!==S.text&&(L=E(L,new e(e.VTEXT,x,S))):(L=E(L,new e(e.VTEXT,x,S)),j=!0):a(S)&&(a(x)||(j=!0),L=E(L,new e(e.WIDGET,x,S)));L&&(A[$]=L),j&&f(x,A,$)}}function u(x,S,A,$,L){for(var j=x.children,C=w(j,S.children),H=C.children,q=j.length,U=H.length,P=q>U?q:U,D=0;D<P;D++){var Q=j[D],fe=H[D];L+=1,Q?c(Q,fe,A,L):fe&&($=E($,new e(e.INSERT,null,fe))),n(Q)&&Q.count&&(L+=Q.count)}return C.moves&&($=E($,new e(e.ORDER,x,C.moves))),$}function f(x,S,A){g(x,S,A),d(x,S,A)}function d(x,S,A){if(a(x))typeof x.destroy=="function"&&(S[A]=E(S[A],new e(e.REMOVE,x,null)));else if(n(x)&&(x.hasWidgets||x.hasThunks))for(var $=x.children,L=$.length,j=0;j<L;j++){var C=$[j];A+=1,d(C,S,A),n(C)&&C.count&&(A+=C.count)}else i(x)&&_(x,null,S,A)}function _(x,S,A,$){var L=o(x,S),j=l(L.a,L.b);h(j)&&(A[$]=new e(e.THUNK,null,j))}function h(x){for(var S in x)if(S!=="a")return!0;return!1}function g(x,S,A){if(n(x)){if(x.hooks&&(S[A]=E(S[A],new e(e.PROPS,x,m(x.hooks)))),x.descendantHooks||x.hasThunks)for(var $=x.children,L=$.length,j=0;j<L;j++){var C=$[j];A+=1,g(C,S,A),n(C)&&C.count&&(A+=C.count)}}else i(x)&&_(x,null,S,A)}function m(x){var S={};for(var A in x)S[A]=void 0;return S}function w(x,S){var A=k(S),$=A.keys,L=A.free;if(L.length===S.length)return{children:S,moves:null};var j=k(x),C=j.keys,H=j.free;if(H.length===x.length)return{children:S,moves:null};for(var q=[],U=0,P=L.length,D=0,Q=0;Q<x.length;Q++){var fe=x[Q],pe;fe.key?$.hasOwnProperty(fe.key)?(pe=$[fe.key],q.push(S[pe])):(pe=Q-D++,q.push(null)):U<P?(pe=L[U++],q.push(S[pe])):(pe=Q-D++,q.push(null))}for(var Ue=U>=L.length?S.length:L[U],je=0;je<S.length;je++){var Oe=S[je];Oe.key?C.hasOwnProperty(Oe.key)||q.push(Oe):je>=Ue&&q.push(Oe)}for(var he=q.slice(),ke=0,Ee=[],Xe=[],ee,Ae=0;Ae<S.length;){var Ze=S[Ae];for(ee=he[ke];ee===null&&he.length;)Ee.push(b(he,ke,null)),ee=he[ke];!ee||ee.key!==Ze.key?Ze.key?(ee&&ee.key?$[ee.key]!==Ae+1?(Ee.push(b(he,ke,ee.key)),ee=he[ke],!ee||ee.key!==Ze.key?Xe.push({key:Ze.key,to:Ae}):ke++):Xe.push({key:Ze.key,to:Ae}):Xe.push({key:Ze.key,to:Ae}),Ae++):ee&&ee.key&&Ee.push(b(he,ke,ee.key)):(ke++,Ae++)}for(;ke<he.length;)ee=he[ke],Ee.push(b(he,ke,ee&&ee.key));return Ee.length===D&&!Xe.length?{children:q,moves:null}:{children:q,moves:{removes:Ee,inserts:Xe}}}function b(x,S,A){return x.splice(S,1),{from:S,key:A}}function k(x){for(var S={},A=[],$=x.length,L=0;L<$;L++){var j=x[L];j.key?S[j.key]=L:A.push(L)}return{keys:S,free:A}}function E(x,S){return x?(t(x)?x.push(S):x=[x,S],x):S}return Fo}var Io,Iu;function q_(){if(Iu)return Io;Iu=1;var t=nw();return Io=t,Io}var rw=q_();const aw=Li(rw);var Wo,Wu;function iw(){if(Wu)return Wo;Wu=1;var t={};Wo=e;function e(i,o,s,l){return!s||s.length===0?{}:(s.sort(a),n(i,o,s,l,0))}function n(i,o,s,l,c){if(l=l||{},i){r(s,c,c)&&(l[c]=i);var u=o.children;if(u)for(var f=i.childNodes,d=0;d<o.children.length;d++){c+=1;var _=u[d]||t,h=c+(_.count||0);r(s,c,h)&&n(f[d],_,s,l,c),c=h}}return l}function r(i,o,s){if(i.length===0)return!1;for(var l=0,c=i.length-1,u,f;l<=c;){if(u=(c+l)/2>>0,f=i[u],l===c)return f>=o&&f<=s;if(f<o)l=u+1;else if(f>s)c=u-1;else return!0}return!1}function a(i,o){return i>o?1:-1}return Wo}var zo,zu;function ow(){if(zu)return zo;zu=1;var t=er();zo=e;function e(n,r){return t(n)&&t(r)?"name"in n&&"name"in r?n.id===r.id:n.init===r.init:!1}return zo}var Po,Pu;function sw(){if(Pu)return Po;Pu=1;var t=D_(),e=er(),n=H_(),r=ow();Po=a;function a(_,h,g){var m=_.type,w=_.vNode,b=_.patch;switch(m){case n.REMOVE:return i(h,w);case n.INSERT:return o(h,b,g);case n.VTEXT:return s(h,w,b,g);case n.WIDGET:return l(h,w,b,g);case n.VNODE:return c(h,w,b,g);case n.ORDER:return f(h,b),h;case n.PROPS:return t(h,b,w.properties),h;case n.THUNK:return d(h,g.patch(h,b,g));default:return h}}function i(_,h){var g=_.parentNode;return g&&g.removeChild(_),u(_,h),null}function o(_,h,g){var m=g.render(h,g);return _&&_.appendChild(m),_}function s(_,h,g,m){var w;if(_.nodeType===3)_.replaceData(0,_.length,g.text),w=_;else{var b=_.parentNode;w=m.render(g,m),b&&w!==_&&b.replaceChild(w,_)}return w}function l(_,h,g,m){var w=r(h,g),b;w?b=g.update(h,_)||_:b=m.render(g,m);var k=_.parentNode;return k&&b!==_&&k.replaceChild(b,_),w||u(_,h),b}function c(_,h,g,m){var w=_.parentNode,b=m.render(g,m);return w&&b!==_&&w.replaceChild(b,_),b}function u(_,h){typeof h.destroy=="function"&&e(h)&&h.destroy(_)}function f(_,h){for(var g=_.childNodes,m={},w,b,k,E=0;E<h.removes.length;E++)b=h.removes[E],w=g[b.from],b.key&&(m[b.key]=w),_.removeChild(w);for(var x=g.length,S=0;S<h.inserts.length;S++)k=h.inserts[S],w=m[k.key],_.insertBefore(w,k.to>=x++?null:g[k.to])}function d(_,h){return _&&h&&_!==h&&_.parentNode&&_.parentNode.replaceChild(h,_),h}return Po}var Do,Du;function lw(){if(Du)return Do;Du=1;var t=z_(),e=tl(),n=U_(),r=iw(),a=sw();Do=i;function i(c,u,f){return f=f||{},f.patch=f.patch&&f.patch!==i?f.patch:o,f.render=f.render||n,f.patch(c,u,f)}function o(c,u,f){var d=l(u);if(d.length===0)return c;var _=r(c,u.a,d),h=c.ownerDocument;!f.document&&h!==t&&(f.document=h);for(var g=0;g<d.length;g++){var m=d[g];c=s(c,_[m],u[m],f)}return c}function s(c,u,f,d){if(!u)return c;var _;if(e(f))for(var h=0;h<f.length;h++)_=a(f[h],u,d),u===c&&(c=_);else _=a(f,u,d),u===c&&(c=_);return c}function l(c){var u=[];for(var f in c)f!=="a"&&u.push(Number(f));return u}return Do}var Bo,Bu;function G_(){if(Bu)return Bo;Bu=1;var t=lw();return Bo=t,Bo}var cw=G_();const uw=Li(cw);class J_{constructor(e){X(this,"parentResolver"),X(this,"virtualRoot"),X(this,"virtualTree"),X(this,"shadowHost"),this.parentResolver=typeof e=="function"?e:()=>e,this.shadowHost=document.createElement("harper-render-box"),this.parentResolver().appendChild(this.shadowHost)}render(e){if(this.shadowHost.isConnected||this.parentResolver().appendChild(this.shadowHost),!this.virtualRoot||!this.virtualTree)this.virtualRoot=ew(e),this.shadowHost.attachShadow({mode:"open"}).appendChild(this.virtualRoot);else{const n=aw(this.virtualTree,e);this.virtualRoot=uw(this.virtualRoot,n)}this.virtualTree=e}remove(){try{this.shadowHost.outerHTML=this.shadowHost.outerHTML}catch(e){console.error(e)}this.virtualRoot=void 0,this.virtualTree=void 0}getShadowHost(){return this.shadowHost}}class fw{constructor(){X(this,"renderBoxes"),X(this,"highlights"),this.renderBoxes=new Map,this.highlights=gw()?new Map:null}insertHighlightStyle(e,n){const r=br(n.lint_kind),a=`underline ${r} solid 2px`,i=`${r}22`,o=`harper-highlight-style-${n.lint_kind}`;if(document.getElementById(o))return;const s=document.createElement("style");s.id=o,s.textContent=`
      ::highlight(${e}) {
        text-decoration: ${a};
        background-color: ${i};
      }
    `,document.head.appendChild(s)}renderLintBoxes(e){const n=new Map;if(this.highlights)for(const[a,i]of this.highlights)i.clear();for(const a of e){if(a.range&&this.highlights!=null){let c=this.highlights.get(a.lint.lint_kind);if(c!=null)c.add(a.range);else{c=new Highlight;const u=`harper-${a.lint.lint_kind}`;CSS.highlights.set(u,c),this.insertHighlightStyle(u,a.lint),c.add(a.range),this.highlights.set(a.lint.lint_kind,c)}continue}let i=this.renderBoxes.get(a.source);i==null&&(i=new J_(this.computeRenderTarget(a.source)),this.renderBoxes.set(a.source,i));const o=n.get(a.source),s=dw(i.getShadowHost());let l=null;l==null&&s!=null&&(l=s),o==null?n.set(a.source,{boxes:[a],cpa:l}):n.set(a.source,{boxes:[...o.boxes,a],cpa:l})}const r=new Set;for(const[a,{boxes:i,cpa:o}]of n.entries()){if(ic(a)){r.add(a);continue}const s=this.renderBoxes.get(a),l=s.getShadowHost();l.id="harper-highlight-host";const c=ma(a);if(!jm(l,a))if(o!=null){const d=l.style;d.position="absolute",d.top="0px",d.left="0px",d.inset="0",d.pointerEvents="none",d.width="0px",d.height="0px",d.contain="none",d.transform="none"}else l.hasAttribute("style")&&l.removeAttribute("style");const u=Mm(a)??(c||o==null?null:{x:o.x,y:o.y}),f=c?"absolute":"fixed";s.render(this.renderTree(i,u,f)),r.add(a)}for(const[a,i]of this.renderBoxes.entries())if(!r.has(a)){if(ic(a))continue;i.render(Xa("div",{},[]))}this.pruneDetachedSources()}pruneDetachedSources(){for(const[e,n]of this.renderBoxes.entries())document.contains(e)||(n.remove(),this.renderBoxes.delete(e))}renderTree(e,n,r){const a=[],i=n?.x??0,o=n?.y??0;for(const s of e){const l=s.x-i,c=s.y-o,u=r==="fixed"?{position:"fixed",left:"0px",top:"0px",transform:`translate(${l}px, ${c}px)`}:{position:"absolute",left:`${l}px`,top:`${c}px`},f=Xa("div",{style:{...u,width:`${s.width}px`,height:`${s.height}px`,pointerEvents:"none",borderBottom:`2px solid ${br(s.lint.lint_kind)}`,backgroundColor:`${br(s.lint.lint_kind)}22`},id:"harper-highlight"},[]);a.push(f)}return Xa("div",{},a)}computeRenderTarget(e){var n;const r=Am(e);if(r!=null)return r;if((n=e.parentElement)!=null&&n.classList.contains("ProseMirror"))return e.parentElement.parentElement;const a=[gm,um,lm,Gd,cm,el,Jd,dm,_m,Yd,pm,hm,mm];for(const i of a){const o=i(e);if(o!=null)return o.parentElement}return e.parentElement}}function dw(t){let e=t.parentElement;for(;e&&e.nodeType===1;){if(_w(e))return e.getBoundingClientRect();e=e.parentElement}return null}function _w(t){if(!(t instanceof Element))throw new TypeError("Expected a DOM Element");const e=window.getComputedStyle(t);if(e.getPropertyValue("filter")!=="none"||e.getPropertyValue("backdrop-filter")!=="none"||e.getPropertyValue("transform")!=="none"||e.getPropertyValue("perspective")!=="none"||e.getPropertyValue("contain").match(/\b(layout|paint|strict|content)\b/))return!0;const n=e.getPropertyValue("will-change");if(n&&n.trim()!=="auto"){const r=n.split(",").map(i=>i.trim()),a=["filter","backdrop-filter","transform","perspective"];if(r.filter(i=>a.includes(i)).length)return!0}return e.getPropertyValue("content-visibility")==="auto"}function gw(){var t,e,n,r;const a=(t=globalThis.document)==null?void 0:t.documentElement;if(((e=a?.getAttribute)==null?void 0:e.call(a,"data-harper-disable-css-highlights"))==="true"||((n=a?.dataset)==null?void 0:n.harperDisableCssHighlights)==="true"||((r=globalThis.navigator)==null?void 0:r.webdriver)===!0||!("CSS"in window)||typeof CSS.supports!="function")return!1;const i=CSS.supports("selector(::highlight(__x))"),o=CSS?.highlights,s=!!o&&["get","set","has","delete","clear"].every(u=>typeof o[u]=="function"),l=typeof window.Highlight=="function";let c=!1;if(s&&l)try{const u=new Highlight;CSS.highlights.set("__probe__",u),c=CSS.highlights.has("__probe__"),CSS.highlights.delete("__probe__")}catch{}return i&&s&&l&&c}const Uu=["Vary sentence length to keep readers engaged.","Replace clichés with fresh, precise wording.","Check subject‑verb agreement, especially in long sentences.","Keep consistent terminology across the document.","Read aloud to catch awkward phrasing.","You can easily write em-dashes by typing out three hyphens in a row.","You can easily write en-dashes by typing out two hyphens in a row.","Harper can be configured to open with a hotkey. Check the extension's settings.","Don't agree with a suggestion? Click 'Dismiss' and Harper will adapt to your writing style.","You can add specialized terms, names, or acronyms to your personal dictionary in Harper's settings.","Check your language preferences in Settings to get suggestions for different dialects (e.g., American vs. British English)."];function Es(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function pw(t){if(Array.isArray(t))return t}function hw(t){if(Array.isArray(t))return Es(t)}function mw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Y_(r.key),r)}}function ww(t,e,n){return e&&bw(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Qa(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=ul(t))||e){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var l=n.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw i}}}}function J(t,e,n){return(e=Y_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vw(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,a,i,o,s=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(u){c=!0,a=u}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}function xw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vu(Object(n),!0).forEach(function(r){J(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vu(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ii(t,e){return pw(t)||vw(t,e)||ul(t,e)||xw()}function Ct(t){return hw(t)||yw(t)||ul(t)||Sw()}function kw(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Y_(t){var e=kw(t,"string");return typeof e=="symbol"?e:e+""}function hi(t){"@babel/helpers - typeof";return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hi(t)}function ul(t,e){if(t){if(typeof t=="string")return Es(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Es(t,e):void 0}}var Hu=function(){},fl={},K_={},X_=null,Z_={mark:Hu,measure:Hu};try{typeof window<"u"&&(fl=window),typeof document<"u"&&(K_=document),typeof MutationObserver<"u"&&(X_=MutationObserver),typeof performance<"u"&&(Z_=performance)}catch{}var Ew=fl.navigator||{},qu=Ew.userAgent,Gu=qu===void 0?"":qu,Jn=fl,we=K_,Ju=X_,Pa=Z_,sn=!!we.documentElement&&!!we.head&&typeof we.addEventListener=="function"&&typeof we.createElement=="function",Q_=~Gu.indexOf("MSIE")||~Gu.indexOf("Trident/"),Uo,Aw=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Mw=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,eg={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},jw={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},tg=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Ke="classic",Ea="duotone",ng="sharp",rg="sharp-duotone",ag="chisel",ig="etch",og="jelly",sg="jelly-duo",lg="jelly-fill",cg="notdog",ug="notdog-duo",fg="slab",dg="slab-press",_g="thumbprint",gg="utility",pg="utility-duo",hg="utility-fill",mg="whiteboard",Lw="Classic",Cw="Duotone",$w="Sharp",Tw="Sharp Duotone",Rw="Chisel",Ow="Etch",Nw="Jelly",Fw="Jelly Duo",Iw="Jelly Fill",Ww="Notdog",zw="Notdog Duo",Pw="Slab",Dw="Slab Press",Bw="Thumbprint",Uw="Utility",Vw="Utility Duo",Hw="Utility Fill",qw="Whiteboard",bg=[Ke,Ea,ng,rg,ag,ig,og,sg,lg,cg,ug,fg,dg,_g,gg,pg,hg,mg];Uo={},J(J(J(J(J(J(J(J(J(J(Uo,Ke,Lw),Ea,Cw),ng,$w),rg,Tw),ag,Rw),ig,Ow),og,Nw),sg,Fw),lg,Iw),cg,Ww),J(J(J(J(J(J(J(J(Uo,ug,zw),fg,Pw),dg,Dw),_g,Bw),gg,Uw),pg,Vw),hg,Hw),mg,qw);var Gw={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Jw={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Yw=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Kw={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},wg=["fak","fa-kit","fakd","fa-kit-duotone"],Yu={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Xw=["kit"],Zw="kit",Qw="kit-duotone",ey="Kit",ty="Kit Duotone";J(J({},Zw,ey),Qw,ty);var ny={kit:{"fa-kit":"fak"}},ry={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ay={kit:{fak:"fa-kit"}},Ku={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Vo,Da={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},iy=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],oy="classic",sy="duotone",ly="sharp",cy="sharp-duotone",uy="chisel",fy="etch",dy="jelly",_y="jelly-duo",gy="jelly-fill",py="notdog",hy="notdog-duo",my="slab",by="slab-press",wy="thumbprint",yy="utility",vy="utility-duo",xy="utility-fill",Sy="whiteboard",ky="Classic",Ey="Duotone",Ay="Sharp",My="Sharp Duotone",jy="Chisel",Ly="Etch",Cy="Jelly",$y="Jelly Duo",Ty="Jelly Fill",Ry="Notdog",Oy="Notdog Duo",Ny="Slab",Fy="Slab Press",Iy="Thumbprint",Wy="Utility",zy="Utility Duo",Py="Utility Fill",Dy="Whiteboard";Vo={},J(J(J(J(J(J(J(J(J(J(Vo,oy,ky),sy,Ey),ly,Ay),cy,My),uy,jy),fy,Ly),dy,Cy),_y,$y),gy,Ty),py,Ry),J(J(J(J(J(J(J(J(Vo,hy,Oy),my,Ny),by,Fy),wy,Iy),yy,Wy),vy,zy),xy,Py),Sy,Dy);var By="kit",Uy="kit-duotone",Vy="Kit",Hy="Kit Duotone";J(J({},By,Vy),Uy,Hy);var qy={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Gy={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},As={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Jy=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],yg=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(iy,Jy),Yy=["solid","regular","light","thin","duotone","brands","semibold"],vg=[1,2,3,4,5,6,7,8,9,10],Ky=vg.concat([11,12,13,14,15,16,17,18,19,20]),Xy=["aw","fw","pull-left","pull-right"],Zy=[].concat(Ct(Object.keys(Gy)),Yy,Xy,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Da.GROUP,Da.SWAP_OPACITY,Da.PRIMARY,Da.SECONDARY]).concat(vg.map(function(t){return"".concat(t,"x")})).concat(Ky.map(function(t){return"w-".concat(t)})),Qy={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},rn="___FONT_AWESOME___",Ms=16,xg="fa",Sg="svg-inline--fa",Yn="data-fa-i2svg",js="data-fa-pseudo-element",ev="data-fa-pseudo-element-pending",dl="data-prefix",_l="data-icon",Xu="fontawesome-i2svg",tv="async",nv=["HTML","HEAD","STYLE","SCRIPT"],kg=["::before","::after",":before",":after"],Eg=(function(){try{return!0}catch{return!1}})();function Aa(t){return new Proxy(t,{get:function(e,n){return n in e?e[n]:e[Ke]}})}var Ag=M({},eg);Ag[Ke]=M(M(M(M({},{"fa-duotone":"duotone"}),eg[Ke]),Yu.kit),Yu["kit-duotone"]);var rv=Aa(Ag),Ls=M({},Kw);Ls[Ke]=M(M(M(M({},{duotone:"fad"}),Ls[Ke]),Ku.kit),Ku["kit-duotone"]);var Zu=Aa(Ls),Cs=M({},As);Cs[Ke]=M(M({},Cs[Ke]),ay.kit);var gl=Aa(Cs),$s=M({},qy);$s[Ke]=M(M({},$s[Ke]),ny.kit);Aa($s);var av=Aw,Mg="fa-layers-text",iv=Mw,ov=M({},Gw);Aa(ov);var sv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ho=jw,lv=[].concat(Ct(Xw),Ct(Zy)),na=Jn.FontAwesomeConfig||{};function cv(t){var e=we.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function uv(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(we&&typeof we.querySelector=="function"){var fv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fv.forEach(function(t){var e=Ii(t,2),n=e[0],r=e[1],a=uv(cv(n));a!=null&&(na[r]=a)})}var jg={styleDefault:"solid",familyDefault:Ke,cssPrefix:xg,replacementClass:Sg,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};na.familyPrefix&&(na.cssPrefix=na.familyPrefix);var Rr=M(M({},jg),na);Rr.autoReplaceSvg||(Rr.observeMutations=!1);var W={};Object.keys(jg).forEach(function(t){Object.defineProperty(W,t,{enumerable:!0,set:function(e){Rr[t]=e,ra.forEach(function(n){return n(W)})},get:function(){return Rr[t]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(t){Rr.cssPrefix=t,ra.forEach(function(e){return e(W)})},get:function(){return Rr.cssPrefix}});Jn.FontAwesomeConfig=W;var ra=[];function dv(t){return ra.push(t),function(){ra.splice(ra.indexOf(t),1)}}var lr=Ms,Dt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _v(t){if(!(!t||!sn)){var e=we.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=we.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return we.head.insertBefore(e,r),t}}var gv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qu(){for(var t=12,e="";t-- >0;)e+=gv[Math.random()*62|0];return e}function Wr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function pl(t){return t.classList?Wr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Lg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pv(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Lg(t[n]),'" ')},"").trim()}function Wi(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function hl(t){return t.size!==Dt.size||t.x!==Dt.x||t.y!==Dt.y||t.rotate!==Dt.rotate||t.flipX||t.flipY}function hv(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function mv(t){var e=t.transform,n=t.width,r=n===void 0?Ms:n,a=t.height,i=a===void 0?Ms:a,o="";return Q_?o+="translate(".concat(e.x/lr-r/2,"em, ").concat(e.y/lr-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/lr,"em), calc(-50% + ").concat(e.y/lr,"em)) "),o+="scale(".concat(e.size/lr*(e.flipX?-1:1),", ").concat(e.size/lr*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var bv=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Cg(){var t=xg,e=Sg,n=W.cssPrefix,r=W.replacementClass,a=bv;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ef=!1;function qo(){W.autoAddCss&&!ef&&(_v(Cg()),ef=!0)}var wv={mixout:function(){return{dom:{css:Cg,insertCss:qo}}},hooks:function(){return{beforeDOMElementCreation:function(){qo()},beforeI2svg:function(){qo()}}}},an=Jn||{};an[rn]||(an[rn]={});an[rn].styles||(an[rn].styles={});an[rn].hooks||(an[rn].hooks={});an[rn].shims||(an[rn].shims=[]);var Mt=an[rn],$g=[],Tg=function(){we.removeEventListener("DOMContentLoaded",Tg),mi=1,$g.map(function(t){return t()})},mi=!1;sn&&(mi=(we.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(we.readyState),mi||we.addEventListener("DOMContentLoaded",Tg));function yv(t){sn&&(mi?setTimeout(t,0):$g.push(t))}function Ma(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Lg(t):"<".concat(e," ").concat(pv(r),">").concat(i.map(Ma).join(""),"</").concat(e,">")}function tf(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Go=function(t,e,n,r){var a=Object.keys(t),i=a.length,o=e,s,l,c;for(n===void 0?(s=1,c=t[a[0]]):(s=0,c=n);s<i;s++)l=a[s],c=o(c,t[l],l,t);return c};function Rg(t){return Ct(t).length!==1?null:t.codePointAt(0).toString(16)}function nf(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ts(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=nf(e);typeof Mt.hooks.addPack=="function"&&!a?Mt.hooks.addPack(t,nf(e)):Mt.styles[t]=M(M({},Mt.styles[t]||{}),i),t==="fas"&&Ts("fa",e)}var fa=Mt.styles,vv=Mt.shims,Og=Object.keys(gl),xv=Og.reduce(function(t,e){return t[e]=Object.keys(gl[e]),t},{}),ml=null,Ng={},Fg={},Ig={},Wg={},zg={};function Sv(t){return~lv.indexOf(t)}function kv(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Sv(a)?a:null}var Pg=function(){var t=function(r){return Go(fa,function(a,i,o){return a[o]=Go(i,r,{}),a},{})};Ng=t(function(r,a,i){if(a[3]&&(r[a[3]]=i),a[2]){var o=a[2].filter(function(s){return typeof s=="number"});o.forEach(function(s){r[s.toString(16)]=i})}return r}),Fg=t(function(r,a,i){if(r[i]=i,a[2]){var o=a[2].filter(function(s){return typeof s=="string"});o.forEach(function(s){r[s]=i})}return r}),zg=t(function(r,a,i){var o=a[2];return r[i]=i,o.forEach(function(s){r[s]=i}),r});var e="far"in fa||W.autoFetchSvg,n=Go(vv,function(r,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});Ig=n.names,Wg=n.unicodes,ml=zi(W.styleDefault,{family:W.familyDefault})};dv(function(t){ml=zi(t.styleDefault,{family:W.familyDefault})});Pg();function bl(t,e){return(Ng[t]||{})[e]}function Ev(t,e){return(Fg[t]||{})[e]}function In(t,e){return(zg[t]||{})[e]}function Dg(t){return Ig[t]||{prefix:null,iconName:null}}function Av(t){var e=Wg[t],n=bl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function En(){return ml}var Bg=function(){return{prefix:null,iconName:null,rest:[]}};function Mv(t){var e=Ke,n=Og.reduce(function(r,a){return r[a]="".concat(W.cssPrefix,"-").concat(a),r},{});return bg.forEach(function(r){(t.includes(n[r])||t.some(function(a){return xv[r].includes(a)}))&&(e=r)}),e}function zi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ke:n,a=rv[r][t];if(r===Ea&&!t)return"fad";var i=Zu[r][t]||Zu[r][a],o=t in Mt.styles?t:null,s=i||o||null;return s}function jv(t){var e=[],n=null;return t.forEach(function(r){var a=kv(W.cssPrefix,r);a?n=a:r&&e.push(r)}),{iconName:n,rest:e}}function rf(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var af=yg.concat(wg);function Pi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,a=null,i=rf(t.filter(function(_){return af.includes(_)})),o=rf(t.filter(function(_){return!af.includes(_)})),s=i.filter(function(_){return a=_,!tg.includes(_)}),l=Ii(s,1),c=l[0],u=c===void 0?null:c,f=Mv(i),d=M(M({},jv(o)),{},{prefix:zi(u,{family:f})});return M(M(M({},d),Tv({values:t,family:f,styles:fa,config:W,canonical:d,givenPrefix:a})),Lv(r,a,d))}function Lv(t,e,n){var r=n.prefix,a=n.iconName;if(t||!r||!a)return{prefix:r,iconName:a};var i=e==="fa"?Dg(a):{},o=In(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!fa.far&&fa.fas&&!W.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}var Cv=bg.filter(function(t){return t!==Ke||t!==Ea}),$v=Object.keys(As).filter(function(t){return t!==Ke}).map(function(t){return Object.keys(As[t])}).flat();function Tv(t){var e=t.values,n=t.family,r=t.canonical,a=t.givenPrefix,i=a===void 0?"":a,o=t.styles,s=o===void 0?{}:o,l=t.config,c=l===void 0?{}:l,u=n===Ea,f=e.includes("fa-duotone")||e.includes("fad"),d=c.familyDefault==="duotone",_=r.prefix==="fad"||r.prefix==="fa-duotone";if(!u&&(f||d||_)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Cv.includes(n)){var h=Object.keys(s).find(function(m){return $v.includes(m)});if(h||c.autoFetchSvg){var g=Yw.get(n).defaultShortPrefixId;r.prefix=g,r.iconName=In(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=En()||"fas"),r}var Rv=(function(){function t(){mw(this,t),this.definitions={}}return ww(t,[{key:"add",value:function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=M(M({},e.definitions[o]||{}),i[o]),Ts(o,i[o]);var s=gl[Ke][o];s&&Ts(s,i[o]),Pg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(a){var i=r[a],o=i.prefix,s=i.iconName,l=i.icon,c=l[2];e[o]||(e[o]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(e[o][u]=l)}),e[o][s]=l}),e}}])})(),of=[],gr={},wr={},Ov=Object.keys(wr);function Nv(t,e){var n=e.mixoutsTo;return of=t,gr={},Object.keys(wr).forEach(function(r){Ov.indexOf(r)===-1&&delete wr[r]}),of.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),hi(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){gr[o]||(gr[o]=[]),gr[o].push(i[o])})}r.provides&&r.provides(wr)}),n}function Rs(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gr[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Kn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=gr[t]||[];a.forEach(function(i){i.apply(null,n)})}function An(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return wr[t]?wr[t].apply(null,e):void 0}function Os(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||En();if(e)return e=In(n,e)||e,tf(Ug.definitions,n,e)||tf(Mt.styles,n,e)}var Ug=new Rv,Fv=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,Kn("noAuto")},Iv={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return sn?(Kn("beforeI2svg",t),An("pseudoElements2svg",t),An("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,yv(function(){zv({autoReplaceSvgRoot:e}),Kn("watch",t)})}},Wv={icon:function(t){if(t===null)return null;if(hi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:In(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=zi(t[0]);return{prefix:n,iconName:In(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(W.cssPrefix,"-"))>-1||t.match(av))){var r=Pi(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||En(),iconName:In(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var a=En();return{prefix:a,iconName:In(a,t)||t}}}},wl={noAuto:Fv,config:W,dom:Iv,parse:Wv,library:Ug,findIconDefinition:Os,toHtml:Ma},zv=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,n=e===void 0?we:e;(Object.keys(Mt.styles).length>0||W.autoFetchSvg)&&sn&&W.autoReplaceSvg&&wl.dom.i2svg({node:n})};function Di(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return Ma(n)})}}),Object.defineProperty(t,"node",{get:function(){if(sn){var n=we.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function Pv(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(hl(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Wi(M(M({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Dv(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(W.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},a),{},{id:o}),children:r}]}]}function Bv(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function yl(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.maskId,c=t.extra,u=t.watchable,f=u===void 0?!1:u,d=r.found?r:n,_=d.width,h=d.height,g=[W.replacementClass,i?"".concat(W.cssPrefix,"-").concat(i):""].filter(function(x){return c.classes.indexOf(x)===-1}).filter(function(x){return x!==""||!!x}).concat(c.classes).join(" "),m={children:[],attributes:M(M({},c.attributes),{},{"data-prefix":a,"data-icon":i,class:g,role:c.attributes.role||"img",viewBox:"0 0 ".concat(_," ").concat(h)})};!Bv(c.attributes)&&!c.attributes["aria-hidden"]&&(m.attributes["aria-hidden"]="true"),f&&(m.attributes[Yn]="");var w=M(M({},m),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:M({},c.styles)}),b=r.found&&n.found?An("generateAbstractMask",w)||{children:[],attributes:{}}:An("generateAbstractIcon",w)||{children:[],attributes:{}},k=b.children,E=b.attributes;return w.children=k,w.attributes=E,s?Dv(w):Pv(w)}function sf(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.extra,o=t.watchable,s=o===void 0?!1:o,l=M(M({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[Yn]="");var c=M({},i.styles);hl(a)&&(c.transform=mv({transform:a,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Wi(c);u.length>0&&(l.style=u);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),f}function Uv(t){var e=t.content,n=t.extra,r=M(M({},n.attributes),{},{class:n.classes.join(" ")}),a=Wi(n.styles);a.length>0&&(r.style=a);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),i}var Jo=Mt.styles;function Ns(t){var e=t[0],n=t[1],r=t.slice(4),a=Ii(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(Ho.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Ho.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Ho.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Vv={found:!1,width:512,height:512};function Hv(t,e){!Eg&&!W.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Fs(t,e){var n=e;return e==="fa"&&W.styleDefault!==null&&(e=En()),new Promise(function(r,a){if(n==="fa"){var i=Dg(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Jo[e]&&Jo[e][t]){var o=Jo[e][t];return r(Ns(o))}Hv(t,e),r(M(M({},Vv),{},{icon:W.showMissingIcons&&t?An("missingIconAbstract")||{}:{}}))})}var lf=function(){},Is=W.measurePerformance&&Pa&&Pa.mark&&Pa.measure?Pa:{mark:lf,measure:lf},qr='FA "7.1.0"',qv=function(t){return Is.mark("".concat(qr," ").concat(t," begins")),function(){return Vg(t)}},Vg=function(t){Is.mark("".concat(qr," ").concat(t," ends")),Is.measure("".concat(qr," ").concat(t),"".concat(qr," ").concat(t," begins"),"".concat(qr," ").concat(t," ends"))},vl={begin:qv,end:Vg},ei=function(){};function cf(t){var e=t.getAttribute?t.getAttribute(Yn):null;return typeof e=="string"}function Gv(t){var e=t.getAttribute?t.getAttribute(dl):null,n=t.getAttribute?t.getAttribute(_l):null;return e&&n}function Jv(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(W.replacementClass)}function Yv(){if(W.autoReplaceSvg===!0)return ti.replace;var t=ti[W.autoReplaceSvg];return t||ti.replace}function Kv(t){return we.createElementNS("http://www.w3.org/2000/svg",t)}function Xv(t){return we.createElement(t)}function Hg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Kv:Xv:n;if(typeof t=="string")return we.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Hg(o,{ceFn:r}))}),a}function Zv(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ti={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(r){e.parentNode.insertBefore(Hg(r),e)}),e.getAttribute(Yn)===null&&W.keepOriginalSource){var n=we.createComment(Zv(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~pl(e).indexOf(W.replacementClass))return ti.replace(t);var r=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(o,s){return s===W.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}var i=n.map(function(o){return Ma(o)}).join(`
`);e.setAttribute(Yn,""),e.innerHTML=i}};function uf(t){t()}function qg(t,e){var n=typeof e=="function"?e:ei;if(t.length===0)n();else{var r=uf;W.mutateApproach===tv&&(r=Jn.requestAnimationFrame||uf),r(function(){var a=Yv(),i=vl.begin("mutate");t.map(a),i(),n()})}}var xl=!1;function Gg(){xl=!0}function Ws(){xl=!1}var bi=null;function ff(t){if(Ju&&W.observeMutations){var e=t.treeCallback,n=e===void 0?ei:e,r=t.nodeCallback,a=r===void 0?ei:r,i=t.pseudoElementsCallback,o=i===void 0?ei:i,s=t.observeMutationsRoot,l=s===void 0?we:s;bi=new Ju(function(c){if(!xl){var u=En();Wr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!cf(f.addedNodes[0])&&(W.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&W.searchPseudoElements&&o([f.target],!0),f.type==="attributes"&&cf(f.target)&&~sv.indexOf(f.attributeName))if(f.attributeName==="class"&&Gv(f.target)){var d=Pi(pl(f.target)),_=d.prefix,h=d.iconName;f.target.setAttribute(dl,_||u),h&&f.target.setAttribute(_l,h)}else Jv(f.target)&&a(f.target)})}}),sn&&bi.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qv(){bi&&bi.disconnect()}function e2(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function t2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Pi(pl(t));return a.prefix||(a.prefix=En()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ev(a.prefix,t.innerText)||bl(a.prefix,Rg(t.innerText))),!a.iconName&&W.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function n2(t){var e=Wr(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function r2(){return{iconName:null,prefix:null,transform:Dt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function df(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=t2(t),r=n.iconName,a=n.prefix,i=n.rest,o=n2(t),s=Rs("parseNodeAttributes",{},t),l=e.styleParser?e2(t):[];return M({iconName:r,prefix:a,transform:Dt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var a2=Mt.styles;function Jg(t){var e=W.autoReplaceSvg==="nest"?df(t,{styleParser:!1}):df(t);return~e.extra.classes.indexOf(Mg)?An("generateLayersText",t,e):An("generateSvgReplacementMutation",t,e)}function i2(){return[].concat(Ct(wg),Ct(yg))}function _f(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!sn)return Promise.resolve();var n=we.documentElement.classList,r=function(u){return n.add("".concat(Xu,"-").concat(u))},a=function(u){return n.remove("".concat(Xu,"-").concat(u))},i=W.autoFetchSvg?i2():tg.concat(Object.keys(a2));i.includes("fa")||i.push("fa");var o=[".".concat(Mg,":not([").concat(Yn,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Yn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Wr(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=vl.begin("onTree"),c=s.reduce(function(u,f){try{var d=Jg(f);d&&u.push(d)}catch(_){Eg||_.name==="MissingIcon"&&console.error(_)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){qg(d,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function o2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jg(t).then(function(n){n&&qg([n],e)})}function s2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Os(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Os(a||{})),t(r,M(M({},n),{},{mask:a}))}}var l2=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?Dt:n,a=e.symbol,i=a===void 0?!1:a,o=e.mask,s=o===void 0?null:o,l=e.maskId,c=l===void 0?null:l,u=e.classes,f=u===void 0?[]:u,d=e.attributes,_=d===void 0?{}:d,h=e.styles,g=h===void 0?{}:h;if(t){var m=t.prefix,w=t.iconName,b=t.icon;return Di(M({type:"icon"},t),function(){return Kn("beforeDOMElementCreation",{iconDefinition:t,params:e}),yl({icons:{main:Ns(b),mask:s?Ns(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:w,transform:M(M({},Dt),r),symbol:i,maskId:c,extra:{attributes:_,styles:g,classes:f}})})}},c2={mixout:function(){return{icon:s2(l2)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=_f,t.nodeCallback=o2,t}}},provides:function(t){t.i2svg=function(e){var n=e.node,r=n===void 0?we:n,a=e.callback,i=a===void 0?function(){}:a;return _f(r,i)},t.generateSvgReplacementMutation=function(e,n){var r=n.iconName,a=n.prefix,i=n.transform,o=n.symbol,s=n.mask,l=n.maskId,c=n.extra;return new Promise(function(u,f){Promise.all([Fs(r,a),s.iconName?Fs(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(d){var _=Ii(d,2),h=_[0],g=_[1];u([e,yl({icons:{main:h,mask:g},prefix:a,iconName:r,transform:i,symbol:o,maskId:l,extra:c,watchable:!0})])}).catch(f)})},t.generateAbstractIcon=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.transform,o=e.styles,s=Wi(o);s.length>0&&(r.style=s);var l;return hl(i)&&(l=An("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},u2={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.classes,r=n===void 0?[]:n;return Di({type:"layer"},function(){Kn("beforeDOMElementCreation",{assembler:t,params:e});var a=[];return t(function(i){Array.isArray(i)?i.map(function(o){a=a.concat(o.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(Ct(r)).join(" ")},children:a}]})}}}},f2={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.classes,r=n===void 0?[]:n,a=e.attributes,i=a===void 0?{}:a,o=e.styles,s=o===void 0?{}:o;return Di({type:"counter",content:t},function(){return Kn("beforeDOMElementCreation",{content:t,params:e}),Uv({content:t.toString(),extra:{attributes:i,styles:s,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(Ct(r))}})})}}}},d2={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?Dt:n,a=e.classes,i=a===void 0?[]:a,o=e.attributes,s=o===void 0?{}:o,l=e.styles,c=l===void 0?{}:l;return Di({type:"text",content:t},function(){return Kn("beforeDOMElementCreation",{content:t,params:e}),sf({content:t,transform:M(M({},Dt),r),extra:{attributes:s,styles:c,classes:["".concat(W.cssPrefix,"-layers-text")].concat(Ct(i))}})})}}},provides:function(t){t.generateLayersText=function(e,n){var r=n.transform,a=n.extra,i=null,o=null;if(Q_){var s=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();i=l.width/s,o=l.height/s}return Promise.resolve([e,sf({content:e.innerHTML,width:i,height:o,transform:r,extra:a,watchable:!0})])}}},Yg=new RegExp('"',"ug"),gf=[1105920,1112319],pf=M(M(M(M({},{FontAwesome:{normal:"fas",400:"fas"}}),Jw),Qy),ry),zs=Object.keys(pf).reduce(function(t,e){return t[e.toLowerCase()]=pf[e],t},{}),_2=Object.keys(zs).reduce(function(t,e){var n=zs[e];return t[e]=n[900]||Ct(Object.entries(n))[0][1],t},{});function g2(t){var e=t.replace(Yg,"");return Rg(Ct(e)[0]||"")}function p2(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(Yg,""),a=r.codePointAt(0),i=a>=gf[0]&&a<=gf[1],o=r.length===2?r[0]===r[1]:!1;return i||o||e}function h2(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(zs[n]||{})[a]||_2[n]}function hf(t,e){var n="".concat(ev).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Wr(t.children),o=i.filter(function(S){return S.getAttribute(js)===e})[0],s=Jn.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),c=l.match(iv),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),_=h2(l,u),h=g2(d),g=c[0].startsWith("FontAwesome"),m=p2(s),w=bl(_,h),b=w;if(g){var k=Av(h);k.iconName&&k.prefix&&(w=k.iconName,_=k.prefix)}if(w&&!m&&(!o||o.getAttribute(dl)!==_||o.getAttribute(_l)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);var E=r2(),x=E.extra;x.attributes[js]=e,Fs(w,_).then(function(S){var A=yl(M(M({},E),{},{icons:{main:S,mask:Bg()},prefix:_,iconName:b,extra:x,watchable:!0})),$=we.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=A.map(function(L){return Ma(L)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function m2(t){return Promise.all([hf(t,"::before"),hf(t,"::after")])}function b2(t){return t.parentNode!==document.head&&!~nv.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(js)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var w2=function(t){return!!t&&kg.some(function(e){return t.includes(e)})},y2=function(t){if(!t)return[];var e=new Set,n=t.split(/,(?![^()]*\))/).map(function(s){return s.trim()});n=n.flatMap(function(s){return s.includes("(")?s:s.split(",").map(function(l){return l.trim()})});var r=Qa(n),a;try{for(r.s();!(a=r.n()).done;){var i=a.value;if(w2(i)){var o=kg.reduce(function(s,l){return s.replace(l,"")},i);o!==""&&o!=="*"&&e.add(o)}}}catch(s){r.e(s)}finally{r.f()}return e};function mf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(sn){var n;if(e)n=t;else if(W.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,a=Qa(document.styleSheets),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;try{var s=Qa(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,u=y2(c.selectorText),f=Qa(u),d;try{for(f.s();!(d=f.n()).done;){var _=d.value;r.add(_)}}catch(g){f.e(g)}finally{f.f()}}}catch(g){s.e(g)}finally{s.f()}}catch(g){W.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(g.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(g){a.e(g)}finally{a.f()}if(!r.size)return;var h=Array.from(r).join(", ");try{n=t.querySelectorAll(h)}catch{}}return new Promise(function(g,m){var w=Wr(n).filter(b2).map(m2),b=vl.begin("searchPseudoElements");Gg(),Promise.all(w).then(function(){b(),Ws(),g()}).catch(function(){b(),Ws(),m()})})}}var v2={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=mf,t}}},provides:function(t){t.pseudoElements2svg=function(e){var n=e.node,r=n===void 0?we:n;W.searchPseudoElements&&mf(r)}}},bf=!1,x2={mixout:function(){return{dom:{unwatch:function(){Gg(),bf=!0}}}},hooks:function(){return{bootstrap:function(){ff(Rs("mutationObserverCallbacks",{}))},noAuto:function(){Qv()},watch:function(t){var e=t.observeMutationsRoot;bf?Ws():ff(Rs("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},wf=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var a=r.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},S2={mixout:function(){return{parse:{transform:function(t){return wf(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=wf(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var n=e.main,r=e.transform,a=e.containerWidth,i=e.iconWidth,o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(s," ").concat(l," ").concat(c)},f={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:u,path:f};return{tag:"g",attributes:M({},d.outer),children:[{tag:"g",attributes:M({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:M(M({},n.icon.attributes),d.path)}]}]}}}},Yo={x:0,y:0,width:"100%",height:"100%"};function yf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function k2(t){return t.tag==="g"?t.children:[t]}var E2={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),r=n?Pi(n.split(" ").map(function(a){return a.trim()})):Bg();return r.prefix||(r.prefix=En()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.mask,o=e.maskId,s=e.transform,l=a.width,c=a.icon,u=i.width,f=i.icon,d=hv({transform:s,containerWidth:u,iconWidth:l}),_={tag:"rect",attributes:M(M({},Yo),{},{fill:"white"})},h=c.children?{children:c.children.map(yf)}:{},g={tag:"g",attributes:M({},d.inner),children:[yf(M({tag:c.tag,attributes:M(M({},c.attributes),d.path)},h))]},m={tag:"g",attributes:M({},d.outer),children:[g]},w="mask-".concat(o||Qu()),b="clip-".concat(o||Qu()),k={tag:"mask",attributes:M(M({},Yo),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,m]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:k2(f)},k]};return n.push(E,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(w,")")},Yo)}),{children:n,attributes:r}}}},A2={provides:function(t){var e=!1;Jn.matchMedia&&(e=Jn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:M(M({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=M(M({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:M(M({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:M(M({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:M(M({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:M(M({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:M(M({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},M2={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},j2=[wv,c2,u2,f2,d2,v2,x2,S2,E2,A2,M2];Nv(j2,{mixoutsTo:wl});var L2=wl.icon,C2={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z"]},Ko,vf;function $2(){if(vf)return Ko;vf=1;var t=q_(),e=G_(),n=t_(),r=V_(),a=Qd(),i=e_();return Ko={diff:t,patch:e,h:n,create:r,VNode:a,VText:i},Ko}var Me=$2();const T2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-down-icon lucide-book-down"><path d="M12 13V7"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 10 3 3 3-3"/></svg>',R2=L2(C2).html.join(""),Cn=6,O2=8;let yr=null;function N2(){yr=null;const t=document.activeElement;if(!(!t||t===document.body||t.tagName.toLowerCase()==="harper-render-box")){if(t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement){const e=t.selectionStart,n=t.selectionEnd,r=t.selectionDirection??void 0;yr=e!=null?()=>{t.focus({preventScroll:!0}),t.setSelectionRange(e,n,r)}:()=>t.focus({preventScroll:!0})}else if(t instanceof HTMLElement){const e=window.getSelection(),n=e&&e.rangeCount>0?e.getRangeAt(0).cloneRange():null;yr=()=>{if(t.focus({preventScroll:!0}),n){const r=window.getSelection();r&&(r.removeAllRanges(),r.addRange(n))}}}}}function F2(){const t=yr;yr=null,t&&setTimeout(()=>{try{t()}catch{}},0)}function Ba(t,e,n){return Math.max(e,Math.min(t,Math.max(e,n)))}function I2(t,e,n,r){const a=O2,i=n.width+Cn+r.width+a*2>e.width,o=i?n.height+Cn+r.height:n.height,s=t.y+t.height+3,l=s+o+a>e.height,c=Ba(l?t.y-o-3:s,a,e.height-o-a);let u=Ba(t.x,a,e.width-n.width-a);const f=u+n.width+Cn+r.width+a>e.width;f&&!i&&(u=Ba(u,a+r.width+Cn,e.width-n.width-a));const d=i?0:f?-r.width-Cn:n.width+Cn,_=i?c+n.height+Cn:Ba(c,a,e.height-r.height-a);return{top:c,left:u,flyoutLeft:d,flyoutTop:_-c,flipped:l,opensLeft:f}}function W2(t){let e,n;return Object.create({hook(r){r.isConnected?e=t(r):n=requestAnimationFrame(()=>{r.isConnected&&(e=t(r))})},unhook(){cancelAnimationFrame(n),e?.()}})}function z2(t,e){return W2(n=>{const r=n.querySelector(".harper-container"),a=n.querySelector(".harper-flyout"),i=()=>{if(!n.isConnected)return;const c=I2(t.box,{width:window.innerWidth,height:window.innerHeight},{width:r.offsetWidth,height:r.offsetHeight},{width:a.offsetWidth,height:a.offsetHeight});n.style.top=`${c.top}px`,n.style.left=`${c.left}px`,a.style.left=`${c.flyoutLeft}px`,a.style.top=`${c.flyoutTop}px`,n.style.transformOrigin=`${c.flipped?"bottom":"top"} ${c.opensLeft?"right":"left"}`,n.style.visibility="visible"},o=requestAnimationFrame(()=>{n.isConnected&&(i(),n.dataset.autofocused||(N2(),n.dataset.autofocused="true",Ps(n,t.selectedIndex)),i())}),s=c=>{c.key==="Escape"&&(c.preventDefault(),e())},l=new ResizeObserver(i);return l.observe(r),l.observe(a),window.addEventListener("resize",i),window.addEventListener("keydown",s),()=>{cancelAnimationFrame(o),l.disconnect(),window.removeEventListener("resize",i),window.removeEventListener("keydown",s)}})}function Ps(t,e){const n=t.querySelector(`#harper-suggestion-${e}`);n?.focus({preventScroll:!0}),n?.scrollIntoView({block:"nearest",inline:"nearest"})}function P2(t){switch(t){case Ge.Replace:return"Replace";case Ge.Remove:return"Remove";case Ge.InsertAfter:return"Insert After"}}function D2(t){return t.replacement_text||P2(t.kind)}function B2(t,e){switch(t.kind){case Ge.Replace:return`Click to replace "${e}" with "${t.replacement_text}"`;case Ge.Remove:return`Click to remove "${e}"`;case Ge.InsertAfter:return`Click to insert "${t.replacement_text}" after "${e}"`}}function Gr(t,e,n={}){return Me.h("button",{type:"button",className:"harper-btn",onclick:e,onmousedown:r=>r.preventDefault(),...n},t)}function U2(t){if(t)return Me.h("div",{className:"harper-hint-drawer",attributes:{role:"note","aria-live":"polite"}},[Me.h("div",{className:"harper-hint-content"},[Me.h("div",{className:"harper-hint-icon",attributes:{"aria-hidden":"true"}},"💡"),Me.h("div",{},[Me.h("div",{className:"harper-hint-title"},"Tip"),Me.h("div",{},t)])])])}function V2(t,e,n,r){const{box:a}=n,i=e===n.selectedIndex,o=t?D2(t):"No replacements",s=t?a.lint.suggestions.slice(0,e).filter(l=>l.kind===t.kind&&l.replacement_text===t.replacement_text).length:0;return Me.h("button",{key:JSON.stringify([t?.kind,t?.replacement_text,s]),id:`harper-suggestion-${e}`,type:"button",className:`harper-row${i?" harper-selected":""}`,tabIndex:i?0:-1,attributes:{role:"menuitem","aria-controls":"harper-flyout","aria-expanded":String(i)},title:t?B2(t,a.lint.problem_text):`No replacements for "${a.lint.problem_text}"`,onmouseenter:()=>n.onSelect(e),onfocus:()=>n.onSelect(e),onclick:r},[Me.h("span",{className:"harper-swatch",style:{background:br(a.lint.lint_kind)},attributes:{"aria-hidden":"true"}},[]),Me.h("span",{className:"harper-row-label"},o),Me.h("span",{className:"harper-chevron",attributes:{"aria-hidden":"true"}},"›")])}function H2(t,e,n){const r=t.lint,a=br(r.lint_kind),i=t.ignoreLint,o=[Me.h("div",{id:"harper-kind",className:"harper-kind",style:{borderBottomColor:a}},r.lint_kind_pretty),Me.h("div",{className:"harper-body",innerHTML:r.message_html},[]),Me.h("div",{className:"harper-actions"},[...i?[Gr("Dismiss",()=>n(i),{className:"harper-btn harper-dismiss",title:"Ignore this lint"})]:[],...r.lint_kind==="Spelling"&&e.addToUserDictionary?[Gr("",()=>n(()=>e.addToUserDictionary([r.problem_text])),{title:"Add word to user dictionary",attributes:{"aria-label":"Add word to user dictionary"},innerHTML:T2})]:[]])];return e.setRuleEnabled&&t.rule&&o.push(Gr(`Disable rule ${t.rule}`,()=>n(()=>e.setRuleEnabled(t.rule,!1)),{className:"harper-disable",title:`Disable the ${t.rule} rule`})),e.reportError&&o.push(Gr("Report",()=>{e.reportError(r,t.rule)},{className:"harper-report-link",title:"Report an issue with this lint"})),Me.h("div",{id:"harper-flyout",className:"harper-flyout",attributes:{role:"group","aria-labelledby":"harper-kind"}},o)}function q2(t,e){const n=[];return t.actions.openOptions&&n.push(Me.h("button",{type:"button",className:"harper-footer-row",title:"Click to go to Harper settings",onclick:()=>{t.actions.openOptions()}},[Me.h("span",{className:"harper-settings-icon",innerHTML:R2,attributes:{"aria-hidden":"true"}},[]),"Go to Harper settings"])),n.push(Gr("×",e,{className:"harper-close-btn",title:"Close",attributes:{"aria-label":"Close"}})),Me.h("div",{className:"harper-list-footer"},n)}function G2(t){return Me.h("style",{id:"harper-suggestion-style"},`
.harper-popup, .harper-popup * { box-sizing:border-box; }
.harper-popup {
 position:fixed; z-index:5000; visibility:hidden; pointer-events:none;
 font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
 font-size:13px; line-height:20px; text-align:left; color:#1f2328;
}
.harper-popup button { font-family:inherit; cursor:pointer; }
.harper-container, .harper-flyout {
 background:#ffffff; border:1px solid #d0d7de; border-radius:8px;
 box-shadow:0 4px 12px rgba(140,149,159,0.3); pointer-events:auto;
 max-height:min(400px, calc(100vh - 16px)); overflow-y:auto; overscroll-behavior:contain;
}
.harper-container { position:relative; width:min(210px, calc(100vw - 16px)); padding:4px 0; }
.harper-flyout { position:absolute; width:min(190px, calc(100vw - 16px)); overflow-x:hidden; }
.harper-row {
 display:flex; align-items:center; gap:8px; height:30px; width:100%;
 padding:0 8px 0 10px; border:0; background:transparent; text-align:left;
 transition:background 120ms ease;
}
.harper-selected, .harper-footer-row:hover, .harper-disable:hover { background:rgba(0,0,0,0.045); }
.harper-swatch { width:3px; height:16px; border-radius:2px; flex:0 0 auto; }
.harper-row-label { font-size:13px; font-weight:600; color:#1f2328; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.harper-chevron { margin-left:auto; font-size:12px; color:#8b949e; }
.harper-kind { padding:6px 10px; font-size:12px; font-weight:600; border-bottom:2px solid; }
.harper-body { padding:8px 10px; font-size:12px; line-height:17px; color:#57606a; overflow-wrap:anywhere; }
.harper-body p { margin:0; }
.harper-body p + p { margin-top:8px; }
.harper-body code { text-decoration:underline solid ${br(t)} 2px; padding:0.125rem; border-radius:0.25rem; }
.harper-actions { display:flex; flex-wrap:wrap; gap:6px; padding:0 10px 8px; }
.harper-btn {
 display:inline-flex; align-items:center; justify-content:center; gap:4px;
 border:none; border-radius:6px; padding:3px 8px; min-height:24px;
 font-size:12px; font-weight:600; line-height:18px; overflow-wrap:anywhere; max-width:100%;
 transition:background 120ms ease,transform 80ms ease;
}
.harper-btn svg { width:18px; height:18px; }
.harper-btn:hover { filter:brightness(0.92); }
.harper-btn:active { transform:scale(0.97); }
.harper-dismiss { background:#e5e5e5; color:#000000; font-weight:400; }
.harper-disable {
 display:block; width:100%; border:0; border-top:1px solid #eaeef2;
 background:transparent; padding:6px 10px; font-size:11px; color:#8b949e; text-align:left; overflow-wrap:anywhere;
}
.harper-disable:hover { color:#57606a; }
.harper-list-footer { position:relative; border-top:1px solid #eaeef2; margin-top:4px; padding:4px 26px 0 0; min-height:32px; }
.harper-footer-row { display:flex; align-items:center; gap:6px; width:100%; border:0; background:transparent; height:28px; padding:0 10px; font-size:12px; color:#57606a; text-align:left; }
.harper-close-btn { position:absolute; right:4px; top:6px; border:0; background:transparent; color:#57606a; padding:0 4px; font-size:20px; line-height:20px; }
.harper-close-btn:hover { color:#1f2328; }
.harper-settings-icon, .harper-settings-icon svg { display:block; width:14px; height:14px; }
.harper-report-link { display:block; margin:8px 10px; background:none; border:none; padding:0; color:#0969da; font-size:13px; font-weight:600; }
.harper-report-link:hover { text-decoration:underline; }
.harper-popup button:focus-visible { outline:2px solid #0969da; outline-offset:-2px; }
.harper-hint-drawer { margin-top:6px; border-top:1px solid #eaeef2; background:#f6f8fa; color:#3e4c59; border-radius:0 0 6px 6px; }
.harper-hint-content { display:flex; gap:8px; align-items:flex-start; padding:8px 10px; font-size:13px; line-height:18px; }
.harper-hint-icon { flex:0 0 auto; width:18px; height:18px; border-radius:50%; background:#fff3c4; color:#7c5e10; display:flex; align-items:center; justify-content:center; font-weight:700; }
.harper-hint-title { font-weight:600; margin-right:6px; color:#1f2328; }
.fade-in { animation:fadeIn 100ms ease-in-out; }
@keyframes fadeIn { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }
@media (max-width:421px) {
 .harper-container, .harper-flyout { max-height:min(400px, calc((100vh - 22px) / 2)); }
}
@media (prefers-reduced-motion:reduce) {
 .fade-in { animation:none; }
 .harper-row, .harper-btn { transition:none; }
 .harper-btn:active { transform:none; }
}
@media (prefers-color-scheme:dark) {
 .harper-popup, .harper-row-label, .harper-hint-title { color:#e6edf3; }
 .harper-container, .harper-flyout { background:#0d1117; border-color:#30363d; box-shadow:0 4px 12px rgba(1,4,9,0.85); }
 .harper-body, .harper-footer-row, .harper-close-btn { color:#8b949e; }
 .harper-body code { background:#1f2d3d; color:#c9d1d9; }
 .harper-selected, .harper-footer-row:hover, .harper-disable:hover { background:rgba(255,255,255,0.06); }
 .harper-disable:hover, .harper-close-btn:hover { color:#e6edf3; }
 .harper-btn { background:#21262d; color:#c9d1d9; }
 .harper-btn:hover { filter:brightness(1.15); }
 .harper-dismiss { background:#4b4b4b; color:#ffffff; }
 .harper-disable, .harper-list-footer, .harper-hint-drawer { border-top-color:#30363d; }
 .harper-hint-drawer { background:#151b23; color:#9aa4af; }
 .harper-hint-icon { background:#3a2f0b; color:#f2cc60; }
 .harper-report-link { color:#58a6ff; }
 .harper-popup button:focus-visible { outline-color:#58a6ff; }
}
`)}function J2(t){const{box:e,selectedIndex:n,actions:r,close:a}=t,i=e.lint.suggestions.length?e.lint.suggestions:[void 0],o=i[n],s=()=>{F2(),a()},l=_=>{Promise.resolve().then(_).catch(console.error).finally(s)},c=_=>{_&&(yr=null,Promise.resolve().then(()=>e.applySuggestion(_)).catch(console.error).finally(a))},u=_=>{var h;const g=_.target,m=_.currentTarget,w=g.closest(".harper-row")!=null;if(_.key==="ArrowLeft"&&g.closest(".harper-flyout"))_.preventDefault(),_.stopPropagation(),Ps(m,n);else if(w&&["ArrowDown","ArrowUp","ArrowRight","Enter"].includes(_.key))if(_.preventDefault(),_.stopPropagation(),_.key==="Enter")c(o);else if(_.key==="ArrowRight")(h=m.querySelector(".harper-flyout button"))==null||h.focus({preventScroll:!0});else{const b=(n+(_.key==="ArrowDown"?1:-1)+i.length)%i.length;t.onSelect(b),Ps(m,b)}},f=i.map((_,h)=>V2(_,h,t,()=>c(_))),d=U2(t.hint);return Me.h("div",{key:"harper-suggestion-popup",className:"harper-popup fade-in",onkeydown:u,"harper-popup-hook":z2(t,s)},[G2(e.lint.lint_kind),Me.h("div",{className:"harper-container"},[Me.h("div",{attributes:{role:"menu","aria-label":"Suggestions for this lint","aria-activedescendant":`harper-suggestion-${n}`}},f),q2(t,s),...d?[d]:[]]),H2(e,r,l)])}function Y2(t,e,n=300){let r=0;const a=i=>{if(i.key.toLowerCase()!==e.toLowerCase())return;const o=performance.now(),s=o-r;s<=n&&s>10&&t(),r=o};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)}class K2{constructor(e){X(this,"currentLintBoxes"),X(this,"popupLint"),X(this,"selectedSuggestion",0),X(this,"currentHint"),X(this,"currentHintFor"),X(this,"renderBox"),X(this,"pointerDownCallback"),X(this,"activationKeyListener"),X(this,"actions"),X(this,"close",()=>{this.popupLint=void 0,this.selectedSuggestion=0,this.render()}),X(this,"onOutsidePointerDown",n=>{const r=n.composedPath();r.includes(this.renderBox.getShadowHost())||this.currentLintBoxes.some(a=>r.includes(a.source))||this.close()}),this.actions=e,this.currentLintBoxes=[],this.currentHint=void 0,this.currentHintFor=void 0,this.renderBox=new J_(()=>document.body),this.renderBox.getShadowHost().popover="manual",this.renderBox.getShadowHost().style.pointerEvents="none",this.renderBox.getShadowHost().style.border="none",this.pointerDownCallback=n=>{this.onPointerDown(n)},this.updateActivationKeyListener()}updateActivationKeyListener(){this.activationKeyListener&&(this.activationKeyListener(),this.activationKeyListener=void 0);const e=this.actions.getActivationKey;e&&e().then(n=>{n!=="off"&&(this.activationKeyListener=Y2(()=>this.openClosestToCaret(),n))})}openClosestToCaret(){const e=this.renderBox.getShadowHost(),n=document.activeElement===e,r=n?null:Kd(),a=r?Bd(r,this.currentLintBoxes):n?this.popupLint:void 0;a==null||a<0||(this.popupLint=a,this.selectedSuggestion=0,this.render(),n&&this.focusSelectedSuggestion())}focusSelectedSuggestion(){var e;const n=(e=this.renderBox.getShadowHost().shadowRoot)==null?void 0:e.querySelector(".harper-selected");n?.focus({preventScroll:!0}),n?.scrollIntoView({block:"nearest"})}onPointerDown(e){for(let n=0;n<this.currentLintBoxes.length;n++){const r=this.currentLintBoxes[n];if(e.composedPath().includes(r.source)&&Fn([e.x,e.y],r)){this.popupLint!=null&&this.close(),this.popupLint=n,this.selectedSuggestion=0,this.render();return}}this.close()}render(){let e=Xa("div",{},[]);const n=this.renderBox.getShadowHost();if(this.updateHint(),this.popupLint!=null&&this.popupLint<this.currentLintBoxes.length){const r=this.currentLintBoxes[this.popupLint];e=J2({box:r,selectedIndex:this.selectedSuggestion,onSelect:a=>{a!==this.selectedSuggestion&&(this.selectedSuggestion=a,this.render())},actions:this.actions,hint:this.currentHint??null,close:this.close})}this.renderBox.render(e),this.popupLint!=null&&this.popupLint<this.currentLintBoxes.length?(document.addEventListener("pointerdown",this.onOutsidePointerDown,!0),n.style.setProperty("visibility","visible","important"),n.isConnected&&!n.matches(":popover-open")&&n.showPopover()):(document.removeEventListener("pointerdown",this.onOutsidePointerDown,!0),n.style.setProperty("visibility","hidden","important"),n.isConnected&&n.matches(":popover-open")&&n.hidePopover())}updateHint(){if(this.popupLint==null){this.currentHint=void 0,this.currentHintFor=void 0;return}if(this.currentHintFor!==this.popupLint||this.currentHint===void 0){const e=Array.isArray(Uu)?Uu.filter(r=>typeof r=="string"):[],n=Math.random()<.1&&e.length>0;this.currentHint=n?e[Math.floor(Math.random()*e.length)]:null,this.currentHintFor=this.popupLint}}updateLintBoxes(e){var n;const r=this.renderBox.getShadowHost(),a=document.activeElement===r;this.currentLintBoxes.forEach(l=>{l.source.removeEventListener("pointerdown",this.pointerDownCallback)});const i=this.popupLint==null?void 0:this.currentLintBoxes[this.popupLint],o=i?.lint.suggestions[this.selectedSuggestion];if(i){const l=this.currentLintBoxes.slice(0,this.popupLint).filter(u=>u.lint.context_hash===i.lint.context_hash&&u.source===i.source&&u.lint.span.start===i.lint.span.start&&u.lint.span.end===i.lint.span.end).length,c=e.flatMap((u,f)=>u.lint.context_hash===i.lint.context_hash&&u.source===i.source&&u.lint.span.start===i.lint.span.start&&u.lint.span.end===i.lint.span.end&&u.lint.source===i.lint.source?[f]:[]);this.popupLint=c[Math.min(l,c.length-1)]}const s=this.popupLint==null?void 0:e[this.popupLint];this.selectedSuggestion=s&&o?Math.max(0,s.lint.suggestions.findIndex(l=>l.kind===o.kind&&l.replacement_text===o.replacement_text)):0,this.popupLint!=null&&(this.currentHintFor=this.popupLint),this.currentLintBoxes=e,this.currentLintBoxes.forEach(l=>{l.source.addEventListener("pointerdown",this.pointerDownCallback)}),this.render(),a&&this.popupLint!=null&&!((n=r.shadowRoot)!=null&&n.activeElement)&&this.focusSelectedSuggestion()}}function X2(t,e){if(t===e)return null;let n=0;const r=Math.min(t.length,e.length);for(;n<r&&t[n]===e[n];)n++;let a=0;for(;a<t.length-n&&a<e.length-n&&t[t.length-1-a]===e[e.length-1-a];)a++;const i=n,o=t.length-a,s=n,l=e.length-a;return{oldStart:i,oldEnd:o,newStart:s,newEnd:l,delta:l-s-(o-i)}}function Z2(t,e){return e==null?{...t}:t.end<=e.oldStart?{...t}:t.start>=e.oldEnd?{start:t.start+e.delta,end:t.end+e.delta}:null}function Q2(t,e){if(t.source===e)return t;const n=Z2(t.span,X2(t.source,e));return n==null||e.slice(n.start,n.end)!==t.problem_text?null:{...t,span:n,source:e}}const xf=["focus","keyup","keydown","paste","change","scroll","input"],e5=["resize","scroll","keyup","keydown","input","compositionend","selectionchange"];class t5{constructor(e,n){X(this,"highlights"),X(this,"popupHandler"),X(this,"targets"),X(this,"scrollableAncestors"),X(this,"lintRequest",null),X(this,"renderRequested",!1),X(this,"lintDelayTimer",null),X(this,"lastInputAt",0),X(this,"lastLints",[]),X(this,"lastBoxes",[]),X(this,"lastLintBoxes",[]),X(this,"updateEventCallback"),X(this,"lintProvider"),X(this,"actions"),this.lintProvider=e,this.actions=n,this.highlights=new fw,this.popupHandler=new K2({getActivationKey:n.getActivationKey,openOptions:n.openOptions,addToUserDictionary:n.addToUserDictionary,reportError:n.reportError,setRuleEnabled:n.setRuleEnabled}),this.targets=new Set,this.scrollableAncestors=new Set,this.lastLints=[],this.updateEventCallback=()=>{this.lastInputAt=Date.now(),this.update()};const r=()=>{this.update(),setTimeout(r,1e3)};r(),this.attachWindowListeners()}onScreenTargets(){const e=[];for(const n of this.targets)sm(n)&&e.push(n);return e}async update(){this.requestRender(),this.requestLintUpdate()}async requestLintUpdate(e=!1){var n,r;const a=await((r=(n=this.actions).getDelay)==null?void 0:r.call(n))??0,i=a-(Date.now()-this.lastInputAt);if(!e&&a>0&&i>0){this.lintDelayTimer!=null&&window.clearTimeout(this.lintDelayTimer),this.lintDelayTimer=window.setTimeout(()=>{this.lintDelayTimer=null,this.requestLintUpdate()},i);return}if(this.lintDelayTimer!=null&&(window.clearTimeout(this.lintDelayTimer),this.lintDelayTimer=null),this.lintRequest!=null){if(!e)return;try{await this.lintRequest}catch{}await this.requestLintUpdate(!0);return}if(this.targets.size!==0){const o=Promise.all(this.onScreenTargets().map(async l=>{if(!document.contains(l))return this.targets.delete(l),{target:null,lints:{}};const{text:c,isCM:u,newLineIndices:f}=this.getTargetText(l);if(!c||c.length>12e4)return{target:null,lints:{}};const d=r5(l);let _=await this.lintProvider(c,window.location.hostname,{forceAllHeadings:om(l),language:d});if(u){_=window.structuredClone(_);for(const h of Object.values(_))for(const g of h){const m=f.findIndex(b=>b>g.span.start),w=f.findIndex(b=>b>g.span.end);g.span.start-=m,g.span.end-=w}}return{target:l,lints:_}}));this.lintRequest=o;const s=await o.finally(()=>{this.lintRequest===o&&(this.lintRequest=null)});this.lastLints=s.filter(l=>l.target!=null),this.requestRender()}}async lintHotkey(){var e,n;const r=await((n=(e=this.actions).getHotkey)==null?void 0:n.call(e));document.addEventListener("keydown",a=>{var i;if(!r)return;const o=a.key.toLowerCase(),s=r.key.toLowerCase(),l=a.ctrlKey===r.modifiers.includes("Ctrl"),c=a.altKey===r.modifiers.includes("Alt"),u=a.shiftKey===r.modifiers.includes("Shift");if(o===s&&l&&c&&u){a.preventDefault(),a.stopImmediatePropagation();const f=Kd();if(f!=null){const d=Bd(f,this.lastBoxes);if(d<0)return;const _=this.lastBoxes[d],h=_.lint.suggestions;h.length>0?_.applySuggestion(h[0]):(i=_.ignoreLint)==null||i.call(_)}}},{capture:!0})}async addTarget(e){this.targets.has(e)||(this.targets.add(e),this.update(),this.attachTargetListeners(e))}async removeTarget(e){if(this.targets.has(e))this.targets.delete(e),this.update(),this.detachTargetListeners(e);else throw new Error("HTMLElement not added.")}getLastIgnorableLintBoxes(){return this.lastLintBoxes}attachTargetListeners(e){for(const i of xf)e.addEventListener(i,this.updateEventCallback);const n=new MutationObserver(this.updateEventCallback),r={subtree:!0,characterData:!0};e.tagName==null?n.observe(e.parentElement,r):n.observe(e,r);const a=n5(e);for(const i of a)this.scrollableAncestors.has(i)||(this.scrollableAncestors.add(i),i.addEventListener("scroll",this.updateEventCallback,{capture:!0,passive:!0}))}detachTargetListeners(e){for(const n of xf)e.removeEventListener(n,this.updateEventCallback)}attachWindowListeners(){this.lintHotkey();for(const e of e5)window.addEventListener(e,this.updateEventCallback)}getTargetText(e){let n=null;const r=e instanceof HTMLElement&&el(e)!=null;if(r){const o=e.querySelectorAll(".cm-line");n=Array.from(o).map(s=>s.textContent).reduce((s,l)=>`${s}${l??""}
`,"")}else e instanceof HTMLElement&&Xd(e)?n=e.textContent:n=e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement?e.value:e.innerText;const a=[];let i=0;for(const o of n??"")o==`
`&&a.push(i),i++;return{text:n,isCM:r,newLineIndices:a}}requestRender(){this.renderRequested||(this.renderRequested=!0,requestAnimationFrame(()=>{const e=this.lastLints.flatMap(({target:n,lints:r})=>{if(!n)return[];const{text:a,isCM:i}=this.getTargetText(n);return a==null?[]:Object.entries(r).flatMap(([o,s])=>s.flatMap(l=>{const c=i?l.source===a?l:null:Q2(l,a);return c==null?[]:Tm(n,c,o,{ignoreLint:this.actions.ignoreLint?async u=>{var f,d;await((d=(f=this.actions).ignoreLint)==null?void 0:d.call(f,u)),await this.requestLintUpdate(!0)}:void 0})}))});this.lastLintBoxes=e,this.highlights.renderLintBoxes(e),this.popupHandler.updateLintBoxes(e),this.renderRequested=!1,this.lastBoxes=e}))}}function n5(t){const e=[],n=document.scrollingElement||document.documentElement;let r=t.parentElement;for(;r;){const a=window.getComputedStyle(r),{overflowY:i,overflowX:o}=a,s=i.includes("auto")||i.includes("scroll"),l=o.includes("auto")||o.includes("scroll");(s||l)&&e.push(r),r=r.parentElement}return n&&e[e.length-1]!==n&&e.push(n),e}function r5(t){if(!(t instanceof Element))return;const e=t.getAttribute("data-language");switch(e){case"plaintext":case"markdown":case"typst":return e;default:return}}const Ds=[{value:"sans",label:"Sans",sample:"Aa",stack:"'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif"},{value:"serif",label:"Serif",sample:"Aa",stack:"'Iowan Old Style', 'New York', Georgia, serif"},{value:"mono",label:"Mono",sample:"Aa",stack:"'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"}],a5=[12,13,14,15,16,17,18,20,22],Xo="default",Kg=["Spelling","Typo","Capitalization","Grammar","Agreement","BoundaryError","Punctuation","Usage","WordChoice","WordOrder","Style","Readability","Enhancement","Redundancy","Repetition","Formatting","Regionalism","Nonstandard","Eggcorn","Malapropism","Miscellaneous"],Xg={Agreement:{label:"Agreement",dotClass:"bg-emerald-500",haloClass:"bg-emerald-100",textClass:"text-emerald-700",softClass:"bg-emerald-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-emerald-500/10"},BoundaryError:{label:"Boundary",dotClass:"bg-indigo-500",haloClass:"bg-indigo-100",textClass:"text-indigo-700",softClass:"bg-indigo-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-indigo-500/10"},Capitalization:{label:"Capitalization",dotClass:"bg-rose-500",haloClass:"bg-rose-100",textClass:"text-rose-700",softClass:"bg-rose-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-rose-500/10"},Eggcorn:{label:"Eggcorn",dotClass:"bg-violet-500",haloClass:"bg-violet-100",textClass:"text-violet-700",softClass:"bg-violet-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-violet-500/10"},Enhancement:{label:"Enhancement",dotClass:"bg-amber-600",haloClass:"bg-amber-100",textClass:"text-amber-700",softClass:"bg-amber-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-amber-600/10"},Formatting:{label:"Formatting",dotClass:"bg-slate-500",haloClass:"bg-slate-100",textClass:"text-slate-700",softClass:"bg-slate-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-slate-500/10"},Grammar:{label:"Grammar",dotClass:"bg-emerald-600",haloClass:"bg-emerald-100",textClass:"text-emerald-700",softClass:"bg-emerald-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-emerald-600/10"},Malapropism:{label:"Malapropism",dotClass:"bg-fuchsia-500",haloClass:"bg-fuchsia-100",textClass:"text-fuchsia-700",softClass:"bg-fuchsia-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-fuchsia-500/10"},Miscellaneous:{label:"Miscellaneous",dotClass:"bg-sky-500",haloClass:"bg-sky-100",textClass:"text-sky-700",softClass:"bg-sky-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-sky-500/10"},Nonstandard:{label:"Nonstandard",dotClass:"bg-stone-500",haloClass:"bg-stone-100",textClass:"text-stone-700",softClass:"bg-stone-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-stone-500/10"},Punctuation:{label:"Punctuation",dotClass:"bg-cyan-600",haloClass:"bg-cyan-100",textClass:"text-cyan-700",softClass:"bg-cyan-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-cyan-600/10"},Readability:{label:"Readability",dotClass:"bg-violet-600",haloClass:"bg-violet-100",textClass:"text-violet-700",softClass:"bg-violet-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-violet-600/10"},Redundancy:{label:"Redundancy",dotClass:"bg-amber-600",haloClass:"bg-amber-100",textClass:"text-amber-700",softClass:"bg-amber-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-amber-600/10"},Regionalism:{label:"Regionalism",dotClass:"bg-teal-700",haloClass:"bg-teal-100",textClass:"text-teal-700",softClass:"bg-teal-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-teal-700/10"},Repetition:{label:"Repetition",dotClass:"bg-amber-700",haloClass:"bg-amber-100",textClass:"text-amber-700",softClass:"bg-amber-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-amber-700/10"},Spelling:{label:"Spelling",dotClass:"bg-rose-500",haloClass:"bg-rose-100",textClass:"text-rose-700",softClass:"bg-rose-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-rose-500/10"},Style:{label:"Style",dotClass:"bg-blue-500",haloClass:"bg-blue-100",textClass:"text-blue-700",softClass:"bg-blue-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-blue-500/10"},Typo:{label:"Typo",dotClass:"bg-rose-500",haloClass:"bg-rose-100",textClass:"text-rose-700",softClass:"bg-rose-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-rose-500/10"},Usage:{label:"Usage",dotClass:"bg-green-600",haloClass:"bg-green-100",textClass:"text-green-700",softClass:"bg-green-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-green-600/10"},WordChoice:{label:"Word Choice",dotClass:"bg-blue-600",haloClass:"bg-blue-100",textClass:"text-blue-700",softClass:"bg-blue-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-blue-600/10"},WordOrder:{label:"Word Order",dotClass:"bg-indigo-600",haloClass:"bg-indigo-100",textClass:"text-indigo-700",softClass:"bg-indigo-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-indigo-600/10"}},i5=Kg.map(t=>[t,Xg[t]]);function Sf(){return Object.fromEntries(Kg.map(t=>[t,0]))}function o5(t){return t==="serif"||t==="mono"?t:"sans"}function s5(t){return Ds.find(e=>e.value===t)?.stack??Ds[0].stack}function kf(t){if(t===Xo||t==null||t==="")return Xo;const e=typeof t=="number"?t:Number(t);if(!Number.isFinite(e))return Xo;const n=Math.round(e);return Math.min(28,Math.max(11,n))}function Ua(t){return t.replacement_text!==""?t.replacement_text:String(t.kind)}function l5(t){return t.trim().match(/\S+/g)?.length??0}var c5=de('<button type="button"> </button>'),u5=de('<div class="flex flex-1 flex-wrap justify-end gap-1.5"></div>'),f5=de('<span class="mr-auto text-xs text-stone-400">No suggestions available.</span>'),d5=de('<div class="flex flex-col gap-2.5 px-3 pt-0.5 pb-3"><button type="button" class="m-0 flex w-full flex-col border-0 bg-transparent p-0 text-left text-[13px] leading-[1.4] font-medium text-stone-950"><span><!></span></button> <button type="button" class="m-0 block max-h-[84px] w-full overflow-hidden rounded-[7px] border-[0.5px] border-[rgba(28,26,22,0.09)] bg-[#fbfaf6] px-3 py-2.5 text-left text-xs leading-[1.45] text-stone-700" aria-label="Focus problem in editor"><span class="text-stone-500"> </span> <mark> </mark> <span class="text-stone-500"> </span></button> <div class="flex items-center justify-end gap-2"><!> <button type="button" class="h-[26px] shrink-0 border-0 bg-transparent px-1 text-[12.5px] font-medium text-stone-500 shadow-none">Ignore</button></div></div>'),_5=de('<div role="group"><button type="button" class="m-0 flex min-h-8 w-full items-center gap-2 border-0 bg-transparent px-3 py-2 text-left text-inherit"><span><span></span></span> <span class="text-[12.5px] leading-[1.1] font-semibold text-stone-950"> </span> <span><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6 8 10 12 6"></path></svg></span></button> <!></div>');function g5(t,e){Mn(e,!1);const n=ue();let r=te(e,"lint",8),a=te(e,"open",8,!1),i=te(e,"active",8,!1),o=te(e,"onToggleOpen",8),s=te(e,"focusError",8),l=te(e,"onActivate",8,()=>{}),c=te(e,"onApply",8),u=te(e,"onIgnore",8,()=>{}),f=te(e,"snippet",8),d=ue(null);const _="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]",h="h-[26px] max-w-full overflow-hidden text-ellipsis rounded-full px-[11px] text-[12.5px] font-semibold";function g(){l()(),s()?.()}De(()=>Z(r()),()=>{T(n,Xg[r().lint_kind])}),De(()=>(Z(a()),p(d)),()=>{a()&&p(d)!=null&&requestAnimationFrame(()=>{const j=p(d)?.closest("[data-problems-scroller]");if(!(j instanceof HTMLElement)||p(d)==null)return;const C=p(d).offsetTop,H=C+p(d).offsetHeight,q=j.scrollTop,U=q+j.clientHeight;C<q+8?j.scrollTo({top:Math.max(0,C-14),behavior:"smooth"}):H>U-8&&j.scrollTo({top:H-j.clientHeight+14,behavior:"smooth"})})}),Ei(),Mi();var m=_5(),w=O(m),b=O(w),k=O(b),E=z(b,2),x=O(E),S=z(E,2),A=O(S);Ve(A,0,fr(_));var $=z(w,2);{var L=j=>{var C=d5(),H=O(C),q=O(H),U=O(q);S0(U,()=>(Z(r()),V(()=>r().message_html)));var P=z(H,2),D=O(P),Q=O(D),fe=z(D,2),pe=O(fe),Ue=z(fe,2),je=O(Ue),Oe=z(P,2),he=O(Oe);{var ke=ee=>{var Ae=u5();qn(Ae,5,()=>(Z(r()),V(()=>r().suggestions)),Hn,(Ze,lt,Tt)=>{var rt=c5(),R=O(rt);We((B,ce)=>{Ve(rt,1,(p(n),V(()=>`${h} ${Tt===0?`border-transparent ${p(n).softClass} ${p(n).textClass} shadow-none`:"border-[0.5px] border-stone-300 bg-linear-to-b from-white to-stone-50 text-stone-950 shadow-sm shadow-stone-950/5"}`))),Pn(rt,"title",B),Re(R,ce)},[()=>(Z(Ua),p(lt),V(()=>`Replace with "${Ua(p(lt))}"`)),()=>(Z(Ua),p(lt),V(()=>Ua(p(lt))))]),Te("click",rt,B=>{B.stopPropagation(),c()?.(p(lt))}),ne(Ze,rt)}),ne(ee,Ae)},Ee=ee=>{var Ae=f5();ne(ee,Ae)};Be(he,ee=>{Z(r()),V(()=>r().suggestions&&r().suggestions.length>0)?ee(ke):ee(Ee,!1)})}var Xe=z(he,2);We(()=>{Re(Q,`${Z(f()),V(()=>f().prefixEllipsis?"...":"")??""}${Z(f()),V(()=>f().prefix)??""}`),Ve(fe,1,(p(n),V(()=>`rounded-[3px] px-0.5 font-semibold ${p(n).softClass} ${p(n).textClass}`))),Re(pe,(Z(f()),V(()=>f().problem))),Re(je,`${Z(f()),V(()=>f().suffix)??""}${Z(f()),V(()=>f().suffixEllipsis?"...":"")??""}`)}),Te("click",H,g),Te("click",P,g),Te("click",Xe,ee=>{ee.stopPropagation(),u()()}),Nn(1,C,()=>tc,()=>({duration:130})),Nn(2,C,()=>tc,()=>({duration:130})),ne(j,C)};Be($,j=>{a()&&j(L)})}Er(m,j=>T(d,j),()=>p(d)),We(()=>{Ve(m,1,(Z(i()),p(n),V(()=>`shrink-0 overflow-hidden rounded-[10px] border-[0.5px] bg-white shadow-sm shadow-stone-950/5 transition-[box-shadow,border-color] duration-150 ${i()?p(n).activeClass:"border-[rgba(28,26,22,0.14)]"}`))),Pn(w,"aria-expanded",a()),Ve(b,1,(p(n),V(()=>`inline-flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full ${p(n).haloClass}`))),Ve(k,1,(p(n),V(()=>`h-[7px] w-[7px] rounded-full ${p(n).dotClass}`))),Re(x,(p(n),V(()=>p(n).label))),Ve(S,1,`ml-auto inline-flex shrink-0 text-stone-500 transition-transform duration-150 ${a()?"rotate-180":""}`)}),Te("click",w,function(...j){o()?.apply(this,j)}),Te("mouseenter",m,function(...j){l()?.apply(this,j)}),ne(t,m),jn()}var p5=de('<div id="problem-actions-menu" role="menu" class="absolute top-[calc(100%+6px)] right-0 z-30 w-36 overflow-hidden rounded-lg border-[0.5px] border-[rgba(28,26,22,0.16)] bg-white py-1 shadow-lg shadow-stone-950/10"><button type="button" role="menuitem">Open All</button> <button type="button" role="menuitem">Close All</button> <div class="my-1 h-px bg-[rgba(28,26,22,0.09)]"></div> <button type="button" role="menuitem">Ignore All</button></div>'),h5=de('<div class="grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1 whitespace-nowrap text-[10px] font-medium text-stone-500"><span><span></span></span> <span class="overflow-hidden text-ellipsis"> </span> <strong class="font-medium text-stone-400 tabular-nums"> </strong></div>'),m5=de('<div class="grid grid-cols-3 gap-x-2 gap-y-[7px] overflow-hidden border-b-[0.5px] border-[rgba(28,26,22,0.09)] px-[18px] pb-3" aria-label="Problem lint kinds"></div>'),b5=de('<div class="m-auto max-w-[220px] px-3 py-7 text-center text-[12.5px] leading-[1.55] text-stone-500"><div aria-hidden="true" class="mb-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-b from-emerald-400 to-emerald-600 text-white shadow-sm shadow-emerald-900/20"><svg viewBox="0 0 16 16" class="h-4 w-4 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M3.5 8.5 6.5 11.5 12.5 5"></path></svg></div> <strong class="mb-0.5 block font-semibold text-stone-950">All clear</strong> <p class="m-0">Harper has no suggestions for this document.</p></div>'),w5=de('<div class="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/35 px-4" role="presentation"><div class="w-full max-w-[340px] rounded-lg border-[0.5px] border-[rgba(28,26,22,0.16)] bg-white p-4 text-stone-950 shadow-2xl shadow-stone-950/20" role="dialog" aria-modal="true" aria-labelledby="ignore-all-title" tabindex="-1"><h3 id="ignore-all-title" class="!m-0 !p-0 text-[15px] leading-5 font-semibold">Ignore all problems?</h3> <p class="mt-2 mb-4 text-[13px] leading-5 text-stone-600"> </p> <div class="flex justify-end gap-2"><button type="button" class="h-8 rounded-md border-[0.5px] border-stone-300 bg-linear-to-b from-white to-stone-50 px-3 text-[13px] font-medium text-stone-700 shadow-sm shadow-stone-950/5">Cancel</button> <button type="button" class="h-8 rounded-md border-[0.5px] border-red-700 bg-red-700 px-3 text-[13px] font-medium text-white shadow-sm shadow-red-950/10 disabled:opacity-50">Ignore All</button></div></div></div>'),y5=de('<aside class="flex min-h-0 w-[320px] flex-[0_0_320px] overflow-hidden border-l-[0.5px] border-[rgba(28,26,22,0.14)] bg-[#f4f0e7] @max-[760px]:w-full @max-[760px]:flex-[0_0_42%] @max-[760px]:border-t-[0.5px] @max-[760px]:border-l-0 svelte-166hzxe" aria-label="Problems"><div class="flex min-h-0 flex-1 flex-col"><header class="flex items-center gap-1.5 px-3.5 pt-2.5 pb-2"><h2 class="m-0! flex min-w-0 flex-1 items-center p-0! text-[15px]! leading-none! font-bold! text-stone-950 font-[inherit]!"><button type="button" class="m-0! inline-flex min-w-0 items-center gap-1.5 border-0 bg-transparent p-0! text-left text-[15px]! leading-none! font-[inherit] text-inherit">Problems <span class="inline-flex h-[18px] min-w-5 items-center justify-center rounded-full bg-amber-700 px-1.5 text-[11px] font-semibold text-white tabular-nums"> </span> <span><svg viewBox="0 0 16 16" aria-hidden="true" class="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M4 6 8 10 12 6"></path></svg></span></button></h2> <div class="relative flex shrink-0 items-center gap-1.5"><button type="button" aria-label="Hide problems sidebar" title="Hide problems sidebar"><svg viewBox="0 0 20 20" aria-hidden="true" class="h-[18px] w-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"><rect x="3.5" y="3" width="13" height="14" rx="3"></rect><path d="M13.25 5.5v9"></path></svg></button> <button type="button" aria-label="More problem actions" aria-haspopup="menu" title="More problem actions"><svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4 fill-current"><circle cx="8" cy="4" r="1.15"></circle><circle cx="8" cy="8" r="1.15"></circle><circle cx="8" cy="12" r="1.15"></circle></svg></button> <!></div></header> <!> <div class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto px-3.5 pt-3.5 pb-6" data-problems-scroller=""><!></div></div></aside> <!>',1);function v5(t,e){Mn(e,!1);const n=ue(),r=ue(),a=ue(),i=ue(),o=ue();let s=te(e,"lintBoxes",24,()=>[]),l=te(e,"activeLintId",8,null),c=te(e,"focusLint",8,()=>{}),u=te(e,"onActivate",8,()=>{}),f=te(e,"onApplied",8,()=>{}),d=te(e,"onIgnored",8,()=>{}),_=te(e,"onIgnoreAll",8,null),h=te(e,"onHideSidebar",8,()=>{}),g=ue(new Set),m=ue(null),w=ue(""),b=ue(!0),k=ue(!1),E=ue(!1);const x="inline-flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent text-stone-600 shadow-none transition-colors duration-150 hover:text-stone-950 disabled:opacity-50",S="m-0 flex h-8 w-full items-center border-0 bg-transparent px-3 text-left text-[13px] font-medium text-stone-700 shadow-none hover:bg-stone-100 disabled:text-stone-300 disabled:hover:bg-transparent",A="m-0 flex h-8 w-full items-center border-0 bg-transparent px-3 text-left text-[13px] font-medium text-red-700 shadow-none hover:bg-red-50 disabled:text-stone-300 disabled:hover:bg-transparent";async function $(){if(_()!=null)await _()();else{const F=[...s()];for(const K of F)await K.ignoreLint?.()}T(g,new Set),d()()}function L(){T(k,!1),T(E,!1),h()()}function j(){T(g,new Set(s().map(F=>F.lint.context_hash))),T(k,!1)}function C(){T(g,new Set),T(k,!1)}function H(){T(k,!1),T(E,!0)}async function q(){T(E,!1),await $()}function U(){T(E,!1)}function P(F){F.target===F.currentTarget&&U()}function D(F){!p(k)||p(m)==null||F.target==null||p(m).contains(F.target)||T(k,!1)}function Q(F){if(F.key==="Escape"){if(p(E)){F.preventDefault(),T(E,!1);return}p(k)&&(F.preventDefault(),T(k,!1))}}function fe(F){const K=new Set(p(g));K.has(F)?K.delete(F):K.add(F),T(g,K)}function pe(F){return F.replace(/\s+/g," ").trim()}function Ue(F){let K=F.lint,me=K.source||F.source.textContent||"";const ze=60,ye=Math.max(0,K.span.start-ze),mt=Math.min(me.length,K.span.end+ze);let et=me.slice(ye,K.span.start),St=me.slice(K.span.end,mt);et=pe(et);const Ln=pe(K.problem_text);return St=pe(St),{prefix:et,problem:Ln,suffix:St,prefixEllipsis:ye>0,suffixEllipsis:mt<me.length}}De(()=>Z(s()),()=>{T(o,s().map(F=>F.lint.context_hash).join("|"))}),De(()=>(p(o),p(w),Z(s()),p(g)),()=>{if(p(o)!==p(w)){T(w,p(o));const F=new Set(s().map(me=>me.lint.context_hash)),K=new Set([...p(g)].filter(me=>F.has(me)));K.size===0&&s().length>0&&K.add(s()[0].lint.context_hash),T(g,K)}}),De(()=>(Z(s()),p(g)),()=>{T(n,s().length>0&&p(g).size===s().length)}),De(()=>Z(s()),()=>{T(r,`${s().length} ${s().length===1?"problem":"problems"}`)}),De(()=>(Z(s()),Sf),()=>{T(a,s().reduce((F,K)=>(F[K.lint.lint_kind]+=1,F),Sf()))}),De(()=>p(a),()=>{T(i,i5.filter(([F])=>p(a)[F]>0))}),Ei(),Mi();var je=y5();Te("click",ai,D),Te("keydown",ai,Q);var Oe=aa(je),he=O(Oe),ke=O(he),Ee=O(ke),Xe=O(Ee),ee=z(O(Xe)),Ae=O(ee),Ze=z(ee,2),lt=z(Ee,2),Tt=O(lt);Ve(Tt,1,fr(x));var rt=z(Tt,2);Ve(rt,1,fr(x));var R=z(rt,2);{var B=F=>{var K=p5(),me=O(K);Ve(me,1,fr(S));var ze=z(me,2);Ve(ze,1,fr(S));var ye=z(ze,4);Ve(ye,1,fr(A)),We(()=>{me.disabled=(Z(s()),p(n),V(()=>s().length===0||p(n))),ze.disabled=(Z(s()),p(g),V(()=>s().length===0||p(g).size===0)),ye.disabled=(Z(s()),V(()=>s().length===0))}),Te("click",me,j),Te("click",ze,C),Te("click",ye,H),Nn(3,K,()=>Ka,()=>({duration:100})),ne(F,K)};Be(R,F=>{p(k)&&F(B)})}Er(lt,F=>T(m,F),()=>p(m));var ce=z(ke,2);{var Le=F=>{var K=m5();qn(K,5,()=>p(i),Hn,(me,ze)=>{var ye=ri(()=>up(p(ze),2));let mt=()=>p(ye)[0],et=()=>p(ye)[1];var St=h5(),Ln=O(St),Bi=O(Ln),Sl=z(Ln,2),tp=O(Sl),np=z(Sl,2),rp=O(np);We(()=>{Ve(Ln,1,(et(),V(()=>`inline-flex h-[9px] w-[9px] shrink-0 items-center justify-center rounded-full ${et().haloClass}`))),Ve(Bi,1,(et(),V(()=>`h-[7px] w-[7px] rounded-full ${et().dotClass}`))),Re(tp,(et(),V(()=>et().label))),Re(rp,(p(a),mt(),V(()=>p(a)[mt()])))}),ne(me,St)}),ne(F,K)};Be(ce,F=>{p(b),p(i),V(()=>p(b)&&p(i).length>0)&&F(Le)})}var ct=z(ce,2),N=O(ct);{var G=F=>{var K=b5();ne(F,K)},Ne=F=>{var K=li(),me=aa(K);qn(me,1,s,Hn,(ze,ye)=>{const mt=fn(()=>(p(ye),V(()=>p(ye).lint.context_hash)));{let et=fn(()=>(p(ye),V(()=>Ue(p(ye))))),St=fn(()=>(p(g),Z(p(mt)),V(()=>p(g).has(p(mt))))),Ln=fn(()=>l()===p(mt));g5(ze,{get lint(){return p(ye),V(()=>p(ye).lint)},get snippet(){return p(et)},get open(){return p(St)},get active(){return p(Ln)},onToggleOpen:()=>fe(p(mt)),focusError:()=>c()(p(ye)),onActivate:()=>u()(p(ye)),onApply:Bi=>{p(ye).applySuggestion(Bi),f()()},onIgnore:async()=>{await p(ye).ignoreLint?.(),d()()}})}}),ne(F,K)};Be(N,F=>{Z(s()),V(()=>s().length===0)?F(G):F(Ne,!1)})}var Fe=z(Oe,2);{var Jt=F=>{var K=w5(),me=O(K),ze=z(O(me),2),ye=O(ze),mt=z(ze,2),et=O(mt),St=z(et,2);We(()=>{Re(ye,`This will ignore ${p(r)??""} in the current document.`),St.disabled=(Z(s()),V(()=>s().length===0))}),Te("click",et,U),Te("click",St,q),Nn(3,K,()=>Ka,()=>({duration:120})),Te("click",K,P),ne(F,K)};Be(Fe,F=>{p(E)&&F(Jt)})}We(()=>{Pn(Xe,"aria-expanded",p(b)),Re(Ae,(Z(s()),V(()=>s().length))),Ve(Ze,1,`inline-flex shrink-0 text-stone-500 transition-transform duration-150 ${p(b)?"rotate-180":""}`),Pn(rt,"aria-expanded",p(k))}),Te("click",Xe,()=>T(b,!p(b))),Te("click",Tt,L),Te("click",rt,()=>T(k,!p(k))),Nn(3,he,()=>Ka,()=>({duration:250})),Nn(3,Oe,()=>Qh,()=>({x:320,duration:250,easing:em})),ne(t,je),jn()}var x5=de('<button type="button"> </button>'),S5=de("<option> </option>"),k5=de(`<footer class="flex min-h-[26px] flex-[0_0_26px] items-center gap-3.5 border-t-[0.5px] border-[rgba(28,26,22,0.09)] bg-[#f4f0e7] px-2 pr-2 pl-3.5 text-[11px] whitespace-nowrap text-stone-500 tabular-nums [font-family:'JetBrains_Mono',ui-monospace,'SF_Mono',Menlo,monospace] @max-[760px]:h-auto @max-[760px]:min-h-[30px] @max-[760px]:flex-wrap @max-[760px]:gap-y-1.5 @max-[760px]:py-[5px]" aria-label="Editor status"><div class="inline-flex items-center gap-2"><span class="inline-flex items-center gap-1.5"><span></span> <!></span></div> <span class="h-2.5 w-px bg-[rgba(28,26,22,0.14)]"></span> <span> </span> <span> </span> <span class="flex-1"></span> <div class="inline-flex h-[18px] items-center rounded-[5px] border-[0.5px] border-stone-200 bg-stone-200/60 p-px" aria-label="Font family"></div> <label class="relative inline-flex h-[18px] items-center rounded-[5px] border-[0.5px] border-stone-200 bg-stone-200/60 pr-[18px] pl-2 text-[11px] font-medium text-stone-950 after:absolute after:top-1/2 after:right-[5px] after:-translate-y-1/2 after:text-[9px] after:leading-none after:text-stone-500 after:content-['v'] after:[font-family:-apple-system,BlinkMacSystemFont,'SF_Pro_Text',sans-serif]"><span> </span> <select class="absolute inset-0 border-0 opacity-0" aria-label="Font size"><option>Default</option><!></select></label></footer>`);function E5(t,e){Mn(e,!1);const n=ue(),r=ue();let a=te(e,"text",8,""),i=te(e,"problemCount",8,0),o=te(e,"fontFamily",8,"sans"),s=te(e,"fontSize",8,"default"),l=te(e,"onFontFamilyChange",8,()=>{}),c=te(e,"onFontSizeChange",8,()=>{});const u="inline-flex h-4 min-w-7 items-center justify-center rounded px-2 text-xs leading-none font-medium text-stone-500";De(()=>Z(a()),()=>{T(n,l5(a()))}),De(()=>Z(a()),()=>{T(r,a().length)}),Ei(),Mi();var f=k5(),d=O(f),_=O(d),h=O(_),g=z(h,2);{var m=U=>{var P=is("All clear");ne(U,P)},w=U=>{var P=is();We(()=>Re(P,`${i()??""} problem${i()===1?"":"s"}`)),ne(U,P)};Be(g,U=>{i()===0?U(m):U(w,!1)})}var b=z(d,4),k=O(b),E=z(b,2),x=O(E),S=z(E,4);qn(S,5,()=>Ds,Hn,(U,P)=>{var D=x5(),Q=O(D);We(fe=>{Ve(D,1,(Z(o()),p(P),V(()=>`${u} ${o()===p(P).value?"bg-white font-bold text-stone-950 shadow-sm shadow-stone-950/10":""}`))),md(D,(p(P),V(()=>`font-family: ${p(P).stack}`))),Pn(D,"title",(p(P),V(()=>p(P).label))),Pn(D,"aria-label",fe),Pn(D,"aria-pressed",(Z(o()),p(P),V(()=>o()===p(P).value))),Re(Q,(p(P),V(()=>p(P).sample)))},[()=>(p(P),V(()=>`Use ${p(P).label.toLowerCase()} font`))]),Te("click",D,()=>l()(p(P).value)),ne(U,D)});var A=z(S,2),$=O(A),L=O($),j=z($,2),C=O(j);C.value=C.__value="default";var H=z(C);qn(H,1,()=>a5,Hn,(U,P)=>{var D=S5(),Q=O(D),fe={};We(()=>{Re(Q,`${p(P)??""}px`),fe!==(fe=p(P))&&(D.value=(D.__value=p(P))??"")}),ne(U,D)});var q;bd(j),We(()=>{Ve(h,1,`h-1.5 w-1.5 rounded-full ${i()===0?"bg-emerald-600":"bg-amber-700"}`),Re(k,`${p(n)??""} words`),Re(x,`${p(r)??""} chars`),Re(L,s()==="default"?"Default":`${s()}px`),q!==(q=s())&&(j.value=(j.__value=s())??"",Xs(j,s()))}),Te("change",j,U=>{const P=U.currentTarget.value;c()(P==="default"?"default":Number(P))}),ne(t,f),jn()}var A5=de('<button type="button" class="absolute top-3 right-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-md border-0 bg-transparent text-stone-600 shadow-none transition-colors duration-150 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500" aria-label="Show problems sidebar" title="Show problems sidebar"><svg viewBox="0 0 20 20" aria-hidden="true" class="h-[18px] w-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"><rect x="3.5" y="3" width="13" height="14" rx="3"></rect><path d="M12.5 3v14"></path></svg></button>'),M5=de('<div class="harper-editor @container flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[10px] border-[0.5px] border-[rgba(28,26,22,0.14)] bg-[#fbfaf6] text-stone-950 shadow-2xl shadow-stone-950/5"><div class="flex min-h-0 min-w-0 flex-1"><section class="relative min-w-0 flex-1 bg-[#fbfaf6]" aria-label="Document editor"><div class="h-full overflow-auto p-[34px_40px_56px] @max-[760px]:p-[28px_24px_42px]"><div class="mx-auto flex min-h-full max-w-[640px]"><div class="flex min-h-full w-full flex-1" spellcheck="false"></div></div></div> <!></section> <!></div> <!></div>');function j5(t,e){Mn(e,!1);const n=ue(),r=ue();let a=te(e,"content",8,""),i=te(e,"linter",8),o=te(e,"onReady",8,()=>null),s=te(e,"defaultFontFamily",8,"sans"),l=te(e,"defaultFontSize",8,"default"),c=te(e,"onChange",8,()=>{}),u=te(e,"onAddToDictionary",8,null),f=te(e,"onSetRuleEnabled",8,null),d=te(e,"onDisplayChange",8,()=>{}),_=ue(),h=ue(0),g=ue(),m=ue([]),w=ue(null),b=ue(a()),k=ue(o5(s())),E=ue(kf(l())),x=ue(a()),S=ue(!1),A=ue(!0),$="automated",L=null;const j=290;let C=new t5(async N=>{const G=await i().organizedLints(N),Ne=await Promise.all(Object.entries(G).map(async([Jt,F])=>{const K=await Promise.all(F.map(me=>Cm(N,me,i())));return F.forEach(me=>{me.free()}),[Jt,K]})),Fe=Object.fromEntries(Ne);return je(),Fe},{addToUserDictionary:u()==null?void 0:async N=>{await u()?.(N),await C.requestLintUpdate(!0),je()},setRuleEnabled:f()==null?void 0:async(N,G)=>{await f()?.(N,G),await C.requestLintUpdate(!0),je()},ignoreLint:async N=>{try{await i().ignoreLintHash(BigInt(N)),console.log(`Ignored ${N}`),C.update(),je()}catch(G){console.error("Failed to ignore lint",G)}}}),H=new ResizeObserver(N=>{for(let G of N)G.contentBoxSize[0].inlineSize<640?Xe("automated"):Ee("automated")}),q=ue(null);async function U(){if(p(_)!=null){if(p(g)==null){let{default:N}=await vd(async()=>{const{default:G}=await import("./quill-v-dZfs5K-DJFA0Zpi.js");return{default:G}},[],import.meta.url);T(g,new N(p(_),{formats:[],placeholder:"Start writing..."})),(p(g).container??p(g).root?.parentElement)?.classList.add("harper-editor-quill-container"),p(g).root?.classList.add("harper-editor-surface"),p(g).root?.setAttribute("data-enable-grammarly","false"),p(g).root?.setAttribute("spellcheck","false"),Q(a(),!1),p(g).on("text-change",()=>{pe(!0),Oe()})}for(let N of p(_).getElementsByTagName("p"))C.addTarget(N)}}function P(N){if(typeof window>"u")return;T(w,N.lint.context_hash);const G=N.range;if(G)try{const Ne=G.getBoundingClientRect(),Fe=window.getSelection();Fe&&(Fe.removeAllRanges(),Fe.addRange(G.cloneRange()));const Jt=Math.max(10,window.innerHeight*.2),F=Math.max(0,window.scrollY+Ne.top-Jt);window.scrollTo({top:F,behavior:"smooth"})}catch(Ne){console.error("Failed to jump to lint",Ne)}}function D(N){return N.endsWith(`
`)?N.slice(0,-1):N}function Q(N,G){if(p(g)==null){T(b,N);return}p(g).setText(N,"silent"),p(g).history?.clear(),pe(G)}function fe(N){p(g)!=null&&(p(g).history?.cutoff(),p(g).setText(N,"user"),p(g).history?.cutoff())}function pe(N){if(p(g)==null)return;const G=D(p(g).getText());G!==p(b)&&(T(b,G),N&&c()(G))}function Ue(){T(m,[...C.getLastIgnorableLintBoxes()]),p(w)!=null&&!p(m).some(N=>N.lint.context_hash===p(w))&&T(w,null)}function je(){requestAnimationFrame(()=>{requestAnimationFrame(Ue)}),L!=null&&clearTimeout(L),L=setTimeout(Ue,150)}function Oe(){U(),C.update(),je()}function he(){pe(!0),Oe()}async function ke(){pe(!1);const N=p(b),G=i(),Ne=await G.organizedLints(N,{dedup:!1}),Fe=Object.values(Ne).flat();Fe.length!==0&&await G.ignoreLints(N,Fe)}async function Ee(N="automated"){$==="user"&&N==="automated"||(await cd(),$=N,T(A,!0))}function Xe(N="automated"){$==="user"&&N==="automated"||($=N,p(A)!==!1&&T(A,!1))}De(()=>(Z(d()),p(k),p(E)),()=>{d()({fontFamily:p(k),fontSize:p(E)})}),De(()=>p(k),()=>{T(n,s5(p(k)))}),De(()=>(p(n),p(E)),()=>{T(r,`--harper-editor-font-family: ${p(n)};`+(p(E)==="default"?"":` --harper-editor-font-size: ${p(E)}px;`))}),De(()=>(Z(i()),p(g),p(S),Z(o())),()=>{i()!=null&&p(g)!=null&&(p(S)||(T(S,!0),o()()))}),De(()=>p(q),()=>{p(q)!=null&&H.observe(p(q))}),De(()=>(p(h),Z(i()),Z(a()),p(_)),()=>{const N=e0(h),G=i();T(m,[]),(async()=>{try{await G.setup(),await G.lint(a())}catch(Ne){console.error("Failed to initialize linter",Ne)}N===p(h)&&p(_)!=null&&C.update()})()}),De(()=>p(_),()=>{p(_)!=null&&(new MutationObserver(U).observe(p(_),{childList:!0,subtree:!0}),U())}),De(()=>(p(g),Z(a()),p(x),p(b)),()=>{p(g)!=null&&a()!==p(x)&&(T(x,a()),a()!==p(b)&&(Q(a(),!1),Oe()))}),Ei();var ee={replaceAll:fe};Mi();var Ae=M5(),Ze=O(Ae),lt=O(Ze),Tt=O(lt),rt=O(Tt),R=O(rt);Er(R,N=>T(_,N),()=>p(_));var B=z(Tt,2);{let N=fn(()=>!p(A));tm(B,{get active(){return p(N)},delayMs:j,children:(G,Ne)=>{var Fe=A5();Nn(1,Fe,()=>Ka,()=>({duration:120})),Te("click",Fe,()=>Ee("user")),ne(G,Fe)},$$slots:{default:!0}})}var ce=z(lt,2);{var Le=N=>{v5(N,{get lintBoxes(){return p(m)},get activeLintId(){return p(w)},focusLint:P,onActivate:G=>T(w,G==null?null:G.lint.context_hash),onApplied:he,onIgnored:he,onIgnoreAll:ke,onHideSidebar:()=>Xe("user")})};Be(ce,N=>{p(A)&&N(Le)})}var ct=z(Ze,2);return E5(ct,{get text(){return p(b)},get problemCount(){return p(m),V(()=>p(m).length)},get fontFamily(){return p(k)},get fontSize(){return p(E)},onFontFamilyChange:N=>T(k,N),onFontSizeChange:N=>T(E,kf(N))}),Er(Ae,N=>T(q,N),()=>p(q)),We(()=>md(Ae,p(r))),ne(t,Ae),I0(e,"replaceAll",fe),jn(ee)}const L5=""+new URL(""+new URL("harper_wasm_slim_bg-ChaU7UNk.wasm",import.meta.url).href,import.meta.url).href,C5=Od.create(L5,"slim"),Zg=[{value:un.American,label:"American"},{value:un.British,label:"British"},{value:un.Canadian,label:"Canadian"},{value:un.Australian,label:"Australian"},{value:un.Indian,label:"Indian"}];function Qg(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1 $2")}function $5(t){return Zg.some(e=>e.value===t)?t:un.American}async function T5(t,e){const n=await R5()?Dh:Ih,r=new n({binary:C5,dialect:t.dialect});return await r.setup(),await ep(r,t),O5(r,e),r}function R5(){return new Promise(t=>{let e=null,n=null,r=!1;const a=i=>{r||(r=!0,n?.terminate(),e!=null&&URL.revokeObjectURL(e),t(i))};try{e=URL.createObjectURL(new Blob(["postMessage(1)"],{type:"text/javascript"})),n=new Worker(e,{type:"module"}),n.onmessage=()=>a(!0),n.onerror=()=>a(!1),setTimeout(()=>a(!1),3e3)}catch{a(!1)}})}async function ep(t,e){await t.setDialect(e.dialect),await t.clearWords(),e.words.length>0&&await t.importWords(e.words);const n=await t.getDefaultLintConfig();for(const r of e.disabledRules)r in n&&(n[r]=!1);if(await t.setLintConfig(n),await t.clearIgnoredLints(),e.ignored)try{await t.importIgnoredLints(e.ignored)}catch(r){console.warn("Saved ignore list could not be read; starting with an empty one.",r)}}function O5(t,e){for(const n of["ignoreLint","ignoreLints","ignoreLintHash"]){const r=t[n].bind(t);t[n]=async(...a)=>{const i=await r(...a);try{e(await t.exportIgnoredLints())}catch(o){console.warn("Could not save the ignore list.",o)}return i}}}var N5=de("<option> </option>"),F5=de('<li class="svelte-1v8xn86"><span> </span> <button type="button" class="link svelte-1v8xn86">Turn back on</button></li>'),I5=de('<section><h3 class="svelte-1v8xn86">Rules you turned off</h3> <ul class="svelte-1v8xn86"></ul></section>'),W5=de('<a href="./THIRD-PARTY-NOTICES.txt" target="_blank" rel="noreferrer" class="svelte-1v8xn86">Open-source licenses</a>'),z5=de(`<dialog aria-labelledby="settings-title" class="svelte-1v8xn86"><form method="dialog" class="svelte-1v8xn86"><header class="svelte-1v8xn86"><h2 id="settings-title" class="svelte-1v8xn86">Settings</h2> <button type="submit" class="done svelte-1v8xn86">Done</button></header> <section><label for="dialect" class="svelte-1v8xn86">English dialect</label> <p class="svelte-1v8xn86">Decides which spellings count as correct, such as “color” or “colour”.</p> <select id="dialect" class="svelte-1v8xn86"></select></section> <section><label for="words" class="svelte-1v8xn86">Personal dictionary <span class="count svelte-1v8xn86"> </span></label> <p class="svelte-1v8xn86">One word per line. Words you add from a spelling suggestion land here too.</p> <textarea id="words" rows="7" spellcheck="false" class="svelte-1v8xn86"></textarea></section> <!> <footer class="svelte-1v8xn86"><p class="svelte-1v8xn86">Your draft, dictionary and settings are kept in this browser only. Nothing you type is sent
				anywhere.</p> <p class="svelte-1v8xn86">Grammar checking by <a href="https://github.com/Automattic/harper" target="_blank" rel="noreferrer" class="svelte-1v8xn86">Harper</a> <!></p></footer></form></dialog>`);function P5(t,e){Mn(e,!0);let n,r=Pe(dn(e.settings.words.join(`
`)));const a=ri(()=>i(p(r)));yd(()=>{n.showModal()});function i(j){const C=[];for(const H of j.split(/\r?\n/)){const q=H.trim();q!==""&&!C.includes(q)&&C.push(q)}return C}async function o(){p(a).join(`
`)!==e.settings.words.join(`
`)&&await e.onChange({words:p(a)}),e.onClose()}function s(j){j.target===n&&n.close()}function l(j){e.onChange({disabledRules:e.settings.disabledRules.filter(C=>C!==j)})}var c=z5();c.__click=s;var u=O(c),f=z(O(u),2),d=z(O(f),4);d.__change=j=>e.onChange({dialect:Number(j.currentTarget.value)}),qn(d,21,()=>Zg,Hn,(j,C)=>{var H=N5(),q=O(H),U={};We(()=>{Re(q,p(C).label),U!==(U=p(C).value)&&(H.value=(H.__value=p(C).value)??"")}),ne(j,H)});var _;bd(d);var h=z(f,2),g=O(h),m=z(O(g)),w=O(m),b=z(g,4),k=z(h,2);{var E=j=>{var C=I5(),H=z(O(C),2);qn(H,21,()=>e.settings.disabledRules,Hn,(q,U)=>{var P=F5(),D=O(P),Q=O(D),fe=z(D,2);fe.__click=()=>l(p(U)),We(pe=>Re(Q,pe),[()=>Qg(p(U))]),ne(q,P)}),ne(j,C)};Be(k,j=>{e.settings.disabledRules.length>0&&j(E)})}var x=z(k,2),S=z(O(x),2),A=z(O(S),2);A.nodeValue=" (engine 2.10.0, editor 2.12.0). ";var $=z(A);{var L=j=>{var C=W5();ne(j,C)};Be($,j=>{j(L,!1)})}Er(c,j=>n=j,()=>n),We(()=>{_!==(_=e.settings.dialect)&&(d.value=(d.__value=e.settings.dialect)??"",Xs(d,e.settings.dialect)),Re(w,`${p(a).length??""} ${p(a).length===1?"word":"words"}`)}),Te("close",c,o),F0(b,()=>p(r),j=>T(r,j)),ne(t,c),jn()}_d(["click","change"]);const Bs="scratchpad:";function Jr(t,e){try{const n=localStorage.getItem(Bs+t);return n==null?e:JSON.parse(n)}catch{return e}}function cr(t,e){try{return e==null?localStorage.removeItem(Bs+t):localStorage.setItem(Bs+t,JSON.stringify(e)),!0}catch{return!1}}function Ef(t){const e=Jr(t,[]);return Array.isArray(e)?e.filter(n=>typeof n=="string"&&n!==""):[]}var D5=de('<div class="notice svelte-1n46o8q" role="alert"><strong>The grammar engine could not start.</strong> <p class="svelte-1n46o8q"> </p> <p class="svelte-1n46o8q">Your saved draft is untouched. Reloading the page usually fixes this.</p></div>'),B5=de('<p class="svelte-1n46o8q"><!></p>'),U5=de('<div class="notice svelte-1n46o8q" role="status"><span class="spinner svelte-1n46o8q" aria-hidden="true"></span> Loading the grammar engine… <!></div>'),V5=de('<button type="button" class="svelte-1n46o8q"> </button>'),H5=de('<div class="toast svelte-1n46o8q" role="status"><span> </span> <!></div>'),q5=de('<div class="app svelte-1n46o8q"><header class="bar svelte-1n46o8q"><h1 class="name svelte-1n46o8q"></h1> <span class="tagline svelte-1n46o8q">Checked on this device by Harper</span> <span class="spacer svelte-1n46o8q"></span> <button type="button" class="btn svelte-1n46o8q">Clear</button> <button type="button" class="btn primary svelte-1n46o8q" title="Copy everything as plain text">Copy text</button> <button type="button" class="btn icon svelte-1n46o8q" aria-label="Settings" title="Settings"><svg viewBox="0 0 20 20" aria-hidden="true" class="svelte-1n46o8q"><path d="M4 6h5M13 6h3M4 14h3M11 14h5"></path><circle cx="11" cy="6" r="2"></circle><circle cx="9" cy="14" r="2"></circle></svg></button></header> <main class="stage svelte-1n46o8q"><!></main> <!> <!></div>');function G5(t,e){Mn(e,!0);const n=Jr("draft",""),r=Jr("display",{})??{},a=typeof n=="string"?n:"";let i=Pe({dialect:$5(Jr("dialect",null)),words:Ef("words"),disabledRules:Ef("disabledRules")}),o=Jr("ignored",null);typeof o!="string"&&(o=null);let s=Pe(null),l=Pe(null),c=Pe(!1),u=Pe(null),f=Pe(dn(a)),d=Pe(!1),_=Pe(null),h=null,g=null;yd(()=>{const R=setTimeout(()=>{T(c,!0)},12e3),B=p(i);T5({...B,ignored:o},j).then(ct=>{T(s,ct),p(i)!==B&&q()},ct=>{console.error(ct),T(l,String(ct?.message??ct),!0)});const ce=()=>E(),Le=()=>{document.visibilityState==="hidden"&&E()};return window.addEventListener("pagehide",ce),document.addEventListener("visibilitychange",Le),document.addEventListener("copy",b),document.addEventListener("cut",b),window.addEventListener("keydown",w),m(),()=>{window.removeEventListener("pagehide",ce),document.removeEventListener("visibilitychange",Le),document.removeEventListener("copy",b),document.removeEventListener("cut",b),window.removeEventListener("keydown",w),clearTimeout(R)}});function m(){if(!("serviceWorker"in navigator))return;const R=navigator.serviceWorker.controller!=null;navigator.serviceWorker.addEventListener("controllerchange",()=>{R&&Q({message:"A newer version is ready",actionLabel:"Reload",action:()=>{E(),location.reload()}})}),navigator.serviceWorker.register("./sw.js").then(B=>{B.update().catch(()=>{})},B=>console.warn("Offline copy could not be set up.",B))}function w(R){(R.ctrlKey||R.metaKey)&&!R.altKey&&R.key?.toLowerCase()==="s"&&(R.preventDefault(),E(),Q({message:"Saved on this device. Drafts save as you type."}))}function b(R){const B=document.querySelector(".harper-editor-surface");B!=null&&R.composedPath().includes(B)&&R.clipboardData?.clearData("text/html")}function k(R){T(f,R,!0),clearTimeout(h),h=setTimeout(E,300)}function E(){clearTimeout(h),h=null,cr("draft",p(f))}function x(R){p(u)?.replaceAll(R),E(),S()}function S(){const R=document.querySelector(".harper-editor-surface");if(!(R instanceof HTMLElement))return;R.focus();const B=document.createRange();B.selectNodeContents(R),B.collapse(!1);const ce=window.getSelection();ce?.removeAllRanges(),ce?.addRange(B)}async function A(){if(p(f)==="")return;let R=!1;try{await navigator.clipboard.writeText(p(f)),R=!0}catch{R=$(p(f))}Q(R?{message:"Copied as plain text"}:{message:"The browser blocked copying. Select the text and press Ctrl+C instead."})}function $(R){const B=document.createElement("textarea");B.value=R,B.setAttribute("readonly",""),B.style.position="fixed",B.style.opacity="0",document.body.appendChild(B),B.select();let ce=!1;try{ce=document.execCommand("copy")}catch{ce=!1}return B.remove(),ce}function L(){if(p(f)==="")return;const R=p(f);x(""),Q({message:"Cleared. Ctrl+Z brings it back.",actionLabel:"Undo",action:()=>x(R)})}function j(R){o=R,cr("ignored",R)}function C(R){return T(i,{...p(i),...R}),cr("dialect",p(i).dialect),cr("words",p(i).words),cr("disabledRules",p(i).disabledRules),q()}let H=Promise.resolve();function q(){return H=H.then(async()=>{p(s)!=null&&(await ep(p(s),{...p(i),ignored:o}),U())}).catch(R=>console.error("Could not apply the settings to Harper.",R)),H}function U(){window.dispatchEvent(new Event("resize"))}async function P(R){const B=[];for(const ce of R){const Le=ce.trim();Le!==""&&!p(i).words.includes(Le)&&!B.includes(Le)&&B.push(Le)}B.length!==0&&(await C({words:[...p(i).words,...B]}),Q({message:`Added “${B.join("”, “")}” to your dictionary`,actionLabel:"Undo",action:()=>C({words:p(i).words.filter(ce=>!B.includes(ce))})}))}async function D(R,B){const ce=p(i).disabledRules.filter(Le=>Le!==R);await C({disabledRules:B?ce:[...ce,R]}),B||Q({message:`Turned off the “${Qg(R)}” rule`,actionLabel:"Undo",action:()=>D(R,!0)})}function Q(R){clearTimeout(g),T(_,R),g=setTimeout(()=>{T(_,null)},R.action?8e3:2500)}async function fe(){const R=p(_)?.action;clearTimeout(g),T(_,null),await R?.()}var pe=q5(),Ue=O(pe),je=O(Ue);je.textContent="Scratchpad";var Oe=z(je,6);Oe.__click=L;var he=z(Oe,2);he.__click=A;var ke=z(he,2);ke.__click=()=>T(d,!0);var Ee=z(Ue,2),Xe=O(Ee);{var ee=R=>{{let B=ri(()=>r.fontFamily??"sans"),ce=ri(()=>r.fontSize??"default");Er(j5(R,{get content(){return a},get linter(){return p(s)},get defaultFontFamily(){return p(B)},get defaultFontSize(){return p(ce)},onChange:k,onReady:S,onAddToDictionary:P,onSetRuleEnabled:D,onDisplayChange:Le=>cr("display",Le)}),Le=>T(u,Le),()=>p(u))}},Ae=R=>{var B=li(),ce=aa(B);{var Le=N=>{var G=D5(),Ne=z(O(G),2),Fe=O(Ne);We(()=>Re(Fe,p(l))),ne(N,G)},ct=N=>{var G=U5(),Ne=z(O(G),2);{var Fe=Jt=>{var F=B5(),K=O(F);{var me=ze=>{var ye=is(`The first visit downloads the engine, about 16 MB. If this does not finish, check the
							connection and reload. Your saved draft is safe.`);ne(ze,ye)};Be(K,ze=>{ze(me,!1)})}ne(Jt,F)};Be(Ne,Jt=>{p(c)&&Jt(Fe)})}ne(N,G)};Be(ce,N=>{p(l)?N(Le):N(ct,!1)},!0)}ne(R,B)};Be(Xe,R=>{p(s)?R(ee):R(Ae,!1)})}var Ze=z(Ee,2);{var lt=R=>{var B=H5(),ce=O(B),Le=O(ce),ct=z(ce,2);{var N=G=>{var Ne=V5();Ne.__click=fe;var Fe=O(Ne);We(()=>Re(Fe,p(_).actionLabel)),ne(G,Ne)};Be(ct,G=>{p(_).action&&G(N)})}We(()=>Re(Le,p(_).message)),ne(R,B)};Be(Ze,R=>{p(_)&&R(lt)})}var Tt=z(Ze,2);{var rt=R=>{P5(R,{get settings(){return p(i)},onChange:C,onClose:()=>{T(d,!1),S()}})};Be(Tt,R=>{p(d)&&R(rt)})}We(()=>{Oe.disabled=p(f)==="",he.disabled=p(f)===""}),ne(t,pe),jn()}_d(["click"]);m0(G5,{target:document.getElementById("app")});
