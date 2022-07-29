"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[450],{5833:function(n,t,e){e.d(t,{Hg:function(){return l},TP:function(){return h},Wd:function(){return x},gH:function(){return f},tx:function(){return v}});var r=e(5861),a=e(7757),i=e.n(a),o=e(4569),c=e.n(o),s="5ce599886a4c0703a030654068991e03";c().defaults.baseURL="https://api.themoviedb.org/3/";var u="/trending/movie/day",p="/search/movie",d="/movie/",l=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(u,"?api_key=").concat(s,"&language=en-US&page=1&time_window=week"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(p,"?api_key=").concat(s,"&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(d).concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(d).concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(d).concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5450:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,a,i,o,c,s,u=e(885),p=e(6871),d=e(2791),l=e(5833),f=e(148),h=e(460),x=e(168),v=e(2499),g=e(501),m=v.Z.div(r||(r=(0,x.Z)(["\n  display: flex;\n  padding: 20px;\n  box-shadow: 1px 3px 3px #b9b9b9;\n"]))),j=v.Z.div(a||(a=(0,x.Z)(["\n  min-width: 300px;\n  margin-right: 2rem;\n"]))),w=v.Z.div(i||(i=(0,x.Z)(["\n  padding: 20px;\n  padding-top: 0;\n  box-shadow: 1px 3px 3px #b9b9b9;\n"]))),b=(0,v.Z)(g.rU)(o||(o=(0,x.Z)(["\n  display: inline-flex;\n  margin-left: 20px;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),y=v.Z.ul(c||(c=(0,x.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 2em;\n"]))),_=(0,v.Z)(g.OL)(s||(s=(0,x.Z)(["\n  text-decoration: none;\n  font-weight: 500;\n  display: inline-block;\n  padding: 8px 16px;\n  border-radius: 4px;\n\n  :hover {\n    color: orangered;\n  }\n\n  &.active {\n    border: 1px solid orangered;\n    color: orangered;\n  }\n"]))),Z=e(8617),k=e(184),U=function(n){var t=n.history;return(0,k.jsxs)(b,{to:t,children:[(0,k.jsx)(Z.jTe,{size:"24"}),"GO BACK"]})},C=function(n){var t=n.options,e=t.poster,r=t.title,a=t.release,i=t.rating,o=t.genres,c=t.overview;return(0,k.jsxs)(m,{children:[(0,k.jsx)(j,{children:(0,k.jsx)("img",{src:e,alt:r})}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("h2",{children:[r," ","(".concat(a,")")]}),(0,k.jsxs)("p",{children:["User score: ",i]}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:c}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("p",{children:o})]})]})},O=function(n){var t=n.history;return(0,k.jsxs)(w,{children:[(0,k.jsx)("h4",{children:"Additional information"}),(0,k.jsxs)(y,{children:[(0,k.jsx)("li",{children:(0,k.jsx)(_,{to:"cast",state:{from:t},children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(_,{to:"reviews",state:{from:t},children:"Reviews"})})]})]})};var T=function(){var n,t,e=null!==(n=null===(t=(0,p.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies",r=function(){var n=(0,p.UO)().movieId,t=(0,d.useState)(null),e=(0,u.Z)(t,2),r=e[0],a=e[1];return(0,d.useEffect)((function(){n&&(0,l.TP)(n).then((function(n){a((0,f.ao)(n))}))}),[n]),r}();return(0,k.jsxs)(k.Fragment,{children:[!r&&(0,k.jsx)(h.Z,{}),r&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(U,{history:e}),(0,k.jsx)(C,{options:r}),(0,k.jsx)(O,{history:e}),(0,k.jsx)(d.Suspense,{fallback:(0,k.jsx)(h.Z,{}),children:(0,k.jsx)(p.j3,{})})]})]})}},148:function(n,t,e){e.d(t,{Vo:function(){return o},ao:function(){return a},fc:function(){return i},y3:function(){return c}});var r="https://image.tmdb.org/t/p/",a=function(n){var t=n.title,e=n.vote_average,a=n.release_date,i=n.overview,o=n.genres,c=n.poster_path;return{title:t,rating:10*e%1===0?Number(10*e)+"%":(10*e).toFixed(1)+"%",release:a.split("-")[0],overview:i,genres:o.map((function(n){return n.name})).join(", "),poster:"".concat(r,"w300").concat(c)}},i=function(n){return n.map((function(n){return{id:n.id,title:n.title}}))},o=function(n){return n.cast.map((function(n){var t=n.id,e=n.character,a=n.original_name,i=n.profile_path;return{id:t,character:e,name:a,photo:null!==i?"".concat(r,"original").concat(i):"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}}))},c=function(n){return n.results.map((function(n){var t=n.id,e=n.author,a=n.content,i=n.author_details.avatar_path,o=null!==i&&void 0!==i?i:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";return o.match("^/+[a-zA-Z0-9]+[.]+[a-z]+$")&&(o="".concat(r,"original").concat(o)),o.startsWith("/")&&(o=o.substring(1)),{id:t,author:e,content:a,avatar:o}}))}}}]);
//# sourceMappingURL=450.d3b46a5f.chunk.js.map