import{S as h,i as g,s as $,x as I,y as q,z as w,r as u,p as c,C as B,G as v,e as y,c as b,a as k,d as _,b as f,g as C,I as S,J as j,K as F,k as D,m as E,F as V,o as z,q as G,T as J}from"./index-4309a87d.js";import{C as K}from"./JuliaCodeBlock-85438e7f.js";function L(a){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}const N={name:"shell",register:L};var T=N;function A(a){let e,i;return e=new K({props:{language:T,code:m+a[0]}}),{c(){I(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,o){w(e,l,o),i=!0},p(l,[o]){const t={};o&1&&(t.code=m+l[0]),e.$set(t)},i(l){i||(u(e.$$.fragment,l),i=!0)},o(l){c(e.$$.fragment,l),i=!1},d(l){B(e,l)}}}const m="\u279C \u2717 ";function H(a,e,i){let{code:l}=e;return a.$$set=o=>{"code"in o&&i(0,l=o.code)},[l]}class U extends h{constructor(e){super(),g(this,e,H,A,$,{code:0})}}const M=a=>({}),d=a=>({});function p(a){let e,i;const l=a[3].output,o=v(l,a,a[2],d);return{c(){e=y("div"),o&&o.c(),this.h()},l(t){e=b(t,"DIV",{class:!0});var s=k(e);o&&o.l(s),s.forEach(_),this.h()},h(){f(e,"class","output svelte-yjom51")},m(t,s){C(t,e,s),o&&o.m(e,null),i=!0},p(t,s){o&&o.p&&(!i||s&4)&&S(o,l,t,t[2],i?F(l,t[2],s,M):j(t[2]),d)},i(t){i||(u(o,t),i=!0)},o(t){c(o,t),i=!1},d(t){t&&_(e),o&&o.d(t)}}}function O(a){let e,i,l;const o=a[3].default,t=v(o,a,a[2],null);let s=a[1].output&&p(a);return{c(){e=y("div"),t&&t.c(),i=D(),s&&s.c(),this.h()},l(n){e=b(n,"DIV",{style:!0,class:!0});var r=k(e);t&&t.l(r),i=E(r),s&&s.l(r),r.forEach(_),this.h()},h(){f(e,"style",a[0]),f(e,"class","frame svelte-yjom51")},m(n,r){C(n,e,r),t&&t.m(e,null),V(e,i),s&&s.m(e,null),l=!0},p(n,[r]){t&&t.p&&(!l||r&4)&&S(t,o,n,n[2],l?F(o,n[2],r,null):j(n[2]),null),n[1].output?s?(s.p(n,r),r&2&&u(s,1)):(s=p(n),s.c(),u(s,1),s.m(e,null)):s&&(z(),c(s,1,1,()=>{s=null}),G()),(!l||r&1)&&f(e,"style",n[0])},i(n){l||(u(t,n),u(s),l=!0)},o(n){c(t,n),c(s),l=!1},d(n){n&&_(e),t&&t.d(n),s&&s.d()}}}function P(a,e,i){let{$$slots:l={},$$scope:o}=e;const t=J(l);let{style:s}=e;return a.$$set=n=>{"style"in n&&i(0,s=n.style),"$$scope"in n&&i(2,o=n.$$scope)},[s,t,o,l]}class W extends h{constructor(e){super(),g(this,e,P,O,$,{style:0})}}export{W as C,U as S};
