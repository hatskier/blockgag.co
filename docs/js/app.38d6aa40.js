(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],p=0,d=[];p<i.length;p++)c=i[p],a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0be5":function(t,e,n){"use strict";var r=n("7b14"),a=n.n(r);a.a},"2c9c":function(t,e,n){"use strict";var r=n("c084"),a=n.n(r);a.a},"3d50":function(t,e,n){"use strict";var r=n("5b27"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("NavBar"),n("router-view",{staticClass:"view"})],1)])},c=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"navbar"}},[r("header",{staticClass:"mdc-top-app-bar mdc-top-app-bar--dense"},[r("div",{staticClass:"mdc-top-app-bar__row"},[r("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},[r("img",{attrs:{id:"navbar-logo",src:n("d266")}}),r("span",{staticClass:"mdc-top-app-bar__title white"},[t._v("GAG")])]),r("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",attrs:{role:"toolbar"}},[r("div",{staticClass:"navbar-el"},[r("button",{staticClass:"mdc-button mdc-button--outlined"},[r("div",{staticClass:"mdc-button__ripple"}),t._v("\n              TRY LIVE EMOTIONS\n          ")])]),r("div",{staticClass:"navbar-el"},[r("img",{attrs:{id:"avatar-image",src:"https://gaia.blockstack.org/hub/1JW2HE6yTzSG6jUAU8H9n7WqxfG6bFbSas//avatar-0"}})])])])])])}],u={name:"NavBar",data:function(){return{}},computed:{},components:{},methods:{}},l=u,p=(n("2c9c"),n("2877")),d=Object(p["a"])(l,i,s,!1,null,"e7553e6c",null),f=d.exports,b={name:"app",components:{NavBar:f}},m=b,v=(n("5c0b"),Object(p["a"])(m,o,c,!1,null,null,null)),_=v.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Coming soon!")]),n("p",[t._v('\n    Without ads, with real privacy and with additional feature: "live emotions" - user can enable access to their camera and client-side ML will be analyzing their emotions to understand their preferences (the results are private by default, but users will be able to enable "public" mode and like or dislike posts by smiling or being angry or sad)\n  ')])])}],y=(n("c5f6"),{name:"Home",props:{text:Number,img:String}}),w=y,x=(n("d819"),Object(p["a"])(w,h,g,!1,null,"753c3eec",null)),O=x.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Posts")])])}],S={name:"Posts",props:{text:Number,img:String}},$=S,C=(n("c641"),Object(p["a"])($,j,E,!1,null,"60e8b99a",null)),P=C.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Post he")])])}],M={name:"Post",props:{text:Number,img:String}},T=M,A=(n("3d50"),Object(p["a"])(T,k,N,!1,null,"3b02af72",null)),G=A.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Add")])])}],J={name:"Add",props:{text:Number,img:String}},W=J,z=(n("0be5"),Object(p["a"])(W,B,H,!1,null,"35a9b07e",null)),I=z.exports;r["a"].config.productionTip=!1,r["a"].use(a["a"]);var L=[{path:"/",component:O},{path:"/home",component:O},{path:"/posts",component:P},{path:"/posts/:category",component:P},{path:"/post/:id",component:G},{path:"/add",component:I}],U=new a["a"]({routes:L}),q=new r["a"]({router:U,render:function(t){return t(_)}}).$mount("#app");e["default"]=q},"5b27":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},"7b14":function(t,e,n){},c084:function(t,e,n){},c641:function(t,e,n){"use strict";var r=n("cf59"),a=n.n(r);a.a},cf59:function(t,e,n){},d266:function(t,e,n){t.exports=n.p+"img/blockgag-logo.581582bc.png"},d819:function(t,e,n){"use strict";var r=n("dd14"),a=n.n(r);a.a},dd14:function(t,e,n){}});
//# sourceMappingURL=app.38d6aa40.js.map