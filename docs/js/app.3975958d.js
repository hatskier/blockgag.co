(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"1fdc":function(t,e,n){"use strict";var a=n("427d"),i=n.n(a);i.a},2:function(t,e){},3:function(t,e){},"3d50":function(t,e,n){"use strict";var a=n("5b27"),i=n.n(a);i.a},"3de4":function(t,e,n){},4:function(t,e){},4227:function(t,e,n){"use strict";var a=n("c4b4"),i=n.n(a);i.a},"427d":function(t,e,n){},"469d":function(t,e,n){},4847:function(t,e,n){},"4d14":function(t,e,n){"use strict";var a=n("3de4"),i=n.n(a);i.a},5:function(t,e){},5001:function(t,e,n){"use strict";var a=n("ffbb"),i=n.n(a);i.a},5235:function(t,e,n){"use strict";var a=n("469d"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("8c4f"),s=n("caf9"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("NavBar"),t.BlockstackUtils.pendingAuth?t._e():n("router-view",{staticClass:"view"}),t.BlockstackUtils.pendingAuth?n("h2",{staticClass:"centered authentication-in-progress-title"},[t._v("\n      Authentication in progress...\n    ")]):t._e()],1)])},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("header",{staticClass:"mdc-top-app-bar mdc-top-app-bar--dense"},[n("div",{staticClass:"mdc-top-app-bar__row"},[t._m(0),n("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",attrs:{role:"toolbar"}},[n("div",{staticClass:"navbar-el"},[n("button",{staticClass:"mdc-button mdc-button--outlined",on:{click:function(e){return t.toggleLiveEmotions()}}},[n("div",{staticClass:"mdc-button__ripple"}),t.State.liveEmotionsEnabled?t._e():n("span",[t._v("\n                TRY LIVE EMOTIONS\n              ")]),t.State.liveEmotionsEnabled?n("span",[t._v("\n                STOP LIVE EMOTIONS\n              ")]):t._e()])]),n("div",{staticClass:"navbar-el"},[t.signedIn?n("a",{staticClass:"mdc-icon-button material-icons white add-photo-icon",attrs:{href:"#/add"}},[t._v("\n            add_photo_alternate\n          ")]):t._e()]),n("div",{staticClass:"navbar-el"},[n("a",{staticClass:"mdc-icon-button material-icons white add-photo-icon",attrs:{id:"night-mode-icon"},on:{click:function(e){return t.toggleDarkMode()}}},[t._v("\n            brightness_4\n          ")])]),n("div",{staticClass:"navbar-el"},[n("div",{staticClass:"account-circle mdc-menu-surface--anchor",on:{click:function(e){return t.openMenu()}}},[t.signedIn&&t.userAvatar?n("img",{attrs:{id:"avatar-image",src:t.userAvatar}}):t._e(),t.signedIn&&!t.userAvatar?n("div",{staticClass:"username-letter"},[t._v("\n              "+t._s(t.usernameFirstLetter)+"\n            ")]):t._e(),n("Menu",{attrs:{onSettingsClicked:t.openSettings,onLogOutClicked:t.logOut}})],1),t.signedIn?t._e():n("button",{staticClass:"mdc-button mdc-button--raised sign-in-button",on:{click:function(e){return t.openSignInModal()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n              SIGN IN\n          ")])])])])]),n("SignInModal",{attrs:{onLogInButtonClicked:t.logIn}})],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},[a("a",{attrs:{href:"#/posts"}},[a("img",{attrs:{id:"navbar-logo",src:n("d266")}})]),a("a",{staticClass:"normal-text",attrs:{href:"#/posts"}},[a("span",{staticClass:"mdc-top-app-bar__title white"},[t._v("GAG")])])])}],u=(n("96cf"),n("3b8d")),d=n("e4d3"),p=n.n(d),g=n("f9d6"),m=n("bc3a"),f=n.n(m),v=n("d225"),h=n("308d"),b=n("6bb5"),_=n("4e2b"),y=n("bd86"),C=function(t){function e(){return Object(v["a"])(this,e),Object(h["a"])(this,Object(b["a"])(e).apply(this,arguments))}return Object(_["a"])(e,t),e}(g["Model"]);Object(y["a"])(C,"className","BlockgagPost"),Object(y["a"])(C,"schema",{originalUrl:{type:Boolean,decrypted:!0},description:{type:String,decrypted:!0},type:{type:String,decrypted:!0},imgGaiaPublicUrl:{type:String,decrypted:!0},tags:{type:Array,decrypted:!0}}),Object(y["a"])(C,"defaults",{type:"img"});var k=C,w="https://radiks.dece.app",S=new p.a.AppConfig(["store_write","publish_data","email"]),x=new p.a.UserSession({appConfig:S});Object(g["configure"])({userSession:x,apiServer:w});var T={pendingAuth:!1,isUserSignedIn:function(){return x.isUserSignedIn()},getUserSession:function(){return x},getUserName:function(){return x.loadUserData().username},getUserAvatar:function(){if(x.isUserSignedIn()){var t=x.loadUserData();if(t.profile&&t.profile.image&&t.profile.image[0])return t.profile.image[0].contentUrl}return null},checkAuth:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(x=Object(g["getConfig"])().userSession,!x.isSignInPending()){t.next=14;break}return t.prev=2,this.pendingAuth=!0,t.next=6,x.handlePendingSignIn();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),console.error(t.t0);case 11:return t.prev=11,this.pendingAuth=!1,t.finish(11);case 14:if(!x.isUserSignedIn()){t.next=17;break}return t.next=17,g["User"].createWithCurrentUser();case 17:case"end":return t.stop()}},t,this,[[2,8,11,14]])}));function e(){return t.apply(this,arguments)}return e}(),signIn:function(){x.redirectToSignIn()},signOut:function(){x.signUserOut(),location.reload()},getAllPosts:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=w+"/radiks/models/find?radiksType=BlockgagPost",t.next=3,f.a.get(e);case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results||[]);case 6:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),savePostToGaia:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x.putFile(e,n,{encrypt:!1});case 2:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),addNewPost:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e,n){var a,i,s,o,r,c,l,u,d,p,g;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.type,i=e.originalUrl,s=e.data,o=e.description,r=e.tags,c=n.onSavedToGaia,l=n.onPostCreated,u=new k({type:a,originalUrl:i,description:o,tags:r}),c(),d=u._id,t.next=7,this.savePostToGaia(d,s);case 7:return t.next=9,x.getFileUrl(d);case 9:return p=t.sent,console.log(p),u.update({imgGaiaPublicUrl:p}),console.log(u),t.next=15,u.save();case 15:return l(),g="https://blockgag.co#/post/".concat(u._id),t.abrupt("return",g);case 18:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}()},O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-menu mdc-menu-surface"},[n("ul",{staticClass:"mdc-list",attrs:{role:"menu","aria-hidden":"true","aria-orientation":"vertical",tabindex:"-1"}},[n("li",{staticClass:"mdc-list-item",attrs:{role:"menuitem"},on:{click:function(e){return t.onLogOutClicked()}}},[t._m(0)])])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mdc-list-item__text"},[n("i",{staticClass:"material-icons"},[t._v("\n          directions_walk\n        ")]),t._v("\n        Log out\n      ")])}],U={props:{onSettingsClicked:Function,onLogOutClicked:Function}},E=U,L=n("2877"),j=Object(L["a"])(E,O,I,!1,null,null,null),B=j.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{attrs:{title:"Log in to add posts"}},[n("p",{staticClass:"blockstack-description"},[t._v("\n    BlockGAG is built using\n      "),n("a",{attrs:{target:"_blank",href:"https://blockstack.org/try-blockstack"}},[t._v("Blockstack")]),t._v("\n    infrastructure,\n    allowing us to provide decentralized encrypted storage.\n  ")]),n("p",{staticClass:"blockstack-description"},[t._v("\n    Blockstack ID provides user-controlled login and storage\n    that enable you to take back control of your identity and data.\n  ")]),n("button",{staticClass:"mdc-button mdc-button--raised continue-with-blockstack-button",on:{click:function(e){return t.onLogInButtonClicked()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n      LOG IN TO BLOCKSTACK\n  ")])])},M=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-dialog",attrs:{role:"alertdialog","aria-modal":"true","aria-labelledby":"my-dialog-title","aria-describedby":"my-dialog-content"}},[n("div",{staticClass:"mdc-dialog__container"},[n("div",{staticClass:"mdc-dialog__surface"},[n("h2",{staticClass:"mdc-dialog__title",attrs:{id:"my-dialog-title"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),n("div",{staticClass:"mdc-dialog__content",attrs:{id:"my-dialog-content"}},[t._t("default")],2)])]),n("div",{staticClass:"mdc-dialog__scrim"})])},N=[],A={name:"Dialog",data:function(){return{}},props:{title:String},computed:{}},D=A,F=(n("1fdc"),Object(L["a"])(D,R,N,!1,null,"6dab4c7c",null)),G=F.exports,$={props:{onLogInButtonClicked:Function},components:{Dialog:G}},z=$,H=(n("5001"),Object(L["a"])(z,P,M,!1,null,"2fe7d598",null)),q=H.exports,W=(n("c5f6"),n("2ef0")),J=n.n(W),V=(n("6b54"),{generateId:function(){return Date.now().toString()},capitalizeFirst:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},dictToListWithIds:function(t){var e=[];for(var n in t)e.push(Object.assign({id:n},t[n]));return e}}),K={contacts:{},debts:{},syncStatus:"Synced",liveEmotionsEnabled:!1,selectedTag:"",loadStateFromBlockchain:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Loading state from blockchain"),t.next=3,T.getContacts();case 3:return e=t.sent,t.next=6,T.getDebts();case 6:n=t.sent,e&&a["default"].set(this,"contacts",e),n&&a["default"].set(this,"debts",n);case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),updateStateToBlockchain:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e){var n,a,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.updateContacts,a=void 0!==n&&n,i=e.updateDebts,s=void 0!==i&&i,console.log("Updating blockchain state with contacts: ".concat(a,", with debts: ").concat(s)),t.prev=2,!a){t.next=8;break}return this.syncStatus="Syncing contacts",this.updatingStateInBlockchain=!0,t.next=8,T.saveContacts(this.contacts);case 8:if(!s){t.next=13;break}return this.syncStatus="Syncing debts",this.updatingStateInBlockchain=!0,t.next=13,T.saveDebts(this.debts);case 13:this.syncStatus="Synced",t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](2),console.error(t.t0),this.syncStatus="Syncing failed";case 20:case"end":return t.stop()}},t,this,[[2,16]])}));function e(e){return t.apply(this,arguments)}return e}(),upsertContact:function(t){var e=this.defaultUpsert(t,"contacts","Contact");return this.updateStateToBlockchain({updateContacts:!0}),e},removeContact:function(t){this.defaultRemove(t,"contacts","Contact"),this.updateStateToBlockchain({updateContacts:!0})},upsertDebt:function(t){t.amount=Number(t.amount);var e=this.defaultUpsert(t,"debts","Debt");return this.updateStateToBlockchain({updateDebts:!0}),e},removeDebt:function(t){this.defaultRemove(t,"debts","Debt"),this.updateStateToBlockchain({updateDebts:!0})},defaultUpsert:function(t,e,n){console.log("Updating ".concat(n)),console.log(t),t.id||(t.id=V.generateId());var i=J.a.clone(t);return a["default"].set(this[e],t.id,i),i},toggleLiveEmotions:function(){var t=this.liveEmotionsEnabled;a["default"].set(this,"liveEmotionsEnabled",!t)},selectTag:function(t){a["default"].set(this,"selectedTag",t)}},Y=K,Q=n("704c"),X=n("0021"),Z={name:"NavBar",data:function(){return{userAvatar:T.getUserAvatar(),signedIn:T.isUserSignedIn(),modalType:"",dialog:null,State:Y}},computed:{usernameFirstLetter:function(){var t=T.getUserName();return t?t[0].toUpperCase():""}},components:{Menu:B,SignInModal:q},methods:{toggleDarkMode:function(){var t=document.getElementsByTagName("body")[0];t.classList.toggle("dark-mode")},openSignInModal:function(){var t=document.querySelector(".mdc-dialog");this.dialog=Q["a"].attachTo(t),this.modalType="signIn",this.dialog.open()},closeSignInModal:function(){this.dialog&&this.dialog.close()},openMenu:function(){var t=X["a"].attachTo(document.querySelector(".mdc-menu"));t.open=!t.open},openSettings:function(){},toggleLiveEmotions:function(){Y.liveEmotionsEnabled||localStorage.liveEmotionExplanationShowed?Y.toggleLiveEmotions():confirm("Live emotions is an innovative feature, which uses your web camera to analyze your emotions and calculate the time of being happy o blockgag. Note, that your video is private and we don't send it anywhere.")&&(localStorage.liveEmotionExplanationShowed=!0,Y.toggleLiveEmotions())},logIn:function(){this.closeSignInModal(),window.localStorage.locationBeforeRedirection=location.href,window.toastr.success("Blockstack authentication started...","",{timeOut:"20000",closeButton:!1}),setTimeout(function(){T.signIn()},200)},logOut:function(){T.signOut()}}},tt=Z,et=(n("7a6d"),Object(L["a"])(tt,c,l,!1,null,"bf660d08",null)),nt=et.exports;T.checkAuth().then(function(){if(localStorage.locationBeforeRedirection){var t=localStorage.locationBeforeRedirection;localStorage.removeItem("locationBeforeRedirection"),location.href=t}}),window.toastr.options={closeButton:!0,progressBar:!1,showDuration:3e3,hideDuration:10,iconClass:"hidden"};var at,it,st,ot={name:"app",data:function(){return{BlockstackUtils:T}},components:{NavBar:nt}},rt=ot,ct=(n("60bc"),n("5c64"),Object(L["a"])(rt,o,r,!1,null,null,null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Coming soon!")]),n("p",[t._v('\n    Without ads, with real privacy and with additional feature: "live emotions" - user can enable access to their camera and client-side ML will be analyzing their emotions to understand their preferences (the results are private by default, but users will be able to enable "public" mode and like or dislike posts by smiling or being angry or sad)\n  ')]),n("button",{staticClass:"mdc-button mdc-button--raised centerd",on:{click:function(e){return t.openDialog("first")}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n    SHOW DIALOG 1\n  ")]),n("button",{staticClass:"mdc-button mdc-button--raised centerd",on:{click:function(e){return t.openDialog("second")}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n    SHOW DIALOG 2\n  ")]),n("Dialog",{attrs:{title:"Test title"}},["first"==t.modalContent?n("div",[n("h5",[t._v("First")]),n("button",{staticClass:"mdc-button mdc-button--raised centerd",on:{click:function(e){return t.updateModalContent()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n        Change CONTENT\n      ")])]):t._e(),"second"==t.modalContent?n("div",[n("h5",[t._v("Second")])]):t._e(),"updated"==t.modalContent?n("div",[n("h5",[t._v("Updated content hahahah")])]):t._e()])],1)},dt=[],pt={name:"Home",data:function(){return{modalContent:"first"}},props:{text:Number,img:String},components:{Dialog:G},methods:{openDialog:function(t){this.modalContent=t;var e=Q["a"].attachTo(document.querySelector(".mdc-dialog"));e.open()},updateModalContent:function(){this.modalContent="updated"}}},gt=pt,mt=(n("86d6"),Object(L["a"])(gt,ut,dt,!1,null,"08580980",null)),ft=mt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-layout-grid"},[n("div",{staticClass:"mdc-layout-grid__inner"},[n("div",{staticClass:"mdc-layout-grid__cell--span-3"},[n("Tags")],1),n("div",{staticClass:"mdc-layout-grid__cell--span-6"},[n("div",{staticClass:"posts-block"},[t._l(t.filteredPosts,function(t,e){return n("div",{key:e,staticClass:"post"},[n("Post",{attrs:{post:t}})],1)}),n("div",{staticClass:"post"}),n("div",{staticClass:"post"}),n("div",{staticClass:"post"}),n("div",{staticClass:"post"})],2)]),n("div",{staticClass:"mdc-layout-grid__cell--span-3"},[n("div",{staticClass:"live-emotions-block"},[n("LiveEmotions",{attrs:{enabled:t.State.liveEmotionsEnabled}})],1)])])])},ht=[],bt=(n("6762"),n("2fdb"),n("55dd"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"categories-list-container"},[n("ul",{staticClass:"mdc-list"},[n("TagInTagList",{attrs:{title:"Hot",icon:"whatshot"}}),n("TagInTagList",{attrs:{title:"Trending",icon:"trending_up"}}),n("TagInTagList",{attrs:{title:"Fresh",icon:"query_builder"}})],1),n("p",{staticClass:"subheader"},[t._v("POPULAR")]),n("ul",{staticClass:"mdc-list"},[n("TagInTagList",{attrs:{title:"Funny",icon:"mood"}}),n("TagInTagList",{attrs:{title:"Blockstack",img:"../../public/blockstack-icon.png"}}),n("TagInTagList",{attrs:{title:"Memes",icon:"face"}}),n("TagInTagList",{attrs:{title:"GIFs",icon:"gif"}}),n("TagInTagList",{attrs:{title:"Gaming",icon:"videogame_asset"}})],1)])}),_t=[],yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"mdc-list-item",class:{"mdc-list-item--selected":t.State.selectedTag==t.title},attrs:{tabindex:"0"},on:{click:function(e){return t.State.selectTag(t.title)}}},[a("span",{staticClass:"mdc-list-item__text"},[t.icon?a("i",{staticClass:"material-icons"},[t._v(t._s(t.icon))]):t._e(),t.img?a("img",{staticClass:"tag-img",attrs:{src:n("87e5")}}):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")])])},Ct=[],kt={data:function(){return{State:Y}},props:{icon:String,title:String,img:String}},wt=kt,St=(n("d378"),Object(L["a"])(wt,yt,Ct,!1,null,"4f6bf01f",null)),xt=St.exports,Tt={name:"Categories",data:function(){return{State:Y}},props:{selected:String},components:{TagInTagList:xt}},Ot=Tt,It=(n("5235"),Object(L["a"])(Ot,bt,_t,!1,null,"64956bb8",null)),Ut=It.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post mdc-elevation--z1"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.post.imgGaiaPublicUrl,expression:"post.imgGaiaPublicUrl"}],staticClass:"image-in-post"})])},Lt=[],jt={name:"Post",props:{post:Object}},Bt=jt,Pt=(n("bb35"),Object(L["a"])(Bt,Et,Lt,!1,null,"583be159",null)),Mt=Pt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.enabled?n("div",{staticClass:"live-emotions-container "},[n("video",{staticClass:"mdc-elevation--z1",attrs:{id:"video",width:"200",height:"150",autoplay:"",muted:""},domProps:{muted:!0}}),t.enabled?n("span",{attrs:{id:"expression-emoji"}},[t._v("\n    "+t._s(t.expressionEmoji)+"\n  ")]):t._e(),n("div",{staticClass:"mdc-elevation--z1",attrs:{id:"live-emotions-stats"}},[n("i",{staticClass:"material-icons centered",attrs:{id:"time-icon"}},[t._v("alarm")]),n("br"),n("h2",{staticClass:"centered"},[t._v("\n      "+t._s(t.happyTimeSeconds)+"\n    ")]),n("p",{staticClass:"centered",attrs:{id:"seconds-text"}},[t._v("seconds")]),n("p",{staticClass:"centered",attrs:{id:"happy-time-text"}},[t._v("Happy time on blockgag")])])]):t._e()},Nt=[],At=(n("5df3"),n("ac6a"),n("ab39")),Dt=300;function Ft(t){return Gt.apply(this,arguments)}function Gt(){return Gt=Object(u["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,at=document.getElementById("video"),window.toastr.success("ML models loading started"),t.next=5,Ht();case 5:return t.next=7,navigator.mediaDevices.getUserMedia({video:!0,audio:!1});case 7:it=t.sent,at=document.getElementById("video"),at.srcObject=it,setTimeout(function(){window.toastr.success("ML is ready. Emoji should show your emotions now")},200),st=setInterval(Object(u["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Wt();case 2:n=t.sent,e(n);case 4:case"end":return t.stop()}},t)})),Dt),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](0),window.toastr.error("Video initialization failed :("),console.error(t.t0);case 18:case"end":return t.stop()}},t,null,[[0,14]])})),Gt.apply(this,arguments)}function $t(){return zt.apply(this,arguments)}function zt(){return zt=Object(u["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:it.getTracks().forEach(function(t){t.stop()}),clearInterval(st);case 2:case"end":return t.stop()}},t)})),zt.apply(this,arguments)}function Ht(){return qt.apply(this,arguments)}function qt(){return qt=Object(u["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Loading ML models"),t.next=3,Promise.all([At["c"].tinyFaceDetector.loadFromUri("/MLModels"),At["c"].faceLandmark68Net.loadFromUri("/MLModels"),At["c"].faceRecognitionNet.loadFromUri("/MLModels"),At["c"].faceExpressionNet.loadFromUri("/MLModels")]);case 3:console.log("ML models loaded");case 4:case"end":return t.stop()}},t)})),qt.apply(this,arguments)}function Wt(){return Jt.apply(this,arguments)}function Jt(){return Jt=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(At["b"])(at,new At["a"]).withFaceLandmarks().withFaceExpressions();case 2:if(e=t.sent,!e||!e[0]){t.next=7;break}return t.abrupt("return",e[0].expressions);case 7:return t.abrupt("return",{});case 8:case"end":return t.stop()}},t)})),Jt.apply(this,arguments)}function Vt(t){var e=localStorage.happyTimeOnBlockgag;return t.happy>.4&&(localStorage.happyTimeOnBlockgag=(Number(e)||0)+Dt),localStorage.happyTimeOnBlockgag}var Kt={neutral:"😐",happy:{1:"🙂",2:"😊",3:"😃",4:"😄",5:"😁",6:"😆",7:"😅",8:"😂"},sad:{1:"😕",2:"😟",3:"😩"},angry:{1:"😠",2:"😤",3:"😡"},surprised:{1:"😮"}},Yt={props:{enabled:Boolean},data:function(){return{expressions:{},happyTimeSeconds:(localStorage.happyTimeOnBlockgag||0)/1e3}},computed:{expressionEmoji:function(){var t={happy:{.8:Kt.happy[8],.6:Kt.happy[7],.5:Kt.happy[5],.3:Kt.happy[2],.2:Kt.happy[1]},sad:{.5:Kt.sad[3]},angry:{.2:Kt.angry[3]},surprised:{.2:Kt.surprised[1]}};for(var e in t)for(var n in t[e])if(this.expressions[e]>n)return t[e][n];return Kt.neutral}},watch:{enabled:function(t){var e=this;t?(console.log("Starting video recording"),Ft(function(t){e.expressions=t;var n=Vt(t);e.happyTimeSeconds=n/1e3})):(console.log("Finishing video recording"),$t())}}},Qt=Yt,Xt=(n("4227"),Object(L["a"])(Qt,Rt,Nt,!1,null,null,null)),Zt=Xt.exports;function te(t,e,n){var a=t[e];return t[e]=t[n],t[n]=a,t}var ee={name:"Posts",data:function(){return{posts:[],State:Y}},props:{text:Number,img:String},components:{Tags:Ut,Post:Mt,LiveEmotions:Zt},created:function(){var t=this;T.getAllPosts().then(function(e){t.posts=e})},computed:{filteredPosts:function(){if(this.posts&&this.posts.length){var t=JSON.parse(JSON.stringify(this.posts));t.sort(function(t,e){return e.createdAt-t.createdAt});var e=this.State.selectedTag;return e&&!["Hot","Trending","Fresh"].includes(e)?t.filter(function(t){return t.tags&&t.tags.includes(e)}):("Hot"==e&&t.length>3&&(t=te(t,0,t.length-1),t=te(t,1,t.length-2)),"Trending"==e&&t.length>3&&(t=te(t,0,t.length-2),t=te(t,1,t.length-1)),t)}return[]}}},ne=ee,ae=(n("5def"),Object(L["a"])(ne,vt,ht,!1,null,"372634b8",null)),ie=ae.exports,se=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},oe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Post he")])])}],re={name:"Post",props:{text:Number,img:String}},ce=re,le=(n("3d50"),Object(L["a"])(ce,se,oe,!1,null,"3b02af72",null)),ue=le.exports,de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"add-card"},[n("div",{staticClass:"mdc-layout-grid "},[n("div",{staticClass:"mdc-layout-grid__inner"},[n("div",{staticClass:"mdc-layout-grid__cell--span-12 mdc-elevation--z1"},["upload"==t.addingType?n("div",{staticClass:"file-upload-area"},[n("file-pond",{ref:"pond",attrs:{name:"my-pond","class-name":"my-pond","allow-multiple":!1,"label-idle":"Drop files here (or click to select)","accepted-file-types":"image/jpeg, image/png, image/gif",files:t.files},on:{addfile:t.onFileAdded}})],1):t._e(),"imgUrl"==t.addingType||"videoUrl"==t.addingType?n("div",{staticClass:"text-input-area"},[n("div",{staticClass:"mdc-text-field",attrs:{id:"link-field"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"mdc-text-field__input",attrs:{id:"link-paste-input",type:"text"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),n("label",{staticClass:"mdc-floating-label",attrs:{for:"link-paste-input"}},[t._v("\n                "+t._s(t.objectName)+" URL\n              ")]),n("div",{staticClass:"mdc-line-ripple"})])]):t._e(),n("div",{staticClass:"text-input-area"},[n("div",{staticClass:"mdc-text-field",attrs:{id:"description-field"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"mdc-text-field__input",attrs:{type:"text"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),n("label",{staticClass:"mdc-floating-label",attrs:{for:"description-field"}},[t._v("\n                Describe your post (optional)\n              ")]),n("div",{staticClass:"mdc-line-ripple"})])]),n("div",{attrs:{id:"tags-multiselect-container"}},[n("Multiselect",{attrs:{multiple:!0,"close-on-select":!0,"clear-on-select":!1,"preselect-first":!1,selectLabel:"",placeholder:"Select tags",options:t.availableTags},model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}})],1),n("div",{attrs:{id:"upload-button-container"}},[n("button",{staticClass:"mdc-button mdc-button--raised sign-in-button",attrs:{id:"upload-button"},on:{click:function(e){return t.uploadButtonClicked()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n                UPLOAD\n            ")])])]),n("div",{staticClass:"mdc-layout-grid__cell--span-4 alternative-option",class:{"type-selected":"upload"==t.addingType},on:{click:function(e){return t.setType("upload")}}},[n("i",{staticClass:"material-icons"},[t._v("cloud_upload")]),n("span",[t._v("Upload file")])]),n("div",{staticClass:"mdc-layout-grid__cell--span-4 alternative-option",class:{"type-selected":"imgUrl"==t.addingType},on:{click:function(e){return t.setType("imgUrl")}}},[n("i",{staticClass:"material-icons"},[t._v("photo_size_select_actual")]),n("span",[t._v("Paste image URL")])]),t._m(0)])])])])},pe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-layout-grid__cell--span-4 alternative-option"},[n("a",{attrs:{id:"link-to-meme-generator",target:"_blank",href:"https://memeful.com/generator"}},[n("i",{staticClass:"material-icons"},[t._v("pan_tool")]),n("span",[t._v("Make meme")])])])}],ge=n("3bb7"),me={tags:[{title:"Funny",icon:"mood"},{title:"Blockstack",img:"../../public/blockstack-icon.png"},{title:"Memes",icon:"face"},{title:"GIFs",icon:"gif"},{title:"Animals",icon:"pets"},{title:"Gaming",icon:"videogame_asset"}]},fe=n("8e5f"),ve=n.n(fe),he=n("1501"),be=n.n(he),_e=(n("4ed3"),be()());function ye(){setTimeout(function(){var t=document.querySelector("#description-field");t&&ge["a"].attachTo(t);var e=document.querySelector("#link-field");e&&ge["a"].attachTo(e)},100)}function Ce(t){window.toastr.success(t,"",{timeOut:"7000",closeButton:!0})}var ke={name:"Add",created:function(){T.isUserSignedIn()||(location.href="#/posts"),ye()},data:function(){return{addingType:"upload",textField:null,url:"",description:"",selectedTags:[],files:[],uploadedImgBlobUrl:"",addedPostUrl:""}},props:{text:Number,img:String},computed:{objectName:function(){return"videoUrl"==this.addingType?"video":"image"},availableTags:function(){return me.tags.map(function(t){return t.title})}},methods:{initMdcInputs:function(){ye()},onFileAdded:function(t,e){t?(console.error(t),window.toastr.error("Error occured :(")):(this.uploadedImgBlobUrl=window.URL.createObjectURL(e.source),console.log("File uploaded: "+this.uploadedImgBlobUrl))},uploadButtonClicked:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,n,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return Ce("Loading file..."),t.prev=1,e="",e="upload"==this.addingType?this.uploadedImgBlobUrl:this.url,t.next=6,f.a.get(e,{responseType:"arraybuffer"});case 6:return n=t.sent,a=n.data,t.next=10,T.addNewPost({type:"img",originalUrl:this.url,data:a,tags:this.selectedTags,description:this.description},{onSavedToGaia:function(){Ce("Saved to gaia storage. Saving to radiks...")},onPostCreated:function(){Ce("Post added!")}});case 10:i=t.sent,console.log(n),this.addedPostUrl=i,t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](1),window.toastr.error("There was a problem with file uploading :("),console.error(t.t0);case 19:case"end":return t.stop()}},t,this,[[1,15]])}));function e(){return t.apply(this,arguments)}return e}(),setType:function(t){this.addingType=t,this.initMdcInputs()}},components:{Multiselect:ve.a,FilePond:_e}},we=ke,Se=(n("4d14"),Object(L["a"])(we,de,pe,!1,null,"cf3cd87c",null)),xe=Se.exports;a["default"].config.productionTip=!1,a["default"].use(i["a"]),a["default"].use(s["a"],{lazyComponent:!0,preLoad:1.3,observer:!0});var Te=[{path:"/",component:ie},{path:"/home",component:ft},{path:"/posts",component:ie},{path:"/posts/:category",component:ie},{path:"/post/:id",component:ue},{path:"/add",component:xe}],Oe=new i["a"]({routes:Te}),Ie=new a["default"]({router:Oe,render:function(t){return t(lt)}}).$mount("#app");e["default"]=Ie},"5b27":function(t,e,n){},"5c64":function(t,e,n){"use strict";var a=n("c2ae"),i=n.n(a);i.a},"5def":function(t,e,n){"use strict";var a=n("bc4e"),i=n.n(a);i.a},6:function(t,e){},7:function(t,e){},"7a6d":function(t,e,n){"use strict";var a=n("4847"),i=n.n(a);i.a},8:function(t,e){},"86d6":function(t,e,n){"use strict";var a=n("8a47"),i=n.n(a);i.a},"87e5":function(t,e,n){t.exports=n.p+"img/blockstack-icon.dc910bee.png"},"8a47":function(t,e,n){},a721:function(t,e,n){},bb35:function(t,e,n){"use strict";var a=n("a721"),i=n.n(a);i.a},bc4e:function(t,e,n){},c2ae:function(t,e,n){},c4b4:function(t,e,n){},d266:function(t,e,n){t.exports=n.p+"img/blockgag-logo.581582bc.png"},d378:function(t,e,n){"use strict";var a=n("d650"),i=n.n(a);i.a},d650:function(t,e,n){},ffbb:function(t,e,n){}});
//# sourceMappingURL=app.3975958d.js.map