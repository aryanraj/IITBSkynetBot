(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(13),i=a.n(l),r=(a(25),a(26),a(16)),s=a(1),c=a(14),u=a(15),d=a(7),m=a(19),h=a(18),p=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){"email"==e.target.id?this.setState({email:e.target.value}):"password"==e.target.id&&this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){URL="https://iitb.placementcontrols.com/iitb-node/authenticate",fetch(URL,{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9","content-type":"application/json"},body:'{\n  "email": "'+this.state.email+'",\n  "password": "'+this.state.password+'",\n  "app_version": "1.6.96"\n}',method:"POST"}).then(function(e){return e.json()}).then(function(e){var t,a,n;"success"==e.status?(t=e.data.token,a=e.data.student_id,n=null):(t=null,a=null,n=e.data.message);var o=window.Telegram;o.WebApp.sendData({token:t,student_id:a,error:n}),o.WebApp.close()}),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Email: ",o.a.createElement("input",{id:"email",type:"text",value:this.state.email,onChange:this.handleChange}))," ",o.a.createElement("br",null),o.a.createElement("label",null,"Password: ",o.a.createElement("input",{id:"password",type:"password",value:this.state.password,onChange:this.handleChange}))," ",o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Submit"}))}}]),a}(o.a.Component),b=function(e){return o.a.createElement("p",null,"404- Not Found")};var w=function(){return o.a.createElement(r.a,{basename:"/IITBSkynetBot"},o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/",exact:!0,component:p}),o.a.createElement(s.a,{component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.f2d3ec14.chunk.js.map