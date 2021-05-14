(this["webpackJsonpmern-blog"]=this["webpackJsonpmern-blog"]||[]).push([[0],{244:function(e,t,a){e.exports=a(588)},253:function(e,t,a){},285:function(e,t){},572:function(e,t){},588:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(43),l=a.n(c),s=a(11),o=a(10),m=a(4),u=(a(253),a(45)),i=a(237),p=a(1),E=a(238),d=a(12),g=a.n(d),b=function(e){e?g.a.defaults.headers.common.token=e:delete g.a.defaults.headers.common.token},v=localStorage.getItem("token"),f="";if(v){b(v);var h=Object(E.a)(v),O=new Date(1e3*h.exp);new Date>O?localStorage.removeItem("token"):f=h.user}var N={login:!0,errors:[],user:{token:v,currentUser:v?f:""},loading:!1,loginErrors:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_REQUEST":return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case"REGISTER_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1});case"AUTH_ERRORS":return Object(p.a)(Object(p.a)({},e),{},{errors:t.payload});case"SET_TOKEN":return Object(p.a)(Object(p.a)({},e),{},{user:{token:t.payload.token,currentUser:t.payload.user}});case"LOGIN_REQUEST":return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case"LOGIN_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,loginErrors:[]});case"LOGOUT":return localStorage.removeItem("token"),Object(p.a)(Object(p.a)({},e),{},{user:{token:"",currentUser:""}});case"LOGIN_ERRORS":return Object(p.a)(Object(p.a)({},e),{},{loginErrors:t.payload});default:return e}},_={errors:[],loading:!1,posts:[],redirect:!1,post:{},updateErrors:[],message:"",all:[],pageNumber:1,count:0,perPage:0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADER":return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case"CLOSE_LOADER":return Object(p.a)(Object(p.a)({},e),{},{loading:!1});case"ERRORS":return Object(p.a)(Object(p.a)({},e),{},{errors:t.payload});case"UPDATED_ERRORS":return Object(p.a)(Object(p.a)({},e),{},{updateErrors:t.payload});case"POSTS":return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload});case"REDIRECT":return Object(p.a)(Object(p.a)({},e),{},{redirect:!0});case"FALSE_REDIRECT":return Object(p.a)(Object(p.a)({},e),{},{redirect:!1});case"POST":return Object(p.a)(Object(p.a)({},e),{},{post:t.payload});case"MESSAGE":return Object(p.a)(Object(p.a)({},e),{},{message:t.payload});case"REMOVE_MESSAGE":return Object(p.a)(Object(p.a)({},e),{},{message:"",errors:[],updateErrors:[]});case"ALL":return Object(p.a)(Object(p.a)({},e),{},{all:t.payload.posts,count:t.payload.count,perPage:t.payload.perPage,pageNumber:t.payload.pageNumber});default:return e}},S=Object(u.c)({AuthReducer:y,PostReducer:j}),R=Object(u.d)(S,Object(u.a)(i.a)),k=function(){var e=Object(m.c)((function(e){return e.AuthReducer})),t=e.user,a=e.loading,n=t.currentUser,c=Object(m.b)();return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar__row"},r.a.createElement("div",{className:"navbar__left"},r.a.createElement(s.b,{to:"/page/1"},r.a.createElement("img",{src:"/images/logo-dark.png",alt:"logo"}))),r.a.createElement("div",{className:"navbar__right"},a?"...":n?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/home"},r.a.createElement("span",{className:"inlineBlock ml-10 cursor"},n.name.toUpperCase())))," ",r.a.createElement("li",null,r.a.createElement(s.b,{to:"/create"},"Create Post"))," ",r.a.createElement("li",null,r.a.createElement("span",{className:"inlineBlock ml-10 cursor",onClick:function(){return c({type:"LOGOUT"})}},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/login"},"Login")))))))},w=a(8),L=a(16),x=a(9),C=a.n(x),T=a(24),A=function(){return r.a.createElement("div",{className:"formBg"})},D=a(85),U=function(e){var t=r.a.useState(e),a=Object(w.a)(t,2),n=a[0],c=a[1];return[n,function(e){c(Object(p.a)(Object(p.a)({},n),{},Object(D.a)({},e.target.name,e.target.value)))},function(){c(e)}]},P=function(e){var t=Object(m.c)((function(e){return e.AuthReducer})),a=t.loading,n=t.errors,c=t.user,l=r.a.useState(n),s=Object(w.a)(l,2),o=s[0],u=s[1],i=c.currentUser;r.a.useEffect((function(){u(n||[])}),[n]);var p=Object(m.b)(),E=U({name:"",email:"",password:""}),d=Object(w.a)(E,3),b=d[0],v=d[1];d[2];return r.a.useEffect((function(){i&&e.history.push("/home")}),[i]),r.a.createElement("div",{className:"register"},r.a.createElement(L.a,null,r.a.createElement("meta",{description:"utf-8",content:"User Register"}),r.a.createElement("title",null,"User Register"),r.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),r.a.createElement("div",{className:"row mt-80 no-margin"},r.a.createElement("div",{className:"col-8 no-padding"},r.a.createElement(A,null)),r.a.createElement("div",{className:"col-4 no-padding"},r.a.createElement("div",{className:"account"},r.a.createElement("div",{className:"account__section"},r.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),p((t=b,function(){var e=Object(T.a)(C.a.mark((function e(a){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"REGISTER_REQUEST"}),e.next=4,g.a.post("http://localhost:5000/register",t,{headers:{"Content-Type":"application/json"}});case 4:n=e.sent,r=n.data,a({type:"REGISTER_SUCCESS"}),"errors"===r.status?a({type:"AUTH_ERRORS",payload:r.errors}):"success"===r.status&&(console.log(r.token),localStorage.setItem("token",r.token),a({type:"SET_TOKEN",payload:{token:r.token,user:r.user}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:"AUTH_ERRORS",payload:e.t0.response.data.errors});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"group"},r.a.createElement("h2",{className:"mb-20 font-300"},"Register user")),r.a.createElement("div",{className:"group"},o.length>0?r.a.createElement("div",{className:"error"}," ",o.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.msg},r.a.createElement("p",null,e.msg," "))}))):""),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"text",name:"name",className:"control",placeholder:"Enter Name...",value:b.name,onChange:v})),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"email",name:"email",className:"control",placeholder:"Enter Email...",value:b.email,onChange:v})),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"password",name:"password",className:"control",placeholder:"Create Password...",value:b.password,onChange:v})),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:a?"loading...":"Register"}))))))))},I=function(e){var t=Object(m.c)((function(e){return e.AuthReducer})),a=(t.loading,t.loginErrors),n=t.user.currentUser,c=Object(m.b)(),l=U({email:"",password:""}),s=Object(w.a)(l,2),o=s[0],u=s[1];return console.log("login errors",a),r.a.useEffect((function(){n&&e.history.push("/home")}),[n]),r.a.createElement("div",null,r.a.createElement(L.a,null,r.a.createElement("meta",{description:"utf-8",content:"User login"}),r.a.createElement("title",null,"User Login"),r.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),r.a.createElement("div",{className:"row mt-80 no-margin"},r.a.createElement("div",{className:"col-8 no-padding"},r.a.createElement(A,null)),r.a.createElement("div",{className:"col-4 no-padding"},r.a.createElement("div",{className:"account"},r.a.createElement("div",{className:"account__section"},r.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),c((t=o,function(){var e=Object(T.a)(C.a.mark((function e(a){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"LOGIN_REQUEST"}),e.next=4,g.a.post("http://localhost:5000/login",t,{headers:{"Content-Type":"application/json"}});case 4:n=e.sent,r=n.data,a({type:"LOGIN_SUCCESS"}),console.log(r),"errors"===r.status?a({type:"LOGIN_ERRORS",payload:r.errors}):"success"===r.status&&(console.log("Your token is here: ",r.token),localStorage.setItem("token",r.token),a({type:"SET_TOKEN",payload:{token:r.token,user:r.user}}),g.a.defaults.headers.common={token:r.token}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"group"},r.a.createElement("h2",{className:"mb-20 font-300"},"Login")),r.a.createElement("div",{className:"group"},a.length>0?r.a.createElement("div",{className:"error"}," ",a.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.msg},r.a.createElement("p",null,e.msg))}))):""),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"email",name:"email",className:"control",placeholder:"Enter Email...",value:o.email,onChange:u})),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"password",name:"password",className:"control",placeholder:"Enter Password...",value:o.password,onChange:u})),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:"Login"}))))))))},G=a(243),F=function(e){var t=e.component,a=Object(G.a)(e,["component"]),n=Object(m.c)((function(e){return e.AuthReducer})).user.currentUser;return console.log("Private link: ",n),r.a.createElement(o.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(o.a,{to:"/login"})}}))},M=localStorage.getItem("token");console.log("post action token: ",M),g.a.defaults.headers.common={token:M||""};var Y=a(56),B=a(36),H=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader__element"}))},Q=function(e){var t=Object(m.c)((function(e){return e.AuthReducer})).user,a=Object(m.c)((function(e){return e.PostReducer})),n=a.posts,c=a.loading,l=a.message,o=a.redirect,u=Object(m.b)(),i=t.currentUser;t.token;return r.a.useEffect((function(){var e;u((e=i._id,console.log("Your all post function:",M),function(){var t=Object(T.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"SET_LOADER"}),t.next=4,g.a.get("http://localhost:5000/posts/".concat(e));case 4:n=t.sent,console.log("login user posts:",n.data),a({type:"POSTS",payload:n.data.posts}),a({type:"CLOSE_LOADER"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}())),setTimeout((function(){u({type:"REMOVE_MESSAGE"})}),5e3)}),[o,l]),console.log("posts length check: ",n),r.a.createElement("div",{className:"home"},r.a.createElement(L.a,null,r.a.createElement("meta",{charSet:"utf-8",content:"posts"}),r.a.createElement("title",null,"Your posts"),r.a.createElement("link",{name:"description",href:"Your all posts"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-100"},r.a.createElement("div",{className:"col-12"},l?r.a.createElement("div",{className:"success"},l):"",r.a.createElement("br",null),r.a.createElement("div",{className:"row"},c?r.a.createElement(H,null):void 0!==n&&n.length>0?n.map((function(e){return r.a.createElement("div",{className:"col-4",key:e._id},r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__image"},r.a.createElement("img",{src:"/images/".concat(e.image),alt:"image"})),r.a.createElement("div",{className:"post__body"},r.a.createElement("div",{className:"post__title"},e.title.slice(0,30),"..."),r.a.createElement("div",{className:"post__details"},Object(Y.htmlToText)(e.body.slice(0,50)),"..."),r.a.createElement("div",{className:"post__buttons"},r.a.createElement(s.b,{className:"link",to:"/edit/".concat(e._id)},r.a.createElement(B.d,null)),r.a.createElement("button",{className:"link",onClick:function(){return u((t=e._id,i._id,function(){var e=Object(T.a)(C.a.mark((function e(a){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"SET_LOADER"}),e.next=4,g.a.post("http://localhost:5000/delete/".concat(t));case 4:n=e.sent,r=n.data,a({type:"CLOSE_LOADER"}),"success"===r.status&&(a({type:"CLOSE_LOADER"}),a({type:"MESSAGE",payload:"Your post has been Deleted successfully"})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()));var t}},r.a.createElement(B.e,null)),r.a.createElement(s.b,{to:"/details/".concat(e.slug),className:"link"},r.a.createElement(B.a,null))))))})):r.a.createElement("div",{className:""},"You dont have any post"))))))},K=(a(348),a(86)),V=a.n(K),J=(a(223),function(e){var t=Object(m.c)((function(e){return e.PostReducer})),a=t.errors,n=t.loading,c=t.redirect,l=Object(m.c)((function(e){return e.AuthReducer})).user.currentUser;console.log("user: ",l.name);var s=Object(m.b)(),o=U({title:"",body:""}),u=Object(w.a)(o,3),i=(u[0],u[1],u[2],r.a.useState("")),p=Object(w.a)(i,2),E=p[0],d=p[1],b=r.a.useState("Choose Image"),v=Object(w.a)(b,2),f=v[0],h=v[1],O=r.a.useState(""),N=Object(w.a)(O,2),y=N[0],_=N[1],j=r.a.useState(""),S=Object(w.a)(j,2),R=(S[0],S[1],r.a.useState("")),k=Object(w.a)(R,2),x=k[0],A=k[1],D=r.a.useState(!1),P=Object(w.a)(D,2),I=P[0],G=P[1],F=r.a.useState(""),M=Object(w.a)(F,2),Y=M[0],B=M[1],H=r.a.useState(""),Q=Object(w.a)(H,2),K=Q[0],J=Q[1],W=r.a.useState(),q=Object(w.a)(W,2),z=q[0],X=q[1],Z=r.a.useRef(null);return r.a.useEffect((function(){c&&(e.history.push("/home"),s({type:"FALSE_REDIRECT"})),console.log(Z.current)}),[c]),r.a.createElement("div",{className:"create"},r.a.createElement(L.a,null,r.a.createElement("meta",{description:"utf-8",content:"posts"}),r.a.createElement("title",null,"Create a new post"),r.a.createElement("link",{name:"description",href:"Creat a new post"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-100"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("post description: ",z);var t,a=new FormData;a.append("file",E),a.append("title",y),a.append("body",Y),a.append("userId",l._id),a.append("username",l.name),a.append("slug",x),a.append("meta",z),s((t=a,function(){var e=Object(T.a)(C.a.mark((function e(a){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"SET_LOADER"}),e.next=4,g.a.post("http://localhost:5000/create",t);case 4:n=e.sent,"error"===(r=n.data).status?(a({type:"CLOSE_LOADER"}),a({type:"ERRORS",payload:r.errors}),console.log("all errors: ",r.errors)):"success"===r.status&&(a({type:"CLOSE_LOADER"}),a({type:"MESSAGE",payload:"Your post has been created successfully"}),a({type:"REDIRECT"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"group"},a.length>0?r.a.createElement("div",{className:"error"}," ",a.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.msg},r.a.createElement("p",null,e.msg))}))):""),r.a.createElement("div",{className:"group"},r.a.createElement("label",null,"Post title"),r.a.createElement("input",{type:"text",name:"title",className:"control",placeholder:"Title",value:y,onChange:function(e){_(e.target.value);var t=e.target.value.trim().split(" ").join("-");A(t)}})),r.a.createElement("div",{className:"group"},r.a.createElement("label",{htmlFor:"sameFile",className:"label"},f),r.a.createElement("input",{type:"file",name:"file",id:"sameFile",className:"file",onChange:function(e){d(e.target.files[0]),h(e.target.files[0].name);var t=new FileReader,a=e.target.files[0];t.onloaded=function(){J(t.result)},t.readAsDataURL(a)}})),r.a.createElement("label",null,"Post body"),r.a.createElement(V.a,{theme:"snow",value:Y,onChange:B,placeholder:"Post Body..."}),r.a.createElement("div",{className:"group"}),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:n?"loading...":"Create"})))))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"create__right"},r.a.createElement("label",null,"Post URL/Slug"),r.a.createElement("input",{type:"text",value:x,onChange:function(e){G(!0),A(e.target.value)},className:"control",placeholder:"Slug..."}),r.a.createElement("br",null),r.a.createElement("br",null),I?r.a.createElement("button",{className:"btn btn-primary",onClick:function(){A(x.trim().split(" ").join("-"))}},"Save"):"",r.a.createElement("br",null),K?r.a.createElement("div",{className:"previewImage"},r.a.createElement("img",{src:K})):""," ",r.a.createElement("br",null),r.a.createElement("label",null,"Meta description"),r.a.createElement("textarea",{className:"control",defaultValue:z,onChange:function(e){return X(e.target.value)},cols:"30",rows:"10",placeholder:"Meta Description...",maxLength:"150"}),r.a.createElement("p",{className:"maxLength"},"Max Length 150 / ",z?z.length:0))))))}),W=(a(545),a(548),function(e){var t=Object(o.g)().id,a=Object(m.b)(),c=Object(m.c)((function(e){return e.PostReducer})),l=c.updateErrors,s=c.loading,u=c.redirect,i=Object(n.useState)(""),p=Object(w.a)(i,2),E=p[0],d=p[1],b=Object(n.useState)(""),v=Object(w.a)(b,2),f=(v[0],v[1],Object(n.useState)("")),h=Object(w.a)(f,2),O=h[0],N=h[1];r.a.useEffect((function(){function n(){return(n=Object(T.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"SET_LOADER"}),e.next=4,g.a.get("http://localhost:5000/post/".concat(t));case 4:n=e.sent,console.log(n),a({type:"CLOSE_LOADER"}),a({type:"POST",payload:n.data.post}),d(n.data.post.title),N(n.data.post.body),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}(),u&&(e.history.push("/home"),a({type:"FALSE_REDIRECT"}))}),[a,t,u]);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(H,null):r.a.createElement("div",{className:"create"},r.a.createElement(L.a,null,r.a.createElement("title",null,"Edit Post"),r.a.createElement("meta",{name:"description",content:"Hello my all react posts"}),r.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-100"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__body"},r.a.createElement("form",{onSubmit:function(e){var n;e.preventDefault(),console.log("current value :",O),a((n={title:E,body:O,id:t},function(){var e=Object(T.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"SET_LOADER"}),e.next=4,g.a.post("http://localhost:5000/update",n);case 4:a=e.sent,t({type:"CLOSE_LOADER"}),"error"===a.data.status?(t({type:"UPDATED_ERRORS",payload:a.data.errors}),console.log(a.data)):"success"===a.data.status&&(t({type:"CLOSE_LOADER"}),t({type:"MESSAGE",payload:"Your post has been updated successfully"}),t({type:"REDIRECT"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"group"},l.length>0?l.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.msg},r.a.createElement("div",{className:"error"},e.msg))})):""),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"text",name:"title",className:"control",placeholder:"Title",value:E,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"group"},r.a.createElement(V.a,{theme:"snow",value:O,onChange:N,placeholder:"Post Body..."})),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:"Edit"}))))))))))}),q=a(241),z=a.n(q),X=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.PostReducer})),a=t.all,c=t.loading,l=t.count,u=t.perPage,i=t.pageNumber,p=Object(o.g)().currentPage;void 0===p&&(p=1);var E=Math.ceil(l/u),d=i;E-i<=2&&(d=E-2);var b=parseInt(d)+2;d<=0&&(d=1);return Object(n.useEffect)((function(){e(function(e){return function(){var t=Object(T.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"SET_LOADER"}),t.next=4,g.a.get("http://localhost:5000/allposts/".concat(e));case 4:n=t.sent,console.log("response: ",n.data),a({type:"CLOSE_LOADER"}),a({type:"ALL",payload:{posts:n.data.posts,pageNumber:n.data.pageNumber,perPage:n.data.perPage,count:n.data.count}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(p))}),[p]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"posts"},r.a.createElement(L.a,null,r.a.createElement("meta",{description:"utf-8",content:"posts"}),r.a.createElement("title",null,"Home"),r.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},c?r.a.createElement(H,null):a.map((function(e){return r.a.createElement("div",{className:"col-8 mb-10",key:e._id},r.a.createElement("div",{className:"row bg-white ptb-20"},r.a.createElement("div",{className:"col-8"},r.a.createElement("div",{className:"posts__author"},r.a.createElement("span",null,e.username[0].toUpperCase()),r.a.createElement("div",{className:"posts__author__name"},e.username.toUpperCase())),r.a.createElement("div",{className:"posts__body"},r.a.createElement(s.b,{to:"/details/".concat(e.slug),className:"posts__body__title"},e.title.slice(0,60)),r.a.createElement("div",{className:"posts__body__details"},Object(Y.htmlToText)(e.body.slice(0,100))),r.a.createElement("div",{className:"posts__footer"},r.a.createElement("span",null,"Posted at")," ",z()(e.updatedAt).fromNow()))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"posts__image"},r.a.createElement("img",{src:"/images/".concat(e.image),alt:""})))))}))),c?"":l>4&&a.length>0?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",{className:"pagination__ul"},function(){if(i>1)return r.a.createElement("li",{className:"pagination__li"},r.a.createElement(s.b,{to:"/page/".concat(parseInt(p)-1)},r.a.createElement(B.b,null)))}(),function(){for(var e=[],t=d;t<=b;t++)e.push(r.a.createElement("li",{key:t,className:"pagination__li"},r.a.createElement(s.b,{to:"/page/".concat(t)},t)));return e}(),function(){if(i<E)return r.a.createElement("li",{className:"pagination__li"},r.a.createElement(s.b,{to:"/page/".concat(parseInt(p)+1)},r.a.createElement(B.c,null)))}())))):"")))},Z=a(242),$=a.n(Z),ee=(a(587),function(){var e=Object(o.g)().slug,t=Object(m.b)(),a=Object(m.c)((function(e){return e.PostReducer})),c=a.loading,l=a.post;return Object(n.useEffect)((function(){t(function(e){return function(){var t=Object(T.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"SET_LOADER"}),t.next=4,g.a.get("http://localhost:5000/details/".concat(e));case 4:n=t.sent,console.log("details post: ",n.data),a({type:"CLOSE_LOADER"}),a({type:"POST",payload:n.data.post[0]}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[]),console.log(l),r.a.createElement("div",{className:"details mt-100"},r.a.createElement("div",{className:"container"},c?r.a.createElement(H,null):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10"},r.a.createElement("div",{className:"detail"},r.a.createElement("h1",{className:"detail__title"},l.title),r.a.createElement("div",{className:"posts__author"},r.a.createElement("div",{className:"posts__author__name"},l.username)),r.a.createElement("div",{className:"detail__img"},r.a.createElement("img",{src:"/images/".concat(l.image),alt:"post image"})),r.a.createElement("div",{className:"detail__body"},$()(l.body))))),r.a.createElement(L.a,null,r.a.createElement("meta",{charSet:"utf-8",content:"Hello my all react posts"}),r.a.createElement("title",null,e),r.a.createElement("meta",{name:"description",content:"Free Web tutorials"}))))});var te=function(){return r.a.createElement(m.a,{store:R},r.a.createElement(s.a,null,r.a.createElement(k,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0,component:X}),r.a.createElement(o.b,{path:"/page/:currentPage?",exact:!0,component:X}),r.a.createElement(o.b,{path:"/register",exact:!0,component:P}),r.a.createElement(o.b,{path:"/login",exact:!0,component:I}),r.a.createElement(o.b,{path:"/details/:slug",exact:!0,component:ee}),r.a.createElement(F,{exact:!0,path:"/home",component:Q}),r.a.createElement(F,{exact:!0,path:"/create",component:J}),r.a.createElement(F,{exact:!0,path:"/edit/:id",component:W}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root"))}},[[244,1,2]]]);
//# sourceMappingURL=main.500694f9.chunk.js.map