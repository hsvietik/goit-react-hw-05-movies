"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[291],{1687:function(e,n,r){r.d(n,{Y5:function(){return d},_k:function(){return o},vw:function(){return l}});var t=r(5861),a=r(4687),c=r.n(a),u=r(1243),i="https://api.themoviedb.org/3/",s="1bfc473de4fefb6be0222ae7c51b95d7";function o(){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:s,language:"en-US"},e.next=3,u.Z.get("".concat(i,"trending/movie/day"),{params:n});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(c().mark((function e(n){var r,t,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.abortCtrl,t=n.query,a={api_key:s,query:t,language:"en-US",include_adult:!1},e.next=4,u.Z.get("".concat(i,"search/movie"),{signal:r.signal,params:a});case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(c().mark((function e(n){var r,t,a,o,p,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.abortCtrl,t=n.movieId,a=n.fetchField,o={api_key:s,language:"en-US"},e.t0=a,e.next="movie"===e.t0?5:"cast"===e.t0?7:"reviews"===e.t0?9:11;break;case 5:return p="".concat(i,"/movie/").concat(t),e.abrupt("break",12);case 7:return p="".concat(i,"/movie/").concat(t,"/credits"),e.abrupt("break",12);case 9:return p="".concat(i,"/movie/").concat(t,"/reviews"),e.abrupt("break",12);case 11:return e.abrupt("return");case 12:return e.next=14,u.Z.get(p,{signal:r.signal,params:o});case 14:return l=e.sent,e.abrupt("return",l.data);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3291:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t,a,c=r(5861),u=r(9439),i=r(4687),s=r.n(i),o=r(2791),p=r(7689),l=r(7596),f=(r(5462),r(287)),d=r(1687),h=r(168),v=r(7686),b=v.Z.ul(t||(t=(0,h.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),g=v.Z.a(a||(a=(0,h.Z)(["\n  display: inline-block;\n  margin: 6px;\n  padding: 5px;\n  border-radius: 20px;\n  font-size: 12px;\n  /* background-color: #90cea1; */\n  background: linear-gradient(0.25turn, #90cea1, #01b4e4);\n  text-align: center;\n"]))),x=r(184);var m=function(){var e=(0,o.useRef)(),n=(0,p.UO)().movieId,r=(0,o.useState)(!1),t=(0,u.Z)(r,2),a=t[0],i=t[1],h=(0,o.useState)(),v=(0,u.Z)(h,2),m=v[0],k=v[1];return(0,o.useEffect)((function(){function r(){return(r=(0,c.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.current&&e.current.abort(),e.current=new AbortController,r.prev=2,i(!0),r.next=6,(0,d.Y5)({abortCtrl:e,movieId:n,fetchField:"reviews"});case 6:t=r.sent,k(t.results),r.next=14;break;case 10:if(r.prev=10,r.t0=r.catch(2),"ERR_CANCELED"===r.t0.code){r.next=14;break}return r.abrupt("return",l.Am.warn("Oops, something went wrong."));case 14:return r.prev=14,i(!1),r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[2,10,14,17]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[n]),(0,x.jsxs)(b,{children:[m&&m.map((function(e){var n=e.id,r=e.author,t=e.content,a=e.url;return t.length>500&&(t=t.slice(0,500)+"..."),(0,x.jsxs)("li",{children:[(0,x.jsx)("h4",{children:"Author: ".concat(r)}),(0,x.jsx)("p",{children:t}),t.length>500&&(0,x.jsx)(g,{href:a,target:"_blank",rel:"noreferrer noopener",children:"Read full article"})]},n)})),m&&!m.length&&(0,x.jsx)("p",{children:"There are no reviews for this movie."}),a&&(0,x.jsx)(f.a,{}),(0,x.jsx)(l.Ix,{autoClose:3e3})]})}}}]);
//# sourceMappingURL=291.7e74d625.chunk.js.map