import{S as j,i as q,s as z,e as v,k as S,t as F,c as y,a as k,d as p,m as H,h as M,b as u,g as D,F as f,j as O,n as P,x as w,y as E,z as x,r as C,p as I,C as A}from"../chunks/index-4309a87d.js";import{C as T}from"../chunks/Caret-57cc30ac.js";import{b as R}from"../chunks/paths-396f020f.js";function B($){let t,e,a,l,s,_,i,h;return{c(){t=v("header"),e=v("h4"),a=v("a"),l=v("i"),s=v("i"),_=S(),i=F($[0]),this.h()},l(r){t=y(r,"HEADER",{class:!0});var m=k(t);e=y(m,"H4",{class:!0});var o=k(e);a=y(o,"A",{href:!0,class:!0});var c=k(a);l=y(c,"I",{class:!0}),k(l).forEach(p),s=y(c,"I",{class:!0}),k(s).forEach(p),_=H(c),i=M(c,$[0]),c.forEach(p),o.forEach(p),m.forEach(p),this.h()},h(){u(l,"class","fa-solid fa-arrow-right svelte-1nk4os3"),u(s,"class","fa-solid fa-xmark svelte-1nk4os3"),u(a,"href",h=R+"/"+$[1]),u(a,"class","svelte-1nk4os3"),u(e,"class","reference svelte-1nk4os3"),u(t,"class","page-link")},m(r,m){D(r,t,m),f(t,e),f(e,a),f(a,l),f(a,s),f(a,_),f(a,i)},p(r,[m]){m&1&&O(i,r[0]),m&2&&h!==(h=R+"/"+r[1])&&u(a,"href",h)},i:P,o:P,d(r){r&&p(t)}}}function G($,t,e){let{title:a}=t,{page:l}=t;return $.$$set=s=>{"title"in s&&e(0,a=s.title),"page"in s&&e(1,l=s.page)},[a,l]}class L extends j{constructor(t){super(),q(this,t,G,B,z,{title:0,page:1})}}function J($){let t,e,a,l,s,_,i,h,r,m,o,c,d,N;return a=new L({props:{page:"wayback",title:"way back"}}),s=new L({props:{page:"runtimes",title:"runtimes"}}),i=new L({props:{page:"why",title:"why"}}),r=new L({props:{page:"bitbybyte",title:"bit by byte"}}),o=new L({props:{page:"typed",title:"typed"}}),d=new T({}),{c(){t=v("main"),e=v("section"),w(a.$$.fragment),l=S(),w(s.$$.fragment),_=S(),w(i.$$.fragment),h=S(),w(r.$$.fragment),m=S(),w(o.$$.fragment),c=S(),w(d.$$.fragment),this.h()},l(n){t=y(n,"MAIN",{});var b=k(t);e=y(b,"SECTION",{class:!0});var g=k(e);E(a.$$.fragment,g),l=H(g),E(s.$$.fragment,g),_=H(g),E(i.$$.fragment,g),h=H(g),E(r.$$.fragment,g),m=H(g),E(o.$$.fragment,g),g.forEach(p),c=H(b),E(d.$$.fragment,b),b.forEach(p),this.h()},h(){u(e,"class","pages svelte-h72e33")},m(n,b){D(n,t,b),f(t,e),x(a,e,null),f(e,l),x(s,e,null),f(e,_),x(i,e,null),f(e,h),x(r,e,null),f(e,m),x(o,e,null),f(t,c),x(d,t,null),N=!0},p:P,i(n){N||(C(a.$$.fragment,n),C(s.$$.fragment,n),C(i.$$.fragment,n),C(r.$$.fragment,n),C(o.$$.fragment,n),C(d.$$.fragment,n),N=!0)},o(n){I(a.$$.fragment,n),I(s.$$.fragment,n),I(i.$$.fragment,n),I(r.$$.fragment,n),I(o.$$.fragment,n),I(d.$$.fragment,n),N=!1},d(n){n&&p(t),A(a),A(s),A(i),A(r),A(o),A(d)}}}class V extends j{constructor(t){super(),q(this,t,null,J,z,{})}}export{V as default};