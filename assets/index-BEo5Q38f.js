const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-l2pNu_xq.js","assets/HomeView-DWLkDVik.css","assets/StudentCheckInForm-DdkE9LP4.js","assets/StudentCheckInForm-HY5HWP3M.css","assets/DashboardView-Bu1mRKzl.js","assets/courseService-Cb8NWGPA.js","assets/DashboardView-C6uiVgb0.css","assets/CreationView-CnniuG2V.js","assets/CreationView-Dtg24h8L.css","assets/SnapshotView-BtNRb9uN.js","assets/SnapshotView-B1E9fuCB.css","assets/AttendanceHistoryView-BWk4PTYY.js","assets/AttendanceHistoryView-CM73l19k.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},Is=[],gn=()=>{},mm=()=>!1,Ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fu=t=>t.startsWith("onUpdate:"),nt=Object.assign,du=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uT=Object.prototype.hasOwnProperty,Re=(t,e)=>uT.call(t,e),ce=Array.isArray,vs=t=>xa(t)==="[object Map]",gm=t=>xa(t)==="[object Set]",ue=t=>typeof t=="function",je=t=>typeof t=="string",Rr=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",_m=t=>(Ve(t)||ue(t))&&ue(t.then)&&ue(t.catch),ym=Object.prototype.toString,xa=t=>ym.call(t),hT=t=>xa(t).slice(8,-1),Em=t=>xa(t)==="[object Object]",pu=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ri=hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},fT=/-\w/g,Qt=La(t=>t.replace(fT,e=>e.slice(1).toUpperCase())),dT=/\B([A-Z])/g,ts=La(t=>t.replace(dT,"-$1").toLowerCase()),Fa=La(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bc=La(t=>t?`on${Fa(t)}`:""),hr=(t,e)=>!Object.is(t,e),jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Tm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},El=t=>{const e=parseFloat(t);return isNaN(e)?t:e},pT=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let bf;const Ua=()=>bf||(bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mu(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?yT(r):mu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||Ve(t))return t}const mT=/;(?![^(]*\))/g,gT=/:([^]+)/,_T=/\/\*[^]*?\*\//g;function yT(t){const e={};return t.replace(_T,"").split(mT).forEach(n=>{if(n){const r=n.split(gT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gu(t){let e="";if(je(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=gu(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ET="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",TT=hu(ET);function Im(t){return!!t||t===""}const vm=t=>!!(t&&t.__v_isRef===!0),Gr=t=>je(t)?t:t==null?"":ce(t)||Ve(t)&&(t.toString===ym||!ue(t.toString))?vm(t)?Gr(t.value):JSON.stringify(t,wm,2):String(t),wm=(t,e)=>vm(e)?wm(t,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[jc(r,i)+" =>"]=s,n),{})}:gm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jc(n))}:Rr(e)?jc(e):Ve(e)&&!ce(e)&&!Em(e)?String(e):e,jc=(t,e="")=>{var n;return Rr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class IT{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){this._on>0&&--this._on===0&&(bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function vT(){return bt}let De;const qc=new WeakSet;class Am{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&bt.active&&bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qc.has(this)&&(qc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sf(this),Sm(this);const e=De,n=en;De=this,en=!0;try{return this.fn()}finally{Cm(this),De=e,en=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Eu(e);this.deps=this.depsTail=void 0,Sf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tl(this)&&this.run()}get dirty(){return Tl(this)}}let Rm=0,bi,Si;function bm(t,e=!1){if(t.flags|=8,e){t.next=Si,Si=t;return}t.next=bi,bi=t}function _u(){Rm++}function yu(){if(--Rm>0)return;if(Si){let e=Si;for(Si=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;bi;){let e=bi;for(bi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Sm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Eu(r),wT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Tl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Pm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Pm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ji)||(t.globalVersion=ji,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Tl(t))))return;t.flags|=2;const e=t.dep,n=De,r=en;De=t,en=!0;try{Sm(t);const s=t.fn(t._value);(e.version===0||hr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,en=r,Cm(t),t.flags&=-3}}function Eu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Eu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function wT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let en=!0;const Nm=[];function Fn(){Nm.push(en),en=!1}function Un(){const t=Nm.pop();en=t===void 0?!0:t}function Sf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let ji=0;class AT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!De||!en||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new AT(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,Dm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,ji++,this.notify(e)}notify(e){_u();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{yu()}}}function Dm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Dm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Il=new WeakMap,Wr=Symbol(""),vl=Symbol(""),qi=Symbol("");function pt(t,e,n){if(en&&De){let r=Il.get(t);r||Il.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Tu),s.map=r,s.key=n),s.track()}}function Dn(t,e,n,r,s,i){const o=Il.get(t);if(!o){ji++;return}const c=l=>{l&&l.trigger()};if(_u(),e==="clear")o.forEach(c);else{const l=ce(t),u=l&&pu(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===qi||!Rr(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(qi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Wr)),vs(t)&&c(o.get(vl)));break;case"delete":l||(c(o.get(Wr)),vs(t)&&c(o.get(vl)));break;case"set":vs(t)&&c(o.get(Wr));break}}yu()}function hs(t){const e=ve(t);return e===t?e:(pt(e,"iterate",qi),Wt(t)?e:e.map(ot))}function Ba(t){return pt(t=ve(t),"iterate",qi),t}const RT={__proto__:null,[Symbol.iterator](){return $c(this,Symbol.iterator,ot)},concat(...t){return hs(this).concat(...t.map(e=>ce(e)?hs(e):e))},entries(){return $c(this,"entries",t=>(t[1]=ot(t[1]),t))},every(t,e){return bn(this,"every",t,e,void 0,arguments)},filter(t,e){return bn(this,"filter",t,e,n=>n.map(ot),arguments)},find(t,e){return bn(this,"find",t,e,ot,arguments)},findIndex(t,e){return bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bn(this,"findLast",t,e,ot,arguments)},findLastIndex(t,e){return bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hc(this,"includes",t)},indexOf(...t){return Hc(this,"indexOf",t)},join(t){return hs(this).join(t)},lastIndexOf(...t){return Hc(this,"lastIndexOf",t)},map(t,e){return bn(this,"map",t,e,void 0,arguments)},pop(){return di(this,"pop")},push(...t){return di(this,"push",t)},reduce(t,...e){return Cf(this,"reduce",t,e)},reduceRight(t,...e){return Cf(this,"reduceRight",t,e)},shift(){return di(this,"shift")},some(t,e){return bn(this,"some",t,e,void 0,arguments)},splice(...t){return di(this,"splice",t)},toReversed(){return hs(this).toReversed()},toSorted(t){return hs(this).toSorted(t)},toSpliced(...t){return hs(this).toSpliced(...t)},unshift(...t){return di(this,"unshift",t)},values(){return $c(this,"values",ot)}};function $c(t,e,n){const r=Ba(t),s=r[e]();return r!==t&&!Wt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const bT=Array.prototype;function bn(t,e,n,r,s,i){const o=Ba(t),c=o!==t&&!Wt(t),l=o[e];if(l!==bT[e]){const p=l.apply(t,i);return c?ot(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,ot(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Cf(t,e,n,r){const s=Ba(t);let i=n;return s!==t&&(Wt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ot(c),l,t)}),s[e](i,...r)}function Hc(t,e,n){const r=ve(t);pt(r,"iterate",qi);const s=r[e](...n);return(s===-1||s===!1)&&wu(n[0])?(n[0]=ve(n[0]),r[e](...n)):s}function di(t,e,n=[]){Fn(),_u();const r=ve(t)[e].apply(t,n);return yu(),Un(),r}const ST=hu("__proto__,__v_isRef,__isVue"),km=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rr));function CT(t){Rr(t)||(t=String(t));const e=ve(this);return pt(e,"has",t),e.hasOwnProperty(t)}class Vm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?FT:Lm:i?xm:Mm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let l;if(o&&(l=RT[n]))return l;if(n==="hasOwnProperty")return CT}const c=Reflect.get(e,n,_t(e)?e:r);if((Rr(n)?km.has(n):ST(n))||(s||pt(e,"get",n),i))return c;if(_t(c)){const l=o&&pu(n)?c:c.value;return s&&Ve(l)?Al(l):l}return Ve(c)?s?Al(c):ja(c):c}}class Om extends Vm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=_r(i);if(!Wt(r)&&!_r(r)&&(i=ve(i),r=ve(r)),!ce(e)&&_t(i)&&!_t(r))return l||(i.value=r),!0}const o=ce(e)&&pu(n)?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,_t(e)?e:s);return e===ve(s)&&(o?hr(r,i)&&Dn(e,"set",n,r):Dn(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Rr(n)||!km.has(n))&&pt(e,"has",n),r}ownKeys(e){return pt(e,"iterate",ce(e)?"length":Wr),Reflect.ownKeys(e)}}class PT extends Vm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const NT=new Om,DT=new PT,kT=new Om(!0);const wl=t=>t,No=t=>Reflect.getPrototypeOf(t);function VT(t,e,n){return function(...r){const s=this.__v_raw,i=ve(s),o=vs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?wl:e?sa:ot;return!e&&pt(i,"iterate",l?vl:Wr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Do(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function OT(t,e){const n={get(s){const i=this.__v_raw,o=ve(i),c=ve(s);t||(hr(s,c)&&pt(o,"get",s),pt(o,"get",c));const{has:l}=No(o),u=e?wl:t?sa:ot;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pt(ve(s),"iterate",Wr),s.size},has(s){const i=this.__v_raw,o=ve(i),c=ve(s);return t||(hr(s,c)&&pt(o,"has",s),pt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=ve(c),u=e?wl:t?sa:ot;return!t&&pt(l,"iterate",Wr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return nt(n,t?{add:Do("add"),set:Do("set"),delete:Do("delete"),clear:Do("clear")}:{add(s){!e&&!Wt(s)&&!_r(s)&&(s=ve(s));const i=ve(this);return No(i).has.call(i,s)||(i.add(s),Dn(i,"add",s,s)),this},set(s,i){!e&&!Wt(i)&&!_r(i)&&(i=ve(i));const o=ve(this),{has:c,get:l}=No(o);let u=c.call(o,s);u||(s=ve(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?hr(i,f)&&Dn(o,"set",s,i):Dn(o,"add",s,i),this},delete(s){const i=ve(this),{has:o,get:c}=No(i);let l=o.call(i,s);l||(s=ve(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Dn(i,"delete",s,void 0),u},clear(){const s=ve(this),i=s.size!==0,o=s.clear();return i&&Dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=VT(s,t,e)}),n}function Iu(t,e){const n=OT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const MT={get:Iu(!1,!1)},xT={get:Iu(!1,!0)},LT={get:Iu(!0,!1)};const Mm=new WeakMap,xm=new WeakMap,Lm=new WeakMap,FT=new WeakMap;function UT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function BT(t){return t.__v_skip||!Object.isExtensible(t)?0:UT(hT(t))}function ja(t){return _r(t)?t:vu(t,!1,NT,MT,Mm)}function Fm(t){return vu(t,!1,kT,xT,xm)}function Al(t){return vu(t,!0,DT,LT,Lm)}function vu(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=BT(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function ws(t){return _r(t)?ws(t.__v_raw):!!(t&&t.__v_isReactive)}function _r(t){return!!(t&&t.__v_isReadonly)}function Wt(t){return!!(t&&t.__v_isShallow)}function wu(t){return t?!!t.__v_raw:!1}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function jT(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Tm(t,"__v_skip",!0),t}const ot=t=>Ve(t)?ja(t):t,sa=t=>Ve(t)?Al(t):t;function _t(t){return t?t.__v_isRef===!0:!1}function Gt(t){return Um(t,!1)}function qT(t){return Um(t,!0)}function Um(t,e){return _t(t)?t:new $T(t,e)}class $T{constructor(e,n){this.dep=new Tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ve(e),this._value=n?e:ot(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Wt(e)||_r(e);e=r?e:ve(e),hr(e,n)&&(this._rawValue=e,this._value=r?e:ot(e),this.dep.trigger())}}function We(t){return _t(t)?t.value:t}const HT={get:(t,e,n)=>e==="__v_raw"?t:We(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return _t(s)&&!_t(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bm(t){return ws(t)?t:new Proxy(t,HT)}class GT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ji-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return bm(this,!0),!0}get value(){const e=this.dep.track();return Pm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function WT(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new GT(r,s,n)}const ko={},ia=new WeakMap;let Ur;function zT(t,e=!1,n=Ur){if(n){let r=ia.get(n);r||ia.set(n,r=[]),r.push(t)}}function KT(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=G=>s?G:Wt(G)||s===!1||s===0?kn(G,1):kn(G);let f,p,m,_,S=!1,N=!1;if(_t(t)?(p=()=>t.value,S=Wt(t)):ws(t)?(p=()=>u(t),S=!0):ce(t)?(N=!0,S=t.some(G=>ws(G)||Wt(G)),p=()=>t.map(G=>{if(_t(G))return G.value;if(ws(G))return u(G);if(ue(G))return l?l(G,2):G()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Fn();try{m()}finally{Un()}}const G=Ur;Ur=f;try{return l?l(t,3,[_]):t(_)}finally{Ur=G}}:p=gn,e&&s){const G=p,te=s===!0?1/0:s;p=()=>kn(G(),te)}const k=vT(),U=()=>{f.stop(),k&&k.active&&du(k.effects,f)};if(i&&e){const G=e;e=(...te)=>{G(...te),U()}}let B=N?new Array(t.length).fill(ko):ko;const H=G=>{if(!(!(f.flags&1)||!f.dirty&&!G))if(e){const te=f.run();if(s||S||(N?te.some((ne,R)=>hr(ne,B[R])):hr(te,B))){m&&m();const ne=Ur;Ur=f;try{const R=[te,B===ko?void 0:N&&B[0]===ko?[]:B,_];B=te,l?l(e,3,R):e(...R)}finally{Ur=ne}}}else f.run()};return c&&c(H),f=new Am(p),f.scheduler=o?()=>o(H,!1):H,_=G=>zT(G,!1,f),m=f.onStop=()=>{const G=ia.get(f);if(G){if(l)l(G,4);else for(const te of G)te();ia.delete(f)}},e?r?H(!0):B=f.run():o?o(H.bind(null,!0),!0):f.run(),U.pause=f.pause.bind(f),U.resume=f.resume.bind(f),U.stop=U,U}function kn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,_t(t))kn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(gm(t)||vs(t))t.forEach(r=>{kn(r,e,n)});else if(Em(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function so(t,e,n,r){try{return r?t(...r):t()}catch(s){qa(s,e,n)}}function nn(t,e,n,r){if(ue(t)){const s=so(t,e,n,r);return s&&_m(s)&&s.catch(i=>{qa(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(nn(t[i],e,n,r));return s}}function qa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Fn(),so(i,null,10,[t,l,u]),Un();return}}QT(t,n,s,r,o)}function QT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let dn=-1;const As=[];let rr=null,ds=0;const jm=Promise.resolve();let oa=null;function qm(t){const e=oa||jm;return t?e.then(this?t.bind(this):t):e}function YT(t){let e=dn+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=$i(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Au(t){if(!(t.flags&1)){const e=$i(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=$i(n)?wt.push(t):wt.splice(YT(e),0,t),t.flags|=1,$m()}}function $m(){oa||(oa=jm.then(Gm))}function JT(t){ce(t)?As.push(...t):rr&&t.id===-1?rr.splice(ds+1,0,t):t.flags&1||(As.push(t),t.flags|=1),$m()}function Pf(t,e,n=dn+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Hm(t){if(As.length){const e=[...new Set(As)].sort((n,r)=>$i(n)-$i(r));if(As.length=0,rr){rr.push(...e);return}for(rr=e,ds=0;ds<rr.length;ds++){const n=rr[ds];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}rr=null,ds=0}}const $i=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Gm(t){try{for(dn=0;dn<wt.length;dn++){const e=wt[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),so(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<wt.length;dn++){const e=wt[dn];e&&(e.flags&=-2)}dn=-1,wt.length=0,Hm(),oa=null,(wt.length||As.length)&&Gm()}}let xt=null,Wm=null;function aa(t){const e=xt;return xt=t,Wm=t&&t.type.__scopeId||null,e}function gi(t,e=xt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ua(-1);const i=aa(e);let o;try{o=t(...s)}finally{aa(i),r._d&&ua(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Gc(t,e){if(xt===null)return t;const n=za(xt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Mr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Fn(),nn(l,n,8,[t.el,c,t,e]),Un())}}const zm=Symbol("_vte"),Km=t=>t.__isTeleport,Ci=t=>t&&(t.disabled||t.disabled===""),Nf=t=>t&&(t.defer||t.defer===""),Df=t=>typeof SVGElement<"u"&&t instanceof SVGElement,kf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Rl=(t,e)=>{const n=t&&t.to;return je(n)?e?e(n):null:n},Qm={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:f,pc:p,pbc:m,o:{insert:_,querySelector:S,createText:N,createComment:k}}=u,U=Ci(e.props);let{shapeFlag:B,children:H,dynamicChildren:G}=e;if(t==null){const te=e.el=N(""),ne=e.anchor=N("");_(te,n,r),_(ne,n,r);const R=(y,b)=>{B&16&&f(H,y,b,s,i,o,c,l)},E=()=>{const y=e.target=Rl(e.props,S),b=Ym(y,e,N,_);y&&(o!=="svg"&&Df(y)?o="svg":o!=="mathml"&&kf(y)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),U||(R(y,b),qo(e,!1)))};U&&(R(n,ne),qo(e,!0)),Nf(e.props)?(e.el.__isMounted=!1,It(()=>{E(),delete e.el.__isMounted},i)):E()}else{if(Nf(e.props)&&t.el.__isMounted===!1){It(()=>{Qm.process(t,e,n,r,s,i,o,c,l,u)},i);return}e.el=t.el,e.targetStart=t.targetStart;const te=e.anchor=t.anchor,ne=e.target=t.target,R=e.targetAnchor=t.targetAnchor,E=Ci(t.props),y=E?n:ne,b=E?te:R;if(o==="svg"||Df(ne)?o="svg":(o==="mathml"||kf(ne))&&(o="mathml"),G?(m(t.dynamicChildren,G,y,s,i,o,c),Pu(t,e,!0)):l||p(t,e,y,b,s,i,o,c,!1),U)E?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Vo(e,n,te,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const A=e.target=Rl(e.props,S);A&&Vo(e,A,null,u,0)}else E&&Vo(e,ne,R,u,1);qo(e,U)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:f,target:p,props:m}=t;if(p&&(s(u),s(f)),i&&s(l),o&16){const _=i||!Ci(m);for(let S=0;S<c.length;S++){const N=c[S];r(N,e,n,_,!!N.dynamicChildren)}}},move:Vo,hydrate:XT};function Vo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:f}=t,p=i===2;if(p&&r(o,e,n),(!p||Ci(f))&&l&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);p&&r(c,e,n)}function XT(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:f}},p){function m(N,k,U,B){k.anchor=p(o(N),k,c(N),n,r,s,i),k.targetStart=U,k.targetAnchor=B}const _=e.target=Rl(e.props,l),S=Ci(e.props);if(_){const N=_._lpa||_.firstChild;if(e.shapeFlag&16)if(S)m(t,e,N,N&&o(N));else{e.anchor=o(t);let k=N;for(;k;){if(k&&k.nodeType===8){if(k.data==="teleport start anchor")e.targetStart=k;else if(k.data==="teleport anchor"){e.targetAnchor=k,_._lpa=e.targetAnchor&&o(e.targetAnchor);break}}k=o(k)}e.targetAnchor||Ym(_,e,f,u),p(N&&o(N),e,_,n,r,s,i)}qo(e,S)}else S&&e.shapeFlag&16&&m(t,e,t,o(t));return e.anchor&&o(e.anchor)}const ZT=Qm;function qo(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Ym(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[zm]=i,t&&(r(s,t),r(i,t)),i}const Nn=Symbol("_leaveCb"),Oo=Symbol("_enterCb");function eI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ru(()=>{t.isMounted=!0}),sg(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],Jm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},Xm=t=>{const e=t.subTree;return e.component?Xm(e.component):e},tI={name:"BaseTransition",props:Jm,setup(t,{slots:e}){const n=wg(),r=eI();return()=>{const s=e.default&&tg(e.default(),!0);if(!s||!s.length)return;const i=Zm(s),o=ve(t),{mode:c}=o;if(r.isLeaving)return Wc(i);const l=Vf(i);if(!l)return Wc(i);let u=bl(l,o,r,n,p=>u=p);l.type!==At&&Hi(l,u);let f=n.subTree&&Vf(n.subTree);if(f&&f.type!==At&&!jr(f,l)&&Xm(n).type!==At){let p=bl(f,o,r,n);if(Hi(f,p),c==="out-in"&&l.type!==At)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Wc(i);c==="in-out"&&l.type!==At?p.delayLeave=(m,_,S)=>{const N=eg(r,f);N[String(f.key)]=f,m[Nn]=()=>{_(),m[Nn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Zm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==At){e=n;break}}return e}const nI=tI;function eg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:S,onLeaveCancelled:N,onBeforeAppear:k,onAppear:U,onAfterAppear:B,onAppearCancelled:H}=e,G=String(t.key),te=eg(n,t),ne=(y,b)=>{y&&nn(y,r,9,b)},R=(y,b)=>{const A=b[1];ne(y,b),ce(y)?y.every(v=>v.length<=1)&&A():y.length<=1&&A()},E={mode:o,persisted:c,beforeEnter(y){let b=l;if(!n.isMounted)if(i)b=k||l;else return;y[Nn]&&y[Nn](!0);const A=te[G];A&&jr(t,A)&&A.el[Nn]&&A.el[Nn](),ne(b,[y])},enter(y){let b=u,A=f,v=p;if(!n.isMounted)if(i)b=U||u,A=B||f,v=H||p;else return;let T=!1;const Te=y[Oo]=$e=>{T||(T=!0,$e?ne(v,[y]):ne(A,[y]),E.delayedLeave&&E.delayedLeave(),y[Oo]=void 0)};b?R(b,[y,Te]):Te()},leave(y,b){const A=String(t.key);if(y[Oo]&&y[Oo](!0),n.isUnmounting)return b();ne(m,[y]);let v=!1;const T=y[Nn]=Te=>{v||(v=!0,b(),Te?ne(N,[y]):ne(S,[y]),y[Nn]=void 0,te[A]===t&&delete te[A])};te[A]=t,_?R(_,[y,T]):T()},clone(y){const b=bl(y,e,n,r,s);return s&&s(b),b}};return E}function Wc(t){if($a(t))return t=yr(t),t.children=null,t}function Vf(t){if(!$a(t))return Km(t.type)&&t.children?Zm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function Hi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Hi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===qt?(o.patchFlag&128&&s++,r=r.concat(tg(o.children,e,c))):(e||o.type!==At)&&r.push(c!=null?yr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function qs(t,e){return ue(t)?nt({name:t.name},e,{setup:t}):t}function ng(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ca=new WeakMap;function Pi(t,e,n,r,s=!1){if(ce(t)){t.forEach((S,N)=>Pi(S,e&&(ce(e)?e[N]:e),n,r,s));return}if(Ni(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Pi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?za(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ne?c.refs={}:c.refs,p=c.setupState,m=ve(p),_=p===Ne?mm:S=>Re(m,S);if(u!=null&&u!==l){if(Of(e),je(u))f[u]=null,_(u)&&(p[u]=null);else if(_t(u)){u.value=null;const S=e;S.k&&(f[S.k]=null)}}if(ue(l))so(l,c,12,[o,f]);else{const S=je(l),N=_t(l);if(S||N){const k=()=>{if(t.f){const U=S?_(l)?p[l]:f[l]:l.value;if(s)ce(U)&&du(U,i);else if(ce(U))U.includes(i)||U.push(i);else if(S)f[l]=[i],_(l)&&(p[l]=f[l]);else{const B=[i];l.value=B,t.k&&(f[t.k]=B)}}else S?(f[l]=o,_(l)&&(p[l]=o)):N&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const U=()=>{k(),ca.delete(t)};U.id=-1,ca.set(t,U),It(U,n)}else Of(t),k()}}}function Of(t){const e=ca.get(t);e&&(e.flags|=8,ca.delete(t))}Ua().requestIdleCallback;Ua().cancelIdleCallback;const Ni=t=>!!t.type.__asyncLoader,$a=t=>t.type.__isKeepAlive;function rI(t,e){rg(t,"a",e)}function sI(t,e){rg(t,"da",e)}function rg(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ha(e,r,n),n){let s=n.parent;for(;s&&s.parent;)$a(s.parent.vnode)&&iI(r,e,n,s),s=s.parent}}function iI(t,e,n,r){const s=Ha(e,t,r,!0);bu(()=>{du(r[e],s)},n)}function Ha(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Fn();const c=io(n),l=nn(e,n,t,o);return c(),Un(),l});return r?s.unshift(i):s.push(i),i}}const Wn=t=>(e,n=gt)=>{(!Wi||t==="sp")&&Ha(t,(...r)=>e(...r),n)},oI=Wn("bm"),Ru=Wn("m"),aI=Wn("bu"),cI=Wn("u"),sg=Wn("bum"),bu=Wn("um"),lI=Wn("sp"),uI=Wn("rtg"),hI=Wn("rtc");function fI(t,e=gt){Ha("ec",t,e)}const dI="components";function ZN(t,e){return mI(dI,t,!0,e)||t}const pI=Symbol.for("v-ndc");function mI(t,e,n=!0,r=!1){const s=xt||gt;if(s){const i=s.type;{const c=nv(i,!1);if(c&&(c===e||c===Qt(e)||c===Fa(Qt(e))))return i}const o=Mf(s[t]||i[t],e)||Mf(s.appContext[t],e);return!o&&r?i:o}}function Mf(t,e){return t&&(t[e]||t[Qt(e)]||t[Fa(Qt(e))])}function eD(t,e,n,r){let s;const i=n,o=ce(t);if(o||je(t)){const c=o&&ws(t);let l=!1,u=!1;c&&(l=!Wt(t),u=_r(t),t=Ba(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?sa(ot(t[f])):ot(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Sl=t=>t?Ag(t)?za(t):Sl(t.parent):null,Di=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>og(t),$forceUpdate:t=>t.f||(t.f=()=>{Au(t.update)}),$nextTick:t=>t.n||(t.n=qm.bind(t.proxy)),$watch:t=>xI.bind(t)}),zc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Re(t,e),gI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(zc(r,e))return o[e]=1,r[e];if(s!==Ne&&Re(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Re(u,e))return o[e]=3,i[e];if(n!==Ne&&Re(n,e))return o[e]=4,n[e];Cl&&(o[e]=0)}}const f=Di[e];let p,m;if(f)return e==="$attrs"&&pt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Re(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return zc(s,e)?(s[e]=n,!0):r!==Ne&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Re(t,c)||zc(e,c)||(l=i[0])&&Re(l,c)||Re(r,c)||Re(Di,c)||Re(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xf(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cl=!0;function _I(t){const e=og(t),n=t.proxy,r=t.ctx;Cl=!1,e.beforeCreate&&Lf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:S,activated:N,deactivated:k,beforeDestroy:U,beforeUnmount:B,destroyed:H,unmounted:G,render:te,renderTracked:ne,renderTriggered:R,errorCaptured:E,serverPrefetch:y,expose:b,inheritAttrs:A,components:v,directives:T,filters:Te}=e;if(u&&yI(u,r,null),o)for(const we in o){const ye=o[we];ue(ye)&&(r[we]=ye.bind(n))}if(s){const we=s.call(n,n);Ve(we)&&(t.data=ja(we))}if(Cl=!0,i)for(const we in i){const ye=i[we],Rt=ue(ye)?ye.bind(n,n):ue(ye.get)?ye.get.bind(n,n):gn,ln=!ue(ye)&&ue(ye.set)?ye.set.bind(n):gn,Dt=Mt({get:Rt,set:ln});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:rt=>Dt.value=rt})}if(c)for(const we in c)ig(c[we],r,n,we);if(l){const we=ue(l)?l.call(n):l;Reflect.ownKeys(we).forEach(ye=>{$o(ye,we[ye])})}f&&Lf(f,t,"c");function xe(we,ye){ce(ye)?ye.forEach(Rt=>we(Rt.bind(n))):ye&&we(ye.bind(n))}if(xe(oI,p),xe(Ru,m),xe(aI,_),xe(cI,S),xe(rI,N),xe(sI,k),xe(fI,E),xe(hI,ne),xe(uI,R),xe(sg,B),xe(bu,G),xe(lI,y),ce(b))if(b.length){const we=t.exposed||(t.exposed={});b.forEach(ye=>{Object.defineProperty(we,ye,{get:()=>n[ye],set:Rt=>n[ye]=Rt,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===gn&&(t.render=te),A!=null&&(t.inheritAttrs=A),v&&(t.components=v),T&&(t.directives=T),y&&ng(t)}function yI(t,e,n=gn){ce(t)&&(t=Pl(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=tn(s.from||r,s.default,!0):i=tn(s.from||r):i=tn(s),_t(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Lf(t,e,n){nn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ig(t,e,n,r){let s=r.includes(".")?yg(n,r):()=>n[r];if(je(t)){const i=e[t];ue(i)&&fr(s,i)}else if(ue(t))fr(s,t.bind(n));else if(Ve(t))if(ce(t))t.forEach(i=>ig(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&fr(s,i,t)}}function og(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>la(l,u,o,!0)),la(l,e,o)),Ve(e)&&i.set(e,l),l}function la(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&la(t,i,n,!0),s&&s.forEach(o=>la(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=EI[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const EI={data:Ff,props:Uf,emits:Uf,methods:_i,computed:_i,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:_i,directives:_i,watch:II,provide:Ff,inject:TI};function Ff(t,e){return e?t?function(){return nt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function TI(t,e){return _i(Pl(t),Pl(e))}function Pl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function _i(t,e){return t?nt(Object.create(null),t,e):e}function Uf(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:nt(Object.create(null),xf(t),xf(e??{})):e}function II(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function ag(){return{app:null,config:{isNativeTag:mm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vI=0;function wI(t,e){return function(r,s=null){ue(r)||(r=nt({},r)),s!=null&&!Ve(s)&&(s=null);const i=ag(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:vI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:sv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ue(f.install)?(o.add(f),f.install(u,...p)):ue(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||Ke(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,za(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(nn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Rs;Rs=u;try{return f()}finally{Rs=p}}};return u}}let Rs=null;function $o(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function tn(t,e,n=!1){const r=wg();if(r||Rs){let s=Rs?Rs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const cg={},lg=()=>Object.create(cg),ug=t=>Object.getPrototypeOf(t)===cg;function AI(t,e,n,r=!1){const s={},i=lg();t.propsDefaults=Object.create(null),hg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Fm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function RI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=ve(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ga(t.emitsOptions,m))continue;const _=e[m];if(l)if(Re(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const S=Qt(m);s[S]=Nl(l,c,S,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{hg(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=ts(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Nl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],u=!0)}u&&Dn(t.attrs,"set","")}function hg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ri(l))continue;const u=e[l];let f;s&&Re(s,f=Qt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Ga(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=ve(n),u=c||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Nl(s,l,p,u[p],t,!Re(u,p))}}return o}function Nl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=io(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===ts(n))&&(r=!0))}return r}const bI=new WeakMap;function fg(t,e,n=!1){const r=n?bI:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[m,_]=fg(p,e,!0);nt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ve(t)&&r.set(t,Is),Is;if(ce(i))for(let f=0;f<i.length;f++){const p=Qt(i[f]);Bf(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=Qt(f);if(Bf(p)){const m=i[f],_=o[p]=ce(m)||ue(m)?{type:m}:nt({},m),S=_.type;let N=!1,k=!0;if(ce(S))for(let U=0;U<S.length;++U){const B=S[U],H=ue(B)&&B.name;if(H==="Boolean"){N=!0;break}else H==="String"&&(k=!1)}else N=ue(S)&&S.name==="Boolean";_[0]=N,_[1]=k,(N||Re(_,"default"))&&c.push(p)}}const u=[o,c];return Ve(t)&&r.set(t,u),u}function Bf(t){return t[0]!=="$"&&!Ri(t)}const Su=t=>t==="_"||t==="_ctx"||t==="$stable",Cu=t=>ce(t)?t.map(mn):[mn(t)],SI=(t,e,n)=>{if(e._n)return e;const r=gi((...s)=>Cu(e(...s)),n);return r._c=!1,r},dg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Su(s))continue;const i=t[s];if(ue(i))e[s]=SI(s,i,r);else if(i!=null){const o=Cu(i);e[s]=()=>o}}},pg=(t,e)=>{const n=Cu(e);t.slots.default=()=>n},mg=(t,e,n)=>{for(const r in e)(n||!Su(r))&&(t[r]=e[r])},CI=(t,e,n)=>{const r=t.slots=lg();if(t.vnode.shapeFlag&32){const s=e._;s?(mg(r,e,n),n&&Tm(r,"_",s,!0)):dg(e,r)}else e&&pg(t,e)},PI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:mg(s,e,n):(i=!e.$stable,dg(e,s)),o=e}else e&&(pg(t,e),o={default:1});if(i)for(const c in s)!Su(c)&&o[c]==null&&delete s[c]},It=HI;function NI(t){return DI(t)}function DI(t,e){const n=Ua();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=gn,insertStaticContent:S}=t,N=(I,w,C,x=null,F=null,V=null,z=void 0,$=null,j=!!w.dynamicChildren)=>{if(I===w)return;I&&!jr(I,w)&&(x=M(I),rt(I,F,V,!0),I=null),w.patchFlag===-2&&(j=!1,w.dynamicChildren=null);const{type:q,ref:se,shapeFlag:Y}=w;switch(q){case Wa:k(I,w,C,x);break;case At:U(I,w,C,x);break;case Ho:I==null&&B(w,C,x,z);break;case qt:v(I,w,C,x,F,V,z,$,j);break;default:Y&1?te(I,w,C,x,F,V,z,$,j):Y&6?T(I,w,C,x,F,V,z,$,j):(Y&64||Y&128)&&q.process(I,w,C,x,F,V,z,$,j,Z)}se!=null&&F?Pi(se,I&&I.ref,V,w||I,!w):se==null&&I&&I.ref!=null&&Pi(I.ref,null,V,I,!0)},k=(I,w,C,x)=>{if(I==null)r(w.el=c(w.children),C,x);else{const F=w.el=I.el;w.children!==I.children&&u(F,w.children)}},U=(I,w,C,x)=>{I==null?r(w.el=l(w.children||""),C,x):w.el=I.el},B=(I,w,C,x)=>{[I.el,I.anchor]=S(I.children,w,C,x,I.el,I.anchor)},H=({el:I,anchor:w},C,x)=>{let F;for(;I&&I!==w;)F=m(I),r(I,C,x),I=F;r(w,C,x)},G=({el:I,anchor:w})=>{let C;for(;I&&I!==w;)C=m(I),s(I),I=C;s(w)},te=(I,w,C,x,F,V,z,$,j)=>{w.type==="svg"?z="svg":w.type==="math"&&(z="mathml"),I==null?ne(w,C,x,F,V,z,$,j):y(I,w,F,V,z,$,j)},ne=(I,w,C,x,F,V,z,$)=>{let j,q;const{props:se,shapeFlag:Y,transition:re,dirs:ie}=I;if(j=I.el=o(I.type,V,se&&se.is,se),Y&8?f(j,I.children):Y&16&&E(I.children,j,null,x,F,Kc(I,V),z,$),ie&&Mr(I,null,x,"created"),R(j,I,I.scopeId,z,x),se){for(const Se in se)Se!=="value"&&!Ri(Se)&&i(j,Se,null,se[Se],V,x);"value"in se&&i(j,"value",null,se.value,V),(q=se.onVnodeBeforeMount)&&fn(q,x,I)}ie&&Mr(I,null,x,"beforeMount");const de=kI(F,re);de&&re.beforeEnter(j),r(j,w,C),((q=se&&se.onVnodeMounted)||de||ie)&&It(()=>{q&&fn(q,x,I),de&&re.enter(j),ie&&Mr(I,null,x,"mounted")},F)},R=(I,w,C,x,F)=>{if(C&&_(I,C),x)for(let V=0;V<x.length;V++)_(I,x[V]);if(F){let V=F.subTree;if(w===V||Tg(V.type)&&(V.ssContent===w||V.ssFallback===w)){const z=F.vnode;R(I,z,z.scopeId,z.slotScopeIds,F.parent)}}},E=(I,w,C,x,F,V,z,$,j=0)=>{for(let q=j;q<I.length;q++){const se=I[q]=$?sr(I[q]):mn(I[q]);N(null,se,w,C,x,F,V,z,$)}},y=(I,w,C,x,F,V,z)=>{const $=w.el=I.el;let{patchFlag:j,dynamicChildren:q,dirs:se}=w;j|=I.patchFlag&16;const Y=I.props||Ne,re=w.props||Ne;let ie;if(C&&xr(C,!1),(ie=re.onVnodeBeforeUpdate)&&fn(ie,C,w,I),se&&Mr(w,I,C,"beforeUpdate"),C&&xr(C,!0),(Y.innerHTML&&re.innerHTML==null||Y.textContent&&re.textContent==null)&&f($,""),q?b(I.dynamicChildren,q,$,C,x,Kc(w,F),V):z||ye(I,w,$,null,C,x,Kc(w,F),V,!1),j>0){if(j&16)A($,Y,re,C,F);else if(j&2&&Y.class!==re.class&&i($,"class",null,re.class,F),j&4&&i($,"style",Y.style,re.style,F),j&8){const de=w.dynamicProps;for(let Se=0;Se<de.length;Se++){const Ie=de[Se],ut=Y[Ie],ht=re[Ie];(ht!==ut||Ie==="value")&&i($,Ie,ut,ht,F,C)}}j&1&&I.children!==w.children&&f($,w.children)}else!z&&q==null&&A($,Y,re,C,F);((ie=re.onVnodeUpdated)||se)&&It(()=>{ie&&fn(ie,C,w,I),se&&Mr(w,I,C,"updated")},x)},b=(I,w,C,x,F,V,z)=>{for(let $=0;$<w.length;$++){const j=I[$],q=w[$],se=j.el&&(j.type===qt||!jr(j,q)||j.shapeFlag&198)?p(j.el):C;N(j,q,se,null,x,F,V,z,!0)}},A=(I,w,C,x,F)=>{if(w!==C){if(w!==Ne)for(const V in w)!Ri(V)&&!(V in C)&&i(I,V,w[V],null,F,x);for(const V in C){if(Ri(V))continue;const z=C[V],$=w[V];z!==$&&V!=="value"&&i(I,V,$,z,F,x)}"value"in C&&i(I,"value",w.value,C.value,F)}},v=(I,w,C,x,F,V,z,$,j)=>{const q=w.el=I?I.el:c(""),se=w.anchor=I?I.anchor:c("");let{patchFlag:Y,dynamicChildren:re,slotScopeIds:ie}=w;ie&&($=$?$.concat(ie):ie),I==null?(r(q,C,x),r(se,C,x),E(w.children||[],C,se,F,V,z,$,j)):Y>0&&Y&64&&re&&I.dynamicChildren?(b(I.dynamicChildren,re,C,F,V,z,$),(w.key!=null||F&&w===F.subTree)&&Pu(I,w,!0)):ye(I,w,C,se,F,V,z,$,j)},T=(I,w,C,x,F,V,z,$,j)=>{w.slotScopeIds=$,I==null?w.shapeFlag&512?F.ctx.activate(w,C,x,z,j):Te(w,C,x,F,V,z,j):$e(I,w,j)},Te=(I,w,C,x,F,V,z)=>{const $=I.component=JI(I,x,F);if($a(I)&&($.ctx.renderer=Z),XI($,!1,z),$.asyncDep){if(F&&F.registerDep($,xe,z),!I.el){const j=$.subTree=Ke(At);U(null,j,w,C),I.placeholder=j.el}}else xe($,I,w,C,F,V,z)},$e=(I,w,C)=>{const x=w.component=I.component;if(qI(I,w,C))if(x.asyncDep&&!x.asyncResolved){we(x,w,C);return}else x.next=w,x.update();else w.el=I.el,x.vnode=w},xe=(I,w,C,x,F,V,z)=>{const $=()=>{if(I.isMounted){let{next:Y,bu:re,u:ie,parent:de,vnode:Se}=I;{const Vt=gg(I);if(Vt){Y&&(Y.el=Se.el,we(I,Y,z)),Vt.asyncDep.then(()=>{I.isUnmounted||$()});return}}let Ie=Y,ut;xr(I,!1),Y?(Y.el=Se.el,we(I,Y,z)):Y=Se,re&&jo(re),(ut=Y.props&&Y.props.onVnodeBeforeUpdate)&&fn(ut,de,Y,Se),xr(I,!0);const ht=qf(I),kt=I.subTree;I.subTree=ht,N(kt,ht,p(kt.el),M(kt),I,F,V),Y.el=ht.el,Ie===null&&$I(I,ht.el),ie&&It(ie,F),(ut=Y.props&&Y.props.onVnodeUpdated)&&It(()=>fn(ut,de,Y,Se),F)}else{let Y;const{el:re,props:ie}=w,{bm:de,m:Se,parent:Ie,root:ut,type:ht}=I,kt=Ni(w);xr(I,!1),de&&jo(de),!kt&&(Y=ie&&ie.onVnodeBeforeMount)&&fn(Y,Ie,w),xr(I,!0);{ut.ce&&ut.ce._def.shadowRoot!==!1&&ut.ce._injectChildStyle(ht);const Vt=I.subTree=qf(I);N(null,Vt,C,x,I,F,V),w.el=Vt.el}if(Se&&It(Se,F),!kt&&(Y=ie&&ie.onVnodeMounted)){const Vt=w;It(()=>fn(Y,Ie,Vt),F)}(w.shapeFlag&256||Ie&&Ni(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&I.a&&It(I.a,F),I.isMounted=!0,w=C=x=null}};I.scope.on();const j=I.effect=new Am($);I.scope.off();const q=I.update=j.run.bind(j),se=I.job=j.runIfDirty.bind(j);se.i=I,se.id=I.uid,j.scheduler=()=>Au(se),xr(I,!0),q()},we=(I,w,C)=>{w.component=I;const x=I.vnode.props;I.vnode=w,I.next=null,RI(I,w.props,x,C),PI(I,w.children,C),Fn(),Pf(I),Un()},ye=(I,w,C,x,F,V,z,$,j=!1)=>{const q=I&&I.children,se=I?I.shapeFlag:0,Y=w.children,{patchFlag:re,shapeFlag:ie}=w;if(re>0){if(re&128){ln(q,Y,C,x,F,V,z,$,j);return}else if(re&256){Rt(q,Y,C,x,F,V,z,$,j);return}}ie&8?(se&16&&lt(q,F,V),Y!==q&&f(C,Y)):se&16?ie&16?ln(q,Y,C,x,F,V,z,$,j):lt(q,F,V,!0):(se&8&&f(C,""),ie&16&&E(Y,C,x,F,V,z,$,j))},Rt=(I,w,C,x,F,V,z,$,j)=>{I=I||Is,w=w||Is;const q=I.length,se=w.length,Y=Math.min(q,se);let re;for(re=0;re<Y;re++){const ie=w[re]=j?sr(w[re]):mn(w[re]);N(I[re],ie,C,null,F,V,z,$,j)}q>se?lt(I,F,V,!0,!1,Y):E(w,C,x,F,V,z,$,j,Y)},ln=(I,w,C,x,F,V,z,$,j)=>{let q=0;const se=w.length;let Y=I.length-1,re=se-1;for(;q<=Y&&q<=re;){const ie=I[q],de=w[q]=j?sr(w[q]):mn(w[q]);if(jr(ie,de))N(ie,de,C,null,F,V,z,$,j);else break;q++}for(;q<=Y&&q<=re;){const ie=I[Y],de=w[re]=j?sr(w[re]):mn(w[re]);if(jr(ie,de))N(ie,de,C,null,F,V,z,$,j);else break;Y--,re--}if(q>Y){if(q<=re){const ie=re+1,de=ie<se?w[ie].el:x;for(;q<=re;)N(null,w[q]=j?sr(w[q]):mn(w[q]),C,de,F,V,z,$,j),q++}}else if(q>re)for(;q<=Y;)rt(I[q],F,V,!0),q++;else{const ie=q,de=q,Se=new Map;for(q=de;q<=re;q++){const st=w[q]=j?sr(w[q]):mn(w[q]);st.key!=null&&Se.set(st.key,q)}let Ie,ut=0;const ht=re-de+1;let kt=!1,Vt=0;const Xt=new Array(ht);for(q=0;q<ht;q++)Xt[q]=0;for(q=ie;q<=Y;q++){const st=I[q];if(ut>=ht){rt(st,F,V,!0);continue}let Ze;if(st.key!=null)Ze=Se.get(st.key);else for(Ie=de;Ie<=re;Ie++)if(Xt[Ie-de]===0&&jr(st,w[Ie])){Ze=Ie;break}Ze===void 0?rt(st,F,V,!0):(Xt[Ze-de]=q+1,Ze>=Vt?Vt=Ze:kt=!0,N(st,w[Ze],C,null,F,V,z,$,j),ut++)}const as=kt?VI(Xt):Is;for(Ie=as.length-1,q=ht-1;q>=0;q--){const st=de+q,Ze=w[st],Xs=w[st+1],Nr=st+1<se?Xs.el||Xs.placeholder:x;Xt[q]===0?N(null,Ze,C,Nr,F,V,z,$,j):kt&&(Ie<0||q!==as[Ie]?Dt(Ze,C,Nr,2):Ie--)}}},Dt=(I,w,C,x,F=null)=>{const{el:V,type:z,transition:$,children:j,shapeFlag:q}=I;if(q&6){Dt(I.component.subTree,w,C,x);return}if(q&128){I.suspense.move(w,C,x);return}if(q&64){z.move(I,w,C,Z);return}if(z===qt){r(V,w,C);for(let Y=0;Y<j.length;Y++)Dt(j[Y],w,C,x);r(I.anchor,w,C);return}if(z===Ho){H(I,w,C);return}if(x!==2&&q&1&&$)if(x===0)$.beforeEnter(V),r(V,w,C),It(()=>$.enter(V),F);else{const{leave:Y,delayLeave:re,afterLeave:ie}=$,de=()=>{I.ctx.isUnmounted?s(V):r(V,w,C)},Se=()=>{V._isLeaving&&V[Nn](!0),Y(V,()=>{de(),ie&&ie()})};re?re(V,de,Se):Se()}else r(V,w,C)},rt=(I,w,C,x=!1,F=!1)=>{const{type:V,props:z,ref:$,children:j,dynamicChildren:q,shapeFlag:se,patchFlag:Y,dirs:re,cacheIndex:ie}=I;if(Y===-2&&(F=!1),$!=null&&(Fn(),Pi($,null,C,I,!0),Un()),ie!=null&&(w.renderCache[ie]=void 0),se&256){w.ctx.deactivate(I);return}const de=se&1&&re,Se=!Ni(I);let Ie;if(Se&&(Ie=z&&z.onVnodeBeforeUnmount)&&fn(Ie,w,I),se&6)Jt(I.component,C,x);else{if(se&128){I.suspense.unmount(C,x);return}de&&Mr(I,null,w,"beforeUnmount"),se&64?I.type.remove(I,w,C,Z,x):q&&!q.hasOnce&&(V!==qt||Y>0&&Y&64)?lt(q,w,C,!1,!0):(V===qt&&Y&384||!F&&se&16)&&lt(j,w,C),x&&Rn(I)}(Se&&(Ie=z&&z.onVnodeUnmounted)||de)&&It(()=>{Ie&&fn(Ie,w,I),de&&Mr(I,null,w,"unmounted")},C)},Rn=I=>{const{type:w,el:C,anchor:x,transition:F}=I;if(w===qt){Yt(C,x);return}if(w===Ho){G(I);return}const V=()=>{s(C),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(I.shapeFlag&1&&F&&!F.persisted){const{leave:z,delayLeave:$}=F,j=()=>z(C,V);$?$(I.el,V,j):j()}else V()},Yt=(I,w)=>{let C;for(;I!==w;)C=m(I),s(I),I=C;s(w)},Jt=(I,w,C)=>{const{bum:x,scope:F,job:V,subTree:z,um:$,m:j,a:q}=I;jf(j),jf(q),x&&jo(x),F.stop(),V&&(V.flags|=8,rt(z,I,w,C)),$&&It($,w),It(()=>{I.isUnmounted=!0},w)},lt=(I,w,C,x=!1,F=!1,V=0)=>{for(let z=V;z<I.length;z++)rt(I[z],w,C,x,F)},M=I=>{if(I.shapeFlag&6)return M(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const w=m(I.anchor||I.el),C=w&&w[zm];return C?m(C):w};let J=!1;const K=(I,w,C)=>{I==null?w._vnode&&rt(w._vnode,null,null,!0):N(w._vnode||null,I,w,null,null,null,C),w._vnode=I,J||(J=!0,Pf(),Hm(),J=!1)},Z={p:N,um:rt,m:Dt,r:Rn,mt:Te,mc:E,pc:ye,pbc:b,n:M,o:t};return{render:K,hydrate:void 0,createApp:wI(K)}}function Kc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function kI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pu(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=sr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Pu(o,c)),c.type===Wa&&c.patchFlag!==-1&&(c.el=o.el),c.type===At&&!c.el&&(c.el=o.el)}}function VI(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function gg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gg(e)}function jf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const OI=Symbol.for("v-scx"),MI=()=>tn(OI);function fr(t,e,n){return _g(t,e,n)}function _g(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=nt({},n),l=e&&r||!e&&i!=="post";let u;if(Wi){if(i==="sync"){const _=MI();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=gn,_.resume=gn,_.pause=gn,_}}const f=gt;c.call=(_,S,N)=>nn(_,f,S,N);let p=!1;i==="post"?c.scheduler=_=>{It(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,S)=>{S?_():Au(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=KT(t,e,c);return Wi&&(u?u.push(m):l&&m()),m}function xI(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?yg(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=io(this),c=_g(s,i.bind(r),n);return o(),c}function yg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const LI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qt(e)}Modifiers`]||t[`${ts(e)}Modifiers`];function FI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&LI(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>je(f)?f.trim():f)),o.number&&(s=n.map(El)));let c,l=r[c=Bc(e)]||r[c=Bc(Qt(e))];!l&&i&&(l=r[c=Bc(ts(e))]),l&&nn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,nn(u,t,6,s)}}const UI=new WeakMap;function Eg(t,e,n=!1){const r=n?UI:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=u=>{const f=Eg(u,e,!0);f&&(c=!0,nt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ve(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):nt(o,i),Ve(t)&&r.set(t,o),o)}function Ga(t,e){return!t||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,ts(e))||Re(t,e))}function qf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:S,inheritAttrs:N}=t,k=aa(t);let U,B;try{if(n.shapeFlag&4){const G=s||r,te=G;U=mn(u.call(te,G,f,p,_,m,S)),B=c}else{const G=e;U=mn(G.length>1?G(p,{attrs:c,slots:o,emit:l}):G(p,null)),B=e.props?c:BI(c)}}catch(G){ki.length=0,qa(G,t,1),U=Ke(At)}let H=U;if(B&&N!==!1){const G=Object.keys(B),{shapeFlag:te}=H;G.length&&te&7&&(i&&G.some(fu)&&(B=jI(B,i)),H=yr(H,B,!1,!0))}return n.dirs&&(H=yr(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Hi(H,n.transition),U=H,aa(k),U}const BI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ma(n))&&((e||(e={}))[n]=t[n]);return e},jI=(t,e)=>{const n={};for(const r in t)(!fu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function qI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$f(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Ga(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?$f(r,o,u):!0:!!o;return!1}function $f(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ga(n,i))return!0}return!1}function $I({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Tg=t=>t.__isSuspense;function HI(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):JT(t)}const qt=Symbol.for("v-fgt"),Wa=Symbol.for("v-txt"),At=Symbol.for("v-cmt"),Ho=Symbol.for("v-stc"),ki=[];let Lt=null;function Ft(t=!1){ki.push(Lt=t?null:[])}function GI(){ki.pop(),Lt=ki[ki.length-1]||null}let Gi=1;function ua(t,e=!1){Gi+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function Ig(t){return t.dynamicChildren=Gi>0?Lt||Is:null,GI(),Gi>0&&Lt&&Lt.push(t),t}function Vn(t,e,n,r,s,i){return Ig(Ce(t,e,n,r,s,i,!0))}function ha(t,e,n,r,s){return Ig(Ke(t,e,n,r,s,!0))}function fa(t){return t?t.__v_isVNode===!0:!1}function jr(t,e){return t.type===e.type&&t.key===e.key}const vg=({key:t})=>t??null,Go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||_t(t)||ue(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function Ce(t,e=null,n=null,r=0,s=null,i=t===qt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vg(e),ref:e&&Go(e),scopeId:Wm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xt};return c?(Nu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),Gi>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const Ke=WI;function WI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===pI)&&(t=At),fa(t)){const c=yr(t,e,!0);return n&&Nu(c,n),Gi>0&&!i&&Lt&&(c.shapeFlag&6?Lt[Lt.indexOf(t)]=c:Lt.push(c)),c.patchFlag=-2,c}if(rv(t)&&(t=t.__vccOpts),e){e=zI(e);let{class:c,style:l}=e;c&&!je(c)&&(e.class=gu(c)),Ve(l)&&(wu(l)&&!ce(l)&&(l=nt({},l)),e.style=mu(l))}const o=je(t)?1:Tg(t)?128:Km(t)?64:Ve(t)?4:ue(t)?2:0;return Ce(t,e,n,r,s,o,i,!0)}function zI(t){return t?wu(t)||ug(t)?nt({},t):t:null}function yr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?KI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&vg(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Go(e)):[i,Go(e)]:Go(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yr(t.ssContent),ssFallback:t.ssFallback&&yr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Hi(f,l.clone(f)),f}function Wo(t=" ",e=0){return Ke(Wa,null,t,e)}function tD(t,e){const n=Ke(Ho,null,t);return n.staticCount=e,n}function bs(t="",e=!1){return e?(Ft(),ha(At,null,t)):Ke(At,null,t)}function mn(t){return t==null||typeof t=="boolean"?Ke(At):ce(t)?Ke(qt,null,t.slice()):fa(t)?sr(t):Ke(Wa,null,String(t))}function sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yr(t)}function Nu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Nu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ug(e)?e._ctx=xt:s===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),r&64?(n=16,e=[Wo(e)]):n=8);t.children=e,t.shapeFlag|=n}function KI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=gu([e.class,r.class]));else if(s==="style")e.style=mu([e.style,r.style]);else if(Ma(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function fn(t,e,n,r=null){nn(t,e,7,[n,r])}const QI=ag();let YI=0;function JI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||QI,i={uid:YI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new IT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fg(r,s),emitsOptions:Eg(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=FI.bind(null,i),t.ce&&t.ce(i),i}let gt=null;const wg=()=>gt||xt;let da,Dl;{const t=Ua(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};da=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),Dl=e("__VUE_SSR_SETTERS__",n=>Wi=n)}const io=t=>{const e=gt;return da(t),t.scope.on(),()=>{t.scope.off(),da(e)}},Hf=()=>{gt&&gt.scope.off(),da(null)};function Ag(t){return t.vnode.shapeFlag&4}let Wi=!1;function XI(t,e=!1,n=!1){e&&Dl(e);const{props:r,children:s}=t.vnode,i=Ag(t);AI(t,r,i,e),CI(t,s,n||e);const o=i?ZI(t,e):void 0;return e&&Dl(!1),o}function ZI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gI);const{setup:r}=n;if(r){Fn();const s=t.setupContext=r.length>1?tv(t):null,i=io(t),o=so(r,t,0,[t.props,s]),c=_m(o);if(Un(),i(),(c||t.sp)&&!Ni(t)&&ng(t),c){if(o.then(Hf,Hf),e)return o.then(l=>{Gf(t,l)}).catch(l=>{qa(l,t,0)});t.asyncDep=o}else Gf(t,o)}else Rg(t)}function Gf(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Bm(e)),Rg(t)}function Rg(t,e,n){const r=t.type;t.render||(t.render=r.render||gn);{const s=io(t);Fn();try{_I(t)}finally{Un(),s()}}}const ev={get(t,e){return pt(t,"get",""),t[e]}};function tv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ev),slots:t.slots,emit:t.emit,expose:e}}function za(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Bm(jT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Di)return Di[n](t)},has(e,n){return n in e||n in Di}})):t.proxy}function nv(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function rv(t){return ue(t)&&"__vccOpts"in t}const Mt=(t,e)=>WT(t,e,Wi);function Du(t,e,n){try{ua(-1);const r=arguments.length;return r===2?Ve(e)&&!ce(e)?fa(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fa(n)&&(n=[n]),Ke(t,e,n))}finally{ua(1)}}const sv="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kl;const Wf=typeof window<"u"&&window.trustedTypes;if(Wf)try{kl=Wf.createPolicy("vue",{createHTML:t=>t})}catch{}const bg=kl?t=>kl.createHTML(t):t=>t,iv="http://www.w3.org/2000/svg",ov="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,zf=Pn&&Pn.createElement("template"),av={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pn.createElementNS(iv,t):e==="mathml"?Pn.createElementNS(ov,t):n?Pn.createElement(t,{is:n}):Pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zf.innerHTML=bg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=zf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},er="transition",pi="animation",zi=Symbol("_vtc"),Sg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cv=nt({},Jm,Sg),lv=t=>(t.displayName="Transition",t.props=cv,t),nD=lv((t,{slots:e})=>Du(nI,uv(t),e)),Lr=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Kf=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function uv(t){const e={};for(const v in t)v in Sg||(e[v]=t[v]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,S=hv(s),N=S&&S[0],k=S&&S[1],{onBeforeEnter:U,onEnter:B,onEnterCancelled:H,onLeave:G,onLeaveCancelled:te,onBeforeAppear:ne=U,onAppear:R=B,onAppearCancelled:E=H}=e,y=(v,T,Te,$e)=>{v._enterCancelled=$e,Fr(v,T?f:c),Fr(v,T?u:o),Te&&Te()},b=(v,T)=>{v._isLeaving=!1,Fr(v,p),Fr(v,_),Fr(v,m),T&&T()},A=v=>(T,Te)=>{const $e=v?R:B,xe=()=>y(T,v,Te);Lr($e,[T,xe]),Qf(()=>{Fr(T,v?l:i),Sn(T,v?f:c),Kf($e)||Yf(T,r,N,xe)})};return nt(e,{onBeforeEnter(v){Lr(U,[v]),Sn(v,i),Sn(v,o)},onBeforeAppear(v){Lr(ne,[v]),Sn(v,l),Sn(v,u)},onEnter:A(!1),onAppear:A(!0),onLeave(v,T){v._isLeaving=!0;const Te=()=>b(v,T);Sn(v,p),v._enterCancelled?(Sn(v,m),Zf(v)):(Zf(v),Sn(v,m)),Qf(()=>{v._isLeaving&&(Fr(v,p),Sn(v,_),Kf(G)||Yf(v,r,k,Te))}),Lr(G,[v,Te])},onEnterCancelled(v){y(v,!1,void 0,!0),Lr(H,[v])},onAppearCancelled(v){y(v,!0,void 0,!0),Lr(E,[v])},onLeaveCancelled(v){b(v),Lr(te,[v])}})}function hv(t){if(t==null)return null;if(Ve(t))return[Qc(t.enter),Qc(t.leave)];{const e=Qc(t);return[e,e]}}function Qc(t){return pT(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[zi]||(t[zi]=new Set)).add(e)}function Fr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[zi];n&&(n.delete(e),n.size||(t[zi]=void 0))}function Qf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let fv=0;function Yf(t,e,n,r){const s=t._endId=++fv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=dv(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function dv(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${er}Delay`),i=r(`${er}Duration`),o=Jf(s,i),c=r(`${pi}Delay`),l=r(`${pi}Duration`),u=Jf(c,l);let f=null,p=0,m=0;e===er?o>0&&(f=er,p=o,m=i.length):e===pi?u>0&&(f=pi,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?er:pi:null,m=f?f===er?i.length:l.length:0);const _=f===er&&/\b(?:transform|all)(?:,|$)/.test(r(`${er}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:_}}function Jf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Xf(n)+Xf(t[r])))}function Xf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Zf(t){return(t?t.ownerDocument:document).body.offsetHeight}function pv(t,e,n){const r=t[zi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ed=Symbol("_vod"),mv=Symbol("_vsh"),gv=Symbol(""),_v=/(?:^|;)\s*display\s*:/;function yv(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&zo(r,c,"")}else for(const o in e)n[o]==null&&zo(r,o,"");for(const o in n)o==="display"&&(i=!0),zo(r,o,n[o])}else if(s){if(e!==n){const o=r[gv];o&&(n+=";"+o),r.cssText=n,i=_v.test(n)}}else e&&t.removeAttribute("style");ed in t&&(t[ed]=i?r.display:"",t[mv]&&(r.display="none"))}const td=/\s*!important$/;function zo(t,e,n){if(ce(n))n.forEach(r=>zo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ev(t,e);td.test(n)?t.setProperty(ts(r),n.replace(td,""),"important"):t[r]=n}}const nd=["Webkit","Moz","ms"],Yc={};function Ev(t,e){const n=Yc[e];if(n)return n;let r=Qt(e);if(r!=="filter"&&r in t)return Yc[e]=r;r=Fa(r);for(let s=0;s<nd.length;s++){const i=nd[s]+r;if(i in t)return Yc[e]=i}return e}const rd="http://www.w3.org/1999/xlink";function sd(t,e,n,r,s,i=TT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rd,e.slice(6,e.length)):t.setAttributeNS(rd,e,n):n==null||i&&!Im(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Rr(n)?String(n):n)}function id(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?bg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Im(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ps(t,e,n,r){t.addEventListener(e,n,r)}function Tv(t,e,n,r){t.removeEventListener(e,n,r)}const od=Symbol("_vei");function Iv(t,e,n,r,s=null){const i=t[od]||(t[od]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=vv(e);if(r){const u=i[e]=Rv(r,s);ps(t,c,u,l)}else o&&(Tv(t,c,o,l),i[e]=void 0)}}const ad=/(?:Once|Passive|Capture)$/;function vv(t){let e;if(ad.test(t)){e={};let r;for(;r=t.match(ad);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ts(t.slice(2)),e]}let Jc=0;const wv=Promise.resolve(),Av=()=>Jc||(wv.then(()=>Jc=0),Jc=Date.now());function Rv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nn(bv(r,n.value),e,5,[r])};return n.value=t,n.attached=Av(),n}function bv(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const cd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?pv(t,r,o):e==="style"?yv(t,n,r):Ma(e)?fu(e)||Iv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cv(t,e,r,o))?(id(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!je(r))?id(t,Qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sd(t,e,r,o))};function Cv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&cd(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cd(e)&&je(n)?!1:e in t}const ld=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>jo(e,n):e};function Pv(t){t.target.composing=!0}function ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xc=Symbol("_assign"),Zc={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Xc]=ld(s);const i=r||s.props&&s.props.type==="number";ps(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=El(c)),t[Xc](c)}),n&&ps(t,"change",()=>{t.value=t.value.trim()}),e||(ps(t,"compositionstart",Pv),ps(t,"compositionend",ud),ps(t,"change",ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Xc]=ld(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?El(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Nv=["ctrl","shift","alt","meta"],Dv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nv.some(n=>t[`${n}Key`]&&!e.includes(n))},hd=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=Dv[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},kv=nt({patchProp:Sv},av);let fd;function Vv(){return fd||(fd=NI(kv))}const Ov=((...t)=>{const e=Vv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xv(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Mv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Mv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function xv(t){return je(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ms=typeof document<"u";function Cg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cg(t.default)}const Ae=Object.assign;function el(t,e){const n={};for(const r in e){const s=e[r];n[r]=rn(s)?s.map(t):t(s)}return n}const Vi=()=>{},rn=Array.isArray;function dd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Pg=/#/g,Fv=/&/g,Uv=/\//g,Bv=/=/g,jv=/\?/g,Ng=/\+/g,qv=/%5B/g,$v=/%5D/g,Dg=/%5E/g,Hv=/%60/g,kg=/%7B/g,Gv=/%7C/g,Vg=/%7D/g,Wv=/%20/g;function ku(t){return t==null?"":encodeURI(""+t).replace(Gv,"|").replace(qv,"[").replace($v,"]")}function zv(t){return ku(t).replace(kg,"{").replace(Vg,"}").replace(Dg,"^")}function Vl(t){return ku(t).replace(Ng,"%2B").replace(Wv,"+").replace(Pg,"%23").replace(Fv,"%26").replace(Hv,"`").replace(kg,"{").replace(Vg,"}").replace(Dg,"^")}function Kv(t){return Vl(t).replace(Bv,"%3D")}function Qv(t){return ku(t).replace(Pg,"%23").replace(jv,"%3F")}function Yv(t){return Qv(t).replace(Uv,"%2F")}function Ki(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Jv=/\/$/,Xv=t=>t.replace(Jv,"");function tl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=nw(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Ki(o)}}function Zv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ew(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ds(e.matched[r],n.matched[s])&&Og(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Og(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tw(t[n],e[n]))return!1;return!0}function tw(t,e){return rn(t)?md(t,e):rn(e)?md(e,t):t===e}function md(t,e){return rn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function nw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const tr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ol=(function(t){return t.pop="pop",t.push="push",t})({}),nl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function rw(t){if(!t)if(ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xv(t)}const sw=/^[^#]+#/;function iw(t,e){return t.replace(sw,"#")+e}function ow(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ka=()=>({left:window.scrollX,top:window.scrollY});function aw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ow(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gd(t,e){return(history.state?history.state.position-e:-1)+t}const Ml=new Map;function cw(t,e){Ml.set(t,e)}function lw(t){const e=Ml.get(t);return Ml.delete(t),e}function uw(t){return typeof t=="string"||t&&typeof t=="object"}function Mg(t){return typeof t=="string"||typeof t=="symbol"}let Ue=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const xg=Symbol("");Ue.MATCHER_NOT_FOUND+"",Ue.NAVIGATION_GUARD_REDIRECT+"",Ue.NAVIGATION_ABORTED+"",Ue.NAVIGATION_CANCELLED+"",Ue.NAVIGATION_DUPLICATED+"";function ks(t,e){return Ae(new Error,{type:t,[xg]:!0},e)}function Cn(t,e){return t instanceof Error&&xg in t&&(e==null||!!(t.type&e))}const hw=["params","query","hash"];function fw(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of hw)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function dw(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Ng," "),i=s.indexOf("="),o=Ki(i<0?s:s.slice(0,i)),c=i<0?null:Ki(s.slice(i+1));if(o in e){let l=e[o];rn(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function _d(t){let e="";for(let n in t){const r=t[n];if(n=Kv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rn(r)?r.map(s=>s&&Vl(s)):[r&&Vl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function pw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const mw=Symbol(""),yd=Symbol(""),Qa=Symbol(""),Vu=Symbol(""),xl=Symbol("");function mi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ir(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(ks(Ue.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):uw(m)?l(ks(Ue.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function rl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Cg(l)){const u=(l.__vccOpts||l)[e];u&&i.push(ir(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=Lv(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&ir(m,n,r,o,c,s)()}))}}return i}function gw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ds(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ds(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _w=()=>location.protocol+"//"+location.host;function Lg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),pd(c,"")}return pd(n,t)+r+s}function yw(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=Lg(t,location),S=n.value,N=e.value;let k=0;if(m){if(n.value=_,e.value=m,o&&o===S){o=null;return}k=N?m.position-N.position:0}else r(_);s.forEach(U=>{U(n.value,S,{delta:k,type:Ol.pop,direction:k?k>0?nl.forward:nl.back:nl.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Ae({},m.state,{scroll:Ka()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function Ed(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ka():null}}function Ew(t){const{history:e,location:n}=window,r={value:Lg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:_w()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){i(l,Ae({},e.state,Ed(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Ae({},s.value,e.state,{forward:l,scroll:Ka()});i(f.current,f,!0),i(l,Ae({},Ed(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function Tw(t){t=rw(t);const e=Ew(t),n=yw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:iw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let qr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Je=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Je||{});const Iw={type:qr.Static,value:""},vw=/[a-zA-Z0-9_]/;function ww(t){if(!t)return[[]];if(t==="/")return[[Iw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=Je.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===Je.Static?i.push({type:qr.Static,value:u}):n===Je.Param||n===Je.ParamRegExp||n===Je.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:qr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Je.ParamRegExp){r=n,n=Je.EscapeNext;continue}switch(n){case Je.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=Je.Param):m();break;case Je.EscapeNext:m(),n=r;break;case Je.Param:l==="("?n=Je.ParamRegExp:vw.test(l)?m():(p(),n=Je.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Je.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Je.ParamRegExpEnd:f+=l;break;case Je.ParamRegExpEnd:p(),n=Je.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Je.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Td="[^/]+?",Aw={sensitive:!1,strict:!1,start:!0,end:!0};var vt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(vt||{});const Rw=/[.+*?^${}()[\]/\\]/g;function bw(t,e){const n=Ae({},Aw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[vt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=vt.Segment+(n.sensitive?vt.BonusCaseSensitive:0);if(m.type===qr.Static)p||(s+="/"),s+=m.value.replace(Rw,"\\$&"),_+=vt.Static;else if(m.type===qr.Param){const{value:S,repeatable:N,optional:k,regexp:U}=m;i.push({name:S,repeatable:N,optional:k});const B=U||Td;if(B!==Td){_+=vt.BonusCustomRegExp;try{`${B}`}catch(G){throw new Error(`Invalid custom RegExp for param "${S}" (${B}): `+G.message)}}let H=N?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(H=k&&u.length<2?`(?:/${H})`:"/"+H),k&&(H+="?"),s+=H,_+=vt.Dynamic,k&&(_+=vt.BonusOptional),N&&(_+=vt.BonusRepeatable),B===".*"&&(_+=vt.BonusWildcard)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=vt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",S=i[m-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===qr.Static)f+=_.value;else if(_.type===qr.Param){const{value:S,repeatable:N,optional:k}=_,U=S in u?u[S]:"";if(rn(U)&&!N)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const B=rn(U)?U.join("/"):U;if(!B)if(k)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function Sw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===vt.Static+vt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===vt.Static+vt.Segment?1:-1:0}function Fg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Sw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Id(r))return 1;if(Id(s))return-1}return s.length-r.length}function Id(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Cw={strict:!1,end:!0,sensitive:!1};function Pw(t,e,n){const r=bw(ww(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Nw(t,e){const n=[],r=new Map;e=dd(Cw,e);function s(p){return r.get(p)}function i(p,m,_){const S=!_,N=wd(p);N.aliasOf=_&&_.record;const k=dd(e,p),U=[N];if("alias"in p){const G=typeof p.alias=="string"?[p.alias]:p.alias;for(const te of G)U.push(wd(Ae({},N,{components:_?_.record.components:N.components,path:te,aliasOf:_?_.record:N})))}let B,H;for(const G of U){const{path:te}=G;if(m&&te[0]!=="/"){const ne=m.record.path,R=ne[ne.length-1]==="/"?"":"/";G.path=m.record.path+(te&&R+te)}if(B=Pw(G,m,k),_?_.alias.push(B):(H=H||B,H!==B&&H.alias.push(B),S&&p.name&&!Ad(B)&&o(p.name)),Ug(B)&&l(B),N.children){const ne=N.children;for(let R=0;R<ne.length;R++)i(ne[R],B,_&&_.children[R])}_=_||B}return H?()=>{o(H)}:Vi}function o(p){if(Mg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=Vw(p,n);n.splice(m,0,p),p.record.name&&!Ad(p)&&r.set(p.record.name,p)}function u(p,m){let _,S={},N,k;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ks(Ue.MATCHER_NOT_FOUND,{location:p});k=_.record.name,S=Ae(vd(m.params,_.keys.filter(H=>!H.optional).concat(_.parent?_.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&vd(p.params,_.keys.map(H=>H.name))),N=_.stringify(S)}else if(p.path!=null)N=p.path,_=n.find(H=>H.re.test(N)),_&&(S=_.parse(N),k=_.record.name);else{if(_=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!_)throw ks(Ue.MATCHER_NOT_FOUND,{location:p,currentLocation:m});k=_.record.name,S=Ae({},m.params,p.params),N=_.stringify(S)}const U=[];let B=_;for(;B;)U.unshift(B.record),B=B.parent;return{name:k,path:N,params:S,matched:U,meta:kw(U)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function vd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function wd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Dw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Dw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function kw(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function Vw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Fg(t,e[i])<0?r=i:n=i+1}const s=Ow(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Ow(t){let e=t;for(;e=e.parent;)if(Ug(e)&&Fg(t,e)===0)return e}function Ug({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Rd(t){const e=tn(Qa),n=tn(Vu),r=Mt(()=>{const l=We(t.to);return e.resolve(l)}),s=Mt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Ds.bind(null,f));if(m>-1)return m;const _=bd(l[u-2]);return u>1&&bd(f)===_&&p[p.length-1].path!==_?p.findIndex(Ds.bind(null,l[u-2])):m}),i=Mt(()=>s.value>-1&&Fw(n.params,r.value.params)),o=Mt(()=>s.value>-1&&s.value===n.matched.length-1&&Og(n.params,r.value.params));function c(l={}){if(Lw(l)){const u=e[We(t.replace)?"replace":"push"](We(t.to)).catch(Vi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Mt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Mw(t){return t.length===1?t[0]:t}const xw=qs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Rd,setup(t,{slots:e}){const n=ja(Rd(t)),{options:r}=tn(Qa),s=Mt(()=>({[Sd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Mw(e.default(n));return t.custom?i:Du("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),yi=xw;function Lw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Fw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!rn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function bd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sd=(t,e,n)=>t??e??n,Uw=qs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=tn(xl),s=Mt(()=>t.route||r.value),i=tn(yd,0),o=Mt(()=>{let u=We(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Mt(()=>s.value.matched[o.value]);$o(yd,Mt(()=>o.value+1)),$o(mw,c),$o(xl,s);const l=Gt();return fr(()=>[l.value,c.value,t.name],([u,f,p],[m,_,S])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Ds(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Cd(n.default,{Component:m,route:u});const _=p.props[f],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,k=Du(m,Ae({},S,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Cd(n.default,{Component:k,route:u})||k}}});function Cd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Bg=Uw;function Bw(t){const e=Nw(t.routes,t),n=t.parseQuery||dw,r=t.stringifyQuery||_d,s=t.history,i=mi(),o=mi(),c=mi(),l=qT(tr);let u=tr;ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=el.bind(null,M=>""+M),p=el.bind(null,Yv),m=el.bind(null,Ki);function _(M,J){let K,Z;return Mg(M)?(K=e.getRecordMatcher(M),Z=J):Z=M,e.addRoute(Z,K)}function S(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function N(){return e.getRoutes().map(M=>M.record)}function k(M){return!!e.getRecordMatcher(M)}function U(M,J){if(J=Ae({},J||l.value),typeof M=="string"){const C=tl(n,M,J.path),x=e.resolve({path:C.path},J),F=s.createHref(C.fullPath);return Ae(C,x,{params:m(x.params),hash:Ki(C.hash),redirectedFrom:void 0,href:F})}let K;if(M.path!=null)K=Ae({},M,{path:tl(n,M.path,J.path).path});else{const C=Ae({},M.params);for(const x in C)C[x]==null&&delete C[x];K=Ae({},M,{params:p(C)}),J.params=p(J.params)}const Z=e.resolve(K,J),pe=M.hash||"";Z.params=f(m(Z.params));const I=Zv(r,Ae({},M,{hash:zv(pe),path:Z.path})),w=s.createHref(I);return Ae({fullPath:I,hash:pe,query:r===_d?pw(M.query):M.query||{}},Z,{redirectedFrom:void 0,href:w})}function B(M){return typeof M=="string"?tl(n,M,l.value.path):Ae({},M)}function H(M,J){if(u!==M)return ks(Ue.NAVIGATION_CANCELLED,{from:J,to:M})}function G(M){return R(M)}function te(M){return G(Ae(B(M),{replace:!0}))}function ne(M,J){const K=M.matched[M.matched.length-1];if(K&&K.redirect){const{redirect:Z}=K;let pe=typeof Z=="function"?Z(M,J):Z;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=B(pe):{path:pe},pe.params={}),Ae({query:M.query,hash:M.hash,params:pe.path!=null?{}:M.params},pe)}}function R(M,J){const K=u=U(M),Z=l.value,pe=M.state,I=M.force,w=M.replace===!0,C=ne(K,Z);if(C)return R(Ae(B(C),{state:typeof C=="object"?Ae({},pe,C.state):pe,force:I,replace:w}),J||K);const x=K;x.redirectedFrom=J;let F;return!I&&ew(r,Z,K)&&(F=ks(Ue.NAVIGATION_DUPLICATED,{to:x,from:Z}),Dt(Z,Z,!0,!1)),(F?Promise.resolve(F):b(x,Z)).catch(V=>Cn(V)?Cn(V,Ue.NAVIGATION_GUARD_REDIRECT)?V:ln(V):ye(V,x,Z)).then(V=>{if(V){if(Cn(V,Ue.NAVIGATION_GUARD_REDIRECT))return R(Ae({replace:w},B(V.to),{state:typeof V.to=="object"?Ae({},pe,V.to.state):pe,force:I}),J||x)}else V=v(x,Z,!0,w,pe);return A(x,Z,V),V})}function E(M,J){const K=H(M,J);return K?Promise.reject(K):Promise.resolve()}function y(M){const J=Yt.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function b(M,J){let K;const[Z,pe,I]=gw(M,J);K=rl(Z.reverse(),"beforeRouteLeave",M,J);for(const C of Z)C.leaveGuards.forEach(x=>{K.push(ir(x,M,J))});const w=E.bind(null,M,J);return K.push(w),lt(K).then(()=>{K=[];for(const C of i.list())K.push(ir(C,M,J));return K.push(w),lt(K)}).then(()=>{K=rl(pe,"beforeRouteUpdate",M,J);for(const C of pe)C.updateGuards.forEach(x=>{K.push(ir(x,M,J))});return K.push(w),lt(K)}).then(()=>{K=[];for(const C of I)if(C.beforeEnter)if(rn(C.beforeEnter))for(const x of C.beforeEnter)K.push(ir(x,M,J));else K.push(ir(C.beforeEnter,M,J));return K.push(w),lt(K)}).then(()=>(M.matched.forEach(C=>C.enterCallbacks={}),K=rl(I,"beforeRouteEnter",M,J,y),K.push(w),lt(K))).then(()=>{K=[];for(const C of o.list())K.push(ir(C,M,J));return K.push(w),lt(K)}).catch(C=>Cn(C,Ue.NAVIGATION_CANCELLED)?C:Promise.reject(C))}function A(M,J,K){c.list().forEach(Z=>y(()=>Z(M,J,K)))}function v(M,J,K,Z,pe){const I=H(M,J);if(I)return I;const w=J===tr,C=ms?history.state:{};K&&(Z||w?s.replace(M.fullPath,Ae({scroll:w&&C&&C.scroll},pe)):s.push(M.fullPath,pe)),l.value=M,Dt(M,J,K,w),ln()}let T;function Te(){T||(T=s.listen((M,J,K)=>{if(!Jt.listening)return;const Z=U(M),pe=ne(Z,Jt.currentRoute.value);if(pe){R(Ae(pe,{replace:!0,force:!0}),Z).catch(Vi);return}u=Z;const I=l.value;ms&&cw(gd(I.fullPath,K.delta),Ka()),b(Z,I).catch(w=>Cn(w,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_CANCELLED)?w:Cn(w,Ue.NAVIGATION_GUARD_REDIRECT)?(R(Ae(B(w.to),{force:!0}),Z).then(C=>{Cn(C,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&!K.delta&&K.type===Ol.pop&&s.go(-1,!1)}).catch(Vi),Promise.reject()):(K.delta&&s.go(-K.delta,!1),ye(w,Z,I))).then(w=>{w=w||v(Z,I,!1),w&&(K.delta&&!Cn(w,Ue.NAVIGATION_CANCELLED)?s.go(-K.delta,!1):K.type===Ol.pop&&Cn(w,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(Z,I,w)}).catch(Vi)}))}let $e=mi(),xe=mi(),we;function ye(M,J,K){ln(M);const Z=xe.list();return Z.length?Z.forEach(pe=>pe(M,J,K)):console.error(M),Promise.reject(M)}function Rt(){return we&&l.value!==tr?Promise.resolve():new Promise((M,J)=>{$e.add([M,J])})}function ln(M){return we||(we=!M,Te(),$e.list().forEach(([J,K])=>M?K(M):J()),$e.reset()),M}function Dt(M,J,K,Z){const{scrollBehavior:pe}=t;if(!ms||!pe)return Promise.resolve();const I=!K&&lw(gd(M.fullPath,0))||(Z||!K)&&history.state&&history.state.scroll||null;return qm().then(()=>pe(M,J,I)).then(w=>w&&aw(w)).catch(w=>ye(w,M,J))}const rt=M=>s.go(M);let Rn;const Yt=new Set,Jt={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:N,resolve:U,options:t,push:G,replace:te,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:xe.add,isReady:Rt,install(M){M.component("RouterLink",yi),M.component("RouterView",Bg),M.config.globalProperties.$router=Jt,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>We(l)}),ms&&!Rn&&l.value===tr&&(Rn=!0,G(s.location).catch(Z=>{}));const J={};for(const Z in tr)Object.defineProperty(J,Z,{get:()=>l.value[Z],enumerable:!0});M.provide(Qa,Jt),M.provide(Vu,Fm(J)),M.provide(xl,l);const K=M.unmount;Yt.add(M),M.unmount=function(){Yt.delete(M),Yt.size<1&&(u=tr,T&&T(),T=null,l.value=tr,Rn=!1,we=!1),K()}}};function lt(M){return M.reduce((J,K)=>J.then(()=>y(K)),Promise.resolve())}return Jt}function jw(){return tn(Qa)}function qw(t){return tn(Vu)}const $w=()=>{};var Pd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Hw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Gw;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ww=function(t){const e=jg(t);return qg.encodeByteArray(e,!0)},pa=function(t){return Ww(t).replace(/\./g,"")},$g=function(t){try{return qg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=()=>zw().__FIREBASE_DEFAULTS__,Qw=()=>{if(typeof process>"u"||typeof Pd>"u")return;const t=Pd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$g(t[1]);return e&&JSON.parse(e)},Ya=()=>{try{return $w()||Kw()||Qw()||Yw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hg=t=>Ya()?.emulatorHosts?.[t],Jw=t=>{const e=Hg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gg=()=>Ya()?.config,Wg=t=>Ya()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zg(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pa(JSON.stringify(n)),pa(JSON.stringify(o)),""].join(".")}const Oi={};function eA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Oi))Oi[e]?t.emulator.push(e):t.prod.push(e);return t}function tA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Nd=!1;function Kg(t,e){if(typeof window>"u"||typeof document>"u"||!$s(window.location.host)||Oi[t]===e||Oi[t]||Nd)return;Oi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=eA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Nd=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=tA(r),_=n("text"),S=document.getElementById(_)||document.createElement("span"),N=n("learnmore"),k=document.getElementById(N)||document.createElement("a"),U=n("preprendIcon"),B=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;c(H),f(k,N);const G=u();l(B,U),H.append(B,S,k,G),document.body.appendChild(H)}i?(S.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function rA(){const t=Ya()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ou(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oA(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aA(){return!rA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mu(){try{return typeof indexedDB=="object"}catch{return!1}}function xu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function Qg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cA,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?lA(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new cn(s,c,r)}}function lA(t,e){return t.replace(uA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const uA=/\{\$([^}]+)}/g;function hA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Dd(i)&&Dd(o)){if(!Bn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fA(t,e){const n=new dA(t,e);return n.subscribe.bind(n)}class dA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sl),s.error===void 0&&(s.error=sl),s.complete===void 0&&(s.complete=sl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=1e3,gA=2,_A=14400*1e3,yA=.5;function kd(t,e=mA,n=gA){const r=e*Math.pow(n,t),s=Math.round(yA*r*(Math.random()-.5)*2);return Math.min(_A,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IA(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TA(t){return t===Br?void 0:t}function IA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new EA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const wA={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},AA=me.INFO,RA={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},bA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=RA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ja{constructor(e){this.name=e,this._logLevel=AA,this._logHandler=bA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const SA=(t,e)=>e.some(n=>t instanceof n);let Vd,Od;function CA(){return Vd||(Vd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PA(){return Od||(Od=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yg=new WeakMap,Ll=new WeakMap,Jg=new WeakMap,il=new WeakMap,Lu=new WeakMap;function NA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yg.set(n,t)}).catch(()=>{}),Lu.set(e,t),e}function DA(t){if(Ll.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ll.set(t,e)}let Fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ll.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kA(t){Fl=t(Fl)}function VA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ol(this),e,...n);return Jg.set(r,e.sort?e.sort():[e]),dr(r)}:PA().includes(t)?function(...e){return t.apply(ol(this),e),dr(Yg.get(this))}:function(...e){return dr(t.apply(ol(this),e))}}function OA(t){return typeof t=="function"?VA(t):(t instanceof IDBTransaction&&DA(t),SA(t,CA())?new Proxy(t,Fl):t)}function dr(t){if(t instanceof IDBRequest)return NA(t);if(il.has(t))return il.get(t);const e=OA(t);return e!==t&&(il.set(t,e),Lu.set(e,t)),e}const ol=t=>Lu.get(t);function Xg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const MA=["get","getKey","getAll","getAllKeys","count"],xA=["put","add","delete","clear"],al=new Map;function Md(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(al.get(e))return al.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||MA.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return al.set(e,i),i}kA(t=>({...t,get:(e,n,r)=>Md(e,n)||t.get(e,n,r),has:(e,n)=>!!Md(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FA(t){return t.getComponent()?.type==="VERSION"}const Ul="@firebase/app",xd="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Ja("@firebase/app"),UA="@firebase/app-compat",BA="@firebase/analytics-compat",jA="@firebase/analytics",qA="@firebase/app-check-compat",$A="@firebase/app-check",HA="@firebase/auth",GA="@firebase/auth-compat",WA="@firebase/database",zA="@firebase/data-connect",KA="@firebase/database-compat",QA="@firebase/functions",YA="@firebase/functions-compat",JA="@firebase/installations",XA="@firebase/installations-compat",ZA="@firebase/messaging",eR="@firebase/messaging-compat",tR="@firebase/performance",nR="@firebase/performance-compat",rR="@firebase/remote-config",sR="@firebase/remote-config-compat",iR="@firebase/storage",oR="@firebase/storage-compat",aR="@firebase/firestore",cR="@firebase/ai",lR="@firebase/firestore-compat",uR="firebase",hR="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="[DEFAULT]",fR={[Ul]:"fire-core",[UA]:"fire-core-compat",[jA]:"fire-analytics",[BA]:"fire-analytics-compat",[$A]:"fire-app-check",[qA]:"fire-app-check-compat",[HA]:"fire-auth",[GA]:"fire-auth-compat",[WA]:"fire-rtdb",[zA]:"fire-data-connect",[KA]:"fire-rtdb-compat",[QA]:"fire-fn",[YA]:"fire-fn-compat",[JA]:"fire-iid",[XA]:"fire-iid-compat",[ZA]:"fire-fcm",[eR]:"fire-fcm-compat",[tR]:"fire-perf",[nR]:"fire-perf-compat",[rR]:"fire-rc",[sR]:"fire-rc-compat",[iR]:"fire-gcs",[oR]:"fire-gcs-compat",[aR]:"fire-fst",[lR]:"fire-fst-compat",[cR]:"fire-vertex","fire-js":"fire-js",[uR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Map,dR=new Map,jl=new Map;function Ld(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(jl.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;jl.set(e,t);for(const n of ma.values())Ld(n,t);for(const n of dR.values())Ld(n,t);return!0}function rs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $t(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new ns("app","Firebase",pR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=hR;function Zg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Bl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw pr.create("bad-app-name",{appName:String(s)});if(n||(n=Gg()),!n)throw pr.create("no-options");const i=ma.get(s);if(i){if(Bn(n,i.options)&&Bn(r,i.config))return i;throw pr.create("duplicate-app",{appName:s})}const o=new vA(s);for(const l of jl.values())o.addComponent(l);const c=new mR(n,r,o);return ma.set(s,c),c}function Fu(t=Bl){const e=ma.get(t);if(!e&&t===Bl&&Gg())return Zg();if(!e)throw pr.create("no-app",{appName:t});return e}function zt(t,e,n){let r=fR[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(o.join(" "));return}wn(new sn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="firebase-heartbeat-database",_R=1,Qi="firebase-heartbeat-store";let cl=null;function e_(){return cl||(cl=Xg(gR,_R,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),cl}async function yR(t){try{const n=(await e_()).transaction(Qi),r=await n.objectStore(Qi).get(t_(t));return await n.done,r}catch(e){if(e instanceof cn)jn.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e?.message});jn.warn(n.message)}}}async function Fd(t,e){try{const r=(await e_()).transaction(Qi,"readwrite");await r.objectStore(Qi).put(e,t_(t)),await r.done}catch(n){if(n instanceof cn)jn.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n?.message});jn.warn(r.message)}}}function t_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=1024,TR=30;class IR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ud();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>TR){const s=AR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){jn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ud(),{heartbeatsToSend:n,unsentEntries:r}=vR(this._heartbeatsCache.heartbeats),s=pa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return jn.warn(e),""}}}function Ud(){return new Date().toISOString().substring(0,10)}function vR(t,e=ER){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Bd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mu()?xu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yR(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bd(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}function AR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t){wn(new sn("platform-logger",e=>new LA(e),"PRIVATE")),wn(new sn("heartbeat",e=>new IR(e),"PRIVATE")),zt(Ul,xd,t),zt(Ul,xd,"esm2020"),zt("fire-js","")}RR("");var bR="firebase",SR="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(bR,SR,"app");var jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,n_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,E){function y(){}y.prototype=E.prototype,R.F=E.prototype,R.prototype=new y,R.prototype.constructor=R,R.D=function(b,A,v){for(var T=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)T[Te-2]=arguments[Te];return E.prototype[A].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,E,y){y||(y=0);const b=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)b[A]=E.charCodeAt(y++)|E.charCodeAt(y++)<<8|E.charCodeAt(y++)<<16|E.charCodeAt(y++)<<24;else for(A=0;A<16;++A)b[A]=E[y++]|E[y++]<<8|E[y++]<<16|E[y++]<<24;E=R.g[0],y=R.g[1],A=R.g[2];let v=R.g[3],T;T=E+(v^y&(A^v))+b[0]+3614090360&4294967295,E=y+(T<<7&4294967295|T>>>25),T=v+(A^E&(y^A))+b[1]+3905402710&4294967295,v=E+(T<<12&4294967295|T>>>20),T=A+(y^v&(E^y))+b[2]+606105819&4294967295,A=v+(T<<17&4294967295|T>>>15),T=y+(E^A&(v^E))+b[3]+3250441966&4294967295,y=A+(T<<22&4294967295|T>>>10),T=E+(v^y&(A^v))+b[4]+4118548399&4294967295,E=y+(T<<7&4294967295|T>>>25),T=v+(A^E&(y^A))+b[5]+1200080426&4294967295,v=E+(T<<12&4294967295|T>>>20),T=A+(y^v&(E^y))+b[6]+2821735955&4294967295,A=v+(T<<17&4294967295|T>>>15),T=y+(E^A&(v^E))+b[7]+4249261313&4294967295,y=A+(T<<22&4294967295|T>>>10),T=E+(v^y&(A^v))+b[8]+1770035416&4294967295,E=y+(T<<7&4294967295|T>>>25),T=v+(A^E&(y^A))+b[9]+2336552879&4294967295,v=E+(T<<12&4294967295|T>>>20),T=A+(y^v&(E^y))+b[10]+4294925233&4294967295,A=v+(T<<17&4294967295|T>>>15),T=y+(E^A&(v^E))+b[11]+2304563134&4294967295,y=A+(T<<22&4294967295|T>>>10),T=E+(v^y&(A^v))+b[12]+1804603682&4294967295,E=y+(T<<7&4294967295|T>>>25),T=v+(A^E&(y^A))+b[13]+4254626195&4294967295,v=E+(T<<12&4294967295|T>>>20),T=A+(y^v&(E^y))+b[14]+2792965006&4294967295,A=v+(T<<17&4294967295|T>>>15),T=y+(E^A&(v^E))+b[15]+1236535329&4294967295,y=A+(T<<22&4294967295|T>>>10),T=E+(A^v&(y^A))+b[1]+4129170786&4294967295,E=y+(T<<5&4294967295|T>>>27),T=v+(y^A&(E^y))+b[6]+3225465664&4294967295,v=E+(T<<9&4294967295|T>>>23),T=A+(E^y&(v^E))+b[11]+643717713&4294967295,A=v+(T<<14&4294967295|T>>>18),T=y+(v^E&(A^v))+b[0]+3921069994&4294967295,y=A+(T<<20&4294967295|T>>>12),T=E+(A^v&(y^A))+b[5]+3593408605&4294967295,E=y+(T<<5&4294967295|T>>>27),T=v+(y^A&(E^y))+b[10]+38016083&4294967295,v=E+(T<<9&4294967295|T>>>23),T=A+(E^y&(v^E))+b[15]+3634488961&4294967295,A=v+(T<<14&4294967295|T>>>18),T=y+(v^E&(A^v))+b[4]+3889429448&4294967295,y=A+(T<<20&4294967295|T>>>12),T=E+(A^v&(y^A))+b[9]+568446438&4294967295,E=y+(T<<5&4294967295|T>>>27),T=v+(y^A&(E^y))+b[14]+3275163606&4294967295,v=E+(T<<9&4294967295|T>>>23),T=A+(E^y&(v^E))+b[3]+4107603335&4294967295,A=v+(T<<14&4294967295|T>>>18),T=y+(v^E&(A^v))+b[8]+1163531501&4294967295,y=A+(T<<20&4294967295|T>>>12),T=E+(A^v&(y^A))+b[13]+2850285829&4294967295,E=y+(T<<5&4294967295|T>>>27),T=v+(y^A&(E^y))+b[2]+4243563512&4294967295,v=E+(T<<9&4294967295|T>>>23),T=A+(E^y&(v^E))+b[7]+1735328473&4294967295,A=v+(T<<14&4294967295|T>>>18),T=y+(v^E&(A^v))+b[12]+2368359562&4294967295,y=A+(T<<20&4294967295|T>>>12),T=E+(y^A^v)+b[5]+4294588738&4294967295,E=y+(T<<4&4294967295|T>>>28),T=v+(E^y^A)+b[8]+2272392833&4294967295,v=E+(T<<11&4294967295|T>>>21),T=A+(v^E^y)+b[11]+1839030562&4294967295,A=v+(T<<16&4294967295|T>>>16),T=y+(A^v^E)+b[14]+4259657740&4294967295,y=A+(T<<23&4294967295|T>>>9),T=E+(y^A^v)+b[1]+2763975236&4294967295,E=y+(T<<4&4294967295|T>>>28),T=v+(E^y^A)+b[4]+1272893353&4294967295,v=E+(T<<11&4294967295|T>>>21),T=A+(v^E^y)+b[7]+4139469664&4294967295,A=v+(T<<16&4294967295|T>>>16),T=y+(A^v^E)+b[10]+3200236656&4294967295,y=A+(T<<23&4294967295|T>>>9),T=E+(y^A^v)+b[13]+681279174&4294967295,E=y+(T<<4&4294967295|T>>>28),T=v+(E^y^A)+b[0]+3936430074&4294967295,v=E+(T<<11&4294967295|T>>>21),T=A+(v^E^y)+b[3]+3572445317&4294967295,A=v+(T<<16&4294967295|T>>>16),T=y+(A^v^E)+b[6]+76029189&4294967295,y=A+(T<<23&4294967295|T>>>9),T=E+(y^A^v)+b[9]+3654602809&4294967295,E=y+(T<<4&4294967295|T>>>28),T=v+(E^y^A)+b[12]+3873151461&4294967295,v=E+(T<<11&4294967295|T>>>21),T=A+(v^E^y)+b[15]+530742520&4294967295,A=v+(T<<16&4294967295|T>>>16),T=y+(A^v^E)+b[2]+3299628645&4294967295,y=A+(T<<23&4294967295|T>>>9),T=E+(A^(y|~v))+b[0]+4096336452&4294967295,E=y+(T<<6&4294967295|T>>>26),T=v+(y^(E|~A))+b[7]+1126891415&4294967295,v=E+(T<<10&4294967295|T>>>22),T=A+(E^(v|~y))+b[14]+2878612391&4294967295,A=v+(T<<15&4294967295|T>>>17),T=y+(v^(A|~E))+b[5]+4237533241&4294967295,y=A+(T<<21&4294967295|T>>>11),T=E+(A^(y|~v))+b[12]+1700485571&4294967295,E=y+(T<<6&4294967295|T>>>26),T=v+(y^(E|~A))+b[3]+2399980690&4294967295,v=E+(T<<10&4294967295|T>>>22),T=A+(E^(v|~y))+b[10]+4293915773&4294967295,A=v+(T<<15&4294967295|T>>>17),T=y+(v^(A|~E))+b[1]+2240044497&4294967295,y=A+(T<<21&4294967295|T>>>11),T=E+(A^(y|~v))+b[8]+1873313359&4294967295,E=y+(T<<6&4294967295|T>>>26),T=v+(y^(E|~A))+b[15]+4264355552&4294967295,v=E+(T<<10&4294967295|T>>>22),T=A+(E^(v|~y))+b[6]+2734768916&4294967295,A=v+(T<<15&4294967295|T>>>17),T=y+(v^(A|~E))+b[13]+1309151649&4294967295,y=A+(T<<21&4294967295|T>>>11),T=E+(A^(y|~v))+b[4]+4149444226&4294967295,E=y+(T<<6&4294967295|T>>>26),T=v+(y^(E|~A))+b[11]+3174756917&4294967295,v=E+(T<<10&4294967295|T>>>22),T=A+(E^(v|~y))+b[2]+718787259&4294967295,A=v+(T<<15&4294967295|T>>>17),T=y+(v^(A|~E))+b[9]+3951481745&4294967295,R.g[0]=R.g[0]+E&4294967295,R.g[1]=R.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,R.g[2]=R.g[2]+A&4294967295,R.g[3]=R.g[3]+v&4294967295}r.prototype.v=function(R,E){E===void 0&&(E=R.length);const y=E-this.blockSize,b=this.C;let A=this.h,v=0;for(;v<E;){if(A==0)for(;v<=y;)s(this,R,v),v+=this.blockSize;if(typeof R=="string"){for(;v<E;)if(b[A++]=R.charCodeAt(v++),A==this.blockSize){s(this,b),A=0;break}}else for(;v<E;)if(b[A++]=R[v++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=E},r.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var E=1;E<R.length-8;++E)R[E]=0;E=this.o*8;for(var y=R.length-8;y<R.length;++y)R[y]=E&255,E/=256;for(this.v(R),R=Array(16),E=0,y=0;y<4;++y)for(let b=0;b<32;b+=8)R[E++]=this.g[y]>>>b&255;return R};function i(R,E){var y=c;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=E(R)}function o(R,E){this.h=E;const y=[];let b=!0;for(let A=R.length-1;A>=0;A--){const v=R[A]|0;b&&v==E||(y[A]=v,b=!1)}this.g=y}var c={};function l(R){return-128<=R&&R<128?i(R,function(E){return new o([E|0],E<0?-1:0)}):new o([R|0],R<0?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(R<0)return k(u(-R));const E=[];let y=1;for(let b=0;R>=y;b++)E[b]=R/y|0,y*=4294967296;return new o(E,0)}function f(R,E){if(R.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R.charAt(0)=="-")return k(f(R.substring(1),E));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(E,8));let b=p;for(let v=0;v<R.length;v+=8){var A=Math.min(8,R.length-v);const T=parseInt(R.substring(v,v+A),E);A<8?(A=u(Math.pow(E,A)),b=b.j(A).add(u(T))):(b=b.j(y),b=b.add(u(T)))}return b}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-k(this).m();let R=0,E=1;for(let y=0;y<this.g.length;y++){const b=this.i(y);R+=(b>=0?b:4294967296+b)*E,E*=4294967296}return R},t.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(S(this))return"0";if(N(this))return"-"+k(this).toString(R);const E=u(Math.pow(R,6));var y=this;let b="";for(;;){const A=G(y,E).g;y=U(y,A.j(E));let v=((y.g.length>0?y.g[0]:y.h)>>>0).toString(R);if(y=A,S(y))return v+b;for(;v.length<6;)v="0"+v;b=v+b}},t.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function S(R){if(R.h!=0)return!1;for(let E=0;E<R.g.length;E++)if(R.g[E]!=0)return!1;return!0}function N(R){return R.h==-1}t.l=function(R){return R=U(this,R),N(R)?-1:S(R)?0:1};function k(R){const E=R.g.length,y=[];for(let b=0;b<E;b++)y[b]=~R.g[b];return new o(y,~R.h).add(m)}t.abs=function(){return N(this)?k(this):this},t.add=function(R){const E=Math.max(this.g.length,R.g.length),y=[];let b=0;for(let A=0;A<=E;A++){let v=b+(this.i(A)&65535)+(R.i(A)&65535),T=(v>>>16)+(this.i(A)>>>16)+(R.i(A)>>>16);b=T>>>16,v&=65535,T&=65535,y[A]=T<<16|v}return new o(y,y[y.length-1]&-2147483648?-1:0)};function U(R,E){return R.add(k(E))}t.j=function(R){if(S(this)||S(R))return p;if(N(this))return N(R)?k(this).j(k(R)):k(k(this).j(R));if(N(R))return k(this.j(k(R)));if(this.l(_)<0&&R.l(_)<0)return u(this.m()*R.m());const E=this.g.length+R.g.length,y=[];for(var b=0;b<2*E;b++)y[b]=0;for(b=0;b<this.g.length;b++)for(let A=0;A<R.g.length;A++){const v=this.i(b)>>>16,T=this.i(b)&65535,Te=R.i(A)>>>16,$e=R.i(A)&65535;y[2*b+2*A]+=T*$e,B(y,2*b+2*A),y[2*b+2*A+1]+=v*$e,B(y,2*b+2*A+1),y[2*b+2*A+1]+=T*Te,B(y,2*b+2*A+1),y[2*b+2*A+2]+=v*Te,B(y,2*b+2*A+2)}for(R=0;R<E;R++)y[R]=y[2*R+1]<<16|y[2*R];for(R=E;R<2*E;R++)y[R]=0;return new o(y,0)};function B(R,E){for(;(R[E]&65535)!=R[E];)R[E+1]+=R[E]>>>16,R[E]&=65535,E++}function H(R,E){this.g=R,this.h=E}function G(R,E){if(S(E))throw Error("division by zero");if(S(R))return new H(p,p);if(N(R))return E=G(k(R),E),new H(k(E.g),k(E.h));if(N(E))return E=G(R,k(E)),new H(k(E.g),E.h);if(R.g.length>30){if(N(R)||N(E))throw Error("slowDivide_ only works with positive integers.");for(var y=m,b=E;b.l(R)<=0;)y=te(y),b=te(b);var A=ne(y,1),v=ne(b,1);for(b=ne(b,2),y=ne(y,2);!S(b);){var T=v.add(b);T.l(R)<=0&&(A=A.add(y),v=T),b=ne(b,1),y=ne(y,1)}return E=U(R,A.j(E)),new H(A,E)}for(A=p;R.l(E)>=0;){for(y=Math.max(1,Math.floor(R.m()/E.m())),b=Math.ceil(Math.log(y)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),v=u(y),T=v.j(E);N(T)||T.l(R)>0;)y-=b,v=u(y),T=v.j(E);S(v)&&(v=m),A=A.add(v),R=U(R,T)}return new H(A,R)}t.B=function(R){return G(this,R).h},t.and=function(R){const E=Math.max(this.g.length,R.g.length),y=[];for(let b=0;b<E;b++)y[b]=this.i(b)&R.i(b);return new o(y,this.h&R.h)},t.or=function(R){const E=Math.max(this.g.length,R.g.length),y=[];for(let b=0;b<E;b++)y[b]=this.i(b)|R.i(b);return new o(y,this.h|R.h)},t.xor=function(R){const E=Math.max(this.g.length,R.g.length),y=[];for(let b=0;b<E;b++)y[b]=this.i(b)^R.i(b);return new o(y,this.h^R.h)};function te(R){const E=R.g.length+1,y=[];for(let b=0;b<E;b++)y[b]=R.i(b)<<1|R.i(b-1)>>>31;return new o(y,R.h)}function ne(R,E){const y=E>>5;E%=32;const b=R.g.length-y,A=[];for(let v=0;v<b;v++)A[v]=E>0?R.i(v+y)>>>E|R.i(v+y+1)<<32-E:R.i(v+y);return new o(A,R.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,n_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,mr=o}).apply(typeof jd<"u"?jd:typeof self<"u"?self:typeof window<"u"?window:{});var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var r_,Ii,s_,Ko,ql,i_,o_,a_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mo=="object"&&Mo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,P,D){for(var W=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)W[fe-2]=arguments[fe];return h.prototype[P].apply(g,W)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function S(a,h){for(let g=1;g<arguments.length;g++){const P=arguments[g];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const D=P.length||0;a.length=d+D;for(let W=0;W<D;W++)a[d+W]=P[W]}else a.push(P)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function U(){var a=R;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class B{constructor(){this.h=this.g=null}add(h,d){const g=H.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var H=new N(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let te,ne=!1,R=new B,E=()=>{const a=Promise.resolve(void 0);te=()=>{a.then(y)}};function y(){for(var a;a=U();){try{a.h.call(a.g)}catch(d){k(d)}var h=H;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ne=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function Te(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Te,A),Te.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Te.Z.h.call(this)},Te.prototype.h=function(){Te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $e="closure_listenable_"+(Math.random()*1e6|0),xe=0;function we(a,h,d,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=P,this.key=++xe,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Rt(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function ln(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Dt(a){const h={};for(const d in a)h[d]=a[d];return h}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rn(a,h){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let D=0;D<rt.length;D++)d=rt[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Yt(a){this.src=a,this.g={},this.h=0}Yt.prototype.add=function(a,h,d,g,P){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const W=lt(a,h,g,P);return W>-1?(h=a[W],d||(h.fa=!1)):(h=new we(h,this.src,D,!!g,P),h.fa=d,a.push(h)),h};function Jt(a,h){const d=h.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,h,void 0),D;(D=P>=0)&&Array.prototype.splice.call(g,P,1),D&&(ye(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function lt(a,h,d,g){for(let P=0;P<a.length;++P){const D=a[P];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==g)return P}return-1}var M="closure_lm_"+(Math.random()*1e6|0),J={};function K(a,h,d,g,P){if(Array.isArray(h)){for(let D=0;D<h.length;D++)K(a,h[D],d,g,P);return null}return d=z(d),a&&a[$e]?a.J(h,d,c(g)?!!g.capture:!1,P):Z(a,h,d,!1,g,P)}function Z(a,h,d,g,P,D){if(!h)throw Error("Invalid event type");const W=c(P)?!!P.capture:!!P;let fe=F(a);if(fe||(a[M]=fe=new Yt(a)),d=fe.add(h,d,g,W,D),d.proxy)return d;if(g=pe(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)v||(P=W),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(C(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function pe(){function a(d){return h.call(a.src,a.listener,d)}const h=x;return a}function I(a,h,d,g,P){if(Array.isArray(h))for(var D=0;D<h.length;D++)I(a,h[D],d,g,P);else g=c(g)?!!g.capture:!!g,d=z(d),a&&a[$e]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=lt(h,d,g,P),d>-1&&(ye(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=F(a))&&(h=a.g[h.toString()],a=-1,h&&(a=lt(h,d,g,P)),(d=a>-1?h[a]:null)&&w(d))}function w(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[$e])Jt(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(C(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=F(h))?(Jt(d,a),d.h==0&&(d.src=null,h[M]=null)):ye(a)}}}function C(a){return a in J?J[a]:J[a]="on"+a}function x(a,h){if(a.da)a=!0;else{h=new Te(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&w(a),a=d.call(g,h)}return a}function F(a){return a=a[M],a instanceof Yt?a:null}var V="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(a){return typeof a=="function"?a:(a[V]||(a[V]=function(h){return a.handleEvent(h)}),a[V])}function $(){b.call(this),this.i=new Yt(this),this.M=this,this.G=null}p($,b),$.prototype[$e]=!0,$.prototype.removeEventListener=function(a,h,d,g){I(this,a,h,d,g)};function j(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var P=h;h=new A(g,a),Rn(h,P)}P=!0;let D,W;if(d)for(W=d.length-1;W>=0;W--)D=h.g=d[W],P=q(D,g,!0,h)&&P;if(D=h.g=a,P=q(D,g,!0,h)&&P,P=q(D,g,!1,h)&&P,d)for(W=0;W<d.length;W++)D=h.g=d[W],P=q(D,g,!1,h)&&P}$.prototype.N=function(){if($.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)ye(d[g]);delete a.g[h],a.h--}}this.G=null},$.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},$.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function q(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let D=0;D<h.length;++D){const W=h[D];if(W&&!W.da&&W.capture==d){const fe=W.listener,Ye=W.ha||W.src;W.fa&&Jt(a.i,W),P=fe.call(Ye,g)!==!1&&P}}return P&&!g.defaultPrevented}function se(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Y(a){a.g=se(()=>{a.g=null,a.i&&(a.i=!1,Y(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class re extends b{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ie(a){b.call(this),this.h=a,this.g={}}p(ie,b);var de=[];function Se(a){Rt(a.g,function(h,d){this.g.hasOwnProperty(d)&&w(h)},a),a.g={}}ie.prototype.N=function(){ie.Z.N.call(this),Se(this)},ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ie=o.JSON.stringify,ut=o.JSON.parse,ht=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function kt(){}function Vt(){}var Xt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function as(){A.call(this,"d")}p(as,A);function st(){A.call(this,"c")}p(st,A);var Ze={},Xs=null;function Nr(){return Xs=Xs||new $}Ze.Ia="serverreachability";function Lh(a){A.call(this,Ze.Ia,a)}p(Lh,A);function Zs(a){const h=Nr();j(h,new Lh(h))}Ze.STAT_EVENT="statevent";function Fh(a,h){A.call(this,Ze.STAT_EVENT,a),this.stat=h}p(Fh,A);function Et(a){const h=Nr();j(h,new Fh(h,a))}Ze.Ja="timingevent";function Uh(a,h){A.call(this,Ze.Ja,a),this.size=h}p(Uh,A);function ei(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ti(){this.g=!0}ti.prototype.ua=function(){this.g=!1};function qE(a,h,d,g,P,D){a.info(function(){if(a.g)if(D){var W="",fe=D.split("&");for(let Pe=0;Pe<fe.length;Pe++){var Ye=fe[Pe].split("=");if(Ye.length>1){const et=Ye[0];Ye=Ye[1];const hn=et.split("_");W=hn.length>=2&&hn[1]=="type"?W+(et+"="+Ye+"&"):W+(et+"=redacted&")}}}else W=null;else W=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+d+`
`+W})}function $E(a,h,d,g,P,D,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+d+`
`+D+" "+W})}function cs(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+GE(a,d)+(g?" "+g:"")})}function HE(a,h){a.info(function(){return"TIMEOUT: "+h})}ti.prototype.info=function(){};function GE(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let W=1;W<g.length;W++)g[W]=""}}}}return Ie(D)}catch{return h}}var To={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Bh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},jh;function bc(){}p(bc,kt),bc.prototype.g=function(){return new XMLHttpRequest},jh=new bc;function ni(a){return encodeURIComponent(String(a))}function WE(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Kn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ie(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qh}function qh(){this.i=null,this.g="",this.h=!1}var $h={},Sc={};function Cc(a,h,d){a.M=1,a.A=vo(un(h)),a.u=d,a.R=!0,Hh(a,null)}function Hh(a,h){a.F=Date.now(),Io(a),a.B=un(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),rf(d.i,"t",g),a.C=0,d=a.j.L,a.h=new qh,a.g=vf(a.j,d?h:null,!a.u),a.P>0&&(a.O=new re(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(de[0]=P.toString()),P=de);for(let D=0;D<P.length;D++){const W=K(d,P[D],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.J?Dt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Zs(),qE(a.i,a.v,a.B,a.l,a.S,a.u)}Kn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Jn(a)==3?h.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const fe=Jn(this.g),Ye=this.g.ya(),Pe=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||hf(this.g)))){this.K||fe!=4||Ye==7||(Ye==8||Pe<=0?Zs(3):Zs(2)),Pc(this);var h=this.g.ca();this.X=h;var d=zE(this);if(this.o=h==200,$E(this.i,this.v,this.B,this.l,this.S,fe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var D=g;break t}}D=null}if(a=D)cs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Nc(this,a);else{this.o=!1,this.m=3,Et(12),Dr(this),ri(this);break e}}if(this.R){a=!0;let et;for(;!this.K&&this.C<d.length;)if(et=KE(this,d),et==Sc){fe==4&&(this.m=4,Et(14),a=!1),cs(this.i,this.l,null,"[Incomplete Response]");break}else if(et==$h){this.m=4,Et(15),cs(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else cs(this.i,this.l,et,null),Nc(this,et);if(Gh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||d.length!=0||this.h.h||(this.m=1,Et(16),a=!1),this.o=this.o&&a,!a)cs(this.i,this.l,d,"[Invalid Chunked Response]"),Dr(this),ri(this);else if(d.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Fc(W),W.P=!0,Et(11))}}else cs(this.i,this.l,d,null),Nc(this,d);fe==4&&Dr(this),this.o&&!this.K&&(fe==4?yf(this.j,this):(this.o=!1,Io(this)))}else cT(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),Dr(this),ri(this)}}}catch{}finally{}};function zE(a){if(!Gh(a))return a.g.la();const h=hf(a.g);if(h==="")return"";let d="";const g=h.length,P=Jn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Dr(a),ri(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<g;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(P&&D==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Gh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function KE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Sc:(d=Number(h.substring(d,g)),isNaN(d)?$h:(g+=1,g+d>h.length?Sc:(h=h.slice(g,g+d),a.C=g+d,h)))}Kn.prototype.cancel=function(){this.K=!0,Dr(this)};function Io(a){a.T=Date.now()+a.H,Wh(a,a.H)}function Wh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ei(u(a.aa,a),h)}function Pc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Kn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(HE(this.i,this.B),this.M!=2&&(Zs(),Et(17)),Dr(this),this.m=2,ri(this)):Wh(this,this.T-a)};function ri(a){a.j.I==0||a.K||yf(a.j,a)}function Dr(a){Pc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Se(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Nc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Dc(d.h,a))){if(!a.L&&Dc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)So(d),Ro(d);else break e;Lc(d),Et(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ei(u(d.Va,d),6e3));Qh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Vr(d,11)}else if((a.L||d.g==a)&&So(d),!T(h))for(P=d.Ba.g.parse(h),h=0;h<P.length;h++){let Pe=P[h];const et=Pe[0];if(!(et<=d.K))if(d.K=et,Pe=Pe[1],d.I==2)if(Pe[0]=="c"){d.M=Pe[1],d.ba=Pe[2];const hn=Pe[3];hn!=null&&(d.ka=hn,d.j.info("VER="+d.ka));const Or=Pe[4];Or!=null&&(d.za=Or,d.j.info("SVER="+d.za));const Xn=Pe[5];Xn!=null&&typeof Xn=="number"&&Xn>0&&(g=1.5*Xn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Zn=a.g;if(Zn){const Po=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var D=g.h;D.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(kc(D,D.h),D.h=null))}if(g.G){const Uc=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Uc&&(g.wa=Uc,Oe(g.J,g.G,Uc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var W=a;if(g.na=If(g,g.L?g.ba:null,g.W),W.L){Yh(g.h,W);var fe=W,Ye=g.O;Ye&&(fe.H=Ye),fe.D&&(Pc(fe),Io(fe)),g.g=W}else gf(g);d.i.length>0&&bo(d)}else Pe[0]!="stop"&&Pe[0]!="close"||Vr(d,7);else d.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Vr(d,7):xc(d):Pe[0]!="noop"&&d.l&&d.l.qa(Pe),d.A=0)}}Zs(4)}catch{}}var QE=class{constructor(a,h){this.g=a,this.map=h}};function zh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Kh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qh(a){return a.h?1:a.g?a.g.size:0}function Dc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function kc(a,h){a.g?a.g.add(h):a.h=h}function Yh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}zh.prototype.cancel=function(){if(this.i=Jh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return _(a.i)}var Xh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YE(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let P,D=null;g>=0?(P=a[d].substring(0,g),D=a[d].substring(g+1)):P=a[d],h(P,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Qn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Qn?(this.l=a.l,si(this,a.j),this.o=a.o,this.g=a.g,ii(this,a.u),this.h=a.h,Vc(this,sf(a.i)),this.m=a.m):a&&(h=String(a).match(Xh))?(this.l=!1,si(this,h[1]||"",!0),this.o=oi(h[2]||""),this.g=oi(h[3]||"",!0),ii(this,h[4]),this.h=oi(h[5]||"",!0),Vc(this,h[6]||"",!0),this.m=oi(h[7]||"")):(this.l=!1,this.i=new ci(null,this.l))}Qn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ai(h,Zh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ai(h,Zh,!0),"@"),a.push(ni(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ai(d,d.charAt(0)=="/"?ZE:XE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ai(d,tT)),a.join("")},Qn.prototype.resolve=function(a){const h=un(this);let d=!!a.j;d?si(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)ii(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=h.h.lastIndexOf("/");P!=-1&&(g=h.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const D=[];for(let W=0;W<P.length;){const fe=P[W++];fe=="."?g&&W==P.length&&D.push(""):fe==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),g&&W==P.length&&D.push("")):(D.push(fe),g=!0)}g=D.join("/")}else g=P}return d?h.h=g:d=a.i.toString()!=="",d?Vc(h,sf(a.i)):d=!!a.m,d&&(h.m=a.m),h};function un(a){return new Qn(a)}function si(a,h,d){a.j=d?oi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ii(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Vc(a,h,d){h instanceof ci?(a.i=h,nT(a.i,a.l)):(d||(h=ai(h,eT)),a.i=new ci(h,a.l))}function Oe(a,h,d){a.i.set(h,d)}function vo(a){return Oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function oi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ai(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,JE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function JE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zh=/[#\/\?@]/g,XE=/[#\?:]/g,ZE=/[#\?]/g,eT=/[#\?@]/g,tT=/#/g;function ci(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function kr(a){a.g||(a.g=new Map,a.h=0,a.i&&YE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ci.prototype,t.add=function(a,h){kr(this),this.i=null,a=ls(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function ef(a,h){kr(a),h=ls(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function tf(a,h){return kr(a),h=ls(a,h),a.g.has(h)}t.forEach=function(a,h){kr(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(h,P,g,this)},this)},this)};function nf(a,h){kr(a);let d=[];if(typeof h=="string")tf(a,h)&&(d=d.concat(a.g.get(ls(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return kr(this),this.i=null,a=ls(this,a),tf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=nf(this,a),a.length>0?String(a[0]):h):h};function rf(a,h,d){ef(a,h),d.length>0&&(a.i=null,a.g.set(ls(a,h),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const P=ni(d);d=nf(this,d);for(let D=0;D<d.length;D++){let W=P;d[D]!==""&&(W+="="+ni(d[D])),a.push(W)}}return this.i=a.join("&")};function sf(a){const h=new ci;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ls(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function nT(a,h){h&&!a.j&&(kr(a),a.i=null,a.g.forEach(function(d,g){const P=g.toLowerCase();g!=P&&(ef(this,g),rf(this,P,d))},a)),a.j=h}function rT(a,h){const d=new ti;if(o.Image){const g=new Image;g.onload=f(Yn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Yn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Yn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Yn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function sT(a,h){const d=new ti,g=new AbortController,P=setTimeout(()=>{g.abort(),Yn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?Yn(d,"TestPingServer: ok",!0,h):Yn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Yn(d,"TestPingServer: error",!1,h)})}function Yn(a,h,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function iT(){this.g=new ht}function Oc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Oc,kt),Oc.prototype.g=function(){return new wo(this.i,this.h)};function wo(a,h){$.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(wo,$),t=wo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ui(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;of(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function of(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?li(this):ui(this),this.readyState==3&&of(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,li(this))},t.Na=function(a){this.g&&(this.response=a,li(this))},t.ga=function(){this.g&&li(this)};function li(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ui(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ui(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function af(a){let h="";return Rt(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Mc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=af(d),typeof a=="string"?d!=null&&ni(d):Oe(a,h,d))}function Fe(a){$.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Fe,$);var oT=/^https?$/i,aT=["POST","PUT"];t=Fe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():jh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){cf(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(aT,h,void 0)>=0)||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,W]of d)this.g.setRequestHeader(D,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){cf(this,D)}};function cf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,lf(a),Ao(a)}function lf(a){a.A||(a.A=!0,j(a,"complete"),j(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,j(this,"complete"),j(this,"abort"),Ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ao(this,!0)),Fe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?uf(this):this.Xa())},t.Xa=function(){uf(this)};function uf(a){if(a.h&&typeof i<"u"){if(a.v&&Jn(a)==4)setTimeout(a.Ca.bind(a),0);else if(j(a,"readystatechange"),Jn(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=D===0){let W=String(a.D).match(Xh)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),g=!oT.test(W?W.toLowerCase():"")}d=g}if(d)j(a,"complete"),j(a,"success");else{a.o=6;try{var P=Jn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",lf(a)}}finally{Ao(a)}}}}function Ao(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||j(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Jn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Jn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ut(h)}};function hf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cT(a){const h={};a=(a.g&&Jn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=WE(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[P]||[];h[P]=D,D.push(d)}ln(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function hi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function ff(a){this.za=0,this.i=[],this.j=new ti,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=hi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=hi("baseRetryDelayMs",5e3,a),this.Za=hi("retryDelaySeedMs",1e4,a),this.Ta=hi("forwardChannelMaxRetries",2,a),this.va=hi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new zh(a&&a.concurrentRequestLimit),this.Ba=new iT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=ff.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){Et(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=If(this,null,this.W),bo(this)};function xc(a){if(df(a),a.I==3){var h=a.V++,d=un(a.J);if(Oe(d,"SID",a.M),Oe(d,"RID",h),Oe(d,"TYPE","terminate"),fi(a,d),h=new Kn(a,a.j,h),h.M=2,h.A=vo(un(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=vf(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Io(h)}Tf(a)}function Ro(a){a.g&&(Fc(a),a.g.cancel(),a.g=null)}function df(a){Ro(a),a.v&&(o.clearTimeout(a.v),a.v=null),So(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function bo(a){if(!Kh(a.h)&&!a.m){a.m=!0;var h=a.Ea;te||E(),ne||(te(),ne=!0),R.add(h,a),a.D=0}}function lT(a,h){return Qh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ei(u(a.Ea,a,h),Ef(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Kn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=Dt(D),Rn(D,this.U)):D=this.U),this.u!==null||this.R||(P.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=mf(this,P,h),d=un(this.J),Oe(d,"RID",a),Oe(d,"CVER",22),this.G&&Oe(d,"X-HTTP-Session-Id",this.G),fi(this,d),D&&(this.R?h="headers="+ni(af(D))+"&"+h:this.u&&Mc(d,this.u,D)),kc(this.h,P),this.Ra&&Oe(d,"TYPE","init"),this.S?(Oe(d,"$req",h),Oe(d,"SID","null"),P.U=!0,Cc(P,d,null)):Cc(P,d,h),this.I=2}}else this.I==3&&(a?pf(this,a):this.i.length==0||Kh(this.h)||pf(this))};function pf(a,h){var d;h?d=h.l:d=a.V++;const g=un(a.J);Oe(g,"SID",a.M),Oe(g,"RID",d),Oe(g,"AID",a.K),fi(a,g),a.u&&a.o&&Mc(g,a.u,a.o),d=new Kn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=mf(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),kc(a.h,d),Cc(d,g,h)}function fi(a,h){a.H&&Rt(a.H,function(d,g){Oe(h,g,d)}),a.l&&Rt({},function(d,g){Oe(h,g,d)})}function mf(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var P=a.i;let fe=-1;for(;;){const Ye=["count="+d];fe==-1?d>0?(fe=P[0].g,Ye.push("ofs="+fe)):fe=0:Ye.push("ofs="+fe);let Pe=!0;for(let et=0;et<d;et++){var D=P[et].g;const hn=P[et].map;if(D-=fe,D<0)fe=Math.max(0,P[et].g-100),Pe=!1;else try{D="req"+D+"_"||"";try{var W=hn instanceof Map?hn:Object.entries(hn);for(const[Or,Xn]of W){let Zn=Xn;c(Xn)&&(Zn=Ie(Xn)),Ye.push(D+Or+"="+encodeURIComponent(Zn))}}catch(Or){throw Ye.push(D+"type="+encodeURIComponent("_badmap")),Or}}catch{g&&g(hn)}}if(Pe){W=Ye.join("&");break e}}W=void 0}return a=a.i.splice(0,d),h.G=a,W}function gf(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;te||E(),ne||(te(),ne=!0),R.add(h,a),a.A=0}}function Lc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ei(u(a.Da,a),Ef(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,_f(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ei(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),Ro(this),_f(this))};function Fc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function _f(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=un(a.na);Oe(h,"RID","rpc"),Oe(h,"SID",a.M),Oe(h,"AID",a.K),Oe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Oe(h,"TO",a.ia),Oe(h,"TYPE","xmlhttp"),fi(a,h),a.u&&a.o&&Mc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=vo(un(h)),d.u=null,d.R=!0,Hh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ro(this),Lc(this),Et(19))};function So(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function yf(a,h){var d=null;if(a.g==h){So(a),Fc(a),a.g=null;var g=2}else if(Dc(a.h,h))d=h.G,Yh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var P=a.D;g=Nr(),j(g,new Uh(g,d)),bo(a)}else gf(a);else if(P=h.m,P==3||P==0&&h.X>0||!(g==1&&lT(a,h)||g==2&&Lc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function Ef(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Vr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const P=!g;g=new Qn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||si(g,"https"),vo(g),P?rT(g.toString(),d):sT(g.toString(),d)}else Et(2);a.I=0,a.l&&a.l.pa(h),Tf(a),df(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Tf(a){if(a.I=0,a.ja=[],a.l){const h=Jh(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ja,h),S(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function If(a,h,d){var g=d instanceof Qn?un(d):new Qn(d);if(g.g!="")h&&(g.g=h+"."+g.g),ii(g,g.u);else{var P=o.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const D=new Qn(null);g&&si(D,g),h&&(D.g=h),P&&ii(D,P),d&&(D.h=d),g=D}return d=a.G,h=a.wa,d&&h&&Oe(g,d,h),Oe(g,"VER",a.ka),fi(a,g),g}function vf(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Fe(new Oc({ab:d})):new Fe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wf(){}t=wf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Co(){}Co.prototype.g=function(a,h){return new Ot(a,h)};function Ot(a,h){$.call(this),this.g=new ff(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new us(this)}p(Ot,$),Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){xc(this.g)},Ot.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ie(a),a=d);h.i.push(new QE(h.Ya++,a)),h.I==3&&bo(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,xc(this.g),delete this.g,Ot.Z.N.call(this)};function Af(a){as.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Af,as);function Rf(){st.call(this),this.status=1}p(Rf,st);function us(a){this.g=a}p(us,wf),us.prototype.ra=function(){j(this.g,"a")},us.prototype.qa=function(a){j(this.g,new Af(a))},us.prototype.pa=function(a){j(this.g,new Rf)},us.prototype.oa=function(){j(this.g,"b")},Co.prototype.createWebChannel=Co.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,a_=function(){return new Co},o_=function(){return Nr()},i_=Ze,ql={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},To.NO_ERROR=0,To.TIMEOUT=8,To.HTTP_ERROR=6,Ko=To,Bh.COMPLETE="complete",s_=Bh,Vt.EventType=Xt,Xt.OPEN="a",Xt.CLOSE="b",Xt.ERROR="c",Xt.MESSAGE="d",$.prototype.listen=$.prototype.J,Ii=Vt,Fe.prototype.listenOnce=Fe.prototype.K,Fe.prototype.getLastError=Fe.prototype.Ha,Fe.prototype.getLastErrorCode=Fe.prototype.ya,Fe.prototype.getStatus=Fe.prototype.ca,Fe.prototype.getResponseJson=Fe.prototype.La,Fe.prototype.getResponseText=Fe.prototype.la,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Fa,r_=Fe}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});const qd="@firebase/firestore",$d="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Ja("@firebase/firestore");function gs(){return Qr.logLevel}function X(t,...e){if(Qr.logLevel<=me.DEBUG){const n=e.map(Uu);Qr.debug(`Firestore (${Gs}): ${t}`,...n)}}function qn(t,...e){if(Qr.logLevel<=me.ERROR){const n=e.map(Uu);Qr.error(`Firestore (${Gs}): ${t}`,...n)}}function Vs(t,...e){if(Qr.logLevel<=me.WARN){const n=e.map(Uu);Qr.warn(`Firestore (${Gs}): ${t}`,...n)}}function Uu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,c_(t,r,n)}function c_(t,e,n){let r=`FIRESTORE (${Gs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw qn(r),new Error(r)}function be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||c_(e,s,r)}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(dt.UNAUTHENTICATED)))}shutdown(){}}class PR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class NR{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string",31837,{l:r}),new l_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class DR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new DR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){be(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Hd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Hd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=OR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function $l(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ll(s)===ll(i)?ge(s,i):ll(s)?1:-1}return ge(t.length,e.length)}const MR=55296,xR=57343;function ll(t){const e=t.charCodeAt(0);return e>=MR&&e<=xR}function Os(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="__name__";class pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=pn.isNumericId(e),s=pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?pn.extractNumericId(e).compare(pn.extractNumericId(n)):$l(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mr.fromString(e.substring(4,e.length-2))}}class ke extends pn{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new ke(n)}static emptyPath(){return new ke([])}}const LR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends pn{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return LR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gd}static keyField(){return new at([Gd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Q(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(ke.fromString(e))}static fromName(e){return new ee(ke.fromString(e).popFirst(5))}static empty(){return new ee(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t,e,n){if(!n)throw new Q(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FR(t,e,n,r){if(e===!0&&r===!0)throw new Q(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wd(t){if(!ee.isDocumentKey(t))throw new Q(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zd(t){if(ee.isDocumentKey(t))throw new Q(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function h_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae(12329,{type:typeof t})}function Pt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xa(t);throw new Q(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ao(t,e){if(!h_(t))throw new Q(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Q(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=-62135596800,Qd=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Qd);return new Me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Kd)throw new Q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qd}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ao(e,Me._jsonSchema))return new Me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Kd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Me._jsonSchemaVersion="firestore/timestamp/1.0",Me._jsonSchema={type:Qe("string",Me._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new Me(0,0))}static max(){return new le(new Me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=-1;function UR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Er(s,ee.empty(),e)}function BR(t){return new Er(t.readTime,t.key,Yi)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(le.min(),ee.empty(),Yi)}static max(){return new Er(le.max(),ee.empty(),Yi)}}function jR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $R{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==qR)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,r)=>{n(e)}))}static reject(e){return new L(((n,r)=>{r(e)}))}static waitFor(e){return new L(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next((s=>s?L.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new L(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function HR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Za.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=-1;function ec(t){return t==null}function ga(t){return t===0&&1/t==-1/0}function GR(t){return typeof t=="number"&&Number.isInteger(t)&&!ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="";function WR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yd(e)),e=zR(t.get(n),e);return Yd(e)}function zR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case f_:n+="";break;default:n+=i}}return n}function Yd(t){return t+f_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function d_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xd(this.data.getIterator())}getIteratorFrom(e){return new Xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class Xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new Xe(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new p_("Invalid base64 string: "+i):i}})(e);return new ct(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const KR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(be(!!t,39018),typeof t=="string"){let e=0;const n=KR.exec(t);if(be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="server_timestamp",g_="__type__",__="__previous_value__",y_="__local_write_time__";function qu(t){return(t?.mapValue?.fields||{})[g_]?.stringValue===m_}function tc(t){const e=t.mapValue.fields[__];return qu(e)?tc(e):e}function Ji(t){const e=Tr(t.mapValue.fields[y_].timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const _a="(default)";class Xi{constructor(e,n){this.projectId=e,this.database=n||_a}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database===_a}isEqual(e){return e instanceof Xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="__type__",YR="__max__",Lo={mapValue:{}},T_="__vector__",ya="value";function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qu(t)?4:XR(t)?9007199254740991:JR(t)?10:11:ae(28295,{value:t})}function An(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Tr(s.timestampValue),c=Tr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),c=He(i.doubleValue);return o===c?ga(o)===ga(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Jd(o)!==Jd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!An(o[l],c[l])))return!1;return!0})(t,e);default:return ae(52216,{left:t})}}function Zi(t,e){return(t.values||[]).find((n=>An(n,e)))!==void 0}function Ms(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=He(i.integerValue||i.doubleValue),l=He(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return Zd(t.timestampValue,e.timestampValue);case 4:return Zd(Ji(t),Ji(e));case 5:return $l(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=Ir(i),l=Ir(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ge(c[u],l[u]);if(f!==0)return f}return ge(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ge(He(i.latitude),He(o.latitude));return c!==0?c:ge(He(i.longitude),He(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return ep(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[ya]?.arrayValue,f=l[ya]?.arrayValue,p=ge(u?.values?.length||0,f?.values?.length||0);return p!==0?p:ep(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Lo.mapValue&&o===Lo.mapValue)return 0;if(i===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=$l(l[p],f[p]);if(m!==0)return m;const _=Ms(c[l[p]],u[f[p]]);if(_!==0)return _}return ge(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ae(23264,{he:n})}}function Zd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Tr(t),r=Tr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function ep(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ms(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function xs(t){return Hl(t)}function Hl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Ir(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ee.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Hl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Hl(n.fields[o])}`;return s+"}"})(t.mapValue):ae(61005,{value:t})}function Qo(t){switch(vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tc(t);return e?16+Qo(e):16;case 5:return 2*t.stringValue.length;case 6:return Ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Qo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return br(r.fields,((i,o)=>{s+=i.length+Qo(o)})),s})(t.mapValue);default:throw ae(13486,{value:t})}}function tp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gl(t){return!!t&&"integerValue"in t}function $u(t){return!!t&&"arrayValue"in t}function np(t){return!!t&&"nullValue"in t}function rp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yo(t){return!!t&&"mapValue"in t}function JR(t){return(t?.mapValue?.fields||{})[E_]?.stringValue===T_}function Mi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Mi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mi(t.arrayValue.values[n]);return e}return{...t}}function XR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===YR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mi(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Mi(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){br(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ct(Mi(this.value))}}function I_(t){const e=[];return br(t.fields,((n,r)=>{const s=new at([n]);if(Yo(r)){const i=I_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new mt(e,0,le.min(),le.min(),le.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,le.min(),le.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,le.min(),le.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.position=e,this.inclusive=n}}function sp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=Ms(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ip(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{}class ze extends v_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tb(e,n,r):n==="array-contains"?new sb(e,r):n==="in"?new ib(e,r):n==="not-in"?new ob(e,r):n==="array-contains-any"?new ab(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nb(e,r):new rb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ms(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.matchesComparison(Ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends v_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new on(e,n)}matches(e){return w_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function w_(t){return t.op==="and"}function A_(t){return eb(t)&&w_(t)}function eb(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function Wl(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+xs(t.value);if(A_(t))return t.filters.map((e=>Wl(e))).join(",");{const e=t.filters.map((n=>Wl(n))).join(",");return`${t.op}(${e})`}}function R_(t,e){return t instanceof ze?(function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&An(r.value,s.value)})(t,e):t instanceof on?(function(r,s){return s instanceof on&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&R_(o,s.filters[c])),!0):!1})(t,e):void ae(19439)}function b_(t){return t instanceof ze?(function(n){return`${n.field.canonicalString()} ${n.op} ${xs(n.value)}`})(t):t instanceof on?(function(n){return n.op.toString()+" {"+n.getFilters().map(b_).join(" ,")+"}"})(t):"Filter"}class tb extends ze{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class nb extends ze{constructor(e,n){super(e,"in",n),this.keys=S_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class rb extends ze{constructor(e,n){super(e,"not-in",n),this.keys=S_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function S_(t,e){return(e.arrayValue?.values||[]).map((n=>ee.fromName(n.referenceValue)))}class sb extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $u(n)&&Zi(n.arrayValue,this.value)}}class ib extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zi(this.value.arrayValue,n)}}class ob extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Zi(this.value.arrayValue,n)}}class ab extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$u(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Zi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function op(t,e=null,n=[],r=[],s=null,i=null,o=null){return new cb(t,e,n,r,s,i,o)}function Hu(t){const e=he(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Wl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ec(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>xs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>xs(r))).join(",")),e.Te=n}return e.Te}function Gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!R_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ip(t.startAt,e.startAt)&&ip(t.endAt,e.endAt)}function zl(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function lb(t,e,n,r,s,i,o,c){return new Ks(t,e,n,r,s,i,o,c)}function nc(t){return new Ks(t)}function ap(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function C_(t){return t.collectionGroup!==null}function xi(t){const e=he(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Xe(at.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new eo(i,r))})),n.has(at.keyField().canonicalString())||e.Ie.push(new eo(at.keyField(),r))}return e.Ie}function _n(t){const e=he(t);return e.Ee||(e.Ee=ub(e,xi(t))),e.Ee}function ub(t,e){if(t.limitType==="F")return op(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new eo(s.field,i)}));const n=t.endAt?new Ea(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ea(t.startAt.position,t.startAt.inclusive):null;return op(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kl(t,e){const n=t.filters.concat([e]);return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ql(t,e,n){return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rc(t,e){return Gu(_n(t),_n(e))&&t.limitType===e.limitType}function P_(t){return`${Hu(_n(t))}|lt:${t.limitType}`}function _s(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>b_(s))).join(", ")}]`),ec(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>xs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>xs(s))).join(",")),`Target(${r})`})(_n(t))}; limitType=${t.limitType})`}function sc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of xi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=sp(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,xi(r),s)||r.endAt&&!(function(o,c,l){const u=sp(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,xi(r),s))})(t,e)}function hb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function N_(t){return(e,n)=>{let r=!1;for(const s of xi(t)){const i=fb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function fb(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ms(l,u):ae(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return d_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=new Le(ee.comparator);function $n(){return db}const D_=new Le(ee.comparator);function vi(...t){let e=D_;for(const n of t)e=e.insert(n.key,n);return e}function k_(t){let e=D_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function $r(){return Li()}function V_(){return Li()}function Li(){return new ss((t=>t.toString()),((t,e)=>t.isEqual(e)))}const pb=new Le(ee.comparator),mb=new Xe(ee.comparator);function _e(...t){let e=mb;for(const n of t)e=e.add(n);return e}const gb=new Xe(ge);function _b(){return gb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ga(e)?"-0":e}}function O_(t){return{integerValue:""+t}}function yb(t,e){return GR(e)?O_(e):Wu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this._=void 0}}function Eb(t,e,n){return t instanceof to?(function(s,i){const o={fields:{[g_]:{stringValue:m_},[y_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qu(i)&&(i=tc(i)),i&&(o.fields[__]=i),{mapValue:o}})(n,e):t instanceof Ls?x_(t,e):t instanceof no?L_(t,e):(function(s,i){const o=M_(s,i),c=cp(o)+cp(s.Ae);return Gl(o)&&Gl(s.Ae)?O_(c):Wu(s.serializer,c)})(t,e)}function Tb(t,e,n){return t instanceof Ls?x_(t,e):t instanceof no?L_(t,e):n}function M_(t,e){return t instanceof Ta?(function(r){return Gl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class to extends ic{}class Ls extends ic{constructor(e){super(),this.elements=e}}function x_(t,e){const n=F_(e);for(const r of t.elements)n.some((s=>An(s,r)))||n.push(r);return{arrayValue:{values:n}}}class no extends ic{constructor(e){super(),this.elements=e}}function L_(t,e){let n=F_(e);for(const r of t.elements)n=n.filter((s=>!An(s,r)));return{arrayValue:{values:n}}}class Ta extends ic{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function cp(t){return He(t.integerValue||t.doubleValue)}function F_(t){return $u(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n){this.field=e,this.transform=n}}function Ib(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Ls&&s instanceof Ls||r instanceof no&&s instanceof no?Os(r.elements,s.elements,An):r instanceof Ta&&s instanceof Ta?An(r.Ae,s.Ae):r instanceof to&&s instanceof to})(t.transform,e.transform)}class vb{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oc{}function B_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zu(t.key,Kt.none()):new co(t.key,t.data,Kt.none());{const n=t.data,r=Ct.empty();let s=new Xe(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new Ut(s.toArray()),Kt.none())}}function wb(t,e,n){t instanceof co?(function(s,i,o){const c=s.value.clone(),l=up(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Sr?(function(s,i,o){if(!Jo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=up(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(j_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Fi(t,e,n,r){return t instanceof co?(function(i,o,c,l){if(!Jo(i.precondition,o))return c;const u=i.value.clone(),f=hp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Sr?(function(i,o,c,l){if(!Jo(i.precondition,o))return c;const u=hp(i.fieldTransforms,l,o),f=o.data;return f.setAll(j_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Jo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function Ab(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=M_(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function lp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Os(r,s,((i,o)=>Ib(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class co extends oc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends oc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function j_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function up(t,e,n){const r=new Map;be(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Tb(o,c,n[s]))}return r}function hp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Eb(i,o,e))}return r}class zu extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rb extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=V_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=B_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),_e())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,((n,r)=>lp(n,r)))&&Os(this.baseMutations,e.baseMutations,((n,r)=>lp(n,r)))}}class Ku{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return pb})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ku(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,Ee;function Pb(t){switch(t){case O.OK:return ae(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}function q_(t){if(t===void 0)return qn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ge.OK:return O.OK;case Ge.CANCELLED:return O.CANCELLED;case Ge.UNKNOWN:return O.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return O.INTERNAL;case Ge.UNAVAILABLE:return O.UNAVAILABLE;case Ge.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ge.NOT_FOUND:return O.NOT_FOUND;case Ge.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ge.ABORTED:return O.ABORTED;case Ge.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ge.DATA_LOSS:return O.DATA_LOSS;default:return ae(39323,{code:t})}}(Ee=Ge||(Ge={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=new mr([4294967295,4294967295],0);function fp(t){const e=Nb().encode(t),n=new n_;return n.update(e),new Uint8Array(n.digest())}function dp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new mr([n,r],0),new mr([s,i],0)]}class Qu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wi(`Invalid padding: ${n}`);if(r<0)throw new wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new wi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=mr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(mr.fromNumber(r)));return s.compare(Db)===1&&(s=new mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=fp(e),[r,s]=dp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=fp(e),[r,s]=dp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ac(le.min(),s,new Le(ge),$n(),_e())}}class lo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new lo(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class $_{constructor(e,n){this.targetId=e,this.Ce=n}}class H_{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class pp{constructor(){this.ve=0,this.Fe=mp(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}})),new lo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=mp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class kb{constructor(e){this.Ge=e,this.ze=new Map,this.je=$n(),this.Je=Fo(),this.He=Fo(),this.Ye=new Le(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ae(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(zl(i))if(r===0){const o=new ee(i.path);this.et(n,o,mt.newNoDocument(o,le.min()))}else be(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Ir(r).toUint8Array()}catch(l){if(l instanceof p_)return Vs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Qu(o,s,i)}catch(l){return Vs(l instanceof wi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&zl(c.target)){const l=new ee(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,mt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=_e();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new ac(e,n,this.Ye,this.je,r);return this.je=$n(),this.Je=Fo(),this.He=Fo(),this.Ye=new Le(ge),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new pp,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Xe(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Xe(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new pp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fo(){return new Le(ee.comparator)}function mp(){return new Le(ee.comparator)}const Vb={asc:"ASCENDING",desc:"DESCENDING"},Ob={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Mb={and:"AND",or:"OR"};class xb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yl(t,e){return t.useProto3Json||ec(e)?e:{value:e}}function Ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function G_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Lb(t,e){return Ia(t,e.toTimestamp())}function yn(t){return be(!!t,49232),le.fromTimestamp((function(n){const r=Tr(n);return new Me(r.seconds,r.nanos)})(t))}function Yu(t,e){return Jl(t,e).canonicalString()}function Jl(t,e){const n=(function(s){return new ke(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function W_(t){const e=ke.fromString(t);return be(J_(e),10190,{key:e.toString()}),e}function Xl(t,e){return Yu(t.databaseId,e.path)}function ul(t,e){const n=W_(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(K_(n))}function z_(t,e){return Yu(t.databaseId,e)}function Fb(t){const e=W_(t);return e.length===4?ke.emptyPath():K_(e)}function Zl(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function K_(t){return be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function gp(t,e,n){return{name:Xl(t,e),fields:n.value.mapValue.fields}}function Ub(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ae(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(be(f===void 0||typeof f=="string",58123),ct.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ct.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?O.UNKNOWN:q_(u.code);return new Q(f,u.message||"")})(o);n=new H_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ul(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):le.min(),c=new Ct({mapValue:{fields:r.document.fields}}),l=mt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Xo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ul(t,r.document),i=r.readTime?yn(r.readTime):le.min(),o=mt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Xo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ul(t,r.document),i=r.removedTargetIds||[];n=new Xo([],i,s,null)}else{if(!("filter"in e))return ae(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Cb(s,i),c=r.targetId;n=new $_(c,o)}}return n}function Bb(t,e){let n;if(e instanceof co)n={update:gp(t,e.key,e.value)};else if(e instanceof zu)n={delete:Xl(t,e.key)};else if(e instanceof Sr)n={update:gp(t,e.key,e.data),updateMask:Qb(e.fieldMask)};else{if(!(e instanceof Rb))return ae(16599,{Vt:e.type});n={verify:Xl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof to)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ls)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof no)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ta)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ae(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Lb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)})(t,e.precondition)),n}function jb(t,e){return t&&t.length>0?(be(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(le.min())&&(o=yn(i)),new vb(o,s.transformResults||[])})(n,e)))):[]}function qb(t,e){return{documents:[z_(t,e.path)]}}function $b(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=z_(t,s);const i=(function(u){if(u.length!==0)return Y_(on.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ys(m.field),direction:Wb(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Yl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function Hb(t){let e=Fb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Q_(p);return m instanceof on&&A_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(S){return new eo(Es(S.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,ec(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new Ea(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new Ea(_,m)})(n.endAt)),lb(e,s,o,i,c,"F",l,u)}function Gb(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Q_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Es(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Es(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Es(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}})(t):t.fieldFilter!==void 0?(function(n){return ze.create(Es(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return on.create(n.compositeFilter.filters.map((r=>Q_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}})(n.compositeFilter.op))})(t):ae(30097,{filter:t})}function Wb(t){return Vb[t]}function zb(t){return Ob[t]}function Kb(t){return Mb[t]}function ys(t){return{fieldPath:t.canonicalString()}}function Es(t){return at.fromServerFormat(t.fieldPath)}function Y_(t){return t instanceof ze?(function(n){if(n.op==="=="){if(rp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(np(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(np(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:zb(n.op),value:n.value}}})(t):t instanceof on?(function(n){const r=n.getFilters().map((s=>Y_(s)));return r.length===1?r[0]:{compositeFilter:{op:Kb(n.op),filters:r}}})(t):ae(54877,{filter:t})}function Qb(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function J_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,s,i=le.min(),o=le.min(),c=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.yt=e}}function Jb(t){const e=Hb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ql(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(){this.Cn=new Zb}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Er.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Zb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},X_=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(X_,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Fs(0)}static cr(){return new Fs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="LruGarbageCollector",eS=1048576;function Ep([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class tS{constructor(e){this.Ir=e,this.buffer=new Xe(Ep),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ep(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(yp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zs(n)?X(yp,"Ignoring IndexedDB error during garbage collection: ",n):await Ws(n)}await this.Vr(3e5)}))}}class rS{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Za.ce);const r=new tS(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(_p)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_p):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),gs()<=me.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function sS(t,e){return new rS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.changes=new ss((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Fi(r.mutation,s,Ut.empty(),Me.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,_e()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=_e()){const s=$r();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=vi();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,_e())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=$n();const o=Li(),c=(function(){return Li()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Sr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Fi(f.mutation,u,f.mutation.getFieldMask(),Me.now())):o.set(u.key,Ut.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new oS(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Li();let s=new Le(((o,c)=>o-c)),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Ut.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=V_();f.forEach((m=>{if(!i.has(m)){const _=B_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return L.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):C_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve($r());let c=Yi,l=i;return o.next((u=>L.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,_e()))).next((f=>({batchId:c,changes:k_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next((r=>{let s=vi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=vi();return this.indexManager.getCollectionParents(e,i).next((c=>L.forEach(c,(l=>{const u=(function(p,m){return new Ks(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,mt.newInvalidDocument(f)))}));let c=vi();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Fi(f.mutation,u,Ut.empty(),Me.now()),sc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:Jb(s.bundledQuery),readTime:yn(s.readTime)}})(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.overlays=new Le(ee.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return L.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=$r(),i=n.length+1,o=new ee(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=$r(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=$r(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Sb(n,r));let i=this.qr.get(n);i===void 0&&(i=_e(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.Qr=new Xe(tt.$r),this.Ur=new Xe(tt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new tt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ee(new ke([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ee(new ke([])),r=new tt(n,e),s=new tt(n,e+1);let i=_e();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new tt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ee.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Xe(tt.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new tt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?ju:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(ge);return n.forEach((s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new tt(new ee(i),0);let c=new Xe(ge);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),L.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){be(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,(s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new tt(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.ri=e,this.docs=(function(){return new Le(ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))})),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$n();const o=n.path,c=new ee(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||jR(BR(f),r)<=0||(s.has(f.key)||sc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae(9500)}ii(e,n){return L.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new dS(this)}getSize(e){return L.resolve(this.size)}}class dS extends iS{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.persistence=e,this.si=new ss((n=>Hu(n)),Gu),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.oi=0,this._i=new Ju,this.targetCount=0,this.ai=Fs.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Za(0),this.li=!1,this.li=!0,this.hi=new uS,this.referenceDelegate=e(this),this.Pi=new pS(this),this.indexManager=new Xb,this.remoteDocumentCache=(function(s){return new fS(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Yb(n),this.Ii=new cS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new hS(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new mS(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return L.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class mS extends $R{constructor(e){super(),this.currentSequenceNumber=e}}class Xu{constructor(e){this.persistence=e,this.Ri=new Ju,this.Vi=null}static mi(e){return new Xu(e)}get fi(){if(this.Vi)return this.Vi;throw ae(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,(r=>{const s=ee.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,le.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class va{constructor(e,n){this.persistence=e,this.pi=new ss((r=>WR(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=sS(this,n)}static mi(e,n){return new va(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return L.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?L.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,le.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qo(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return aA()?8:HR(yt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new gS;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(gs()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",_s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(gs()<=me.DEBUG&&X("QueryEngine","Query:",_s(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(gs()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",_s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):L.resolve())}ys(e,n){if(ap(n))return L.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Ql(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=_e(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,Ql(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return ap(n)||s.isEqual(le.min())?L.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?L.resolve(null):(gs()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_s(n)),this.vs(e,o,n,UR(s,Yi)).next((c=>c)))}))}Ds(e,n){let r=new Xe(N_(e));return n.forEach(((s,i)=>{sc(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return gs()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",_s(n)),this.ps.getDocumentsMatchingQuery(e,n,Er.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="LocalStore",yS=3e8;class ES{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Le(ge),this.xs=new ss((i=>Hu(i)),Gu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function TS(t,e,n,r){return new ES(t,e,n,r)}async function ey(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function IS(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let _=L.resolve();return m.forEach((S=>{_=_.next((()=>f.getEntry(l,S))).next((N=>{const k=u.docVersions.get(S);be(k!==null,48541),N.version.compareTo(k)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function ty(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function vS(t,e){const n=he(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ct.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(N,k,U){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=yS?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))}));let l=$n(),u=_e();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(wS(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(le.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return L.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function wS(t,e,n){let r=_e(),s=_e();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=$n();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(eh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function AS(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ju),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function RS(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function eu(t,e,n){const r=he(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!zs(o))throw o;X(eh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Tp(t,e,n){const r=he(t);let s=le.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=he(l),m=p.xs.get(f);return m!==void 0?L.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,_n(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:_e()))).next((c=>(bS(r,hb(e),c),{documents:c,Qs:i})))))}function bS(t,e,n){let r=t.Os.get(e)||le.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Ip{constructor(){this.activeTargetIds=_b()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SS{constructor(){this.Mo=new Ip,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ip,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="ConnectivityMonitor";class wp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(vp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(vp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=null;function tu(){return Uo===null?Uo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Uo++,"0x"+Uo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="RestConnection",PS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class NS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===_a?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=tu(),c=this.zo(e,n.toUriEncodedString());X(hl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=$s(u);return this.Jo(e,c,l,r,f).then((p=>(X(hl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Vs(hl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Gs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=PS[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class kS extends NS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=tu();return new Promise(((c,l)=>{const u=new r_;u.setWithCredentials(!0),u.listenOnce(s_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Ko.NO_ERROR:const p=u.getResponseJson();X(ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Ko.TIMEOUT:X(ft,`RPC '${e}' ${o} timed out`),l(new Q(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const m=u.getStatus();if(X(ft,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_?.error;if(S&&S.status&&S.message){const N=(function(U){const B=U.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(B)>=0?B:O.UNKNOWN})(S.status);l(new Q(N,S.message))}else l(new Q(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Q(O.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(ft,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);X(ft,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=tu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=a_(),c=o_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(ft,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const S=new DS({Yo:k=>{_?X(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(X(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(ft,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Zo:()=>p.close()}),N=(k,U,B)=>{k.listen(U,(H=>{try{B(H)}catch(G){setTimeout((()=>{throw G}),0)}}))};return N(p,Ii.EventType.OPEN,(()=>{_||(X(ft,`RPC '${e}' stream ${s} transport opened.`),S.o_())})),N(p,Ii.EventType.CLOSE,(()=>{_||(_=!0,X(ft,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(p))})),N(p,Ii.EventType.ERROR,(k=>{_||(_=!0,Vs(ft,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),S.a_(new Q(O.UNAVAILABLE,"The operation could not be completed")))})),N(p,Ii.EventType.MESSAGE,(k=>{if(!_){const U=k.data[0];be(!!U,16349);const B=U,H=B?.error||B[0]?.error;if(H){X(ft,`RPC '${e}' stream ${s} received error:`,H);const G=H.status;let te=(function(E){const y=Ge[E];if(y!==void 0)return q_(y)})(G),ne=H.message;te===void 0&&(te=O.INTERNAL,ne="Unknown error status: "+G+" with message "+H.message),_=!0,S.a_(new Q(te,ne)),p.close()}else X(ft,`RPC '${e}' stream ${s} received:`,U),S.u_(U)}})),N(c,i_.STAT_EVENT,(k=>{k.stat===ql.PROXY?X(ft,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===ql.NOPROXY&&X(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function fl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t){return new xb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="PersistentStream";class ry{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ny(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new Q(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return X(Ap,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(X(Ap,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class VS extends ry{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Ub(this.serializer,e),r=(function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?yn(o.readTime):le.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Zl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=zl(l)?{documents:qb(i,l)}:{query:$b(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=G_(i,o.resumeToken);const u=Yl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(le.min())>0){c.readTime=Ia(i,o.snapshotVersion.toTimestamp());const u=Yl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=Gb(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Zl(this.serializer),n.removeTarget=e,this.q_(n)}}class OS extends ry{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=jb(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Zl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>Bb(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{}class xS extends MS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(O.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Jl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(O.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Jl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(O.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class LS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qn(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="RemoteStore";class FS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{is(this)&&(X(Yr,"Restarting streams for network reachability change."),await(async function(l){const u=he(l);u.Ea.add(4),await uo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await lc(u)})(this))}))})),this.Ra=new LS(r,s)}}async function lc(t){if(is(t))for(const e of t.da)await e(!0)}async function uo(t){for(const e of t.da)await e(!1)}function sy(t,e){const n=he(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),sh(n)?rh(n):Qs(n).O_()&&nh(n,e))}function th(t,e){const n=he(t),r=Qs(n);n.Ia.delete(e),r.O_()&&iy(n,e),n.Ia.size===0&&(r.O_()?r.L_():is(n)&&n.Ra.set("Unknown"))}function nh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).Y_(e)}function iy(t,e){t.Va.Ue(e),Qs(t).Z_(e)}function rh(t){t.Va=new kb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.Ra.ua()}function sh(t){return is(t)&&!Qs(t).x_()&&t.Ia.size>0}function is(t){return he(t).Ea.size===0}function oy(t){t.Va=void 0}async function US(t){t.Ra.set("Online")}async function BS(t){t.Ia.forEach(((e,n)=>{nh(t,e)}))}async function jS(t,e){oy(t),sh(t)?(t.Ra.ha(e),rh(t)):t.Ra.set("Unknown")}async function qS(t,e,n){if(t.Ra.set("Online"),e instanceof H_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){X(Yr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wa(t,r)}else if(e instanceof Xo?t.Va.Ze(e):e instanceof $_?t.Va.st(e):t.Va.tt(e),!n.isEqual(le.min()))try{const r=await ty(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ct.EMPTY_BYTE_STRING,f.snapshotVersion)),iy(i,l);const p=new ur(f.target,l,u,f.sequenceNumber);nh(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){X(Yr,"Failed to raise snapshot:",r),await wa(t,r)}}async function wa(t,e,n){if(!zs(e))throw e;t.Ea.add(1),await uo(t),t.Ra.set("Offline"),n||(n=()=>ty(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(Yr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await lc(t)}))}function ay(t,e){return e().catch((n=>wa(t,n,e)))}async function uc(t){const e=he(t),n=wr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ju;for(;$S(e);)try{const s=await AS(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,HS(e,s)}catch(s){await wa(e,s)}cy(e)&&ly(e)}function $S(t){return is(t)&&t.Ta.length<10}function HS(t,e){t.Ta.push(e);const n=wr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function cy(t){return is(t)&&!wr(t).x_()&&t.Ta.length>0}function ly(t){wr(t).start()}async function GS(t){wr(t).ra()}async function WS(t){const e=wr(t);for(const n of t.Ta)e.ea(n.mutations)}async function zS(t,e,n){const r=t.Ta.shift(),s=Ku.from(r,e,n);await ay(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await uc(t)}async function KS(t,e){e&&wr(t).X_&&await(async function(r,s){if((function(o){return Pb(o)&&o!==O.ABORTED})(s.code)){const i=r.Ta.shift();wr(r).B_(),await ay(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await uc(r)}})(t,e),cy(t)&&ly(t)}async function Rp(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),X(Yr,"RemoteStore received new credentials");const r=is(n);n.Ea.add(3),await uo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await lc(n)}async function QS(t,e){const n=he(t);e?(n.Ea.delete(2),await lc(n)):e||(n.Ea.add(2),await uo(n),n.Ra.set("Unknown"))}function Qs(t){return t.ma||(t.ma=(function(n,r,s){const i=he(n);return i.sa(),new VS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:US.bind(null,t),t_:BS.bind(null,t),r_:jS.bind(null,t),H_:qS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),sh(t)?rh(t):t.Ra.set("Unknown")):(await t.ma.stop(),oy(t))}))),t.ma}function wr(t){return t.fa||(t.fa=(function(n,r,s){const i=he(n);return i.sa(),new OS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:GS.bind(null,t),r_:KS.bind(null,t),ta:WS.bind(null,t),na:zS.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await uc(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Yr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new ih(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oh(t,e){if(qn("AsyncQueue",`${e}: ${t}`),zs(t))return new Q(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{static emptySet(e){return new Ss(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=vi(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.ga=new Le(ee.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ae(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Us{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Us(e,n,Ss.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class JS{constructor(){this.queries=Sp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=Sp(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new Q(O.ABORTED,"Firestore shutting down"))}}function Sp(){return new ss((t=>P_(t)),rc)}async function ah(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new YS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=oh(o,`Initialization of query '${_s(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&lh(n)}async function ch(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XS(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&lh(n)}function ZS(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function lh(t){t.Ca.forEach((e=>{e.next()}))}var nu,Cp;(Cp=nu||(nu={})).Ma="default",Cp.Cache="cache";class uh{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==nu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.key=e}}class hy{constructor(e){this.key=e}}class eC{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=N_(e),this.tu=new Ss(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new bp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=sc(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;m&&_?m.data.isEqual(_.data)?S!==N&&(r.track({type:3,doc:_}),k=!0):this.su(m,_)||(r.track({type:2,doc:_}),k=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),k=!0):m&&!_&&(r.track({type:1,doc:m}),k=!0,(l||u)&&(c=!0)),k&&(_?(o=o.add(_),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(_,S){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{Rt:k})}};return N(_)-N(S)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Us(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new bp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new hy(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new uy(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Us.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const hh="SyncEngine";class tC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nC{constructor(e){this.key=e,this.hu=!1}}class rC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ss((c=>P_(c)),rc),this.Iu=new Map,this.Eu=new Set,this.du=new Le(ee.comparator),this.Au=new Map,this.Ru=new Ju,this.Vu={},this.mu=new Map,this.fu=Fs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function sC(t,e,n=!0){const r=_y(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await fy(r,e,n,!0),s}async function iC(t,e){const n=_y(t);await fy(n,e,!0,!1)}async function fy(t,e,n,r){const s=await RS(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await oC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&sy(t.remoteStore,s),c}async function oC(t,e,n,r,s){t.pu=(p,m,_)=>(async function(N,k,U,B){let H=k.view.ru(U);H.Cs&&(H=await Tp(N.localStore,k.query,!1).then((({documents:R})=>k.view.ru(R,H))));const G=B&&B.targetChanges.get(k.targetId),te=B&&B.targetMismatches.get(k.targetId)!=null,ne=k.view.applyChanges(H,N.isPrimaryClient,G,te);return Np(N,k.targetId,ne.au),ne.snapshot})(t,p,m,_);const i=await Tp(t.localStore,e,!0),o=new eC(e,i.Qs),c=o.ru(i.documents),l=lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Np(t,n,u.au);const f=new tC(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function aC(t,e,n){const r=he(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!rc(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await eu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&th(r.remoteStore,s.targetId),ru(r,s.targetId)})).catch(Ws)):(ru(r,s.targetId),await eu(r.localStore,s.targetId,!0))}async function cC(t,e){const n=he(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),th(n.remoteStore,r.targetId))}async function lC(t,e,n){const r=gC(t);try{const s=await(function(o,c){const l=he(o),u=Me.now(),f=c.reduce(((_,S)=>_.add(S.key)),_e());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let S=$n(),N=_e();return l.Ns.getEntries(_,f).next((k=>{S=k,S.forEach(((U,B)=>{B.isValidDocument()||(N=N.add(U))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,S))).next((k=>{p=k;const U=[];for(const B of c){const H=Ab(B,p.get(B.key).overlayedDocument);H!=null&&U.push(new Sr(B.key,H,I_(H.value.mapValue),Kt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,U,c)})).next((k=>{m=k;const U=k.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(_,k.batchId,U)}))})).then((()=>({batchId:m.batchId,changes:k_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Le(ge)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await ho(r,s.changes),await uc(r.remoteStore)}catch(s){const i=oh(s,"Failed to persist write");n.reject(i)}}async function dy(t,e){const n=he(t);try{const r=await vS(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?be(o.hu,14607):s.removedDocuments.size>0&&(be(o.hu,42227),o.hu=!1))})),await ho(n,r,e)}catch(r){await Ws(r)}}function Pp(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=he(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&lh(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uC(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Le(ee.comparator);o=o.insert(i,mt.newNoDocument(i,le.min()));const c=_e().add(i),l=new ac(le.min(),new Map,new Le(ge),o,c);await dy(r,l),r.du=r.du.remove(i),r.Au.delete(e),fh(r)}else await eu(r.localStore,e,!1).then((()=>ru(r,e,n))).catch(Ws)}async function hC(t,e){const n=he(t),r=e.batch.batchId;try{const s=await IS(n.localStore,e);my(n,r,null),py(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ho(n,s)}catch(s){await Ws(s)}}async function fC(t,e,n){const r=he(t);try{const s=await(function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(be(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);my(r,e,n),py(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ho(r,s)}catch(s){await Ws(s)}}function py(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function my(t,e,n){const r=he(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ru(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||gy(t,r)}))}function gy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(th(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),fh(t))}function Np(t,e,n){for(const r of n)r instanceof uy?(t.Ru.addReference(r.key,e),dC(t,r)):r instanceof hy?(X(hh,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||gy(t,r.key)):ae(19791,{wu:r})}function dC(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(hh,"New document in limbo: "+n),t.Eu.add(r),fh(t))}function fh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ee(ke.fromString(e)),r=t.fu.next();t.Au.set(r,new nC(n)),t.du=t.du.insert(n,r),sy(t.remoteStore,new ur(_n(nc(n.path)),r,"TargetPurposeLimboResolution",Za.ce))}}async function ho(t,e,n){const r=he(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Zu.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>L.forEach(u,(m=>L.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>L.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!zs(p))throw p;X(eh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),S=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(S);f.Ms=f.Ms.insert(m,N)}}})(r.localStore,i))}async function pC(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){X(hh,"User change. New user:",e.toKey());const r=await ey(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new Q(O.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ho(n,r.Ls)}}function mC(t,e){const n=he(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function _y(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uC.bind(null,e),e.Pu.H_=XS.bind(null,e.eventManager),e.Pu.yu=ZS.bind(null,e.eventManager),e}function gC(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fC.bind(null,e),e}class Aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return TS(this.persistence,new _S,e.initialUser,this.serializer)}Cu(e){return new Z_(Xu.mi,this.serializer)}Du(e){return new SS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Aa.provider={build:()=>new Aa};class _C extends Aa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){be(this.persistence.referenceDelegate instanceof va,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new nS(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new Z_((r=>va.mi(r,n)),this.serializer)}}class su{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pC.bind(null,this.syncEngine),await QS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new JS})()}createDatastore(e){const n=cc(e.databaseInfo.databaseId),r=(function(i){return new kS(i)})(e.databaseInfo);return(function(i,o,c,l){return new xS(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new FS(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Pp(this.syncEngine,n,0)),(function(){return wp.v()?new wp:new CS})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new rC(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=he(n);X(Yr,"RemoteStore shutting down."),r.Ea.add(5),await uo(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}su.provider={build:()=>new su};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="FirestoreClient";class yC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=Bu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{X(Ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(X(Ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function dl(t,e){t.asyncQueue.verifyOperationInProgress(),X(Ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await ey(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Dp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await EC(t);X(Ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Rp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Rp(e.remoteStore,s))),t._onlineComponents=e}async function EC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(Ar,"Using user provided OfflineComponentProvider");try{await dl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await dl(t,new Aa)}}else X(Ar,"Using default OfflineComponentProvider"),await dl(t,new _C(void 0));return t._offlineComponents}async function yy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(Ar,"Using user provided OnlineComponentProvider"),await Dp(t,t._uninitializedComponentsProvider._online)):(X(Ar,"Using default OnlineComponentProvider"),await Dp(t,new su))),t._onlineComponents}function TC(t){return yy(t).then((e=>e.syncEngine))}async function Ra(t){const e=await yy(t),n=e.eventManager;return n.onListen=sC.bind(null,e.syncEngine),n.onUnlisten=aC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cC.bind(null,e.syncEngine),n}function IC(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new dh({next:m=>{f.Nu(),o.enqueueAndForget((()=>ch(i,p)));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new Q(O.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new Q(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new uh(nc(c.path),f,{includeMetadataChanges:!0,qa:!0});return ah(i,p)})(await Ra(t),t.asyncQueue,e,n,r))),r.promise}function vC(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new dh({next:m=>{f.Nu(),o.enqueueAndForget((()=>ch(i,p))),m.fromCache&&l.source==="server"?u.reject(new Q(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new uh(c,f,{includeMetadataChanges:!0,qa:!0});return ah(i,p)})(await Ra(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="firestore.googleapis.com",Vp=!0;class Op{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ty,this.ssl=Vp}else this.host=e.host,this.ssl=e.ssl??Vp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=X_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<eS)throw new Q(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ey(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Op({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Op(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new CR;switch(r.type){case"firstParty":return new kR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=kp.get(n);r&&(X("ComponentProvider","Removing Datastore"),kp.delete(n),r.terminate())})(this),Promise.resolve()}}function wC(t,e,n,r={}){t=Pt(t,hc);const s=$s(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(zg(`https://${c}`),Kg("Firestore",!0)),i.host!==Ty&&i.host!==c&&Vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Bn(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=dt.MOCK_USER;else{u=Zw(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Q(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new dt(p)}t._authCredentials=new PR(new l_(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cr(this.firestore,e,this._query)}}class Be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}toJSON(){return{type:Be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ao(n,Be._jsonSchema))return new Be(e,r||null,new ee(ke.fromString(n.referencePath)))}}Be._jsonSchemaVersion="firestore/documentReference/1.0",Be._jsonSchema={type:Qe("string",Be._jsonSchemaVersion),referencePath:Qe("string")};class gr extends Cr{constructor(e,n,r){super(e,n,nc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new ee(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function sD(t,e,...n){if(t=qe(t),u_("collection","path",e),t instanceof hc){const r=ke.fromString(e,...n);return zd(r),new gr(t,null,r)}{if(!(t instanceof Be||t instanceof gr))throw new Q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return zd(r),new gr(t.firestore,null,r)}}function Iy(t,e,...n){if(t=qe(t),arguments.length===1&&(e=Bu.newId()),u_("doc","path",e),t instanceof hc){const r=ke.fromString(e,...n);return Wd(r),new Be(t,null,new ee(r))}{if(!(t instanceof Be||t instanceof gr))throw new Q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Wd(r),new Be(t.firestore,t instanceof gr?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="AsyncQueue";class xp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ny(this,"async_queue_retry"),this._c=()=>{const r=fl();r&&X(Mp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=fl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new xn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!zs(e))throw e;X(Mp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,qn("INTERNAL UNHANDLED ERROR: ",Lp(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=ih.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ae(47125,{Pc:Lp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Lp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Hn extends hc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new xp,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xp(e),this._firestoreClient=void 0,await e}}}function AC(t,e){const n=typeof t=="object"?t:Fu(),r=typeof t=="string"?t:_a,s=rs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Jw("firestore");i&&wC(s,...i)}return s}function fc(t){if(t._terminated)throw new Q(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||RC(t),t._firestoreClient}function RC(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new QR(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Ey(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new yC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ht(ct.fromBase64String(e))}catch(n){throw new Q(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ht(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ht._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ao(e,Ht._jsonSchema))return Ht.fromBase64String(e.bytes)}}Ht._jsonSchemaVersion="firestore/bytes/1.0",Ht._jsonSchema={type:Qe("string",Ht._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:En._jsonSchemaVersion}}static fromJSON(e){if(ao(e,En._jsonSchema))return new En(e.latitude,e.longitude)}}En._jsonSchemaVersion="firestore/geoPoint/1.0",En._jsonSchema={type:Qe("string",En._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Tn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ao(e,Tn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Tn(e.vectorValues);throw new Q(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tn._jsonSchemaVersion="firestore/vectorValue/1.0",Tn._jsonSchema={type:Qe("string",Tn._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=/^__.*__$/;class SC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new co(e,this.data,n,this.fieldTransforms)}}class vy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{Ac:t})}}class pc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new pc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ba(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(wy(this.Ac)&&bC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class CC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||cc(e)}Cc(e,n,r,s=!1){return new pc({Ac:e,methodName:n,Dc:r,path:at.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mc(t){const e=t._freezeSettings(),n=cc(t._databaseId);return new CC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ay(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);gh("Data must be an object, but it was:",o,r);const c=Ry(r,o);let l,u;if(i.merge)l=new Ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=iu(e,p,n);if(!o.contains(m))throw new Q(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Sy(f,m)||f.push(m)}l=new Ut(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new SC(new Ct(c),l,u)}class gc extends fo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gc}}function PC(t,e,n){return new pc({Ac:3,Dc:e.settings.Dc,methodName:t._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ph extends fo{_toFieldTransform(e){return new U_(e.path,new to)}isEqual(e){return e instanceof ph}}class mh extends fo{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=PC(this,e,!0),r=this.vc.map((i=>Ys(i,n))),s=new Ls(r);return new U_(e.path,s)}isEqual(e){return e instanceof mh&&Bn(this.vc,e.vc)}}function NC(t,e,n,r){const s=t.Cc(1,e,n);gh("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();br(r,((l,u)=>{const f=_h(e,l,n);u=qe(u);const p=s.yc(f);if(u instanceof gc)i.push(f);else{const m=Ys(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const c=new Ut(i);return new vy(o,c,s.fieldTransforms)}function DC(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[iu(e,r,n)],l=[s];if(i.length%2!=0)throw new Q(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(iu(e,i[m])),l.push(i[m+1]);const u=[],f=Ct.empty();for(let m=c.length-1;m>=0;--m)if(!Sy(u,c[m])){const _=c[m];let S=l[m];S=qe(S);const N=o.yc(_);if(S instanceof gc)u.push(_);else{const k=Ys(S,N);k!=null&&(u.push(_),f.set(_,k))}}const p=new Ut(u);return new vy(f,p,o.fieldTransforms)}function kC(t,e,n,r=!1){return Ys(n,t.Cc(r?4:3,e))}function Ys(t,e){if(by(t=qe(t)))return gh("Unsupported field value:",e,t),Ry(t,e);if(t instanceof fo)return(function(r,s){if(!wy(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Ys(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:Ia(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ia(s.serializer,i)}}if(r instanceof En)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ht)return{bytesValue:G_(s.serializer,r._byteString)};if(r instanceof Be){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tn)return(function(o,c){return{mapValue:{fields:{[E_]:{stringValue:T_},[ya]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Wu(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Xa(r)}`)})(t,e)}function Ry(t,e){const n={};return d_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,((r,s)=>{const i=Ys(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function by(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof En||t instanceof Ht||t instanceof Be||t instanceof fo||t instanceof Tn)}function gh(t,e,n){if(!by(n)||!h_(n)){const r=Xa(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function iu(t,e,n){if((e=qe(e))instanceof dc)return e._internalPath;if(typeof e=="string")return _h(t,e);throw ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const VC=new RegExp("[~\\*/\\[\\]]");function _h(t,e,n){if(e.search(VC)>=0)throw ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dc(...e.split("."))._internalPath}catch{throw ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ba(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Q(O.INVALID_ARGUMENT,c+t+l)}function Sy(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_c("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OC extends Cy{data(){return super.data()}}function _c(t,e){return typeof e=="string"?_h(t,e):e instanceof dc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yh{}class Ny extends yh{}function iD(t,e,...n){let r=[];e instanceof yh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof Eh)).length,c=i.filter((l=>l instanceof yc)).length;if(o>1||o>0&&c>0)throw new Q(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class yc extends Ny{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yc(e,n,r)}_apply(e){const n=this._parse(e);return Dy(e._query,n),new Cr(e.firestore,e.converter,Kl(e._query,n))}_parse(e){const n=mc(e.firestore);return(function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Q(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Bp(p,f);const S=[];for(const N of p)S.push(Up(l,i,N));m={arrayValue:{values:S}}}else m=Up(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Bp(p,f),m=kC(c,o,p,f==="in"||f==="not-in");return ze.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function oD(t,e,n){const r=e,s=_c("where",t);return yc._create(s,r,n)}class Eh extends yh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Eh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Dy(o,l),o=Kl(o,l)})(e._query,n),new Cr(e.firestore,e.converter,Kl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Th extends Ny{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Th(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new Q(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Q(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new eo(i,o)})(e._query,this._field,this._direction);return new Cr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ks(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function aD(t,e="asc"){const n=e,r=_c("orderBy",t);return Th._create(r,n)}function Up(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new Q(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!C_(e)&&n.indexOf("/")!==-1)throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ke.fromString(n));if(!ee.isDocumentKey(r))throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tp(t,new ee(r))}if(n instanceof Be)return tp(t,n._key);throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xa(n)}.`)}function Bp(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dy(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new Q(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class MC{convertValue(e,n="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return br(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[ya].arrayValue?.values?.map((r=>He(r.doubleValue)));return new Tn(n)}convertGeoPoint(e){return new En(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);be(J_(r),9688,{name:e});const s=new Xi(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(n)||qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zr extends Cy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_c("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=zr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}zr._jsonSchemaVersion="firestore/documentSnapshot/1.0",zr._jsonSchema={type:Qe("string",zr._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Zo extends zr{data(e={}){return super.data(e)}}class Kr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Zo(this._firestore,this._userDataWriter,r.key,r,new Ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Zo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Zo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:xC(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){t=Pt(t,Be);const e=Pt(t.firestore,Hn);return IC(fc(e),t._key).then((n=>Vy(e,t,n)))}Kr._jsonSchemaVersion="firestore/querySnapshot/1.0",Kr._jsonSchema={type:Qe("string",Kr._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Ih extends MC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ht(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function cD(t){t=Pt(t,Cr);const e=Pt(t.firestore,Hn),n=fc(e),r=new Ih(e);return Py(t._query),vC(n,t._query).then((s=>new Kr(e,r,t,s)))}function FC(t,e,n){t=Pt(t,Be);const r=Pt(t.firestore,Hn),s=ky(t.converter,e);return Ec(r,[Ay(mc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kt.none())])}function lD(t,e,n,...r){t=Pt(t,Be);const s=Pt(t.firestore,Hn),i=mc(s);let o;return o=typeof(e=qe(e))=="string"||e instanceof dc?DC(i,"updateDoc",t._key,e,n,r):NC(i,"updateDoc",t._key,e),Ec(s,[o.toMutation(t._key,Kt.exists(!0))])}function uD(t){return Ec(Pt(t.firestore,Hn),[new zu(t._key,Kt.none())])}function hD(t,e){const n=Pt(t.firestore,Hn),r=Iy(t),s=ky(t.converter,e);return Ec(n,[Ay(mc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then((()=>r))}function fD(t,...e){t=qe(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Fp(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Fp(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let i,o,c;if(t instanceof Be)o=Pt(t.firestore,Hn),c=nc(t._key.path),i={next:l=>{e[r]&&e[r](Vy(o,t,l))},error:e[r+1],complete:e[r+2]};else{const l=Pt(t,Cr);o=Pt(l.firestore,Hn),c=l._query;const u=new Ih(o);i={next:f=>{e[r]&&e[r](new Kr(o,u,l,f))},error:e[r+1],complete:e[r+2]},Py(t._query)}return(function(u,f,p,m){const _=new dh(m),S=new uh(f,_,p);return u.asyncQueue.enqueueAndForget((async()=>ah(await Ra(u),S))),()=>{_.Nu(),u.asyncQueue.enqueueAndForget((async()=>ch(await Ra(u),S)))}})(fc(o),c,s,i)}function Ec(t,e){return(function(r,s){const i=new xn;return r.asyncQueue.enqueueAndForget((async()=>lC(await TC(r),s,i))),i.promise})(fc(t),e)}function Vy(t,e,n){const r=n.docs.get(e._key),s=new Ih(t);return new zr(t,s,e._key,r,new Ai(n.hasPendingWrites,n.fromCache),e.converter)}function UC(){return new ph("serverTimestamp")}function dD(...t){return new mh("arrayUnion",t)}(function(e,n=!0){(function(s){Gs=s})(Hs),wn(new sn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Hn(new NR(r.getProvider("auth-internal")),new VR(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Q(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),zt(qd,$d,e),zt(qd,$d,"esm2020")})();function Oy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BC=Oy,My=new ns("auth","Firebase",Oy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Ja("@firebase/auth");function jC(t,...e){Sa.logLevel<=me.WARN&&Sa.warn(`Auth (${Hs}): ${t}`,...e)}function ea(t,...e){Sa.logLevel<=me.ERROR&&Sa.error(`Auth (${Hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw vh(t,...e)}function In(t,...e){return vh(t,...e)}function xy(t,e,n){const r={...BC(),[e]:n};return new ns("auth","Firebase",r).create(e,{appName:t.name})}function Ln(t){return xy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return My.create(t,...e)}function oe(t,e,...n){if(!t)throw vh(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function Gn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(){return typeof self<"u"&&self.location?.href||""}function qC(){return jp()==="http:"||jp()==="https:"}function jp(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qC()||Ou()||"connection"in navigator)?navigator.onLine:!0}function HC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=nA()||iA()}get(){return $C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zC=new po(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function zn(t,e,n,r,s={}){return Fy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=oo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return sA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&$s(t.emulatorConfig.host)&&(u.credentials="include"),Ly.fetch()(await Uy(t,t.config.apiHost,n,c),u)})}async function Fy(t,e,n){t._canInitEmulator=!1;const r={...GC,...e};try{const s=new QC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Bo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Bo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xy(t,f,u);an(t,f)}}catch(s){if(s instanceof cn)throw s;an(t,"network-request-failed",{message:String(s)})}}async function mo(t,e,n,r,s={}){const i=await zn(t,e,n,r,s);return"mfaPendingCredential"in i&&an(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Uy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?wh(t.config,s):`${t.config.apiScheme}://${s}`;return WC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function KC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),zC.get())})}}function Bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=In(t,e,r);return s.customData._tokenResponse=n,s}function qp(t){return t!==void 0&&t.enterprise!==void 0}class YC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return KC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function JC(t,e){return zn(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e){return zn(t,"POST","/v1/accounts:delete",e)}async function Ca(t,e){return zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZC(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=Ah(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ui(pl(s.auth_time)),issuedAtTime:Ui(pl(s.iat)),expirationTime:Ui(pl(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function pl(t){return Number(t)*1e3}function Ah(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const s=$g(n);return s?JSON.parse(s):(ea("Failed to decode base64 JWT payload"),null)}catch(s){return ea("Caught error parsing JWT payload as JSON",s?.toString()),null}}function $p(t){const e=Ah(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&eP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(t){const e=t.auth,n=await t.getIdToken(),r=await Bs(t,Ca(e,{idToken:n}));oe(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?By(s.providerUserInfo):[],o=rP(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new au(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function nP(t){const e=qe(t);await Pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function By(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP(t,e){const n=await Fy(t,{},async()=>{const r=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Uy(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&$s(t.emulatorConfig.host)&&(l.credentials="include"),Ly.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iP(t,e){return zn(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$p(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=$p(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await sP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cs;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new tP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new au(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZC(this,e)}reload(){return nP(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await Bs(this,XC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:S,stsTokenManager:N}=n;oe(p&&N,e,"internal-error");const k=Cs.fromJSON(this.name,N);oe(typeof p=="string",e,"internal-error"),nr(r,e.name),nr(s,e.name),oe(typeof m=="boolean",e,"internal-error"),oe(typeof _=="boolean",e,"internal-error"),nr(i,e.name),nr(o,e.name),nr(c,e.name),nr(l,e.name),nr(u,e.name),nr(f,e.name);const U=new Zt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:k,createdAt:u,lastLoginAt:f});return S&&Array.isArray(S)&&(U.providerData=S.map(B=>({...B}))),l&&(U._redirectEventId=l),U}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cs;s.updateFromServerResponse(n);const i=new Zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?By(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new Cs;c.updateFromIdToken(r);const l=new Zt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new au(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=new Map;function Mn(t){Gn(t instanceof Function,"Expected a class definition");let e=Hp.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jy.type="NONE";const Gp=jy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ta(this.userKey,s.apiKey,i),this.fullPersistenceKey=ta("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ca(this.auth,{idToken:e}).catch(()=>{});return n?Zt._fromGetAccountInfoResponse(this.auth,n,e):null}return Zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ps(Mn(Gp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Mn(Gp);const o=ta(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Ca(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Zt._fromGetAccountInfoResponse(e,m,f)}else p=Zt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ps(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ps(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zy(e))return"Blackberry";if(Ky(e))return"Webos";if($y(e))return"Safari";if((e.includes("chrome/")||Hy(e))&&!e.includes("edge/"))return"Chrome";if(Wy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function qy(t=yt()){return/firefox\//i.test(t)}function $y(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hy(t=yt()){return/crios\//i.test(t)}function Gy(t=yt()){return/iemobile/i.test(t)}function Wy(t=yt()){return/android/i.test(t)}function zy(t=yt()){return/blackberry/i.test(t)}function Ky(t=yt()){return/webos/i.test(t)}function Rh(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oP(t=yt()){return Rh(t)&&!!window.navigator?.standalone}function aP(){return oA()&&document.documentMode===10}function Qy(t=yt()){return Rh(t)||Wy(t)||Ky(t)||zy(t)||/windows phone/i.test(t)||Gy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e=[]){let n;switch(t){case"Browser":n=Wp(yt());break;case"Worker":n=`${Wp(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,e={}){return zn(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=6;class hP{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??uP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zp(this),this.idTokenSubscription=new zp(this),this.beforeStateQueue=new cP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=My,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ca(this,{idToken:e}),r=await Zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if($t(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(Ln(this));const n=e?qe(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lP(this),n=new hP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await iP(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&jC(`Error while retrieving App Check token: ${e.error}`),e?.token}}function os(t){return qe(t)}class zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=fA(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dP(t){Tc=t}function Jy(t){return Tc.loadJS(t)}function pP(){return Tc.recaptchaEnterpriseScript}function mP(){return Tc.gapiScript}function gP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class _P{constructor(){this.enterprise=new yP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class yP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const EP="recaptcha-enterprise",Xy="NO_RECAPTCHA";class TP{constructor(e){this.type=EP,this.auth=os(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{JC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new YC(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;qp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Xy)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _P().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&qp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=pP();l.length!==0&&(l+=c),Jy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Kp(t,e,n,r=!1,s=!1){const i=new TP(t);let o;if(s)o=Xy;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function cu(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Kp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t,e){const n=rs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Bn(i,e??{}))return s;an(s,"already-initialized")}return n.initialize({options:e})}function vP(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Mn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function wP(t,e,n){const r=os(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zy(e),{host:o,port:c}=AP(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(Bn(u,r.config.emulator)&&Bn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,$s(o)?(zg(`${i}//${o}${l}`),Kg("Auth",!0)):RP()}function Zy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AP(t){const e=Zy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Qp(o)}}}function Qp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function bP(t,e){return zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e){return mo(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e){return mo(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function PP(t,e){return mo(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends bh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ro(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ro(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cu(e,n,"signInWithPassword",SP);case"emailLink":return CP(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cu(e,r,"signUpPassword",bP);case"emailLink":return PP(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return mo(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP="http://localhost";class Jr extends bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:NP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kP(t){const e=Ei(Ti(t)).link,n=e?Ei(Ti(e)).deep_link_id:null,r=Ei(Ti(t)).deep_link_id;return(r?Ei(Ti(r)).link:null)||r||n||e||t}class Sh{constructor(e){const n=Ei(Ti(e)),r=n.apiKey??null,s=n.oobCode??null,i=DP(n.mode??null);oe(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=kP(e);try{return new Sh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return ro._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sh.parseLink(n);return oe(r,"argument-error"),ro._fromEmailAndCode(e,r.code,r.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends eE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends go{constructor(){super("facebook.com")}static credential(e){return Jr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends go{constructor(){super("github.com")}static credential(e){return Jr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends go{constructor(){super("twitter.com")}static credential(e,n){return Jr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e){return mo(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Zt._fromIdTokenResponse(e,r,s),o=Yp(r);return new Xr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Yp(r);return new Xr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Yp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends cn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Na.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Na(e,n,r,s)}}function tE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Na._fromErrorAndOperation(t,i,e,r):i})}async function OP(t,e,n=!1){const r=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP(t,e,n=!1){const{auth:r}=t;if($t(r.app))return Promise.reject(Ln(r));const s="reauthenticate";try{const i=await Bs(t,tE(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=Ah(i.idToken);oe(o,r,"internal-error");const{sub:c}=o;return oe(t.uid===c,r,"user-mismatch"),Xr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(t,e,n=!1){if($t(t.app))return Promise.reject(Ln(t));const r="signIn",s=await tE(t,r,e),i=await Xr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function xP(t,e){return nE(os(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(t){const e=os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LP(t,e,n){if($t(t.app))return Promise.reject(Ln(t));const r=os(t),o=await cu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&rE(t),l}),c=await Xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function FP(t,e,n){return $t(t.app)?Promise.reject(Ln(t)):xP(qe(t),Js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e){return zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Bs(r,UP(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function jP(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function qP(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function $P(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function HP(t){return qe(t).signOut()}const Da="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Da,"1"),this.storage.removeItem(Da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=1e3,WP=10;class iE extends sE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);aP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,WP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iE.type="LOCAL";const zP=iE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE extends sE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oE.type="SESSION";const aE=oE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await KP(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Ch("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function YP(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function JP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XP(){return navigator?.serviceWorker?.controller||null}function ZP(){return cE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="firebaseLocalStorageDb",e0=1,ka="firebaseLocalStorage",uE="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vc(t,e){return t.transaction([ka],e?"readwrite":"readonly").objectStore(ka)}function t0(){const t=indexedDB.deleteDatabase(lE);return new _o(t).toPromise()}function lu(){const t=indexedDB.open(lE,e0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ka,{keyPath:uE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ka)?e(r):(r.close(),await t0(),e(await lu()))})})}async function Jp(t,e,n){const r=vc(t,!0).put({[uE]:e,value:n});return new _o(r).toPromise()}async function n0(t,e){const n=vc(t,!1).get(e),r=await new _o(n).toPromise();return r===void 0?null:r.value}function Xp(t,e){const n=vc(t,!0).delete(e);return new _o(n).toPromise()}const r0=800,s0=3;class hE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>s0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(ZP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await JP(),!this.activeServiceWorker)return;this.sender=new QP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lu();return await Jp(e,Da,"1"),await Xp(e,Da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>n0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=vc(s,!1).getAll();return new _o(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hE.type="LOCAL";const i0=hE;new po(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t,e){return e?Mn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph extends bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function a0(t){return nE(t.auth,new Ph(t),t.bypassAuthState)}function c0(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),MP(n,new Ph(t),t.bypassAuthState)}async function l0(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),OP(n,new Ph(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return a0;case"linkViaPopup":case"linkViaRedirect":return l0;case"reauthViaPopup":case"reauthViaRedirect":return c0;default:an(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new po(2e3,1e4);class Ts extends fE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=Ch();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u0.get())};e()}}Ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="pendingRedirect",na=new Map;class f0 extends fE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await d0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function d0(t,e){const n=g0(e),r=m0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function p0(t,e){na.set(t._key(),e)}function m0(t){return Mn(t._redirectPersistence)}function g0(t){return ta(h0,t.config.apiKey,t.name)}async function _0(t,e,n=!1){if($t(t.app))return Promise.reject(Ln(t));const r=os(t),s=o0(r,e),o=await new f0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=600*1e3;class E0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!dE(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(In(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=y0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zp(e))}saveEventToCache(e){this.cachedEventUids.add(Zp(e)),this.lastProcessedEventTime=Date.now()}}function Zp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dE({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function T0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t,e={}){return zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w0=/^https?/;async function A0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await I0(t);for(const n of e)try{if(R0(n))return}catch{}an(t,"unauthorized-domain")}function R0(t){const e=ou(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!w0.test(n))return!1;if(v0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=new po(3e4,6e4);function em(){const t=vn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function S0(t){return new Promise((e,n)=>{function r(){em(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{em(),n(In(t,"network-request-failed"))},timeout:b0.get()})}if(vn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(vn().gapi?.load)r();else{const s=gP("iframefcb");return vn()[s]=()=>{gapi.load?r():n(In(t,"network-request-failed"))},Jy(`${mP()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ra=null,e})}let ra=null;function C0(t){return ra=ra||S0(t),ra}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=new po(5e3,15e3),N0="__/auth/iframe",D0="emulator/auth/iframe",k0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O0(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wh(e,D0):`https://${t.config.authDomain}/${N0}`,r={apiKey:e.apiKey,appName:t.name,v:Hs},s=V0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oo(r).slice(1)}`}async function M0(t){const e=await C0(t),n=vn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:O0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),c=vn().setTimeout(()=>{i(o)},P0.get());function l(){vn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L0=500,F0=600,U0="_blank",B0="http://localhost";class tm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j0(t,e,n,r=L0,s=F0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...x0,width:r.toString(),height:s.toString(),top:i,left:o},u=yt().toLowerCase();n&&(c=Hy(u)?U0:n),qy(u)&&(e=e||B0,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(oP(u)&&c!=="_self")return q0(e||"",c),new tm(null);const p=window.open(e||"",c,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new tm(p)}function q0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="__/auth/handler",H0="emulator/auth/handler",G0=encodeURIComponent("fac");async function nm(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hs,eventId:s};if(e instanceof eE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof go){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${G0}=${encodeURIComponent(l)}`:"";return`${W0(t)}?${oo(c).slice(1)}${u}`}function W0({config:t}){return t.emulator?wh(t,H0):`https://${t.authDomain}/${$0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="webStorageSupport";class z0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aE,this._completeRedirectFn=_0,this._overrideRedirectResult=p0}async _openPopup(e,n,r,s){Gn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await nm(e,n,r,ou(),s);return j0(e,i,Ch())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await nm(e,n,r,ou(),s);return YP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await M0(e),r=new E0(e);return n.register("authEvent",s=>(oe(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ml,{type:ml},s=>{const i=s?.[0]?.[ml];i!==void 0&&n(!!i),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qy()||$y()||Rh()}}const K0=z0;var rm="@firebase/auth",sm="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J0(t){wn(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yy(t)},u=new fP(r,s,i,l);return vP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wn(new sn("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(r=>new Q0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(rm,sm,Y0(t)),zt(rm,sm,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=300,Z0=Wg("authIdTokenMaxAge")||X0;let im=null;const e1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Z0)return;const s=n?.token;im!==s&&(im=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function t1(t=Fu()){const e=rs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IP(t,{popupRedirectResolver:K0,persistence:[i0,zP,aE]}),r=Wg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=e1(i.toString());qP(n,o,()=>o(n.currentUser)),jP(n,c=>o(c))}}const s=Hg("auth");return s&&wP(n,`http://${s}`),n}function n1(){return document.getElementsByTagName("head")?.[0]??document}dP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=In("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",n1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J0("Browser");const pE="@firebase/installations",Nh="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=1e4,gE=`w:${Nh}`,_E="FIS_v2",r1="https://firebaseinstallations.googleapis.com/v1",s1=3600*1e3,i1="installations",o1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zr=new ns(i1,o1,a1);function yE(t){return t instanceof cn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE({projectId:t}){return`${r1}/projects/${t}/installations`}function TE(t){return{token:t.token,requestStatus:2,expiresIn:l1(t.expiresIn),creationTime:Date.now()}}async function IE(t,e){const r=(await e.json()).error;return Zr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function vE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function c1(t,{refreshToken:e}){const n=vE(t);return n.append("Authorization",u1(e)),n}async function wE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function l1(t){return Number(t.replace("s","000"))}function u1(t){return`${_E} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=EE(t),s=vE(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:_E,appId:t.appId,sdkVersion:gE},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await wE(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:TE(u.authToken)}}else throw await IE("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=/^[cdef][\w-]{21}$/,uu="";function p1(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=m1(t);return d1.test(n)?n:uu}catch{return uu}}function m1(t){return f1(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=new Map;function bE(t,e){const n=wc(t);SE(n,e),g1(n,e)}function SE(t,e){const n=RE.get(t);if(n)for(const r of n)r(e)}function g1(t,e){const n=_1();n&&n.postMessage({key:t,fid:e}),y1()}let Hr=null;function _1(){return!Hr&&"BroadcastChannel"in self&&(Hr=new BroadcastChannel("[Firebase] FID Change"),Hr.onmessage=t=>{SE(t.data.key,t.data.fid)}),Hr}function y1(){RE.size===0&&Hr&&(Hr.close(),Hr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="firebase-installations-database",T1=1,es="firebase-installations-store";let gl=null;function Dh(){return gl||(gl=Xg(E1,T1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(es)}}})),gl}async function Va(t,e){const n=wc(t),s=(await Dh()).transaction(es,"readwrite"),i=s.objectStore(es),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&bE(t,e.fid),e}async function CE(t){const e=wc(t),r=(await Dh()).transaction(es,"readwrite");await r.objectStore(es).delete(e),await r.done}async function Ac(t,e){const n=wc(t),s=(await Dh()).transaction(es,"readwrite"),i=s.objectStore(es),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&bE(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kh(t){let e;const n=await Ac(t.appConfig,r=>{const s=I1(r),i=v1(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===uu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function I1(t){const e=t||{fid:p1(),registrationStatus:0};return PE(e)}function v1(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Zr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=w1(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:A1(t)}:{installationEntry:e}}async function w1(t,e){try{const n=await h1(t,e);return Va(t.appConfig,n)}catch(n){throw yE(n)&&n.customData.serverCode===409?await CE(t.appConfig):await Va(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function A1(t){let e=await om(t.appConfig);for(;e.registrationStatus===1;)await AE(100),e=await om(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await kh(t);return r||n}return e}function om(t){return Ac(t,e=>{if(!e)throw Zr.create("installation-not-found");return PE(e)})}function PE(t){return R1(t)?{fid:t.fid,registrationStatus:0}:t}function R1(t){return t.registrationStatus===1&&t.registrationTime+mE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1({appConfig:t,heartbeatServiceProvider:e},n){const r=S1(t,n),s=c1(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:gE,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await wE(()=>fetch(r,c));if(l.ok){const u=await l.json();return TE(u)}else throw await IE("Generate Auth Token",l)}function S1(t,{fid:e}){return`${EE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vh(t,e=!1){let n;const r=await Ac(t.appConfig,i=>{if(!NE(i))throw Zr.create("not-registered");const o=i.authToken;if(!e&&N1(o))return i;if(o.requestStatus===1)return n=C1(t,e),i;{if(!navigator.onLine)throw Zr.create("app-offline");const c=k1(i);return n=P1(t,c),c}});return n?await n:r.authToken}async function C1(t,e){let n=await am(t.appConfig);for(;n.authToken.requestStatus===1;)await AE(100),n=await am(t.appConfig);const r=n.authToken;return r.requestStatus===0?Vh(t,e):r}function am(t){return Ac(t,e=>{if(!NE(e))throw Zr.create("not-registered");const n=e.authToken;return V1(n)?{...e,authToken:{requestStatus:0}}:e})}async function P1(t,e){try{const n=await b1(t,e),r={...e,authToken:n};return await Va(t.appConfig,r),n}catch(n){if(yE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await CE(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Va(t.appConfig,r)}throw n}}function NE(t){return t!==void 0&&t.registrationStatus===2}function N1(t){return t.requestStatus===2&&!D1(t)}function D1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+s1}function k1(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function V1(t){return t.requestStatus===1&&t.requestTime+mE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t){const e=t,{installationEntry:n,registrationPromise:r}=await kh(e);return r?r.catch(console.error):Vh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(t,e=!1){const n=t;return await x1(n),(await Vh(n,e)).token}async function x1(t){const{registrationPromise:e}=await kh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t){if(!t||!t.options)throw _l("App Configuration");if(!t.name)throw _l("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _l(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _l(t){return Zr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="installations",F1="installations-internal",U1=t=>{const e=t.getProvider("app").getImmediate(),n=L1(e),r=rs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},B1=t=>{const e=t.getProvider("app").getImmediate(),n=rs(e,DE).getImmediate();return{getId:()=>O1(n),getToken:s=>M1(n,s)}};function j1(){wn(new sn(DE,U1,"PUBLIC")),wn(new sn(F1,B1,"PRIVATE"))}j1();zt(pE,Nh);zt(pE,Nh,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="analytics",q1="firebase_id",$1="origin",H1=60*1e3,G1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Ja("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Bt=new ns("analytics","Analytics",W1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(t){if(!t.startsWith(Oh)){const e=Bt.create("invalid-gtag-resource",{gtagURL:t});return Nt.warn(e.message),""}return t}function kE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function K1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Q1(t,e){const n=K1("firebase-js-sdk-policy",{createScriptURL:z1}),r=document.createElement("script"),s=`${Oh}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Y1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function J1(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await kE(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Nt.error(c)}t("config",s,i)}async function X1(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await kE(n);for(const l of o){const u=c.find(p=>p.measurementId===l),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Nt.error(i)}}function Z1(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await X1(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await J1(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Nt.error(c)}}return s}function eN(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Z1(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function tN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Oh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=30,rN=1e3;class sN{constructor(e={},n=rN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VE=new sN;function iN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function oN(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:iN(n)},s=G1.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();c.error?.message&&(o=c.error.message)}catch{}throw Bt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function aN(t,e=VE,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Bt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Bt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new uN;return setTimeout(async()=>{c.abort()},H1),OE({appId:r,apiKey:s,measurementId:i},o,c,e)}async function OE(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=VE){const{appId:i,measurementId:o}=t;try{await cN(r,e)}catch(c){if(o)return Nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw c}try{const c=await oN(t);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!lN(l)){if(s.deleteThrottleMetadata(i),o)return Nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw c}const u=Number(l?.customData?.httpStatus)===503?kd(n,s.intervalMillis,nN):kd(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,f),Nt.debug(`Calling attemptFetch again in ${u} millis`),OE(t,f,r,s)}}function cN(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function lN(t){if(!(t instanceof cn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class uN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function hN(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(){if(Mu())try{await xu()}catch(t){return Nt.warn(Bt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Nt.warn(Bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dN(t,e,n,r,s,i,o){const c=aN(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Nt.error(m)),e.push(c);const l=fN().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);tN(i)||Q1(i,u.measurementId),s("js",new Date);const p=o?.config??{};return p[$1]="firebase",p.update=!0,f!=null&&(p[q1]=f),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.app=e}_delete(){return delete Bi[this.app.options.appId],Promise.resolve()}}let Bi={},cm=[];const lm={};let yl="dataLayer",mN="gtag",um,ME,hm=!1;function gN(){const t=[];if(Ou()&&t.push("This is a browser extension environment."),Qg()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Bt.create("invalid-analytics-context",{errorInfo:e});Nt.warn(n.message)}}function _N(t,e,n){gN();const r=t.options.appId;if(!r)throw Bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Bt.create("no-api-key");if(Bi[r]!=null)throw Bt.create("already-exists",{id:r});if(!hm){Y1(yl);const{wrappedGtag:i,gtagCore:o}=eN(Bi,cm,lm,yl,mN);ME=i,um=o,hm=!0}return Bi[r]=dN(t,cm,lm,e,um,yl,n),new pN(t)}function yN(t=Fu()){t=qe(t);const e=rs(t,Oa);return e.isInitialized()?e.getImmediate():EN(t)}function EN(t,e={}){const n=rs(t,Oa);if(n.isInitialized()){const s=n.getImmediate();if(Bn(e,n.getOptions()))return s;throw Bt.create("already-initialized")}return n.initialize({options:e})}async function TN(){if(Ou()||!Qg()||!Mu())return!1;try{return await xu()}catch{return!1}}function IN(t,e,n,r){t=qe(t),hN(ME,Bi[t.app.options.appId],e,n,r).catch(s=>Nt.error(s))}const fm="@firebase/analytics",dm="0.10.18";function vN(){wn(new sn(Oa,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return _N(r,s,n)},"PUBLIC")),wn(new sn("analytics-internal",t,"PRIVATE")),zt(fm,dm),zt(fm,dm,"esm2020");function t(e){try{const n=e.getProvider(Oa).getImmediate();return{logEvent:(r,s,i)=>IN(n,r,s,i)}}catch(n){throw Bt.create("interop-component-reg-failed",{reason:n})}}}vN();const wN={apiKey:"AIzaSyDyr-h4QsIMdAWd02MLa3RIImLi_CxQEkA",authDomain:"attendnow-10de9.firebaseapp.com",projectId:"attendnow-10de9",storageBucket:"attendnow-10de9.firebasestorage.app",appId:"1:121721121298:web:d06e2935efff4b65b1c6cb",measurementId:"G-DFXC097QKG"},Mh=Zg(wN),AN=AC(Mh),yo=t1(Mh);TN().then(t=>t?yN(Mh):null);const xE=Gt(yo.currentUser),LE=Gt(!0),js=Gt(null);$P(yo,async t=>{xE.value=t,LE.value=!1});async function RN(t,e){try{const n=Iy(AN,"instructors",t.uid);(await LC(n)).exists()||await FC(n,{uid:t.uid,name:e||t.displayName||"",email:t.email,role:"instructor",createdAt:UC()})}catch(n){console.warn("[auth] ensureInstructorProfile warning:",n)}}async function FE(t,e){js.value=null;try{return await FP(yo,t,e)}catch(n){throw js.value=n?.message??"Failed to sign in",n}}async function UE(t,e,n){js.value=null;try{const r=await LP(yo,e,n);if(t)try{await BP(r.user,{displayName:t})}catch(s){console.warn("[auth] updateProfile warning:",s)}return await RN(r.user,t),r}catch(r){throw js.value=r?.message??"Failed to sign up",r}}async function BE(){js.value=null,await HP(yo)}function Eo(){return{user:xE,loading:LE,error:js,signIn:FE,signUp:UE,signOut:BE}}const bN=["aria-expanded"],SN={class:"initial"},CN={key:0,class:"dropdown"},PN={class:"info"},NN={class:"name"},DN={class:"email"},kN=qs({__name:"UserMenu",emits:["open-auth"],setup(t,{emit:e}){const n=e,{user:r}=Eo(),s=Gt(!1),i=Gt(null),o=Mt(()=>{const _=r.value;if(!_)return"";const S=(_.displayName||_.email||"").trim();return S?S.charAt(0).toUpperCase():""});function c(){s.value=!s.value}function l(){s.value=!1}function u(){n("open-auth","signin")}function f(){n("open-auth","signup")}async function p(){await BE(),l()}function m(_){i.value&&(i.value.contains(_.target)||l())}return Ru(()=>{document.addEventListener("click",m)}),bu(()=>{document.removeEventListener("click",m)}),(_,S)=>(Ft(),Vn("div",{class:"user-menu",ref_key:"root",ref:i},[We(r)?(Ft(),Vn(qt,{key:0},[Ce("button",{class:"avatar",onClick:c,"aria-expanded":s.value},[Ce("span",SN,Gr(o.value),1)],8,bN),s.value?(Ft(),Vn("div",CN,[Ce("div",PN,[Ce("div",NN,Gr(We(r)?.displayName||"Account"),1),Ce("div",DN,Gr(We(r)?.email),1)]),Ce("button",{class:"item",onClick:p},"Sign out")])):bs("",!0)],64)):(Ft(),Vn(qt,{key:1},[Ce("button",{class:"ghost",onClick:u},"Sign in"),Ce("button",{class:"solid",onClick:f},"Sign up")],64))],512))}}),Rc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},VN=Rc(kN,[["__scopeId","data-v-b6f86bf8"]]),ON={class:"nav"},MN={class:"left"},xN={class:"center"},LN={class:"right"},FN=qs({__name:"NavBar",emits:["open-auth"],setup(t,{emit:e}){const{user:n}=Eo(),r=e,s=i=>r("open-auth",i);return(i,o)=>(Ft(),Vn("nav",ON,[Ce("div",MN,[Ke(We(yi),{to:"/","aria-label":"Home",class:"brand"},{default:gi(()=>[...o[0]||(o[0]=[Ce("span",{class:"brand-text"},"AttendNow",-1)])]),_:1})]),Ce("div",xN,[Ke(We(yi),{to:"/",class:"link"},{default:gi(()=>[...o[1]||(o[1]=[Wo("Home",-1)])]),_:1}),We(n)?(Ft(),ha(We(yi),{key:0,to:"/dashboard",class:"link"},{default:gi(()=>[...o[2]||(o[2]=[Wo("Dashboard",-1)])]),_:1})):bs("",!0),We(n)?(Ft(),ha(We(yi),{key:1,to:"/snapshot",class:"link"},{default:gi(()=>[...o[3]||(o[3]=[Wo("Today's Snapshot",-1)])]),_:1})):bs("",!0)]),Ce("div",LN,[Ke(VN,{onOpenAuth:s})])]))}}),UN=Rc(FN,[["__scopeId","data-v-5b05aab8"]]),BN={class:"modal"},jN={class:"modal-header"},qN={key:0},$N={key:1,class:"error"},HN=["disabled"],GN=qs({__name:"AuthModal",props:{show:{type:Boolean},mode:{}},emits:["update:show"],setup(t,{emit:e}){const n=t,r=e,s=Gt(n.show);fr(()=>n.show,_=>s.value=_),fr(s,_=>r("update:show",_));const i=Mt(()=>n.mode==="signin"),{error:o,loading:c}=Eo(),l=Gt(""),u=Gt(""),f=Gt("");function p(){s.value=!1}async function m(){try{i.value?await FE(u.value,f.value):await UE(l.value,u.value,f.value),p()}catch(_){console.error("[auth] submit error",_)}}return(_,S)=>(Ft(),ha(ZT,{to:"body"},[s.value?(Ft(),Vn("div",{key:0,class:"modal-backdrop",onClick:hd(p,["self"])},[Ce("div",BN,[Ce("header",jN,[Ce("h3",null,Gr(i.value?"Sign in":"Sign up"),1),Ce("button",{class:"icon",onClick:p,"aria-label":"Close"},"✕")]),Ce("form",{class:"form",onSubmit:hd(m,["prevent"])},[i.value?bs("",!0):(Ft(),Vn("label",qN,[S[3]||(S[3]=Ce("span",null,"Full name",-1)),Gc(Ce("input",{"onUpdate:modelValue":S[0]||(S[0]=N=>l.value=N),type:"text",placeholder:"Ada Lovelace",required:""},null,512),[[Zc,l.value]])])),Ce("label",null,[S[4]||(S[4]=Ce("span",null,"Email",-1)),Gc(Ce("input",{"onUpdate:modelValue":S[1]||(S[1]=N=>u.value=N),type:"email",placeholder:"you@example.com",required:""},null,512),[[Zc,u.value]])]),Ce("label",null,[S[5]||(S[5]=Ce("span",null,"Password",-1)),Gc(Ce("input",{"onUpdate:modelValue":S[2]||(S[2]=N=>f.value=N),type:"password",placeholder:"••••••••",required:""},null,512),[[Zc,f.value]])]),We(o)?(Ft(),Vn("p",$N,Gr(We(o)),1)):bs("",!0),Ce("button",{class:"primary",type:"submit",disabled:We(c)},Gr(We(c)?i.value?"Signing in…":"Creating…":i.value?"Sign in":"Create account"),9,HN)],32)])])):bs("",!0)]))}}),WN=Rc(GN,[["__scopeId","data-v-03623287"]]),zN={class:"app-container"},KN=qs({__name:"App",setup(t){const e=Gt(!1),n=Gt("signin"),r=qw(),s=jw(),{user:i}=Eo();function o(c){n.value=c,e.value=!0}return fr(()=>r.query.showAuth,c=>{(c==="signup"||c==="signin")&&o(c)},{immediate:!0}),fr([e,i],([c,l])=>{if(!c&&l&&r.query.redirect){const u=r.query.redirect;s.push(u)}}),(c,l)=>(Ft(),Vn("div",zN,[Ke(UN,{onOpenAuth:o}),Ke(We(Bg),{onOpenAuth:o}),Ke(WN,{show:e.value,"onUpdate:show":l[0]||(l[0]=u=>e.value=u),mode:n.value},null,8,["show","mode"])]))}}),QN=Rc(KN,[["__scopeId","data-v-85a70afa"]]),YN="modulepreload",JN=function(t){return"/team-webdevteamgo/"+t},pm={},fs=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(n.map(u=>{if(u=JN(u),u in pm)return;pm[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":YN,f||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),f)return new Promise((_,S)=>{m.addEventListener("load",_),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},XN=[{path:"/team-webdevteamgo",name:"home",component:()=>fs(()=>import("./HomeView-l2pNu_xq.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!1}},{path:"/checkin/:id",name:"checkin",component:()=>fs(()=>import("./StudentCheckInForm-DdkE9LP4.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!1}},{path:"/dashboard",name:"dashboard",component:()=>fs(()=>import("./DashboardView-Bu1mRKzl.js"),__vite__mapDeps([4,5,6])),meta:{requiresAuth:!0}},{path:"/create",name:"create",component:()=>fs(()=>import("./CreationView-CnniuG2V.js"),__vite__mapDeps([7,5,8])),meta:{requiresAuth:!0}},{path:"/snapshot",name:"snapshot",component:()=>fs(()=>import("./SnapshotView-BtNRb9uN.js"),__vite__mapDeps([9,10])),meta:{requiresAuth:!0}},{path:"/course/:courseId/attendance",name:"attendance-history",component:()=>fs(()=>import("./AttendanceHistoryView-BWk4PTYY.js"),__vite__mapDeps([11,5,12])),meta:{requiresAuth:!0}}],xh=Bw({history:Tw(),routes:XN,scrollBehavior(){return{top:0}}});xh.beforeEach((t,e,n)=>{const{user:r}=Eo();t.meta.requiresAuth&&!r.value?n({name:"home",query:{redirect:t.fullPath,showAuth:"signup"}}):n()});const jE=Ov(QN);jE.use(xh);xh.isReady().then(()=>{jE.mount("#app")});export{bu as A,eD as B,jw as C,ZN as D,xh as E,qt as F,sD as G,fD as H,gu as I,hD as J,iD as K,oD as L,aD as M,cD as N,Me as O,uD as P,yi as R,nD as T,Rc as _,Ce as a,tD as b,Vn as c,qs as d,Ke as e,Wo as f,Eo as g,qw as h,Ru as i,LC as j,Iy as k,AN as l,bs as m,Gc as n,Ft as o,lD as p,dD as q,Gt as r,fr as s,Gr as t,We as u,Zc as v,gi as w,ha as x,hd as y,Mt as z};
