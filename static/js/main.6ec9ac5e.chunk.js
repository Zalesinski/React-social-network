(this.webpackJsonp01=this.webpackJsonp01||[]).push([[0],{102:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(45),s=n(5),a="ADD_MESSAGE",c={messages:[{id:1,message:"Hi",ava:"https://s2.coinmarketcap.com/static/img/coins/200x200/9231.png"},{id:2,message:"What's going on?",ava:"https://s2.coinmarketcap.com/static/img/coins/200x200/9231.png"},{id:3,message:"I want to invite you to a party!",ava:"https://s2.coinmarketcap.com/static/img/coins/200x200/9231.png"}],dialogs:[{id:1,name:"Maryan"},{id:2,name:"Vlad"},{id:3,name:"Svetlana"},{id:4,name:"Vadzim"},{id:5,name:"Viktor"},{id:6,name:"Sasha"}]};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:return Object(s.a)(Object(s.a)({},t),{},{messages:[].concat(Object(r.a)(t.messages),[{id:4,message:e.newMessage,ava:"https://s2.coinmarketcap.com/static/img/coins/200x200/9231.png"}]),newMessage:""});default:return t}return t};var i=function(t){return{type:a,newMessage:t}}},103:function(t,e,n){"use strict";n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return m})),n.d(e,"c",(function(){return v})),n.d(e,"b",(function(){return x}));var r=n(11),s=n.n(r),a=n(23),c=n(45),i=n(5),o=n(19),u="FOLLOW",l="SET_USERS",d="SELECT_PAGE",j="SET_TOTAL",b="TOGGLE_IS_LOADING",p="TOGGLE_IS_IN_PROGRESS",f={users:[],pageSize:5,totalUsersCount:0,selectedPage:1,isLoading:!1,isInProgress:[]};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!t.followed}):t}))});case l:return Object(i.a)(Object(i.a)({},t),{},{users:e.users});case d:return Object(i.a)(Object(i.a)({},t),{},{selectedPage:e.selectedPage});case j:return Object(i.a)(Object(i.a)({},t),{},{totalUsersCount:e.totalUsersCount});case b:return Object(i.a)(Object(i.a)({},t),{},{isLoading:!t.isLoading});case p:return console.log(e.isFetching,e.userId,t.isInProgress),Object(i.a)(Object(i.a)({},t),{},{isInProgress:e.isFetching?[].concat(Object(c.a)(t.isInProgress),[e.userId]):t.isInProgress.filter((function(t){return t!=e.userId}))});default:return t}return t};var O=function(t){return{type:u,userId:t}},h=function(t){return{type:d,selectedPage:t}},g=function(){return{type:b}},m=function(t,e){return{type:p,userId:t,isFetching:e}},v=function(t,e){return function(){var n=Object(a.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(h(t)),r(g()),n.next=4,o.c.getUsers(t,e);case 4:a=n.sent,r(g()),r((c=a.items,{type:l,users:c})),r((s=a.totalCount,{type:j,totalUsersCount:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(t){return n.apply(this,arguments)}}()},x=function(t){return function(){var e=Object(a.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(m(t.id,!0)),!t.followed){e.next=9;break}return e.next=4,o.c.unfollowUser(t.id);case 4:0===e.sent.resultCode&&n(O(t.id)),n(m(t.id,!1)),e.next=14;break;case 9:return e.next=11,o.c.followUser(t.id);case 11:0===e.sent.resultCode&&n(O(t.id)),n(m(t.id,!1));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},125:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n(5),s=n(26),a=n(27),c=n(29),i=n(28),o=n(0),u=n.n(o),l=n(12),d=n(10),j=n(1),b=function(t){return{isLoggedIn:t.auth.isLoggedIn}},p=function(t){var e=function(e){Object(c.a)(o,e);var n=Object(i.a)(o);function o(){return Object(s.a)(this,o),n.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){return this.props.isLoggedIn?Object(j.jsx)(t,Object(r.a)({},this.props)):Object(j.jsx)(d.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(b)(e)}},133:function(t,e,n){t.exports={item:"Post_item__1DZCf"}},15:function(t,e,n){t.exports={nav:"Navbar_nav__Yyc3a",item:"Navbar_item__2KPnR",active:"Navbar_active__yd_uJ"}},160:function(t,e,n){},19:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));var r=n(129),s=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8e112cec-0a47-47b9-8ced-2dbb9ab84267"}}),a={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},followUser:function(t){return s.post("follow/".concat(t)).then((function(t){return t.data}))},unfollowUser:function(t){return s.delete("follow/".concat(t)).then((function(t){return t.data}))}},c={getAuth:function(){return s.get("auth/me")},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return s.delete("auth/login")}},i={getProfile:function(t){return s.get("profile/".concat(t)).then((function(t){return t.data}))},getStatus:function(t){return s.get("profile/status/".concat(t))},updateStatus:function(t){return s.put("profile/status",{status:t})}}},243:function(t,e,n){},288:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n.n(r),a=(n(160),function(t){t&&t instanceof Function&&n.e(5).then(n.bind(null,292)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),s(t),a(t),c(t)}))}),c=n(9),i=n(11),o=n.n(i),u=n(23),l=n(45),d=n(5),j=n(19),b="ADD-POST",p="SET_PROFILE",f="SET_STATUS",O="DELETE_POST",h={profile:null,posts:[{id:1,message:"Hi, how are you?",likesCount:3},{id:2,message:"It's my first post",likesCount:5},{id:3,message:"Does some one want to hang out?",likesCount:1}],status:""},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(d.a)(Object(d.a)({},t),{},{posts:[].concat(Object(l.a)(t.posts),[{id:5,message:e.newPost,likesCount:0}])});case p:return Object(d.a)(Object(d.a)({},t),{},{profile:e.profile});case f:return Object(d.a)(Object(d.a)({},t),{},{status:e.status});case O:return Object(d.a)(Object(d.a)({},t),{},{posts:t.posts.filter((function(t){return t.id!=e.postId}))});default:return t}return t},m=function(t){return{type:f,status:t}},v=n(102),x=n(103),w=n(38),y="SET_USER_DATA",_={userId:null,email:null,login:null,isLoggedIn:!1},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return Object(d.a)(Object(d.a)({},t),e.data);default:return t}return t},C=function(t,e,n,r){return{type:y,data:{userId:t,email:e,login:n,isLoggedIn:r}}},k=function(){return function(){var t=Object(u.a)(o.a.mark((function t(e){var n,r,s,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.getAuth();case 2:0===(n=t.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.login,c=r.email,e(C(s,a,c,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=n(130),P=n(128),N="SET_INITIALIZED",L={initialized:!1},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N:return Object(d.a)(Object(d.a)({},t),{},{initialized:!0});default:return t}return t},T=Object(c.c)({profilePage:g,messagesPage:v.b,usersPage:x.a,auth:S,form:P.a,app:E}),M=Object(c.e)(T,Object(c.a)(I.a));window.store=M;var A=M,z=n(65),U=n.n(z),D=n(26),F=n(27),B=n(29),G=n(28),R=(n(243),n(15)),q=n(13),H=n(1),Z=function(){return Object(H.jsxs)("nav",{className:R.nav,children:[Object(H.jsx)("div",{className:R.item,children:Object(H.jsx)(q.b,{activeClassName:R.active,to:"/profile",children:"Profile"})}),Object(H.jsx)("div",{className:R.item,children:Object(H.jsx)(q.b,{activeClassName:R.active,to:"/dialogs",children:"Messages"})}),Object(H.jsx)("div",{className:R.item,children:Object(H.jsx)(q.b,{activeClassName:R.active,to:"/users",children:"Users"})}),Object(H.jsx)("div",{className:R.item,children:Object(H.jsx)(q.b,{activeClassName:R.active,to:"/news",children:"News"})}),Object(H.jsx)("div",{className:R.item,children:Object(H.jsx)(q.b,{activeClassName:R.active,to:"/music",children:"Music"})}),Object(H.jsx)("div",{className:R.item,children:Object(H.jsx)(q.b,{activeClassName:R.active,to:"/settings",children:"Settings"})}),Object(H.jsx)("div",{className:R.item,children:Object(H.jsx)(q.b,{activeClassName:R.active,to:"/friends",children:"Friends"})})]})},J=n(10),V=function(t){return Object(H.jsx)("div",{children:"News"})},W=function(t){return Object(H.jsx)("div",{children:"Music"})},K=function(t){return Object(H.jsx)("div",{children:"Settings"})},Y=n(89),Q=n(41),X=(s.a.Component,n(87)),$=function(t){var e=Object(r.useState)(!1),n=Object(X.a)(e,2),s=n[0],a=n[1],c=Object(r.useState)(t.status),i=Object(X.a)(c,2),o=i[0],u=i[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);var l=function(){a(!s),s&&t.updateStatus(o)};return Object(H.jsx)("div",{children:s?Object(H.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},onBlur:l,autoFocus:!0,value:o||"No status"}):Object(H.jsx)("span",{onDoubleClick:l,children:t.status||"No status"})})},tt=function(t){return t.profile?Object(H.jsxs)("div",{children:[Object(H.jsx)("div",{children:Object(H.jsx)("img",{src:"https://42796r1ctbz645bo223zkcdl-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/Snow-field-1260px.jpg"})}),Object(H.jsxs)("div",{className:Y.description,children:[Object(H.jsx)("img",{className:Y.ava,src:t.profile.photos.large}),Object(H.jsx)($,{status:t.status,updateStatus:t.updateStatus})]})]}):Object(H.jsx)(Q.a,{})},et=n(133),nt=function(t){var e=t.message,n=t.likeCount;return Object(H.jsxs)("div",{className:et.item,children:[Object(H.jsx)("img",{src:"https://images.theconversation.com/files/175247/original/file-20170622-26496-7ff7v5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"}),e,Object(H.jsx)("div",{children:Object(H.jsxs)("span",{children:["like ",n]})})]})},rt=n(90),st=n(126),at=n(127),ct=n(37),it=n(50),ot=Object(ct.a)(10),ut=Object(at.a)({form:"post"})((function(t){return Object(H.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(H.jsx)("div",{children:Object(H.jsx)(st.a,{placeholder:"Add new post",component:it.b,name:"newPost",validate:[ct.b,ot]})}),Object(H.jsx)("div",{children:Object(H.jsx)("button",{children:"Add post"})})]})}));var lt=function(t){console.log("render");var e=t.posts.map((function(t){return Object(H.jsx)(nt,{message:t.message,likesCount:t.likesCount})}));return Object(H.jsxs)("div",{className:rt.postsBlock,children:[Object(H.jsx)("h1",{children:"my posts"}),Object(H.jsx)(ut,{onSubmit:function(e){t.addPost(e.newPost)}}),Object(H.jsx)("div",{className:rt.posts,children:e})]})},dt=n(12),jt=Object(dt.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(function(t){return{type:b,newPost:t}}(e))}}}))(lt),bt=function(t){return Object(H.jsxs)("main",{children:[Object(H.jsx)(tt,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(H.jsx)(jt,{})]})},pt=n(125),ft=function(t){Object(B.a)(n,t);var e=Object(G.a)(n);function n(){return Object(D.a)(this,n),e.apply(this,arguments)}return Object(F.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=19058),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(H.jsx)(bt,Object(d.a)(Object(d.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(s.a.Component),Ot={getProfile:function(t){return function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||(t=2),e.next=3,j.b.getProfile(t);case 3:r=e.sent,n({type:p,profile:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getStatus:function(t){return function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.b.getStatus(t);case 2:r=e.sent,n(m(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateStatus:function(t){return function(){var e=Object(u.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.b.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(m(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},ht=Object(c.d)(Object(dt.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status}}),Ot),J.g,pt.a)(ft),gt=n(93),mt=function(t){return Object(H.jsxs)("header",{className:gt.header,children:[Object(H.jsx)("img",{src:"http://www.logobook.com/wp-content/uploads/2019/02/u_Bear_logo-1.svg"}),Object(H.jsx)("div",{className:gt.loginBlock,children:t.isLoggedIn?Object(H.jsxs)("div",{children:[t.login,Object(H.jsx)("button",{onClick:t.logout,children:"Log out"})]}):Object(H.jsx)(q.b,{to:"/login",children:"Log in"})})]})},vt=function(t){Object(B.a)(n,t);var e=Object(G.a)(n);function n(){return Object(D.a)(this,n),e.apply(this,arguments)}return Object(F.a)(n,[{key:"render",value:function(){return Object(H.jsx)(mt,Object(d.a)({},this.props))}}]),n}(s.a.Component),xt={logout:function(){return function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.logout();case 2:0===t.sent.data.resultCode&&e(C(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},wt=Object(dt.b)((function(t){return{isLoggedIn:t.auth.isLoggedIn,login:t.auth.login,logout:t.auth.logout}}),xt)(vt),yt=n(46),_t=n.n(yt),St=Object(ct.a)(28),Ct=Object(at.a)({form:"login"})((function(t){return Object(H.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(H.jsx)("div",{children:Object(H.jsx)(st.a,{placeholder:"Login",name:"login",component:it.a,validate:[ct.b,St]})}),Object(H.jsx)("div",{children:Object(H.jsx)(st.a,{placeholder:"Password",name:"password",type:"password",component:it.a,validate:[ct.b,St]})}),Object(H.jsxs)("div",{children:[Object(H.jsx)(st.a,{component:"input",name:"rememberMe",type:"checkbox"})," remember me"]}),t.error&&Object(H.jsx)("div",{className:_t.a.formControl+" "+_t.a.error,children:t.error}),Object(H.jsx)("div",{children:Object(H.jsx)("button",{children:"Log in"})})]})})),kt=Object(dt.b)((function(t){return{isLoggedIn:t.auth.isLoggedIn}}),{login:function(t,e,n){return function(){var r=Object(u.a)(o.a.mark((function r(s){var a,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.a.login(t,e,n);case 2:0===(a=r.sent).data.resultCode?s(k()):(c=a.data.messages.length>0?a.data.messages[0]:"Email or password is wrong",s(Object(w.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}})((function(t){return t.isLoggedIn?Object(H.jsx)(J.a,{to:"/profile"}):Object(H.jsxs)("div",{children:[Object(H.jsx)("h1",{children:"LOGIN"}),Object(H.jsx)(Ct,{onSubmit:function(e){t.login(e.login,e.password,e.rememberMe)}})]})})),It=s.a.lazy((function(){return n.e(4).then(n.bind(null,293))})),Pt=s.a.lazy((function(){return n.e(3).then(n.bind(null,294))})),Nt=function(t){Object(B.a)(n,t);var e=Object(G.a)(n);function n(){return Object(D.a)(this,n),e.apply(this,arguments)}return Object(F.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(H.jsxs)("div",{className:"app-wrapper",children:[Object(H.jsx)(wt,{}),Object(H.jsx)(Z,{}),Object(H.jsx)("div",{className:"app-wrapper-content",children:Object(H.jsxs)(J.d,{children:[Object(H.jsx)(J.b,{path:"/dialogs",children:Object(H.jsx)(r.Suspense,{fallback:Object(H.jsx)(Q.a,{}),children:Object(H.jsx)(It,{})})}),Object(H.jsx)(J.b,{path:"/profile/:userId?",children:Object(H.jsx)(ht,{})}),Object(H.jsx)(J.b,{path:"/users",children:Object(H.jsx)(r.Suspense,{fallback:Object(H.jsx)(Q.a,{}),children:Object(H.jsx)(Pt,{})})}),Object(H.jsx)(J.b,{path:"/login",children:Object(H.jsx)(kt,{})}),Object(H.jsx)(J.b,{path:"/news",children:Object(H.jsx)(V,{})}),Object(H.jsx)(J.b,{path:"/music",children:Object(H.jsx)(W,{})}),Object(H.jsx)(J.b,{path:"/settings",children:Object(H.jsx)(K,{})})]})})]}):Object(H.jsx)(Q.a,{})}}]),n}(s.a.Component),Lt=Object(c.d)(J.g,Object(dt.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){t(k()).then((function(){return t({type:N})}))}}}))(Nt);U.a.render(Object(H.jsx)(q.a,{children:Object(H.jsx)(dt.a,{store:A,children:Object(H.jsx)(Lt,{})})}),document.getElementById("root")),a()},37:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));var r=function(t){if(!t)return"Field is required"},s=function(t){return function(e){if(e&&e.length>t)return"Max length is ".concat(t," symbols")}}},41:function(t,e,n){"use strict";var r=n.p+"static/media/Spinner-1s-200px.8cfb8211.svg",s=(n(0),n(1));e.a=function(t){return Object(s.jsx)("img",{src:r,style:{width:"300px"}})}},46:function(t,e,n){t.exports={formControl:"FormControls_formControl__4W7ap",error:"FormControls_error__3ySMq"}},50:function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"a",(function(){return b}));var r=n(5),s=n(70),a=(n(0),n(46)),c=n.n(a),i=n(1),o=["input","meta","element"],u=["input","meta","element"],l=["input","meta","element"],d=function(t){t.input;var e=t.meta,n=(t.element,Object(s.a)(t,o)),r=e.touched&&e.error;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(r?c.a.error:""),children:[n.children,Object(i.jsx)("br",{}),r&&Object(i.jsx)("span",{children:e.error})]})},j=function(t){var e=t.input,n=(t.meta,t.element,Object(s.a)(t,u));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},t),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},e),n))}))},b=function(t){var e=t.input,n=(t.meta,t.element,Object(s.a)(t,l));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},t),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},e),n))}))}},89:function(t,e,n){t.exports={ava:"ProfileInfo_ava__2eM1a",description:"ProfileInfo_description__1yX8c"}},90:function(t,e,n){t.exports={postsBlock:"MyPosts_postsBlock__3Zyqz",posts:"MyPosts_posts__18yLC"}},93:function(t,e,n){t.exports={header:"Header_header__3yzQd",loginBlock:"Header_loginBlock__2MvdZ"}}},[[288,1,2]]]);
//# sourceMappingURL=main.6ec9ac5e.chunk.js.map