(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)o=r[u],a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05ed":function(t,e,n){},"0834":function(t,e,n){},"0e66":function(t,e,n){"use strict";var i=n("8491"),a=n.n(i);a.a},1:function(t,e){},"1fdc":function(t,e,n){"use strict";var i=n("427d"),a=n.n(i);a.a},2:function(t,e){},3:function(t,e){},"3d50":function(t,e,n){"use strict";var i=n("5b27"),a=n.n(i);a.a},4:function(t,e){},"427d":function(t,e,n){},5:function(t,e){},"549e":function(t,e,n){},"556c":function(t,e,n){"use strict";var i=n("603a"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=n("8c4f"),s=n("caf9"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("NavBar"),t.BlockstackUtils.pendingAuth?t._e():n("router-view",{staticClass:"view"}),t.BlockstackUtils.pendingAuth?n("h2",{staticClass:"centered authentication-in-progress-title"},[t._v("\n      Authentication in progress...\n    ")]):t._e()],1)])},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("header",{staticClass:"mdc-top-app-bar mdc-top-app-bar--dense"},[n("div",{staticClass:"mdc-top-app-bar__row"},[t._m(0),n("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",attrs:{role:"toolbar"}},[n("div",{staticClass:"navbar-el"},[n("button",{staticClass:"mdc-button mdc-button--outlined",on:{click:function(e){return t.tryLiveEmotions()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n              TRY LIVE EMOTIONS\n          ")])]),n("div",{staticClass:"navbar-el"},[t.signedIn?n("a",{staticClass:"mdc-icon-button material-icons white add-photo-icon",attrs:{href:"#/add"}},[t._v("\n            add_photo_alternate\n          ")]):t._e()]),n("div",{staticClass:"navbar-el"},[n("div",{staticClass:"account-circle mdc-menu-surface--anchor",on:{click:function(e){return t.openMenu()}}},[t.signedIn&&t.userAvatar?n("img",{attrs:{id:"avatar-image",src:t.userAvatar}}):t._e(),t.signedIn&&!t.userAvatar?n("div",{staticClass:"username-letter"},[t._v("\n              "+t._s(t.usernameFirstLetter)+"\n            ")]):t._e(),n("Menu",{attrs:{onSettingsClicked:t.openSettings,onLogOutClicked:t.logOut}})],1),t.signedIn?t._e():n("button",{staticClass:"mdc-button mdc-button--raised sign-in-button",on:{click:function(e){return t.openSignInModal()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n              SIGN IN\n          ")])])])])]),n("SignInModal",{attrs:{onLogInButtonClicked:t.logIn}})],1)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},[i("a",{attrs:{href:"#/posts"}},[i("img",{attrs:{id:"navbar-logo",src:n("d266")}})]),i("a",{staticClass:"normal-text",attrs:{href:"#/posts"}},[i("span",{staticClass:"mdc-top-app-bar__title white"},[t._v("GAG")])])])}],d=(n("96cf"),n("3b8d")),u=n("e4d3"),p=n.n(u),m=n("f9d6"),g=n("bc3a"),f=n.n(g),v=n("d225"),_=n("308d"),b=n("6bb5"),h=n("4e2b"),C=n("bd86"),y=function(t){function e(){return Object(v["a"])(this,e),Object(_["a"])(this,Object(b["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),e}(m["Model"]);Object(C["a"])(y,"className","BlockgagPost"),Object(C["a"])(y,"schema",{originalUrl:{type:Boolean,decrypted:!0},description:{type:String,decrypted:!0},type:{type:String,decrypted:!0},imgGaiaPublicUrl:{type:String,decrypted:!0},tags:{type:Array,decrypted:!0}}),Object(C["a"])(y,"defaults",{type:"img"});var k=y,w="https://radiks.dece.app",x=new p.a.AppConfig(["store_write","publish_data","email"]),S=new p.a.UserSession({appConfig:x});Object(m["configure"])({userSession:S,apiServer:w});var O={pendingAuth:!1,isUserSignedIn:function(){return S.isUserSignedIn()},getUserSession:function(){return S},getUserName:function(){return S.loadUserData().username},getUserAvatar:function(){if(S.isUserSignedIn()){var t=S.loadUserData();if(t.profile&&t.profile.image&&t.profile.image[0])return t.profile.image[0].contentUrl}return null},checkAuth:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(S=Object(m["getConfig"])().userSession,!S.isSignInPending()){t.next=14;break}return t.prev=2,this.pendingAuth=!0,t.next=6,S.handlePendingSignIn();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),console.error(t.t0);case 11:return t.prev=11,this.pendingAuth=!1,t.finish(11);case 14:if(!S.isUserSignedIn()){t.next=17;break}return t.next=17,m["User"].createWithCurrentUser();case 17:case"end":return t.stop()}},t,this,[[2,8,11,14]])}));function e(){return t.apply(this,arguments)}return e}(),signIn:function(){S.redirectToSignIn()},signOut:function(){S.signUserOut(),location.reload()},getAllPosts:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var e,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=w+"/radiks/models/find?radiksType=BlockgagPost",t.next=3,f.a.get(e);case 3:return n=t.sent,i=n.data,t.abrupt("return",i.results||[]);case 6:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),savePostToGaia:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S.putFile(e,n,{encrypt:!1});case 2:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),addNewPost:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e,n){var i,a,s,o,r,c,l,d,u,p,m;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.type,a=e.originalUrl,s=e.data,o=e.description,r=e.tags,c=n.onSavedToGaia,l=n.onPostCreated,d=new k({type:i,originalUrl:a,description:o,tags:r}),c(),u=d._id,t.next=7,this.savePostToGaia(u,s);case 7:return t.next=9,S.getFileUrl(u);case 9:return p=t.sent,console.log(p),d.update({imgGaiaPublicUrl:p}),console.log(d),t.next=15,d.save();case 15:return l(),m="https://blockgag.co#/post/".concat(d._id),t.abrupt("return",m);case 18:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}()},U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-menu mdc-menu-surface"},[n("ul",{staticClass:"mdc-list",attrs:{role:"menu","aria-hidden":"true","aria-orientation":"vertical",tabindex:"-1"}},[n("li",{staticClass:"mdc-list-item",attrs:{role:"menuitem"},on:{click:function(e){return t.onSettingsClicked()}}},[t._m(0)]),n("li",{staticClass:"mdc-list-item",attrs:{role:"menuitem"},on:{click:function(e){return t.onLogOutClicked()}}},[t._m(1)])])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mdc-list-item__text"},[n("i",{staticClass:"material-icons"},[t._v("settings")]),t._v("\n        Settings\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mdc-list-item__text"},[n("i",{staticClass:"material-icons"},[t._v("\n          directions_walk\n        ")]),t._v("\n        Log out\n      ")])}],I={props:{onSettingsClicked:Function,onLogOutClicked:Function}},P=I,j=n("2877"),B=Object(j["a"])(P,U,T,!1,null,null,null),A=B.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{attrs:{title:"Log in with blockstack"}},[n("p",{staticClass:"blockstack-description"},[t._v("\n    BlockGAG is built using\n      "),n("a",{attrs:{target:"_blank",href:"https://blockstack.org/try-blockstack"}},[t._v("Blockstack")]),t._v("\n    infrastructure,\n    allowing us to provide decentralized encrypted storage.\n  ")]),n("p",{staticClass:"blockstack-description"},[t._v("\n    Blockstack ID provides user-controlled login and storage\n    that enable you to take back control of your identity and data.\n  ")]),n("button",{staticClass:"mdc-button mdc-button--raised continue-with-blockstack-button",on:{click:function(e){return t.onLogInButtonClicked()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n      LOG IN TO BLOCKSTACK\n  ")])])},M=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-dialog",attrs:{role:"alertdialog","aria-modal":"true","aria-labelledby":"my-dialog-title","aria-describedby":"my-dialog-content"}},[n("div",{staticClass:"mdc-dialog__container"},[n("div",{staticClass:"mdc-dialog__surface"},[n("h2",{staticClass:"mdc-dialog__title",attrs:{id:"my-dialog-title"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),n("div",{staticClass:"mdc-dialog__content",attrs:{id:"my-dialog-content"}},[t._t("default")],2)])]),n("div",{staticClass:"mdc-dialog__scrim"})])},E=[],G={name:"Dialog",data:function(){return{}},props:{title:String},computed:{}},R=G,$=(n("1fdc"),Object(j["a"])(R,N,E,!1,null,"6dab4c7c",null)),D=$.exports,F={props:{onLogInButtonClicked:Function},components:{Dialog:D}},z=F,q=(n("7d81"),Object(j["a"])(z,L,M,!1,null,"d1e2be50",null)),H=q.exports,W=n("704c"),V=n("0021"),J={name:"NavBar",data:function(){return{userAvatar:O.getUserAvatar(),signedIn:O.isUserSignedIn(),modalType:"",dialog:null}},computed:{usernameFirstLetter:function(){var t=O.getUserName();return t?t[0].toUpperCase():""}},components:{Menu:A,SignInModal:H},methods:{openSignInModal:function(){var t=document.querySelector(".mdc-dialog");this.dialog=W["a"].attachTo(t),this.modalType="signIn",this.dialog.open()},closeSignInModal:function(){this.dialog&&this.dialog.close()},openMenu:function(){var t=V["a"].attachTo(document.querySelector(".mdc-menu"));t.open=!t.open},openSettings:function(){window.toastr.success("Settings opening... Not implemented yet")},tryLiveEmotions:function(){window.toastr.success("Trying live emotions.. Not implemented yet")},logIn:function(){this.closeSignInModal(),window.localStorage.locationBeforeRedirection=location.href,window.toastr.success("Blockstack authentication started...","",{timeOut:"20000",closeButton:!1}),setTimeout(function(){O.signIn()},200)},logOut:function(){O.signOut()}}},K=J,Y=(n("556c"),Object(j["a"])(K,c,l,!1,null,"1f467197",null)),Q=Y.exports;O.checkAuth().then(function(){if(localStorage.locationBeforeRedirection){var t=localStorage.locationBeforeRedirection;localStorage.removeItem("locationBeforeRedirection"),location.href=t}}),window.toastr.options={closeButton:!0,progressBar:!1,showDuration:3e3,hideDuration:10,iconClass:"hidden"};var X={name:"app",data:function(){return{BlockstackUtils:O}},components:{NavBar:Q}},Z=X,tt=(n("60bc"),n("5c64"),Object(j["a"])(Z,o,r,!1,null,null,null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Coming soon!")]),n("p",[t._v('\n    Without ads, with real privacy and with additional feature: "live emotions" - user can enable access to their camera and client-side ML will be analyzing their emotions to understand their preferences (the results are private by default, but users will be able to enable "public" mode and like or dislike posts by smiling or being angry or sad)\n  ')]),n("button",{staticClass:"mdc-button mdc-button--raised centerd",on:{click:function(e){return t.openDialog("first")}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n    SHOW DIALOG 1\n  ")]),n("button",{staticClass:"mdc-button mdc-button--raised centerd",on:{click:function(e){return t.openDialog("second")}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n    SHOW DIALOG 2\n  ")]),n("Dialog",{attrs:{title:"Test title"}},["first"==t.modalContent?n("div",[n("h5",[t._v("First")]),n("button",{staticClass:"mdc-button mdc-button--raised centerd",on:{click:function(e){return t.updateModalContent()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n        Change CONTENT\n      ")])]):t._e(),"second"==t.modalContent?n("div",[n("h5",[t._v("Second")])]):t._e(),"updated"==t.modalContent?n("div",[n("h5",[t._v("Updated content hahahah")])]):t._e()])],1)},it=[],at=(n("c5f6"),{name:"Home",data:function(){return{modalContent:"first"}},props:{text:Number,img:String},components:{Dialog:D},methods:{openDialog:function(t){this.modalContent=t;var e=W["a"].attachTo(document.querySelector(".mdc-dialog"));e.open()},updateModalContent:function(){this.modalContent="updated"}}}),st=at,ot=(n("86d6"),Object(j["a"])(st,nt,it,!1,null,"08580980",null)),rt=ot.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-layout-grid"},[n("div",{staticClass:"mdc-layout-grid__inner"},[n("div",{staticClass:"mdc-layout-grid__cell--span-3"},[n("Categories")],1),n("div",{staticClass:"mdc-layout-grid__cell--span-6"},[n("div",{staticClass:"posts-block"},[t._l(t.posts,function(t,e){return n("div",{key:e,staticClass:"post"},[n("Post",{attrs:{post:t}})],1)}),n("div",{staticClass:"post"}),n("div",{staticClass:"post"}),n("div",{staticClass:"post"}),n("div",{staticClass:"post"})],2)]),t._m(0)])])},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-layout-grid__cell--span-3"},[n("div",{staticClass:"live-emotions-block"})])}],dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"categories-list-container"},[i("ul",{staticClass:"mdc-list"},[i("li",{staticClass:"mdc-list-item",attrs:{tabindex:"0"}},[i("span",{staticClass:"mdc-list-item__text"},[i("i",{staticClass:"material-icons"},[t._v("whatshot")]),t._v("\n        Hot\n      ")])]),i("li",{staticClass:"mdc-list-item"},[i("span",{staticClass:"mdc-list-item__text"},[i("i",{staticClass:"material-icons"},[t._v("trending_up")]),t._v("\n        Trending\n      ")])]),i("li",{staticClass:"mdc-list-item"},[i("span",{staticClass:"mdc-list-item__text"},[i("i",{staticClass:"material-icons"},[t._v("query_builder")]),t._v("\n        Fresh\n      ")])])]),i("p",{staticClass:"subheader"},[t._v("POPULAR")]),i("ul",{staticClass:"mdc-list"},[i("li",{staticClass:"mdc-list-item",attrs:{tabindex:"0"}},[i("span",{staticClass:"mdc-list-item__text"},[i("i",{staticClass:"material-icons"},[t._v("\n          mood\n        ")]),t._v("\n        Funny\n      ")])]),i("li",{staticClass:"mdc-list-item"},[i("span",{staticClass:"mdc-list-item__text"},[i("img",{staticClass:"category-img",attrs:{src:n("87e5")}}),t._v("\n        Blockstack\n      ")])]),i("li",{staticClass:"mdc-list-item"},[i("span",{staticClass:"mdc-list-item__text"},[i("i",{staticClass:"material-icons"},[t._v("\n          face\n        ")]),t._v("\n        Memes\n      ")])]),i("li",{staticClass:"mdc-list-item"},[i("span",{staticClass:"mdc-list-item__text"},[i("i",{staticClass:"material-icons"},[t._v("\n          gif\n        ")]),t._v("\n        GIFs\n      ")])]),i("li",{staticClass:"mdc-list-item"},[i("span",{staticClass:"mdc-list-item__text"},[i("i",{staticClass:"material-icons"},[t._v("\n          pets\n        ")]),t._v("\n        Animals\n      ")])]),i("li",{staticClass:"mdc-list-item"},[i("span",{staticClass:"mdc-list-item__text"},[i("i",{staticClass:"material-icons"},[t._v("\n          videogame_asset\n        ")]),t._v("\n        Gaming\n      ")])]),i("li",{staticClass:"mdc-list-item"},[i("span",{staticClass:"mdc-list-item__text"},[i("i",{staticClass:"material-icons"},[t._v("\n          ondemand_video\n        ")]),t._v("\n        Video\n      ")])])])])}],pt={name:"Categories",props:{selected:String}},mt=pt,gt=(n("0e66"),Object(j["a"])(mt,dt,ut,!1,null,"3069e62e",null)),ft=gt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post mdc-elevation--z1"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.post.imgGaiaPublicUrl,expression:"post.imgGaiaPublicUrl"}],staticClass:"image-in-post"})])},_t=[],bt={name:"Post",props:{post:Object}},ht=bt,Ct=(n("96ac"),Object(j["a"])(ht,vt,_t,!1,null,"32cf35cc",null)),yt=Ct.exports,kt={name:"Posts",data:function(){return{posts:[]}},props:{text:Number,img:String},components:{Categories:ft,Post:yt},created:function(){var t=this;O.getAllPosts().then(function(e){t.posts=e})}},wt=kt,xt=(n("815e"),Object(j["a"])(wt,ct,lt,!1,null,"5eedc763",null)),St=xt.exports,Ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Post he")])])}],Tt={name:"Post",props:{text:Number,img:String}},It=Tt,Pt=(n("3d50"),Object(j["a"])(It,Ot,Ut,!1,null,"3b02af72",null)),jt=Pt.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"add-card"},[t.addedPostUrl?n("p",[t._v("\n      Your new post is available at\n      "),n("a",{attrs:{target:"_blank",href:t.addedPostUrl}},[t._v("\n        "+t._s(t.addedPostUrl)+"\n      ")])]):t._e(),n("div",{staticClass:"mdc-layout-grid "},[n("div",{staticClass:"mdc-layout-grid__inner"},[n("div",{staticClass:"mdc-layout-grid__cell--span-12 mdc-elevation--z1"},["upload"==t.addingType?n("div",{staticClass:"file-upload-area"},[n("file-pond",{ref:"pond",attrs:{name:"my-pond","class-name":"my-pond","allow-multiple":!1,"label-idle":"Drop files here (or click to select)","accepted-file-types":"image/jpeg, image/png, image/gif",files:t.files},on:{addfile:t.onFileAdded}})],1):t._e(),"imgUrl"==t.addingType||"videoUrl"==t.addingType?n("div",{staticClass:"text-input-area"},[n("div",{staticClass:"mdc-text-field",attrs:{id:"link-field"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"mdc-text-field__input",attrs:{id:"link-paste-input",type:"text"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),n("label",{staticClass:"mdc-floating-label",attrs:{for:"link-paste-input"}},[t._v("\n                "+t._s(t.objectName)+" URL\n              ")]),n("div",{staticClass:"mdc-line-ripple"})])]):t._e(),n("div",{staticClass:"text-input-area"},[n("div",{staticClass:"mdc-text-field",attrs:{id:"description-field"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"mdc-text-field__input",attrs:{type:"text"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),n("label",{staticClass:"mdc-floating-label",attrs:{for:"description-field"}},[t._v("\n                Describe your post (optional)\n              ")]),n("div",{staticClass:"mdc-line-ripple"})])]),n("div",{attrs:{id:"tags-multiselect-container"}},[n("Multiselect",{attrs:{multiple:!0,"close-on-select":!0,"clear-on-select":!1,"preselect-first":!1,selectLabel:"",placeholder:"Select tags",options:t.availableTags},model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}})],1),n("div",{attrs:{id:"upload-button-container"}},[n("button",{staticClass:"mdc-button mdc-button--raised sign-in-button",attrs:{id:"upload-button"},on:{click:function(e){return t.uploadButtonClicked()}}},[n("div",{staticClass:"mdc-button__ripple"}),t._v("\n                UPLOAD\n            ")])])]),n("div",{staticClass:"mdc-layout-grid__cell--span-4 alternative-option",class:{"type-selected":"upload"==t.addingType},on:{click:function(e){return t.setType("upload")}}},[n("i",{staticClass:"material-icons"},[t._v("cloud_upload")]),n("span",[t._v("Upload file")])]),n("div",{staticClass:"mdc-layout-grid__cell--span-4 alternative-option",class:{"type-selected":"imgUrl"==t.addingType},on:{click:function(e){return t.setType("imgUrl")}}},[n("i",{staticClass:"material-icons"},[t._v("photo_size_select_actual")]),n("span",[t._v("Paste image URL")])]),t._m(0)])])])])},At=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdc-layout-grid__cell--span-4 alternative-option"},[n("a",{attrs:{id:"link-to-meme-generator",target:"_blank",href:"https://memeful.com/generator"}},[n("i",{staticClass:"material-icons"},[t._v("pan_tool")]),n("span",[t._v("Make meme")])])])}],Lt=n("3bb7"),Mt={tags:[{title:"Funny",icon:"mood"},{title:"Blockstack",img:"../../public/blockstack-icon.png"},{title:"Memes",icon:"face"},{title:"GIFs",icon:"gif"},{title:"Animals",icon:"pets"},{title:"Gaming",icon:"videogame_asset"},{title:"Video",icon:"ondemand_video"}]},Nt=n("8e5f"),Et=n.n(Nt),Gt=n("1501"),Rt=n.n(Gt),$t=(n("4ed3"),Rt()());function Dt(){setTimeout(function(){var t=document.querySelector("#description-field");t&&Lt["a"].attachTo(t);var e=document.querySelector("#link-field");e&&Lt["a"].attachTo(e)},100)}function Ft(t){window.toastr.success(t,"",{timeOut:"7000",closeButton:!0})}var zt={name:"Add",created:function(){O.isUserSignedIn()||(location.href="#/posts"),Dt()},data:function(){return{addingType:"upload",textField:null,url:"",description:"",selectedTags:[],files:[],uploadedImgBlobUrl:"",addedPostUrl:""}},props:{text:Number,img:String},computed:{objectName:function(){return"videoUrl"==this.addingType?"video":"image"},availableTags:function(){return Mt.tags.map(function(t){return t.title})}},methods:{initMdcInputs:function(){Dt()},onFileAdded:function(t,e){t?(console.error(t),window.toastr.error("Error occured :(")):(this.uploadedImgBlobUrl=window.URL.createObjectURL(e.source),console.log("File uploaded: "+this.uploadedImgBlobUrl))},uploadButtonClicked:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var e,n,i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return Ft("Loading file..."),t.prev=1,e="",e="upload"==this.addingType?this.uploadedImgBlobUrl:this.url,t.next=6,f.a.get(e,{responseType:"arraybuffer"});case 6:return n=t.sent,i=n.data,t.next=10,O.addNewPost({type:"img",originalUrl:this.url,data:i,tags:this.selectedTags,description:this.description},{onSavedToGaia:function(){Ft("Saved to gaia storage. Saving to radiks...")},onPostCreated:function(){Ft("Post added!")}});case 10:a=t.sent,console.log(n),this.addedPostUrl=a,t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](1),window.toastr.error("There was a problem with file uploading :("),console.error(t.t0);case 19:case"end":return t.stop()}},t,this,[[1,15]])}));function e(){return t.apply(this,arguments)}return e}(),setType:function(t){this.addingType=t,this.initMdcInputs()}},components:{Multiselect:Et.a,FilePond:$t}},qt=zt,Ht=(n("e226"),Object(j["a"])(qt,Bt,At,!1,null,"008e1b9e",null)),Wt=Ht.exports;i["default"].config.productionTip=!1,i["default"].use(a["a"]),i["default"].use(s["a"],{lazyComponent:!0,preLoad:1.3,observer:!0});var Vt=[{path:"/",component:rt},{path:"/home",component:rt},{path:"/posts",component:St},{path:"/posts/:category",component:St},{path:"/post/:id",component:jt},{path:"/add",component:Wt}],Jt=new a["a"]({routes:Vt}),Kt=new i["default"]({router:Jt,render:function(t){return t(et)}}).$mount("#app");e["default"]=Kt},"5b27":function(t,e,n){},"5c64":function(t,e,n){"use strict";var i=n("c2ae"),a=n.n(i);a.a},"603a":function(t,e,n){},"7d81":function(t,e,n){"use strict";var i=n("549e"),a=n.n(i);a.a},"815e":function(t,e,n){"use strict";var i=n("05ed"),a=n.n(i);a.a},8491:function(t,e,n){},"86d6":function(t,e,n){"use strict";var i=n("8a47"),a=n.n(i);a.a},"87e5":function(t,e,n){t.exports=n.p+"img/blockstack-icon.dc910bee.png"},"8a47":function(t,e,n){},"96ac":function(t,e,n){"use strict";var i=n("0834"),a=n.n(i);a.a},c2ae:function(t,e,n){},d266:function(t,e,n){t.exports=n.p+"img/blockgag-logo.581582bc.png"},e226:function(t,e,n){"use strict";var i=n("fb79"),a=n.n(i);a.a},fb79:function(t,e,n){}});
//# sourceMappingURL=app.58595cd2.js.map