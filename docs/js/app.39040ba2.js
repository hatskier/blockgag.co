(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],i[r]&&p.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0be5":function(t,e,n){"use strict";var a=n("7b14"),i=n.n(a);i.a},"0e66":function(t,e,n){"use strict";var a=n("8491"),i=n.n(a);i.a},1:function(t,e){},"1fdc":function(t,e,n){"use strict";var a=n("427d"),i=n.n(a);i.a},2:function(t,e){},3:function(t,e){},"3aa2":function(t,e,n){"use strict";var a=n("f6e4"),i=n.n(a);i.a},"3d50":function(t,e,n){"use strict";var a=n("5b27"),i=n.n(a);i.a},4:function(t,e){},"422c":function(t,e,n){},"427d":function(t,e,n){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("NavBar"),t.BlockstackUtils.pendingAuth?t._e():n("router-view",{staticClass:"view"}),t.BlockstackUtils.pendingAuth?n("h2",{staticClass:"centered"},[t._v("\n      Authentication in progress\n    ")]):t._e()],1)])},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("header",{staticClass:"mdc-top-app-bar mdc-top-app-bar--dense"},[n("div",{staticClass:"mdc-top-app-bar__row"},[t._m(0),n("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",attrs:{role:"toolbar"}},[n("div",{staticClass:"navbar-el"},[n("button",{staticClass:"mdc-button mdc-button--outlined",on:{click:function(e){return t.logIn()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n              TRY LIVE EMOTIONS\n          ")])]),t.signedIn?n("button",{staticClass:"mdc-icon-button material-icons white add-photo-icon"},[t._v("\n          add_photo_alternate\n        ")]):t._e(),n("div",{staticClass:"navbar-el"},[n("div",{staticClass:"account-circle mdc-menu-surface--anchor",on:{click:function(e){return t.openMenu()}}},[t.signedIn&&t.userAvatar?n("img",{attrs:{id:"avatar-image",src:t.userAvatar}}):t._e(),t.signedIn&&!t.userAvatar?n("div",{staticClass:"username-letter"},[t._v("\n              "+t._s(t.usernameFirstLetter)+"\n            ")]):t._e(),n("div",{staticClass:"mdc-menu mdc-menu-surface"},[n("ul",{staticClass:"mdc-list",attrs:{role:"menu","aria-hidden":"true","aria-orientation":"vertical",tabindex:"-1"}},[t._m(1),n("li",{staticClass:"mdc-list-item",attrs:{role:"menuitem"},on:{click:function(e){return t.logOut()}}},[t._m(2)])])])]),t.signedIn?t._e():n("button",{staticClass:"mdc-button mdc-button--outlined",on:{click:function(e){return t.openSignInModal()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n              SIGN IN\n          ")])])])])]),n("Dialog",{attrs:{title:"Log in to get started"}},[n("p",{staticClass:"blockstack-description"},[t._v("\n      Blockgag is built using\n        "),n("a",{attrs:{target:"_blank",href:"https://blockstack.org/try-blockstack"}},[t._v("Blockstack")]),t._v("\n      infrastructure,\n      allowing us to provide decentralized encrypted storage.\n    ")]),n("p",{staticClass:"blockstack-description"},[t._v("\n      Blockstack ID provides user-controlled login and storage\n      that enable you to take back control of your identity and data.\n    ")]),n("button",{staticClass:"mdc-button mdc-button--raised continue-with-blockstack-button",on:{click:function(e){return t.logIn()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n        CONTINUE WITH BLOCKSTACK\n    ")])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},[a("img",{attrs:{id:"navbar-logo",src:n("d266")}}),a("span",{staticClass:"mdc-top-app-bar__title white"},[t._v("GAG")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"mdc-list-item",attrs:{role:"menuitem"}},[n("span",{staticClass:"mdc-list-item__text"},[n("i",{staticClass:"material-icons"},[t._v("settings")]),t._v("\n                    Settings\n                  ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mdc-list-item__text"},[n("i",{staticClass:"material-icons"},[t._v("\n                      directions_walk\n                    ")]),t._v("\n                    Log out\n                  ")])}],l=(n("96cf"),n("3b8d")),u=n("e4d3"),d=n.n(u),p={contacts:"dfmapp_contacts.json",debts:"dfmapp_debts.json"},m=new d.a.AppConfig(["store_write","publish_data"]),f=new d.a.UserSession({appConfig:m});function v(t,e){return _.apply(this,arguments)}function _(){return _=Object(l["a"])(regeneratorRuntime.mark(function t(e,n){var a,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=i.length>2&&void 0!==i[2]?i[2]:{encrypt:!0},t.next=3,f.putFile(n,JSON.stringify(e),a);case 3:case"end":return t.stop()}},t)})),_.apply(this,arguments)}function g(t){return b.apply(this,arguments)}function b(){return b=Object(l["a"])(regeneratorRuntime.mark(function t(e){var n,a,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{decrypt:!0},console.log("Reading the file: "+e),t.next=4,f.getFile(e,n);case 4:return a=t.sent,t.prev=5,console.log("Got content: "+a),t.abrupt("return",JSON.parse(a));case 10:return t.prev=10,t.t0=t["catch"](5),console.error(t.t0),t.abrupt("return",null);case 14:case"end":return t.stop()}},t,null,[[5,10]])})),b.apply(this,arguments)}var h={pendingAuth:!1,isUserSignedIn:function(){return f.isUserSignedIn()},getUserSession:function(){return f},getUserName:function(){return f.loadUserData().username},getUserAvatar:function(){if(f.isUserSignedIn()){var t=f.loadUserData();if(t.profile&&t.profile.image&&t.profile.image[0])return t.profile.image[0].contentUrl}return null},checkAuth:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!f.isSignInPending()){t.next=13;break}return t.prev=1,this.pendingAuth=!0,t.next=5,f.handlePendingSignIn();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.error(t.t0);case 10:return t.prev=10,this.pendingAuth=!1,t.finish(10);case 13:case"end":return t.stop()}},t,this,[[1,7,10,13]])}));function e(){return t.apply(this,arguments)}return e}(),signIn:function(){f.redirectToSignIn()},signOut:function(){f.signUserOut(),location.reload()},getContacts:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g(p.contacts);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),getDebts:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g(p.debts);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),saveContacts:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v(e,p.contacts);case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),saveDebts:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v(e,p.debts);case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-dialog",attrs:{role:"alertdialog","aria-modal":"true","aria-labelledby":"my-dialog-title","aria-describedby":"my-dialog-content"}},[n("div",{staticClass:"mdc-dialog__container"},[n("div",{staticClass:"mdc-dialog__surface"},[n("h2",{staticClass:"mdc-dialog__title",attrs:{id:"my-dialog-title"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),n("div",{staticClass:"mdc-dialog__content",attrs:{id:"my-dialog-content"}},[t._t("default")],2)])]),n("div",{staticClass:"mdc-dialog__scrim"})])},k=[],w={name:"Dialog",data:function(){return{}},props:{title:String},computed:{}},y=w,x=(n("1fdc"),n("2877")),O=Object(x["a"])(y,C,k,!1,null,"6dab4c7c",null),S=O.exports,I=n("704c"),j=n("0021"),A={name:"NavBar",data:function(){return{userAvatar:h.getUserAvatar(),signedIn:h.isUserSignedIn(),modalType:"",dialog:null}},computed:{usernameFirstLetter:function(){var t=h.getUserName();return t?t[0].toUpperCase():""}},components:{Dialog:S},methods:{openSignInModal:function(){var t=document.querySelector(".mdc-dialog");this.dialog=I["a"].attachTo(t),this.modalType="signIn",this.dialog.open()},closeSignInModal:function(){this.dialog&&this.dialog.close()},openMenu:function(){var t=j["a"].attachTo(document.querySelector(".mdc-menu"));t.open=!t.open},logIn:function(){this.closeSignInModal(),window.localStorage.locationBeforeRedirection=location.href,window.toastr.success("Blockstack authentication started.You will be redirected to blockstack page in few seconds","",{timeOut:"20000",closeButton:!1}),setTimeout(function(){h.signIn()},200)},logOut:function(){h.signOut()}}},R=A,U=(n("3aa2"),Object(x["a"])(R,c,o,!1,null,"93bde4b2",null)),E=U.exports;h.checkAuth().then(function(){if(localStorage.locationBeforeRedirection){var t=localStorage.locationBeforeRedirection;localStorage.removeItem("locationBeforeRedirection"),location.href=t}}),window.toastr.options={closeButton:!0,progressBar:!1,showDuration:"3000",positionClass:"toast-top-center"};var B={name:"app",data:function(){return{BlockstackUtils:h}},components:{NavBar:E}},T=B,N=(n("5c0b"),Object(x["a"])(T,s,r,!1,null,null,null)),$=N.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Coming soon!")]),n("p",[t._v('\n    Without ads, with real privacy and with additional feature: "live emotions" - user can enable access to their camera and client-side ML will be analyzing their emotions to understand their preferences (the results are private by default, but users will be able to enable "public" mode and like or dislike posts by smiling or being angry or sad)\n  ')]),n("button",{staticClass:"mdc-button mdc-button--raised centerd",on:{click:function(e){return t.openDialog("first")}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n    SHOW DIALOG 1\n  ")]),n("button",{staticClass:"mdc-button mdc-button--raised centerd",on:{click:function(e){return t.openDialog("second")}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n    SHOW DIALOG 2\n  ")]),n("Dialog",{attrs:{title:"Test title"}},["first"==t.modalContent?n("div",[n("h5",[t._v("First")]),n("button",{staticClass:"mdc-button mdc-button--raised centerd",on:{click:function(e){return t.updateModalContent()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n        Change CONTENT\n      ")])]):t._e(),"second"==t.modalContent?n("div",[n("h5",[t._v("Second")])]):t._e(),"updated"==t.modalContent?n("div",[n("h5",[t._v("Updated content hahahah")])]):t._e()])],1)},M=[],P=(n("c5f6"),{name:"Home",data:function(){return{modalContent:"first"}},props:{text:Number,img:String},components:{Dialog:S},methods:{openDialog:function(t){this.modalContent=t;var e=I["a"].attachTo(document.querySelector(".mdc-dialog"));e.open()},updateModalContent:function(){this.modalContent="updated"}}}),L=P,F=(n("86d6"),Object(x["a"])(L,D,M,!1,null,"08580980",null)),G=F.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-layout-grid"},[n("div",{staticClass:"mdc-layout-grid__inner"},[n("div",{staticClass:"mdc-layout-grid__cell--span-3"},[n("Categories")],1),t._m(0),t._m(1)])])},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-layout-grid__cell--span-6"},[n("div",{staticClass:"posts-block"},[n("div",{staticClass:"post"}),n("div",{staticClass:"post"}),n("div",{staticClass:"post"}),n("div",{staticClass:"post"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-layout-grid__cell--span-3"},[n("div",{staticClass:"live-emotions-block"})])}],J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories-list-container"},[a("ul",{staticClass:"mdc-list"},[a("li",{staticClass:"mdc-list-item",attrs:{tabindex:"0"}},[a("span",{staticClass:"mdc-list-item__text"},[a("i",{staticClass:"material-icons"},[t._v("whatshot")]),t._v("\n        Hot\n      ")])]),a("li",{staticClass:"mdc-list-item"},[a("span",{staticClass:"mdc-list-item__text"},[a("i",{staticClass:"material-icons"},[t._v("trending_up")]),t._v("\n        Trending\n      ")])]),a("li",{staticClass:"mdc-list-item"},[a("span",{staticClass:"mdc-list-item__text"},[a("i",{staticClass:"material-icons"},[t._v("query_builder")]),t._v("\n        Fresh\n      ")])])]),a("p",{staticClass:"subheader"},[t._v("POPULAR")]),a("ul",{staticClass:"mdc-list"},[a("li",{staticClass:"mdc-list-item",attrs:{tabindex:"0"}},[a("span",{staticClass:"mdc-list-item__text"},[a("i",{staticClass:"material-icons"},[t._v("\n          mood\n        ")]),t._v("\n        Funny\n      ")])]),a("li",{staticClass:"mdc-list-item"},[a("span",{staticClass:"mdc-list-item__text"},[a("img",{staticClass:"category-img",attrs:{src:n("87e5")}}),t._v("\n        Blockstack\n      ")])]),a("li",{staticClass:"mdc-list-item"},[a("span",{staticClass:"mdc-list-item__text"},[a("i",{staticClass:"material-icons"},[t._v("\n          face\n        ")]),t._v("\n        Memes\n      ")])]),a("li",{staticClass:"mdc-list-item"},[a("span",{staticClass:"mdc-list-item__text"},[a("i",{staticClass:"material-icons"},[t._v("\n          gif\n        ")]),t._v("\n        GIFs\n      ")])]),a("li",{staticClass:"mdc-list-item"},[a("span",{staticClass:"mdc-list-item__text"},[a("i",{staticClass:"material-icons"},[t._v("\n          pets\n        ")]),t._v("\n        Animals\n      ")])]),a("li",{staticClass:"mdc-list-item"},[a("span",{staticClass:"mdc-list-item__text"},[a("i",{staticClass:"material-icons"},[t._v("\n          videogame_asset\n        ")]),t._v("\n        Gaming\n      ")])]),a("li",{staticClass:"mdc-list-item"},[a("span",{staticClass:"mdc-list-item__text"},[a("i",{staticClass:"material-icons"},[t._v("\n          ondemand_video\n        ")]),t._v("\n        Video\n      ")])])])])}],z={name:"Categories",props:{selected:String}},K=z,V=(n("0e66"),Object(x["a"])(K,J,W,!1,null,"3069e62e",null)),Y=V.exports,Q={name:"Posts",props:{text:Number,img:String},components:{Categories:Y}},X=Q,Z=(n("8f6d"),Object(x["a"])(X,H,q,!1,null,"b6c7d136",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Post he")])])}],at={name:"Post",props:{text:Number,img:String}},it=at,st=(n("3d50"),Object(x["a"])(it,et,nt,!1,null,"3b02af72",null)),rt=st.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Add")])])}],lt={name:"Add",props:{text:Number,img:String}},ut=lt,dt=(n("0be5"),Object(x["a"])(ut,ct,ot,!1,null,"35a9b07e",null)),pt=dt.exports;a["a"].config.productionTip=!1,a["a"].use(i["a"]);var mt=[{path:"/",component:G},{path:"/home",component:G},{path:"/posts",component:tt},{path:"/posts/:category",component:tt},{path:"/post/:id",component:rt},{path:"/add",component:pt}],ft=new i["a"]({routes:mt}),vt=new a["a"]({router:ft,render:function(t){return t($)}}).$mount("#app");e["default"]=vt},"5b27":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(t,e,n){},"7b14":function(t,e,n){},8491:function(t,e,n){},"86d6":function(t,e,n){"use strict";var a=n("8a47"),i=n.n(a);i.a},"87e5":function(t,e,n){t.exports=n.p+"img/blockstack-icon.dc910bee.png"},"8a47":function(t,e,n){},"8f6d":function(t,e,n){"use strict";var a=n("422c"),i=n.n(a);i.a},d266:function(t,e,n){t.exports=n.p+"img/blockgag-logo.581582bc.png"},f6e4:function(t,e,n){}});
//# sourceMappingURL=app.39040ba2.js.map