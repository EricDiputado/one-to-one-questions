(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(9),o=a.n(i),r=(a(23),a(16)),c=a(10),l=a(11),d=a(15),u=a(12),h=a(17),m=a(30),g=a(31),f=a(32),p=(a(24),a(6)),b=a.n(p),v=(a(25),function(e){function t(e){var a,n;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={isStarted:!1,questions:[],currentIndex:0},(n=new XMLHttpRequest,n.open("GET","https://docs.google.com/document/d/1CjiR97piLL1sX-RDEW4XZpfOM9j8dpGPZLJSt8bbsuk/edit",!0),n.responseType="blob",n.onload=function(){var e=new FileReader;e.readAsText(n.response),e.onload=function(e){a.setState({questions:e.target.result.match(/QUESTIONS\\n(.)+\?/g).join().replace(/\\u0027/g,"'").split(/\\n/g).splice(1)})}},n).send(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(m.a,{fluid:!0,className:"vh-100",style:{backgroundColor:"rgb(35,58,61"}},s.a.createElement(g.a,{className:"h-100 align-items-center"},0===this.state.questions.length?s.a.createElement(f.a,{xs:"12",style:{textAlign:"center",fontSize:"5vh",color:"rgb(200,200,200)"}},"Loading..."):s.a.createElement(f.a,{xs:"12"},s.a.createElement(g.a,{className:"justify-content-center",style:{textAlign:"center"}},s.a.createElement(f.a,{xs:"12",className:this.state.isStarted?"fade-in-delayed":"invisible",style:{fontSize:"5vh",color:"rgb(200,200,200)"}},this.state.questions[this.state.currentIndex]),s.a.createElement(f.a,{xs:"auto",className:"mb-3 d-flex ".concat(this.state.isStarted?"start-animation":"")},s.a.createElement("div",{className:this.state.isStarted?"shrink-animation-delayed":"",style:{width:"50vh",height:"50vh"}},s.a.createElement("img",{src:b.a,alt:"Logo",className:this.state.isStarted?"shrink-animation-delayed":"",style:{width:"100%",borderRadius:"100%",border:"2px white solid"},onClick:function(){return e.setState({isStarted:!0})}}))),s.a.createElement(f.a,{xs:"12",className:this.state.isStarted?"fade-out":"",style:{fontSize:"5vh",color:"rgb(200,200,200)"}},"Press Logo to Start"),s.a.createElement(f.a,{xs:"auto",className:"".concat(this.state.isStarted?"fade-in-delayed":"d-none"),style:{marginTop:"40vh"}},s.a.createElement("div",{style:{width:"10vh",height:"10vh"}},s.a.createElement("img",{src:b.a,alt:"Logo",style:{width:"100%",borderRadius:"100%",border:"2px white solid"},onClick:function(){return e.setState(function(e){return Object(r.a)({},e,{currentIndex:e.currentIndex===e.questions.length-1?0:e.currentIndex+1})})}})))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){e.exports=a.p+"static/media/Logo.76f970b5.jpg"}},[[18,1,2]]]);
//# sourceMappingURL=main.49ea297b.chunk.js.map