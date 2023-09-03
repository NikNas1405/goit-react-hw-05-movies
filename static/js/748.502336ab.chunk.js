"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[748],{277:function(n,e,t){t.d(e,{M:function(){return h}});var a,r,o,i,c=t(168),s=t(867),p=t(87),u=s.ZP.li(a||(a=(0,c.Z)(["\n  margin-bottom: 8px;\n  /* max-width: 100px; */\n  display: block;\n  overflow: hidden;\n  transition: all 250ms ease-out;\n\n  flex-basis: calc((100% - 28px * 4) / 5);\n\n  &:is(:hover, :focus) {\n    cursor: pointer;\n    box-shadow: 0px 0px 29px 4px rgba(214, 13, 13, 0.41);\n    transform: scale(1.1);\n  }\n"]))),l=(0,s.ZP)(p.rU)(r||(r=(0,c.Z)(["\n  text-decoration: none;\n  color: #9a9b9b;\n\n  &:is(:hover, :focus) {\n    color: white;\n  }\n"]))),d=s.ZP.p(o||(o=(0,c.Z)(["\n  color: inherit;\n  text-align: center;\n"]))),f=s.ZP.div(i||(i=(0,c.Z)(["\n  height: 300px;\n"]))),g=t(689),x=t(184),h=function(n){var e=n.movies,t=(0,g.TH)();return(0,x.jsx)(x.Fragment,{children:e.map((function(n){return(0,x.jsx)(u,{children:(0,x.jsxs)(l,{to:"/movie/".concat(n.id),id:n.id,className:"movie-item",state:{from:t},children:[(0,x.jsx)(f,{children:(0,x.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):"https://d994l96tlvogv.cloudfront.net/uploads/film/poster/poster-image-coming-soon-placeholder-no-logo-500-x-740_29376.png",alt:n.title})}),(0,x.jsx)(d,{children:n.title||n.original_title})]})},n.id)}))})}},424:function(n,e,t){t.d(e,{Z:function(){return p}});var a,r=t(48),o=t.n(r),i=t(168),c=t(867).ZP.div(a||(a=(0,i.Z)(["\n  margin: 50px auto 0;\n\n  .pagination {\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    list-style: none;\n    outline: none;\n    height: 42px;\n  }\n\n  .pagination > li > a {\n    border: 1px solid #fff;\n    padding: 5px 10px;\n    outline: none;\n    cursor: pointer;\n    transition: all 250ms ease-out;\n  }\n  .pagination > .active > a,\n  .pagination > .active > span,\n  .pagination > .active > a:hover,\n  .pagination > .active > span:hover,\n  .pagination > .active > a:focus,\n  .pagination > .active > span:focus {\n    background-color: #fff;\n    border-color: #fff;\n    outline: none;\n    color: #eb3324;\n    padding: 8px 12px;\n\n    box-shadow: 0px 0px 29px 4px rgba(214, 13, 13, 0.41);\n    transform: scale(1.1);\n  }\n\n  .pagination > li > a,\n  .pagination > li > span {\n    color: #c8c8c8;\n  }\n\n  .pagination > li:first-child > a,\n  .pagination > li:first-child > span,\n  .pagination > li:last-child > a,\n  .pagination > li:last-child > span {\n    border-radius: unset;\n  }\n"]))),s=t(184),p=function(n){var e=n.totalPages,t=n.setPage,a=n.page;return(0,s.jsx)(c,{children:(0,s.jsx)(o(),{pageCount:e,previousLabel:"Back",nextLabel:"Next",breakLabel:"...",marginPagesDisplayed:1,pageRangeDisplayed:4,onPageChange:function(n){t(n.selected+1)},containerClassName:"pagination",activeClassName:"active",subContainerClassName:"pages pagination",breakClassName:"break-me",initialPage:a-1})})}},748:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var a,r,o,i,c=t(165),s=t(433),p=t(861),u=t(439),l=t(791),d=t(87),f=t(944),g=t(421),x=t(277),h=t(424),v=t(168),m=t(867),Z=m.ZP.form(a||(a=(0,v.Z)(["\n  display: flex;\n  gap: 8px;\n  margin: 20px auto;\n  align-items: center;\n  max-width: 600px;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),b=m.ZP.input(r||(r=(0,v.Z)(["\n  display: block;\n  appearance: none;\n  border: 0;\n  outline: 0;\n  height: 40px;\n  background-color: white;\n  padding: 0 10px;\n  min-width: 350px;\n\n  transition: all 0.2s ease;\n  &:focus-within {\n    box-shadow: 0 3px 5px -2px rgba(0, 0, 0, 0.3);\n  }\n"]))),w=m.ZP.button(o||(o=(0,v.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  \n  background-color: #eb3324;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 80px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:is(:focus, :hover) {\n    background-color: #1134a6;\n  }\n"]))),y=m.ZP.ul(i||(i=(0,v.Z)(["\n  gap: 28px;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n"]))),k=t(346),P=t(184),j=function(){var n,e=(0,l.useState)([]),t=(0,u.Z)(e,2),a=t[0],r=t[1],o=(0,d.lr)(),i=(0,u.Z)(o,2),v=i[0],m=i[1],j=(0,d.lr)(),S=(0,u.Z)(j,2),_=S[0],C=S[1],L=null!==(n=_.get("query"))&&void 0!==n?n:"",N=(0,l.useState)(Number(v.get("page"))||1),R=(0,u.Z)(N,2),U=R[0],q=R[1],D=(0,l.useState)(!1),F=(0,u.Z)(D,2),M=F[0],Q=F[1],T=(0,l.useState)(0),z=(0,u.Z)(T,2),K=z[0],B=z[1],E=(0,l.useState)(!1),H=(0,u.Z)(E,2),J=H[0],V=H[1];(0,l.useEffect)((function(){if(""!==L){var n=function(){var n=(0,p.Z)((0,c.Z)().mark((function n(){var e;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return V(!0),n.prev=1,n.next=4,(0,f.Kd)(L,U);case 4:if(0!==(e=n.sent).results.length){n.next=8;break}return V(!1),n.abrupt("return");case 8:r((0,s.Z)(e.results)),B(Math.floor(e.total_pages/20)),m({page:U,query:L}),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0),Q(!0);case 17:return n.prev=17,V(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,13,17,20]])})));return function(){return n.apply(this,arguments)}}();n()}}),[U,L,m]);return(0,P.jsxs)("main",{children:[(0,P.jsxs)(Z,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.searchQuery.value;e!==L&&(q(1),B(0)),""!==e.trim()?C({query:e}):k.j,n.currentTarget.reset()},children:[(0,P.jsx)(b,{type:"text",name:"searchQuery",placeholder:"Find movie...",autoComplete:"off",autoFocus:!0}),(0,P.jsx)(w,{type:"button",onClick:function(){return r([]),q(1),C(""),void B(0)},children:"Reset results"})]}),J&&(0,P.jsx)(g.Z,{}),M?(0,P.jsx)(k.j,{children:"Sorry. Something went wrong. Please reload the page to try again."}):(0,P.jsx)(y,{children:(0,P.jsx)(x.M,{movies:a})}),0!==K&&(0,P.jsx)(h.Z,{totalPages:K,page:U,setPage:q})]})}},944:function(n,e,t){t.d(e,{JS:function(){return p},Kd:function(){return v},Lo:function(){return l},TZ:function(){return f},VQ:function(){return x}});var a=t(165),r=t(683),o=t(861),i=t(243),c="https://api.themoviedb.org/3",s={api_key:"69dd57d815b4b29a8f016ba838d3c4d6",language:"en-US"};function p(n){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,a.Z)().mark((function n(e){var t,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams((0,r.Z)((0,r.Z)({},s),{},{page:e})),n.prev=1,n.next=4,i.Z.get("".concat(c,"/trending/movie/day?").concat(t));case 4:return o=n.sent,n.abrupt("return",o.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,a.Z)().mark((function n(e){var t,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams((0,r.Z)({},s)),n.prev=1,n.next=4,i.Z.get("".concat(c,"/movie/").concat(e,"?").concat(t));case 4:return o=n.sent,n.abrupt("return",o.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function f(n){return g.apply(this,arguments)}function g(){return(g=(0,o.Z)((0,a.Z)().mark((function n(e){var t,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams((0,r.Z)({},s)),n.prev=1,n.next=4,i.Z.get("".concat(c,"/movie/").concat(e,"/credits?").concat(t));case 4:return o=n.sent,n.abrupt("return",o.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)((0,a.Z)().mark((function n(e){var t,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams((0,r.Z)({},s)),n.prev=1,n.next=4,i.Z.get("".concat(c,"/movie/").concat(e,"/reviews?").concat(t));case 4:return o=n.sent,n.abrupt("return",o.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function v(n,e){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)((0,a.Z)().mark((function n(e,t){var o,p;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=new URLSearchParams((0,r.Z)((0,r.Z)({},s),{},{query:e,page:t})),n.prev=1,n.next=4,i.Z.get("".concat(c,"/search/movie?").concat(o));case 4:return p=n.sent,n.abrupt("return",p.data);case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=748.502336ab.chunk.js.map