"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{779:function(t,n,e){e.r(n),e.d(n,{Reviews:function(){return b},default:function(){return k}});var r,a,c,u,o=e(165),s=e(861),i=e(439),p=e(689),l=e(791),f=e(944),h=e(168),Z=e(867),v=Z.ZP.ul(r||(r=(0,h.Z)(["\n  margin-top: 20px;\n  width: 100%;\n"]))),d=Z.ZP.li(a||(a=(0,h.Z)(["\n  overflow: hidden;\n"]))),w=Z.ZP.h2(c||(c=(0,h.Z)(["\n  color: white;\n  text-shadow: 0px 0px 13px #fa1427;\n  font-size: 18px;\n"]))),x=Z.ZP.p(u||(u=(0,h.Z)(["\n  color: #9a9b9b;\n"]))),m=e(421),g=e(346),y=e(184),b=function(){var t=(0,p.UO)().id,n=(0,l.useState)([]),e=(0,i.Z)(n,2),r=e[0],a=e[1],c=(0,l.useState)(!1),u=(0,i.Z)(c,2),h=u[0],Z=u[1],b=(0,l.useState)(!1),k=(0,i.Z)(b,2),S=k[0],_=k[1];return(0,l.useEffect)((function(){function n(){return n=(0,s.Z)((0,o.Z)().mark((function t(n){var e;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.prev=1,t.next=4,(0,f.VQ)(n);case 4:0===(e=t.sent).total_results&&Z(!0),a(e.results),_(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])}))),n.apply(this,arguments)}!function(t){n.apply(this,arguments)}(t)}),[t]),(0,y.jsxs)("section",{children:[S&&(0,y.jsx)(m.Z,{}),h?(0,y.jsx)(g.j,{children:"We don't have any reviews for this movie."}):(0,y.jsx)(v,{children:r.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,y.jsxs)(d,{children:[(0,y.jsxs)(w,{children:["Author: ",e]}),(0,y.jsx)(x,{children:r})]},n)}))})]})},k=b},944:function(t,n,e){e.d(n,{JS:function(){return i},Kd:function(){return w},Lo:function(){return l},TZ:function(){return h},VQ:function(){return v}});var r=e(165),a=e(683),c=e(861),u=e(243),o="https://api.themoviedb.org/3",s={api_key:"69dd57d815b4b29a8f016ba838d3c4d6",language:"en-US"};function i(t){return p.apply(this,arguments)}function p(){return(p=(0,c.Z)((0,r.Z)().mark((function t(n){var e,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams((0,a.Z)((0,a.Z)({},s),{},{page:n})),t.prev=1,t.next=4,u.Z.get("".concat(o,"/trending/movie/day?").concat(e));case 4:return c=t.sent,t.abrupt("return",c.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,c.Z)((0,r.Z)().mark((function t(n){var e,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams((0,a.Z)({},s)),t.prev=1,t.next=4,u.Z.get("".concat(o,"/movie/").concat(n,"?").concat(e));case 4:return c=t.sent,t.abrupt("return",c.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function h(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,c.Z)((0,r.Z)().mark((function t(n){var e,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams((0,a.Z)({},s)),t.prev=1,t.next=4,u.Z.get("".concat(o,"/movie/").concat(n,"/credits?").concat(e));case 4:return c=t.sent,t.abrupt("return",c.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)((0,r.Z)().mark((function t(n){var e,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams((0,a.Z)({},s)),t.prev=1,t.next=4,u.Z.get("".concat(o,"/movie/").concat(n,"/reviews?").concat(e));case 4:return c=t.sent,t.abrupt("return",c.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function w(t,n){return x.apply(this,arguments)}function x(){return(x=(0,c.Z)((0,r.Z)().mark((function t(n,e){var c,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=new URLSearchParams((0,a.Z)((0,a.Z)({},s),{},{query:n,page:e})),t.prev=1,t.next=4,u.Z.get("".concat(o,"/search/movie?").concat(c));case 4:return i=t.sent,t.abrupt("return",i.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=779.f8167936.chunk.js.map