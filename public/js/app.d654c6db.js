(function(t){function e(e){for(var a,o,c=e[0],l=e[1],s=e[2],v=0,d=[];v<c.length;v++)o=c[v],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"","clipped-leftS":"",flat:"",dark:"",dense:""}},[n("v-toolbar-title",[n("span",[t._v("haskap controle panel")])]),n("v-spacer")],1),n("v-navigation-drawer",{attrs:{app:"",flat:"",dark:"","mini-variant":"",permanent:"","expand-on-hover":""}},[n("v-list",t._l(t.navbarlist,(function(e){return n("v-list-item",{key:e.route,attrs:{to:e.route}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[t._v(t._s(e.text))])],1)})),1)],1),n("v-main",[n("router-view")],1)],1)},i=[],o={name:"haskap-panel",components:{},data:function(){return{navbarlist:[{to:"Homr",icon:"mdi-home",text:"Home"}]}}},c=o,l=n("0c7c"),s=n("6544"),u=n.n(s),v=n("7496"),d=n("40dc"),p=n("132d"),f=n("8860"),m=n("da13"),b=n("5d23"),h=n("34c3"),g=n("f6c4"),_=n("f774"),V=n("2fa4"),w=n("2a7f"),x=Object(l["a"])(c,r,i,!1,null,null,null),y=x.exports;u()(x,{VApp:v["a"],VAppBar:d["a"],VIcon:p["a"],VList:f["a"],VListItem:m["a"],VListItemContent:b["a"],VListItemIcon:h["a"],VMain:g["a"],VNavigationDrawer:_["a"],VSpacer:V["a"],VToolbarTitle:w["a"]});var C=n("f309");a["a"].use(C["a"]);var k=new C["a"]({}),O=n("8c4f"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("div",{staticClass:"align-baseline"},[n("h1",[t._v("Containers")]),n("v-spacer"),n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{dark:""}},"v-btn",r,!1),a),[t._v(" new ")])]}}]),model:{value:t.containerNewDialog,callback:function(e){t.containerNewDialog=e},expression:"containerNewDialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"},[t._v(" Create New Container ")]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"image",required:""},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}})],1)],1)],1)],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.containerNewDialog=!1}}},[t._v(" cansel ")]),n("v-btn",{attrs:{text:""},on:{click:t.createContainer}},[t._v(" create ")])],1)],1)],1)],1),n("v-list",{attrs:{"three-line":""}},[n("v-divider"),t._l(t.containers,(function(e){return n("v-list-item",{key:e.Id},[n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.Names[0])+" ")]),n("v-list-item-subtitle",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",[t._v(t._s(e.Image))]),n("v-flex",[t._v(t._s(e.Id))]),n("v-flex",[t._v(t._s(e.State))]),n("v-flex",[t._v(t._s(e.Status))])],1)],1)],1)],1)})),n("v-divider")],2)],1)},L=[],S={name:"Home",data:function(){return{image:"",containers:void 0,containersLoaded:!1,containerNewDialog:!1}},methods:{createContainer:function(){this.containerNewDialog=!1,this.axios.post("/containers",{name:this.image}).then((function(t){console.log(t)}))}},created:function(){var t=this;this.axios.get("/containers").then((function(e){t.containers=e.data,t.containersLoaded=!0,console.log(t.containers)}))}},j=S,D=n("8336"),N=n("b0af"),T=n("99d9"),P=n("62ad"),M=n("a523"),H=n("a75b"),A=n("169a"),$=n("ce7e"),B=n("0e8f"),E=n("a722"),F=n("0fd9b"),J=n("8654"),q=Object(l["a"])(j,I,L,!1,null,null,null),R=q.exports;u()(q,{VBtn:D["a"],VCard:N["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VCol:P["a"],VContainer:M["a"],VContent:H["a"],VDialog:A["a"],VDivider:$["a"],VFlex:B["a"],VLayout:E["a"],VList:f["a"],VListItem:m["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VRow:F["a"],VSpacer:V["a"],VTextField:J["a"]}),a["a"].use(O["a"]);var z=[{path:"/",name:"Home",component:R}],G=new O["a"]({mode:"history",base:"/",routes:z}),K=G,Q=n("bc3a"),U=n.n(Q),W=n("2106"),X=n.n(W);a["a"].config.productionTip=!1,a["a"].use(X.a,U.a),new a["a"]({vuetify:k,router:K,render:function(t){return t(y)}}).$mount("#app")}});
//# sourceMappingURL=app.d654c6db.js.map