(function(e){function t(t){for(var o,i,s=t[0],u=t[1],l=t[2],p=0,m=[];p<s.length;p++)i=s[p],r[i]&&m.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[this.$store.state.isLoggedIn?n("div",[n("p",[e._v("Hello, "+e._s(this.$store.state.userName))]),n("Logout")],1):e._e(),n("Register"),n("Login")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Register")]),n("div",[n("p",[e._v("Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"name",name:"name"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("p",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("p",[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{on:{click:e.register}},[e._v("Register")])])])},s=[],u=(n("7f7f"),{name:"Register",data:function(){return{name:"",email:"",password:""}},methods:{register:function(){this.$store.dispatch("register",{displayName:this.name,email:this.email,password:this.password}),this.name="",this.email="",this.password=""}}}),l=u,c=n("2877"),p=Object(c["a"])(l,i,s,!1,null,null,null),m=p.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Login")]),n("div",[n("p",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("p",[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{on:{click:e.login}},[e._v("Login")])])])},f=[],g={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){this.$store.dispatch("login",{email:this.email,password:this.password}),this.email="",this.password=""}}},v=g,h=Object(c["a"])(v,d,f,!1,null,null,null),y=h.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{on:{click:e.logout}},[e._v("Logout")])},w=[],_={name:"Logout",methods:{logout:function(){this.$store.commit("logout")}}},b=_,j=Object(c["a"])(b,k,w,!1,null,null,null),x=j.exports,O={name:"app",components:{Register:m,Login:y,Logout:x},mounted:function(){localStorage.getItem("token")&&this.$store.commit("login",{user:localStorage.getItem("userName"),token:localStorage.getItem("token")})}},L=O,N=(n("5c0b"),Object(c["a"])(L,r,a,!1,null,null,null)),S=N.exports,I=n("f499"),P=n.n(I),E=n("2f62");o["a"].use(E["a"]);var $="https://cors-anywhere.herokuapp.com/",T="https://authorization-example.herokuapp.com",C=new E["a"].Store({state:{userName:"",isLoggedIn:!1},mutations:{setUserName:function(e,t){e.userName=t},setIsLoggedIn:function(e,t){e.isLoggedIn=t},login:function(e,t){e.userName=t.user,e.isLoggedIn=!0,localStorage.setItem("token",t.token),localStorage.setItem("userName",t.user)},logout:function(e){e.userName="",e.isLoggedIn=!1,localStorage.removeItem("token"),localStorage.removeItem("userName")}},actions:{register:function(e,t){fetch("".concat($).concat(T,"/register"),{method:"POST",body:P()(t),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){return e.commit("login",t)})},login:function(e,t){fetch("".concat($).concat(T,"/login"),{method:"POST",body:P()(t),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.commit("login",t)})},checkLogin:function(){fetch("".concat($).concat(T,"/checklogin"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:localStorage.getItem("token")}}).then(function(e){return e.json()}).then(function(e){alert(e)})}}});o["a"].config.productionTip=!1,new o["a"]({store:C,render:function(e){return e(S)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.740a8fd8.js.map