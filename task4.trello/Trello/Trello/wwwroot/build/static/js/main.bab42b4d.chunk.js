(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),l=(a(96),a(18)),i=a(13),s=a(20),u=a(19),m=a(21),d=(a(97),a(80)),g=a(32),h=a(130),p=a(161),f=a(162),b=a(171),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1,LoggedIn:!1},a.logOffClick=function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("loggedIn"),localStorage.removeItem("login"),a.setState({LoggedIn:!1})},a.renderloggedIn=function(){"loggedIn"===localStorage.getItem("loggedIn")&&a.setState({LoggedIn:!0});var e=Object(h.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}});return o.a.createElement("div",{className:e.root},o.a.createElement(p.a,{position:"static"},o.a.createElement(f.a,null,o.a.createElement(b.a,{color:"inherit",href:"/board",className:e.title},"Home"),o.a.createElement(b.a,{color:"inherit",onClick:a.logOffClick,href:"/signin",className:e.title},"Log out"))))},a.renderloggedOut=function(){var e=Object(h.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}});return o.a.createElement("div",{className:e.root},o.a.createElement(p.a,{position:"static"},o.a.createElement(f.a,null,o.a.createElement(b.a,{color:"inherit",href:"/signin",className:e.title},"Sign In"),o.a.createElement(b.a,{color:"inherit",href:"/signup",className:e.title},"Sign Up"),o.a.createElement(b.a,{color:"inherit",onClick:a.logOffClick,href:"/signin",className:e.title},"Log out"))))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.state.LoggedIn),this.state.LoggedIn?this.renderloggedIn():this.renderloggedOut()}}]),t}(n.Component),E=a(27),y=a.n(E),C=a(38),w=a(54),I=a(165),k=a(164),O=a(170),S=a(55),j=a.n(S),x=a(131),A=a(4),L=a(163),N=a(167),D=a(166),B=a(22),T=a.n(B),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={login:"",password:"",LoggedIn:!1},a.onChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(w.a)({},n,o))},a.handleSubmit=function(){var e=Object(C.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{T.a.post("https://localhost:44342/api/Identity/token",{password:a.state.password,login:a.state.login}).then(function(e){localStorage.setItem("loggedIn","loggedIn"),localStorage.setItem("login",e.data.login),localStorage.setItem("token",e.data.token),localStorage.setItem("userId",e.data.id),a.setState({LoggedIn:!0})}).then(function(){a.props.history.push("/board")}).catch(function(e){alert(e)})}catch(t){alert(t)}case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(L.a,{component:"main",maxWidth:"xs"},o.a.createElement(k.a,null),o.a.createElement("div",{className:e.paper},o.a.createElement(I.a,{className:e.avatar},o.a.createElement(j.a,null)),o.a.createElement(x.a,{component:"h1",variant:"h5"},"Sign in"),o.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:this.handleSubmit},o.a.createElement(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Login",name:"login",autoComplete:"login",autoFocus:!0,onChange:this.onChange}),o.a.createElement(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",autoComplete:"current-password",onChange:this.onChange}),o.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),o.a.createElement(D.a,{container:!0},o.a.createElement(D.a,{item:!0},o.a.createElement(N.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))))}}]),t}(n.Component),P=Object(A.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})(W),z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={login:"",password:""},a.onChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(w.a)({},n,o))},a.handleSubmit=function(){var e=Object(C.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{T.a.post("https://localhost:44342/api/UserAPI",{password:a.state.password,login:a.state.login}).catch(function(e){alert(e)}),a.props.history.push("/signin")}catch(t){alert(t)}case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(L.a,{component:"main",maxWidth:"xs"},o.a.createElement(k.a,null),o.a.createElement("div",{className:e.paper},o.a.createElement(I.a,{className:e.avatar},o.a.createElement(j.a,null)),o.a.createElement(x.a,{component:"h1",variant:"h5"},"Sign up"),o.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:this.handleSubmit},o.a.createElement(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Login",name:"login",autoComplete:"login",autoFocus:!0,onChange:this.onChange}),o.a.createElement(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",autoComplete:"current-password",onChange:this.onChange}),o.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),o.a.createElement(D.a,{container:!0,justify:"flex-end"},o.a.createElement(D.a,{item:!0},o.a.createElement(N.a,{href:"/signin",variant:"body2"},"Already have an account? Sign in"))))))}}]),t}(n.Component),F=Object(A.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})(z),q=a(40),G=a(168),U=a(169),R=a(57),J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={card:[],text:""},a.handleInputChange=function(e){a.setState({text:e.target.value})},a.createCard=function(){var e=Object(C.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t.preventDefault(),T.a.post("https://localhost:44342/api/list/".concat(a.props.idcard,"/CardAPI"),{list:a.props.idcard,text:a.state.text},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){a.setState({card:[].concat(Object(q.a)(a.state.card),[e.data])}),a.setState({text:""})}).catch(function(e){console.log(e)})}catch(t){console.log(t)}case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.deleteTask=function(e){try{T.a.delete("https://localhost:44342/api/list/".concat(a.props.idcard,"/CardAPI/").concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){a.setState({card:e.data})}).catch(function(e){console.log(e)})}catch(t){console.log(t)}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.a.get("https://localhost:44342/api/list/".concat(this.props.idcard,"/CardAPI"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},idList:this.props.idcard}).then(function(t){e.setState({card:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",null,this.state.card.map(function(t){return o.a.createElement(G.a,{style:{color:"#2F3640",backgroundColor:"#45D09E",marginTop:"10px",width:"100%"}},o.a.createElement(U.a,null,t.text),o.a.createElement(b.a,{onClick:function(){return e.deleteTask(t.id)},style:{color:"white",backgroundColor:"#E85668",margin:"10px"}},"Delete Task"))})),o.a.createElement("div",null,o.a.createElement(G.a,{style:{marginTop:"25%"}},o.a.createElement(U.a,null,o.a.createElement(R.a,{name:"text",autoFocus:!0,value:this.state.text,onChange:this.handleInputChange,placeholder:"Enter task text",style:{resize:"none",width:"100%",overflow:"hidden",outline:"none",border:"none"}})),o.a.createElement(b.a,{onClick:this.createCard,style:{color:"white",backgroundColor:"#45D09E",margin:"10px"}},"Create Task"))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={list:[],title:""},a.handleInputChange=function(e){a.setState({title:e.target.value})},a.createList=function(){try{var e=localStorage.getItem("userId");T.a.post("https://localhost:44342/api/user/".concat(e,"/ListAPI"),{userId:e,title:a.state.title},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){a.setState({list:[].concat(Object(q.a)(a.state.list),[e.data])}),a.setState({title:""})}).catch(function(e){console.log(e)})}catch(t){console.log(t)}},a.deleteList=function(e){try{var t=localStorage.getItem("userId");T.a.delete("https://localhost:44342/api/user/".concat(t,"/ListAPI/").concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){a.setState({list:e.data})}).catch(function(e){console.log(e)})}catch(n){console.log(n)}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("userId");T.a.get("https://localhost:44342/api/user/".concat(t,"/ListAPI"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(t){e.setState({list:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{style:V.boardConteiner},this.state.list.map(function(t){return o.a.createElement(G.a,{style:V.cardConteiner,id:t.id},o.a.createElement(U.a,null,t.title,o.a.createElement(J,{idcard:t.id})),o.a.createElement(b.a,{onClick:function(){return e.deleteList(t.id)},style:{color:"white",backgroundColor:"#E85668",margin:"15px"}},"Delete Card"))})),o.a.createElement("div",{style:V.boardConteiner},o.a.createElement(G.a,{style:V.cardConteiner},o.a.createElement(R.a,{name:"title",autoFocus:!0,value:this.state.title,onChange:this.handleInputChange,placeholder:"Enter list title",style:{resize:"none",width:"100%",overflow:"hidden",outline:"none",border:"none",padding:"10px"}}),o.a.createElement(b.a,{onClick:this.createList,style:{color:"white",backgroundColor:"#45D09E",margin:"10px"}},"Create new Card"))))}}]),t}(n.Component),V={boardConteiner:{display:"flex",margin:10},cardConteiner:{width:200,borderRadius:3,margin:10,height:"100%"}},H=M,$=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(g.a,{name:"signin",exact:!0,path:"/signin",component:P}),o.a.createElement(g.a,{name:"signup",exact:!0,path:"/signup",component:F}),o.a.createElement(g.a,{name:"board",exact:!0,path:"/board",component:H})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,a){e.exports=a(129)},96:function(e,t,a){},97:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.bab42b4d.chunk.js.map