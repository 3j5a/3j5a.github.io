import{S as Y,i as G,s as O,e as h,t as D,k as p,x as y,K as Q,c as _,a as v,h as F,d as c,m as g,y as C,b as U,F as o,g as P,z as S,r as w,p as A,C as R}from"../chunks/index-ec4507eb.js";import{J as V,a as W,b as X,T as Z}from"../chunks/Tombstone-8bb79dbd.js";function ee($){let s,b,m,n,a,k,j,T,z,J,q,H,l,I,i,L,d,x,f,B;return l=new V({props:{code:$[0].java[0].code}}),i=new W({props:{code:$[0].javascript[0].code}}),d=new X({props:{code:$[0].julia[0].code}}),f=new Z({}),{c(){s=h("style"),b=D(`.about code.hljs {
    font-size: 0.6em;
}`),m=p(),n=h("main"),a=h("article"),k=h("header"),j=h("h4"),T=D("about"),z=p(),J=h("p"),q=D("Java, JavaScript, Julia Reflective Journal."),H=p(),y(l.$$.fragment),I=p(),y(i.$$.fragment),L=p(),y(d.$$.fragment),x=p(),y(f.$$.fragment),this.h()},l(e){const r=Q('[data-svelte="svelte-b9kth2"]',document.head);s=_(r,"STYLE",{});var E=v(s);b=F(E,`.about code.hljs {
    font-size: 0.6em;
}`),E.forEach(c),r.forEach(c),m=g(e),n=_(e,"MAIN",{});var u=v(n);a=_(u,"ARTICLE",{class:!0});var t=v(a);k=_(t,"HEADER",{});var K=v(k);j=_(K,"H4",{});var M=v(j);T=F(M,"about"),M.forEach(c),K.forEach(c),z=g(t),J=_(t,"P",{});var N=v(J);q=F(N,"Java, JavaScript, Julia Reflective Journal."),N.forEach(c),H=g(t),C(l.$$.fragment,t),I=g(t),C(i.$$.fragment,t),L=g(t),C(d.$$.fragment,t),t.forEach(c),x=g(u),C(f.$$.fragment,u),u.forEach(c),this.h()},h(){U(a,"class","about")},m(e,r){o(document.head,s),o(s,b),P(e,m,r),P(e,n,r),o(n,a),o(a,k),o(k,j),o(j,T),o(a,z),o(a,J),o(J,q),o(a,H),S(l,a,null),o(a,I),S(i,a,null),o(a,L),S(d,a,null),o(n,x),S(f,n,null),B=!0},p(e,[r]){const E={};r&1&&(E.code=e[0].java[0].code),l.$set(E);const u={};r&1&&(u.code=e[0].javascript[0].code),i.$set(u);const t={};r&1&&(t.code=e[0].julia[0].code),d.$set(t)},i(e){B||(w(l.$$.fragment,e),w(i.$$.fragment,e),w(d.$$.fragment,e),w(f.$$.fragment,e),B=!0)},o(e){A(l.$$.fragment,e),A(i.$$.fragment,e),A(d.$$.fragment,e),A(f.$$.fragment,e),B=!1},d(e){c(s),e&&c(m),e&&c(n),R(l),R(i),R(d),R(f)}}}function ae($,s,b){let{codeBlocks:m}=s;return $.$$set=n=>{"codeBlocks"in n&&b(0,m=n.codeBlocks)},[m]}class ne extends Y{constructor(s){super(),G(this,s,ae,ee,O,{codeBlocks:0})}}export{ne as default};