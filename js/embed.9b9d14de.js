(function(e){function t(t){for(var o,a,c=t[0],s=t[1],l=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={embed:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://covid-19.sledilnik.org/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([1,"chunk-vendors","chunk-common"]),n()})({1:function(e,t,n){e.exports=n("1216")},1216:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("8c4f"),i=n("3dfd"),a=n("5489"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"mt-3"},[n("b-row",[n("div",{staticClass:"d-flex flex-wrap w-100 justify-content-center"},[n("Info-card",{attrs:{title:e.title,field:e.field,"good-trend":e.goodDirection}})],1)])],1)},s=[],l=n("3299"),u={name:"StatsPage",components:{InfoCard:l["a"]},data:function(){return{title:null,field:null,goodDirection:null}},created:function(){var e={confirmedCases:{title:"Potrjeno okuženi",field:"cases.confirmed.todate",goodDirection:"down"},hospitalized:{title:"Hospitalizirani",field:"state.in_hospital",goodDirection:"down"},icu:{title:"V intenzivni enoti",field:"state.icu",goodDirection:"down"},deceased:{title:"Umrli",field:"state.deceased.todate",goodDirection:"down"},recovered:{title:"Preboleli",field:"cases.recovered.todate",goodDirection:"up"}},t=e[this.$route.params.type];this.title=t.title,this.field=t.field,this.goodDirection=t.goodDirection}},d=u,f=n("2877"),p=Object(f["a"])(d,c,s,!1,null,null,null),m=p.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"mt-3"},[n("b-row",{attrs:{cols:"12"}},[n("b-col",{staticClass:"embeded"},[n("div",{staticClass:"visualizations",attrs:{id:"visualizations"}})])],1)],1)},h=[],v=(n("96cf"),n("1da1")),g=n("10e9"),w={name:"ChartEmbed",mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$nextTick((function(){Object(g["a"])("visualizations",e.$route.query,e.$route.params.type)}));case 1:case"end":return t.stop()}}),t)})))()}},y=w,j=(n("32bf"),Object(f["a"])(y,b,h,!1,null,"dde05076",null)),O=j.exports,x=n("c0d6"),_=(n("56d7"),n("cda1"),[{path:"/tables",component:a["a"]},{path:"/card/:type",component:m},{path:"/chart/:type",component:O}]),P=new r["a"]({routes:_});document.addEventListener("chartLoaded",(function(){setTimeout((function(){var e=document.getElementsByTagName("main")[0],t=+e.offsetHeight+10;window.top.postMessage({type:"embed-size",height:t,name:window.name},"*")}),50)}),!1),new o["default"]({render:function(e){return e(i["a"],{props:{embed:!0}})},router:P,store:x["a"]}).$mount("#app")},"32bf":function(e,t,n){"use strict";var o=n("d8f5"),r=n.n(o);r.a},cda1:function(e,t,n){},d8f5:function(e,t,n){}});
//# sourceMappingURL=embed.9b9d14de.js.map