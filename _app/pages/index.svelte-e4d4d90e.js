import{S as q,i as z,s as H,e as p,k as y,t as K,c as g,a as v,d as f,m as E,h as P,b as m,g as L,F as h,j as R,n as N,x as w,K as D,y as x,z as b,r as C,p as I,C as A}from"../chunks/index-ec4507eb.js";import{C as F}from"../chunks/Caret-ae036809.js";import{b as S}from"../chunks/paths-396f020f.js";function M(u){let t,l,e,n,s,d,i,_;return{c(){t=p("header"),l=p("h4"),e=p("a"),n=p("i"),s=p("i"),d=y(),i=K(u[0]),this.h()},l(r){t=g(r,"HEADER",{class:!0});var o=v(t);l=g(o,"H4",{class:!0});var a=v(l);e=g(a,"A",{href:!0,class:!0});var c=v(e);n=g(c,"I",{class:!0}),v(n).forEach(f),s=g(c,"I",{class:!0}),v(s).forEach(f),d=E(c),i=P(c,u[0]),c.forEach(f),a.forEach(f),o.forEach(f),this.h()},h(){m(n,"class","fa-solid fa-arrow-right svelte-1pnnaf8"),m(s,"class","fa-solid fa-xmark svelte-1pnnaf8"),m(e,"href",_=S+"/"+u[1]),m(e,"class","svelte-1pnnaf8"),m(l,"class","reference svelte-1pnnaf8"),m(t,"class","page-link")},m(r,o){L(r,t,o),h(t,l),h(l,e),h(e,n),h(e,s),h(e,d),h(e,i)},p(r,[o]){o&1&&R(i,r[0]),o&2&&_!==(_=S+"/"+r[1])&&m(e,"href",_)},i:N,o:N,d(r){r&&f(t)}}}function O(u,t,l){let{title:e}=t,{page:n}=t;return u.$$set=s=>{"title"in s&&l(0,e=s.title),"page"in s&&l(1,n=s.page)},[e,n]}class j extends q{constructor(t){super(),z(this,t,O,M,H,{title:0,page:1})}}function T(u){let t,l,e,n,s,d,i,_,r,o;return s=new j({props:{page:"wayback",title:"way back"}}),i=new j({props:{page:"flavors",title:"flavors"}}),r=new F({}),{c(){t=p("link"),l=y(),e=p("main"),n=p("section"),w(s.$$.fragment),d=y(),w(i.$$.fragment),_=y(),w(r.$$.fragment),this.h()},l(a){const c=D('[data-svelte="svelte-1k84m4k"]',document.head);t=g(c,"LINK",{rel:!0,href:!0}),c.forEach(f),l=E(a),e=g(a,"MAIN",{});var $=v(e);n=g($,"SECTION",{class:!0});var k=v(n);x(s.$$.fragment,k),d=E(k),x(i.$$.fragment,k),k.forEach(f),_=E($),x(r.$$.fragment,$),$.forEach(f),this.h()},h(){m(t,"rel","stylesheet"),m(t,"href","/css/fontawesome-all.min.css"),m(n,"class","pages svelte-198kjoz")},m(a,c){h(document.head,t),L(a,l,c),L(a,e,c),h(e,n),b(s,n,null),h(n,d),b(i,n,null),h(e,_),b(r,e,null),o=!0},p:N,i(a){o||(C(s.$$.fragment,a),C(i.$$.fragment,a),C(r.$$.fragment,a),o=!0)},o(a){I(s.$$.fragment,a),I(i.$$.fragment,a),I(r.$$.fragment,a),o=!1},d(a){f(t),a&&f(l),a&&f(e),A(s),A(i),A(r)}}}class Q extends q{constructor(t){super(),z(this,t,null,T,H,{})}}export{Q as default};
