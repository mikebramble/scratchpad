(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const is=!1;var Xs=Array.isArray,up=Array.prototype.indexOf,Zs=Array.from,fp=Object.defineProperty,Pn=Object.getOwnPropertyDescriptor,Of=Object.getOwnPropertyDescriptors,dp=Object.prototype,_p=Array.prototype,Qs=Object.getPrototypeOf,$l=Object.isExtensible;function gp(t){return typeof t=="function"}const cr=()=>{};function pp(t){return t()}function os(t){for(var e=0;e<t.length;e++)t[e]()}function Nf(){var t,e,n=new Promise((r,a)=>{t=r,e=a});return{promise:n,resolve:t,reject:e}}function hp(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const n=[];for(const r of t)if(n.push(r),n.length===e)break;return n}const Ge=2,el=4,ki=8,Pt=16,sn=32,Xn=64,Ei=128,At=512,Ue=1024,it=2048,Dt=4096,dt=8192,Xt=16384,Ai=32768,yn=65536,Tl=1<<17,Ff=1<<18,Or=1<<19,If=1<<20,Vn=32768,ss=1<<21,tl=1<<22,pn=1<<23,Zt=Symbol("$state"),mp=Symbol("legacy props"),bp=Symbol(""),_r=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function wp(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function yp(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function vp(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Sp(t){throw new Error("https://svelte.dev/e/effect_orphan")}function kp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ep(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ap(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Mp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function jp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Lp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Wf=1,zf=2,Pf=4,Cp=8,$p=16,Tp=1,Rp=2,Op=4,Np=8,Fp=16,Ip=1,Wp=2,zp=4,Pp=1,Dp=2,Ze=Symbol(),Bp="http://www.w3.org/1999/xhtml";function Up(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Vp(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Df(t){return t===this.v}function Hp(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Bf(t){return!Hp(t,this.v)}let Nr=!1,qp=!1;function Gp(){Nr=!0}let Le=null;function vr(t){Le=t}function jn(t,e=!1,n){Le={p:Le,i:!1,c:null,e:null,s:t,x:null,l:Nr&&!e?{s:null,u:null,$:[]}:null}}function Ln(t){var e=Le,n=e.e;if(n!==null){e.e=null;for(var r of n)rd(r)}return t!==void 0&&(e.x=t),e.i=!0,Le=e.p,t??{}}function ha(){return!Nr||Le!==null&&Le.l===null}let Fn=[];function Uf(){var t=Fn;Fn=[],os(t)}function Zn(t){if(Fn.length===0&&!Zr){var e=Fn;queueMicrotask(()=>{e===Fn&&Uf()})}Fn.push(t)}function Jp(){for(;Fn.length>0;)Uf()}function Vf(t){var e=se;if(e===null)return ae.f|=pn,t;if((e.f&Ai)===0){if((e.f&Ei)===0)throw t;e.b.error(t)}else xr(t,e)}function xr(t,e){for(;e!==null;){if((e.f&Ei)!==0)try{e.b.error(t);return}catch(n){t=n}e=e.parent}throw t}const Ta=new Set;let me=null,Ja=null,ct=null,bt=[],Mi=null,ls=!1,Zr=!1;class Nt{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#r=0;#n=0;#l=null;#i=[];#a=[];skipped_effects=new Set;is_fork=!1;is_deferred(){return this.is_fork||this.#n>0}process(e){bt=[],Ja=null,this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of e)this.#o(r,n);this.is_fork||this.#u(),this.is_deferred()?(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects)):(Ja=this,me=null,Rl(n.render_effects),Rl(n.effects),Ja=null,this.#l?.resolve()),ct=null}#o(e,n){e.f^=Ue;for(var r=e.first;r!==null;){var a=r.f,i=(a&(sn|Xn))!==0,o=i&&(a&Ue)!==0,s=o||(a&dt)!==0||this.skipped_effects.has(r);if((r.f&Ei)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[],block_effects:[]}),!s&&r.fn!==null){i?r.f^=Ue:(a&el)!==0?n.effects.push(r):Ir(r)&&((r.f&Pt)!==0&&n.block_effects.push(r),kr(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===n.effect&&(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects),n=n.parent),r=c.next,c=c.parent}}#s(e){for(const n of e)((n.f&it)!==0?this.#i:this.#a).push(n),this.#c(n.deps),Ve(n,Ue)}#c(e){if(e!==null)for(const n of e)(n.f&Ge)===0||(n.f&Vn)===0||(n.f^=Vn,this.#c(n.deps))}capture(e,n){this.previous.has(e)||this.previous.set(e,n),(e.f&pn)===0&&(this.current.set(e,e.v),ct?.set(e,e.v))}activate(){me=this,this.apply()}deactivate(){me===this&&(me=null,ct=null)}flush(){if(this.activate(),bt.length>0){if(Hf(),me!==null&&me!==this)return}else this.#r===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#t)e(this);this.#t.clear()}#u(){if(this.#n===0){for(const e of this.#e)e();this.#e.clear()}this.#r===0&&this.#f()}#f(){if(Ta.size>1){this.previous.clear();var e=ct,n=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of Ta){if(i===this){n=!1;continue}const o=[];for(const[l,c]of this.current){if(i.current.has(l))if(n&&c!==i.current.get(l))i.current.set(l,c);else continue;o.push(l)}if(o.length===0)continue;const s=[...i.current.keys()].filter(l=>!this.current.has(l));if(s.length>0){var a=bt;bt=[];const l=new Set,c=new Map;for(const u of o)qf(u,s,l,c);if(bt.length>0){me=i,i.apply();for(const u of bt)i.#o(u,r);i.deactivate()}bt=a}}me=null,ct=e}this.committed=!0,Ta.delete(this)}increment(e){this.#r+=1,e&&(this.#n+=1)}decrement(e){this.#r-=1,e&&(this.#n-=1),this.revive()}revive(){for(const e of this.#i)Ve(e,it),Hn(e);for(const e of this.#a)Ve(e,Dt),Hn(e);this.#i=[],this.#a=[],this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#l??=Nf()).promise}static ensure(){if(me===null){const e=me=new Nt;Ta.add(me),Zr||Nt.enqueue(()=>{me===e&&e.flush()})}return me}static enqueue(e){Zn(e)}apply(){}}function Yp(t){var e=Zr;Zr=!0;try{for(var n;;){if(Jp(),bt.length===0&&(me?.flush(),bt.length===0))return Mi=null,n;Hf()}}finally{Zr=e}}function Hf(){var t=mn;ls=!0;var e=null;try{var n=0;for(ui(!0);bt.length>0;){var r=Nt.ensure();if(n++>1e3){var a,i;Kp()}r.process(bt),hn.clear()}}finally{ls=!1,ui(t),Mi=null}}function Kp(){try{kp()}catch(t){xr(t,Mi)}}let Yt=null;function Rl(t){var e=t.length;if(e!==0){for(var n=0;n<e;){var r=t[n++];if((r.f&(Xt|dt))===0&&Ir(r)&&(Yt=new Set,kr(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?ld(r):r.fn=null),Yt?.size>0)){hn.clear();for(const a of Yt){if((a.f&(Xt|dt))!==0)continue;const i=[a];let o=a.parent;for(;o!==null;)Yt.has(o)&&(Yt.delete(o),i.push(o)),o=o.parent;for(let s=i.length-1;s>=0;s--){const l=i[s];(l.f&(Xt|dt))===0&&kr(l)}}Yt.clear()}}Yt=null}}function qf(t,e,n,r){if(!n.has(t)&&(n.add(t),t.reactions!==null))for(const a of t.reactions){const i=a.f;(i&Ge)!==0?qf(a,e,n,r):(i&(tl|Pt))!==0&&(i&it)===0&&Gf(a,e,r)&&(Ve(a,it),Hn(a))}}function Gf(t,e,n){const r=n.get(t);if(r!==void 0)return r;if(t.deps!==null)for(const a of t.deps){if(e.includes(a))return!0;if((a.f&Ge)!==0&&Gf(a,e,n))return n.set(a,!0),!0}return n.set(t,!1),!1}function Hn(t){for(var e=Mi=t;e.parent!==null;){e=e.parent;var n=e.f;if(ls&&e===se&&(n&Pt)!==0&&(n&Ff)===0)return;if((n&(Xn|sn))!==0){if((n&Ue)===0)return;e.f^=Ue}}bt.push(e)}function Xp(t){let e=0,n=qn(0),r;return()=>{ji()&&(g(n),wa(()=>(e===0&&(r=H(()=>t(()=>Qr(n)))),e+=1,()=>{Zn(()=>{e-=1,e===0&&(r?.(),r=void 0,Qr(n))})})))}}var Zp=yn|Or|Ei;function Qp(t,e,n){new e0(t,e,n)}class e0{parent;#e=!1;#t;#r=null;#n;#l;#i;#a=null;#o=null;#s=null;#c=null;#u=null;#f=0;#d=0;#g=!1;#_=null;#w=Xp(()=>(this.#_=qn(this.#f),()=>{this.#_=null}));constructor(e,n,r){this.#t=e,this.#n=n,this.#l=r,this.parent=se.b,this.#e=!!this.#n.pending,this.#i=$i(()=>{se.b=this;{var a=this.#m();try{this.#a=wt(()=>r(a))}catch(i){this.error(i)}this.#d>0?this.#h():this.#e=!1}return()=>{this.#u?.remove()}},Zp)}#y(){try{this.#a=wt(()=>this.#l(this.#t))}catch(e){this.error(e)}this.#e=!1}#v(){const e=this.#n.pending;e&&(this.#o=wt(()=>e(this.#t)),Nt.enqueue(()=>{var n=this.#m();this.#a=this.#p(()=>(Nt.ensure(),wt(()=>this.#l(n)))),this.#d>0?this.#h():(pr(this.#o,()=>{this.#o=null}),this.#e=!1)}))}#m(){var e=this.#t;return this.#e&&(this.#u=nn(),this.#t.before(this.#u),e=this.#u),e}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#p(e){var n=se,r=ae,a=Le;zt(this.#i),rt(this.#i),vr(this.#i.ctx);try{return e()}catch(i){return Vf(i),null}finally{zt(n),rt(r),vr(a)}}#h(){const e=this.#n.pending;this.#a!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),fd(this.#a,this.#c)),this.#o===null&&(this.#o=wt(()=>e(this.#t)))}#b(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(e);return}this.#d+=e,this.#d===0&&(this.#e=!1,this.#o&&pr(this.#o,()=>{this.#o=null}),this.#c&&(this.#t.before(this.#c),this.#c=null))}update_pending_count(e){this.#b(e),this.#f+=e,this.#_&&Sr(this.#_,this.#f)}get_effect_pending(){return this.#w(),g(this.#_)}error(e){var n=this.#n.onerror;let r=this.#n.failed;if(this.#g||!n&&!r)throw e;this.#a&&(at(this.#a),this.#a=null),this.#o&&(at(this.#o),this.#o=null),this.#s&&(at(this.#s),this.#s=null);var a=!1,i=!1;const o=()=>{if(a){Vp();return}a=!0,i&&Lp(),Nt.ensure(),this.#f=0,this.#s!==null&&pr(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#a=this.#p(()=>(this.#g=!1,wt(()=>this.#l(this.#t)))),this.#d>0?this.#h():this.#e=!1};var s=ae;try{rt(null),i=!0,n?.(e,o),i=!1}catch(l){xr(l,this.#i&&this.#i.parent)}finally{rt(s)}r&&Zn(()=>{this.#s=this.#p(()=>{Nt.ensure(),this.#g=!0;try{return wt(()=>{r(this.#t,()=>e,()=>o)})}catch(l){return xr(l,this.#i.parent),null}finally{this.#g=!1}})})}}function t0(t,e,n,r){const a=ha()?ma:dn;if(n.length===0&&t.length===0){r(e.map(a));return}var i=me,o=se,s=n0();function l(){Promise.all(n.map(c=>r0(c))).then(c=>{s();try{r([...e.map(a),...c])}catch(u){(o.f&Xt)===0&&xr(u,o)}i?.deactivate(),oi()}).catch(c=>{xr(c,o)})}t.length>0?Promise.all(t).then(()=>{s();try{return l()}finally{i?.deactivate(),oi()}}):l()}function n0(){var t=se,e=ae,n=Le,r=me;return function(i=!0){zt(t),rt(e),vr(n),i&&r?.activate()}}function oi(){zt(null),rt(null),vr(null)}function ma(t){var e=Ge|it,n=ae!==null&&(ae.f&Ge)!==0?ae:null;return se!==null&&(se.f|=Or),{ctx:Le,deps:null,effects:null,equals:Df,f:e,fn:t,reactions:null,rv:0,v:Ze,wv:0,parent:n??se,ac:null}}function r0(t,e){let n=se;n===null&&yp();var r=n.b,a=void 0,i=qn(Ze),o=!ae,s=new Map;return p0(()=>{var l=Nf();a=l.promise;try{Promise.resolve(t()).then(l.resolve,l.reject).then(()=>{c===me&&c.committed&&c.deactivate(),oi()})}catch(d){l.reject(d),oi()}var c=me;if(o){var u=!r.is_pending();r.update_pending_count(1),c.increment(u),s.get(c)?.reject(_r),s.delete(c),s.set(c,l)}const f=(d,_=void 0)=>{if(c.activate(),_)_!==_r&&(i.f|=pn,Sr(i,_));else{(i.f&pn)!==0&&(i.f^=pn),Sr(i,d);for(const[h,p]of s){if(s.delete(h),h===c)break;p.reject(_r)}}o&&(r.update_pending_count(-1),c.decrement(u))};l.promise.then(f,d=>f(null,d||"unknown"))}),Li(()=>{for(const l of s.values())l.reject(_r)}),new Promise(l=>{function c(u){function f(){u===a?l(i):c(a)}u.then(f,f)}c(a)})}function si(t){const e=ma(t);return dd(e),e}function dn(t){const e=ma(t);return e.equals=Bf,e}function Jf(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)at(e[n])}}function a0(t){for(var e=t.parent;e!==null;){if((e.f&Ge)===0)return(e.f&Xt)===0?e:null;e=e.parent}return null}function nl(t){var e,n=se;zt(a0(t));try{t.f&=~Vn,Jf(t),e=hd(t)}finally{zt(n)}return e}function Yf(t){var e=nl(t);if(t.equals(e)||(t.v=e,t.wv=gd()),!Qn)if(ct!==null)ji()&&ct.set(t,t.v);else{var n=(t.f&At)===0?Dt:Ue;Ve(t,n)}}let cs=new Set;const hn=new Map;let Kf=!1;function qn(t,e){var n={f:0,v:t,reactions:null,equals:Df,rv:0,wv:0};return n}function Fe(t,e){const n=qn(t);return dd(n),n}function fe(t,e=!1,n=!0){const r=qn(t);return e||(r.equals=Bf),Nr&&n&&Le!==null&&Le.l!==null&&(Le.l.s??=[]).push(r),r}function R(t,e,n=!1){ae!==null&&(!Ft||(ae.f&Tl)!==0)&&ha()&&(ae.f&(Ge|Pt|tl|Tl))!==0&&!Qt?.includes(t)&&jp();let r=n?_n(e):e;return Sr(t,r)}function Sr(t,e){if(!t.equals(e)){var n=t.v;Qn?hn.set(t,e):hn.set(t,n),t.v=e;var r=Nt.ensure();r.capture(t,n),(t.f&Ge)!==0&&((t.f&it)!==0&&nl(t),Ve(t,(t.f&At)!==0?Ue:Dt)),t.wv=gd(),Xf(t,it),ha()&&se!==null&&(se.f&Ue)!==0&&(se.f&(sn|Xn))===0&&(mt===null?m0([t]):mt.push(t)),!r.is_fork&&cs.size>0&&!Kf&&i0()}return e}function i0(){Kf=!1;var t=mn;ui(!0);const e=Array.from(cs);try{for(const n of e)(n.f&Ue)!==0&&Ve(n,Dt),Ir(n)&&kr(n)}finally{ui(t)}cs.clear()}function o0(t,e=1){var n=g(t);return R(t,e===1?++n:--n)}function Qr(t){R(t,t.v+1)}function Xf(t,e){var n=t.reactions;if(n!==null)for(var r=ha(),a=n.length,i=0;i<a;i++){var o=n[i],s=o.f;if(!(!r&&o===se)){var l=(s&it)===0;if(l&&Ve(o,e),(s&Ge)!==0){var c=o;ct?.delete(c),(s&Vn)===0&&(s&At&&(o.f|=Vn),Xf(c,Dt))}else l&&((s&Pt)!==0&&Yt!==null&&Yt.add(o),Hn(o))}}}function _n(t){if(typeof t!="object"||t===null||Zt in t)return t;const e=Qs(t);if(e!==dp&&e!==_p)return t;var n=new Map,r=Xs(t),a=Fe(0),i=Dn,o=s=>{if(Dn===i)return s();var l=ae,c=Dn;rt(null),Il(i);var u=s();return rt(l),Il(c),u};return r&&n.set("length",Fe(t.length)),new Proxy(t,{defineProperty(s,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Ap();var u=n.get(l);return u===void 0?u=o(()=>{var f=Fe(c.value);return n.set(l,f),f}):R(u,c.value,!0),!0},deleteProperty(s,l){var c=n.get(l);if(c===void 0){if(l in s){const u=o(()=>Fe(Ze));n.set(l,u),Qr(a)}}else R(c,Ze),Qr(a);return!0},get(s,l,c){if(l===Zt)return t;var u=n.get(l),f=l in s;if(u===void 0&&(!f||Pn(s,l)?.writable)&&(u=o(()=>{var _=_n(f?s[l]:Ze),h=Fe(_);return h}),n.set(l,u)),u!==void 0){var d=g(u);return d===Ze?void 0:d}return Reflect.get(s,l,c)},getOwnPropertyDescriptor(s,l){var c=Reflect.getOwnPropertyDescriptor(s,l);if(c&&"value"in c){var u=n.get(l);u&&(c.value=g(u))}else if(c===void 0){var f=n.get(l),d=f?.v;if(f!==void 0&&d!==Ze)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(s,l){if(l===Zt)return!0;var c=n.get(l),u=c!==void 0&&c.v!==Ze||Reflect.has(s,l);if(c!==void 0||se!==null&&(!u||Pn(s,l)?.writable)){c===void 0&&(c=o(()=>{var d=u?_n(s[l]):Ze,_=Fe(d);return _}),n.set(l,c));var f=g(c);if(f===Ze)return!1}return u},set(s,l,c,u){var f=n.get(l),d=l in s;if(r&&l==="length")for(var _=c;_<f.v;_+=1){var h=n.get(_+"");h!==void 0?R(h,Ze):_ in s&&(h=o(()=>Fe(Ze)),n.set(_+"",h))}if(f===void 0)(!d||Pn(s,l)?.writable)&&(f=o(()=>Fe(void 0)),R(f,_n(c)),n.set(l,f));else{d=f.v!==Ze;var p=o(()=>_n(c));R(f,p)}var m=Reflect.getOwnPropertyDescriptor(s,l);if(m?.set&&m.set.call(u,c),!d){if(r&&typeof l=="string"){var w=n.get("length"),b=Number(l);Number.isInteger(b)&&b>=w.v&&R(w,b+1)}Qr(a)}return!0},ownKeys(s){g(a);var l=Reflect.ownKeys(s).filter(f=>{var d=n.get(f);return d===void 0||d.v!==Ze});for(var[c,u]of n)u.v!==Ze&&!(c in s)&&l.push(c);return l},setPrototypeOf(){Mp()}})}function Ol(t){try{if(t!==null&&typeof t=="object"&&Zt in t)return t[Zt]}catch{}return t}function s0(t,e){return Object.is(Ol(t),Ol(e))}var li,Zf,Qf,ed;function l0(){if(li===void 0){li=window,Zf=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Qf=Pn(e,"firstChild").get,ed=Pn(e,"nextSibling").get,$l(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),$l(n)&&(n.__t=void 0)}}function nn(t=""){return document.createTextNode(t)}function gn(t){return Qf.call(t)}function ba(t){return ed.call(t)}function T(t,e){return gn(t)}function sa(t,e=!1){{var n=gn(t);return n instanceof Comment&&n.data===""?ba(n):n}}function I(t,e=1,n=!1){let r=t;for(;e--;)r=ba(r);return r}function c0(t){t.textContent=""}function td(){return!1}let Nl=!1;function u0(){Nl||(Nl=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function Fr(t){var e=ae,n=se;rt(null),zt(null);try{return t()}finally{rt(e),zt(n)}}function f0(t,e,n,r=n){t.addEventListener(e,()=>Fr(n));const a=t.__on_r;a?t.__on_r=()=>{a(),r(!0)}:t.__on_r=()=>r(!0),u0()}function nd(t){se===null&&(ae===null&&Sp(),xp()),Qn&&vp()}function d0(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Bt(t,e,n){var r=se;r!==null&&(r.f&dt)!==0&&(t|=dt);var a={ctx:Le,deps:null,nodes_start:null,nodes_end:null,f:t|it|At,first:null,fn:e,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{kr(a),a.f|=Ai}catch(s){throw at(a),s}else e!==null&&Hn(a);var i=a;if(n&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Or)===0&&(i=i.first,(t&Pt)!==0&&(t&yn)!==0&&i!==null&&(i.f|=yn)),i!==null&&(i.parent=r,r!==null&&d0(i,r),ae!==null&&(ae.f&Ge)!==0&&(t&Xn)===0)){var o=ae;(o.effects??=[]).push(i)}return a}function ji(){return ae!==null&&!Ft}function Li(t){const e=Bt(ki,null,!1);return Ve(e,Ue),e.teardown=t,e}function ci(t){nd();var e=se.f,n=!ae&&(e&sn)!==0&&(e&Ai)===0;if(n){var r=Le;(r.e??=[]).push(t)}else return rd(t)}function rd(t){return Bt(el|If,t,!1)}function _0(t){return nd(),Bt(ki|If,t,!0)}function g0(t){Nt.ensure();const e=Bt(Xn|Or,t,!0);return(n={})=>new Promise(r=>{n.outro?pr(e,()=>{at(e),r(void 0)}):(at(e),r(void 0))})}function ad(t){return Bt(el,t,!1)}function De(t,e){var n=Le,r={effect:null,ran:!1,deps:t};n.l.$.push(r),r.effect=wa(()=>{t(),!r.ran&&(r.ran=!0,H(e))})}function Ci(){var t=Le;wa(()=>{for(var e of t.l.$){e.deps();var n=e.effect;(n.f&Ue)!==0&&Ve(n,Dt),Ir(n)&&kr(n),e.ran=!1}})}function p0(t){return Bt(tl|Or,t,!0)}function wa(t,e=0){return Bt(ki|e,t,!0)}function Te(t,e=[],n=[],r=[]){t0(r,e,n,a=>{Bt(ki,()=>t(...a.map(g)),!0)})}function $i(t,e=0){var n=Bt(Pt|e,t,!0);return n}function wt(t){return Bt(sn|Or,t,!0)}function id(t){var e=t.teardown;if(e!==null){const n=Qn,r=ae;Fl(!0),rt(null);try{e.call(null)}finally{Fl(n),rt(r)}}}function od(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){const a=n.ac;a!==null&&Fr(()=>{a.abort(_r)});var r=n.next;(n.f&Xn)!==0?n.parent=null:at(n,e),n=r}}function h0(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&sn)===0&&at(e),e=n}}function at(t,e=!0){var n=!1;(e||(t.f&Ff)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(sd(t.nodes_start,t.nodes_end),n=!0),od(t,e&&!n),fi(t,0),Ve(t,Xt);var r=t.transitions;if(r!==null)for(const i of r)i.stop();id(t);var a=t.parent;a!==null&&a.first!==null&&ld(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function sd(t,e){for(;t!==null;){var n=t===e?null:ba(t);t.remove(),t=n}}function ld(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function pr(t,e,n=!0){var r=[];rl(t,r,!0),cd(r,()=>{n&&at(t),e&&e()})}function cd(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var a of t)a.out(r)}else e()}function rl(t,e,n){if((t.f&dt)===0){if(t.f^=dt,t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&e.push(o);for(var r=t.first;r!==null;){var a=r.next,i=(r.f&yn)!==0||(r.f&sn)!==0&&(t.f&Pt)!==0;rl(r,e,i?n:!1),r=a}}}function al(t){ud(t,!0)}function ud(t,e){if((t.f&dt)!==0){t.f^=dt,(t.f&Ue)===0&&(Ve(t,it),Hn(t));for(var n=t.first;n!==null;){var r=n.next,a=(n.f&yn)!==0||(n.f&sn)!==0;ud(n,a?e:!1),n=r}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}function fd(t,e){for(var n=t.nodes_start,r=t.nodes_end;n!==null;){var a=n===r?null:ba(n);e.append(n),n=a}}let mn=!1;function ui(t){mn=t}let Qn=!1;function Fl(t){Qn=t}let ae=null,Ft=!1;function rt(t){ae=t}let se=null;function zt(t){se=t}let Qt=null;function dd(t){ae!==null&&(Qt===null?Qt=[t]:Qt.push(t))}let Qe=null,lt=0,mt=null;function m0(t){mt=t}let _d=1,la=0,Dn=la;function Il(t){Dn=t}function gd(){return++_d}function Ir(t){var e=t.f;if((e&it)!==0)return!0;if(e&Ge&&(t.f&=~Vn),(e&Dt)!==0){var n=t.deps;if(n!==null)for(var r=n.length,a=0;a<r;a++){var i=n[a];if(Ir(i)&&Yf(i),i.wv>t.wv)return!0}(e&At)!==0&&ct===null&&Ve(t,Ue)}return!1}function pd(t,e,n=!0){var r=t.reactions;if(r!==null&&!Qt?.includes(t))for(var a=0;a<r.length;a++){var i=r[a];(i.f&Ge)!==0?pd(i,e,!1):e===i&&(n?Ve(i,it):(i.f&Ue)!==0&&Ve(i,Dt),Hn(i))}}function hd(t){var e=Qe,n=lt,r=mt,a=ae,i=Qt,o=Le,s=Ft,l=Dn,c=t.f;Qe=null,lt=0,mt=null,ae=(c&(sn|Xn))===0?t:null,Qt=null,vr(t.ctx),Ft=!1,Dn=++la,t.ac!==null&&(Fr(()=>{t.ac.abort(_r)}),t.ac=null);try{t.f|=ss;var u=t.fn,f=u(),d=t.deps;if(Qe!==null){var _;if(fi(t,lt),d!==null&&lt>0)for(d.length=lt+Qe.length,_=0;_<Qe.length;_++)d[lt+_]=Qe[_];else t.deps=d=Qe;if(mn&&ji()&&(t.f&At)!==0)for(_=lt;_<d.length;_++)(d[_].reactions??=[]).push(t)}else d!==null&&lt<d.length&&(fi(t,lt),d.length=lt);if(ha()&&mt!==null&&!Ft&&d!==null&&(t.f&(Ge|Dt|it))===0)for(_=0;_<mt.length;_++)pd(mt[_],t);return a!==null&&a!==t&&(la++,mt!==null&&(r===null?r=mt:r.push(...mt))),(t.f&pn)!==0&&(t.f^=pn),f}catch(h){return Vf(h)}finally{t.f^=ss,Qe=e,lt=n,mt=r,ae=a,Qt=i,vr(o),Ft=s,Dn=l}}function b0(t,e){let n=e.reactions;if(n!==null){var r=up.call(n,t);if(r!==-1){var a=n.length-1;a===0?n=e.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(e.f&Ge)!==0&&(Qe===null||!Qe.includes(e))&&(Ve(e,Dt),(e.f&At)!==0&&(e.f^=At,e.f&=~Vn),Jf(e),fi(e,0))}function fi(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)b0(t,n[r])}function kr(t){var e=t.f;if((e&Xt)===0){Ve(t,Ue);var n=se,r=mn;se=t,mn=!0;try{(e&Pt)!==0?h0(t):od(t),id(t);var a=hd(t);t.teardown=typeof a=="function"?a:null,t.wv=_d;var i;is&&qp&&(t.f&it)!==0&&t.deps}finally{mn=r,se=n}}}async function md(){await Promise.resolve(),Yp()}function g(t){var e=t.f,n=(e&Ge)!==0;if(ae!==null&&!Ft){var r=se!==null&&(se.f&Xt)!==0;if(!r&&!Qt?.includes(t)){var a=ae.deps;if((ae.f&ss)!==0)t.rv<la&&(t.rv=la,Qe===null&&a!==null&&a[lt]===t?lt++:Qe===null?Qe=[t]:Qe.includes(t)||Qe.push(t));else{(ae.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[ae]:i.includes(ae)||i.push(ae)}}}if(Qn){if(hn.has(t))return hn.get(t);if(n){var o=t,s=o.v;return((o.f&Ue)===0&&o.reactions!==null||wd(o))&&(s=nl(o)),hn.set(o,s),s}}else if(n){if(o=t,ct?.has(o))return ct.get(o);Ir(o)&&Yf(o),mn&&ji()&&(o.f&At)===0&&bd(o)}else if(ct?.has(t))return ct.get(t);if((t.f&pn)!==0)throw t.v;return t.v}function bd(t){if(t.deps!==null){t.f^=At;for(const e of t.deps)(e.reactions??=[]).push(t),(e.f&Ge)!==0&&(e.f&At)===0&&bd(e)}}function wd(t){if(t.v===Ze)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(hn.has(e)||(e.f&Ge)!==0&&wd(e))return!0;return!1}function H(t){var e=Ft;try{return Ft=!0,t()}finally{Ft=e}}const w0=-7169;function Ve(t,e){t.f=t.f&w0|e}function te(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Zt in t)us(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Zt in n&&us(n)}}}function us(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{us(t[r],e)}catch{}const n=Qs(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Of(n);for(let a in r){const i=r[a].get;if(i)try{i.call(t)}catch{}}}}}const y0=["touchstart","touchmove"];function v0(t){return y0.includes(t)}const yd=new Set,fs=new Set;function x0(t,e,n,r={}){function a(i){if(r.capture||Ur.call(e,i),!i.cancelBubble)return Fr(()=>n?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Zn(()=>{e.addEventListener(t,a,r)}):e.addEventListener(t,a,r),a}function Ne(t,e,n,r,a){var i={capture:r,passive:a},o=x0(t,e,n,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Li(()=>{e.removeEventListener(t,o,i)})}function vd(t){for(var e=0;e<t.length;e++)yd.add(t[e]);for(var n of fs)n(t)}let Wl=null;function Ur(t){var e=this,n=e.ownerDocument,r=t.type,a=t.composedPath?.()||[],i=a[0]||t.target;Wl=t;var o=0,s=Wl===t&&t.__root;if(s){var l=a.indexOf(s);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=a.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(i=a[o]||t.target,i!==e){fp(t,"currentTarget",{configurable:!0,get(){return i||n}});var u=ae,f=se;rt(null),zt(null);try{for(var d,_=[];i!==null;){var h=i.assignedSlot||i.parentNode||i.host||null;try{var p=i["__"+r];p!=null&&(!i.disabled||t.target===i)&&p.call(i,t)}catch(m){d?_.push(m):d=m}if(t.cancelBubble||h===e||h===null)break;i=h}if(d){for(let m of _)queueMicrotask(()=>{throw m});throw d}}finally{t.__root=e,delete t.currentTarget,rt(u),zt(f)}}}function xd(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function ca(t,e){var n=se;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function de(t,e){var n=(e&Pp)!==0,r=(e&Dp)!==0,a,i=!t.startsWith("<!>");return()=>{a===void 0&&(a=xd(i?t:"<!>"+t),n||(a=gn(a)));var o=r||Zf?document.importNode(a,!0):a.cloneNode(!0);if(n){var s=gn(o),l=o.lastChild;ca(s,l)}else ca(o,o);return o}}function ds(t=""){{var e=nn(t+"");return ca(e,e),e}}function di(){var t=document.createDocumentFragment(),e=document.createComment(""),n=nn();return t.append(e,n),ca(e,n),t}function Q(t,e){t!==null&&t.before(e)}let _s=!0;function je(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n+"")}function S0(t,e){return k0(t,e)}const tr=new Map;function k0(t,{target:e,anchor:n,props:r={},events:a,context:i,intro:o=!0}){l0();var s=new Set,l=f=>{for(var d=0;d<f.length;d++){var _=f[d];if(!s.has(_)){s.add(_);var h=v0(_);e.addEventListener(_,Ur,{passive:h});var p=tr.get(_);p===void 0?(document.addEventListener(_,Ur,{passive:h}),tr.set(_,1)):tr.set(_,p+1)}}};l(Zs(yd)),fs.add(l);var c=void 0,u=g0(()=>{var f=n??e.appendChild(nn());return Qp(f,{pending:()=>{}},d=>{if(i){jn({});var _=Le;_.c=i}a&&(r.$$events=a),_s=o,c=t(d,r)||{},_s=!0,i&&Ln()}),()=>{for(var d of s){e.removeEventListener(d,Ur);var _=tr.get(d);--_===0?(document.removeEventListener(d,Ur),tr.delete(d)):tr.set(d,_)}fs.delete(l),f!==n&&f.parentNode?.removeChild(f)}});return E0.set(c,u),c}let E0=new WeakMap;class Sd{anchor;#e=new Map;#t=new Map;#r=new Map;#n=new Set;#l=!0;constructor(e,n=!0){this.anchor=e,this.#l=n}#i=()=>{var e=me;if(this.#e.has(e)){var n=this.#e.get(e),r=this.#t.get(n);if(r)al(r),this.#n.delete(n);else{var a=this.#r.get(n);a&&(this.#t.set(n,a.effect),this.#r.delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[i,o]of this.#e){if(this.#e.delete(i),i===e)break;const s=this.#r.get(o);s&&(at(s.effect),this.#r.delete(o))}for(const[i,o]of this.#t){if(i===n||this.#n.has(i))continue;const s=()=>{if(Array.from(this.#e.values()).includes(i)){var c=document.createDocumentFragment();fd(o,c),c.append(nn()),this.#r.set(i,{effect:o,fragment:c})}else at(o);this.#n.delete(i),this.#t.delete(i)};this.#l||!r?(this.#n.add(i),pr(o,s,!1)):s()}}};#a=e=>{this.#e.delete(e);const n=Array.from(this.#e.values());for(const[r,a]of this.#r)n.includes(r)||(at(a.effect),this.#r.delete(r))};ensure(e,n){var r=me,a=td();if(n&&!this.#t.has(e)&&!this.#r.has(e))if(a){var i=document.createDocumentFragment(),o=nn();i.append(o),this.#r.set(e,{effect:wt(()=>n(o)),fragment:i})}else this.#t.set(e,wt(()=>n(this.anchor)));if(this.#e.set(r,e),a){for(const[s,l]of this.#t)s===e?r.skipped_effects.delete(l):r.skipped_effects.add(l);for(const[s,l]of this.#r)s===e?r.skipped_effects.delete(l.effect):r.skipped_effects.add(l.effect);r.oncommit(this.#i),r.ondiscard(this.#a)}else this.#i()}}function ze(t,e,n=!1){var r=new Sd(t),a=n?yn:0;function i(o,s){r.ensure(o,s)}$i(()=>{var o=!1;e((s,l=!0)=>{o=!0,i(l,s)}),o||i(!1,null)},a)}function en(t,e){return e}function A0(t,e,n){for(var r=[],a=e.length,i=0;i<a;i++)rl(e[i].e,r,!0);cd(r,()=>{var o=r.length===0&&n!==null;if(o){var s=n,l=s.parentNode;c0(l),l.append(s),t.items.clear(),Ct(t,e[0].prev,e[a-1].next)}for(var c=0;c<a;c++){var u=e[c];o||(t.items.delete(u.k),Ct(t,u.prev,u.next)),at(u.e,!o)}t.first===e[0]&&(t.first=e[0].prev)})}function tn(t,e,n,r,a,i=null){var o=t,s=new Map,l=null,c=(e&Pf)!==0,u=(e&Wf)!==0,f=(e&zf)!==0;if(c){var d=t;o=d.appendChild(nn())}var _=null,h=dn(()=>{var A=n();return Xs(A)?A:A==null?[]:Zs(A)}),p,m=!0;function w(){M0(E,p,o,e,r),_!==null&&(p.length===0?(_.fragment?(o.before(_.fragment),_.fragment=null):al(_.effect),b.first=_.effect):pr(_.effect,()=>{_=null}))}var b=$i(()=>{p=g(h);for(var A=p.length,S=new Set,k=me,M=null,O=td(),L=0;L<A;L+=1){var N=p[L],$=r(N,L),B=m?null:s.get($);B?(u&&Sr(B.v,N),f?Sr(B.i,L):B.i=L,O&&k.skipped_effects.delete(B.e)):(B=j0(m?o:null,M,N,$,L,a,e,n),m&&(B.o=!0,M===null?l=B:M.next=B,M=B),s.set($,B)),S.add($)}if(A===0&&i&&!_)if(m)_={fragment:null,effect:wt(()=>i(o))};else{var V=document.createDocumentFragment(),D=nn();V.append(D),_={fragment:V,effect:wt(()=>i(D))}}if(!m)if(O){for(const[P,U]of s)S.has(P)||k.skipped_effects.add(U.e);k.oncommit(w),k.ondiscard(()=>{})}else w();g(h)}),E={effect:b,items:s,first:l};m=!1}function M0(t,e,n,r,a){var i=(r&Cp)!==0,o=e.length,s=t.items,l=t.first,c,u=null,f,d=[],_=[],h,p,m,w;if(i)for(w=0;w<o;w+=1)h=e[w],p=a(h,w),m=s.get(p),m.a?.measure(),(f??=new Set).add(m);for(w=0;w<o;w+=1){if(h=e[w],p=a(h,w),m=s.get(p),t.first??=m,!m.o){m.o=!0;var b=u?u.next:l;Ct(t,u,m),Ct(t,m,b),Yi(m,b,n),u=m,d=[],_=[],l=u.next;continue}if((m.e.f&dt)!==0&&(al(m.e),i&&(m.a?.unfix(),(f??=new Set).delete(m))),m!==l){if(c!==void 0&&c.has(m)){if(d.length<_.length){var E=_[0],A;u=E.prev;var S=d[0],k=d[d.length-1];for(A=0;A<d.length;A+=1)Yi(d[A],E,n);for(A=0;A<_.length;A+=1)c.delete(_[A]);Ct(t,S.prev,k.next),Ct(t,u,S),Ct(t,k,E),l=E,u=k,w-=1,d=[],_=[]}else c.delete(m),Yi(m,l,n),Ct(t,m.prev,m.next),Ct(t,m,u===null?t.first:u.next),Ct(t,u,m),u=m;continue}for(d=[],_=[];l!==null&&l.k!==p;)(l.e.f&dt)===0&&(c??=new Set).add(l),_.push(l),l=l.next;if(l===null)continue;m=l}d.push(m),u=m,l=m.next}if(l!==null||c!==void 0){for(var M=c===void 0?[]:Zs(c);l!==null;)(l.e.f&dt)===0&&M.push(l),l=l.next;var O=M.length;if(O>0){var L=(r&Pf)!==0&&o===0?n:null;if(i){for(w=0;w<O;w+=1)M[w].a?.measure();for(w=0;w<O;w+=1)M[w].a?.fix()}A0(t,M,L)}}i&&Zn(()=>{if(f!==void 0)for(m of f)m.a?.apply()})}function j0(t,e,n,r,a,i,o,s){var l=(o&Wf)!==0,c=(o&$p)===0,u=l?c?fe(n,!1,!1):qn(n):n,f=(o&zf)===0?a:qn(a),d={i:f,v:u,k:r,a:null,e:null,o:!1,prev:e,next:null};if(t===null){var _=document.createDocumentFragment();_.append(t=nn())}return d.e=wt(()=>i(t,u,f,s)),e!==null&&(e.next=d),d}function Yi(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,a=e?e.e.nodes_start:n,i=t.e.nodes_start;i!==null&&i!==r;){var o=ba(i);a.before(i),i=o}}function Ct(t,e,n){e===null?(t.first=n,t.effect.first=n&&n.e):(e.e.next&&(e.e.next.prev=null),e.next=n,e.e.next=n&&n.e),n===null?t.effect.last=e&&e.e:(n.e.prev&&(n.e.prev.next=null),n.prev=e,n.e.prev=e&&e.e)}function L0(t,e,n=!1,r=!1,a=!1){var i=t,o="";Te(()=>{var s=se;if(o!==(o=e()??"")&&(s.nodes_start!==null&&(sd(s.nodes_start,s.nodes_end),s.nodes_start=s.nodes_end=null),o!=="")){var l=o+"";n?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var c=xd(l);if((n||r)&&(c=gn(c)),ca(gn(c),c.lastChild),n||r)for(;gn(c);)i.before(gn(c));else i.before(c)}})}function C0(t,e,...n){var r=new Sd(t);$i(()=>{const a=e()??null;r.ensure(a,a&&(i=>a(i,...n)))},yn)}function kd(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(n=kd(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function $0(){for(var t,e,n=0,r="",a=arguments.length;n<a;n++)(t=arguments[n])&&(e=kd(t))&&(r&&(r+=" "),r+=e);return r}function ur(t){return typeof t=="object"?$0(t):t??""}function T0(t,e,n){var r=t==null?"":""+t;return r===""?null:r}function R0(t,e){return t==null?null:String(t)}function Be(t,e,n,r,a,i){var o=t.__className;if(o!==n||o===void 0){var s=T0(n);s==null?t.removeAttribute("class"):e?t.className=s:t.setAttribute("class",s),t.__className=n}return i}function Ed(t,e,n,r){var a=t.__style;if(a!==e){var i=R0(e);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}return r}function il(t,e,n=!1){if(t.multiple){if(e==null)return;if(!Xs(e))return Up();for(var r of t.options)r.selected=e.includes(zl(r));return}for(r of t.options){var a=zl(r);if(s0(a,e)){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ad(t){var e=new MutationObserver(()=>{il(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Li(()=>{e.disconnect()})}function zl(t){return"__value"in t?t.__value:t.value}const O0=Symbol("is custom element"),N0=Symbol("is html");function Bn(t,e,n,r){var a=F0(t);a[e]!==(a[e]=n)&&(e==="loading"&&(t[bp]=n),n==null?t.removeAttribute(e):typeof n!="string"&&I0(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function F0(t){return t.__attributes??={[O0]:t.nodeName.includes("-"),[N0]:t.namespaceURI===Bp}}var Pl=new Map;function I0(t){var e=t.getAttribute("is")||t.nodeName,n=Pl.get(e);if(n)return n;Pl.set(e,n=[]);for(var r,a=t,i=Element.prototype;i!==a;){r=Of(a);for(var o in r)r[o].set&&n.push(o);a=Qs(a)}return n}const W0=()=>performance.now(),Kt={tick:t=>requestAnimationFrame(t),now:()=>W0(),tasks:new Set};function Md(){const t=Kt.now();Kt.tasks.forEach(e=>{e.c(t)||(Kt.tasks.delete(e),e.f())}),Kt.tasks.size!==0&&Kt.tick(Md)}function z0(t){let e;return Kt.tasks.size===0&&Kt.tick(Md),{promise:new Promise(n=>{Kt.tasks.add(e={c:t,f:n})}),abort(){Kt.tasks.delete(e)}}}function Ra(t,e){Fr(()=>{t.dispatchEvent(new CustomEvent(e))})}function P0(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function Dl(t){const e={},n=t.split(";");for(const r of n){const[a,i]=r.split(":");if(!a||i===void 0)break;const o=P0(a.trim());e[o]=i.trim()}return e}const D0=t=>t;function In(t,e,n,r){var a=(t&Ip)!==0,i=(t&Wp)!==0,o=a&&i,s=(t&zp)!==0,l=o?"both":a?"in":"out",c,u=e.inert,f=e.style.overflow,d,_;function h(){return Fr(()=>c??=n()(e,r?.()??{},{direction:l}))}var p={is_global:s,in(){if(e.inert=u,!a){_?.abort(),_?.reset?.();return}i||d?.abort(),Ra(e,"introstart"),d=gs(e,h(),_,1,()=>{Ra(e,"introend"),d?.abort(),d=c=void 0,e.style.overflow=f})},out(E){if(!i){E?.(),c=void 0;return}e.inert=!0,Ra(e,"outrostart"),_=gs(e,h(),d,0,()=>{Ra(e,"outroend"),E?.()})},stop:()=>{d?.abort(),_?.abort()}},m=se;if((m.transitions??=[]).push(p),a&&_s){var w=s;if(!w){for(var b=m.parent;b&&(b.f&yn)!==0;)for(;(b=b.parent)&&(b.f&Pt)===0;);w=!b||(b.f&Ai)!==0}w&&ad(()=>{H(()=>p.in())})}}function gs(t,e,n,r,a){var i=r===1;if(gp(e)){var o,s=!1;return Zn(()=>{if(!s){var m=e({direction:i?"in":"out"});o=gs(t,m,n,r,a)}}),{abort:()=>{s=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!e?.duration)return a(),{abort:cr,deactivate:cr,reset:cr,t:()=>r};const{delay:l=0,css:c,tick:u,easing:f=D0}=e;var d=[];if(i&&n===void 0&&(u&&u(0,1),c)){var _=Dl(c(0,1));d.push(_,_)}var h=()=>1-r,p=t.animate(d,{duration:l,fill:"forwards"});return p.onfinish=()=>{p.cancel();var m=n?.t()??1-r;n?.abort();var w=r-m,b=e.duration*Math.abs(w),E=[];if(b>0){var A=!1;if(c)for(var S=Math.ceil(b/16.666666666666668),k=0;k<=S;k+=1){var M=m+w*f(k/S),O=Dl(c(M,1-M));E.push(O),A||=O.overflow==="hidden"}A&&(t.style.overflow="hidden"),h=()=>{var L=p.currentTime;return m+w*f(L/b)},u&&z0(()=>{if(p.playState!=="running")return!1;var L=h();return u(L,1-L),!0})}p=t.animate(E,{duration:b,fill:"forwards"}),p.onfinish=()=>{h=()=>r,u?.(r,1-r),a()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=cr)},deactivate:()=>{a=cr},reset:()=>{r===0&&u?.(1,0)},t:()=>h()}}function B0(t,e,n=e){var r=new WeakSet;f0(t,"input",async a=>{var i=a?t.defaultValue:t.value;if(i=Ki(t)?Xi(i):i,n(i),me!==null&&r.add(me),await md(),i!==(i=e())){var o=t.selectionStart,s=t.selectionEnd,l=t.value.length;if(t.value=i??"",s!==null){var c=t.value.length;o===s&&s===l&&c>l?(t.selectionStart=c,t.selectionEnd=c):(t.selectionStart=o,t.selectionEnd=Math.min(s,c))}}}),H(e)==null&&t.value&&(n(Ki(t)?Xi(t.value):t.value),me!==null&&r.add(me)),wa(()=>{var a=e();if(t===document.activeElement){var i=Ja??me;if(r.has(i))return}Ki(t)&&a===Xi(t.value)||t.type==="date"&&!a&&!t.value||a!==t.value&&(t.value=a??"")})}function Ki(t){var e=t.type;return e==="number"||e==="range"}function Xi(t){return t===""?null:+t}function U0(t,e,n){var r=Pn(t,e);r&&r.set&&(t[e]=n,Li(()=>{t[e]=null}))}function Bl(t,e){return t===e||t?.[Zt]===e}function Er(t={},e,n,r){return ad(()=>{var a,i;return wa(()=>{a=i,i=[],H(()=>{t!==n(...i)&&(e(t,...i),a&&Bl(n(...a),t)&&e(null,...a))})}),()=>{Zn(()=>{i&&Bl(n(...i),t)&&e(null,...i)})}}),t}function Ti(t=!1){const e=Le,n=e.l.u;if(!n)return;let r=()=>te(e.s);if(t){let a=0,i={};const o=ma(()=>{let s=!1;const l=e.s;for(const c in l)l[c]!==i[c]&&(i[c]=l[c],s=!0);return s&&a++,a});r=()=>g(o)}n.b.length&&_0(()=>{Ul(e,r),os(n.b)}),ci(()=>{const a=H(()=>n.m.map(pp));return()=>{for(const i of a)typeof i=="function"&&i()}}),n.a.length&&ci(()=>{Ul(e,r),os(n.a)})}function Ul(t,e){if(t.l.s)for(const n of t.l.s)g(n);e()}let Oa=!1;function V0(t){var e=Oa;try{return Oa=!1,[t(),Oa]}finally{Oa=e}}function re(t,e,n,r){var a=!Nr||(n&Rp)!==0,i=(n&Np)!==0,o=(n&Fp)!==0,s=r,l=!0,c=()=>(l&&(l=!1,s=o?H(r):r),s),u;if(i){var f=Zt in t||mp in t;u=Pn(t,e)?.set??(f&&e in t?E=>t[e]=E:void 0)}var d,_=!1;i?[d,_]=V0(()=>t[e]):d=t[e],d===void 0&&r!==void 0&&(d=c(),u&&(a&&Ep(),u(d)));var h;if(a?h=()=>{var E=t[e];return E===void 0?c():(l=!0,E)}:h=()=>{var E=t[e];return E!==void 0&&(s=void 0),E===void 0?s:E},a&&(n&Op)===0)return h;if(u){var p=t.$$legacy;return(function(E,A){return arguments.length>0?((!a||!A||p||_)&&u(A?h():E),E):h()})}var m=!1,w=((n&Tp)!==0?ma:dn)(()=>(m=!1,h()));i&&g(w);var b=se;return(function(E,A){if(arguments.length>0){const S=A?g(w):a&&i?_n(E):E;return R(w,S),m=!0,s!==void 0&&(s=S),E}return Qn&&m||(b.f&Xt)!==0?w.v:g(w)})}function jd(t){Le===null&&wp(),Nr&&Le.l!==null?H0(Le).m.push(t):ci(()=>{const e=H(t);if(typeof e=="function")return e})}function H0(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const q0="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(q0);const G0="modulepreload",J0=function(t,e){return new URL(t,e).href},Vl={},Ld=function(e,n,r){let a=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");a=c(n.map(u=>{if(u=J0(u,r),u in Vl)return;Vl[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(r)for(let h=o.length-1;h>=0;h--){const p=o[h];if(p.href===u&&(!f||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":G0,f||(_.as="script"),_.crossOrigin="",_.href=u,l&&_.setAttribute("nonce",l),document.head.appendChild(_),f)return new Promise((h,p)=>{_.addEventListener("load",h),_.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return a.then(o=>{for(const s of o||[])s.status==="rejected"&&i(s.reason);return e().catch(i)})};Gp();var Y0=Object.defineProperty,Cd=t=>{throw TypeError(t)},K0=(t,e,n)=>e in t?Y0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Zi=(t,e,n)=>K0(t,typeof e!="symbol"?e+"":e,n),$d=(t,e,n)=>e.has(t)||Cd("Cannot "+n),Jt=(t,e,n)=>($d(t,e,"read from private field"),e.get(t)),Hl=(t,e,n)=>e.has(t)?Cd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Na=(t,e,n,r)=>($d(t,e,"write to private field"),e.set(t,n),n),fr,vt;const fn=Object.freeze({American:0,0:"American",British:1,1:"British",Australian:2,2:"Australian",Canadian:3,3:"Canadian",Indian:4,4:"Indian"}),Vr=Object.freeze({Plain:0,0:"Plain",Markdown:1,1:"Markdown",Typst:2,2:"Typst"});let Gn=class Ya{static __wrap(e){const n=Object.create(Ya.prototype);return n.__wbg_ptr=e,ql.register(n,n.__wbg_ptr,n),n}static __unwrap(e){return e instanceof Ya?e.__destroy_into_raw():0}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ql.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_lint_free(e,0)}static from_json(e){const n=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.lint_from_json(n,r);if(a[2])throw $t(a[1]);return Ya.__wrap(a[0])}get_problem_text(){let e,n;try{const r=y.lint_get_problem_text(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}lint_kind(){let e,n;try{const r=y.lint_lint_kind(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}lint_kind_pretty(){let e,n;try{const r=y.lint_lint_kind_pretty(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}message(){let e,n;try{const r=y.lint_message(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}message_html(){let e,n;try{const r=y.lint_message_html(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}span(){const e=y.lint_span(this.__wbg_ptr);return gi.__wrap(e)}suggestion_count(){return y.lint_suggestion_count(this.__wbg_ptr)>>>0}suggestions(){const e=y.lint_suggestions(this.__wbg_ptr);var n=ea(e[0],e[1]);return y.__wbindgen_free(e[0],e[1]*4,4),n}to_json(){let e,n;try{const r=y.lint_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}};Symbol.dispose&&(Gn.prototype[Symbol.dispose]=Gn.prototype.free);let ps=class hs{static __wrap(e){const n=Object.create(hs.prototype);return n.__wbg_ptr=e,Gl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Gl.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_linter_free(e,0)}apply_suggestion(e,n,r){let a,i;try{const l=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),c=le;Qi(n,Gn),Qi(r,ua);const u=y.linter_apply_suggestion(this.__wbg_ptr,l,c,n.__wbg_ptr,r.__wbg_ptr);var o=u[0],s=u[1];if(u[3])throw o=0,s=0,$t(u[2]);return a=o,i=s,ie(o,s)}finally{y.__wbindgen_free(a,i,1)}}clear_ignored_lints(){y.linter_clear_ignored_lints(this.__wbg_ptr)}clear_words(){y.linter_clear_words(this.__wbg_ptr)}context_hash(e,n){const r=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),a=le;Qi(n,Gn);const i=y.linter_context_hash(this.__wbg_ptr,r,a,n.__wbg_ptr);return BigInt.asUintN(64,i)}export_ignored_lints(){let e,n;try{const r=y.linter_export_ignored_lints(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}export_words(){const e=y.linter_export_words(this.__wbg_ptr);var n=ea(e[0],e[1]);return y.__wbindgen_free(e[0],e[1]*4,4),n}generate_stats_file(){let e,n;try{const r=y.linter_generate_stats_file(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_dialect(){return y.linter_get_dialect(this.__wbg_ptr)}get_lint_config_as_json(){let e,n;try{const r=y.linter_get_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_lint_config_as_object(){return y.linter_get_lint_config_as_object(this.__wbg_ptr)}get_lint_descriptions_as_json(){let e,n;try{const r=y.linter_get_lint_descriptions_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_lint_descriptions_as_object(){return y.linter_get_lint_descriptions_as_object(this.__wbg_ptr)}get_lint_descriptions_html_as_json(){let e,n;try{const r=y.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_lint_descriptions_html_as_object(){return y.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr)}get_structured_lint_config_as_json(){let e,n;try{const r=y.linter_get_structured_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get_structured_lint_config_as_object(){return y.linter_get_structured_lint_config_as_object(this.__wbg_ptr)}ignore_hashes(e){const n=nh(e,y.__wbindgen_malloc),r=le;y.linter_ignore_hashes(this.__wbg_ptr,n,r)}ignore_lints(e,n){const r=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),a=le,i=ws(n,y.__wbindgen_malloc),o=le;y.linter_ignore_lints(this.__wbg_ptr,r,a,i,o)}import_ignored_lints(e){const n=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.linter_import_ignored_lints(this.__wbg_ptr,n,r);if(a[1])throw $t(a[0])}import_stats_file(e){const n=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.linter_import_stats_file(this.__wbg_ptr,n,r);if(a[1])throw $t(a[0])}import_weirpack(e){const n=rh(e,y.__wbindgen_malloc),r=le,a=y.linter_import_weirpack(this.__wbg_ptr,n,r);if(a[2])throw $t(a[1]);return $t(a[0])}import_words(e){const n=ws(e,y.__wbindgen_malloc),r=le;y.linter_import_words(this.__wbg_ptr,n,r)}is_likely_english(e){const n=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le;return y.linter_is_likely_english(this.__wbg_ptr,n,r)!==0}isolate_english(e){let n,r;try{const a=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),i=le,o=y.linter_isolate_english(this.__wbg_ptr,a,i);return n=o[0],r=o[1],ie(o[0],o[1])}finally{y.__wbindgen_free(n,r,1)}}lint(e,n,r,a,i,o){const s=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),l=le;var c=Rt(a)?0:Re(a,y.__wbindgen_malloc,y.__wbindgen_realloc),u=le;const f=y.linter_lint(this.__wbg_ptr,s,l,n,r,c,u,i,o);var d=ea(f[0],f[1]);return y.__wbindgen_free(f[0],f[1]*4,4),d}static new(e){const n=y.linter_new(e);return hs.__wrap(n)}organized_lints(e,n,r,a,i,o){const s=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),l=le;var c=Rt(a)?0:Re(a,y.__wbindgen_malloc,y.__wbindgen_realloc),u=le;const f=y.linter_organized_lints(this.__wbg_ptr,s,l,n,r,c,u,i,o);var d=ea(f[0],f[1]);return y.__wbindgen_free(f[0],f[1]*4,4),d}set_lint_config_from_json(e){const n=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.linter_set_lint_config_from_json(this.__wbg_ptr,n,r);if(a[1])throw $t(a[0])}set_lint_config_from_object(e){const n=y.linter_set_lint_config_from_object(this.__wbg_ptr,e);if(n[1])throw $t(n[0])}summarize_stats(e,n){return y.linter_summarize_stats(this.__wbg_ptr,!Rt(e),Rt(e)?BigInt(0):e,!Rt(n),Rt(n)?BigInt(0):n)}};Symbol.dispose&&(ps.prototype[Symbol.dispose]=ps.prototype.free);let _i=class Td{static __wrap(e){const n=Object.create(Td.prototype);return n.__wbg_ptr=e,Jl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Jl.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_organizedgroup_free(e,0)}get group(){let e,n;try{const r=y.__wbg_get_organizedgroup_group(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}get lints(){const e=y.__wbg_get_organizedgroup_lints(this.__wbg_ptr);var n=ea(e[0],e[1]);return y.__wbindgen_free(e[0],e[1]*4,4),n}set group(e){const n=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le;y.__wbg_set_organizedgroup_group(this.__wbg_ptr,n,r)}set lints(e){const n=ws(e,y.__wbindgen_malloc),r=le;y.__wbg_set_organizedgroup_lints(this.__wbg_ptr,n,r)}};Symbol.dispose&&(_i.prototype[Symbol.dispose]=_i.prototype.free);let gi=class Ka{static __wrap(e){const n=Object.create(Ka.prototype);return n.__wbg_ptr=e,Yl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Yl.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_span_free(e,0)}get end(){return y.__wbg_get_span_end(this.__wbg_ptr)>>>0}get start(){return y.__wbg_get_span_start(this.__wbg_ptr)>>>0}set end(e){y.__wbg_set_span_end(this.__wbg_ptr,e)}set start(e){y.__wbg_set_span_start(this.__wbg_ptr,e)}static from_json(e){const n=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.span_from_json(n,r);if(a[2])throw $t(a[1]);return Ka.__wrap(a[0])}is_empty(){return y.span_is_empty(this.__wbg_ptr)!==0}len(){return y.span_len(this.__wbg_ptr)>>>0}static new(e,n){const r=y.span_new(e,n);return Ka.__wrap(r)}to_json(){let e,n;try{const r=y.span_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}};Symbol.dispose&&(gi.prototype[Symbol.dispose]=gi.prototype.free);let ua=class ms{static __wrap(e){const n=Object.create(ms.prototype);return n.__wbg_ptr=e,Kl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Kl.unregister(this),e}free(){const e=this.__destroy_into_raw();y.__wbg_suggestion_free(e,0)}static from_json(e){const n=Re(e,y.__wbindgen_malloc,y.__wbindgen_realloc),r=le,a=y.suggestion_from_json(n,r);if(a[2])throw $t(a[1]);return ms.__wrap(a[0])}get_replacement_text(){let e,n;try{const r=y.suggestion_get_replacement_text(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}kind(){return y.suggestion_kind(this.__wbg_ptr)}to_json(){let e,n;try{const r=y.suggestion_to_json(this.__wbg_ptr);return e=r[0],n=r[1],ie(r[0],r[1])}finally{y.__wbindgen_free(e,n,1)}}};Symbol.dispose&&(ua.prototype[Symbol.dispose]=ua.prototype.free);const He=Object.freeze({Replace:0,0:"Replace",Remove:1,1:"Remove",InsertAfter:2,2:"InsertAfter"});function X0(){return y.get_default_lint_config()}function Z0(){let t,e;try{const n=y.get_default_lint_config_as_json();return t=n[0],e=n[1],ie(n[0],n[1])}finally{y.__wbindgen_free(t,e,1)}}function Q0(){y.setup()}function eh(t){let e,n;try{const r=Re(t,y.__wbindgen_malloc,y.__wbindgen_realloc),a=le,i=y.to_title_case(r,a);return e=i[0],n=i[1],ie(i[0],i[1])}finally{y.__wbindgen_free(e,n,1)}}function Rd(){return{__proto__:null,"./harper_wasm_slim_bg.js":{__proto__:null,__wbg_Error_30c8987f7c2ed4e2:function(e,n){return Error(ie(e,n))},__wbg_String_8564e559799eccda:function(e,n){const r=String(n),a=Re(r,y.__wbindgen_malloc,y.__wbindgen_realloc),i=le;pt().setInt32(e+4,i,!0),pt().setInt32(e+0,a,!0)},__wbg___wbindgen_boolean_get_5b446f51afd21013:function(e){const n=e,r=typeof n=="boolean"?n:void 0;return Rt(r)?16777215:r?1:0},__wbg___wbindgen_debug_string_4687d8d8c2017d52:function(e,n){const r=bs(n),a=Re(r,y.__wbindgen_malloc,y.__wbindgen_realloc),i=le;pt().setInt32(e+4,i,!0),pt().setInt32(e+0,a,!0)},__wbg___wbindgen_is_function_1f9d30630b8b1d3d:function(e){return typeof e=="function"},__wbg___wbindgen_is_object_3c45d4f2dde4e749:function(e){const n=e;return typeof n=="object"&&n!==null},__wbg___wbindgen_is_string_90b56bc79aad6f6c:function(e){return typeof e=="string"},__wbg___wbindgen_jsval_loose_eq_677f21e468d6b461:function(e,n){return e==n},__wbg___wbindgen_number_get_2e0e7dee9f701a71:function(e,n){const r=n,a=typeof r=="number"?r:void 0;pt().setFloat64(e+8,Rt(a)?0:a,!0),pt().setInt32(e+0,!Rt(a),!0)},__wbg___wbindgen_string_get_0380ccaa2f57f0d9:function(e,n){const r=n,a=typeof r=="string"?r:void 0;var i=Rt(a)?0:Re(a,y.__wbindgen_malloc,y.__wbindgen_realloc),o=le;pt().setInt32(e+4,o,!0),pt().setInt32(e+0,i,!0)},__wbg___wbindgen_throw_41e9ee4f547fc59a:function(e,n){throw new Error(ie(e,n))},__wbg_call_6137034ef55c9d0f:function(){return nr(function(e,n){return e.call(n)},arguments)},__wbg_done_b41a1d26cdb37fb6:function(e){return e.done},__wbg_entries_fb6397112b1de25f:function(e){return Object.entries(e)},__wbg_error_757e9472f8410341:function(e,n){let r,a;try{r=e,a=n,console.error(ie(e,n))}finally{y.__wbindgen_free(r,a,1)}},__wbg_getRandomValues_973dabfb0ad1769f:function(){return nr(function(e,n){globalThis.crypto.getRandomValues(eo(e,n))},arguments)},__wbg_getRandomValues_a608c4436c19407a:function(){return nr(function(e,n){globalThis.crypto.getRandomValues(eo(e,n))},arguments)},__wbg_getTime_f5a55efff2585d5d:function(e){return e.getTime()},__wbg_get_658f6698067d9515:function(){return nr(function(e,n){return Reflect.get(e,n)},arguments)},__wbg_get_6c896e0571ddae51:function(e,n){return e[n>>>0]},__wbg_get_unchecked_288889d017702237:function(e,n){return e[n>>>0]},__wbg_instanceof_ArrayBuffer_a99f175873e5d9b8:function(e){let n;try{n=e instanceof ArrayBuffer}catch{n=!1}return n},__wbg_instanceof_Uint8Array_828cef2aaacafc31:function(e){let n;try{n=e instanceof Uint8Array}catch{n=!1}return n},__wbg_iterator_e3c31c892080e444:function(){return Symbol.iterator},__wbg_length_7f3c00c40364105e:function(e){return e.length},__wbg_length_d4bdea10311bd9cf:function(e){return e.length},__wbg_lint_new:function(e){return Gn.__wrap(e)},__wbg_lint_unwrap:function(e){return Gn.__unwrap(e)},__wbg_log_1f8cbb01c83d06c2:function(e,n,r,a,i,o,s,l){let c,u;try{c=e,u=n,console.log(ie(e,n),ie(r,a),ie(i,o),ie(s,l))}finally{y.__wbindgen_free(c,u,1)}},__wbg_log_a54ca6b45e09078a:function(e,n){let r,a;try{r=e,a=n,console.log(ie(e,n))}finally{y.__wbindgen_free(r,a,1)}},__wbg_mark_6b7f03786f5e4d61:function(e,n){performance.mark(ie(e,n))},__wbg_measure_0e21b33a1c6e3a29:function(){return nr(function(e,n,r,a){let i,o,s,l;try{i=e,o=n,s=r,l=a,performance.measure(ie(e,n),ie(r,a))}finally{y.__wbindgen_free(i,o,1),y.__wbindgen_free(s,l,1)}},arguments)},__wbg_new_0_72d020f0c63443d4:function(){return new Date},__wbg_new_1dbf7428bba60a42:function(e){return new Uint8Array(e)},__wbg_new_227d7c05414eb861:function(){return new Error},__wbg_new_28744009d011f847:function(){return new Map},__wbg_new_617a8cdb8bb1130e:function(){return new Object},__wbg_new_ee2291f50781bf1d:function(){return new Array},__wbg_next_33784799010f1bbe:function(e){return e.next},__wbg_next_f4aac29c42af995c:function(){return nr(function(e){return e.next()},arguments)},__wbg_organizedgroup_new:function(e){return _i.__wrap(e)},__wbg_prototypesetcall_bc27214492979395:function(e,n,r){Uint8Array.prototype.set.call(eo(e,n),r)},__wbg_set_6ae97e73113c4f0b:function(e,n,r){return e.set(n,r)},__wbg_set_6be42768c690e380:function(e,n,r){e[n]=r},__wbg_set_bea140a88be9b277:function(e,n,r){e[n>>>0]=r},__wbg_stack_3b0d974bbf31e44f:function(e,n){const r=n.stack,a=Re(r,y.__wbindgen_malloc,y.__wbindgen_realloc),i=le;pt().setInt32(e+4,i,!0),pt().setInt32(e+0,a,!0)},__wbg_suggestion_new:function(e){return ua.__wrap(e)},__wbg_value_f3c585ee8f5ba40c:function(e){return e.value},__wbindgen_generic_0000000000000001:function(e){return e},__wbindgen_generic_0000000000000002:function(e,n){return ie(e,n)},__wbindgen_init_externref_table:function(){const e=y.__wbindgen_externrefs,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)}}}}const ql=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_lint_free(t,1)),Gl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_linter_free(t,1)),Jl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_organizedgroup_free(t,1)),Yl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_span_free(t,1)),Kl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>y.__wbg_suggestion_free(t,1));function Od(t){const e=y.__externref_table_alloc();return y.__wbindgen_externrefs.set(e,t),e}function Qi(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`)}function bs(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const a=t.description;return a==null?"Symbol":`Symbol(${a})`}if(e=="function"){const a=t.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(t)){const a=t.length;let i="[";a>0&&(i+=bs(t[0]));for(let o=1;o<a;o++)i+=", "+bs(t[o]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n&&n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function ea(t,e){t=t>>>0;const n=pt(),r=[];for(let a=t;a<t+4*e;a+=4)r.push(y.__wbindgen_externrefs.get(n.getUint32(a,!0)));return y.__externref_drop_slice(t,e),r}function eo(t,e){return t=t>>>0,hr().subarray(t/1,t/1+e)}let Hr=null;function th(){return(Hr===null||Hr.byteLength===0)&&(Hr=new BigUint64Array(y.memory.buffer)),Hr}let Rn=null;function pt(){return(Rn===null||Rn.buffer.detached===!0||Rn.buffer.detached===void 0&&Rn.buffer!==y.memory.buffer)&&(Rn=new DataView(y.memory.buffer)),Rn}function ie(t,e){return ih(t>>>0,e)}let qr=null;function hr(){return(qr===null||qr.byteLength===0)&&(qr=new Uint8Array(y.memory.buffer)),qr}function nr(t,e){try{return t.apply(this,e)}catch(n){const r=Od(n);y.__wbindgen_exn_store(r)}}function Rt(t){return t==null}function nh(t,e){const n=e(t.length*8,8)>>>0;return th().set(t,n/8),le=t.length,n}function rh(t,e){const n=e(t.length*1,1)>>>0;return hr().set(t,n/1),le=t.length,n}function ws(t,e){const n=e(t.length*4,4)>>>0;for(let r=0;r<t.length;r++){const a=Od(t[r]);pt().setUint32(n+4*r,a,!0)}return le=t.length,n}function Re(t,e,n){if(n===void 0){const s=ta.encode(t),l=e(s.length,1)>>>0;return hr().subarray(l,l+s.length).set(s),le=s.length,l}let r=t.length,a=e(r,1)>>>0;const i=hr();let o=0;for(;o<r;o++){const s=t.charCodeAt(o);if(s>127)break;i[a+o]=s}if(o!==r){o!==0&&(t=t.slice(o)),a=n(a,r,r=o+t.length*3,1)>>>0;const s=hr().subarray(a+o,a+r),l=ta.encodeInto(t,s);o+=l.written,a=n(a,r,o,1)>>>0}return le=o,a}function $t(t){const e=y.__wbindgen_externrefs.get(t);return y.__externref_table_dealloc(t),e}let Xa=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Xa.decode();const ah=2146435072;let to=0;function ih(t,e){return to+=e,to>=ah&&(Xa=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Xa.decode(),to=e),Xa.decode(hr().subarray(t,t+e))}const ta=new TextEncoder;"encodeInto"in ta||(ta.encodeInto=function(t,e){const n=ta.encode(t);return e.set(n),{read:t.length,written:n.length}});let le=0,y;function Nd(t,e){return y=t.exports,Hr=null,Rn=null,qr=null,y.__wbindgen_start(),y}async function oh(t,e){if(typeof Response=="function"&&t instanceof Response){if(!t.ok)throw new Error(`failed to fetch Wasm: ${t.status} ${t.statusText} fetching '${t.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(a){if(n(t.type)&&t.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",a);else throw a}const r=await t.arrayBuffer();return await WebAssembly.instantiate(r,e)}else{const r=await WebAssembly.instantiate(t,e);return r instanceof WebAssembly.Instance?{instance:r,module:t}:r}function n(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}function sh(t){if(y!==void 0)return y;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module:t}=t:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const e=Rd();t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t));const n=new WebAssembly.Instance(t,e);return Nd(n)}async function Fd(t){if(y!==void 0)return y;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),t===void 0&&(t=new URL);const e=Rd();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n}=await oh(await t,e);return Nd(n)}const lh=Object.freeze(Object.defineProperty({__proto__:null,Dialect:fn,Language:Vr,Lint:Gn,Linter:ps,OrganizedGroup:_i,Span:gi,Suggestion:ua,SuggestionKind:He,default:Fd,get_default_lint_config:X0,get_default_lint_config_as_json:Z0,initSync:sh,setup:Q0,to_title_case:eh},Symbol.toStringTag,{value:"Module"})),ch=Object.freeze({American:0,0:"American",British:1,1:"British",Australian:2,2:"Australian",Canadian:3,3:"Canadian",Indian:4,4:"Indian"}),uh=Object.freeze({Plain:0,0:"Plain",Markdown:1,1:"Markdown",Typst:2,2:"Typst"});class Et{static __wrap(e){const n=Object.create(Et.prototype);return n.__wbg_ptr=e,Xl.register(n,n.__wbg_ptr,n),n}static __unwrap(e){return e instanceof Et?e.__destroy_into_raw():0}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Xl.unregister(this),e}free(){const e=this.__destroy_into_raw();v.__wbg_lint_free(e,0)}static from_json(e){const n=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=ce,a=v.lint_from_json(n,r);if(a[2])throw Tt(a[1]);return Et.__wrap(a[0])}get_problem_text(){let e,n;try{const r=v.lint_get_problem_text(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}lint_kind(){let e,n;try{const r=v.lint_lint_kind(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}lint_kind_pretty(){let e,n;try{const r=v.lint_lint_kind_pretty(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}message(){let e,n;try{const r=v.lint_message(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}message_html(){let e,n;try{const r=v.lint_message_html(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}span(){const e=v.lint_span(this.__wbg_ptr);return bn.__wrap(e)}suggestion_count(){return v.lint_suggestion_count(this.__wbg_ptr)>>>0}suggestions(){const e=v.lint_suggestions(this.__wbg_ptr);var n=na(e[0],e[1]);return v.__wbindgen_free(e[0],e[1]*4,4),n}to_json(){let e,n;try{const r=v.lint_to_json(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}}Symbol.dispose&&(Et.prototype[Symbol.dispose]=Et.prototype.free);class Ar{static __wrap(e){const n=Object.create(Ar.prototype);return n.__wbg_ptr=e,Zl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Zl.unregister(this),e}free(){const e=this.__destroy_into_raw();v.__wbg_linter_free(e,0)}apply_suggestion(e,n,r){let a,i;try{const l=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),c=ce;no(n,Et),no(r,vn);const u=v.linter_apply_suggestion(this.__wbg_ptr,l,c,n.__wbg_ptr,r.__wbg_ptr);var o=u[0],s=u[1];if(u[3])throw o=0,s=0,Tt(u[2]);return a=o,i=s,oe(o,s)}finally{v.__wbindgen_free(a,i,1)}}clear_ignored_lints(){v.linter_clear_ignored_lints(this.__wbg_ptr)}clear_words(){v.linter_clear_words(this.__wbg_ptr)}context_hash(e,n){const r=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),a=ce;no(n,Et);const i=v.linter_context_hash(this.__wbg_ptr,r,a,n.__wbg_ptr);return BigInt.asUintN(64,i)}export_ignored_lints(){let e,n;try{const r=v.linter_export_ignored_lints(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}export_words(){const e=v.linter_export_words(this.__wbg_ptr);var n=na(e[0],e[1]);return v.__wbindgen_free(e[0],e[1]*4,4),n}generate_stats_file(){let e,n;try{const r=v.linter_generate_stats_file(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get_dialect(){return v.linter_get_dialect(this.__wbg_ptr)}get_lint_config_as_json(){let e,n;try{const r=v.linter_get_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get_lint_config_as_object(){return v.linter_get_lint_config_as_object(this.__wbg_ptr)}get_lint_descriptions_as_json(){let e,n;try{const r=v.linter_get_lint_descriptions_as_json(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get_lint_descriptions_as_object(){return v.linter_get_lint_descriptions_as_object(this.__wbg_ptr)}get_lint_descriptions_html_as_json(){let e,n;try{const r=v.linter_get_lint_descriptions_html_as_json(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get_lint_descriptions_html_as_object(){return v.linter_get_lint_descriptions_html_as_object(this.__wbg_ptr)}get_structured_lint_config_as_json(){let e,n;try{const r=v.linter_get_structured_lint_config_as_json(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get_structured_lint_config_as_object(){return v.linter_get_structured_lint_config_as_object(this.__wbg_ptr)}ignore_hashes(e){const n=mh(e,v.__wbindgen_malloc),r=ce;v.linter_ignore_hashes(this.__wbg_ptr,n,r)}ignore_lints(e,n){const r=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),a=ce,i=vs(n,v.__wbindgen_malloc),o=ce;v.linter_ignore_lints(this.__wbg_ptr,r,a,i,o)}import_ignored_lints(e){const n=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=ce,a=v.linter_import_ignored_lints(this.__wbg_ptr,n,r);if(a[1])throw Tt(a[0])}import_stats_file(e){const n=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=ce,a=v.linter_import_stats_file(this.__wbg_ptr,n,r);if(a[1])throw Tt(a[0])}import_weirpack(e){const n=bh(e,v.__wbindgen_malloc),r=ce,a=v.linter_import_weirpack(this.__wbg_ptr,n,r);if(a[2])throw Tt(a[1]);return Tt(a[0])}import_words(e){const n=vs(e,v.__wbindgen_malloc),r=ce;v.linter_import_words(this.__wbg_ptr,n,r)}is_likely_english(e){const n=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=ce;return v.linter_is_likely_english(this.__wbg_ptr,n,r)!==0}isolate_english(e){let n,r;try{const a=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),i=ce,o=v.linter_isolate_english(this.__wbg_ptr,a,i);return n=o[0],r=o[1],oe(o[0],o[1])}finally{v.__wbindgen_free(n,r,1)}}lint(e,n,r,a,i,o){const s=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),l=ce;var c=Ot(a)?0:Oe(a,v.__wbindgen_malloc,v.__wbindgen_realloc),u=ce;const f=v.linter_lint(this.__wbg_ptr,s,l,n,r,c,u,i,o);var d=na(f[0],f[1]);return v.__wbindgen_free(f[0],f[1]*4,4),d}static new(e){const n=v.linter_new(e);return Ar.__wrap(n)}organized_lints(e,n,r,a,i,o){const s=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),l=ce;var c=Ot(a)?0:Oe(a,v.__wbindgen_malloc,v.__wbindgen_realloc),u=ce;const f=v.linter_organized_lints(this.__wbg_ptr,s,l,n,r,c,u,i,o);var d=na(f[0],f[1]);return v.__wbindgen_free(f[0],f[1]*4,4),d}set_lint_config_from_json(e){const n=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=ce,a=v.linter_set_lint_config_from_json(this.__wbg_ptr,n,r);if(a[1])throw Tt(a[0])}set_lint_config_from_object(e){const n=v.linter_set_lint_config_from_object(this.__wbg_ptr,e);if(n[1])throw Tt(n[0])}summarize_stats(e,n){return v.linter_summarize_stats(this.__wbg_ptr,!Ot(e),Ot(e)?BigInt(0):e,!Ot(n),Ot(n)?BigInt(0):n)}}Symbol.dispose&&(Ar.prototype[Symbol.dispose]=Ar.prototype.free);class Mr{static __wrap(e){const n=Object.create(Mr.prototype);return n.__wbg_ptr=e,Ql.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Ql.unregister(this),e}free(){const e=this.__destroy_into_raw();v.__wbg_organizedgroup_free(e,0)}get group(){let e,n;try{const r=v.__wbg_get_organizedgroup_group(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}get lints(){const e=v.__wbg_get_organizedgroup_lints(this.__wbg_ptr);var n=na(e[0],e[1]);return v.__wbindgen_free(e[0],e[1]*4,4),n}set group(e){const n=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=ce;v.__wbg_set_organizedgroup_group(this.__wbg_ptr,n,r)}set lints(e){const n=vs(e,v.__wbindgen_malloc),r=ce;v.__wbg_set_organizedgroup_lints(this.__wbg_ptr,n,r)}}Symbol.dispose&&(Mr.prototype[Symbol.dispose]=Mr.prototype.free);class bn{static __wrap(e){const n=Object.create(bn.prototype);return n.__wbg_ptr=e,ec.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ec.unregister(this),e}free(){const e=this.__destroy_into_raw();v.__wbg_span_free(e,0)}get end(){return v.__wbg_get_span_end(this.__wbg_ptr)>>>0}get start(){return v.__wbg_get_span_start(this.__wbg_ptr)>>>0}set end(e){v.__wbg_set_span_end(this.__wbg_ptr,e)}set start(e){v.__wbg_set_span_start(this.__wbg_ptr,e)}static from_json(e){const n=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=ce,a=v.span_from_json(n,r);if(a[2])throw Tt(a[1]);return bn.__wrap(a[0])}is_empty(){return v.span_is_empty(this.__wbg_ptr)!==0}len(){return v.span_len(this.__wbg_ptr)>>>0}static new(e,n){const r=v.span_new(e,n);return bn.__wrap(r)}to_json(){let e,n;try{const r=v.span_to_json(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}}Symbol.dispose&&(bn.prototype[Symbol.dispose]=bn.prototype.free);class vn{static __wrap(e){const n=Object.create(vn.prototype);return n.__wbg_ptr=e,tc.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,tc.unregister(this),e}free(){const e=this.__destroy_into_raw();v.__wbg_suggestion_free(e,0)}static from_json(e){const n=Oe(e,v.__wbindgen_malloc,v.__wbindgen_realloc),r=ce,a=v.suggestion_from_json(n,r);if(a[2])throw Tt(a[1]);return vn.__wrap(a[0])}get_replacement_text(){let e,n;try{const r=v.suggestion_get_replacement_text(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}kind(){return v.suggestion_kind(this.__wbg_ptr)}to_json(){let e,n;try{const r=v.suggestion_to_json(this.__wbg_ptr);return e=r[0],n=r[1],oe(r[0],r[1])}finally{v.__wbindgen_free(e,n,1)}}}Symbol.dispose&&(vn.prototype[Symbol.dispose]=vn.prototype.free);const fh=Object.freeze({Replace:0,0:"Replace",Remove:1,1:"Remove",InsertAfter:2,2:"InsertAfter"});function dh(){return v.get_default_lint_config()}function _h(){let t,e;try{const n=v.get_default_lint_config_as_json();return t=n[0],e=n[1],oe(n[0],n[1])}finally{v.__wbindgen_free(t,e,1)}}function gh(){v.setup()}function ph(t){let e,n;try{const r=Oe(t,v.__wbindgen_malloc,v.__wbindgen_realloc),a=ce,i=v.to_title_case(r,a);return e=i[0],n=i[1],oe(i[0],i[1])}finally{v.__wbindgen_free(e,n,1)}}function Id(){return{__proto__:null,"./harper_wasm_bg.js":{__proto__:null,__wbg_Error_30c8987f7c2ed4e2:function(e,n){return Error(oe(e,n))},__wbg_String_8564e559799eccda:function(e,n){const r=String(n),a=Oe(r,v.__wbindgen_malloc,v.__wbindgen_realloc),i=ce;ht().setInt32(e+4,i,!0),ht().setInt32(e+0,a,!0)},__wbg___wbindgen_boolean_get_5b446f51afd21013:function(e){const n=e,r=typeof n=="boolean"?n:void 0;return Ot(r)?16777215:r?1:0},__wbg___wbindgen_debug_string_4687d8d8c2017d52:function(e,n){const r=ys(n),a=Oe(r,v.__wbindgen_malloc,v.__wbindgen_realloc),i=ce;ht().setInt32(e+4,i,!0),ht().setInt32(e+0,a,!0)},__wbg___wbindgen_is_function_1f9d30630b8b1d3d:function(e){return typeof e=="function"},__wbg___wbindgen_is_object_3c45d4f2dde4e749:function(e){const n=e;return typeof n=="object"&&n!==null},__wbg___wbindgen_is_string_90b56bc79aad6f6c:function(e){return typeof e=="string"},__wbg___wbindgen_jsval_loose_eq_677f21e468d6b461:function(e,n){return e==n},__wbg___wbindgen_number_get_2e0e7dee9f701a71:function(e,n){const r=n,a=typeof r=="number"?r:void 0;ht().setFloat64(e+8,Ot(a)?0:a,!0),ht().setInt32(e+0,!Ot(a),!0)},__wbg___wbindgen_string_get_0380ccaa2f57f0d9:function(e,n){const r=n,a=typeof r=="string"?r:void 0;var i=Ot(a)?0:Oe(a,v.__wbindgen_malloc,v.__wbindgen_realloc),o=ce;ht().setInt32(e+4,o,!0),ht().setInt32(e+0,i,!0)},__wbg___wbindgen_throw_41e9ee4f547fc59a:function(e,n){throw new Error(oe(e,n))},__wbg_call_6137034ef55c9d0f:function(){return rr(function(e,n){return e.call(n)},arguments)},__wbg_done_b41a1d26cdb37fb6:function(e){return e.done},__wbg_entries_fb6397112b1de25f:function(e){return Object.entries(e)},__wbg_error_757e9472f8410341:function(e,n){let r,a;try{r=e,a=n,console.error(oe(e,n))}finally{v.__wbindgen_free(r,a,1)}},__wbg_getRandomValues_973dabfb0ad1769f:function(){return rr(function(e,n){globalThis.crypto.getRandomValues(ro(e,n))},arguments)},__wbg_getRandomValues_a608c4436c19407a:function(){return rr(function(e,n){globalThis.crypto.getRandomValues(ro(e,n))},arguments)},__wbg_getTime_f5a55efff2585d5d:function(e){return e.getTime()},__wbg_get_658f6698067d9515:function(){return rr(function(e,n){return Reflect.get(e,n)},arguments)},__wbg_get_6c896e0571ddae51:function(e,n){return e[n>>>0]},__wbg_get_unchecked_288889d017702237:function(e,n){return e[n>>>0]},__wbg_instanceof_ArrayBuffer_a99f175873e5d9b8:function(e){let n;try{n=e instanceof ArrayBuffer}catch{n=!1}return n},__wbg_instanceof_Uint8Array_828cef2aaacafc31:function(e){let n;try{n=e instanceof Uint8Array}catch{n=!1}return n},__wbg_iterator_e3c31c892080e444:function(){return Symbol.iterator},__wbg_length_7f3c00c40364105e:function(e){return e.length},__wbg_length_d4bdea10311bd9cf:function(e){return e.length},__wbg_lint_new:function(e){return Et.__wrap(e)},__wbg_lint_unwrap:function(e){return Et.__unwrap(e)},__wbg_log_1f8cbb01c83d06c2:function(e,n,r,a,i,o,s,l){let c,u;try{c=e,u=n,console.log(oe(e,n),oe(r,a),oe(i,o),oe(s,l))}finally{v.__wbindgen_free(c,u,1)}},__wbg_log_a54ca6b45e09078a:function(e,n){let r,a;try{r=e,a=n,console.log(oe(e,n))}finally{v.__wbindgen_free(r,a,1)}},__wbg_mark_6b7f03786f5e4d61:function(e,n){performance.mark(oe(e,n))},__wbg_measure_0e21b33a1c6e3a29:function(){return rr(function(e,n,r,a){let i,o,s,l;try{i=e,o=n,s=r,l=a,performance.measure(oe(e,n),oe(r,a))}finally{v.__wbindgen_free(i,o,1),v.__wbindgen_free(s,l,1)}},arguments)},__wbg_new_0_72d020f0c63443d4:function(){return new Date},__wbg_new_1dbf7428bba60a42:function(e){return new Uint8Array(e)},__wbg_new_227d7c05414eb861:function(){return new Error},__wbg_new_28744009d011f847:function(){return new Map},__wbg_new_617a8cdb8bb1130e:function(){return new Object},__wbg_new_ee2291f50781bf1d:function(){return new Array},__wbg_next_33784799010f1bbe:function(e){return e.next},__wbg_next_f4aac29c42af995c:function(){return rr(function(e){return e.next()},arguments)},__wbg_organizedgroup_new:function(e){return Mr.__wrap(e)},__wbg_prototypesetcall_bc27214492979395:function(e,n,r){Uint8Array.prototype.set.call(ro(e,n),r)},__wbg_set_6ae97e73113c4f0b:function(e,n,r){return e.set(n,r)},__wbg_set_6be42768c690e380:function(e,n,r){e[n]=r},__wbg_set_bea140a88be9b277:function(e,n,r){e[n>>>0]=r},__wbg_stack_3b0d974bbf31e44f:function(e,n){const r=n.stack,a=Oe(r,v.__wbindgen_malloc,v.__wbindgen_realloc),i=ce;ht().setInt32(e+4,i,!0),ht().setInt32(e+0,a,!0)},__wbg_suggestion_new:function(e){return vn.__wrap(e)},__wbg_value_f3c585ee8f5ba40c:function(e){return e.value},__wbindgen_generic_0000000000000001:function(e){return e},__wbindgen_generic_0000000000000002:function(e,n){return oe(e,n)},__wbindgen_init_externref_table:function(){const e=v.__wbindgen_externrefs,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)}}}}const Xl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>v.__wbg_lint_free(t,1)),Zl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>v.__wbg_linter_free(t,1)),Ql=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>v.__wbg_organizedgroup_free(t,1)),ec=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>v.__wbg_span_free(t,1)),tc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>v.__wbg_suggestion_free(t,1));function Wd(t){const e=v.__externref_table_alloc();return v.__wbindgen_externrefs.set(e,t),e}function no(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`)}function ys(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const a=t.description;return a==null?"Symbol":`Symbol(${a})`}if(e=="function"){const a=t.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(t)){const a=t.length;let i="[";a>0&&(i+=ys(t[0]));for(let o=1;o<a;o++)i+=", "+ys(t[o]);return i+="]",i}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n&&n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function na(t,e){t=t>>>0;const n=ht(),r=[];for(let a=t;a<t+4*e;a+=4)r.push(v.__wbindgen_externrefs.get(n.getUint32(a,!0)));return v.__externref_drop_slice(t,e),r}function ro(t,e){return t=t>>>0,mr().subarray(t/1,t/1+e)}let Gr=null;function hh(){return(Gr===null||Gr.byteLength===0)&&(Gr=new BigUint64Array(v.memory.buffer)),Gr}let On=null;function ht(){return(On===null||On.buffer.detached===!0||On.buffer.detached===void 0&&On.buffer!==v.memory.buffer)&&(On=new DataView(v.memory.buffer)),On}function oe(t,e){return yh(t>>>0,e)}let Jr=null;function mr(){return(Jr===null||Jr.byteLength===0)&&(Jr=new Uint8Array(v.memory.buffer)),Jr}function rr(t,e){try{return t.apply(this,e)}catch(n){const r=Wd(n);v.__wbindgen_exn_store(r)}}function Ot(t){return t==null}function mh(t,e){const n=e(t.length*8,8)>>>0;return hh().set(t,n/8),ce=t.length,n}function bh(t,e){const n=e(t.length*1,1)>>>0;return mr().set(t,n/1),ce=t.length,n}function vs(t,e){const n=e(t.length*4,4)>>>0;for(let r=0;r<t.length;r++){const a=Wd(t[r]);ht().setUint32(n+4*r,a,!0)}return ce=t.length,n}function Oe(t,e,n){if(n===void 0){const s=ra.encode(t),l=e(s.length,1)>>>0;return mr().subarray(l,l+s.length).set(s),ce=s.length,l}let r=t.length,a=e(r,1)>>>0;const i=mr();let o=0;for(;o<r;o++){const s=t.charCodeAt(o);if(s>127)break;i[a+o]=s}if(o!==r){o!==0&&(t=t.slice(o)),a=n(a,r,r=o+t.length*3,1)>>>0;const s=mr().subarray(a+o,a+r),l=ra.encodeInto(t,s);o+=l.written,a=n(a,r,o,1)>>>0}return ce=o,a}function Tt(t){const e=v.__wbindgen_externrefs.get(t);return v.__externref_table_dealloc(t),e}let Za=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Za.decode();const wh=2146435072;let ao=0;function yh(t,e){return ao+=e,ao>=wh&&(Za=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Za.decode(),ao=e),Za.decode(mr().subarray(t,t+e))}const ra=new TextEncoder;"encodeInto"in ra||(ra.encodeInto=function(t,e){const n=ra.encode(t);return e.set(n),{read:t.length,written:n.length}});let ce=0,v;function zd(t,e){return v=t.exports,Gr=null,On=null,Jr=null,v.__wbindgen_start(),v}async function vh(t,e){if(typeof Response=="function"&&t instanceof Response){if(!t.ok)throw new Error(`failed to fetch Wasm: ${t.status} ${t.statusText} fetching '${t.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(a){if(n(t.type)&&t.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",a);else throw a}const r=await t.arrayBuffer();return await WebAssembly.instantiate(r,e)}else{const r=await WebAssembly.instantiate(t,e);return r instanceof WebAssembly.Instance?{instance:r,module:t}:r}function n(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}function xh(t){if(v!==void 0)return v;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module:t}=t:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const e=Id();t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t));const n=new WebAssembly.Instance(t,e);return zd(n)}async function Sh(t){if(v!==void 0)return v;t!==void 0&&(Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),t===void 0&&(t=new URL);const e=Id();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n}=await vh(await t,e);return zd(n)}const kh=Object.freeze(Object.defineProperty({__proto__:null,Dialect:ch,Language:uh,Lint:Et,Linter:Ar,OrganizedGroup:Mr,Span:bn,Suggestion:vn,SuggestionKind:fh,default:Sh,get_default_lint_config:dh,get_default_lint_config_as_json:_h,initSync:xh,setup:gh,to_title_case:ph},Symbol.toStringTag,{value:"Module"})),Eh=class Qa extends Promise{constructor(e){super(n=>{n()}),Hl(this,fr),Hl(this,vt),Na(this,fr,e)}static from(e){return new Qa(n=>{n(e())})}static resolve(e){return new Qa(n=>{n(e)})}static reject(e){return new Qa((n,r)=>{r(e)})}then(e,n){return Jt(this,vt)??Na(this,vt,new Promise(Jt(this,fr))),Jt(this,vt).then(e,n)}catch(e){return Jt(this,vt)??Na(this,vt,new Promise(Jt(this,fr))),Jt(this,vt).catch(e)}finally(e){return Jt(this,vt)??Na(this,vt,new Promise(Jt(this,fr))),Jt(this,vt).finally(e)}};fr=new WeakMap;vt=new WeakMap;let ol=Eh;const Ah=(t,e,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const a=Object.getOwnPropertyDescriptor(t,n),i=Object.getOwnPropertyDescriptor(e,n);!Mh(a,i)&&r||Object.defineProperty(t,n,i)},Mh=function(t,e){return t===void 0||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},jh=(t,e)=>{const n=Object.getPrototypeOf(e);n!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,n)},Lh=(t,e)=>`/* Wrapped ${t}*/
${e}`,Ch=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),$h=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Th=(t,e,n)=>{const r=n===""?"":`with ${n.trim()}() `,a=Lh.bind(null,r,e.toString());Object.defineProperty(a,"name",$h),Object.defineProperty(t,"toString",{...Ch,value:a})};function Rh(t,e,{ignoreNonConfigurable:n=!1}={}){const{name:r}=t;for(const a of Reflect.ownKeys(e))Ah(t,e,a,n);return jh(t,e),Th(t,e,r),t}const Oh=new WeakMap;function nc(t,{cacheKey:e=([r])=>r,cache:n=new Map}={}){const r=new Map,a=function(...i){const o=e(i);if(r.has(o))return r.get(o);const s=(async()=>{try{if(n&&await n.has(o))return await n.get(o);const c=await t.apply(this,i);try{return c}finally{n&&await n.set(o,c)}}finally{r.delete(o)}})();return r.set(o,s),s};return Rh(a,t,{ignoreNonConfigurable:!0}),Oh.set(a,n),a}function Pd(t){return t.includes("harper_wasm_slim")?"slim":"full"}function Nh(t){return t.glueFlavor??Pd(typeof t.url=="string"?t.url:t.url.href)}function Fh(t){return t==="slim"?lh:kh}function Ih(t,e){return e==="slim"?t:t.includes("harper_wasm_bg.wasm")?t.replace("harper_wasm_bg.wasm","harper_wasm_slim_bg.wasm"):null}function rc(t){return typeof process<"u"&&t.startsWith("file://")?Ld(()=>import("./vite-browser-external-BIHI7g3E.js"),[],import.meta.url).then(e=>new Promise((n,r)=>{e.readFile(new URL(t).pathname,(a,i)=>{a&&r(a),n(i)})})):t}async function ac(t,e){const n=Fh(e),r=Ih(t,e);if(r!=null)try{await Fd({module_or_path:rc(r)})}catch(a){if(e==="slim")throw a}return await n.default({module_or_path:rc(t)}),n}const Wh={full:nc(t=>ac(t,"full")),slim:nc(t=>ac(t,"slim"))};function Dd(t,e){return Wh[e](t)}class Bd{constructor(){Zi(this,"url",""),Zi(this,"glueFlavor","full"),Zi(this,"inner",null)}static create(e,n){const r=new zh;return r.url=e,r.glueFlavor=n??Pd(typeof e=="string"?e:e.href),r.inner=ol.from(()=>Dd(typeof r.url=="string"?r.url:r.url.href,r.glueFlavor)),r}async getDefaultLintConfigAsJSON(){return(await this.inner).get_default_lint_config_as_json()}async getDefaultLintConfig(){return(await this.inner).get_default_lint_config()}async toTitleCase(e){return(await this.inner).to_title_case(e)}async setup(){(await this.inner).setup()}}class zh extends Bd{async createLinter(e){return(await this.getBinaryModule()).Linter.new(e??fn.American)}async getBinaryModule(){return await ol.from(()=>Dd(typeof this.url=="string"?this.url:this.url.href,this.glueFlavor))}}var Ph=Object.defineProperty,Dh=(t,e,n)=>e in t?Ph(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,St=(t,e,n)=>Dh(t,typeof e!="symbol"?e+"":e,n);function Bh(t){switch(t){case"plaintext":return Vr.Plain;case"typst":return Vr.Typst;case"markdown":case void 0:return Vr.Markdown;default:return console.warn(`Unknown Harper language '${String(t)}'; using markdown.`),Vr.Markdown}}function ic(t,e){return[t,Bh(e?.language),e?.forceAllHeadings??!1,e?.regex_mask,e?.dedup??!0,e?.isolateEnglish??!1]}class Uh{constructor(e){St(this,"binary"),St(this,"inner"),St(this,"disposed",!1),this.binary=e.binary,this.binary.setup(),this.inner=this.createInner(e.dialect)}createInner(e){return ol.from(async()=>(await this.binary.setup(),this.binary.createLinter(e)))}async setup(){await this.lint("",{language:"plaintext"});const e=await this.exportIgnoredLints();await this.importIgnoredLints(e)}async lint(e,n){return(await this.inner).lint(...ic(e,n))}async organizedLints(e,n){const a=(await this.inner).organized_lints(...ic(e,n)),i={};for(const o of a)i[o.group]=o.lints,o.free();return i}async applySuggestion(e,n,r){return(await this.inner).apply_suggestion(e,n,r)}async isLikelyEnglish(e){return(await this.inner).is_likely_english(e)}async isolateEnglish(e){return(await this.inner).isolate_english(e)}async getLintConfig(){return(await this.inner).get_lint_config_as_object()}async getDefaultLintConfigAsJSON(){return await this.binary.getDefaultLintConfigAsJSON()}async getDefaultLintConfig(){return await this.binary.getDefaultLintConfig()}async getStructuredLintConfig(){return(await this.inner).get_structured_lint_config_as_object()}async getStructuredLintConfigJSON(){return(await this.inner).get_structured_lint_config_as_json()}async setLintConfig(e){(await this.inner).set_lint_config_from_object(e)}async getLintConfigAsJSON(){return(await this.inner).get_lint_config_as_json()}async setLintConfigWithJSON(e){(await this.inner).set_lint_config_from_json(e)}async toTitleCase(e){return await this.binary.toTitleCase(e)}async getLintDescriptions(){return(await this.inner).get_lint_descriptions_as_object()}async getLintDescriptionsAsJSON(){return(await this.inner).get_lint_descriptions_as_json()}async getLintDescriptionsHTML(){return(await this.inner).get_lint_descriptions_html_as_object()}async getLintDescriptionsHTMLAsJSON(){return(await this.inner).get_lint_descriptions_html_as_json()}async ignoreLint(e,n){return await this.ignoreLints(e,[n])}async ignoreLints(e,n){(await this.inner).ignore_lints(e,n)}async ignoreLintHash(e){(await this.inner).ignore_hashes(new BigUint64Array([e]))}async exportIgnoredLints(){return(await this.inner).export_ignored_lints()}async importIgnoredLints(e){(await this.inner).import_ignored_lints(e)}async contextHash(e,n){return(await this.inner).context_hash(e,n)}async clearIgnoredLints(){(await this.inner).clear_ignored_lints()}async clearWords(){return(await this.inner).clear_words()}async importWords(e){return(await this.inner).import_words(e)}async exportWords(){return(await this.inner).export_words()}async getDialect(){return(await this.inner).get_dialect()}async setDialect(e){const n=await this.inner;return n.get_dialect()!==e&&(n.free(),this.inner=this.createInner(e)),Promise.resolve()}async summarizeStats(e,n){return(await this.inner).summarize_stats(e,n)}async generateStatsFile(){return(await this.inner).generate_stats_file()}async importStatsFile(e){return(await this.inner).import_stats_file(e)}async loadWeirpackFromBlob(e){const n=new Uint8Array(await e.arrayBuffer());return this.loadWeirpackFromBytes(n)}async loadWeirpackFromBytes(e){const n=await this.inner,r=e instanceof Uint8Array?e:Uint8Array.from(e);return n.import_weirpack(r)}async dispose(){if(this.disposed)return;this.disposed=!0,(await this.inner).free()}}function Vh(t,e){if(!t)throw new Error("Assertion failed")}class Hh{constructor(e){St(this,"binary"),this.binary=e,this.binary.setup()}async serializeArg(e){var n;const{Lint:r,Span:a,Suggestion:i}=await this.binary.getBinaryModule();if(Array.isArray(e))return{json:JSON.stringify(await Promise.all(e.map(s=>this.serializeArg(s)))),type:"Array"};const o=typeof e;switch(o){case"string":case"number":case"boolean":case"undefined":return{json:JSON.stringify(e),type:o};case"bigint":return{json:e.toString(),type:o}}if(e.to_json!==void 0){const s=e.to_json();let l;const c=(n=e.constructor)==null?void 0:n.name;if(e instanceof r||c==="Lint"?l="Lint":e instanceof i||c==="Suggestion"?l="Suggestion":(e instanceof a||c==="Span")&&(l="Span"),l===void 0)throw new Error("Unhandled case: type undefined");return{json:s,type:l}}if(o=="object")return{json:JSON.stringify(await Promise.all(Object.entries(e).map(([s,l])=>this.serializeArg([s,l])))),type:"object"};throw new Error(`Unhandled case: ${e}`)}async serialize(e){return{procName:e.procName,args:await Promise.all(e.args.map(n=>this.serializeArg(n)))}}async deserializeArg(e){const{Lint:n,Span:r,Suggestion:a}=await this.binary.getBinaryModule();switch(e.type){case"bigint":return BigInt(e.json);case"undefined":return;case"boolean":case"number":case"string":return JSON.parse(e.json);case"Suggestion":return a.from_json(e.json);case"Lint":return n.from_json(e.json);case"Span":return r.from_json(e.json);case"Array":{const i=JSON.parse(e.json);return Vh(Array.isArray(i)),await Promise.all(i.map(o=>this.deserializeArg(o)))}case"object":{const i=JSON.parse(e.json);return Object.fromEntries(await Promise.all(i.map(o=>this.deserializeArg(o))))}default:throw new Error(`Unhandled case: ${e.type}`)}}async deserialize(e){return{procName:e.procName,args:await Promise.all(e.args.map(n=>this.deserializeArg(n)))}}}const Ud=`var __defProp = Object.defineProperty;
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
    __wbg_Error_30c8987f7c2ed4e2: function(arg0, arg1) {
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
    __wbg___wbindgen_boolean_get_5b446f51afd21013: function(arg0) {
      const v = arg0;
      const ret = typeof v === "boolean" ? v : void 0;
      return isLikeNone$1(ret) ? 16777215 : ret ? 1 : 0;
    },
    __wbg___wbindgen_debug_string_4687d8d8c2017d52: function(arg0, arg1) {
      const ret = debugString$1(arg1);
      const ptr1 = passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_is_function_1f9d30630b8b1d3d: function(arg0) {
      const ret = typeof arg0 === "function";
      return ret;
    },
    __wbg___wbindgen_is_object_3c45d4f2dde4e749: function(arg0) {
      const val = arg0;
      const ret = typeof val === "object" && val !== null;
      return ret;
    },
    __wbg___wbindgen_is_string_90b56bc79aad6f6c: function(arg0) {
      const ret = typeof arg0 === "string";
      return ret;
    },
    __wbg___wbindgen_jsval_loose_eq_677f21e468d6b461: function(arg0, arg1) {
      const ret = arg0 == arg1;
      return ret;
    },
    __wbg___wbindgen_number_get_2e0e7dee9f701a71: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "number" ? obj : void 0;
      getDataViewMemory0$1().setFloat64(arg0 + 8 * 1, isLikeNone$1(ret) ? 0 : ret, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, !isLikeNone$1(ret), true);
    },
    __wbg___wbindgen_string_get_0380ccaa2f57f0d9: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "string" ? obj : void 0;
      var ptr1 = isLikeNone$1(ret) ? 0 : passStringToWasm0$1(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN$1;
      getDataViewMemory0$1().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0$1().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_throw_41e9ee4f547fc59a: function(arg0, arg1) {
      throw new Error(getStringFromWasm0$1(arg0, arg1));
    },
    __wbg_call_6137034ef55c9d0f: function() {
      return handleError$1(function(arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
      }, arguments);
    },
    __wbg_done_b41a1d26cdb37fb6: function(arg0) {
      const ret = arg0.done;
      return ret;
    },
    __wbg_entries_fb6397112b1de25f: function(arg0) {
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
    __wbg_getRandomValues_973dabfb0ad1769f: function() {
      return handleError$1(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0$1(arg0, arg1));
      }, arguments);
    },
    __wbg_getRandomValues_a608c4436c19407a: function() {
      return handleError$1(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0$1(arg0, arg1));
      }, arguments);
    },
    __wbg_getTime_f5a55efff2585d5d: function(arg0) {
      const ret = arg0.getTime();
      return ret;
    },
    __wbg_get_658f6698067d9515: function() {
      return handleError$1(function(arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_6c896e0571ddae51: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_unchecked_288889d017702237: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_instanceof_ArrayBuffer_a99f175873e5d9b8: function(arg0) {
      let result;
      try {
        result = arg0 instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Uint8Array_828cef2aaacafc31: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_iterator_e3c31c892080e444: function() {
      const ret = Symbol.iterator;
      return ret;
    },
    __wbg_length_7f3c00c40364105e: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_length_d4bdea10311bd9cf: function(arg0) {
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
    __wbg_new_0_72d020f0c63443d4: function() {
      const ret = /* @__PURE__ */ new Date();
      return ret;
    },
    __wbg_new_1dbf7428bba60a42: function(arg0) {
      const ret = new Uint8Array(arg0);
      return ret;
    },
    __wbg_new_227d7c05414eb861: function() {
      const ret = new Error();
      return ret;
    },
    __wbg_new_28744009d011f847: function() {
      const ret = /* @__PURE__ */ new Map();
      return ret;
    },
    __wbg_new_617a8cdb8bb1130e: function() {
      const ret = new Object();
      return ret;
    },
    __wbg_new_ee2291f50781bf1d: function() {
      const ret = new Array();
      return ret;
    },
    __wbg_next_33784799010f1bbe: function(arg0) {
      const ret = arg0.next;
      return ret;
    },
    __wbg_next_f4aac29c42af995c: function() {
      return handleError$1(function(arg0) {
        const ret = arg0.next();
        return ret;
      }, arguments);
    },
    __wbg_organizedgroup_new: function(arg0) {
      const ret = OrganizedGroup$1.__wrap(arg0);
      return ret;
    },
    __wbg_prototypesetcall_bc27214492979395: function(arg0, arg1, arg2) {
      Uint8Array.prototype.set.call(getArrayU8FromWasm0$1(arg0, arg1), arg2);
    },
    __wbg_set_6ae97e73113c4f0b: function(arg0, arg1, arg2) {
      const ret = arg0.set(arg1, arg2);
      return ret;
    },
    __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    },
    __wbg_set_bea140a88be9b277: function(arg0, arg1, arg2) {
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
    __wbg_value_f3c585ee8f5ba40c: function(arg0) {
      const ret = arg0.value;
      return ret;
    },
    __wbindgen_generic_0000000000000001: function(arg0) {
      const ret = arg0;
      return ret;
    },
    __wbindgen_generic_0000000000000002: function(arg0, arg1) {
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
    __wbg_Error_30c8987f7c2ed4e2: function(arg0, arg1) {
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
    __wbg___wbindgen_boolean_get_5b446f51afd21013: function(arg0) {
      const v = arg0;
      const ret = typeof v === "boolean" ? v : void 0;
      return isLikeNone(ret) ? 16777215 : ret ? 1 : 0;
    },
    __wbg___wbindgen_debug_string_4687d8d8c2017d52: function(arg0, arg1) {
      const ret = debugString(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_is_function_1f9d30630b8b1d3d: function(arg0) {
      const ret = typeof arg0 === "function";
      return ret;
    },
    __wbg___wbindgen_is_object_3c45d4f2dde4e749: function(arg0) {
      const val = arg0;
      const ret = typeof val === "object" && val !== null;
      return ret;
    },
    __wbg___wbindgen_is_string_90b56bc79aad6f6c: function(arg0) {
      const ret = typeof arg0 === "string";
      return ret;
    },
    __wbg___wbindgen_jsval_loose_eq_677f21e468d6b461: function(arg0, arg1) {
      const ret = arg0 == arg1;
      return ret;
    },
    __wbg___wbindgen_number_get_2e0e7dee9f701a71: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "number" ? obj : void 0;
      getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    },
    __wbg___wbindgen_string_get_0380ccaa2f57f0d9: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "string" ? obj : void 0;
      var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_throw_41e9ee4f547fc59a: function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
    __wbg_call_6137034ef55c9d0f: function() {
      return handleError(function(arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
      }, arguments);
    },
    __wbg_done_b41a1d26cdb37fb6: function(arg0) {
      const ret = arg0.done;
      return ret;
    },
    __wbg_entries_fb6397112b1de25f: function(arg0) {
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
    __wbg_getRandomValues_973dabfb0ad1769f: function() {
      return handleError(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getRandomValues_a608c4436c19407a: function() {
      return handleError(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getTime_f5a55efff2585d5d: function(arg0) {
      const ret = arg0.getTime();
      return ret;
    },
    __wbg_get_658f6698067d9515: function() {
      return handleError(function(arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_6c896e0571ddae51: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_unchecked_288889d017702237: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_instanceof_ArrayBuffer_a99f175873e5d9b8: function(arg0) {
      let result;
      try {
        result = arg0 instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Uint8Array_828cef2aaacafc31: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_iterator_e3c31c892080e444: function() {
      const ret = Symbol.iterator;
      return ret;
    },
    __wbg_length_7f3c00c40364105e: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_length_d4bdea10311bd9cf: function(arg0) {
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
    __wbg_new_0_72d020f0c63443d4: function() {
      const ret = /* @__PURE__ */ new Date();
      return ret;
    },
    __wbg_new_1dbf7428bba60a42: function(arg0) {
      const ret = new Uint8Array(arg0);
      return ret;
    },
    __wbg_new_227d7c05414eb861: function() {
      const ret = new Error();
      return ret;
    },
    __wbg_new_28744009d011f847: function() {
      const ret = /* @__PURE__ */ new Map();
      return ret;
    },
    __wbg_new_617a8cdb8bb1130e: function() {
      const ret = new Object();
      return ret;
    },
    __wbg_new_ee2291f50781bf1d: function() {
      const ret = new Array();
      return ret;
    },
    __wbg_next_33784799010f1bbe: function(arg0) {
      const ret = arg0.next;
      return ret;
    },
    __wbg_next_f4aac29c42af995c: function() {
      return handleError(function(arg0) {
        const ret = arg0.next();
        return ret;
      }, arguments);
    },
    __wbg_organizedgroup_new: function(arg0) {
      const ret = OrganizedGroup2.__wrap(arg0);
      return ret;
    },
    __wbg_prototypesetcall_bc27214492979395: function(arg0, arg1, arg2) {
      Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
    },
    __wbg_set_6ae97e73113c4f0b: function(arg0, arg1, arg2) {
      const ret = arg0.set(arg1, arg2);
      return ret;
    },
    __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    },
    __wbg_set_bea140a88be9b277: function(arg0, arg1, arg2) {
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
    __wbg_value_f3c585ee8f5ba40c: function(arg0) {
      const ret = arg0.value;
      return ret;
    },
    __wbindgen_generic_0000000000000001: function(arg0) {
      const ret = arg0;
      return ret;
    },
    __wbindgen_generic_0000000000000002: function(arg0, arg1) {
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
`,oc=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",Ud],{type:"text/javascript;charset=utf-8"});function qh(t){let e;try{if(e=oc&&(self.URL||self.webkitURL).createObjectURL(oc),!e)throw"";const n=new Worker(e,{type:"module",name:t?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Ud),{type:"module",name:t?.name})}}class Gh{constructor(e){St(this,"binary"),St(this,"serializer"),St(this,"dialect"),St(this,"worker"),St(this,"requestQueue"),St(this,"working",!0),St(this,"disposed",!1),this.binary=e.binary,this.serializer=new Hh(this.binary),this.dialect=e.dialect,this.worker=new qh,this.requestQueue=[],this.worker.onmessage=()=>{this.setupMainEventListeners(),this.worker.postMessage([this.binary.url,this.dialect,Nh(this.binary)]),this.working=!1,this.submitRemainingRequests()}}setupMainEventListeners(){this.worker.onmessage=e=>{const{resolve:n}=this.requestQueue.shift();this.serializer.deserializeArg(e.data).then(r=>{n(r),this.working=!1,this.submitRemainingRequests()})},this.worker.onmessageerror=e=>{const{reject:n}=this.requestQueue.shift();n(e.data),this.working=!1,this.submitRemainingRequests()}}setup(){return this.rpc("setup",[])}lint(e,n){return this.rpc("lint",[e,n])}organizedLints(e,n){return this.rpc("organizedLints",[e,n])}applySuggestion(e,n,r){return this.rpc("applySuggestion",[e,n,r])}isLikelyEnglish(e){return this.rpc("isLikelyEnglish",[e])}isolateEnglish(e){return this.rpc("isolateEnglish",[e])}async getLintConfig(){return JSON.parse(await this.getLintConfigAsJSON())}setLintConfig(e){return this.setLintConfigWithJSON(JSON.stringify(e))}getLintConfigAsJSON(){return this.rpc("getLintConfigAsJSON",[])}setLintConfigWithJSON(e){return this.rpc("setLintConfigWithJSON",[e])}toTitleCase(e){return this.rpc("toTitleCase",[e])}getLintDescriptionsAsJSON(){return this.rpc("getLintDescriptionsAsJSON",[])}async getLintDescriptions(){return JSON.parse(await this.getLintDescriptionsAsJSON())}getLintDescriptionsHTMLAsJSON(){return this.rpc("getLintDescriptionsHTMLAsJSON",[])}async getLintDescriptionsHTML(){return JSON.parse(await this.getLintDescriptionsHTMLAsJSON())}getDefaultLintConfigAsJSON(){return this.rpc("getDefaultLintConfigAsJSON",[])}async getDefaultLintConfig(){return JSON.parse(await this.getDefaultLintConfigAsJSON())}async getStructuredLintConfig(){return JSON.parse(await this.getStructuredLintConfigJSON())}getStructuredLintConfigJSON(){return this.rpc("getStructuredLintConfigJSON",[])}async dispose(){this.disposed||(await this.rpc("dispose",[]),this.disposed=!0,this.requestQueue=[],this.worker.terminate())}ignoreLint(e,n){return this.ignoreLints(e,[n])}ignoreLints(e,n){return this.rpc("ignoreLints",[e,n])}ignoreLintHash(e){return this.rpc("ignoreLintHash",[e])}exportIgnoredLints(){return this.rpc("exportIgnoredLints",[])}importIgnoredLints(e){return this.rpc("importIgnoredLints",[e])}contextHash(e,n){return this.rpc("contextHash",[e,n])}clearIgnoredLints(){return this.rpc("clearIgnoredLints",[])}clearWords(){return this.rpc("clearWords",[])}importWords(e){return this.rpc("importWords",[e])}exportWords(){return this.rpc("exportWords",[])}getDialect(){return this.rpc("getDialect",[])}setDialect(e){return this.rpc("setDialect",[e])}summarizeStats(e,n){return this.rpc("summarizeStats",[e,n])}generateStatsFile(){return this.rpc("generateStatsFile",[])}importStatsFile(e){return this.rpc("importStatsFile",[e])}async loadWeirpackFromBlob(e){const n=new Uint8Array(await e.arrayBuffer()),r=Array.from(n);return await this.rpc("loadWeirpackFromBytes",[r])}async loadWeirpackFromBytes(e){const n=Array.from(e);return await this.rpc("loadWeirpackFromBytes",[n])}async rpc(e,n){if(this.disposed)throw new Error("WorkerLinter has been disposed.");return new Promise((a,i)=>{this.requestQueue.push({resolve:a,reject:i,request:{procName:e,args:n}}),this.submitRemainingRequests()})}async submitRemainingRequests(){if(!this.working)if(this.working=!0,this.requestQueue.length>0){const{request:e}=this.requestQueue[0],n=await this.serializer.serialize(e);this.worker.postMessage(n)}else this.working=!1}}var ya=Uint8Array,Vd=Uint16Array,Jh=Int32Array,Yh=new ya([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Kh=new ya([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Hd=function(t,e){for(var n=new Vd(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var a=new Jh(n[30]),r=1;r<30;++r)for(var i=n[r];i<n[r+1];++i)a[i]=i-n[r]<<5|r;return{b:n,r:a}},qd=Hd(Yh,2),Xh=qd.b,Zh=qd.r;Xh[28]=258,Zh[258]=28;Hd(Kh,0);var Qh=new Vd(32768);for(var ye=0;ye<32768;++ye){var cn=(ye&43690)>>1|(ye&21845)<<1;cn=(cn&52428)>>2|(cn&13107)<<2,cn=(cn&61680)>>4|(cn&3855)<<4,Qh[ye]=((cn&65280)>>8|(cn&255)<<8)>>1}var Ri=new ya(288);for(var ye=0;ye<144;++ye)Ri[ye]=8;for(var ye=144;ye<256;++ye)Ri[ye]=9;for(var ye=256;ye<280;++ye)Ri[ye]=7;for(var ye=280;ye<288;++ye)Ri[ye]=8;var em=new ya(32);for(var ye=0;ye<32;++ye)em[ye]=5;var tm=new ya(0),nm=typeof TextDecoder<"u"&&new TextDecoder,rm=0;try{nm.decode(tm,{stream:!0}),rm=1}catch{}const am=t=>t;function Gd(t){const e=t-1;return e*e*e+1}function sc(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function ei(t,{delay:e=0,duration:n=400,easing:r=am}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:i=>`opacity: ${i*a}`}}function im(t,{delay:e=0,duration:n=400,easing:r=Gd,x:a=0,y:i=0,opacity:o=0}={}){const s=getComputedStyle(t),l=+s.opacity,c=s.transform==="none"?"":s.transform,u=l*(1-o),[f,d]=sc(a),[_,h]=sc(i);return{delay:e,duration:n,easing:r,css:(p,m)=>`
			transform: ${c} translate(${(1-p)*f}${d}, ${(1-p)*_}${h});
			opacity: ${l-u*m}`}}function lc(t,{delay:e=0,duration:n=400,easing:r=Gd,axis:a="y"}={}){const i=getComputedStyle(t),o=+i.opacity,s=a==="y"?"height":"width",l=parseFloat(i[s]),c=a==="y"?["top","bottom"]:["left","right"],u=c.map(w=>`${w[0].toUpperCase()}${w.slice(1)}`),f=parseFloat(i[`padding${u[0]}`]),d=parseFloat(i[`padding${u[1]}`]),_=parseFloat(i[`margin${u[0]}`]),h=parseFloat(i[`margin${u[1]}`]),p=parseFloat(i[`border${u[0]}Width`]),m=parseFloat(i[`border${u[1]}Width`]);return{delay:e,duration:n,easing:r,css:w=>`overflow: hidden;opacity: ${Math.min(w*20,1)*o};${s}: ${w*l}px;padding-${c[0]}: ${w*f}px;padding-${c[1]}: ${w*d}px;margin-${c[0]}: ${w*_}px;margin-${c[1]}: ${w*h}px;border-${c[0]}-width: ${w*p}px;border-${c[1]}-width: ${w*m}px;min-${s}: 0`}}function om(t){const e=t-1;return e*e*e+1}function sm(t,e){jn(e,!0);let n=re(e,"active",3,!1),r=re(e,"delayMs",3,0),a=Fe(!1),i=null;function o(){i!=null&&(clearTimeout(i),i=null)}ci(()=>{if(o(),!n()){R(a,!1);return}return i=setTimeout(()=>{R(a,!0),i=null},r()),o});var s=di(),l=sa(s);{var c=u=>{var f=di(),d=sa(f);C0(d,()=>e.children??cr),Q(u,f)};ze(l,u=>{g(a)&&u(c)})}Q(t,s),Ln()}var lm=Object.defineProperty,cm=(t,e,n)=>e in t?lm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Z=(t,e,n)=>cm(t,typeof e!="symbol"?e+"":e,n);function um(){return{x:0,y:0,width:window.innerWidth,height:window.innerHeight}}function Wn(t,e){const[n,r]=t;return n>=e.x&&n<=e.x+e.width&&r>=e.y&&r<=e.y+e.height}function io(t){const e=um();return!!(Wn([t.x,t.y],e)||Wn([t.x+t.width,t.y],e)||Wn([t.x+t.width,t.y+t.height],e)||Wn([t.x,t.y+t.height],e))}function Jd(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}function jr(t){return{x:t.x,y:t.y,width:t.width,height:t.height}}function Yd(t,e){const n=[t.x,t.y+t.height],r=[t.x+t.width,t.y+t.height];return Wn(n,e)&&Wn(r,e)}function Kd(t,e){const n=t.x+t.width/2,r=t.y+t.height/2;let a=Number.POSITIVE_INFINITY,i=-1;for(let o=0;o<e.length;o++){const s=e[o];if(Jd(t,s))return o;const l=s.x+s.width/2,c=s.y+s.height/2,u=Math.hypot(l-n,c-r);u<a&&(a=u,i=o)}return i}function Xd(t,e){const n=Math.max(t.x,e.x),r=Math.max(t.y,e.y),a=Math.min(t.x+t.width,e.x+e.width),i=Math.min(t.y+t.height,e.y+e.height);return{x:n,y:r,width:Math.max(0,a-n),height:Math.max(0,i-r)}}function fm(t){const e=[];for(let n=0;n<t.length;n++){const r=t[n];e.push(r)}return e}function Zd(t){let e=t;for(;e!=null&&e.isContentEditable;)e=e.parentElement;return e??t.ownerDocument.documentElement}function sl(t){const e=[],n=fm(t.childNodes);if(n.length===0)return[t];for(const r of n)sl(r).forEach(a=>{e.push(a)});return e}function Qd(t,e){const n=sl(t),r=document.createRange();let a=0,i=!1;for(let o=0;o<n.length;o++){const s=n[o];if(s.nodeName==="BR"){a+=1;continue}const l=s.textContent??"";if(a+l.length>e.start&&!i&&(r.setStart(s,e.start-a),i=!0),i&&a+l.length>=e.end)return r.setEnd(s,e.end-a),r;a+=l?.length??0}return null}const oo=typeof document<"u"?document.createRange():null;function dm(t){if(!(t instanceof Element))return!1;const e=t.tagName.toLowerCase();return/^h[1-6]$/.test(e)?!0:t.getAttribute("role")?.toLowerCase()==="heading"}function _m(t){try{if(!t||!t.ownerDocument)return!1;if(t instanceof Element){if(!t.isConnected)return!1;if(t.getAttribute("data-harper-google-docs-target")==="true"){const o=t.closest(".kix-appview-editor");return o?io(o.getBoundingClientRect()):!1}const r=t.getBoundingClientRect();if(!io(r))return!1;const a=t.checkVisibility;if(typeof a=="function")return a.call(t);const i=getComputedStyle(t);return!(i.display==="none"||i.visibility==="hidden"||i.opacity==="0")}if(!oo)return!1;const e=t.parentElement;if(e&&!e.isConnected)return!1;oo.selectNode(t);const n=oo.getBoundingClientRect();return io(n)}catch{return!1}}const e_=class un{constructor(e,n,r){if(Z(this,"field"),Z(this,"startOffset"),Z(this,"endOffset"),Z(this,"arena"),!(e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement))throw new Error("TextFieldRange expects an HTMLTextAreaElement or HTMLInputElement");this.field=e,this.startOffset=n,this.endOffset=r,this.arena=un.ensureArena(this.field),this.arena.refs++}static ensureArena(e){const n=un.arenas.get(e);if(n!=null&&n.mirror.isConnected)return n;if(n){try{n.mirror.remove()}catch{}un.arenas.delete(e)}const r=document.createElement("div");r.className="harper-textfield-mirror";const a=window.getComputedStyle(e);["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","lineHeight","textTransform","paddingTop","paddingRight","paddingBottom","paddingLeft","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","boxSizing","overflowX","overflowY"].forEach(s=>{r.style[s]=a[s]}),e instanceof HTMLTextAreaElement&&(r.style.overflowX="auto",r.style.overflowY="auto"),un.positionMirror(r,e),Object.assign(r.style,{boxSizing:"border-box",whiteSpace:e.tagName.toLowerCase()==="textarea"?"pre-wrap":"pre",wordWrap:"break-word",visibility:"hidden",position:"absolute",pointerEvents:"none"});const i=document.createTextNode("");r.appendChild(i),i.nodeValue=e.value,document.body.appendChild(r),r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft;const o={mirror:r,text:i,refs:0};return un.arenas.set(e,o),o}static positionMirror(e,n){const r=n.getBoundingClientRect(),a=window.scrollY||document.documentElement.scrollTop,i=window.scrollX||document.documentElement.scrollLeft;Object.assign(e.style,{top:`${r.top+a}px`,left:`${r.left+i}px`,width:`${r.width}px`,height:`${r.height}px`})}syncMirror(){this.arena.text.nodeValue=this.field.value,this.arena.mirror.scrollTop=this.field.scrollTop,this.arena.mirror.scrollLeft=this.field.scrollLeft,un.positionMirror(this.arena.mirror,this.field)}getClientRects(){this.syncMirror();const e=document.createRange();e.setStart(this.arena.text,this.startOffset),e.setEnd(this.arena.text,this.endOffset);let n=Array.from(e.getClientRects());const r=jr(this.field.getBoundingClientRect());return n=n.filter(a=>{const i=jr(a);return Jd(i,r)}),n}getBoundingClientRect(){return this.syncMirror(),this.arena.mirror.getBoundingClientRect()}detach(){var e;if(this.arena.refs=Math.max(0,this.arena.refs-1),!document.contains(this.field)){try{(e=this.arena.mirror.parentNode)==null||e.removeChild(this.arena.mirror)}catch{}un.arenas.delete(this.field)}}};Z(e_,"arenas",new WeakMap);let t_=e_;function gt(t,e){let n=t;for(;n!=null;){if(e(n))return n;n=n.parentElement}return null}function gm(t){return gt(t,e=>!jt(e)&&e.closest("article, main, section")!=null)}function n_(t){return gt(t,e=>!jt(e)&&e.classList.contains("public-DraftEditor-content"))}function pm(t){return gt(t,e=>!jt(e)&&e.classList.contains("ProseMirror"))}function ll(t){return gt(t,e=>!jt(e)&&e.classList.contains("cm-editor"))}function hm(){return document.getElementById("notion-app")}function r_(t){return gt(t,e=>!jt(e)&&e.getAttribute("data-slate-editor")==="true")}function a_(t){return gt(t,e=>!jt(e)&&e.getAttribute("data-lexical-editor")==="true")}function mm(t){return gt(t,e=>!jt(e)&&e.classList.contains("ck-editor__editable"))}function bm(t){return gt(t,e=>e.nodeName=="MAIN"&&location.hostname=="medium.com")}function wm(t){return gt(t,e=>!jt(e)&&e.nodeName=="SHREDDIT-COMPOSER")}function ym(t){return gt(t,e=>!jt(e)&&e.classList.contains("ql-container"))}function vm(t){return gt(t,e=>!jt(e)&&(e.id==="p2"||e.classList.contains("p2")))}function xm(t){return gt(t,e=>!jt(e)&&(e.id==="editor"||e.classList.contains("editor-styles-wrapper")))}function Sm(t){return gt(t,e=>e.nodeName=="TRIX-EDITOR")}function i_(){const t=document.activeElement;if(t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement&&t.type==="text"){if(t.selectionStart==null||t.selectionEnd==null||t.selectionStart!==t.selectionEnd)return null;const r=t.selectionStart,a=new t_(t,r,r),i=a.getClientRects();return a.detach(),i.length?jr(i[0]):null}const e=window.getSelection();if(!e||e.rangeCount===0)return null;const n=e.getRangeAt(0);return n.collapsed?jr(n.getBoundingClientRect()):null}function xs(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement}function jt(t){return t.nodeType===Node.TEXT_NODE}let so;function km(){return so!==void 0||(so=document.createElement("canvas").getContext("2d")),so}function Em(t,e,n,r){const a=t.getBoundingClientRect();if(a.width<=0||a.height<=0)return null;const i=Math.max(0,Math.min(n,e.length)),o=Math.max(i,Math.min(r,e.length));if(i===o)return null;const s=km();if(s==null)return a;const l=getComputedStyle(t),c=l.font&&l.font!==""?l.font:`${l.fontStyle} ${l.fontVariant} ${l.fontWeight} ${l.fontSize} / ${l.lineHeight} ${l.fontFamily}`;s.font=c;const u=e.slice(0,i),f=e.slice(i,o),d=s.measureText(u).width,_=Math.max(1,s.measureText(f).width),h=Number.parseFloat(l.letterSpacing),p=Number.isFinite(h)?h:0,m=d+Math.max(0,i-1)*p,w=_+Math.max(0,o-i-1)*p,b=a.x+Math.min(a.width,Math.max(0,m)),E=Math.max(1,Math.min(a.right-b,w));return new DOMRect(b,a.y,E,a.height)}function cc(t,e){const n=Math.min(t.length,e.length);let r=0;for(;r<n&&t.charCodeAt(r)===e.charCodeAt(r);)r+=1;return r}function uc(t,e){const n=Math.min(t.length,e.length);let r=0;for(;r<n&&t.charCodeAt(t.length-1-r)===e.charCodeAt(e.length-1-r);)r+=1;return r}function fc(t,e){if(!t||!e)return 0;const n=new Array(e.length+1).fill(0),r=new Array(e.length+1).fill(0);for(let a=1;a<=t.length;a+=1){r[0]=0;for(let i=1;i<=e.length;i+=1)t.charCodeAt(a-1)===e.charCodeAt(i-1)?r[i]=n[i-1]+1:r[i]=Math.max(n[i],r[i-1]);for(let i=0;i<=e.length;i+=1)n[i]=r[i]}return n[e.length]}function Am(t,e){const n=Math.max(0,Math.min(e.span.start,e.source.length)),r=Math.max(n,Math.min(e.span.end,e.source.length)),a=e.source.slice(n,r);if(a.length===0)return null;if(t.slice(n,r)===a)return{start:n,end:r};const i=r-n,o=t.length-e.source.length,s=Math.max(0,n+o);for(let p=-12;p<=12;p+=1){const m=s+p;if(m<0)continue;const w=m+i;if(!(w>t.length)&&t.slice(m,w)===a)return{start:m,end:w}}const l=64,c=e.source.slice(Math.max(0,n-l),n),u=e.source.slice(r,Math.min(e.source.length,r+l)),f=Math.max(c.length*2,c.length+64),d=Math.max(u.length*2,u.length+64),_=[];let h=0;for(;h<=t.length;){const p=t.indexOf(a,h);if(p<0)break;const m=p+a.length,w=t.slice(Math.max(0,p-f),p),b=t.slice(m,Math.min(t.length,m+d));let E=0;E+=fc(c,w)*8,E+=fc(u,b)*8,E+=cc(c,w)*4,E+=uc(c,w)*4,E+=cc(u,b)*4,E+=uc(u,b)*4,E-=Math.abs(p-s)/1e3,_.push({start:p,end:m,score:E}),h=p+1}return _.length===0?null:(_.sort((p,m)=>m.score-p.score),{start:_[0].start,end:_[0].end})}function o_(t){return t.getAttribute("data-harper-google-docs-target")==="true"}function Mm(t,e){var n,r;const a=sl(t),i=[];let o=0;for(const s of a){const l=s.textContent??"",c=l.length,u=o,f=u+c;o=f;const d=Math.max(0,e.start-u),_=Math.min(c,e.end-u);if(c===0||f<=e.start||u>=e.end)continue;const h=jm(s,t);if(h!=null){const b=Em(h,l,d,_);if(b!=null&&b.width>0&&b.height>0){i.push(b);continue}}const p=document.createRange();p.setStart(s,d),p.setEnd(s,_);const m=Array.from(p.getClientRects()).filter(b=>b.width>0&&b.height>0);if(m.length>0){i.push(...m),(n=p.detach)==null||n.call(p);continue}const w=h?.getBoundingClientRect();w!=null&&w.width>0&&w.height>0&&i.push(w),(r=p.detach)==null||r.call(p)}return i}function jm(t,e){let n=t.parentElement;for(;n!=null&&n!==e;){if(getComputedStyle(n).position==="absolute")return n;n=n.parentElement}return null}async function Lm(t,e,n){try{const r=Math.max(0,Math.min(t.start,n.length)),a=Math.max(r,Math.min(t.end,n.length)),i=n.slice(r,a),o=64,s=n.slice(Math.max(0,r-o),r),l=n.slice(a,Math.min(n.length,a+o)),c={start:t.start,end:t.end,replacementText:e,expectedText:i,beforeContext:s,afterContext:l},u=window.__harperGoogleDocsBridgeClient;return u&&typeof u.replaceText=="function"?!!await u.replaceText(c.start,c.end,c.replacementText,c.expectedText,c.beforeContext,c.afterContext):!1}catch{return!1}}const s_=".kix-appview-editor",Cm="data-harper-gdocs-syncing";function $m(t,e,n,r){if(!o_(t))return null;try{const a=document.querySelector(s_),i=t.textContent??"",o=Am(i,e);if(!a||o==null)return[];const s=Mm(t,o),l=jr(a.getBoundingClientRect());if(s.length===0)return[];const c=[];for(const u of s){if(!Yd(u,l))continue;const f=Xd(u,l);c.push({x:f.x,y:f.y,width:f.width,height:f.height,lint:e,source:a,rule:n,applySuggestion:async d=>{const _=Nm(d,o,i);await Lm(o,_,i)},ignoreLint:r.ignoreLint?()=>r.ignoreLint(e.context_hash):void 0})}return c}catch{return[]}}function va(t){return t instanceof HTMLElement&&(t.classList.contains("kix-appview-editor")||t.closest(s_)!=null)}function dc(t){return va(t)&&t.getAttribute(Cm)==="true"}function Tm(t){return va(t)?t:null}function Rm(t){if(!va(t))return null;const e=t.getBoundingClientRect();return{x:e.x-t.scrollLeft,y:e.y-t.scrollTop}}function Om(t,e){return va(e)?(t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.width="0px",t.style.height="0px",t.style.contain="none",t.style.transform="none",t.style.zIndex="2147483647",!0):!1}function Nm(t,e,n){switch(t.kind){case He.Replace:return t.replacement_text;case He.Remove:return"";case He.InsertAfter:return n.slice(e.start,e.end)+t.replacement_text}}async function Fm(t,e,n){const r=e.span(),a={start:r.start,end:r.end};return r.free(),{span:a,message_html:e.message_html(),problem_text:e.get_problem_text(),lint_kind:e.lint_kind(),lint_kind_pretty:e.lint_kind_pretty(),suggestions:e.suggestions().map(i=>{const o={kind:i.kind(),replacement_text:i.get_replacement_text()};return i.free(),o}),context_hash:(await n.contextHash(t,e)).toString(),source:t}}function Im(t,e,n){switch(n.kind){case He.Remove:return t.slice(0,e.start)+t.slice(e.end);case He.Replace:return t.slice(0,e.start)+n.replacement_text+t.slice(e.end);case He.InsertAfter:return t.slice(0,e.end)+n.replacement_text+t.slice(e.end)}}function Wm(t,e,n,r){var a;const i=$m(t,e,n,r);if(i!=null)return i;try{let o=null;if(xs(t)?o=new t_(t,e.span.start,e.span.end):o=Qd(t,e.span),!o)return[];const s=Array.from(o.getClientRects?o.getClientRects():[]),l=jr(o.getBoundingClientRect());(a=o.detach)==null||a.call(o);const c=[];let u=null;if(t.tagName==null?u=t.parentElement:u=t,u==null)return[];for(const f of s){if(!Yd(f,l))continue;const d=Xd(f,l);c.push({x:d.x,y:d.y,width:d.width,height:d.height,lint:e,source:u,rule:n,range:o instanceof Range?o:void 0,applySuggestion:_=>{const h=xs(t)?t.value:t.innerText;Pm(t,e.span,zm(_,e.span,h))},ignoreLint:r.ignoreLint?()=>r.ignoreLint(e.context_hash):void 0})}return c}catch{return[]}}function zm(t,e,n){switch(t.kind){case He.Replace:return t.replacement_text;case He.Remove:return"";case He.InsertAfter:return n.slice(e.start,e.end)+t.replacement_text}}function Pm(t,e,n){xs(t)?Dm(t,e,n):a_(t)!=null?Bm(t,e,n):n_(t)!=null?Um(t,e,n):ll(t)!=null?Hm(t,e,n):r_(t)!=null||mm(t)!=null?Vm(t,e,n):qm(t,e,n),t.dispatchEvent(new Event("change",{bubbles:!0}))}function Dm(t,e,n){t.focus(),t.setSelectionRange(e.start,e.end),document.execCommand("insertText",!1,n)}function Bm(t,e,n){const r=xa(t,e);if(!r)return;const{doc:a,sel:i,range:o}=r;Sa(a,i,o,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1}))}function Um(t,e,n){const r=xa(t,e);if(!r)return;const{doc:a,sel:i,range:o}=r;setTimeout(()=>{const s=new InputEvent("beforeinput",{bubbles:!0,cancelable:!0,inputType:"insertText",data:n});t.dispatchEvent(s),s.defaultPrevented||Sa(a,i,o,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText"}))},0)}function xa(t,e){var n;const r=t.ownerDocument,a=(n=r.defaultView)==null?void 0:n.getSelection();if(!a)return null;t.focus();const i=Qd(t,e);return i?(a.removeAllRanges(),a.addRange(i),{doc:r,sel:a,range:i}):null}function Vm(t,e,n){const r=xa(t,e);if(!r)return;const{doc:a,sel:i,range:o}=r,s={bubbles:!0,cancelable:!0,inputType:"insertReplacementText",data:n};"StaticRange"in self&&(s.targetRanges=[new StaticRange(o)]);const l=new InputEvent("beforeinput",s);t.dispatchEvent(l),l.defaultPrevented||(Sa(a,i,o,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1})))}function Hm(t,e,n){const r=xa(t,e);if(!r)return;const{doc:a,sel:i,range:o}=r,s={bubbles:!0,cancelable:!0,inputType:"insertReplacementText",data:n};"StaticRange"in self&&(s.targetRanges=[new StaticRange(o)]);const l=new InputEvent("beforeinput",s);t.dispatchEvent(l),l.defaultPrevented||(Sa(a,i,o,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1,inputType:"insertReplacementText",data:n})))}function Sa(t,e,n,r){const a=n.startContainer,i=n.endContainer;if(a===i&&a.nodeType===Node.TEXT_NODE){const o=a,s=n.startOffset,l=n.endOffset,c=o.textContent||"",u=c.substring(0,s)+r+c.substring(l);o.textContent=u;const f=t.createRange(),d=s+r.length;f.setStart(o,d),f.setEnd(o,d),e.removeAllRanges(),e.addRange(f)}else{n.deleteContents();const o=t.createTextNode(r);n.insertNode(o);const s=t.createRange();s.setStartAfter(o),s.setEndAfter(o),e.removeAllRanges(),e.addRange(s)}}function qm(t,e,n){if(e&&n!==void 0){const r=xa(t,e);if(r){const{doc:a,sel:i,range:o}=r;Sa(a,i,o,n),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!1}));return}}t.textContent=Im(t.innerText,e,{kind:He.Replace,replacement_text:n}),t.dispatchEvent(new InputEvent("input",{bubbles:!0}))}var pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oi(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Gm(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var a=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:function(){return t[r]}})}),n}var lo,_c;function cl(){if(_c)return lo;_c=1;var t=Array.isArray,e=Object.prototype.toString;lo=t||n;function n(r){return e.call(r)==="[object Array]"}return lo}var gc,pc;function ka(){return pc||(pc=1,gc="2"),gc}var co,hc;function Ea(){if(hc)return co;hc=1;var t=ka();co=e;function e(n){return n&&n.type==="VirtualNode"&&n.version===t}return co}var uo,mc;function er(){if(mc)return uo;mc=1,uo=t;function t(e){return e&&e.type==="Widget"}return uo}var fo,bc;function Ni(){if(bc)return fo;bc=1,fo=t;function t(e){return e&&e.type==="Thunk"}return fo}var _o,wc;function Fi(){if(wc)return _o;wc=1,_o=t;function t(e){return e&&(typeof e.hook=="function"&&!e.hasOwnProperty("hook")||typeof e.unhook=="function"&&!e.hasOwnProperty("unhook"))}return _o}var go,yc;function l_(){if(yc)return go;yc=1;var t=ka(),e=Ea(),n=er(),r=Ni(),a=Fi();go=s;var i={},o=[];function s(l,c,u,f,d){this.tagName=l,this.properties=c||i,this.children=u||o,this.key=f!=null?String(f):void 0,this.namespace=typeof d=="string"?d:null;var _=u&&u.length||0,h=0,p=!1,m=!1,w=!1,b;for(var E in c)if(c.hasOwnProperty(E)){var A=c[E];a(A)&&A.unhook&&(b||(b={}),b[E]=A)}for(var S=0;S<_;S++){var k=u[S];e(k)?(h+=k.count||0,!p&&k.hasWidgets&&(p=!0),!m&&k.hasThunks&&(m=!0),!w&&(k.hooks||k.descendantHooks)&&(w=!0)):!p&&n(k)?typeof k.destroy=="function"&&(p=!0):!m&&r(k)&&(m=!0)}this.count=_+h,this.hasWidgets=p,this.hasThunks=m,this.hooks=b,this.descendantHooks=w}return s.prototype.version=t,s.prototype.type="VirtualNode",go}var po,vc;function c_(){if(vc)return po;vc=1;var t=ka();po=e;function e(n){this.text=String(n)}return e.prototype.version=t,e.prototype.type="VirtualText",po}var ho,xc;function Ii(){if(xc)return ho;xc=1;var t=ka();ho=e;function e(n){return n&&n.type==="VirtualText"&&n.version===t}return ho}var Sc,kc;function Jm(){return kc||(kc=1,Sc=(function(t){var e=String.prototype.split,n=/()??/.exec("")[1]===t,r;return r=function(a,u,o){if(Object.prototype.toString.call(u)!=="[object RegExp]")return e.call(a,u,o);var s=[],l=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.extended?"x":"")+(u.sticky?"y":""),c=0,u=new RegExp(u.source,l+"g"),f,d,_,h;for(a+="",n||(f=new RegExp("^"+u.source+"$(?!\\s)",l)),o=o===t?-1>>>0:o>>>0;(d=u.exec(a))&&(_=d.index+d[0].length,!(_>c&&(s.push(a.slice(c,d.index)),!n&&d.length>1&&d[0].replace(f,function(){for(var p=1;p<arguments.length-2;p++)arguments[p]===t&&(d[p]=t)}),d.length>1&&d.index<a.length&&Array.prototype.push.apply(s,d.slice(1)),h=d[0].length,c=_,s.length>=o)));)u.lastIndex===d.index&&u.lastIndex++;return c===a.length?(h||!u.test(""))&&s.push(""):s.push(a.slice(c)),s.length>o?s.slice(0,o):s},r})()),Sc}var mo,Ec;function Ym(){if(Ec)return mo;Ec=1;var t=Jm(),e=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,n=/^\.|#/;mo=r;function r(a,i){if(!a)return"DIV";var o=!i.hasOwnProperty("id"),s=t(a,e),l=null;n.test(s[1])&&(l="DIV");var c,u,f,d;for(d=0;d<s.length;d++)u=s[d],u&&(f=u.charAt(0),l?f==="."?(c=c||[],c.push(u.substring(1,u.length))):f==="#"&&o&&(i.id=u.substring(1,u.length)):l=u);return c&&(i.className&&c.push(i.className),i.className=c.join(" ")),i.namespace?l:l.toUpperCase()}return mo}var bo,Ac;function Km(){if(Ac)return bo;Ac=1,bo=t;function t(e){if(!(this instanceof t))return new t(e);this.value=e}return t.prototype.hook=function(e,n){e[n]!==this.value&&(e[n]=this.value)},bo}var wo,Mc;function Xm(){if(Mc)return wo;Mc=1;var t=typeof window<"u"?window:typeof pi<"u"?pi:{};wo=e;function e(n,r){return n in t?t[n]:(t[n]=r,r)}return wo}var yo,jc;function Zm(){if(jc)return yo;jc=1;var t=Xm();yo=e;function e(n,r,a){var i="__INDIVIDUAL_ONE_VERSION_"+n,o=i+"_ENFORCE_SINGLETON",s=t(o,r);if(s!==r)throw new Error("Can only have one copy of "+n+`.
You already have version `+s+` installed.
This means you cannot install version `+r);return t(i,a)}return yo}var vo,Lc;function Qm(){if(Lc)return vo;Lc=1;var t=Zm(),e="7";t("ev-store",e);var n="__EV_STORE_KEY@"+e;vo=r;function r(a){var i=a[n];return i||(i=a[n]={}),i}return vo}var xo,Cc;function e1(){if(Cc)return xo;Cc=1;var t=Qm();xo=e;function e(n){if(!(this instanceof e))return new e(n);this.value=n}return e.prototype.hook=function(n,r){var a=t(n),i=r.substr(3);a[i]=this.value},e.prototype.unhook=function(n,r){var a=t(n),i=r.substr(3);a[i]=void 0},xo}var So,$c;function t1(){if($c)return So;$c=1;var t=cl(),e=l_(),n=c_(),r=Ea(),a=Ii(),i=er(),o=Fi(),s=Ni(),l=Ym(),c=Km(),u=e1();So=f;function f(b,E,A){var S=[],k,M,O,L;return!A&&p(E)&&(A=E,M={}),M=M||E||{},k=l(b,M),M.hasOwnProperty("key")&&(O=M.key,M.key=void 0),M.hasOwnProperty("namespace")&&(L=M.namespace,M.namespace=void 0),k==="INPUT"&&!L&&M.hasOwnProperty("value")&&M.value!==void 0&&!o(M.value)&&(M.value=c(M.value)),_(M),A!=null&&d(A,S,k,M),new e(k,M,S,O,L)}function d(b,E,A,S){if(typeof b=="string")E.push(new n(b));else if(typeof b=="number")E.push(new n(String(b)));else if(h(b))E.push(b);else if(t(b))for(var k=0;k<b.length;k++)d(b[k],E,A,S);else{if(b==null)return;throw m({foreignObject:b,parentVnode:{tagName:A,properties:S}})}}function _(b){for(var E in b)if(b.hasOwnProperty(E)){var A=b[E];if(o(A))continue;E.substr(0,3)==="ev-"&&(b[E]=u(A))}}function h(b){return r(b)||a(b)||i(b)||s(b)}function p(b){return typeof b=="string"||t(b)||h(b)}function m(b){var E=new Error;return E.type="virtual-hyperscript.unexpected.virtual-element",E.message=`Unexpected virtual child passed to h().
Expected a VNode / Vthunk / VWidget / string but:
got:
`+w(b.foreignObject)+`.
The parent vnode is:
`+w(b.parentVnode),E.foreignObject=b.foreignObject,E.parentVnode=b.parentVnode,E}function w(b){try{return JSON.stringify(b,null,"    ")}catch{return String(b)}}return So}var ko,Tc;function u_(){if(Tc)return ko;Tc=1;var t=t1();return ko=t,ko}var n1=u_();const ti=Oi(n1);function Ae(t,e){let n=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(o=>[o]));let r=e[0].length,a=e[0].map((o,s)=>e.map(l=>l[s])),i=t.map(o=>a.map(s=>{let l=0;if(!Array.isArray(o)){for(let c of s)l+=o*c;return l}for(let c=0;c<o.length;c++)l+=o[c]*(s[c]||0);return l}));return n===1&&(i=i[0]),r===1?i.map(o=>o[0]):i}function Aa(t){return wn(t)==="string"}function wn(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function hi(t,{precision:e,unit:n}){return xn(t)?"none":f_(t,e)+(n??"")}function xn(t){return Number.isNaN(t)||t instanceof Number&&t?.none}function Ie(t){return xn(t)?0:t}function f_(t,e){if(t===0)return 0;let n=~~t,r=0;n&&e&&(r=~~Math.log10(Math.abs(n))+1);const a=10**(e-r);return Math.floor(t*a+.5)/a}const r1={deg:1,grad:.9,rad:180/Math.PI,turn:360};function d_(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,a=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let i=t.match(e);if(i){let o=[];return i[2].replace(a,(s,l)=>{let c=l.match(r),u=l;if(c){let f=c[0],d=u.slice(0,-f.length);f==="%"?(u=new Number(d/100),u.type="<percentage>"):(u=new Number(d*r1[f]),u.type="<angle>",u.unit=f)}else n.test(u)?(u=new Number(u),u.type="<number>"):u==="none"&&(u=new Number(NaN),u.none=!0);s.startsWith("/")&&(u=u instanceof Number?u:new Number(u),u.alpha=!0),typeof u=="object"&&u instanceof Number&&(u.raw=l),o.push(u)}),{name:i[1].toLowerCase(),rawName:i[1],rawArgs:i[2],args:o}}}function __(t){return t[t.length-1]}function fa(t,e,n){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*n}function g_(t,e,n){return(n-t)/(e-t)}function ul(t,e,n){return fa(e[0],e[1],g_(t[0],t[1],n))}function p_(t){return t.map(e=>e.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let a=new String(r[1]);return a.range=[+r[2],+r[3]],a}return n}))}function h_(t,e,n){return Math.max(Math.min(n,e),t)}function Wi(t,e){return Math.sign(t)===Math.sign(e)?t:-t}function It(t,e){return Wi(Math.abs(t)**e,t)}function fl(t,e){return e===0?0:t/e}function m_(t,e,n=0,r=t.length){for(;n<r;){const a=n+r>>1;t[a]<e?n=a+1:r=a}return n}var a1=Object.freeze({__proto__:null,bisectLeft:m_,clamp:h_,copySign:Wi,interpolate:fa,interpolateInv:g_,isNone:xn,isString:Aa,last:__,mapRange:ul,multiplyMatrices:Ae,parseCoordGrammar:p_,parseFunction:d_,serializeNumber:hi,skipNone:Ie,spow:It,toPrecision:f_,type:wn,zdiv:fl});class i1{add(e,n,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(a){this[a]=this[a]||[],n&&this[a][r?"unshift":"push"](n)},this)}run(e,n){this[e]=this[e]||[],this[e].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const Sn=new i1;var Rc,Oc,Nc,_t={gamut_mapping:"css",precision:5,deltaE:"76",verbose:((Nc=(Oc=(Rc=globalThis?.process)==null?void 0:Rc.env)==null?void 0:Oc.NODE_ENV)==null?void 0:Nc.toLowerCase())!=="test",warn:function(t){var e,n;this.verbose&&((n=(e=globalThis?.console)==null?void 0:e.warn)==null||n.call(e,t))}};const et={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ss(t){return Array.isArray(t)?t:et[t]}function mi(t,e,n,r={}){if(t=Ss(t),e=Ss(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return n;let a={W1:t,W2:e,XYZ:n,options:r};if(Sn.run("chromatic-adaptation-start",a),a.M||(a.W1===et.D65&&a.W2===et.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===et.D50&&a.W2===et.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Sn.run("chromatic-adaptation-end",a),a.M)return Ae(a.M,a.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const o1=new Set(["<number>","<percentage>","<angle>"]);function Fc(t,e,n,r){return Object.entries(t.coords).map(([a,i],o)=>{let s=e.coordGrammar[o],l=r[o],c=l?.type,u;if(l.none?u=s.find(_=>o1.has(_)):u=s.find(_=>_==c),!u){let _=i.name||a;throw new TypeError(`${c??l.raw} not allowed for ${_} in ${n}()`)}let f=u.range;c==="<percentage>"&&(f||(f=[0,1]));let d=i.range||i.refRange;return f&&d&&(r[o]=ul(f,d,r[o])),u})}function b_(t,{meta:e}={}){var n,r,a,i;let o={str:(n=String(t))==null?void 0:n.trim()};if(Sn.run("parse-start",o),o.color)return o.color;if(o.parsed=d_(o.str),o.parsed){let s=o.parsed.name;if(s==="color"){let l=o.parsed.args.shift(),c=l.startsWith("--")?l.substring(2):`--${l}`,u=[l,c],f=o.parsed.rawArgs.indexOf("/")>0?o.parsed.args.pop():1;for(let h of W.all){let p=h.getFormat("color");if(p&&(u.includes(p.id)||(r=p.ids)!=null&&r.filter(m=>u.includes(m)).length)){const m=Object.keys(h.coords).map((b,E)=>o.parsed.args[E]||0);let w;return p.coordGrammar&&(w=Fc(h,p,"color",m)),e&&Object.assign(e,{formatId:"color",types:w}),p.id.startsWith("--")&&!l.startsWith("--")&&_t.warn(`${h.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${p.id}) instead of color(${l}).`),l.startsWith("--")&&!p.id.startsWith("--")&&_t.warn(`${h.name} is a standard space and supported in the CSS spec. Use color(${p.id}) instead of prefixed color(${l}).`),{spaceId:h.id,coords:m,alpha:f}}}let d="",_=l in W.registry?l:c;if(_ in W.registry){let h=(i=(a=W.registry[_].formats)==null?void 0:a.color)==null?void 0:i.id;h&&(d=`Did you mean color(${h})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of W.all){let c=l.getFormat(s);if(c&&c.type==="function"){let u=1;(c.lastAlpha||__(o.parsed.args).alpha)&&(u=o.parsed.args.pop());let f=o.parsed.args,d;return c.coordGrammar&&(d=Fc(l,c,s,f)),e&&Object.assign(e,{formatId:c.name,types:d}),{spaceId:l.id,coords:f,alpha:u}}}}else for(let s of W.all)for(let l in s.formats){let c=s.formats[l];if(c.type!=="custom"||c.test&&!c.test(o.str))continue;let u=c.parse(o.str);if(u)return u.alpha??(u.alpha=1),e&&(e.formatId=l),u}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function J(t){if(Array.isArray(t))return t.map(J);if(!t)throw new TypeError("Empty color reference");Aa(t)&&(t=b_(t));let e=t.space||t.spaceId;return e instanceof W||(t.space=W.get(e)),t.alpha===void 0&&(t.alpha=1),t}const s1=75e-6,ks=class xt{constructor(e){var n;this.id=e.id,this.name=e.name,this.base=e.base?xt.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let a=e.white??this.base.white??"D65";this.white=Ss(a),this.formats=e.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||(o.type="function"),o.name||(o.name=i)}(n=this.formats.color)!=null&&n.id||(this.formats.color={...this.formats.color??{},id:e.cssId||this.id}),e.gamutSpace?this.gamutSpace=e.gamutSpace==="self"?this:xt.get(e.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=e.referred,Object.defineProperty(this,"path",{value:l1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Sn.run("colorspace-init-end",this)}inGamut(e,{epsilon:n=s1}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:n});let r=Object.values(this.coords);return e.every((a,i)=>{let o=r[i];if(o.type!=="angle"&&o.range){if(Number.isNaN(a))return!0;let[s,l]=o.range;return(s===void 0||a>=s-n)&&(l===void 0||a<=l+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!("range"in e))}get cssId(){var e,n;return((n=(e=this.formats)==null?void 0:e.color)==null?void 0:n.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=Ic(e,this),e;let n;return e==="default"?n=Object.values(this.formats)[0]:n=this.formats[e],n?(n=Ic(n,this),n):null}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(e,n){if(arguments.length===1){const s=J(e);[e,n]=[s.space,s.coords]}if(e=xt.get(e),this.equals(e))return n;n=n.map(s=>Number.isNaN(s)?0:s);let r=this.path,a=e.path,i,o;for(let s=0;s<r.length&&r[s].equals(a[s]);s++)i=r[s],o=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let s=r.length-1;s>o;s--)n=r[s].toBase(n);for(let s=o+1;s<a.length;s++)n=a[s].fromBase(n);return n}from(e,n){if(arguments.length===1){const r=J(e);[e,n]=[r.space,r.coords]}return e=xt.get(e),e.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let n in this.coords){let r=this.coords[n],a=r.range||r.refRange;e.push(a?.min??0)}return e}static get all(){return[...new Set(Object.values(xt.registry))]}static register(e,n){if(arguments.length===1&&(n=arguments[0],e=n.id),n=this.get(n),this.registry[e]&&this.registry[e]!==n)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(e,...n){if(!e||e instanceof xt)return e;if(wn(e)==="string"){let r=xt.registry[e.toLowerCase()];if(!r)throw new TypeError(`No color space found with id = "${e}"`);return r}if(n.length)return xt.get(...n);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,n){var r;let a=wn(e),i,o;if(a==="string"?e.includes(".")?[i,o]=e.split("."):[i,o]=[,e]:Array.isArray(e)?[i,o]=e:(i=e.space,o=e.coordId),i=xt.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(a=wn(o),a==="number"||a==="string"&&o>=0){let c=Object.entries(i.coords)[o];if(c)return{space:i,id:c[0],index:o,...c[1]}}i=xt.get(i);let s=o.toLowerCase(),l=0;for(let c in i.coords){let u=i.coords[c];if(c.toLowerCase()===s||((r=u.name)==null?void 0:r.toLowerCase())===s)return{space:i,id:c,index:l,...u};l++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}};Z(ks,"registry",{}),Z(ks,"DEFAULT_FORMAT",{type:"functions",name:"color"});let W=ks;function l1(t){let e=[t];for(let n=t;n=n.base;)e.push(n);return e}function Ic(t,{coords:e}={}){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=p_(t.coords);let n=Object.entries(e).map(([r,a],i)=>{let o=t.coordGrammar[i][0],s=a.range||a.refRange,l=o.range,c="";return o=="<percentage>"?(l=[0,100],c="%"):o=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});t.serializeCoords=(r,a)=>r.map((i,o)=>{let{fromRange:s,toRange:l,suffix:c}=n[o];return s&&l&&(i=ul(s,l,i)),i=hi(i,{precision:a,unit:c}),i})}return t}var qe=new W({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ot extends W{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=qe),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=n=>{let r=Ae(e.toXYZ_M,n);return this.white!==this.base.white&&(r=mi(this.white,this.base.white,r)),r}),e.fromBase??(e.fromBase=n=>(n=mi(this.base.white,this.white,n),Ae(e.fromXYZ_M,n)))),e.referred??(e.referred="display"),super(e)}}function Ma(t,e){return t=J(t),!e||t.space.equals(e)?t.coords.slice():(e=W.get(e),e.from(t))}function ut(t,e){t=J(t);let{space:n,index:r}=W.resolveCoord(e,t.space);return Ma(t,n)[r]}function dl(t,e,n){return t=J(t),e=W.get(e),t.coords=e.to(t.space,n),t}dl.returns="color";function rn(t,e,n){if(t=J(t),arguments.length===2&&wn(arguments[1])==="object"){let r=arguments[1];for(let a in r)rn(t,a,r[a])}else{typeof n=="function"&&(n=n(ut(t,e)));let{space:r,index:a}=W.resolveCoord(e,t.space),i=Ma(t,r);i[a]=n,dl(t,r,i)}return t}rn.returns="color";var _l=new W({id:"xyz-d50",name:"XYZ D50",white:"D50",base:qe,fromBase:t=>mi(qe.white,"D50",t),toBase:t=>mi("D50",qe.white,t)});const c1=216/24389,Wc=24/116,Fa=24389/27;let Eo=et.D50;var ft=new W({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Eo,base:_l,fromBase(t){let e=t.map((n,r)=>n/Eo[r]).map(n=>n>c1?Math.cbrt(n):(Fa*n+16)/116);return[116*e[1]-16,500*(e[0]-e[1]),200*(e[1]-e[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>Wc?Math.pow(e[0],3):(116*e[0]-16)/Fa,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/Fa,e[2]>Wc?Math.pow(e[2],3):(116*e[2]-16)/Fa].map((n,r)=>n*Eo[r])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ut(t){return(t%360+360)%360}function u1(t,e){if(t==="raw")return e;let[n,r]=e.map(Ut),a=r-n;return t==="increasing"?a<0&&(r+=360):t==="decreasing"?a>0&&(n+=360):t==="longer"?-180<a&&a<180&&(a>0?n+=360:r+=360):t==="shorter"&&(a>180?n+=360:a<-180&&(r+=360)),[n,r]}var da=new W({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ft,fromBase(t){let[e,n,r]=t,a;const i=.02;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),Ut(a)]},toBase(t){let[e,n,r]=t;return n<0&&(n=0),isNaN(r)&&(r=0),[e,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const zc=25**7,bi=Math.PI,Pc=180/bi,ar=bi/180;function Dc(t){const e=t*t;return e*e*e*t}function w_(t,e,{kL:n=1,kC:r=1,kH:a=1}={}){[t,e]=J([t,e]);let[i,o,s]=ft.from(t),l=da.from(ft,[i,o,s])[1],[c,u,f]=ft.from(e),d=da.from(ft,[c,u,f])[1];l<0&&(l=0),d<0&&(d=0);let _=(l+d)/2,h=Dc(_),p=.5*(1-Math.sqrt(h/(h+zc))),m=(1+p)*o,w=(1+p)*u,b=Math.sqrt(m**2+s**2),E=Math.sqrt(w**2+f**2),A=m===0&&s===0?0:Math.atan2(s,m),S=w===0&&f===0?0:Math.atan2(f,w);A<0&&(A+=2*bi),S<0&&(S+=2*bi),A*=Pc,S*=Pc;let k=c-i,M=E-b,O=S-A,L=A+S,N=Math.abs(O),$;b*E===0?$=0:N<=180?$=O:O>180?$=O-360:O<-180?$=O+360:_t.warn("the unthinkable has happened");let B=2*Math.sqrt(E*b)*Math.sin($*ar/2),V=(i+c)/2,D=(b+E)/2,P=Dc(D),U;b*E===0?U=L:N<=180?U=L/2:L<360?U=(L+360)/2:U=(L-360)/2;let X=(V-50)**2,ee=1+.015*X/Math.sqrt(20+X),ne=1+.045*D,we=1;we-=.17*Math.cos((U-30)*ar),we+=.24*Math.cos(2*U*ar),we+=.32*Math.cos((3*U+6)*ar),we-=.2*Math.cos((4*U-63)*ar);let ge=1+.015*D*we,Me=30*Math.exp(-1*((U-275)/25)**2),he=2*Math.sqrt(P/(P+zc)),xe=-1*Math.sin(2*Me*ar)*he,Se=(k/(n*ee))**2;return Se+=(M/(r*ne))**2,Se+=(B/(a*ge))**2,Se+=xe*(M/(r*ne))*(B/(a*ge)),Math.sqrt(Se)}const f1=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],d1=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],_1=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],g1=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Lr=new W({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:qe,fromBase(t){let e=Ae(f1,t).map(n=>Math.cbrt(n));return Ae(_1,e)},toBase(t){let e=Ae(g1,t).map(n=>n**3);return Ae(d1,e)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Es(t,e){[t,e]=J([t,e]);let[n,r,a]=Lr.from(t),[i,o,s]=Lr.from(e),l=n-i,c=r-o,u=a-s;return Math.sqrt(l**2+c**2+u**2)}const p1=75e-6;function Un(t,e,{epsilon:n=p1}={}){t=J(t),e||(e=t.space),e=W.get(e);let r=t.coords;return e!==t.space&&(r=e.from(t)),e.inGamut(r,{epsilon:n})}function Cr(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function y_(t,e,n="lab"){n=W.get(n);let r=n.from(t),a=n.from(e);return Math.sqrt(r.reduce((i,o,s)=>{let l=a[s];return isNaN(o)||isNaN(l)?i:i+(l-o)**2},0))}function h1(t,e){return y_(t,e,"lab")}const m1=Math.PI,Bc=m1/180;function b1(t,e,{l:n=2,c:r=1}={}){[t,e]=J([t,e]);let[a,i,o]=ft.from(t),[,s,l]=da.from(ft,[a,i,o]),[c,u,f]=ft.from(e),d=da.from(ft,[c,u,f])[1];s<0&&(s=0),d<0&&(d=0);let _=a-c,h=s-d,p=i-u,m=o-f,w=p**2+m**2-h**2,b=.511;a>=16&&(b=.040975*a/(1+.01765*a));let E=.0638*s/(1+.0131*s)+.638,A;Number.isNaN(l)&&(l=0),l>=164&&l<=345?A=.56+Math.abs(.2*Math.cos((l+168)*Bc)):A=.36+Math.abs(.4*Math.cos((l+35)*Bc));let S=Math.pow(s,4),k=Math.sqrt(S/(S+1900)),M=E*(k*A+1-k),O=(_/(n*b))**2;return O+=(h/(r*E))**2,O+=w/M**2,Math.sqrt(O)}const Uc=203;var gl=new W({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:qe,fromBase(t){return t.map(e=>Math.max(e*Uc,0))},toBase(t){return t.map(e=>Math.max(e/Uc,0))}});const Ia=1.15,Wa=.66,Vc=2610/2**14,w1=2**14/2610,Hc=3424/2**12,qc=2413/2**7,Gc=2392/2**7,y1=1.7*2523/2**5,Jc=2**5/(1.7*2523),za=-.56,Ao=16295499532821565e-27,v1=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],x1=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],S1=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],k1=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var v_=new W({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:gl,fromBase(t){let[e,n,r]=t,a=Ia*e-(Ia-1)*r,i=Wa*n-(Wa-1)*e,o=Ae(v1,[a,i,r]).map(function(u){let f=Hc+qc*(u/1e4)**Vc,d=1+Gc*(u/1e4)**Vc;return(f/d)**y1}),[s,l,c]=Ae(S1,o);return[(1+za)*s/(1+za*s)-Ao,l,c]},toBase(t){let[e,n,r]=t,a=(e+Ao)/(1+za-za*(e+Ao)),i=Ae(k1,[a,n,r]).map(function(f){let d=Hc-f**Jc,_=Gc*f**Jc-qc;return 1e4*(d/_)**w1}),[o,s,l]=Ae(x1,i),c=(o+(Ia-1)*l)/Ia,u=(s+(Wa-1)*c)/Wa;return[c,u,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),As=new W({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:v_,fromBase(t){let[e,n,r]=t,a;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),Ut(a)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]}});function E1(t,e){[t,e]=J([t,e]);let[n,r,a]=As.from(t),[i,o,s]=As.from(e),l=n-i,c=r-o;Number.isNaN(a)&&Number.isNaN(s)?(a=0,s=0):Number.isNaN(a)?a=s:Number.isNaN(s)&&(s=a);let u=a-s,f=2*Math.sqrt(r*o)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+f**2)}const x_=3424/4096,S_=2413/128,k_=2392/128,Yc=2610/16384,A1=2523/32,M1=16384/2610,Kc=32/2523,j1=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],L1=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],C1=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],$1=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Ms=new W({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:gl,fromBase(t){let e=Ae(j1,t);return T1(e)},toBase(t){let e=R1(t);return Ae($1,e)}});function T1(t){let e=t.map(function(n){let r=x_+S_*(n/1e4)**Yc,a=1+k_*(n/1e4)**Yc;return(r/a)**A1});return Ae(L1,e)}function R1(t){return Ae(C1,t).map(function(e){let n=Math.max(e**Kc-x_,0),r=S_-k_*e**Kc;return 1e4*(n/r)**M1})}function O1(t,e){[t,e]=J([t,e]);let[n,r,a]=Ms.from(t),[i,o,s]=Ms.from(e);return 720*Math.sqrt((n-i)**2+.25*(r-o)**2+(a-s)**2)}const N1=et.D65,E_=.42,Xc=1/E_,Mo=2*Math.PI,A_=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],F1=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],I1=[[460,451,288],[460,-891,-261],[460,-220,-6300]],W1={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Nn={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},z1=180/Math.PI,Zc=Math.PI/180;function M_(t,e){return t.map(n=>{const r=It(e*Math.abs(n)*.01,E_);return 400*Wi(r,n)/(r+27.13)})}function P1(t,e){const n=100/e*27.13**Xc;return t.map(r=>{const a=Math.abs(r);return Wi(n*It(a/(400-a),Xc),r)})}function D1(t){let e=Ut(t);e<=Nn.h[0]&&(e+=360);const n=m_(Nn.h,e)-1,[r,a]=Nn.h.slice(n,n+2),[i,o]=Nn.e.slice(n,n+2),s=Nn.H[n],l=(e-r)/i;return s+100*l/(l+(a-e)/o)}function B1(t){let e=(t%400+400)%400;const n=Math.floor(.01*e);e=e%100;const[r,a]=Nn.h.slice(n,n+2),[i,o]=Nn.e.slice(n,n+2);return Ut((e*(o*r-i*a)-100*r*o)/(e*(o-i)-100*o))}function j_(t,e,n,r,a){const i={};i.discounting=a,i.refWhite=t,i.surround=r;const o=t.map(h=>h*100);i.la=e,i.yb=n;const s=o[1],l=Ae(A_,o);r=W1[i.surround];const c=r[0];i.c=r[1],i.nc=r[2];const u=(1/(5*i.la+1))**4;i.fl=u*i.la+.1*(1-u)*(1-u)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/s,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const f=Math.max(Math.min(c*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=l.map(h=>fa(1,s/h,f)),i.dRgbInv=i.dRgb.map(h=>1/h);const d=l.map((h,p)=>h*i.dRgb[p]),_=M_(d,i.fl);return i.aW=i.nbb*(2*_[0]+_[1]+.05*_[2]),i}const Qc=j_(N1,64/Math.PI*.2,20,"average",!1);function js(t,e){if(!(t.J!==void 0^t.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(t.C!==void 0^t.M!==void 0^t.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(t.h!==void 0^t.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(t.J===0||t.Q===0)return[0,0,0];let n=0;t.h!==void 0?n=Ut(t.h)*Zc:n=B1(t.H)*Zc;const r=Math.cos(n),a=Math.sin(n);let i=0;t.J!==void 0?i=It(t.J,1/2)*.1:t.Q!==void 0&&(i=.25*e.c*t.Q/((e.aW+4)*e.flRoot));let o=0;t.C!==void 0?o=t.C/i:t.M!==void 0?o=t.M/e.flRoot/i:t.s!==void 0&&(o=4e-4*t.s**2*(e.aW+4)/e.c);const s=It(o*Math.pow(1.64-Math.pow(.29,e.n),-.73),10/9),l=.25*(Math.cos(n+2)+3.8),c=e.aW*It(i,2/e.c/e.z),u=5e4/13*e.nc*e.ncb*l,f=c/e.nbb,d=23*(f+.305)*fl(s,23*u+s*(11*r+108*a)),_=d*r,h=d*a,p=P1(Ae(I1,[f,_,h]).map(m=>m*1/1403),e.fl);return Ae(F1,p.map((m,w)=>m*e.dRgbInv[w])).map(m=>m/100)}function L_(t,e){const n=t.map(E=>E*100),r=M_(Ae(A_,n).map((E,A)=>E*e.dRgb[A]),e.fl),a=r[0]+(-12*r[1]+r[2])/11,i=(r[0]+r[1]-2*r[2])/9,o=(Math.atan2(i,a)%Mo+Mo)%Mo,s=.25*(Math.cos(o+2)+3.8),l=5e4/13*e.nc*e.ncb*fl(s*Math.sqrt(a**2+i**2),r[0]+r[1]+1.05*r[2]+.305),c=It(l,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),u=e.nbb*(2*r[0]+r[1]+.05*r[2]),f=It(u/e.aW,.5*e.c*e.z),d=100*It(f,2),_=4/e.c*f*(e.aW+4)*e.flRoot,h=c*f,p=h*e.flRoot,m=Ut(o*z1),w=D1(m),b=50*It(e.c*c/(e.aW+4),1/2);return{J:d,C:h,h:m,s:b,Q:_,M:p,H:w}}var U1=new W({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:qe,fromBase(t){const e=L_(t,Qc);return[e.J,e.M,e.h]},toBase(t){return js({J:t[0],M:t[1],h:t[2]},Qc)}});const V1=et.D65,H1=216/24389,C_=24389/27;function q1(t){return 116*(t>H1?Math.cbrt(t):(C_*t+16)/116)-16}function Ls(t){return t>8?Math.pow((t+16)/116,3):t/C_}function G1(t,e){let[n,r,a]=t,i=[],o=0;if(a===0)return[0,0,0];let s=Ls(a);a>0?o=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:o=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const l=2e-12,c=15;let u=0,f=1/0;for(;u<=c;){i=js({J:o,C:r,h:n},e);const d=Math.abs(i[1]-s);if(d<f){if(d<=l)return i;f=d}o=o-(i[1]-s)*o/(2*i[1]),u+=1}return js({J:o,C:r,h:n},e)}function J1(t,e){const n=q1(t[1]);if(n===0)return[0,0,0];const r=L_(t,pl);return[Ut(r.h),r.C,n]}const pl=j_(V1,200/Math.PI*Ls(50),Ls(50)*100,"average",!1);var _a=new W({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:qe,fromBase(t){return J1(t)},toBase(t){return G1(t,pl)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Y1=Math.PI/180,eu=[1,.007,.0228];function tu(t){t[1]<0&&(t=_a.fromBase(_a.toBase(t)));const e=Math.log(Math.max(1+eu[2]*t[1]*pl.flRoot,1))/eu[2],n=t[0]*Y1,r=e*Math.cos(n),a=e*Math.sin(n);return[t[2],r,a]}function K1(t,e){[t,e]=J([t,e]);let[n,r,a]=tu(_a.from(t)),[i,o,s]=tu(_a.from(e));return Math.sqrt((n-i)**2+(r-o)**2+(a-s)**2)}var $r={deltaE76:h1,deltaECMC:b1,deltaE2000:w_,deltaEJz:E1,deltaEITP:O1,deltaEOK:Es,deltaEHCT:K1};function X1(t){const e=t?Math.floor(Math.log10(Math.abs(t))):0;return Math.max(parseFloat(`1e${e-2}`),1e-6)}const nu={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function kn(t,{method:e=_t.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:a=2,blackWhiteClamp:i={}}={}){if(t=J(t),Aa(arguments[1])?n=arguments[1]:n||(n=t.space),n=W.get(n),Un(t,n,{epsilon:0}))return t;let o;if(e==="css")o=Z1(t,{space:n});else{if(e!=="clip"&&!Un(t,n)){Object.prototype.hasOwnProperty.call(nu,e)&&({method:e,jnd:a,deltaEMethod:r,blackWhiteClamp:i}=nu[e]);let s=w_;if(r!==""){for(let c in $r)if("deltae"+r.toLowerCase()===c.toLowerCase()){s=$r[c];break}}let l=kn(Ee(t,n),{method:"clip",space:n});if(s(t,l)>a){if(Object.keys(i).length===3){let w=W.resolveCoord(i.channel),b=ut(Ee(t,w.space),w.id);if(xn(b)&&(b=0),b>=i.max)return Ee({space:"xyz-d65",coords:et.D65},t.space);if(b<=i.min)return Ee({space:"xyz-d65",coords:[0,0,0]},t.space)}let c=W.resolveCoord(e),u=c.space,f=c.id,d=Ee(t,u);d.coords.forEach((w,b)=>{xn(w)&&(d.coords[b]=0)});let _=(c.range||c.refRange)[0],h=X1(a),p=_,m=ut(d,f);for(;m-p>h;){let w=Cr(d);w=kn(w,{space:n,method:"clip"}),s(d,w)-a<h?p=ut(d,f):m=ut(d,f),rn(d,f,(p+m)/2)}o=Ee(d,n)}else o=l}else o=Ee(t,n);if(e==="clip"||!Un(o,n,{epsilon:0})){let s=Object.values(n.coords).map(l=>l.range||[]);o.coords=o.coords.map((l,c)=>{let[u,f]=s[c];return u!==void 0&&(l=Math.max(u,l)),f!==void 0&&(l=Math.min(l,f)),l})}}return n!==t.space&&(o=Ee(o,t.space)),t.coords=o.coords,t}kn.returns="color";const ru={WHITE:{space:Lr,coords:[1,0,0]},BLACK:{space:Lr,coords:[0,0,0]}};function Z1(t,{space:e}={}){t=J(t),e||(e=t.space),e=W.get(e);const n=W.get("oklch");if(e.isUnbounded)return Ee(t,e);const r=Ee(t,n);let a=r.coords[0];if(a>=1){const d=Ee(ru.WHITE,e);return d.alpha=t.alpha,Ee(d,e)}if(a<=0){const d=Ee(ru.BLACK,e);return d.alpha=t.alpha,Ee(d,e)}if(Un(r,e,{epsilon:0}))return Ee(r,e);function i(d){const _=Ee(d,e),h=Object.values(e.coords);return _.coords=_.coords.map((p,m)=>{if("range"in h[m]){const[w,b]=h[m].range;return h_(w,p,b)}return p}),_}let o=0,s=r.coords[1],l=!0,c=Cr(r),u=i(c),f=Es(u,c);if(f<.02)return u;for(;s-o>1e-4;){const d=(o+s)/2;if(c.coords[1]=d,l&&Un(c,e,{epsilon:0}))o=d;else if(u=i(c),f=Es(u,c),f<.02){if(.02-f<1e-4)break;l=!1,o=d}else s=d}return u}function Ee(t,e,{inGamut:n}={}){t=J(t),e=W.get(e);let r=e.from(t),a={space:e,coords:r,alpha:t.alpha};return n&&(a=kn(a,n===!0?void 0:n)),a}Ee.returns="color";function aa(t,{precision:e=_t.precision,format:n="default",inGamut:r=!0,...a}={}){var i;let o;t=J(t);let s=n;n=t.space.getFormat(n)??t.space.getFormat("default")??W.DEFAULT_FORMAT;let l=t.coords.slice();if(r||(r=n.toGamut),r&&!Un(t)&&(l=kn(Cr(t),r===!0?void 0:r).coords),n.type==="custom")if(a.precision=e,n.serialize)o=n.serialize(l,t.alpha,a);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=n.name||"color";n.serializeCoords?l=n.serializeCoords(l,e):e!==null&&(l=l.map(_=>hi(_,{precision:e})));let u=[...l];if(c==="color"){let _=n.id||((i=n.ids)==null?void 0:i[0])||t.space.id;u.unshift(_)}let f=t.alpha;e!==null&&(f=hi(f,{precision:e}));let d=t.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${f}`;o=`${c}(${u.join(n.commas?", ":" ")}${d})`}return o}const Q1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],eb=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var zi=new ot({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Q1,fromXYZ_M:eb});const Pa=1.09929682680944,au=.018053968510807;var $_=new ot({id:"rec2020",name:"REC.2020",base:zi,toBase(t){return t.map(function(e){return e<au*4.5?e/4.5:Math.pow((e+Pa-1)/Pa,1/.45)})},fromBase(t){return t.map(function(e){return e>=au?Pa*Math.pow(e,.45)-(Pa-1):4.5*e})}});const tb=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],nb=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var T_=new ot({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:tb,fromXYZ_M:nb});const rb=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Vt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var R_=new ot({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:rb,fromXYZ_M:Vt}),iu={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ou=Array(3).fill("<percentage> | <number>[0, 255]"),su=Array(3).fill("<number>[0, 255]");var Tr=new ot({id:"srgb",name:"sRGB",base:R_,fromBase:t=>t.map(e=>{let n=e<0?-1:1,r=e*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let n=e<0?-1:1,r=e*n;return r<=.04045?e/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:ou},rgb_number:{name:"rgb",commas:!0,coords:su,noAlpha:!0},color:{},rgba:{coords:ou,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:su},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,n=>{e.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:n=!0}={})=>{e<1&&t.push(e),t=t.map(a=>Math.round(a*255));let r=n&&t.every(a=>a%17===0);return"#"+t.map(a=>r?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=iu.black,e.alpha=0):e.coords=iu[t],e.coords)return e}}}}),O_=new ot({id:"p3",cssId:"display-p3",name:"P3",base:T_,fromBase:Tr.fromBase,toBase:Tr.toBase});_t.display_space=Tr;let lu;if(typeof CSS<"u"&&CSS.supports)for(let t of[ft,$_,O_]){let e=t.getMinCoords(),n=aa({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){_t.display_space=t;break}}function ab(t,{space:e=_t.display_space,...n}={}){let r=aa(t,n);if(typeof CSS>"u"||CSS.supports("color",r)||!_t.display_space)r=new String(r),r.color=t;else{let a=t;if((t.coords.some(xn)||xn(t.alpha))&&!(lu??(lu=CSS.supports("color","hsl(none 50% 50%)")))&&(a=Cr(t),a.coords=a.coords.map(Ie),a.alpha=Ie(a.alpha),r=aa(a,n),CSS.supports("color",r)))return r=new String(r),r.color=a,r;a=Ee(a,e),r=new String(aa(a,n)),r.color=a}return r}function ib(t,e){return t=J(t),e=J(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((n,r)=>n===e.coords[r])}function En(t){return ut(t,[qe,"y"])}function N_(t,e){rn(t,[qe,"y"],e)}function ob(t){Object.defineProperty(t.prototype,"luminance",{get(){return En(this)},set(e){N_(this,e)}})}var sb=Object.freeze({__proto__:null,getLuminance:En,register:ob,setLuminance:N_});function lb(t,e){t=J(t),e=J(e);let n=Math.max(En(t),0),r=Math.max(En(e),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const cb=.56,ub=.57,fb=.62,db=.65,cu=.022,_b=1.414,gb=.1,pb=5e-4,hb=1.14,uu=.027,mb=1.14;function fu(t){return t>=cu?t:t+(cu-t)**_b}function ir(t){let e=t<0?-1:1,n=Math.abs(t);return e*Math.pow(n,2.4)}function bb(t,e){e=J(e),t=J(t);let n,r,a,i,o,s;e=Ee(e,"srgb"),[i,o,s]=e.coords;let l=ir(i)*.2126729+ir(o)*.7151522+ir(s)*.072175;t=Ee(t,"srgb"),[i,o,s]=t.coords;let c=ir(i)*.2126729+ir(o)*.7151522+ir(s)*.072175,u=fu(l),f=fu(c),d=f>u;return Math.abs(f-u)<pb?r=0:d?(n=f**cb-u**ub,r=n*hb):(n=f**db-u**fb,r=n*mb),Math.abs(r)<gb?a=0:r>0?a=r-uu:a=r+uu,a*100}function wb(t,e){t=J(t),e=J(e);let n=Math.max(En(t),0),r=Math.max(En(e),0);r>n&&([n,r]=[r,n]);let a=n+r;return a===0?0:(n-r)/a}const yb=5e4;function vb(t,e){t=J(t),e=J(e);let n=Math.max(En(t),0),r=Math.max(En(e),0);return r>n&&([n,r]=[r,n]),r===0?yb:(n-r)/r}function xb(t,e){t=J(t),e=J(e);let n=ut(t,[ft,"l"]),r=ut(e,[ft,"l"]);return Math.abs(n-r)}const Sb=216/24389,du=24/116,Da=24389/27;let jo=et.D65;var Cs=new W({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:jo,base:qe,fromBase(t){let e=t.map((n,r)=>n/jo[r]).map(n=>n>Sb?Math.cbrt(n):(Da*n+16)/116);return[116*e[1]-16,500*(e[0]-e[1]),200*(e[1]-e[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>du?Math.pow(e[0],3):(116*e[0]-16)/Da,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/Da,e[2]>du?Math.pow(e[2],3):(116*e[2]-16)/Da].map((n,r)=>n*jo[r])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Lo=Math.pow(5,.5)*.5+.5;function kb(t,e){t=J(t),e=J(e);let n=ut(t,[Cs,"l"]),r=ut(e,[Cs,"l"]),a=Math.abs(Math.pow(n,Lo)-Math.pow(r,Lo)),i=Math.pow(a,1/Lo)*Math.SQRT2-40;return i<7.5?0:i}var ni=Object.freeze({__proto__:null,contrastAPCA:bb,contrastDeltaPhi:kb,contrastLstar:xb,contrastMichelson:wb,contrastWCAG21:lb,contrastWeber:vb});function Eb(t,e,n={}){Aa(n)&&(n={algorithm:n});let{algorithm:r,...a}=n;if(!r){let i=Object.keys(ni).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}t=J(t),e=J(e);for(let i in ni)if("contrast"+r.toLowerCase()===i.toLowerCase())return ni[i](t,e,a);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function Pi(t){let[e,n,r]=Ma(t,qe),a=e+15*n+3*r;return[4*e/a,9*n/a]}function F_(t){let[e,n,r]=Ma(t,qe),a=e+n+r;return[e/a,n/a]}function Ab(t){Object.defineProperty(t.prototype,"uv",{get(){return Pi(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return F_(this)}})}var Mb=Object.freeze({__proto__:null,register:Ab,uv:Pi,xy:F_});function Yr(t,e,n={}){Aa(n)&&(n={method:n});let{method:r=_t.deltaE,...a}=n;for(let i in $r)if("deltae"+r.toLowerCase()===i.toLowerCase())return $r[i](t,e,a);throw new TypeError(`Unknown deltaE method: ${r}`)}function jb(t,e=.25){let n=[W.get("oklch","lch"),"l"];return rn(t,n,r=>r*(1+e))}function Lb(t,e=.25){let n=[W.get("oklch","lch"),"l"];return rn(t,n,r=>r*(1-e))}var Cb=Object.freeze({__proto__:null,darken:Lb,lighten:jb});function I_(t,e,n=.5,r={}){return[t,e]=[J(t),J(e)],wn(n)==="object"&&([n,r]=[.5,n]),ja(t,e,r)(n)}function W_(t,e,n={}){let r;hl(t)&&([r,n]=[t,e],[t,e]=r.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:i,steps:o=2,maxSteps:s=1e3,...l}=n;r||([t,e]=[J(t),J(e)],r=ja(t,e,l));let c=Yr(t,e),u=a>0?Math.max(o,Math.ceil(c/a)+1):o,f=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)f=[{p:.5,color:r(.5)}];else{let d=1/(u-1);f=Array.from({length:u},(_,h)=>{let p=h*d;return{p,color:r(p)}})}if(a>0){let d=f.reduce((_,h,p)=>{if(p===0)return 0;let m=Yr(h.color,f[p-1].color,i);return Math.max(_,m)},0);for(;d>a;){d=0;for(let _=1;_<f.length&&f.length<s;_++){let h=f[_-1],p=f[_],m=(p.p+h.p)/2,w=r(m);d=Math.max(d,Yr(w,h.color),Yr(w,p.color)),f.splice(_,0,{p:m,color:r(m)}),_++}}}return f=f.map(d=>d.color),f}function ja(t,e,n={}){if(hl(t)){let[l,c]=[t,e];return ja(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:r,outputSpace:a,progression:i,premultiplied:o}=n;t=J(t),e=J(e),t=Cr(t),e=Cr(e);let s={colors:[t,e],options:n};if(r?r=W.get(r):r=W.registry[_t.interpolationSpace]||t.space,a=a?W.get(a):r,t=Ee(t,r),e=Ee(e,r),t=kn(t),e=kn(e),r.coords.h&&r.coords.h.type==="angle"){let l=n.hue=n.hue||"shorter",c=[r,"h"],[u,f]=[ut(t,c),ut(e,c)];isNaN(u)&&!isNaN(f)?u=f:isNaN(f)&&!isNaN(u)&&(f=u),[u,f]=u1(l,[u,f]),rn(t,c,u),rn(e,c,f)}return o&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=i?i(l):l;let c=t.coords.map((d,_)=>{let h=e.coords[_];return fa(d,h,l)}),u=fa(t.alpha,e.alpha,l),f={space:r,coords:c,alpha:u};return o&&(f.coords=f.coords.map(d=>d/u)),a!==r&&(f=Ee(f,a)),f},{rangeArgs:s})}function hl(t){return wn(t)==="function"&&!!t.rangeArgs}_t.interpolationSpace="lab";function $b(t){t.defineFunction("mix",I_,{returns:"color"}),t.defineFunction("range",ja,{returns:"function<color>"}),t.defineFunction("steps",W_,{returns:"array<color>"})}var Tb=Object.freeze({__proto__:null,isRange:hl,mix:I_,range:ja,register:$b,steps:W_}),z_=new W({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Tr,fromBase:t=>{let e=Math.max(...t),n=Math.min(...t),[r,a,i]=t,[o,s,l]=[NaN,0,(n+e)/2],c=e-n;if(c!==0){switch(s=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case r:o=(a-i)/c+(a<i?6:0);break;case a:o=(i-r)/c+2;break;case i:o=(r-a)/c+4}o=o*60}return s<0&&(o+=180,s=Math.abs(s)),o>=360&&(o-=360),[o,s*100,l*100]},toBase:t=>{let[e,n,r]=t;e=e%360,e<0&&(e+=360),n/=100,r/=100;function a(i){let o=(i+e/30)%12,s=n*Math.min(r,1-r);return r-s*Math.max(-1,Math.min(o-3,9-o,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),P_=new W({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:z_,fromBase(t){let[e,n,r]=t;n/=100,r/=100;let a=r+n*Math.min(r,1-r);return[e,a===0?0:200*(1-r/a),100*a]},toBase(t){let[e,n,r]=t;n/=100,r/=100;let a=r*(1-n/2);return[e,a===0||a===1?0:(r-a)/Math.min(a,1-a)*100,a*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Rb=new W({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:P_,fromBase(t){let[e,n,r]=t;return[e,r*(100-n)/100,100-r]},toBase(t){let[e,n,r]=t;n/=100,r/=100;let a=n+r;if(a>=1){let s=n/a;return[e,0,s*100]}let i=1-r,o=i===0?0:1-n/i;return[e,o*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Ob=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Nb=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var D_=new ot({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Ob,fromXYZ_M:Nb}),Fb=new ot({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:D_,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e))});const Ib=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],Wb=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var B_=new ot({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:_l,toXYZ_M:Ib,fromXYZ_M:Wb});const zb=1/512,Pb=16/512;var Db=new ot({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:B_,toBase(t){return t.map(e=>e<Pb?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=zb?e**(1/1.8):16*e)}}),Bb=new W({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Lr,fromBase(t){let[e,n,r]=t,a;const i=2e-4;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),Ut(a)]},toBase(t){let[e,n,r]=t,a,i;return isNaN(r)?(a=0,i=0):(a=n*Math.cos(r*Math.PI/180),i=n*Math.sin(r*Math.PI/180)),[e,a,i]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let U_=et.D65;const Ub=216/24389,_u=24389/27,[gu,pu]=Pi({space:qe,coords:U_});var V_=new W({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:U_,base:qe,fromBase(t){let e=[Ie(t[0]),Ie(t[1]),Ie(t[2])],n=e[1],[r,a]=Pi({space:qe,coords:e});if(!Number.isFinite(r)||!Number.isFinite(a))return[0,0,0];let i=n<=Ub?_u*n:116*Math.cbrt(n)-16;return[i,13*i*(r-gu),13*i*(a-pu)]},toBase(t){let[e,n,r]=t;if(e===0||xn(e))return[0,0,0];n=Ie(n),r=Ie(r);let a=n/(13*e)+gu,i=r/(13*e)+pu,o=e<=8?e/_u:Math.pow((e+16)/116,3);return[o*(9*a/(4*i)),o,o*((12-3*a-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),ml=new W({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:V_,fromBase(t){let[e,n,r]=t,a;const i=.02;return Math.abs(n)<i&&Math.abs(r)<i?a=NaN:a=Math.atan2(r,n)*180/Math.PI,[e,Math.sqrt(n**2+r**2),Ut(a)]},toBase(t){let[e,n,r]=t;return n<0&&(n=0),isNaN(r)&&(r=0),[e,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Vb=216/24389,Hb=24389/27,hu=Vt[0][0],mu=Vt[0][1],Co=Vt[0][2],bu=Vt[1][0],wu=Vt[1][1],$o=Vt[1][2],yu=Vt[2][0],vu=Vt[2][1],To=Vt[2][2];function or(t,e,n){const r=e/(Math.sin(n)-t*Math.cos(n));return r<0?1/0:r}function wi(t){const e=Math.pow(t+16,3)/1560896,n=e>Vb?e:t/Hb,r=n*(284517*hu-94839*Co),a=n*(838422*Co+769860*mu+731718*hu),i=n*(632260*Co-126452*mu),o=n*(284517*bu-94839*$o),s=n*(838422*$o+769860*wu+731718*bu),l=n*(632260*$o-126452*wu),c=n*(284517*yu-94839*To),u=n*(838422*To+769860*vu+731718*yu),f=n*(632260*To-126452*vu);return{r0s:r/i,r0i:a*t/i,r1s:r/(i+126452),r1i:(a-769860)*t/(i+126452),g0s:o/l,g0i:s*t/l,g1s:o/(l+126452),g1i:(s-769860)*t/(l+126452),b0s:c/f,b0i:u*t/f,b1s:c/(f+126452),b1i:(u-769860)*t/(f+126452)}}function xu(t,e){const n=e/360*Math.PI*2,r=or(t.r0s,t.r0i,n),a=or(t.r1s,t.r1i,n),i=or(t.g0s,t.g0i,n),o=or(t.g1s,t.g1i,n),s=or(t.b0s,t.b0i,n),l=or(t.b1s,t.b1i,n);return Math.min(r,a,i,o,s,l)}var qb=new W({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ml,gamutSpace:Tr,fromBase(t){let[e,n,r]=[Ie(t[0]),Ie(t[1]),Ie(t[2])],a;if(e>99.9999999)a=0,e=100;else if(e<1e-8)a=0,e=0;else{let i=wi(e),o=xu(i,r);a=n/o*100}return[r,a,e]},toBase(t){let[e,n,r]=[Ie(t[0]),Ie(t[1]),Ie(t[2])],a;if(r>99.9999999)r=100,a=0;else if(r<1e-8)r=0,a=0;else{let i=wi(r);a=xu(i,e)/100*n}return[r,a,e]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});function sr(t,e){return Math.abs(e)/Math.sqrt(Math.pow(t,2)+1)}function Su(t){let e=sr(t.r0s,t.r0i),n=sr(t.r1s,t.r1i),r=sr(t.g0s,t.g0i),a=sr(t.g1s,t.g1i),i=sr(t.b0s,t.b0i),o=sr(t.b1s,t.b1i);return Math.min(e,n,r,a,i,o)}var Gb=new W({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ml,gamutSpace:"self",fromBase(t){let[e,n,r]=[Ie(t[0]),Ie(t[1]),Ie(t[2])],a;if(e>99.9999999)a=0,e=100;else if(e<1e-8)a=0,e=0;else{let i=wi(e),o=Su(i);a=n/o*100}return[r,a,e]},toBase(t){let[e,n,r]=[Ie(t[0]),Ie(t[1]),Ie(t[2])],a;if(r>99.9999999)r=100,a=0;else if(r<1e-8)r=0,a=0;else{let i=wi(r);a=Su(i)/100*n}return[r,a,e]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const ku=203,Eu=2610/2**14,Jb=2**14/2610,Yb=2523/2**5,Au=2**5/2523,Mu=3424/2**12,ju=2413/2**7,Lu=2392/2**7;var Kb=new ot({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:zi,toBase(t){return t.map(function(e){return(Math.max(e**Au-Mu,0)/(ju-Lu*e**Au))**Jb*1e4/ku})},fromBase(t){return t.map(function(e){let n=Math.max(e*ku/1e4,0),r=Mu+ju*n**Eu,a=1+Lu*n**Eu;return(r/a)**Yb})}});const Cu=.17883277,$u=.28466892,Tu=.55991073,Ro=3.7743;var Xb=new ot({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:zi,toBase(t){return t.map(function(e){return e<=.5?e**2/3*Ro:(Math.exp((e-Tu)/Cu)+$u)/12*Ro})},fromBase(t){return t.map(function(e){return e/=Ro,e<=1/12?Math.sqrt(3*e):Cu*Math.log(12*e-$u)+Tu})}});const H_={};Sn.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=q_(t.W1,t.W2,t.options.method))});Sn.add("chromatic-adaptation-end",t=>{t.M||(t.M=q_(t.W1,t.W2,t.options.method))});function Di({id:t,toCone_M:e,fromCone_M:n}){H_[t]=arguments[0]}function q_(t,e,n="Bradford"){let r=H_[n],[a,i,o]=Ae(r.toCone_M,t),[s,l,c]=Ae(r.toCone_M,e),u=[[s/a,0,0],[0,l/i,0],[0,0,c/o]],f=Ae(u,r.toCone_M);return Ae(r.fromCone_M,f)}Di({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Di({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Di({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Di({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(et,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});et.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Zb=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Qb=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var G_=new ot({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:et.ACES,toXYZ_M:Zb,fromXYZ_M:Qb});const Ba=2**-16,Oo=-.35828683,Ua=(Math.log2(65504)+9.72)/17.52;var ew=new ot({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Oo,Ua],name:"Red"},g:{range:[Oo,Ua],name:"Green"},b:{range:[Oo,Ua],name:"Blue"}},referred:"scene",base:G_,toBase(t){const e=-.3013698630136986;return t.map(function(n){return n<=e?(2**(n*17.52-9.72)-Ba)*2:n<Ua?2**(n*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(Ba)+9.72)/17.52:e<Ba?(Math.log2(Ba+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),Ru=Object.freeze({__proto__:null,A98RGB:Fb,A98RGB_Linear:D_,ACEScc:ew,ACEScg:G_,CAM16_JMh:U1,HCT:_a,HPLuv:Gb,HSL:z_,HSLuv:qb,HSV:P_,HWB:Rb,ICTCP:Ms,JzCzHz:As,Jzazbz:v_,LCH:da,LCHuv:ml,Lab:ft,Lab_D65:Cs,Luv:V_,OKLCH:Bb,OKLab:Lr,P3:O_,P3_Linear:T_,ProPhoto:Db,ProPhoto_Linear:B_,REC_2020:$_,REC_2020_Linear:zi,REC_2100_HLG:Xb,REC_2100_PQ:Kb,XYZ_ABS_D65:gl,XYZ_D50:_l,XYZ_D65:qe,sRGB:Tr,sRGB_Linear:R_});class be{constructor(...e){let n;e.length===1&&(n=J(e[0]));let r,a,i;n?(r=n.space||n.spaceId,a=n.coords,i=n.alpha):[r,a,i]=e,Object.defineProperty(this,"space",{value:W.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=i>1||i===void 0?1:i<0?0:i;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:s=>this.set(o,s)})}get spaceId(){return this.space.id}clone(){return new be(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let n=ab(this,...e);return n.color=new be(n.color),n}static get(e,...n){return e instanceof be?e:new be(e,...n)}static defineFunction(e,n,r=n){let{instance:a=!0,returns:i}=r,o=function(...s){let l=n(...s);if(i==="color")l=be.get(l);else if(i==="function<color>"){let c=l;l=function(...u){let f=c(...u);return be.get(f)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>be.get(c)));return l};e in be||(be[e]=o),a&&(be.prototype[e]=function(...s){return o(this,...s)})}static defineFunctions(e){for(let n in e)be.defineFunction(n,e[n],e[n])}static extend(e){if(e.register)e.register(be);else for(let n in e)be.defineFunction(n,e[n])}}be.defineFunctions({get:ut,getAll:Ma,set:rn,setAll:dl,to:Ee,equals:ib,inGamut:Un,toGamut:kn,distance:y_,toString:aa});Object.assign(be,{util:a1,hooks:Sn,WHITES:et,Space:W,spaces:W.registry,parse:b_,defaults:_t});for(let t of Object.keys(Ru))W.register(Ru[t]);for(let t in W.registry)$s(t,W.registry[t]);Sn.add("colorspace-init-end",t=>{var e;$s(t.id,t),(e=t.aliases)==null||e.forEach(n=>{$s(n,t)})});function $s(t,e){let n=t.replace(/-/g,"_");Object.defineProperty(be.prototype,n,{get(){let r=this.getAll(t);return typeof Proxy>"u"?r:new Proxy(r,{has:(a,i)=>{try{return W.resolveCoord([e,i]),!0}catch{}return Reflect.has(a,i)},get:(a,i,o)=>{if(i&&typeof i!="symbol"&&!(i in a)){let{index:s}=W.resolveCoord([e,i]);if(s>=0)return a[s]}return Reflect.get(a,i,o)},set:(a,i,o,s)=>{if(i&&typeof i!="symbol"&&!(i in a)||i>=0){let{index:l}=W.resolveCoord([e,i]);if(l>=0)return a[l]=o,this.setAll(t,a),!0}return Reflect.set(a,i,o,s)}})},set(r){this.setAll(t,r)},configurable:!0,enumerable:!0})}be.extend($r);be.extend({deltaE:Yr});Object.assign(be,{deltaEMethods:$r});be.extend(Cb);be.extend({contrast:Eb});be.extend(Mb);be.extend(sb);be.extend(Tb);be.extend(ni);const tw={Agreement:"#228B22",BoundaryError:"#8B4513",Capitalization:"#540D6E",Eggcorn:"#FF8C00",Enhancement:"#0EAD69",Formatting:"#7D3C98",Grammar:"#9B59B6",Malapropism:"#C71585",Miscellaneous:"#3BCEAC",Nonstandard:"#008B8B",Punctuation:"#D4850F",Readability:"#2E8B57",Redundancy:"#4682B4",Regionalism:"#C061CB",Repetition:"#00A67C",Spelling:"#EE4266",Style:"#FFD23F",Typo:"#FF6B35",Usage:"#1E90FF",WordChoice:"#228B22",WordOrder:"#4D4DFF"};function br(t){const e=tw[t];if(!e)throw new Error(`Unexpected lint kind: ${t}`);return e}const nw={},rw=Object.freeze(Object.defineProperty({__proto__:null,default:nw},Symbol.toStringTag,{value:"Module"})),aw=Gm(rw);var No,Ou;function J_(){if(Ou)return No;Ou=1;var t=typeof pi<"u"?pi:typeof window<"u"?window:{},e=aw,n;return typeof document<"u"?n=document:(n=t["__GLOBAL_DOCUMENT_CACHE@4"],n||(n=t["__GLOBAL_DOCUMENT_CACHE@4"]=e)),No=n,No}var Nu,Fu;function Y_(){return Fu||(Fu=1,Nu=function(t){return typeof t=="object"&&t!==null}),Nu}var Fo,Iu;function K_(){if(Iu)return Fo;Iu=1;var t=Y_(),e=Fi();Fo=n;function n(o,s,l){for(var c in s){var u=s[c];u===void 0?r(o,c,u,l):e(u)?(r(o,c,u,l),u.hook&&u.hook(o,c,l?l[c]:void 0)):t(u)?a(o,s,l,c,u):o[c]=u}}function r(o,s,l,c){if(c){var u=c[s];if(e(u))u.unhook&&u.unhook(o,s,l);else if(s==="attributes")for(var f in u)o.removeAttribute(f);else if(s==="style")for(var d in u)o.style[d]="";else typeof u=="string"?o[s]="":o[s]=null}}function a(o,s,l,c,u){var f=l?l[c]:void 0;if(c==="attributes"){for(var d in u){var _=u[d];_===void 0?o.removeAttribute(d):o.setAttribute(d,_)}return}if(f&&t(f)&&i(f)!==i(u)){o[c]=u;return}t(o[c])||(o[c]={});var h=c==="style"?"":void 0;for(var p in u){var m=u[p];o[c][p]=m===void 0?h:m}}function i(o){if(Object.getPrototypeOf)return Object.getPrototypeOf(o);if(o.__proto__)return o.__proto__;if(o.constructor)return o.constructor.prototype}return Fo}var Io,Wu;function X_(){if(Wu)return Io;Wu=1;var t=Ea(),e=Ii(),n=er(),r=Ni();Io=a;function a(o,s){var l=o,c=s;return r(s)&&(c=i(s,o)),r(o)&&(l=i(o,null)),{a:l,b:c}}function i(o,s){var l=o.vnode;if(l||(l=o.vnode=o.render(s)),!(t(l)||e(l)||n(l)))throw new Error("thunk did not return a valid node");return l}return Io}var Wo,zu;function Z_(){if(zu)return Wo;zu=1;var t=J_(),e=K_(),n=Ea(),r=Ii(),a=er(),i=X_();Wo=o;function o(s,l){var c=l&&l.document||t,u=l?l.warn:null;if(s=i(s).a,a(s))return s.init();if(r(s))return c.createTextNode(s.text);if(!n(s))return u&&u("Item is not a valid virtual dom node",s),null;var f=s.namespace===null?c.createElement(s.tagName):c.createElementNS(s.namespace,s.tagName),d=s.properties;e(f,d);for(var _=s.children,h=0;h<_.length;h++){var p=o(_[h],l);p&&f.appendChild(p)}return f}return Wo}var zo,Pu;function Q_(){if(Pu)return zo;Pu=1;var t=Z_();return zo=t,zo}var iw=Q_();const ow=Oi(iw);var Po,Du;function eg(){if(Du)return Po;Du=1;var t=ka();e.NONE=0,e.VTEXT=1,e.VNODE=2,e.WIDGET=3,e.PROPS=4,e.ORDER=5,e.INSERT=6,e.REMOVE=7,e.THUNK=8,Po=e;function e(n,r,a){this.type=Number(n),this.vNode=r,this.patch=a}return e.prototype.version=t,e.prototype.type="VirtualPatch",Po}var Do,Bu;function sw(){if(Bu)return Do;Bu=1;var t=Y_(),e=Fi();Do=n;function n(a,i){var o;for(var s in a){s in i||(o=o||{},o[s]=void 0);var l=a[s],c=i[s];if(l!==c)if(t(l)&&t(c))if(r(c)!==r(l))o=o||{},o[s]=c;else if(e(c))o=o||{},o[s]=c;else{var u=n(l,c);u&&(o=o||{},o[s]=u)}else o=o||{},o[s]=c}for(var f in i)f in a||(o=o||{},o[f]=i[f]);return o}function r(a){if(Object.getPrototypeOf)return Object.getPrototypeOf(a);if(a.__proto__)return a.__proto__;if(a.constructor)return a.constructor.prototype}return Do}var Bo,Uu;function lw(){if(Uu)return Bo;Uu=1;var t=cl(),e=eg(),n=Ea(),r=Ii(),a=er(),i=Ni(),o=X_(),s=sw();Bo=l;function l(S,k){var M={a:S};return c(S,k,M,0),M}function c(S,k,M,O){if(S!==k){var L=M[O],N=!1;if(i(S)||i(k))_(S,k,M,O);else if(k==null)a(S)||(f(S,M,O),L=M[O]),L=A(L,new e(e.REMOVE,S,k));else if(n(k))if(n(S))if(S.tagName===k.tagName&&S.namespace===k.namespace&&S.key===k.key){var $=s(S.properties,k.properties);$&&(L=A(L,new e(e.PROPS,S,$))),L=u(S,k,M,L,O)}else L=A(L,new e(e.VNODE,S,k)),N=!0;else L=A(L,new e(e.VNODE,S,k)),N=!0;else r(k)?r(S)?S.text!==k.text&&(L=A(L,new e(e.VTEXT,S,k))):(L=A(L,new e(e.VTEXT,S,k)),N=!0):a(k)&&(a(S)||(N=!0),L=A(L,new e(e.WIDGET,S,k)));L&&(M[O]=L),N&&f(S,M,O)}}function u(S,k,M,O,L){for(var N=S.children,$=w(N,k.children),B=$.children,V=N.length,D=B.length,P=V>D?V:D,U=0;U<P;U++){var X=N[U],ee=B[U];L+=1,X?c(X,ee,M,L):ee&&(O=A(O,new e(e.INSERT,null,ee))),n(X)&&X.count&&(L+=X.count)}return $.moves&&(O=A(O,new e(e.ORDER,S,$.moves))),O}function f(S,k,M){p(S,k,M),d(S,k,M)}function d(S,k,M){if(a(S))typeof S.destroy=="function"&&(k[M]=A(k[M],new e(e.REMOVE,S,null)));else if(n(S)&&(S.hasWidgets||S.hasThunks))for(var O=S.children,L=O.length,N=0;N<L;N++){var $=O[N];M+=1,d($,k,M),n($)&&$.count&&(M+=$.count)}else i(S)&&_(S,null,k,M)}function _(S,k,M,O){var L=o(S,k),N=l(L.a,L.b);h(N)&&(M[O]=new e(e.THUNK,null,N))}function h(S){for(var k in S)if(k!=="a")return!0;return!1}function p(S,k,M){if(n(S)){if(S.hooks&&(k[M]=A(k[M],new e(e.PROPS,S,m(S.hooks)))),S.descendantHooks||S.hasThunks)for(var O=S.children,L=O.length,N=0;N<L;N++){var $=O[N];M+=1,p($,k,M),n($)&&$.count&&(M+=$.count)}}else i(S)&&_(S,null,k,M)}function m(S){var k={};for(var M in S)k[M]=void 0;return k}function w(S,k){var M=E(k),O=M.keys,L=M.free;if(L.length===k.length)return{children:k,moves:null};var N=E(S),$=N.keys,B=N.free;if(B.length===S.length)return{children:k,moves:null};for(var V=[],D=0,P=L.length,U=0,X=0;X<S.length;X++){var ee=S[X],ne;ee.key?O.hasOwnProperty(ee.key)?(ne=O[ee.key],V.push(k[ne])):(ne=X-U++,V.push(null)):D<P?(ne=L[D++],V.push(k[ne])):(ne=X-U++,V.push(null))}for(var we=D>=L.length?k.length:L[D],ge=0;ge<k.length;ge++){var Me=k[ge];Me.key?$.hasOwnProperty(Me.key)||V.push(Me):ge>=we&&V.push(Me)}for(var he=V.slice(),xe=0,Se=[],Pe=[],Y,Ce=0;Ce<k.length;){var Ye=k[Ce];for(Y=he[xe];Y===null&&he.length;)Se.push(b(he,xe,null)),Y=he[xe];!Y||Y.key!==Ye.key?Ye.key?(Y&&Y.key?O[Y.key]!==Ce+1?(Se.push(b(he,xe,Y.key)),Y=he[xe],!Y||Y.key!==Ye.key?Pe.push({key:Ye.key,to:Ce}):xe++):Pe.push({key:Ye.key,to:Ce}):Pe.push({key:Ye.key,to:Ce}),Ce++):Y&&Y.key&&Se.push(b(he,xe,Y.key)):(xe++,Ce++)}for(;xe<he.length;)Y=he[xe],Se.push(b(he,xe,Y&&Y.key));return Se.length===U&&!Pe.length?{children:V,moves:null}:{children:V,moves:{removes:Se,inserts:Pe}}}function b(S,k,M){return S.splice(k,1),{from:k,key:M}}function E(S){for(var k={},M=[],O=S.length,L=0;L<O;L++){var N=S[L];N.key?k[N.key]=L:M.push(L)}return{keys:k,free:M}}function A(S,k){return S?(t(S)?S.push(k):S=[S,k],S):k}return Bo}var Uo,Vu;function tg(){if(Vu)return Uo;Vu=1;var t=lw();return Uo=t,Uo}var cw=tg();const uw=Oi(cw);var Vo,Hu;function fw(){if(Hu)return Vo;Hu=1;var t={};Vo=e;function e(i,o,s,l){return!s||s.length===0?{}:(s.sort(a),n(i,o,s,l,0))}function n(i,o,s,l,c){if(l=l||{},i){r(s,c,c)&&(l[c]=i);var u=o.children;if(u)for(var f=i.childNodes,d=0;d<o.children.length;d++){c+=1;var _=u[d]||t,h=c+(_.count||0);r(s,c,h)&&n(f[d],_,s,l,c),c=h}}return l}function r(i,o,s){if(i.length===0)return!1;for(var l=0,c=i.length-1,u,f;l<=c;){if(u=(c+l)/2>>0,f=i[u],l===c)return f>=o&&f<=s;if(f<o)l=u+1;else if(f>s)c=u-1;else return!0}return!1}function a(i,o){return i>o?1:-1}return Vo}var Ho,qu;function dw(){if(qu)return Ho;qu=1;var t=er();Ho=e;function e(n,r){return t(n)&&t(r)?"name"in n&&"name"in r?n.id===r.id:n.init===r.init:!1}return Ho}var qo,Gu;function _w(){if(Gu)return qo;Gu=1;var t=K_(),e=er(),n=eg(),r=dw();qo=a;function a(_,h,p){var m=_.type,w=_.vNode,b=_.patch;switch(m){case n.REMOVE:return i(h,w);case n.INSERT:return o(h,b,p);case n.VTEXT:return s(h,w,b,p);case n.WIDGET:return l(h,w,b,p);case n.VNODE:return c(h,w,b,p);case n.ORDER:return f(h,b),h;case n.PROPS:return t(h,b,w.properties),h;case n.THUNK:return d(h,p.patch(h,b,p));default:return h}}function i(_,h){var p=_.parentNode;return p&&p.removeChild(_),u(_,h),null}function o(_,h,p){var m=p.render(h,p);return _&&_.appendChild(m),_}function s(_,h,p,m){var w;if(_.nodeType===3)_.replaceData(0,_.length,p.text),w=_;else{var b=_.parentNode;w=m.render(p,m),b&&w!==_&&b.replaceChild(w,_)}return w}function l(_,h,p,m){var w=r(h,p),b;w?b=p.update(h,_)||_:b=m.render(p,m);var E=_.parentNode;return E&&b!==_&&E.replaceChild(b,_),w||u(_,h),b}function c(_,h,p,m){var w=_.parentNode,b=m.render(p,m);return w&&b!==_&&w.replaceChild(b,_),b}function u(_,h){typeof h.destroy=="function"&&e(h)&&h.destroy(_)}function f(_,h){for(var p=_.childNodes,m={},w,b,E,A=0;A<h.removes.length;A++)b=h.removes[A],w=p[b.from],b.key&&(m[b.key]=w),_.removeChild(w);for(var S=p.length,k=0;k<h.inserts.length;k++)E=h.inserts[k],w=m[E.key],_.insertBefore(w,E.to>=S++?null:p[E.to])}function d(_,h){return _&&h&&_!==h&&_.parentNode&&_.parentNode.replaceChild(h,_),h}return qo}var Go,Ju;function gw(){if(Ju)return Go;Ju=1;var t=J_(),e=cl(),n=Z_(),r=fw(),a=_w();Go=i;function i(c,u,f){return f=f||{},f.patch=f.patch&&f.patch!==i?f.patch:o,f.render=f.render||n,f.patch(c,u,f)}function o(c,u,f){var d=l(u);if(d.length===0)return c;var _=r(c,u.a,d),h=c.ownerDocument;!f.document&&h!==t&&(f.document=h);for(var p=0;p<d.length;p++){var m=d[p];c=s(c,_[m],u[m],f)}return c}function s(c,u,f,d){if(!u)return c;var _;if(e(f))for(var h=0;h<f.length;h++)_=a(f[h],u,d),u===c&&(c=_);else _=a(f,u,d),u===c&&(c=_);return c}function l(c){var u=[];for(var f in c)f!=="a"&&u.push(Number(f));return u}return Go}var Jo,Yu;function ng(){if(Yu)return Jo;Yu=1;var t=gw();return Jo=t,Jo}var pw=ng();const hw=Oi(pw);class rg{constructor(e){Z(this,"parentResolver"),Z(this,"virtualRoot"),Z(this,"virtualTree"),Z(this,"shadowHost"),this.parentResolver=typeof e=="function"?e:()=>e,this.shadowHost=document.createElement("harper-render-box"),this.parentResolver().appendChild(this.shadowHost)}render(e){if(this.shadowHost.isConnected||this.parentResolver().appendChild(this.shadowHost),!this.virtualRoot||!this.virtualTree)this.virtualRoot=ow(e),this.shadowHost.attachShadow({mode:"open"}).appendChild(this.virtualRoot);else{const n=uw(this.virtualTree,e);this.virtualRoot=hw(this.virtualRoot,n)}this.virtualTree=e}remove(){try{this.shadowHost.outerHTML=this.shadowHost.outerHTML}catch(e){console.error(e)}this.virtualRoot=void 0,this.virtualTree=void 0}getShadowHost(){return this.shadowHost}}class mw{constructor(){Z(this,"renderBoxes"),Z(this,"highlights"),this.renderBoxes=new Map,this.highlights=yw()?new Map:null}insertHighlightStyle(e,n){const r=br(n.lint_kind),a=`underline ${r} solid 2px`,i=`${r}22`,o=`harper-highlight-style-${n.lint_kind}`;if(document.getElementById(o))return;const s=document.createElement("style");s.id=o,s.textContent=`
      ::highlight(${e}) {
        text-decoration: ${a};
        background-color: ${i};
      }
    `,document.head.appendChild(s)}renderLintBoxes(e){const n=new Map;if(this.highlights)for(const[a,i]of this.highlights)i.clear();for(const a of e){if(a.range&&this.highlights!=null){let c=this.highlights.get(a.lint.lint_kind);if(c!=null)c.add(a.range);else{c=new Highlight;const u=`harper-${a.lint.lint_kind}`;CSS.highlights.set(u,c),this.insertHighlightStyle(u,a.lint),c.add(a.range),this.highlights.set(a.lint.lint_kind,c)}continue}let i=this.renderBoxes.get(a.source);i==null&&(i=new rg(this.computeRenderTarget(a.source)),this.renderBoxes.set(a.source,i));const o=n.get(a.source),s=bw(i.getShadowHost());let l=null;l==null&&s!=null&&(l=s),o==null?n.set(a.source,{boxes:[a],cpa:l}):n.set(a.source,{boxes:[...o.boxes,a],cpa:l})}const r=new Set;for(const[a,{boxes:i,cpa:o}]of n.entries()){if(dc(a)){r.add(a);continue}const s=this.renderBoxes.get(a),l=s.getShadowHost();l.id="harper-highlight-host";const c=va(a);if(!Om(l,a))if(o!=null){const d=l.style;d.position="absolute",d.top="0px",d.left="0px",d.inset="0",d.pointerEvents="none",d.width="0px",d.height="0px",d.contain="none",d.transform="none"}else l.hasAttribute("style")&&l.removeAttribute("style");const u=Rm(a)??(c||o==null?null:{x:o.x,y:o.y}),f=c?"absolute":"fixed";s.render(this.renderTree(i,u,f)),r.add(a)}for(const[a,i]of this.renderBoxes.entries())if(!r.has(a)){if(dc(a))continue;i.render(ti("div",{},[]))}this.pruneDetachedSources()}pruneDetachedSources(){for(const[e,n]of this.renderBoxes.entries())document.contains(e)||(n.remove(),this.renderBoxes.delete(e))}renderTree(e,n,r){const a=[],i=n?.x??0,o=n?.y??0;for(const s of e){const l=s.x-i,c=s.y-o,u=r==="fixed"?{position:"fixed",left:"0px",top:"0px",transform:`translate(${l}px, ${c}px)`}:{position:"absolute",left:`${l}px`,top:`${c}px`},f=ti("div",{style:{...u,width:`${s.width}px`,height:`${s.height}px`,pointerEvents:"none",borderBottom:`2px solid ${br(s.lint.lint_kind)}`,backgroundColor:`${br(s.lint.lint_kind)}22`},id:"harper-highlight"},[]);a.push(f)}return ti("div",{},a)}computeRenderTarget(e){var n;const r=Tm(e);if(r!=null)return r;if((n=e.parentElement)!=null&&n.classList.contains("ProseMirror"))return e.parentElement.parentElement;const a=[ym,hm,gm,n_,pm,ll,r_,bm,wm,a_,vm,xm,Sm];for(const i of a){const o=i(e);if(o!=null)return o.parentElement}return Zd(e.parentElement)}}function bw(t){let e=t.parentElement;for(;e&&e.nodeType===1;){if(ww(e))return e.getBoundingClientRect();e=e.parentElement}return null}function ww(t){if(!(t instanceof Element))throw new TypeError("Expected a DOM Element");const e=window.getComputedStyle(t);if(e.getPropertyValue("filter")!=="none"||e.getPropertyValue("backdrop-filter")!=="none"||e.getPropertyValue("transform")!=="none"||e.getPropertyValue("perspective")!=="none"||e.getPropertyValue("contain").match(/\b(layout|paint|strict|content)\b/))return!0;const n=e.getPropertyValue("will-change");if(n&&n.trim()!=="auto"){const r=n.split(",").map(i=>i.trim()),a=["filter","backdrop-filter","transform","perspective"];if(r.filter(i=>a.includes(i)).length)return!0}return e.getPropertyValue("content-visibility")==="auto"}function yw(){var t,e,n,r;const a=(t=globalThis.document)==null?void 0:t.documentElement;if(((e=a?.getAttribute)==null?void 0:e.call(a,"data-harper-disable-css-highlights"))==="true"||((n=a?.dataset)==null?void 0:n.harperDisableCssHighlights)==="true"||((r=globalThis.navigator)==null?void 0:r.webdriver)===!0||!("CSS"in window)||typeof CSS.supports!="function")return!1;const i=CSS.supports("selector(::highlight(__x))"),o=CSS?.highlights,s=!!o&&["get","set","has","delete","clear"].every(u=>typeof o[u]=="function"),l=typeof window.Highlight=="function";let c=!1;if(s&&l)try{const u=new Highlight;CSS.highlights.set("__probe__",u),c=CSS.highlights.has("__probe__"),CSS.highlights.delete("__probe__")}catch{}return i&&s&&l&&c}const Ku=["Vary sentence length to keep readers engaged.","Replace clichés with fresh, precise wording.","Check subject‑verb agreement, especially in long sentences.","Keep consistent terminology across the document.","Read aloud to catch awkward phrasing.","You can easily write em-dashes by typing out three hyphens in a row.","You can easily write en-dashes by typing out two hyphens in a row.","Harper can be configured to open with a hotkey. Check the extension's settings.","Don't agree with a suggestion? Click 'Dismiss' and Harper will adapt to your writing style.","You can add specialized terms, names, or acronyms to your personal dictionary in Harper's settings.","Check your language preferences in Settings to get suggestions for different dialects (e.g., American vs. British English).",`Don't want Harper to check your work every keystroke? Set the "delay" in your settings to 300 milliseconds.`];function Ts(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function vw(t){if(Array.isArray(t))return t}function xw(t){if(Array.isArray(t))return Ts(t)}function Sw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function kw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,ag(r.key),r)}}function Ew(t,e,n){return e&&kw(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ri(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=bl(t))||e){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var l=n.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw i}}}}function G(t,e,n){return(e=ag(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Aw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mw(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,a,i,o,s=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(u){c=!0,a=u}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}function jw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Xu(Object(n),!0).forEach(function(r){G(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xu(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bi(t,e){return vw(t)||Mw(t,e)||bl(t,e)||jw()}function Mt(t){return xw(t)||Aw(t)||bl(t)||Lw()}function Cw(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ag(t){var e=Cw(t,"string");return typeof e=="symbol"?e:e+""}function yi(t){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yi(t)}function bl(t,e){if(t){if(typeof t=="string")return Ts(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ts(t,e):void 0}}var Zu=function(){},wl={},ig={},og=null,sg={mark:Zu,measure:Zu};try{typeof window<"u"&&(wl=window),typeof document<"u"&&(ig=document),typeof MutationObserver<"u"&&(og=MutationObserver),typeof performance<"u"&&(sg=performance)}catch{}var $w=wl.navigator||{},Qu=$w.userAgent,ef=Qu===void 0?"":Qu,Jn=wl,ve=ig,tf=og,Va=sg,ln=!!ve.documentElement&&!!ve.head&&typeof ve.addEventListener=="function"&&typeof ve.createElement=="function",lg=~ef.indexOf("MSIE")||~ef.indexOf("Trident/"),Yo,Tw=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Rw=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,cg={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Ow={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ug=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Je="classic",La="duotone",fg="sharp",dg="sharp-duotone",_g="chisel",gg="etch",pg="jelly",hg="jelly-duo",mg="jelly-fill",bg="notdog",wg="notdog-duo",yg="slab",vg="slab-press",xg="thumbprint",Sg="utility",kg="utility-duo",Eg="utility-fill",Ag="whiteboard",Nw="Classic",Fw="Duotone",Iw="Sharp",Ww="Sharp Duotone",zw="Chisel",Pw="Etch",Dw="Jelly",Bw="Jelly Duo",Uw="Jelly Fill",Vw="Notdog",Hw="Notdog Duo",qw="Slab",Gw="Slab Press",Jw="Thumbprint",Yw="Utility",Kw="Utility Duo",Xw="Utility Fill",Zw="Whiteboard",Mg=[Je,La,fg,dg,_g,gg,pg,hg,mg,bg,wg,yg,vg,xg,Sg,kg,Eg,Ag];Yo={},G(G(G(G(G(G(G(G(G(G(Yo,Je,Nw),La,Fw),fg,Iw),dg,Ww),_g,zw),gg,Pw),pg,Dw),hg,Bw),mg,Uw),bg,Vw),G(G(G(G(G(G(G(G(Yo,wg,Hw),yg,qw),vg,Gw),xg,Jw),Sg,Yw),kg,Kw),Eg,Xw),Ag,Zw);var Qw={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},ey={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},ty=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),ny={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},jg=["fak","fa-kit","fakd","fa-kit-duotone"],nf={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ry=["kit"],ay="kit",iy="kit-duotone",oy="Kit",sy="Kit Duotone";G(G({},ay,oy),iy,sy);var ly={kit:{"fa-kit":"fak"}},cy={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},uy={kit:{fak:"fa-kit"}},rf={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ko,Ha={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fy=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],dy="classic",_y="duotone",gy="sharp",py="sharp-duotone",hy="chisel",my="etch",by="jelly",wy="jelly-duo",yy="jelly-fill",vy="notdog",xy="notdog-duo",Sy="slab",ky="slab-press",Ey="thumbprint",Ay="utility",My="utility-duo",jy="utility-fill",Ly="whiteboard",Cy="Classic",$y="Duotone",Ty="Sharp",Ry="Sharp Duotone",Oy="Chisel",Ny="Etch",Fy="Jelly",Iy="Jelly Duo",Wy="Jelly Fill",zy="Notdog",Py="Notdog Duo",Dy="Slab",By="Slab Press",Uy="Thumbprint",Vy="Utility",Hy="Utility Duo",qy="Utility Fill",Gy="Whiteboard";Ko={},G(G(G(G(G(G(G(G(G(G(Ko,dy,Cy),_y,$y),gy,Ty),py,Ry),hy,Oy),my,Ny),by,Fy),wy,Iy),yy,Wy),vy,zy),G(G(G(G(G(G(G(G(Ko,xy,Py),Sy,Dy),ky,By),Ey,Uy),Ay,Vy),My,Hy),jy,qy),Ly,Gy);var Jy="kit",Yy="kit-duotone",Ky="Kit",Xy="Kit Duotone";G(G({},Jy,Ky),Yy,Xy);var Zy={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Qy={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Rs={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},ev=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Lg=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(fy,ev),tv=["solid","regular","light","thin","duotone","brands","semibold"],Cg=[1,2,3,4,5,6,7,8,9,10],nv=Cg.concat([11,12,13,14,15,16,17,18,19,20]),rv=["aw","fw","pull-left","pull-right"],av=[].concat(Mt(Object.keys(Qy)),tv,rv,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ha.GROUP,Ha.SWAP_OPACITY,Ha.PRIMARY,Ha.SECONDARY]).concat(Cg.map(function(t){return"".concat(t,"x")})).concat(nv.map(function(t){return"w-".concat(t)})),iv={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},an="___FONT_AWESOME___",Os=16,$g="fa",Tg="svg-inline--fa",Yn="data-fa-i2svg",Ns="data-fa-pseudo-element",ov="data-fa-pseudo-element-pending",yl="data-prefix",vl="data-icon",af="fontawesome-i2svg",sv="async",lv=["HTML","HEAD","STYLE","SCRIPT"],Rg=["::before","::after",":before",":after"],Og=(function(){try{return!0}catch{return!1}})();function Ca(t){return new Proxy(t,{get:function(e,n){return n in e?e[n]:e[Je]}})}var Ng=j({},cg);Ng[Je]=j(j(j(j({},{"fa-duotone":"duotone"}),cg[Je]),nf.kit),nf["kit-duotone"]);var cv=Ca(Ng),Fs=j({},ny);Fs[Je]=j(j(j(j({},{duotone:"fad"}),Fs[Je]),rf.kit),rf["kit-duotone"]);var of=Ca(Fs),Is=j({},Rs);Is[Je]=j(j({},Is[Je]),uy.kit);var xl=Ca(Is),Ws=j({},Zy);Ws[Je]=j(j({},Ws[Je]),ly.kit);Ca(Ws);var uv=Tw,Fg="fa-layers-text",fv=Rw,dv=j({},Qw);Ca(dv);var _v=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xo=Ow,gv=[].concat(Mt(ry),Mt(av)),ia=Jn.FontAwesomeConfig||{};function pv(t){var e=ve.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function hv(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ve&&typeof ve.querySelector=="function"){var mv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];mv.forEach(function(t){var e=Bi(t,2),n=e[0],r=e[1],a=hv(pv(n));a!=null&&(ia[r]=a)})}var Ig={styleDefault:"solid",familyDefault:Je,cssPrefix:$g,replacementClass:Tg,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ia.familyPrefix&&(ia.cssPrefix=ia.familyPrefix);var Rr=j(j({},Ig),ia);Rr.autoReplaceSvg||(Rr.observeMutations=!1);var z={};Object.keys(Ig).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(e){Rr[t]=e,oa.forEach(function(n){return n(z)})},get:function(){return Rr[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(t){Rr.cssPrefix=t,oa.forEach(function(e){return e(z)})},get:function(){return Rr.cssPrefix}});Jn.FontAwesomeConfig=z;var oa=[];function bv(t){return oa.push(t),function(){oa.splice(oa.indexOf(t),1)}}var lr=Os,Wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wv(t){if(!(!t||!ln)){var e=ve.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ve.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ve.head.insertBefore(e,r),t}}var yv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sf(){for(var t=12,e="";t-- >0;)e+=yv[Math.random()*62|0];return e}function Wr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Sl(t){return t.classList?Wr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Wg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vv(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Wg(t[n]),'" ')},"").trim()}function Ui(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function kl(t){return t.size!==Wt.size||t.x!==Wt.x||t.y!==Wt.y||t.rotate!==Wt.rotate||t.flipX||t.flipY}function xv(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Sv(t){var e=t.transform,n=t.width,r=n===void 0?Os:n,a=t.height,i=a===void 0?Os:a,o="";return lg?o+="translate(".concat(e.x/lr-r/2,"em, ").concat(e.y/lr-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/lr,"em), calc(-50% + ").concat(e.y/lr,"em)) "),o+="scale(".concat(e.size/lr*(e.flipX?-1:1),", ").concat(e.size/lr*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var kv=`:root, :host {
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
}`;function zg(){var t=$g,e=Tg,n=z.cssPrefix,r=z.replacementClass,a=kv;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var lf=!1;function Zo(){z.autoAddCss&&!lf&&(wv(zg()),lf=!0)}var Ev={mixout:function(){return{dom:{css:zg,insertCss:Zo}}},hooks:function(){return{beforeDOMElementCreation:function(){Zo()},beforeI2svg:function(){Zo()}}}},on=Jn||{};on[an]||(on[an]={});on[an].styles||(on[an].styles={});on[an].hooks||(on[an].hooks={});on[an].shims||(on[an].shims=[]);var kt=on[an],Pg=[],Dg=function(){ve.removeEventListener("DOMContentLoaded",Dg),vi=1,Pg.map(function(t){return t()})},vi=!1;ln&&(vi=(ve.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ve.readyState),vi||ve.addEventListener("DOMContentLoaded",Dg));function Av(t){ln&&(vi?setTimeout(t,0):Pg.push(t))}function $a(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Wg(t):"<".concat(e," ").concat(vv(r),">").concat(i.map($a).join(""),"</").concat(e,">")}function cf(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Qo=function(t,e,n,r){var a=Object.keys(t),i=a.length,o=e,s,l,c;for(n===void 0?(s=1,c=t[a[0]]):(s=0,c=n);s<i;s++)l=a[s],c=o(c,t[l],l,t);return c};function Bg(t){return Mt(t).length!==1?null:t.codePointAt(0).toString(16)}function uf(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function zs(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=uf(e);typeof kt.hooks.addPack=="function"&&!a?kt.hooks.addPack(t,uf(e)):kt.styles[t]=j(j({},kt.styles[t]||{}),i),t==="fas"&&zs("fa",e)}var ga=kt.styles,Mv=kt.shims,Ug=Object.keys(xl),jv=Ug.reduce(function(t,e){return t[e]=Object.keys(xl[e]),t},{}),El=null,Vg={},Hg={},qg={},Gg={},Jg={};function Lv(t){return~gv.indexOf(t)}function Cv(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Lv(a)?a:null}var Yg=function(){var t=function(r){return Qo(ga,function(a,i,o){return a[o]=Qo(i,r,{}),a},{})};Vg=t(function(r,a,i){if(a[3]&&(r[a[3]]=i),a[2]){var o=a[2].filter(function(s){return typeof s=="number"});o.forEach(function(s){r[s.toString(16)]=i})}return r}),Hg=t(function(r,a,i){if(r[i]=i,a[2]){var o=a[2].filter(function(s){return typeof s=="string"});o.forEach(function(s){r[s]=i})}return r}),Jg=t(function(r,a,i){var o=a[2];return r[i]=i,o.forEach(function(s){r[s]=i}),r});var e="far"in ga||z.autoFetchSvg,n=Qo(Mv,function(r,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});qg=n.names,Gg=n.unicodes,El=Vi(z.styleDefault,{family:z.familyDefault})};bv(function(t){El=Vi(t.styleDefault,{family:z.familyDefault})});Yg();function Al(t,e){return(Vg[t]||{})[e]}function $v(t,e){return(Hg[t]||{})[e]}function zn(t,e){return(Jg[t]||{})[e]}function Kg(t){return qg[t]||{prefix:null,iconName:null}}function Tv(t){var e=Gg[t],n=Al("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function An(){return El}var Xg=function(){return{prefix:null,iconName:null,rest:[]}};function Rv(t){var e=Je,n=Ug.reduce(function(r,a){return r[a]="".concat(z.cssPrefix,"-").concat(a),r},{});return Mg.forEach(function(r){(t.includes(n[r])||t.some(function(a){return jv[r].includes(a)}))&&(e=r)}),e}function Vi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Je:n,a=cv[r][t];if(r===La&&!t)return"fad";var i=of[r][t]||of[r][a],o=t in kt.styles?t:null,s=i||o||null;return s}function Ov(t){var e=[],n=null;return t.forEach(function(r){var a=Cv(z.cssPrefix,r);a?n=a:r&&e.push(r)}),{iconName:n,rest:e}}function ff(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var df=Lg.concat(jg);function Hi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,a=null,i=ff(t.filter(function(_){return df.includes(_)})),o=ff(t.filter(function(_){return!df.includes(_)})),s=i.filter(function(_){return a=_,!ug.includes(_)}),l=Bi(s,1),c=l[0],u=c===void 0?null:c,f=Rv(i),d=j(j({},Ov(o)),{},{prefix:Vi(u,{family:f})});return j(j(j({},d),Wv({values:t,family:f,styles:ga,config:z,canonical:d,givenPrefix:a})),Nv(r,a,d))}function Nv(t,e,n){var r=n.prefix,a=n.iconName;if(t||!r||!a)return{prefix:r,iconName:a};var i=e==="fa"?Kg(a):{},o=zn(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!ga.far&&ga.fas&&!z.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}var Fv=Mg.filter(function(t){return t!==Je||t!==La}),Iv=Object.keys(Rs).filter(function(t){return t!==Je}).map(function(t){return Object.keys(Rs[t])}).flat();function Wv(t){var e=t.values,n=t.family,r=t.canonical,a=t.givenPrefix,i=a===void 0?"":a,o=t.styles,s=o===void 0?{}:o,l=t.config,c=l===void 0?{}:l,u=n===La,f=e.includes("fa-duotone")||e.includes("fad"),d=c.familyDefault==="duotone",_=r.prefix==="fad"||r.prefix==="fa-duotone";if(!u&&(f||d||_)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Fv.includes(n)){var h=Object.keys(s).find(function(m){return Iv.includes(m)});if(h||c.autoFetchSvg){var p=ty.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=zn(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=An()||"fas"),r}var zv=(function(){function t(){Sw(this,t),this.definitions={}}return Ew(t,[{key:"add",value:function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=j(j({},e.definitions[o]||{}),i[o]),zs(o,i[o]);var s=xl[Je][o];s&&zs(s,i[o]),Yg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(a){var i=r[a],o=i.prefix,s=i.iconName,l=i.icon,c=l[2];e[o]||(e[o]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(e[o][u]=l)}),e[o][s]=l}),e}}])})(),_f=[],gr={},wr={},Pv=Object.keys(wr);function Dv(t,e){var n=e.mixoutsTo;return _f=t,gr={},Object.keys(wr).forEach(function(r){Pv.indexOf(r)===-1&&delete wr[r]}),_f.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),yi(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){gr[o]||(gr[o]=[]),gr[o].push(i[o])})}r.provides&&r.provides(wr)}),n}function Ps(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gr[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Kn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=gr[t]||[];a.forEach(function(i){i.apply(null,n)})}function Mn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return wr[t]?wr[t].apply(null,e):void 0}function Ds(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||An();if(e)return e=zn(n,e)||e,cf(Zg.definitions,n,e)||cf(kt.styles,n,e)}var Zg=new zv,Bv=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Kn("noAuto")},Uv={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ln?(Kn("beforeI2svg",t),Mn("pseudoElements2svg",t),Mn("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,Av(function(){Hv({autoReplaceSvgRoot:e}),Kn("watch",t)})}},Vv={icon:function(t){if(t===null)return null;if(yi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:zn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Vi(t[0]);return{prefix:n,iconName:zn(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(z.cssPrefix,"-"))>-1||t.match(uv))){var r=Hi(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||An(),iconName:zn(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var a=An();return{prefix:a,iconName:zn(a,t)||t}}}},Ml={noAuto:Bv,config:z,dom:Uv,parse:Vv,library:Zg,findIconDefinition:Ds,toHtml:$a},Hv=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,n=e===void 0?ve:e;(Object.keys(kt.styles).length>0||z.autoFetchSvg)&&ln&&z.autoReplaceSvg&&Ml.dom.i2svg({node:n})};function qi(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return $a(n)})}}),Object.defineProperty(t,"node",{get:function(){if(ln){var n=ve.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function qv(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(kl(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Ui(j(j({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Gv(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},a),{},{id:o}),children:r}]}]}function Jv(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function jl(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.maskId,c=t.extra,u=t.watchable,f=u===void 0?!1:u,d=r.found?r:n,_=d.width,h=d.height,p=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(S){return c.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(c.classes).join(" "),m={children:[],attributes:j(j({},c.attributes),{},{"data-prefix":a,"data-icon":i,class:p,role:c.attributes.role||"img",viewBox:"0 0 ".concat(_," ").concat(h)})};!Jv(c.attributes)&&!c.attributes["aria-hidden"]&&(m.attributes["aria-hidden"]="true"),f&&(m.attributes[Yn]="");var w=j(j({},m),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:j({},c.styles)}),b=r.found&&n.found?Mn("generateAbstractMask",w)||{children:[],attributes:{}}:Mn("generateAbstractIcon",w)||{children:[],attributes:{}},E=b.children,A=b.attributes;return w.children=E,w.attributes=A,s?Gv(w):qv(w)}function gf(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.extra,o=t.watchable,s=o===void 0?!1:o,l=j(j({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[Yn]="");var c=j({},i.styles);kl(a)&&(c.transform=Sv({transform:a,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Ui(c);u.length>0&&(l.style=u);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),f}function Yv(t){var e=t.content,n=t.extra,r=j(j({},n.attributes),{},{class:n.classes.join(" ")}),a=Ui(n.styles);a.length>0&&(r.style=a);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),i}var es=kt.styles;function Bs(t){var e=t[0],n=t[1],r=t.slice(4),a=Bi(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(Xo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Xo.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Xo.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Kv={found:!1,width:512,height:512};function Xv(t,e){!Og&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Us(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=An()),new Promise(function(r,a){if(n==="fa"){var i=Kg(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&es[e]&&es[e][t]){var o=es[e][t];return r(Bs(o))}Xv(t,e),r(j(j({},Kv),{},{icon:z.showMissingIcons&&t?Mn("missingIconAbstract")||{}:{}}))})}var pf=function(){},Vs=z.measurePerformance&&Va&&Va.mark&&Va.measure?Va:{mark:pf,measure:pf},Kr='FA "7.1.0"',Zv=function(t){return Vs.mark("".concat(Kr," ").concat(t," begins")),function(){return Qg(t)}},Qg=function(t){Vs.mark("".concat(Kr," ").concat(t," ends")),Vs.measure("".concat(Kr," ").concat(t),"".concat(Kr," ").concat(t," begins"),"".concat(Kr," ").concat(t," ends"))},Ll={begin:Zv,end:Qg},ai=function(){};function hf(t){var e=t.getAttribute?t.getAttribute(Yn):null;return typeof e=="string"}function Qv(t){var e=t.getAttribute?t.getAttribute(yl):null,n=t.getAttribute?t.getAttribute(vl):null;return e&&n}function e2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function t2(){if(z.autoReplaceSvg===!0)return ii.replace;var t=ii[z.autoReplaceSvg];return t||ii.replace}function n2(t){return ve.createElementNS("http://www.w3.org/2000/svg",t)}function r2(t){return ve.createElement(t)}function ep(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?n2:r2:n;if(typeof t=="string")return ve.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(ep(o,{ceFn:r}))}),a}function a2(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ii={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(r){e.parentNode.insertBefore(ep(r),e)}),e.getAttribute(Yn)===null&&z.keepOriginalSource){var n=ve.createComment(a2(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~Sl(e).indexOf(z.replacementClass))return ii.replace(t);var r=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(o,s){return s===z.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}var i=n.map(function(o){return $a(o)}).join(`
`);e.setAttribute(Yn,""),e.innerHTML=i}};function mf(t){t()}function tp(t,e){var n=typeof e=="function"?e:ai;if(t.length===0)n();else{var r=mf;z.mutateApproach===sv&&(r=Jn.requestAnimationFrame||mf),r(function(){var a=t2(),i=Ll.begin("mutate");t.map(a),i(),n()})}}var Cl=!1;function np(){Cl=!0}function Hs(){Cl=!1}var xi=null;function bf(t){if(tf&&z.observeMutations){var e=t.treeCallback,n=e===void 0?ai:e,r=t.nodeCallback,a=r===void 0?ai:r,i=t.pseudoElementsCallback,o=i===void 0?ai:i,s=t.observeMutationsRoot,l=s===void 0?ve:s;xi=new tf(function(c){if(!Cl){var u=An();Wr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!hf(f.addedNodes[0])&&(z.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&z.searchPseudoElements&&o([f.target],!0),f.type==="attributes"&&hf(f.target)&&~_v.indexOf(f.attributeName))if(f.attributeName==="class"&&Qv(f.target)){var d=Hi(Sl(f.target)),_=d.prefix,h=d.iconName;f.target.setAttribute(yl,_||u),h&&f.target.setAttribute(vl,h)}else e2(f.target)&&a(f.target)})}}),ln&&xi.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function i2(){xi&&xi.disconnect()}function o2(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function s2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Hi(Sl(t));return a.prefix||(a.prefix=An()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=$v(a.prefix,t.innerText)||Al(a.prefix,Bg(t.innerText))),!a.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function l2(t){var e=Wr(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function c2(){return{iconName:null,prefix:null,transform:Wt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=s2(t),r=n.iconName,a=n.prefix,i=n.rest,o=l2(t),s=Ps("parseNodeAttributes",{},t),l=e.styleParser?o2(t):[];return j({iconName:r,prefix:a,transform:Wt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var u2=kt.styles;function rp(t){var e=z.autoReplaceSvg==="nest"?wf(t,{styleParser:!1}):wf(t);return~e.extra.classes.indexOf(Fg)?Mn("generateLayersText",t,e):Mn("generateSvgReplacementMutation",t,e)}function f2(){return[].concat(Mt(jg),Mt(Lg))}function yf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ln)return Promise.resolve();var n=ve.documentElement.classList,r=function(u){return n.add("".concat(af,"-").concat(u))},a=function(u){return n.remove("".concat(af,"-").concat(u))},i=z.autoFetchSvg?f2():ug.concat(Object.keys(u2));i.includes("fa")||i.push("fa");var o=[".".concat(Fg,":not([").concat(Yn,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Yn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Wr(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ll.begin("onTree"),c=s.reduce(function(u,f){try{var d=rp(f);d&&u.push(d)}catch(_){Og||_.name==="MissingIcon"&&console.error(_)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){tp(d,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function d2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rp(t).then(function(n){n&&tp([n],e)})}function _2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Ds(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ds(a||{})),t(r,j(j({},n),{},{mask:a}))}}var g2=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?Wt:n,a=e.symbol,i=a===void 0?!1:a,o=e.mask,s=o===void 0?null:o,l=e.maskId,c=l===void 0?null:l,u=e.classes,f=u===void 0?[]:u,d=e.attributes,_=d===void 0?{}:d,h=e.styles,p=h===void 0?{}:h;if(t){var m=t.prefix,w=t.iconName,b=t.icon;return qi(j({type:"icon"},t),function(){return Kn("beforeDOMElementCreation",{iconDefinition:t,params:e}),jl({icons:{main:Bs(b),mask:s?Bs(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:w,transform:j(j({},Wt),r),symbol:i,maskId:c,extra:{attributes:_,styles:p,classes:f}})})}},p2={mixout:function(){return{icon:_2(g2)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=yf,t.nodeCallback=d2,t}}},provides:function(t){t.i2svg=function(e){var n=e.node,r=n===void 0?ve:n,a=e.callback,i=a===void 0?function(){}:a;return yf(r,i)},t.generateSvgReplacementMutation=function(e,n){var r=n.iconName,a=n.prefix,i=n.transform,o=n.symbol,s=n.mask,l=n.maskId,c=n.extra;return new Promise(function(u,f){Promise.all([Us(r,a),s.iconName?Us(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(d){var _=Bi(d,2),h=_[0],p=_[1];u([e,jl({icons:{main:h,mask:p},prefix:a,iconName:r,transform:i,symbol:o,maskId:l,extra:c,watchable:!0})])}).catch(f)})},t.generateAbstractIcon=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.transform,o=e.styles,s=Ui(o);s.length>0&&(r.style=s);var l;return kl(i)&&(l=Mn("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},h2={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.classes,r=n===void 0?[]:n;return qi({type:"layer"},function(){Kn("beforeDOMElementCreation",{assembler:t,params:e});var a=[];return t(function(i){Array.isArray(i)?i.map(function(o){a=a.concat(o.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(Mt(r)).join(" ")},children:a}]})}}}},m2={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.classes,r=n===void 0?[]:n,a=e.attributes,i=a===void 0?{}:a,o=e.styles,s=o===void 0?{}:o;return qi({type:"counter",content:t},function(){return Kn("beforeDOMElementCreation",{content:t,params:e}),Yv({content:t.toString(),extra:{attributes:i,styles:s,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(Mt(r))}})})}}}},b2={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?Wt:n,a=e.classes,i=a===void 0?[]:a,o=e.attributes,s=o===void 0?{}:o,l=e.styles,c=l===void 0?{}:l;return qi({type:"text",content:t},function(){return Kn("beforeDOMElementCreation",{content:t,params:e}),gf({content:t,transform:j(j({},Wt),r),extra:{attributes:s,styles:c,classes:["".concat(z.cssPrefix,"-layers-text")].concat(Mt(i))}})})}}},provides:function(t){t.generateLayersText=function(e,n){var r=n.transform,a=n.extra,i=null,o=null;if(lg){var s=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();i=l.width/s,o=l.height/s}return Promise.resolve([e,gf({content:e.innerHTML,width:i,height:o,transform:r,extra:a,watchable:!0})])}}},ap=new RegExp('"',"ug"),vf=[1105920,1112319],xf=j(j(j(j({},{FontAwesome:{normal:"fas",400:"fas"}}),ey),iv),cy),qs=Object.keys(xf).reduce(function(t,e){return t[e.toLowerCase()]=xf[e],t},{}),w2=Object.keys(qs).reduce(function(t,e){var n=qs[e];return t[e]=n[900]||Mt(Object.entries(n))[0][1],t},{});function y2(t){var e=t.replace(ap,"");return Bg(Mt(e)[0]||"")}function v2(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(ap,""),a=r.codePointAt(0),i=a>=vf[0]&&a<=vf[1],o=r.length===2?r[0]===r[1]:!1;return i||o||e}function x2(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(qs[n]||{})[a]||w2[n]}function Sf(t,e){var n="".concat(ov).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Wr(t.children),o=i.filter(function(k){return k.getAttribute(Ns)===e})[0],s=Jn.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),c=l.match(fv),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),_=x2(l,u),h=y2(d),p=c[0].startsWith("FontAwesome"),m=v2(s),w=Al(_,h),b=w;if(p){var E=Tv(h);E.iconName&&E.prefix&&(w=E.iconName,_=E.prefix)}if(w&&!m&&(!o||o.getAttribute(yl)!==_||o.getAttribute(vl)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);var A=c2(),S=A.extra;S.attributes[Ns]=e,Us(w,_).then(function(k){var M=jl(j(j({},A),{},{icons:{main:k,mask:Xg()},prefix:_,iconName:b,extra:S,watchable:!0})),O=ve.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(O,t.firstChild):t.appendChild(O),O.outerHTML=M.map(function(L){return $a(L)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function S2(t){return Promise.all([Sf(t,"::before"),Sf(t,"::after")])}function k2(t){return t.parentNode!==document.head&&!~lv.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ns)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var E2=function(t){return!!t&&Rg.some(function(e){return t.includes(e)})},A2=function(t){if(!t)return[];var e=new Set,n=t.split(/,(?![^()]*\))/).map(function(s){return s.trim()});n=n.flatMap(function(s){return s.includes("(")?s:s.split(",").map(function(l){return l.trim()})});var r=ri(n),a;try{for(r.s();!(a=r.n()).done;){var i=a.value;if(E2(i)){var o=Rg.reduce(function(s,l){return s.replace(l,"")},i);o!==""&&o!=="*"&&e.add(o)}}}catch(s){r.e(s)}finally{r.f()}return e};function kf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ln){var n;if(e)n=t;else if(z.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,a=ri(document.styleSheets),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;try{var s=ri(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,u=A2(c.selectorText),f=ri(u),d;try{for(f.s();!(d=f.n()).done;){var _=d.value;r.add(_)}}catch(p){f.e(p)}finally{f.f()}}}catch(p){s.e(p)}finally{s.f()}}catch(p){z.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(p.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(p){a.e(p)}finally{a.f()}if(!r.size)return;var h=Array.from(r).join(", ");try{n=t.querySelectorAll(h)}catch{}}return new Promise(function(p,m){var w=Wr(n).filter(k2).map(S2),b=Ll.begin("searchPseudoElements");np(),Promise.all(w).then(function(){b(),Hs(),p()}).catch(function(){b(),Hs(),m()})})}}var M2={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=kf,t}}},provides:function(t){t.pseudoElements2svg=function(e){var n=e.node,r=n===void 0?ve:n;z.searchPseudoElements&&kf(r)}}},Ef=!1,j2={mixout:function(){return{dom:{unwatch:function(){np(),Ef=!0}}}},hooks:function(){return{bootstrap:function(){bf(Ps("mutationObserverCallbacks",{}))},noAuto:function(){i2()},watch:function(t){var e=t.observeMutationsRoot;Ef?Hs():bf(Ps("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Af=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var a=r.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},L2={mixout:function(){return{parse:{transform:function(t){return Af(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=Af(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var n=e.main,r=e.transform,a=e.containerWidth,i=e.iconWidth,o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(s," ").concat(l," ").concat(c)},f={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:u,path:f};return{tag:"g",attributes:j({},d.outer),children:[{tag:"g",attributes:j({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:j(j({},n.icon.attributes),d.path)}]}]}}}},ts={x:0,y:0,width:"100%",height:"100%"};function Mf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function C2(t){return t.tag==="g"?t.children:[t]}var $2={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),r=n?Hi(n.split(" ").map(function(a){return a.trim()})):Xg();return r.prefix||(r.prefix=An()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.mask,o=e.maskId,s=e.transform,l=a.width,c=a.icon,u=i.width,f=i.icon,d=xv({transform:s,containerWidth:u,iconWidth:l}),_={tag:"rect",attributes:j(j({},ts),{},{fill:"white"})},h=c.children?{children:c.children.map(Mf)}:{},p={tag:"g",attributes:j({},d.inner),children:[Mf(j({tag:c.tag,attributes:j(j({},c.attributes),d.path)},h))]},m={tag:"g",attributes:j({},d.outer),children:[p]},w="mask-".concat(o||sf()),b="clip-".concat(o||sf()),E={tag:"mask",attributes:j(j({},ts),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,m]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:C2(f)},E]};return n.push(A,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(w,")")},ts)}),{children:n,attributes:r}}}},T2={provides:function(t){var e=!1;Jn.matchMedia&&(e=Jn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:j(j({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=j(j({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:j(j({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:j(j({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:j(j({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:j(j({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:j(j({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},R2={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},O2=[Ev,p2,h2,m2,b2,M2,j2,L2,$2,T2,R2];Dv(O2,{mixoutsTo:Ml});var N2=Ml.icon,F2={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z"]},ns,jf;function I2(){if(jf)return ns;jf=1;var t=tg(),e=ng(),n=u_(),r=Q_(),a=l_(),i=c_();return ns={diff:t,patch:e,h:n,create:r,VNode:a,VText:i},ns}var $e=I2();const W2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-down-icon lucide-book-down"><path d="M12 13V7"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 10 3 3 3-3"/></svg>',z2=N2(F2).html.join(""),Tn=6,P2=8;let yr=null;function D2(){yr=null;const t=document.activeElement;if(!(!t||t===document.body||t.tagName.toLowerCase()==="harper-render-box")){if(t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement){const e=t.selectionStart,n=t.selectionEnd,r=t.selectionDirection??void 0;yr=e!=null?()=>{t.focus({preventScroll:!0}),t.setSelectionRange(e,n,r)}:()=>t.focus({preventScroll:!0})}else if(t instanceof HTMLElement){const e=window.getSelection(),n=e&&e.rangeCount>0?e.getRangeAt(0).cloneRange():null;yr=()=>{if(t.focus({preventScroll:!0}),n){const r=window.getSelection();r&&(r.removeAllRanges(),r.addRange(n))}}}}}function B2(){const t=yr;yr=null,t&&setTimeout(()=>{try{t()}catch{}},0)}function qa(t,e,n){return Math.max(e,Math.min(t,Math.max(e,n)))}function U2(t,e,n,r){const a=P2,i=n.width+Tn+r.width+a*2>e.width,o=i?n.height+Tn+r.height:n.height,s=t.y+t.height+3,l=s+o+a>e.height,c=qa(l?t.y-o-3:s,a,e.height-o-a);let u=qa(t.x,a,e.width-n.width-a);const f=u+n.width+Tn+r.width+a>e.width;f&&!i&&(u=qa(u,a+r.width+Tn,e.width-n.width-a));const d=i?0:f?-r.width-Tn:n.width+Tn,_=i?c+n.height+Tn:qa(c,a,e.height-r.height-a);return{top:c,left:u,flyoutLeft:d,flyoutTop:_-c,flipped:l,opensLeft:f}}function V2(t){let e,n;return Object.create({hook(r){r.isConnected?e=t(r):n=requestAnimationFrame(()=>{r.isConnected&&(e=t(r))})},unhook(){cancelAnimationFrame(n),e?.()}})}function H2(t,e){return V2(n=>{const r=n.querySelector(".harper-container"),a=n.querySelector(".harper-flyout"),i=()=>{if(!n.isConnected)return;const c=U2(t.box,{width:window.innerWidth,height:window.innerHeight},{width:r.offsetWidth,height:r.offsetHeight},{width:a.offsetWidth,height:a.offsetHeight});n.style.top=`${c.top}px`,n.style.left=`${c.left}px`,a.style.left=`${c.flyoutLeft}px`,a.style.top=`${c.flyoutTop}px`,n.style.transformOrigin=`${c.flipped?"bottom":"top"} ${c.opensLeft?"right":"left"}`,n.style.visibility="visible"},o=requestAnimationFrame(()=>{n.isConnected&&(i(),n.dataset.autofocused||(D2(),n.dataset.autofocused="true",Gs(n,t.selectedIndex)),i())}),s=c=>{c.key==="Escape"&&(c.preventDefault(),e())},l=new ResizeObserver(i);return l.observe(r),l.observe(a),window.addEventListener("resize",i),window.addEventListener("keydown",s),()=>{cancelAnimationFrame(o),l.disconnect(),window.removeEventListener("resize",i),window.removeEventListener("keydown",s)}})}function Gs(t,e){const n=t.querySelector(`#harper-suggestion-${e}`);n?.focus({preventScroll:!0}),n?.scrollIntoView({block:"nearest",inline:"nearest"})}function q2(t){switch(t){case He.Replace:return"Replace";case He.Remove:return"Remove";case He.InsertAfter:return"Insert After"}}function G2(t){return t.replacement_text||q2(t.kind)}function J2(t,e){switch(t.kind){case He.Replace:return`Click to replace "${e}" with "${t.replacement_text}"`;case He.Remove:return`Click to remove "${e}"`;case He.InsertAfter:return`Click to insert "${t.replacement_text}" after "${e}"`}}function Xr(t,e,n={}){return $e.h("button",{type:"button",className:"harper-btn",onclick:e,onmousedown:r=>r.preventDefault(),...n},t)}function Y2(t){if(t)return $e.h("div",{className:"harper-hint-drawer",attributes:{role:"note","aria-live":"polite"}},[$e.h("div",{className:"harper-hint-content"},[$e.h("div",{className:"harper-hint-icon",attributes:{"aria-hidden":"true"}},"💡"),$e.h("div",{},[$e.h("div",{className:"harper-hint-title"},"Tip"),$e.h("div",{},t)])])])}function K2(t,e,n,r){const{box:a}=n,i=e===n.selectedIndex,o=t?G2(t):"No replacements",s=t?a.lint.suggestions.slice(0,e).filter(l=>l.kind===t.kind&&l.replacement_text===t.replacement_text).length:0;return $e.h("button",{key:JSON.stringify([t?.kind,t?.replacement_text,s]),id:`harper-suggestion-${e}`,type:"button",className:`harper-row${i?" harper-selected":""}`,tabIndex:i?0:-1,attributes:{role:"menuitem","aria-controls":"harper-flyout","aria-expanded":String(i)},title:t?J2(t,a.lint.problem_text):`No replacements for "${a.lint.problem_text}"`,onmouseenter:()=>n.onSelect(e),onfocus:()=>n.onSelect(e),onclick:r},[$e.h("span",{className:"harper-swatch",style:{background:br(a.lint.lint_kind)},attributes:{"aria-hidden":"true"}},[]),$e.h("span",{className:"harper-row-label"},o),$e.h("span",{className:"harper-chevron",attributes:{"aria-hidden":"true"}},"›")])}function X2(t,e,n){const r=t.lint,a=br(r.lint_kind),i=t.ignoreLint,o=[$e.h("div",{id:"harper-kind",className:"harper-kind",style:{borderBottomColor:a}},r.lint_kind_pretty),$e.h("div",{className:"harper-body",innerHTML:r.message_html},[]),$e.h("div",{className:"harper-actions"},[...i?[Xr("Dismiss",()=>n(i),{className:"harper-btn harper-dismiss",title:"Ignore this lint"})]:[],...r.lint_kind==="Spelling"&&e.addToUserDictionary?[Xr("",()=>n(()=>e.addToUserDictionary([r.problem_text])),{title:"Add word to user dictionary",attributes:{"aria-label":"Add word to user dictionary"},innerHTML:W2})]:[]])];return e.setRuleEnabled&&t.rule&&o.push(Xr(`Disable rule ${t.rule}`,()=>n(()=>e.setRuleEnabled(t.rule,!1)),{className:"harper-disable",title:`Disable the ${t.rule} rule`})),e.reportError&&o.push(Xr("Report",()=>{e.reportError(r,t.rule)},{className:"harper-report-link",title:"Report an issue with this lint"})),$e.h("div",{id:"harper-flyout",className:"harper-flyout",attributes:{role:"group","aria-labelledby":"harper-kind"}},o)}function Z2(t,e){const n=[];return t.actions.openOptions&&n.push($e.h("button",{type:"button",className:"harper-footer-row",title:"Click to go to Harper settings",onclick:()=>{t.actions.openOptions()}},[$e.h("span",{className:"harper-settings-icon",innerHTML:z2,attributes:{"aria-hidden":"true"}},[]),"Go to Harper settings"])),n.push(Xr("×",e,{className:"harper-close-btn",title:"Close",attributes:{"aria-label":"Close"}})),$e.h("div",{className:"harper-list-footer"},n)}function Q2(t){return $e.h("style",{id:"harper-suggestion-style"},`
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
`)}function e5(t){const{box:e,selectedIndex:n,actions:r,close:a}=t,i=e.lint.suggestions.length?e.lint.suggestions:[void 0],o=i[n],s=()=>{B2(),a()},l=_=>{Promise.resolve().then(_).catch(console.error).finally(s)},c=_=>{_&&(yr=null,Promise.resolve().then(()=>e.applySuggestion(_)).catch(console.error).finally(a))},u=_=>{var h;const p=_.target,m=_.currentTarget,w=p.closest(".harper-row")!=null;if(_.key==="ArrowLeft"&&p.closest(".harper-flyout"))_.preventDefault(),_.stopPropagation(),Gs(m,n);else if(w&&["ArrowDown","ArrowUp","ArrowRight","Enter"].includes(_.key))if(_.preventDefault(),_.stopPropagation(),_.key==="Enter")c(o);else if(_.key==="ArrowRight")(h=m.querySelector(".harper-flyout button"))==null||h.focus({preventScroll:!0});else{const b=(n+(_.key==="ArrowDown"?1:-1)+i.length)%i.length;t.onSelect(b),Gs(m,b)}},f=i.map((_,h)=>K2(_,h,t,()=>c(_))),d=Y2(t.hint);return $e.h("div",{key:"harper-suggestion-popup",className:"harper-popup fade-in",onkeydown:u,"harper-popup-hook":H2(t,s)},[Q2(e.lint.lint_kind),$e.h("div",{className:"harper-container"},[$e.h("div",{attributes:{role:"menu","aria-label":"Suggestions for this lint","aria-activedescendant":`harper-suggestion-${n}`}},f),Z2(t,s),...d?[d]:[]]),X2(e,r,l)])}function t5(t,e,n=300){let r=0;const a=i=>{if(i.key.toLowerCase()!==e.toLowerCase())return;const o=performance.now(),s=o-r;s<=n&&s>10&&t(),r=o};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)}class n5{constructor(e){Z(this,"currentLintBoxes"),Z(this,"popupLint"),Z(this,"selectedSuggestion",0),Z(this,"currentHint"),Z(this,"currentHintFor"),Z(this,"renderBox"),Z(this,"pointerDownCallback"),Z(this,"activationKeyListener"),Z(this,"actions"),Z(this,"close",()=>{this.popupLint=void 0,this.selectedSuggestion=0,this.render()}),Z(this,"onOutsidePointerDown",n=>{const r=n.composedPath();r.includes(this.renderBox.getShadowHost())||this.currentLintBoxes.some(a=>r.includes(a.source))||this.close()}),this.actions=e,this.currentLintBoxes=[],this.currentHint=void 0,this.currentHintFor=void 0,this.renderBox=new rg(()=>Zd(document.body)),this.renderBox.getShadowHost().popover="manual",this.renderBox.getShadowHost().style.pointerEvents="none",this.renderBox.getShadowHost().style.border="none",this.pointerDownCallback=n=>{this.onPointerDown(n)},this.updateActivationKeyListener()}updateActivationKeyListener(){this.activationKeyListener&&(this.activationKeyListener(),this.activationKeyListener=void 0);const e=this.actions.getActivationKey;e&&e().then(n=>{n!=="off"&&(this.activationKeyListener=t5(()=>this.openClosestToCaret(),n))})}openClosestToCaret(){const e=this.renderBox.getShadowHost(),n=document.activeElement===e,r=n?null:i_(),a=r?Kd(r,this.currentLintBoxes):n?this.popupLint:void 0;a==null||a<0||(this.popupLint=a,this.selectedSuggestion=0,this.render(),n&&this.focusSelectedSuggestion())}focusSelectedSuggestion(){var e;const n=(e=this.renderBox.getShadowHost().shadowRoot)==null?void 0:e.querySelector(".harper-selected");n?.focus({preventScroll:!0}),n?.scrollIntoView({block:"nearest"})}onPointerDown(e){for(let n=0;n<this.currentLintBoxes.length;n++){const r=this.currentLintBoxes[n];if(e.composedPath().includes(r.source)&&Wn([e.x,e.y],r)){this.popupLint!=null&&this.close(),this.popupLint=n,this.selectedSuggestion=0,this.render();return}}this.close()}render(){let e=ti("div",{},[]);const n=this.renderBox.getShadowHost();if(this.updateHint(),this.popupLint!=null&&this.popupLint<this.currentLintBoxes.length){const r=this.currentLintBoxes[this.popupLint];e=e5({box:r,selectedIndex:this.selectedSuggestion,onSelect:a=>{a!==this.selectedSuggestion&&(this.selectedSuggestion=a,this.render())},actions:this.actions,hint:this.currentHint??null,close:this.close})}this.renderBox.render(e),this.popupLint!=null&&this.popupLint<this.currentLintBoxes.length?(document.addEventListener("pointerdown",this.onOutsidePointerDown,!0),n.style.setProperty("visibility","visible","important"),n.isConnected&&!n.matches(":popover-open")&&n.showPopover()):(document.removeEventListener("pointerdown",this.onOutsidePointerDown,!0),n.style.setProperty("visibility","hidden","important"),n.isConnected&&n.matches(":popover-open")&&n.hidePopover())}updateHint(){if(this.popupLint==null){this.currentHint=void 0,this.currentHintFor=void 0;return}if(this.currentHintFor!==this.popupLint||this.currentHint===void 0){const e=Array.isArray(Ku)?Ku.filter(r=>typeof r=="string"):[],n=Math.random()<.1&&e.length>0;this.currentHint=n?e[Math.floor(Math.random()*e.length)]:null,this.currentHintFor=this.popupLint}}updateLintBoxes(e){var n;const r=this.renderBox.getShadowHost(),a=document.activeElement===r;this.currentLintBoxes.forEach(l=>{l.source.removeEventListener("pointerdown",this.pointerDownCallback)});const i=this.popupLint==null?void 0:this.currentLintBoxes[this.popupLint],o=i?.lint.suggestions[this.selectedSuggestion];if(i){const l=this.currentLintBoxes.slice(0,this.popupLint).filter(u=>u.lint.context_hash===i.lint.context_hash&&u.source===i.source&&u.lint.span.start===i.lint.span.start&&u.lint.span.end===i.lint.span.end).length,c=e.flatMap((u,f)=>u.lint.context_hash===i.lint.context_hash&&u.source===i.source&&u.lint.span.start===i.lint.span.start&&u.lint.span.end===i.lint.span.end&&u.lint.source===i.lint.source?[f]:[]);this.popupLint=c[Math.min(l,c.length-1)]}const s=this.popupLint==null?void 0:e[this.popupLint];this.selectedSuggestion=s&&o?Math.max(0,s.lint.suggestions.findIndex(l=>l.kind===o.kind&&l.replacement_text===o.replacement_text)):0,this.popupLint!=null&&(this.currentHintFor=this.popupLint),this.currentLintBoxes=e,this.currentLintBoxes.forEach(l=>{l.source.addEventListener("pointerdown",this.pointerDownCallback)}),this.render(),a&&this.popupLint!=null&&!((n=r.shadowRoot)!=null&&n.activeElement)&&this.focusSelectedSuggestion()}}function r5(t,e){if(t===e)return null;let n=0;const r=Math.min(t.length,e.length);for(;n<r&&t[n]===e[n];)n++;let a=0;for(;a<t.length-n&&a<e.length-n&&t[t.length-1-a]===e[e.length-1-a];)a++;const i=n,o=t.length-a,s=n,l=e.length-a;return{oldStart:i,oldEnd:o,newStart:s,newEnd:l,delta:l-s-(o-i)}}function a5(t,e){return e==null?{...t}:t.end<=e.oldStart?{...t}:t.start>=e.oldEnd?{start:t.start+e.delta,end:t.end+e.delta}:null}function i5(t,e){if(t.source===e)return t;const n=a5(t.span,r5(t.source,e));return n==null||e.slice(n.start,n.end)!==t.problem_text?null:{...t,span:n,source:e}}const Lf=["focus","keyup","keydown","paste","change","scroll","input"],o5=["resize","scroll","keyup","keydown","input","compositionend","selectionchange"];class s5{constructor(e,n){Z(this,"highlights"),Z(this,"popupHandler"),Z(this,"targets"),Z(this,"scrollableAncestors"),Z(this,"lintRequest",null),Z(this,"renderRequested",!1),Z(this,"lintDelayTimer",null),Z(this,"lastInputAt",0),Z(this,"lastLints",[]),Z(this,"lastBoxes",[]),Z(this,"lastLintBoxes",[]),Z(this,"updateEventCallback"),Z(this,"lintProvider"),Z(this,"actions"),this.lintProvider=e,this.actions=n,this.highlights=new mw,this.popupHandler=new n5({getActivationKey:n.getActivationKey,openOptions:n.openOptions,addToUserDictionary:n.addToUserDictionary,reportError:n.reportError,setRuleEnabled:n.setRuleEnabled}),this.targets=new Set,this.scrollableAncestors=new Set,this.lastLints=[],this.updateEventCallback=()=>{this.lastInputAt=Date.now(),this.update()};const r=()=>{this.update(),setTimeout(r,1e3)};r(),this.attachWindowListeners()}onScreenTargets(){const e=[];for(const n of this.targets)_m(n)&&e.push(n);return e}async update(){this.requestRender(),this.requestLintUpdate()}async requestLintUpdate(e=!1){var n,r;const a=await((r=(n=this.actions).getDelay)==null?void 0:r.call(n))??0,i=a-(Date.now()-this.lastInputAt);if(!e&&a>0&&i>0){this.lintDelayTimer!=null&&window.clearTimeout(this.lintDelayTimer),this.lintDelayTimer=window.setTimeout(()=>{this.lintDelayTimer=null,this.requestLintUpdate()},i);return}if(this.lintDelayTimer!=null&&(window.clearTimeout(this.lintDelayTimer),this.lintDelayTimer=null),this.lintRequest!=null){if(!e)return;try{await this.lintRequest}catch{}await this.requestLintUpdate(!0);return}if(this.targets.size!==0){const o=Promise.all(this.onScreenTargets().map(async l=>{if(!document.contains(l))return this.targets.delete(l),{target:null,lints:{}};const{text:c,isCM:u,newLineIndices:f}=this.getTargetText(l);if(!c||c.length>12e4)return{target:null,lints:{}};const d=c5(l);let _=await this.lintProvider(c,window.location.hostname,{forceAllHeadings:dm(l),language:d});if(u){_=window.structuredClone(_);for(const h of Object.values(_))for(const p of h){const m=f.findIndex(b=>b>p.span.start),w=f.findIndex(b=>b>p.span.end);p.span.start-=m,p.span.end-=w}}return{target:l,lints:_}}));this.lintRequest=o;const s=await o.finally(()=>{this.lintRequest===o&&(this.lintRequest=null)});this.lastLints=s.filter(l=>l.target!=null),this.requestRender()}}async lintHotkey(){var e,n;const r=await((n=(e=this.actions).getHotkey)==null?void 0:n.call(e));document.addEventListener("keydown",a=>{var i;if(!r)return;const o=a.key.toLowerCase(),s=r.key.toLowerCase(),l=a.ctrlKey===r.modifiers.includes("Ctrl"),c=a.altKey===r.modifiers.includes("Alt"),u=a.shiftKey===r.modifiers.includes("Shift");if(o===s&&l&&c&&u){a.preventDefault(),a.stopImmediatePropagation();const f=i_();if(f!=null){const d=Kd(f,this.lastBoxes);if(d<0)return;const _=this.lastBoxes[d],h=_.lint.suggestions;h.length>0?_.applySuggestion(h[0]):(i=_.ignoreLint)==null||i.call(_)}}},{capture:!0})}async addTarget(e){this.targets.has(e)||(this.targets.add(e),this.update(),this.attachTargetListeners(e))}async removeTarget(e){if(this.targets.has(e))this.targets.delete(e),this.update(),this.detachTargetListeners(e);else throw new Error("HTMLElement not added.")}getLastIgnorableLintBoxes(){return this.lastLintBoxes}attachTargetListeners(e){for(const i of Lf)e.addEventListener(i,this.updateEventCallback);const n=new MutationObserver(this.updateEventCallback),r={subtree:!0,characterData:!0};e.tagName==null?n.observe(e.parentElement,r):n.observe(e,r);const a=l5(e);for(const i of a)this.scrollableAncestors.has(i)||(this.scrollableAncestors.add(i),i.addEventListener("scroll",this.updateEventCallback,{capture:!0,passive:!0}))}detachTargetListeners(e){for(const n of Lf)e.removeEventListener(n,this.updateEventCallback)}attachWindowListeners(){this.lintHotkey();for(const e of o5)window.addEventListener(e,this.updateEventCallback)}getTargetText(e){let n=null;const r=e instanceof HTMLElement&&ll(e)!=null;if(r){const o=e.querySelectorAll(".cm-line");n=Array.from(o).map(s=>s.textContent).reduce((s,l)=>`${s}${l??""}
`,"")}else e instanceof HTMLElement&&o_(e)?n=e.textContent:n=e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement?e.value:e.innerText;const a=[];let i=0;for(const o of n??"")o==`
`&&a.push(i),i++;return{text:n,isCM:r,newLineIndices:a}}requestRender(){this.renderRequested||(this.renderRequested=!0,requestAnimationFrame(()=>{const e=this.lastLints.flatMap(({target:n,lints:r})=>{if(!n)return[];const{text:a,isCM:i}=this.getTargetText(n);return a==null?[]:Object.entries(r).flatMap(([o,s])=>s.flatMap(l=>{const c=i?l.source===a?l:null:i5(l,a);return c==null?[]:Wm(n,c,o,{ignoreLint:this.actions.ignoreLint?async u=>{var f,d;await((d=(f=this.actions).ignoreLint)==null?void 0:d.call(f,u)),await this.requestLintUpdate(!0)}:void 0})}))});this.lastLintBoxes=e,this.highlights.renderLintBoxes(e),this.popupHandler.updateLintBoxes(e),this.renderRequested=!1,this.lastBoxes=e}))}}function l5(t){const e=[],n=document.scrollingElement||document.documentElement;let r=t.parentElement;for(;r;){const a=window.getComputedStyle(r),{overflowY:i,overflowX:o}=a,s=i.includes("auto")||i.includes("scroll"),l=o.includes("auto")||o.includes("scroll");(s||l)&&e.push(r),r=r.parentElement}return n&&e[e.length-1]!==n&&e.push(n),e}function c5(t){if(!(t instanceof Element))return;const e=t.getAttribute("data-language");switch(e){case"plaintext":case"markdown":case"typst":return e;default:return}}const Js=[{value:"sans",label:"Sans",sample:"Aa",stack:"'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif"},{value:"serif",label:"Serif",sample:"Aa",stack:"'Iowan Old Style', 'New York', Georgia, serif"},{value:"mono",label:"Mono",sample:"Aa",stack:"'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"}],u5=[12,13,14,15,16,17,18,20,22],rs="default",ip=["Spelling","Typo","Capitalization","Grammar","Agreement","BoundaryError","Punctuation","Usage","WordChoice","WordOrder","Style","Readability","Enhancement","Redundancy","Repetition","Formatting","Regionalism","Nonstandard","Eggcorn","Malapropism","Miscellaneous"],op={Agreement:{label:"Agreement",dotClass:"bg-emerald-500",haloClass:"bg-emerald-100",textClass:"text-emerald-700",softClass:"bg-emerald-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-emerald-500/10"},BoundaryError:{label:"Boundary",dotClass:"bg-indigo-500",haloClass:"bg-indigo-100",textClass:"text-indigo-700",softClass:"bg-indigo-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-indigo-500/10"},Capitalization:{label:"Capitalization",dotClass:"bg-rose-500",haloClass:"bg-rose-100",textClass:"text-rose-700",softClass:"bg-rose-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-rose-500/10"},Eggcorn:{label:"Eggcorn",dotClass:"bg-violet-500",haloClass:"bg-violet-100",textClass:"text-violet-700",softClass:"bg-violet-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-violet-500/10"},Enhancement:{label:"Enhancement",dotClass:"bg-amber-600",haloClass:"bg-amber-100",textClass:"text-amber-700",softClass:"bg-amber-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-amber-600/10"},Formatting:{label:"Formatting",dotClass:"bg-slate-500",haloClass:"bg-slate-100",textClass:"text-slate-700",softClass:"bg-slate-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-slate-500/10"},Grammar:{label:"Grammar",dotClass:"bg-emerald-600",haloClass:"bg-emerald-100",textClass:"text-emerald-700",softClass:"bg-emerald-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-emerald-600/10"},Malapropism:{label:"Malapropism",dotClass:"bg-fuchsia-500",haloClass:"bg-fuchsia-100",textClass:"text-fuchsia-700",softClass:"bg-fuchsia-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-fuchsia-500/10"},Miscellaneous:{label:"Miscellaneous",dotClass:"bg-sky-500",haloClass:"bg-sky-100",textClass:"text-sky-700",softClass:"bg-sky-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-sky-500/10"},Nonstandard:{label:"Nonstandard",dotClass:"bg-stone-500",haloClass:"bg-stone-100",textClass:"text-stone-700",softClass:"bg-stone-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-stone-500/10"},Punctuation:{label:"Punctuation",dotClass:"bg-cyan-600",haloClass:"bg-cyan-100",textClass:"text-cyan-700",softClass:"bg-cyan-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-cyan-600/10"},Readability:{label:"Readability",dotClass:"bg-violet-600",haloClass:"bg-violet-100",textClass:"text-violet-700",softClass:"bg-violet-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-violet-600/10"},Redundancy:{label:"Redundancy",dotClass:"bg-amber-600",haloClass:"bg-amber-100",textClass:"text-amber-700",softClass:"bg-amber-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-amber-600/10"},Regionalism:{label:"Regionalism",dotClass:"bg-teal-700",haloClass:"bg-teal-100",textClass:"text-teal-700",softClass:"bg-teal-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-teal-700/10"},Repetition:{label:"Repetition",dotClass:"bg-amber-700",haloClass:"bg-amber-100",textClass:"text-amber-700",softClass:"bg-amber-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-amber-700/10"},Spelling:{label:"Spelling",dotClass:"bg-rose-500",haloClass:"bg-rose-100",textClass:"text-rose-700",softClass:"bg-rose-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-rose-500/10"},Style:{label:"Style",dotClass:"bg-blue-500",haloClass:"bg-blue-100",textClass:"text-blue-700",softClass:"bg-blue-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-blue-500/10"},Typo:{label:"Typo",dotClass:"bg-rose-500",haloClass:"bg-rose-100",textClass:"text-rose-700",softClass:"bg-rose-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-rose-500/10"},Usage:{label:"Usage",dotClass:"bg-green-600",haloClass:"bg-green-100",textClass:"text-green-700",softClass:"bg-green-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-green-600/10"},WordChoice:{label:"Word Choice",dotClass:"bg-blue-600",haloClass:"bg-blue-100",textClass:"text-blue-700",softClass:"bg-blue-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-blue-600/10"},WordOrder:{label:"Word Order",dotClass:"bg-indigo-600",haloClass:"bg-indigo-100",textClass:"text-indigo-700",softClass:"bg-indigo-50",activeClass:"border-[rgba(28,26,22,0.14)] shadow-indigo-600/10"}},f5=ip.map(t=>[t,op[t]]);function Cf(){return Object.fromEntries(ip.map(t=>[t,0]))}function d5(t){return t==="serif"||t==="mono"?t:"sans"}function _5(t){return Js.find(e=>e.value===t)?.stack??Js[0].stack}function $f(t){if(t===rs||t==null||t==="")return rs;const e=typeof t=="number"?t:Number(t);if(!Number.isFinite(e))return rs;const n=Math.round(e);return Math.min(28,Math.max(11,n))}function Ga(t){return t.replacement_text!==""?t.replacement_text:String(t.kind)}function g5(t){return t.trim().match(/\S+/g)?.length??0}var p5=de('<button type="button"> </button>'),h5=de('<div class="flex flex-1 flex-wrap justify-end gap-1.5"></div>'),m5=de('<span class="mr-auto text-xs text-stone-400">No suggestions available.</span>'),b5=de('<div class="flex flex-col gap-2.5 px-3 pt-0.5 pb-3"><button type="button" class="m-0 flex w-full flex-col border-0 bg-transparent p-0 text-left text-[13px] leading-[1.4] font-medium text-stone-950"><span><!></span></button> <button type="button" class="m-0 block max-h-[84px] w-full overflow-hidden rounded-[7px] border-[0.5px] border-[rgba(28,26,22,0.09)] bg-[#fbfaf6] px-3 py-2.5 text-left text-xs leading-[1.45] text-stone-700" aria-label="Focus problem in editor"><span class="text-stone-500"> </span> <mark> </mark> <span class="text-stone-500"> </span></button> <div class="flex items-center justify-end gap-2"><!> <button type="button" class="h-[26px] shrink-0 border-0 bg-transparent px-1 text-[12.5px] font-medium text-stone-500 shadow-none">Ignore</button></div></div>'),w5=de('<div role="group"><button type="button" class="m-0 flex min-h-8 w-full items-center gap-2 border-0 bg-transparent px-3 py-2 text-left text-inherit"><span><span></span></span> <span class="text-[12.5px] leading-[1.1] font-semibold text-stone-950"> </span> <span><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6 8 10 12 6"></path></svg></span></button> <!></div>');function y5(t,e){jn(e,!1);const n=fe();let r=re(e,"lint",8),a=re(e,"open",8,!1),i=re(e,"active",8,!1),o=re(e,"onToggleOpen",8),s=re(e,"focusError",8),l=re(e,"onActivate",8,()=>{}),c=re(e,"onApply",8),u=re(e,"onIgnore",8,()=>{}),f=re(e,"snippet",8),d=fe(null);const _="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]",h="h-[26px] max-w-full overflow-hidden text-ellipsis rounded-full px-[11px] text-[12.5px] font-semibold";function p(){l()(),s()?.()}De(()=>te(r()),()=>{R(n,op[r().lint_kind])}),De(()=>(te(a()),g(d)),()=>{a()&&g(d)!=null&&requestAnimationFrame(()=>{const N=g(d)?.closest("[data-problems-scroller]");if(!(N instanceof HTMLElement)||g(d)==null)return;const $=g(d).offsetTop,B=$+g(d).offsetHeight,V=N.scrollTop,D=V+N.clientHeight;$<V+8?N.scrollTo({top:Math.max(0,$-14),behavior:"smooth"}):B>D-8&&N.scrollTo({top:B-N.clientHeight+14,behavior:"smooth"})})}),Ci(),Ti();var m=w5(),w=T(m),b=T(w),E=T(b),A=I(b,2),S=T(A),k=I(A,2),M=T(k);Be(M,0,ur(_));var O=I(w,2);{var L=N=>{var $=b5(),B=T($),V=T(B),D=T(V);L0(D,()=>(te(r()),H(()=>r().message_html)));var P=I(B,2),U=T(P),X=T(U),ee=I(U,2),ne=T(ee),we=I(ee,2),ge=T(we),Me=I(P,2),he=T(Me);{var xe=Y=>{var Ce=h5();tn(Ce,5,()=>(te(r()),H(()=>r().suggestions)),en,(Ye,tt,yt)=>{var Ke=p5(),Ht=T(Ke);Te((qt,Gt)=>{Be(Ke,1,(g(n),H(()=>`${h} ${yt===0?`border-transparent ${g(n).softClass} ${g(n).textClass} shadow-none`:"border-[0.5px] border-stone-300 bg-linear-to-b from-white to-stone-50 text-stone-950 shadow-sm shadow-stone-950/5"}`))),Bn(Ke,"title",qt),je(Ht,Gt)},[()=>(te(Ga),g(tt),H(()=>`Replace with "${Ga(g(tt))}"`)),()=>(te(Ga),g(tt),H(()=>Ga(g(tt))))]),Ne("click",Ke,qt=>{qt.stopPropagation(),c()?.(g(tt))}),Q(Ye,Ke)}),Q(Y,Ce)},Se=Y=>{var Ce=m5();Q(Y,Ce)};ze(he,Y=>{te(r()),H(()=>r().suggestions&&r().suggestions.length>0)?Y(xe):Y(Se,!1)})}var Pe=I(he,2);Te(()=>{je(X,`${te(f()),H(()=>f().prefixEllipsis?"...":"")??""}${te(f()),H(()=>f().prefix)??""}`),Be(ee,1,(g(n),H(()=>`rounded-[3px] px-0.5 font-semibold ${g(n).softClass} ${g(n).textClass}`))),je(ne,(te(f()),H(()=>f().problem))),je(ge,`${te(f()),H(()=>f().suffix)??""}${te(f()),H(()=>f().suffixEllipsis?"...":"")??""}`)}),Ne("click",B,p),Ne("click",P,p),Ne("click",Pe,Y=>{Y.stopPropagation(),u()()}),In(1,$,()=>lc,()=>({duration:130})),In(2,$,()=>lc,()=>({duration:130})),Q(N,$)};ze(O,N=>{a()&&N(L)})}Er(m,N=>R(d,N),()=>g(d)),Te(()=>{Be(m,1,(te(i()),g(n),H(()=>`shrink-0 overflow-hidden rounded-[10px] border-[0.5px] bg-white shadow-sm shadow-stone-950/5 transition-[box-shadow,border-color] duration-150 ${i()?g(n).activeClass:"border-[rgba(28,26,22,0.14)]"}`))),Bn(w,"aria-expanded",a()),Be(b,1,(g(n),H(()=>`inline-flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full ${g(n).haloClass}`))),Be(E,1,(g(n),H(()=>`h-[7px] w-[7px] rounded-full ${g(n).dotClass}`))),je(S,(g(n),H(()=>g(n).label))),Be(k,1,`ml-auto inline-flex shrink-0 text-stone-500 transition-transform duration-150 ${a()?"rotate-180":""}`)}),Ne("click",w,function(...N){o()?.apply(this,N)}),Ne("mouseenter",m,function(...N){l()?.apply(this,N)}),Q(t,m),Ln()}var v5=de('<div id="problem-actions-menu" role="menu" class="absolute top-[calc(100%+6px)] right-0 z-30 w-36 overflow-hidden rounded-lg border-[0.5px] border-[rgba(28,26,22,0.16)] bg-white py-1 shadow-lg shadow-stone-950/10"><button type="button" role="menuitem">Open All</button> <button type="button" role="menuitem">Close All</button> <div class="my-1 h-px bg-[rgba(28,26,22,0.09)]"></div> <button type="button" role="menuitem">Ignore All</button></div>'),x5=de('<div class="grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1 whitespace-nowrap text-[10px] font-medium text-stone-500"><span><span></span></span> <span class="overflow-hidden text-ellipsis"> </span> <strong class="font-medium text-stone-400 tabular-nums"> </strong></div>'),S5=de('<div class="grid grid-cols-3 gap-x-2 gap-y-[7px] overflow-hidden border-b-[0.5px] border-[rgba(28,26,22,0.09)] px-[18px] pb-3" aria-label="Problem lint kinds"></div>'),k5=de('<div class="m-auto max-w-[220px] px-3 py-7 text-center text-[12.5px] leading-[1.55] text-stone-500"><div aria-hidden="true" class="mb-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-b from-emerald-400 to-emerald-600 text-white shadow-sm shadow-emerald-900/20"><svg viewBox="0 0 16 16" class="h-4 w-4 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M3.5 8.5 6.5 11.5 12.5 5"></path></svg></div> <strong class="mb-0.5 block font-semibold text-stone-950">All clear</strong> <p class="m-0">Harper has no suggestions for this document.</p></div>'),E5=de('<div class="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/35 px-4" role="presentation"><div class="w-full max-w-[340px] rounded-lg border-[0.5px] border-[rgba(28,26,22,0.16)] bg-white p-4 text-stone-950 shadow-2xl shadow-stone-950/20" role="dialog" aria-modal="true" aria-labelledby="ignore-all-title" tabindex="-1"><h3 id="ignore-all-title" class="!m-0 !p-0 text-[15px] leading-5 font-semibold">Ignore all problems?</h3> <p class="mt-2 mb-4 text-[13px] leading-5 text-stone-600"> </p> <div class="flex justify-end gap-2"><button type="button" class="h-8 rounded-md border-[0.5px] border-stone-300 bg-linear-to-b from-white to-stone-50 px-3 text-[13px] font-medium text-stone-700 shadow-sm shadow-stone-950/5">Cancel</button> <button type="button" class="h-8 rounded-md border-[0.5px] border-red-700 bg-red-700 px-3 text-[13px] font-medium text-white shadow-sm shadow-red-950/10 disabled:opacity-50">Ignore All</button></div></div></div>'),A5=de('<aside class="flex min-h-0 w-[320px] flex-[0_0_320px] overflow-hidden border-l-[0.5px] border-[rgba(28,26,22,0.14)] bg-[#f4f0e7] @max-[760px]:w-full @max-[760px]:flex-[0_0_42%] @max-[760px]:border-t-[0.5px] @max-[760px]:border-l-0 svelte-166hzxe" aria-label="Problems"><div class="flex min-h-0 flex-1 flex-col"><header class="flex items-center gap-1.5 px-3.5 pt-2.5 pb-2"><h2 class="m-0! flex min-w-0 flex-1 items-center p-0! text-[15px]! leading-none! font-bold! text-stone-950 font-[inherit]!"><button type="button" class="m-0! inline-flex min-w-0 items-center gap-1.5 border-0 bg-transparent p-0! text-left text-[15px]! leading-none! font-[inherit] text-inherit">Problems <span class="inline-flex h-[18px] min-w-5 items-center justify-center rounded-full bg-amber-700 px-1.5 text-[11px] font-semibold text-white tabular-nums"> </span> <span><svg viewBox="0 0 16 16" aria-hidden="true" class="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><path d="M4 6 8 10 12 6"></path></svg></span></button></h2> <div class="relative flex shrink-0 items-center gap-1.5"><button type="button" aria-label="Hide problems sidebar" title="Hide problems sidebar"><svg viewBox="0 0 20 20" aria-hidden="true" class="h-[18px] w-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"><rect x="3.5" y="3" width="13" height="14" rx="3"></rect><path d="M13.25 5.5v9"></path></svg></button> <button type="button" aria-label="More problem actions" aria-haspopup="menu" title="More problem actions"><svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4 fill-current"><circle cx="8" cy="4" r="1.15"></circle><circle cx="8" cy="8" r="1.15"></circle><circle cx="8" cy="12" r="1.15"></circle></svg></button> <!></div></header> <!> <div class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto px-3.5 pt-3.5 pb-6" data-problems-scroller=""><!></div></div></aside> <!>',1);function M5(t,e){jn(e,!1);const n=fe(),r=fe(),a=fe(),i=fe(),o=fe();let s=re(e,"lintBoxes",24,()=>[]),l=re(e,"activeLintId",8,null),c=re(e,"focusLint",8,()=>{}),u=re(e,"onActivate",8,()=>{}),f=re(e,"onApplied",8,()=>{}),d=re(e,"onIgnored",8,()=>{}),_=re(e,"onIgnoreAll",8,null),h=re(e,"onHideSidebar",8,()=>{}),p=fe(new Set),m=fe(null),w=fe(""),b=fe(!0),E=fe(!1),A=fe(!1);const S="inline-flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent text-stone-600 shadow-none transition-colors duration-150 hover:text-stone-950 disabled:opacity-50",k="m-0 flex h-8 w-full items-center border-0 bg-transparent px-3 text-left text-[13px] font-medium text-stone-700 shadow-none hover:bg-stone-100 disabled:text-stone-300 disabled:hover:bg-transparent",M="m-0 flex h-8 w-full items-center border-0 bg-transparent px-3 text-left text-[13px] font-medium text-red-700 shadow-none hover:bg-red-50 disabled:text-stone-300 disabled:hover:bg-transparent";async function O(){if(_()!=null)await _()();else{const x=[...s()];for(const C of x)await C.ignoreLint?.()}R(p,new Set),d()()}function L(){R(E,!1),R(A,!1),h()()}function N(){R(p,new Set(s().map(x=>x.lint.context_hash))),R(E,!1)}function $(){R(p,new Set),R(E,!1)}function B(){R(E,!1),R(A,!0)}async function V(){R(A,!1),await O()}function D(){R(A,!1)}function P(x){x.target===x.currentTarget&&D()}function U(x){!g(E)||g(m)==null||x.target==null||g(m).contains(x.target)||R(E,!1)}function X(x){if(x.key==="Escape"){if(g(A)){x.preventDefault(),R(A,!1);return}g(E)&&(x.preventDefault(),R(E,!1))}}function ee(x){const C=new Set(g(p));C.has(x)?C.delete(x):C.add(x),R(p,C)}function ne(x){return x.replace(/\s+/g," ").trim()}function we(x){let C=x.lint,q=C.source||x.source.textContent||"";const ue=60,_e=Math.max(0,C.span.start-ue),pe=Math.min(q.length,C.span.end+ue);let ke=q.slice(_e,C.span.start),We=q.slice(C.span.end,pe);ke=ne(ke);const st=ne(C.problem_text);return We=ne(We),{prefix:ke,problem:st,suffix:We,prefixEllipsis:_e>0,suffixEllipsis:pe<q.length}}De(()=>te(s()),()=>{R(o,s().map(x=>x.lint.context_hash).join("|"))}),De(()=>(g(o),g(w),te(s()),g(p)),()=>{if(g(o)!==g(w)){R(w,g(o));const x=new Set(s().map(q=>q.lint.context_hash)),C=new Set([...g(p)].filter(q=>x.has(q)));C.size===0&&s().length>0&&C.add(s()[0].lint.context_hash),R(p,C)}}),De(()=>(te(s()),g(p)),()=>{R(n,s().length>0&&g(p).size===s().length)}),De(()=>te(s()),()=>{R(r,`${s().length} ${s().length===1?"problem":"problems"}`)}),De(()=>(te(s()),Cf),()=>{R(a,s().reduce((x,C)=>(x[C.lint.lint_kind]+=1,x),Cf()))}),De(()=>g(a),()=>{R(i,f5.filter(([x])=>g(a)[x]>0))}),Ci(),Ti();var ge=A5();Ne("click",li,U),Ne("keydown",li,X);var Me=sa(ge),he=T(Me),xe=T(he),Se=T(xe),Pe=T(Se),Y=I(T(Pe)),Ce=T(Y),Ye=I(Y,2),tt=I(Se,2),yt=T(tt);Be(yt,1,ur(S));var Ke=I(yt,2);Be(Ke,1,ur(S));var Ht=I(Ke,2);{var qt=x=>{var C=v5(),q=T(C);Be(q,1,ur(k));var ue=I(q,2);Be(ue,1,ur(k));var _e=I(ue,4);Be(_e,1,ur(M)),Te(()=>{q.disabled=(te(s()),g(n),H(()=>s().length===0||g(n))),ue.disabled=(te(s()),g(p),H(()=>s().length===0||g(p).size===0)),_e.disabled=(te(s()),H(()=>s().length===0))}),Ne("click",q,N),Ne("click",ue,$),Ne("click",_e,B),In(3,C,()=>ei,()=>({duration:100})),Q(x,C)};ze(Ht,x=>{g(E)&&x(qt)})}Er(tt,x=>R(m,x),()=>g(m));var Gt=I(xe,2);{var zr=x=>{var C=S5();tn(C,5,()=>g(i),en,(q,ue)=>{var _e=si(()=>hp(g(ue),2));let pe=()=>g(_e)[0],ke=()=>g(_e)[1];var We=x5(),st=T(We),$n=T(st),Dr=I(st,2),Gi=T(Dr),Ji=I(Dr,2),Br=T(Ji);Te(()=>{Be(st,1,(ke(),H(()=>`inline-flex h-[9px] w-[9px] shrink-0 items-center justify-center rounded-full ${ke().haloClass}`))),Be($n,1,(ke(),H(()=>`h-[7px] w-[7px] rounded-full ${ke().dotClass}`))),je(Gi,(ke(),H(()=>ke().label))),je(Br,(g(a),pe(),H(()=>g(a)[pe()])))}),Q(q,We)}),Q(x,C)};ze(Gt,x=>{g(b),g(i),H(()=>g(b)&&g(i).length>0)&&x(zr)})}var Pr=I(Gt,2),F=T(Pr);{var K=x=>{var C=k5();Q(x,C)},nt=x=>{var C=di(),q=sa(C);tn(q,1,s,en,(ue,_e)=>{const pe=dn(()=>(g(_e),H(()=>g(_e).lint.context_hash)));{let ke=dn(()=>(g(_e),H(()=>we(g(_e))))),We=dn(()=>(g(p),te(g(pe)),H(()=>g(p).has(g(pe))))),st=dn(()=>l()===g(pe));y5(ue,{get lint(){return g(_e),H(()=>g(_e).lint)},get snippet(){return g(ke)},get open(){return g(We)},get active(){return g(st)},onToggleOpen:()=>ee(g(pe)),focusError:()=>c()(g(_e)),onActivate:()=>u()(g(_e)),onApply:$n=>{g(_e).applySuggestion($n),f()()},onIgnore:async()=>{await g(_e).ignoreLint?.(),d()()}})}}),Q(x,C)};ze(F,x=>{te(s()),H(()=>s().length===0)?x(K):x(nt,!1)})}var Xe=I(Me,2);{var Cn=x=>{var C=E5(),q=T(C),ue=I(T(q),2),_e=T(ue),pe=I(ue,2),ke=T(pe),We=I(ke,2);Te(()=>{je(_e,`This will ignore ${g(r)??""} in the current document.`),We.disabled=(te(s()),H(()=>s().length===0))}),Ne("click",ke,D),Ne("click",We,V),In(3,C,()=>ei,()=>({duration:120})),Ne("click",C,P),Q(x,C)};ze(Xe,x=>{g(A)&&x(Cn)})}Te(()=>{Bn(Pe,"aria-expanded",g(b)),je(Ce,(te(s()),H(()=>s().length))),Be(Ye,1,`inline-flex shrink-0 text-stone-500 transition-transform duration-150 ${g(b)?"rotate-180":""}`),Bn(Ke,"aria-expanded",g(E))}),Ne("click",Pe,()=>R(b,!g(b))),Ne("click",yt,L),Ne("click",Ke,()=>R(E,!g(E))),In(3,he,()=>ei,()=>({duration:250})),In(3,Me,()=>im,()=>({x:320,duration:250,easing:om})),Q(t,ge),Ln()}var j5=de('<button type="button"> </button>'),L5=de("<option> </option>"),C5=de(`<footer class="flex min-h-[26px] flex-[0_0_26px] items-center gap-3.5 border-t-[0.5px] border-[rgba(28,26,22,0.09)] bg-[#f4f0e7] px-2 pr-2 pl-3.5 text-[11px] whitespace-nowrap text-stone-500 tabular-nums [font-family:'JetBrains_Mono',ui-monospace,'SF_Mono',Menlo,monospace] @max-[760px]:h-auto @max-[760px]:min-h-[30px] @max-[760px]:flex-wrap @max-[760px]:gap-y-1.5 @max-[760px]:py-[5px]" aria-label="Editor status"><div class="inline-flex items-center gap-2"><span class="inline-flex items-center gap-1.5"><span></span> <!></span></div> <span class="h-2.5 w-px bg-[rgba(28,26,22,0.14)]"></span> <span> </span> <span> </span> <span class="flex-1"></span> <div class="inline-flex h-[18px] items-center rounded-[5px] border-[0.5px] border-stone-200 bg-stone-200/60 p-px" aria-label="Font family"></div> <label class="relative inline-flex h-[18px] items-center rounded-[5px] border-[0.5px] border-stone-200 bg-stone-200/60 pr-[18px] pl-2 text-[11px] font-medium text-stone-950 after:absolute after:top-1/2 after:right-[5px] after:-translate-y-1/2 after:text-[9px] after:leading-none after:text-stone-500 after:content-['v'] after:[font-family:-apple-system,BlinkMacSystemFont,'SF_Pro_Text',sans-serif]"><span> </span> <select class="absolute inset-0 border-0 opacity-0" aria-label="Font size"><option>Default</option><!></select></label></footer>`);function $5(t,e){jn(e,!1);const n=fe(),r=fe();let a=re(e,"text",8,""),i=re(e,"problemCount",8,0),o=re(e,"fontFamily",8,"sans"),s=re(e,"fontSize",8,"default"),l=re(e,"onFontFamilyChange",8,()=>{}),c=re(e,"onFontSizeChange",8,()=>{});const u="inline-flex h-4 min-w-7 items-center justify-center rounded px-2 text-xs leading-none font-medium text-stone-500";De(()=>te(a()),()=>{R(n,g5(a()))}),De(()=>te(a()),()=>{R(r,a().length)}),Ci(),Ti();var f=C5(),d=T(f),_=T(d),h=T(_),p=I(h,2);{var m=D=>{var P=ds("All clear");Q(D,P)},w=D=>{var P=ds();Te(()=>je(P,`${i()??""} problem${i()===1?"":"s"}`)),Q(D,P)};ze(p,D=>{i()===0?D(m):D(w,!1)})}var b=I(d,4),E=T(b),A=I(b,2),S=T(A),k=I(A,4);tn(k,5,()=>Js,en,(D,P)=>{var U=j5(),X=T(U);Te(ee=>{Be(U,1,(te(o()),g(P),H(()=>`${u} ${o()===g(P).value?"bg-white font-bold text-stone-950 shadow-sm shadow-stone-950/10":""}`))),Ed(U,(g(P),H(()=>`font-family: ${g(P).stack}`))),Bn(U,"title",(g(P),H(()=>g(P).label))),Bn(U,"aria-label",ee),Bn(U,"aria-pressed",(te(o()),g(P),H(()=>o()===g(P).value))),je(X,(g(P),H(()=>g(P).sample)))},[()=>(g(P),H(()=>`Use ${g(P).label.toLowerCase()} font`))]),Ne("click",U,()=>l()(g(P).value)),Q(D,U)});var M=I(k,2),O=T(M),L=T(O),N=I(O,2),$=T(N);$.value=$.__value="default";var B=I($);tn(B,1,()=>u5,en,(D,P)=>{var U=L5(),X=T(U),ee={};Te(()=>{je(X,`${g(P)??""}px`),ee!==(ee=g(P))&&(U.value=(U.__value=g(P))??"")}),Q(D,U)});var V;Ad(N),Te(()=>{Be(h,1,`h-1.5 w-1.5 rounded-full ${i()===0?"bg-emerald-600":"bg-amber-700"}`),je(E,`${g(n)??""} words`),je(S,`${g(r)??""} chars`),je(L,s()==="default"?"Default":`${s()}px`),V!==(V=s())&&(N.value=(N.__value=s())??"",il(N,s()))}),Ne("change",N,D=>{const P=D.currentTarget.value;c()(P==="default"?"default":Number(P))}),Q(t,f),Ln()}var T5=de('<button type="button" class="absolute top-3 right-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-md border-0 bg-transparent text-stone-600 shadow-none transition-colors duration-150 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500" aria-label="Show problems sidebar" title="Show problems sidebar"><svg viewBox="0 0 20 20" aria-hidden="true" class="h-[18px] w-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"><rect x="3.5" y="3" width="13" height="14" rx="3"></rect><path d="M12.5 3v14"></path></svg></button>'),R5=de('<div class="harper-editor @container flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[10px] border-[0.5px] border-[rgba(28,26,22,0.14)] bg-[#fbfaf6] text-stone-950 shadow-2xl shadow-stone-950/5"><div class="flex min-h-0 min-w-0 flex-1"><section class="relative min-w-0 flex-1 bg-[#fbfaf6]" aria-label="Document editor"><div class="h-full overflow-auto p-[34px_40px_56px] @max-[760px]:p-[28px_24px_42px]"><div class="mx-auto flex min-h-full max-w-[640px]"><div class="flex min-h-full w-full flex-1" spellcheck="false"></div></div></div> <!></section> <!></div> <!></div>');function O5(t,e){jn(e,!1);const n=fe(),r=fe();let a=re(e,"content",8,""),i=re(e,"linter",8),o=re(e,"onReady",8,()=>null),s=re(e,"defaultFontFamily",8,"sans"),l=re(e,"defaultFontSize",8,"default"),c=re(e,"onChange",8,()=>{}),u=re(e,"onAddToDictionary",8,null),f=re(e,"onSetRuleEnabled",8,null),d=re(e,"onDisplayChange",8,()=>{}),_=fe(),h=fe(0),p=fe(),m=fe([]),w=fe(null),b=fe(a()),E=fe(d5(s())),A=fe($f(l())),S=fe(a()),k=fe(!1),M=fe(!0),O="automated",L=null;const N=290;let $=new s5(async F=>{const K=await i().organizedLints(F),nt=await Promise.all(Object.entries(K).map(async([Cn,x])=>{const C=await Promise.all(x.map(q=>Fm(F,q,i())));return x.forEach(q=>{q.free()}),[Cn,C]})),Xe=Object.fromEntries(nt);return ge(),Xe},{addToUserDictionary:u()==null?void 0:async F=>{await u()?.(F),await $.requestLintUpdate(!0),ge()},setRuleEnabled:f()==null?void 0:async(F,K)=>{await f()?.(F,K),await $.requestLintUpdate(!0),ge()},ignoreLint:async F=>{try{await i().ignoreLintHash(BigInt(F)),console.log(`Ignored ${F}`),$.update(),ge()}catch(K){console.error("Failed to ignore lint",K)}}}),B=new ResizeObserver(F=>{for(let K of F)K.contentBoxSize[0].inlineSize<640?Pe("automated"):Se("automated")}),V=fe(null);async function D(){if(g(_)!=null){if(g(p)==null){let{default:F}=await Ld(async()=>{const{default:K}=await import("./quill-v-dZfs5K-DJFA0Zpi.js");return{default:K}},[],import.meta.url);R(p,new F(g(_),{formats:[],placeholder:"Start writing..."})),(g(p).container??g(p).root?.parentElement)?.classList.add("harper-editor-quill-container"),g(p).root?.classList.add("harper-editor-surface"),g(p).root?.setAttribute("data-enable-grammarly","false"),g(p).root?.setAttribute("spellcheck","false"),X(a(),!1),g(p).on("text-change",()=>{ne(!0),Me()})}for(let F of g(_).getElementsByTagName("p"))$.addTarget(F)}}function P(F){if(typeof window>"u")return;R(w,F.lint.context_hash);const K=F.range;if(K)try{const nt=K.getBoundingClientRect(),Xe=window.getSelection();Xe&&(Xe.removeAllRanges(),Xe.addRange(K.cloneRange()));const Cn=Math.max(10,window.innerHeight*.2),x=Math.max(0,window.scrollY+nt.top-Cn);window.scrollTo({top:x,behavior:"smooth"})}catch(nt){console.error("Failed to jump to lint",nt)}}function U(F){return F.endsWith(`
`)?F.slice(0,-1):F}function X(F,K){if(g(p)==null){R(b,F);return}g(p).setText(F,"silent"),g(p).history?.clear(),ne(K)}function ee(F){g(p)!=null&&(g(p).history?.cutoff(),g(p).setText(F,"user"),g(p).history?.cutoff())}function ne(F){if(g(p)==null)return;const K=U(g(p).getText());K!==g(b)&&(R(b,K),F&&c()(K))}function we(){const F=new Set;R(m,$.getLastIgnorableLintBoxes().filter(K=>F.has(K.lint)?!1:(F.add(K.lint),!0))),g(w)!=null&&!g(m).some(K=>K.lint.context_hash===g(w))&&R(w,null)}function ge(){requestAnimationFrame(()=>{requestAnimationFrame(we)}),L!=null&&clearTimeout(L),L=setTimeout(we,150)}function Me(){D(),$.update(),ge()}function he(){ne(!0),Me()}async function xe(){ne(!1);const F=g(b),K=i(),nt=await K.organizedLints(F,{dedup:!1}),Xe=Object.values(nt).flat();Xe.length!==0&&await K.ignoreLints(F,Xe)}async function Se(F="automated"){O==="user"&&F==="automated"||(await md(),O=F,R(M,!0))}function Pe(F="automated"){O==="user"&&F==="automated"||(O=F,g(M)!==!1&&R(M,!1))}De(()=>(te(d()),g(E),g(A)),()=>{d()({fontFamily:g(E),fontSize:g(A)})}),De(()=>g(E),()=>{R(n,_5(g(E)))}),De(()=>(g(n),g(A)),()=>{R(r,`--harper-editor-font-family: ${g(n)};`+(g(A)==="default"?"":` --harper-editor-font-size: ${g(A)}px;`))}),De(()=>(te(i()),g(p),g(k),te(o())),()=>{i()!=null&&g(p)!=null&&(g(k)||(R(k,!0),o()()))}),De(()=>g(V),()=>{g(V)!=null&&B.observe(g(V))}),De(()=>(g(h),te(i()),te(a()),g(_)),()=>{const F=o0(h),K=i();R(m,[]),(async()=>{try{await K.setup(),await K.lint(a())}catch(nt){console.error("Failed to initialize linter",nt)}F===g(h)&&g(_)!=null&&$.update()})()}),De(()=>g(_),()=>{g(_)!=null&&(new MutationObserver(D).observe(g(_),{childList:!0,subtree:!0}),D())}),De(()=>(g(p),te(a()),g(S),g(b)),()=>{g(p)!=null&&a()!==g(S)&&(R(S,a()),a()!==g(b)&&(X(a(),!1),Me()))}),Ci();var Y={replaceAll:ee};Ti();var Ce=R5(),Ye=T(Ce),tt=T(Ye),yt=T(tt),Ke=T(yt),Ht=T(Ke);Er(Ht,F=>R(_,F),()=>g(_));var qt=I(yt,2);{let F=dn(()=>!g(M));sm(qt,{get active(){return g(F)},delayMs:N,children:(K,nt)=>{var Xe=T5();In(1,Xe,()=>ei,()=>({duration:120})),Ne("click",Xe,()=>Se("user")),Q(K,Xe)},$$slots:{default:!0}})}var Gt=I(tt,2);{var zr=F=>{M5(F,{get lintBoxes(){return g(m)},get activeLintId(){return g(w)},focusLint:P,onActivate:K=>R(w,K==null?null:K.lint.context_hash),onApplied:he,onIgnored:he,onIgnoreAll:xe,onHideSidebar:()=>Pe("user")})};ze(Gt,F=>{g(M)&&F(zr)})}var Pr=I(Ye,2);return $5(Pr,{get text(){return g(b)},get problemCount(){return g(m),H(()=>g(m).length)},get fontFamily(){return g(E)},get fontSize(){return g(A)},onFontFamilyChange:F=>R(E,F),onFontSizeChange:F=>R(A,$f(F))}),Er(Ce,F=>R(V,F),()=>g(V)),Te(()=>Ed(Ce,g(r))),Q(t,Ce),U0(e,"replaceAll",ee),Ln(Y)}const N5=8,Tf=6,F5=.6,I5=.5;function pa(t){return t.toLowerCase().match(/[\p{L}\p{N}']+/gu)??[]}function Rf(t,e){const n=new Set(t),r=new Set(e);if(n.size===0&&r.size===0)return 1;let a=0;for(const i of n)r.has(i)&&a++;return a/(n.size+r.size-a)}function W5(t,e,n,r){const a=e.lastIndexOf(`
`,n-1)+1,i=e.indexOf(`
`,r),o=i===-1?e.length:i,s=e.slice(n,r);return{rule:t,text:s,context:[...pa(e.slice(a,n)).slice(-Tf),...pa(e.slice(r,o)).slice(0,Tf)]}}function Ys(t){return pa(t.text).length>N5}function z5(t,e){return t.rule!==e.rule?!1:Ys(t)||Ys(e)?Rf(pa(t.text),pa(e.text))>=F5:t.text===e.text&&Rf(t.context,e.context)>=I5}function P5(t){return Array.isArray(t)?t.filter(e=>e!=null&&typeof e.rule=="string"&&typeof e.text=="string"&&Array.isArray(e.context)&&e.context.every(n=>typeof n=="string")).slice(-500):[]}function D5(t,{dismissed:e,onDismiss:n,onHarperIgnore:r}){const a={organizedLints:t.organizedLints.bind(t),contextHash:t.contextHash.bind(t),ignoreLint:t.ignoreLint.bind(t),ignoreLints:t.ignoreLints.bind(t),ignoreLintHash:t.ignoreLintHash.bind(t)},i=new WeakMap,o=new Map,s=new WeakMap,l=c=>{if(!s.has(c)){let u=127;try{u=JSON.parse(c.to_json()).inner?.priority??127}catch{}s.set(c,u)}return s.get(c)};return t.organizedLints=async(c,u={})=>{const f=await a.organizedLints(c,{...u,dedup:!1}),d=e(),_=[];for(const[m,w]of Object.entries(f))for(const b of w){const E=b.span(),A=E.start,S=E.end;E.free();const k=W5(m,c,A,S);if(d.some(M=>z5(M,k))){b.free();continue}i.set(b,k),_.push({rule:m,lint:b,start:A,end:S,wide:Ys(k)})}const h=u.dedup===!1?_:B5(_,l);h.sort((m,w)=>Number(m.wide)-Number(w.wide));const p={};for(const m of h)(p[m.rule]??=[]).push(m.lint);return p},t.contextHash=async(c,u)=>{const f=await a.contextHash(c,u),d=i.get(u);return d!=null&&(o.set(String(f),d),o.size>5e3&&o.delete(o.keys().next().value)),f},t.ignoreLintHash=async c=>{const u=o.get(String(c));if(u!=null){n([u]);return}await a.ignoreLintHash(c),await r()},t.ignoreLint=async(c,u)=>{const f=i.get(u);if(f!=null){n([f]);return}await a.ignoreLint(c,u),await r()},t.ignoreLints=async(c,u)=>{const f=u.filter(_=>i.has(_)),d=u.filter(_=>!i.has(_));f.length>0&&n(f.map(_=>i.get(_))),d.length>0&&(await a.ignoreLints(c,d),await r())},t}function B5(t,e){const n=t.filter(i=>!i.wide).sort((i,o)=>e(i.lint)-e(o.lint)).sort((i,o)=>i.start-o.start||o.end-i.end),r=new Set;let a=0;for(const i of n)i.start<a?r.add(i):a=i.end;for(const i of r)i.lint.free();return t.filter(i=>!r.has(i))}const U5=""+new URL(""+new URL("harper_wasm_slim_bg-C6e6Uio8.wasm",import.meta.url).href,import.meta.url).href,V5=Bd.create(U5,"slim"),sp=[{value:fn.American,label:"American"},{value:fn.British,label:"British"},{value:fn.Canadian,label:"Canadian"},{value:fn.Australian,label:"Australian"},{value:fn.Indian,label:"Indian"}];function Si(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1 $2")}function H5(t){return sp.some(e=>e.value===t)?t:fn.American}async function q5(t,e){const n=await G5()?Gh:Uh,r=new n({binary:V5,dialect:t.dialect});return await r.setup(),await lp(r,t),D5(r,{dismissed:e.dismissed,onDismiss:e.onDismiss,onHarperIgnore:async()=>{try{e.onIgnoredChange(await r.exportIgnoredLints())}catch(a){console.warn("Could not save the ignore list.",a)}}})}function G5(){return new Promise(t=>{let e=null,n=null,r=!1;const a=i=>{r||(r=!0,n?.terminate(),e!=null&&URL.revokeObjectURL(e),t(i))};try{e=URL.createObjectURL(new Blob(["postMessage(1)"],{type:"text/javascript"})),n=new Worker(e,{type:"module"}),n.onmessage=()=>a(!0),n.onerror=()=>a(!1),setTimeout(()=>a(!1),3e3)}catch{a(!1)}})}async function lp(t,e){await t.setDialect(e.dialect),await t.clearWords(),e.words.length>0&&await t.importWords(e.words);const n=await t.getDefaultLintConfig();for(const r of e.disabledRules)r in n&&(n[r]=!1);if(await t.setLintConfig(n),await t.clearIgnoredLints(),e.ignored)try{await t.importIgnoredLints(e.ignored)}catch(r){console.warn("Saved ignore list could not be read; starting with an empty one.",r)}}var J5=de("<option> </option>"),Y5=de('<li class="svelte-1v8xn86"><span> </span> <button type="button" class="link svelte-1v8xn86">Bring back</button></li>'),K5=de('<li class="svelte-1v8xn86"><span> </span> <span class="actions svelte-1v8xn86"><button type="button" class="link svelte-1v8xn86">Always off</button> <button type="button" class="link svelte-1v8xn86">Turn back on</button></span></li>'),X5=de('<section><h3 class="svelte-1v8xn86">This draft</h3> <p class="svelte-1v8xn86">Kept until you press Clear.</p> <ul class="svelte-1v8xn86"><!> <!></ul></section>'),Z5=de('<li class="svelte-1v8xn86"><span> </span> <button type="button" class="link svelte-1v8xn86">Turn back on</button></li>'),Q5=de('<section><h3 class="svelte-1v8xn86">Rules turned off for good</h3> <ul class="svelte-1v8xn86"></ul></section>'),ex=de('<a href="./THIRD-PARTY-NOTICES.txt" target="_blank" rel="noreferrer" class="svelte-1v8xn86">Open-source licenses</a>'),tx=de(`<dialog aria-labelledby="settings-title" class="svelte-1v8xn86"><form method="dialog" class="svelte-1v8xn86"><header class="svelte-1v8xn86"><h2 id="settings-title" class="svelte-1v8xn86">Settings</h2> <button type="submit" class="done svelte-1v8xn86">Done</button></header> <section><label for="dialect" class="svelte-1v8xn86">English dialect</label> <p class="svelte-1v8xn86">Decides which spellings count as correct, such as “color” or “colour”.</p> <select id="dialect" class="svelte-1v8xn86"></select></section> <section><label for="words" class="svelte-1v8xn86">Personal dictionary <span class="count svelte-1v8xn86"> </span></label> <p class="svelte-1v8xn86">One word per line. Words you add from a spelling suggestion land here too.</p> <textarea id="words" rows="7" spellcheck="false" class="svelte-1v8xn86"></textarea></section> <!> <!> <footer class="svelte-1v8xn86"><p class="svelte-1v8xn86">Your draft, dictionary and settings are kept in this browser only. Nothing you type is sent
				anywhere.</p> <p class="svelte-1v8xn86">Grammar checking by <a href="https://github.com/Automattic/harper" target="_blank" rel="noreferrer" class="svelte-1v8xn86">Harper</a> <!></p></footer></form></dialog>`);function nx(t,e){jn(e,!0);let n,r=Fe(_n(e.settings.words.join(`
`)));const a=si(()=>i(g(r)));jd(()=>{n.showModal()});function i($){const B=[];for(const V of $.split(/\r?\n/)){const D=V.trim();D!==""&&!B.includes(D)&&B.push(D)}return B}async function o(){g(a).join(`
`)!==e.settings.words.join(`
`)&&await e.onChange({words:g(a)}),e.onClose()}function s($){$.target===n&&n.close()}var l=tx();l.__click=s;var c=T(l),u=I(T(c),2),f=I(T(u),4);f.__change=$=>e.onChange({dialect:Number($.currentTarget.value)}),tn(f,21,()=>sp,en,($,B)=>{var V=J5(),D=T(V),P={};Te(()=>{je(D,g(B).label),P!==(P=g(B).value)&&(V.value=(V.__value=g(B).value)??"")}),Q($,V)});var d;Ad(f);var _=I(u,2),h=T(_),p=I(T(h)),m=T(p),w=I(h,4),b=I(_,2);{var E=$=>{var B=X5(),V=I(T(B),4),D=T(V);{var P=X=>{var ee=Y5(),ne=T(ee),we=T(ne),ge=I(ne,2);ge.__click=function(...Me){e.onBringBackDismissed?.apply(this,Me)},Te(()=>je(we,`${e.dismissedCount??""} dismissed ${e.dismissedCount===1?"problem":"problems"}`)),Q(X,ee)};ze(D,X=>{e.dismissedCount>0&&X(P)})}var U=I(D,2);tn(U,17,()=>e.draftRules,en,(X,ee)=>{var ne=K5(),we=T(ne),ge=T(we),Me=I(we,2),he=T(Me);he.__click=()=>e.onTurnRuleOffForGood(g(ee));var xe=I(he,2);xe.__click=()=>e.onTurnRuleBackOn(g(ee)),Te(Se=>je(ge,`${Se??""} is off`),[()=>Si(g(ee))]),Q(X,ne)}),Q($,B)};ze(b,$=>{(e.dismissedCount>0||e.draftRules.length>0)&&$(E)})}var A=I(b,2);{var S=$=>{var B=Q5(),V=I(T(B),2);tn(V,21,()=>e.settings.disabledRules,en,(D,P)=>{var U=Z5(),X=T(U),ee=T(X),ne=I(X,2);ne.__click=()=>e.onTurnRuleBackOn(g(P)),Te(we=>je(ee,we),[()=>Si(g(P))]),Q(D,U)}),Q($,B)};ze(A,$=>{e.settings.disabledRules.length>0&&$(S)})}var k=I(A,2),M=I(T(k),2),O=I(T(M),2);O.nodeValue=" (engine 2.13.0, editor 2.13.0). ";var L=I(O);{var N=$=>{var B=ex();Q($,B)};ze(L,$=>{$(N,!1)})}Er(l,$=>n=$,()=>n),Te(()=>{d!==(d=e.settings.dialect)&&(f.value=(f.__value=e.settings.dialect)??"",il(f,e.settings.dialect)),je(m,`${g(a).length??""} ${g(a).length===1?"word":"words"}`)}),Ne("close",l,o),B0(w,()=>g(r),$=>R(r,$)),Q(t,l),Ln()}vd(["click","change"]);const Ks="scratchpad:";function dr(t,e){try{const n=localStorage.getItem(Ks+t);return n==null?e:JSON.parse(n)}catch{return e}}function Lt(t,e){try{return e==null?localStorage.removeItem(Ks+t):localStorage.setItem(Ks+t,JSON.stringify(e)),!0}catch{return!1}}function as(t){const e=dr(t,[]);return Array.isArray(e)?e.filter(n=>typeof n=="string"&&n!==""):[]}var rx=de('<div class="notice svelte-1n46o8q" role="alert"><strong>The grammar engine could not start.</strong> <p class="svelte-1n46o8q"> </p> <p class="svelte-1n46o8q">Your saved draft is untouched. Reloading the page usually fixes this.</p></div>'),ax=de('<p class="svelte-1n46o8q"><!></p>'),ix=de('<div class="notice svelte-1n46o8q" role="status"><span class="spinner svelte-1n46o8q" aria-hidden="true"></span> Loading the grammar engine… <!></div>'),ox=de('<button type="button" class="svelte-1n46o8q"> </button>'),sx=de('<div class="toast svelte-1n46o8q" role="status"><span> </span> <!></div>'),lx=de('<div class="app svelte-1n46o8q"><header class="bar svelte-1n46o8q"><h1 class="name svelte-1n46o8q"></h1> <span class="tagline svelte-1n46o8q">Checked on this device by Harper</span> <span class="spacer svelte-1n46o8q"></span> <button type="button" class="btn svelte-1n46o8q">Clear</button> <button type="button" class="btn primary svelte-1n46o8q" title="Copy everything as plain text">Copy text</button> <button type="button" class="btn icon svelte-1n46o8q" aria-label="Settings" title="Settings"><svg viewBox="0 0 20 20" aria-hidden="true" class="svelte-1n46o8q"><path d="M4 6h5M13 6h3M4 14h3M11 14h5"></path><circle cx="11" cy="6" r="2"></circle><circle cx="9" cy="14" r="2"></circle></svg></button></header> <main class="stage svelte-1n46o8q"><!></main> <!> <!></div>');function cx(t,e){jn(e,!0);const n=dr("draft",""),r=dr("display",{})??{},a=typeof n=="string"?n:"";let i=Fe({dialect:H5(dr("dialect",null)),words:as("words"),disabledRules:as("disabledRules")}),o=dr("ignored",null);typeof o!="string"&&(o=null);let s=Fe(P5(dr("dismissed",[]))),l=Fe(as("draftRules")),c=null,u=Fe(null),f=Fe(null),d=Fe(!1),_=Fe(null),h=Fe(_n(a)),p=Fe(!1),m=Fe(null),w=null,b=null;jd(()=>{const x=setTimeout(()=>{R(d,!0)},12e3),C=g(i),q=g(l);q5(P(),{dismissed:()=>g(s),onDismiss:U,onIgnoredChange:D}).then(pe=>{R(u,pe),(g(i)!==C||g(l)!==q)&&ge()},pe=>{console.error(pe),R(f,String(pe?.message??pe),!0)});const ue=()=>M(),_e=()=>{document.visibilityState==="hidden"&&M()};return window.addEventListener("pagehide",ue),document.addEventListener("visibilitychange",_e),document.addEventListener("copy",S),document.addEventListener("cut",S),window.addEventListener("keydown",A),E(),()=>{window.removeEventListener("pagehide",ue),document.removeEventListener("visibilitychange",_e),document.removeEventListener("copy",S),document.removeEventListener("cut",S),window.removeEventListener("keydown",A),clearTimeout(x)}});function E(){if(!("serviceWorker"in navigator))return;const x=navigator.serviceWorker.controller!=null;navigator.serviceWorker.addEventListener("controllerchange",()=>{x&&Y({message:"A newer version is ready",actions:[{label:"Reload",run:()=>{M(),location.reload()}}]})}),navigator.serviceWorker.register("./sw.js").then(C=>{C.update().catch(()=>{})},C=>console.warn("Offline copy could not be set up.",C))}function A(x){(x.ctrlKey||x.metaKey)&&!x.altKey&&x.key?.toLowerCase()==="s"&&(x.preventDefault(),M(),Y({message:"Saved on this device. Drafts save as you type."}))}function S(x){const C=document.querySelector(".harper-editor-surface");C!=null&&x.composedPath().includes(C)&&x.clipboardData?.clearData("text/html")}function k(x){R(h,x,!0),clearTimeout(w),w=setTimeout(M,300),c!=null&&x===c.text&&g(s).length===0&&g(l).length===0&&V()}function M(){clearTimeout(w),w=null,Lt("draft",g(h))}function O(x){g(_)?.replaceAll(x),M(),L()}function L(){const x=document.querySelector(".harper-editor-surface");if(!(x instanceof HTMLElement))return;x.focus();const C=document.createRange();C.selectNodeContents(x),C.collapse(!1);const q=window.getSelection();q?.removeAllRanges(),q?.addRange(C)}async function N(){if(g(h)==="")return;let x=!1;try{await navigator.clipboard.writeText(g(h)),x=!0}catch{x=$(g(h))}Y(x?{message:"Copied as plain text"}:{message:"The browser blocked copying. Select the text and press Ctrl+C instead."})}function $(x){const C=document.createElement("textarea");C.value=x,C.setAttribute("readonly",""),C.style.position="fixed",C.style.opacity="0",document.body.appendChild(C),C.select();let q=!1;try{q=document.execCommand("copy")}catch{q=!1}return C.remove(),q}function B(){g(h)!==""&&(c={text:g(h),dismissed:g(s),draftRules:g(l)},X([]),ee([]),O(""),Y({message:"Cleared. Ctrl+Z brings it back.",actions:[{label:"Undo",run:()=>O(c?.text??"")}]}))}function V(){const x=c;c=null,X(x.dismissed),ee(x.draftRules)}function D(x){o=x,Lt("ignored",x)}function P(){return{...g(i),disabledRules:[...new Set([...g(i).disabledRules,...g(l)])],ignored:o}}function U(x){X([...g(s),...x])}function X(x){R(s,x.slice(-500)),Lt("dismissed",g(s)),Me()}function ee(x){return R(l,x),Lt("draftRules",x),ge()}function ne(x){return R(i,{...g(i),...x}),Lt("dialect",g(i).dialect),Lt("words",g(i).words),Lt("disabledRules",g(i).disabledRules),ge()}let we=Promise.resolve();function ge(){return we=we.then(async()=>{g(u)!=null&&(await lp(g(u),P()),Me())}).catch(x=>console.error("Could not apply the settings to Harper.",x)),we}function Me(){window.dispatchEvent(new Event("resize"))}async function he(x){const C=[];for(const q of x){const ue=q.trim();ue!==""&&!g(i).words.includes(ue)&&!C.includes(ue)&&C.push(ue)}C.length!==0&&(await ne({words:[...g(i).words,...C]}),Y({message:`Added “${C.join("”, “")}” to your dictionary`,actions:[{label:"Undo",run:()=>ne({words:g(i).words.filter(q=>!C.includes(q))})}]}))}async function xe(x,C){if(C){await Pe(x);return}!g(l).includes(x)&&!g(i).disabledRules.includes(x)&&await ee([...g(l),x]),Y({message:`Turned off “${Si(x)}” for this draft`,actions:[{label:"Always",run:()=>Se(x)},{label:"Undo",run:()=>Pe(x)}]})}async function Se(x){R(l,g(l).filter(C=>C!==x)),Lt("draftRules",g(l)),g(i).disabledRules.includes(x)?await ge():await ne({disabledRules:[...g(i).disabledRules,x]}),Y({message:`“${Si(x)}” is off for good. Settings can turn it back on.`})}async function Pe(x){R(l,g(l).filter(C=>C!==x)),Lt("draftRules",g(l)),await ne({disabledRules:g(i).disabledRules.filter(C=>C!==x)})}function Y(x){clearTimeout(b),R(m,x),b=setTimeout(()=>{R(m,null)},x.actions?.length?8e3:2500)}async function Ce(x){clearTimeout(b),R(m,null),await x.run()}var Ye=lx(),tt=T(Ye),yt=T(tt);yt.textContent="Scratchpad";var Ke=I(yt,6);Ke.__click=B;var Ht=I(Ke,2);Ht.__click=N;var qt=I(Ht,2);qt.__click=()=>R(p,!0);var Gt=I(tt,2),zr=T(Gt);{var Pr=x=>{{let C=si(()=>r.fontFamily??"sans"),q=si(()=>r.fontSize??"default");Er(O5(x,{get content(){return a},get linter(){return g(u)},get defaultFontFamily(){return g(C)},get defaultFontSize(){return g(q)},onChange:k,onReady:L,onAddToDictionary:he,onSetRuleEnabled:xe,onDisplayChange:ue=>Lt("display",ue)}),ue=>R(_,ue),()=>g(_))}},F=x=>{var C=di(),q=sa(C);{var ue=pe=>{var ke=rx(),We=I(T(ke),2),st=T(We);Te(()=>je(st,g(f))),Q(pe,ke)},_e=pe=>{var ke=ix(),We=I(T(ke),2);{var st=$n=>{var Dr=ax(),Gi=T(Dr);{var Ji=Br=>{var cp=ds(`The first visit downloads the engine, about 16 MB. If this does not finish, check the
							connection and reload. Your saved draft is safe.`);Q(Br,cp)};ze(Gi,Br=>{Br(Ji,!1)})}Q($n,Dr)};ze(We,$n=>{g(d)&&$n(st)})}Q(pe,ke)};ze(q,pe=>{g(f)?pe(ue):pe(_e,!1)},!0)}Q(x,C)};ze(zr,x=>{g(u)?x(Pr):x(F,!1)})}var K=I(Gt,2);{var nt=x=>{var C=sx(),q=T(C),ue=T(q),_e=I(q,2);tn(_e,17,()=>g(m).actions??[],en,(pe,ke)=>{var We=ox();We.__click=()=>Ce(g(ke));var st=T(We);Te(()=>je(st,g(ke).label)),Q(pe,We)}),Te(()=>je(ue,g(m).message)),Q(x,C)};ze(K,x=>{g(m)&&x(nt)})}var Xe=I(K,2);{var Cn=x=>{nx(x,{get settings(){return g(i)},get draftRules(){return g(l)},get dismissedCount(){return g(s).length},onChange:ne,onTurnRuleBackOn:Pe,onTurnRuleOffForGood:Se,onBringBackDismissed:()=>X([]),onClose:()=>{R(p,!1),L()}})};ze(Xe,x=>{g(p)&&x(Cn)})}Te(()=>{Ke.disabled=g(h)==="",Ht.disabled=g(h)===""}),Q(t,Ye),Ln()}vd(["click"]);S0(cx,{target:document.getElementById("app")});
