(function(e){function a(a){for(var n,s,i=a[0],d=a[1],l=a[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);c&&c(a);while(f.length)f.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],n=!0,i=1;i<t.length;i++){var d=t[i];0!==r[d]&&(n=!1)}n&&(o.splice(a--,1),e=s(s.s=t[0]))}return e}var n={},r={app:0},o=[];function s(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(t,n,function(a){return e[a]}.bind(null,n));return t},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var c=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e623"),t("e379"),t("5dc8"),t("37e1");var n=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("v-app-bar",{attrs:{app:"","clipped-leftS":"",flat:"",dark:"",dense:""}},[t("v-toolbar-title",[t("span",[e._v("haskap controle panel")])]),t("v-spacer")],1),t("v-navigation-drawer",{attrs:{app:"",flat:"",dark:"","mini-variant":"",permanent:"","expand-on-hover":""}},[t("v-list",e._l(e.navbarlist,(function(a){return t("v-list-item",{key:a.route,attrs:{to:a.route}},[t("v-list-item-icon",[t("v-icon",[e._v(e._s(a.icon))])],1),t("v-list-item-content",[e._v(e._s(a.text))])],1)})),1)],1),t("v-main",[t("router-view")],1)],1)},o=[],s={name:"haskap-panel",components:{},data:function(){return{navbarlist:[{to:"Homr",icon:"mdi-home",text:"Home"}]}}},i=s,d=t("0c7c"),l=t("6544"),c=t.n(l),u=t("7496"),f=t("40dc"),v=t("132d"),p=t("8860"),b=t("da13"),m=t("5d23"),I=t("34c3"),g=t("f6c4"),h=t("f774"),w=t("2fa4"),P=t("2a7f"),_=Object(d["a"])(i,r,o,!1,null,null,null),x=_.exports;c()(_,{VApp:u["a"],VAppBar:f["a"],VIcon:v["a"],VList:p["a"],VListItem:b["a"],VListItemContent:m["a"],VListItemIcon:I["a"],VMain:g["a"],VNavigationDrawer:h["a"],VSpacer:w["a"],VToolbarTitle:P["a"]});var y=t("f309");n["a"].use(y["a"]);var k=new y["a"]({}),L=t("8c4f"),S=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-content",[t("div",{staticClass:"align-baseline"},[t("h1",[e._v("Containers")]),t("v-spacer"),t("v-btn",[e._v("new")])],1),t("v-list",{attrs:{"three-line":""}},[t("v-divider"),e._l(e.containers,(function(a){return t("v-list-item",{key:a.Id},[t("v-list-item-content",[t("v-list-item-title",[e._v(" "+e._s(a.Names[0])+" ")]),t("v-list-item-subtitle",[t("v-layout",{attrs:{wrap:""}},[t("v-flex",[e._v(e._s(a.Image))]),t("v-flex",[e._v(e._s(a.Id))]),t("v-flex",[e._v(e._s(a.State))]),t("v-flex",[e._v(e._s(a.Status))])],1)],1)],1)],1)})),t("v-divider")],2)],1)},A=[],C={name:"Home",data:function(){return{containers:void 0,containersLoaded:!1}},created:function(){this.containers=[{Id:"aa351e505462ccff7c85cc2f7aafe0b25e08f58589add157e418de9f3cfda459",Names:["/admiring_hermann"],Image:"centos",ImageID:"sha256:0d120b6ccaa8c5e149176798b3501d4dd1885f961922497cd0abef155c869566",Command:"echo 'hello world'",Created:1605337436,Ports:[],Labels:{"org.label-schema.build-date":"20200809","org.label-schema.license":"GPLv2","org.label-schema.name":"CentOS Base Image","org.label-schema.schema-version":"1.0","org.label-schema.vendor":"CentOS"},State:"exited",Status:"Exited (0) 5 seconds ago",HostConfig:{NetworkMode:"default"},NetworkSettings:{Networks:{bridge:{IPAMConfig:null,Links:null,Aliases:null,NetworkID:"ca9a7ea67576e52c4d81822e654785d310d864a1699465c0c7a329952d519eaf",EndpointID:"",Gateway:"",IPAddress:"",IPPrefixLen:0,IPv6Gateway:"",GlobalIPv6Address:"",GlobalIPv6PrefixLen:0,MacAddress:""}}},Mounts:[]},{Id:"091e5ac431ef93a6dce9943eee93104c7f0b4a276120194a433c2215a99ae6e7",Names:["/hardcore_liskov"],Image:"ubuntu:latest",ImageID:"sha256:d70eaf7277eada08fca944de400e7e4dd97b1262c06ed2b1011500caa4decaf1",Command:"echo 'hello world'",Created:1605337367,Ports:[],Labels:{},State:"exited",Status:"Exited (0) About a minute ago",HostConfig:{NetworkMode:"default"},NetworkSettings:{Networks:{bridge:{IPAMConfig:null,Links:null,Aliases:null,NetworkID:"ca9a7ea67576e52c4d81822e654785d310d864a1699465c0c7a329952d519eaf",EndpointID:"",Gateway:"",IPAddress:"",IPPrefixLen:0,IPv6Gateway:"",GlobalIPv6Address:"",GlobalIPv6PrefixLen:0,MacAddress:""}}},Mounts:[]},{Id:"fd1ae7e48ef7eb51af36a118610a693e1465e1dd901ea05ff0817454acd1e51b",Names:["/affectionate_fermat"],Image:"alpine",ImageID:"sha256:d6e46aa2470df1d32034c6707c8041158b652f38d2a9ae3d7ad7e7532d22ebe0",Command:"echo 'hello world'",Created:1605334877,Ports:[],Labels:{},State:"exited",Status:"Exited (0) 42 minutes ago",HostConfig:{NetworkMode:"default"},NetworkSettings:{Networks:{bridge:{IPAMConfig:null,Links:null,Aliases:null,NetworkID:"ca9a7ea67576e52c4d81822e654785d310d864a1699465c0c7a329952d519eaf",EndpointID:"",Gateway:"",IPAddress:"",IPPrefixLen:0,IPv6Gateway:"",GlobalIPv6Address:"",GlobalIPv6PrefixLen:0,MacAddress:""}}},Mounts:[]},{Id:"a4a8a858d6d329b01b014e2f3e7906c8a6b6568029bee93e60bd03a57c8699e6",Names:["/gifted_lichterman"],Image:"alpine",ImageID:"sha256:d6e46aa2470df1d32034c6707c8041158b652f38d2a9ae3d7ad7e7532d22ebe0",Command:"echo 'hello world'",Created:1605334763,Ports:[],Labels:{},State:"exited",Status:"Exited (0) 44 minutes ago",HostConfig:{NetworkMode:"default"},NetworkSettings:{Networks:{bridge:{IPAMConfig:null,Links:null,Aliases:null,NetworkID:"ca9a7ea67576e52c4d81822e654785d310d864a1699465c0c7a329952d519eaf",EndpointID:"",Gateway:"",IPAddress:"",IPPrefixLen:0,IPv6Gateway:"",GlobalIPv6Address:"",GlobalIPv6PrefixLen:0,MacAddress:""}}},Mounts:[]}],console.log(this.containers)}},N=C,V=t("8336"),M=t("a75b"),G=t("ce7e"),O=t("0e8f"),D=t("a722"),j=Object(d["a"])(N,S,A,!1,null,null,null),E=j.exports;c()(j,{VBtn:V["a"],VContent:M["a"],VDivider:G["a"],VFlex:O["a"],VLayout:D["a"],VList:p["a"],VListItem:b["a"],VListItemContent:m["a"],VListItemSubtitle:m["b"],VListItemTitle:m["c"],VSpacer:w["a"]}),n["a"].use(L["a"]);var H=[{path:"/",name:"Home",component:E}],T=new L["a"]({mode:"history",base:"/",routes:H}),B=T,$=t("bc3a"),J=t.n($),F=t("2106"),q=t.n(F);n["a"].config.productionTip=!1,n["a"].use(q.a,J.a),new n["a"]({vuetify:k,router:B,render:function(e){return e(x)}}).$mount("#app")}});
//# sourceMappingURL=app.c1fb4e3b.js.map