"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return j},default:function(){return _}});var r,a,c,s,i,o=e(165),u=e(861),p=e(439),l=e(689),h=e(791),f=e(944),d=e(168),x=e(867),Z=x.ZP.ul(r||(r=(0,d.Z)(["\n  margin-top: 20px;\n  gap: 16px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n"]))),v=x.ZP.li(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  overflow: hidden;\n\n  flex-basis: calc((100% - 16px * 4) / 5);\n\n  @media (max-width: 400px) {\n    flex-basis: calc((100% - 16px * 2) / 3);\n  }\n\n  @media (min-width: 768px) {\n    flex-basis: calc((100% - 16px * 6) / 7);\n  }\n\n  @media (min-width: 1024px) {\n    flex-basis: calc((100% - 16px * 8) / 9);\n  }\n"]))),m=x.ZP.div(c||(c=(0,d.Z)(["\n  height: 160px;\n  overflow: hidden;\n"]))),w=x.ZP.p(s||(s=(0,d.Z)(["\n  color: white;\n  text-shadow: 0px 0px 13px #fa1427;\n  display: block;\n  height: 35px;\n  line-height: 1.2;\n"]))),g=x.ZP.p(i||(i=(0,d.Z)(["\n  color: #9a9b9b;\n  display: block;\n  > span {\n    display: block;\n    color: white;\n    float: none;\n    line-height: 1.2;\n  }\n"]))),b=e(421),y=e(346),k=e(184),j=function(){var n=(0,l.UO)().id,t=(0,h.useState)([]),e=(0,p.Z)(t,2),r=e[0],a=e[1],c=(0,h.useState)(!1),s=(0,p.Z)(c,2),i=s[0],d=s[1],x=(0,h.useState)(!1),j=(0,p.Z)(x,2),_=j[0],P=j[1];return(0,h.useEffect)((function(){function t(){return t=(0,u.Z)((0,o.Z)().mark((function n(t){var e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return P(!0),n.prev=1,n.next=4,(0,f.TZ)(t);case 4:0===(e=n.sent).cast.length&&d(!0),a(e.cast),P(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])}))),t.apply(this,arguments)}!function(n){t.apply(this,arguments)}(n)}),[n]),(0,k.jsxs)(k.Fragment,{children:[_&&(0,k.jsx)(b.Z,{}),i?(0,k.jsx)(y.jj,{children:"We don't have any information about casts."}):(0,k.jsx)(Z,{children:r.map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character;return(0,k.jsxs)(v,{children:[(0,k.jsx)(m,{children:(0,k.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://abrakadabra.fun/uploads/posts/2021-12/1640528672_14-abrakadabra-fun-p-serii-chelovek-na-avu-16.png",alt:e})}),(0,k.jsx)(w,{children:e}),(0,k.jsxs)(g,{children:["Character:",(0,k.jsxs)("span",{children:[" ",a]})]})]},t)}))})]})},_=j},944:function(n,t,e){e.d(t,{JS:function(){return u},Kd:function(){return v},Lo:function(){return l},TZ:function(){return f},VQ:function(){return x}});var r=e(165),a=e(683),c=e(861),s=e(243),i="https://api.themoviedb.org/3",o={api_key:"69dd57d815b4b29a8f016ba838d3c4d6",language:"en-US"};function u(n){return p.apply(this,arguments)}function p(){return(p=(0,c.Z)((0,r.Z)().mark((function n(t){var e,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams((0,a.Z)((0,a.Z)({},o),{},{page:t})),n.prev=1,n.next=4,s.Z.get("".concat(i,"/trending/movie/day?").concat(e));case 4:return c=n.sent,n.abrupt("return",c.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,c.Z)((0,r.Z)().mark((function n(t){var e,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams((0,a.Z)({},o)),n.prev=1,n.next=4,s.Z.get("".concat(i,"/movie/").concat(t,"?").concat(e));case 4:return c=n.sent,n.abrupt("return",c.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)((0,r.Z)().mark((function n(t){var e,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams((0,a.Z)({},o)),n.prev=1,n.next=4,s.Z.get("".concat(i,"/movie/").concat(t,"/credits?").concat(e));case 4:return c=n.sent,n.abrupt("return",c.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function x(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,c.Z)((0,r.Z)().mark((function n(t){var e,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams((0,a.Z)({},o)),n.prev=1,n.next=4,s.Z.get("".concat(i,"/movie/").concat(t,"/reviews?").concat(e));case 4:return c=n.sent,n.abrupt("return",c.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function v(n,t){return m.apply(this,arguments)}function m(){return(m=(0,c.Z)((0,r.Z)().mark((function n(t,e){var c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=new URLSearchParams((0,a.Z)((0,a.Z)({},o),{},{query:t,page:e})),n.prev=1,n.next=4,s.Z.get("".concat(i,"/search/movie?").concat(c));case 4:return u=n.sent,n.abrupt("return",u.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.95d61ba7.chunk.js.map