"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[845],{845:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,c,o,i,s,u,p,l,h=t(165),d=t(861),x=t(439),f=t(791),v=t(689),Z=t(134),g=t(485),m=t(944),w=t(346),j=t(421),b=t(168),y=t(867),k=t(87),P=y.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),S=y.ZP.div(a||(a=(0,b.Z)(["\n  width: 300px;\n  overflow: hidden;\n  height: 400px;\n"]))),_=y.ZP.div(c||(c=(0,b.Z)(["\n  max-width: 820px;\n  padding: 2px;\n"]))),U=y.ZP.h2(o||(o=(0,b.Z)(["\n  color: white;\n  font-weight: 800;\n  font-size: 36px;\n  text-shadow: 0px 0px 10px #fa1427;\n  margin: 0 0 30px;\n  padding: 0;\n"]))),L=y.ZP.h3(i||(i=(0,b.Z)(["\n  margin: 20px 0;\n  padding: 0;\n  color: white;\n  font-weight: 500;\n  text-shadow: 0px 0px 2px #fa1427;\n"]))),R=y.ZP.h3(s||(s=(0,b.Z)(["\n  margin: 40px 0 10px;\n  padding: 0;\n  color: white;\n  font-weight: 500;\n  text-shadow: 0px 0px 2px #fa1427;\n"]))),C=y.ZP.p(u||(u=(0,b.Z)(["\n  color: #9a9b9b;\n  margin: 4px;\n"]))),F=(0,y.ZP)(k.rU)(p||(p=(0,b.Z)(["\n  margin-bottom: 8px;\n  display: block;\n  color: #cf4d73;\n  text-decoration: none;\n  font-weight: 12px;\n\n  :is(:hover, :focus) {\n    color: #1134a6;\n  }\n"]))),G=y.ZP.li(l||(l=(0,b.Z)(["\n  display: inline;\n  margin-right: 10px;\n  color: #9a9b9b;\n"]))),O=t(184),T=function(){var n,e,t=(0,v.UO)().id,r=(0,v.TH)(),a=null!==(n=null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movie",c=(0,f.useState)([]),o=(0,x.Z)(c,2),i=o[0],s=o[1],u=(0,f.useState)(!1),p=(0,x.Z)(u,2),l=p[0],b=p[1],y=(0,f.useState)(!1),k=(0,x.Z)(y,2),T=k[0],q=k[1];(0,f.useEffect)((function(){function n(){return n=(0,d.Z)((0,h.Z)().mark((function n(e){var t;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return q(!0),n.prev=1,n.next=4,(0,m.Lo)(e);case 4:t=n.sent,s(t),q(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0),b(!0);case 13:case"end":return n.stop()}}),n,null,[[1,9]])}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(t)}),[t]);var z=i.genres,A=i.title,D=i.overview,E=i.poster_path,H=i.vote_average,J=i.release_date,K=10*H,Q=(0,g.Z)(new Date(J));return(0,O.jsxs)("main",{children:[(0,O.jsxs)(F,{to:a,children:[(0,O.jsx)(Z.kyg,{}),"Go back"]}),T&&(0,O.jsx)(j.Z,{}),l?(0,O.jsx)(w.jj,{children:"We don't have any information about this movie."}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(P,{children:[(0,O.jsx)(S,{children:(0,O.jsx)("img",{src:E?"https://image.tmdb.org/t/p/w500/".concat(E):"https://d994l96tlvogv.cloudfront.net/uploads/film/poster/poster-image-coming-soon-placeholder-no-logo-500-x-740_29376.png",alt:A})}),(0,O.jsxs)(_,{children:[(0,O.jsxs)(U,{children:[A," (",Q,")"]}),H?(0,O.jsxs)(C,{children:["User Score: ",K.toFixed(0)," %"]}):(0,O.jsxs)(C,{children:["User Score: ",H]}),(0,O.jsx)(R,{children:"Overview"}),D?(0,O.jsx)(C,{children:D}):(0,O.jsx)(C,{children:"Sorry, we can`t get any information about it."}),(0,O.jsx)(R,{children:"Genres"}),(0,O.jsx)("ul",{children:z&&z.map((function(n){var e=n.id,t=n.name;return(0,O.jsx)(G,{children:t},e)}))})]})]}),(0,O.jsx)("hr",{}),(0,O.jsxs)("div",{children:[(0,O.jsx)(L,{children:"Additional information"}),(0,O.jsxs)("ul",{children:[(0,O.jsx)("li",{children:(0,O.jsx)(F,{to:"cast",children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(F,{to:"reviews",children:"Reviews"})})]}),(0,O.jsx)("hr",{}),(0,O.jsx)(f.Suspense,{fallback:(0,O.jsx)(j.Z,{}),children:(0,O.jsx)(v.j3,{})})]})]})]})}},944:function(n,e,t){t.d(e,{JS:function(){return u},Kd:function(){return Z},Lo:function(){return l},TZ:function(){return d},VQ:function(){return f}});var r=t(165),a=t(683),c=t(861),o=t(243),i="https://api.themoviedb.org/3",s={api_key:"69dd57d815b4b29a8f016ba838d3c4d6",language:"en-US"};function u(n){return p.apply(this,arguments)}function p(){return(p=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams((0,a.Z)((0,a.Z)({},s),{},{page:e})),n.prev=1,n.next=4,o.Z.get("".concat(i,"/trending/movie/day?").concat(t));case 4:return c=n.sent,n.abrupt("return",c.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams((0,a.Z)({},s)),n.prev=1,n.next=4,o.Z.get("".concat(i,"/movie/").concat(e,"?").concat(t));case 4:return c=n.sent,n.abrupt("return",c.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams((0,a.Z)({},s)),n.prev=1,n.next=4,o.Z.get("".concat(i,"/movie/").concat(e,"/credits?").concat(t));case 4:return c=n.sent,n.abrupt("return",c.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function f(n){return v.apply(this,arguments)}function v(){return(v=(0,c.Z)((0,r.Z)().mark((function n(e){var t,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams((0,a.Z)({},s)),n.prev=1,n.next=4,o.Z.get("".concat(i,"/movie/").concat(e,"/reviews?").concat(t));case 4:return c=n.sent,n.abrupt("return",c.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function Z(n,e){return g.apply(this,arguments)}function g(){return(g=(0,c.Z)((0,r.Z)().mark((function n(e,t){var c,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=new URLSearchParams((0,a.Z)((0,a.Z)({},s),{},{query:e,page:t})),n.prev=1,n.next=4,o.Z.get("".concat(i,"/search/movie?").concat(c));case 4:return u=n.sent,n.abrupt("return",u.data);case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=845.359dcf73.chunk.js.map