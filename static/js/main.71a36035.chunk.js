(window["webpackJsonpreact-carousel"]=window["webpackJsonpreact-carousel"]||[]).push([[0],{35:function(t,e,i){t.exports=i(47)},46:function(t,e,i){},47:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n),r=i(28),o=i.n(r),l=i(8),u=i(9),s=i(10),c=i(12),d=i(11),m=i(13),p=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(c.a)(this,Object(d.a)(e).call(this))).state={detailtitle:"",detailinfo:"",detailurl:"",render:!1},t}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.location.state.title,e=this.props.location.state.info,i=this.props.location.state.url;this.setState({detailtitle:t,detailinfo:e,detailurl:i,render:!0})}},{key:"render",value:function(){return console.log(this.state.detailurl),a.a.createElement(a.a.Fragment,null,!0===this.state.render&&a.a.createElement("div",null,this.state.detailtitle,this.state.detailinfo,a.a.createElement("img",{alt:"",style:{height:"100%",maxWidth:"100%"},src:"react-carousel/"+this.state.detailurl})))}}]),e}(n.Component),f=i(3),g=i(4);function h(){var t=Object(f.a)(["\n     display: inline-block;\n     margin-bottom: 50px;\n"]);return h=function(){return t},t}function b(){var t=Object(f.a)(["\n@media (min-width: 1100px) {\n    width: 500px;\n    white-space: wrap; \n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 18px;\n    margin-left: 40px;\n  }\n@media (max-width: 600px) {\n    width: 100%;\n    padding: 0 40px 0 40px;\n}\n\tfont-family: 'Garamond', bold;\n"]);return b=function(){return t},t}function v(){var t=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 28px;\n    font-family: 'Helvetica', bold;\n"]);return v=function(){return t},t}function x(){var t=Object(f.a)(["\n  display: inline-block;\n  margin: 5vw;\n  height: 350px;\n  width: 350px;\n  overflow: hidden;\n  padding: 2px;\n  background-color: #AAAAAA;\n  box-shadow: 10px 10px 10px grey; \n  margin-bottom: 0px;\n  &:hover {\n  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;\n  }\n"]);return x=function(){return t},t}var C=g.a.div(x()),w=g.a.div(v()),q=g.a.div(b()),y=g.a.div(h()),E=i(17),j=function(t){function e(){return Object(u.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.id<3&&a.a.createElement(y,null,a.a.createElement(C,null,a.a.createElement(E.b,{to:{pathname:"/detailpage/"+this.props.title,state:{title:this.props.title,info:this.props.info,url:this.props.url}}},a.a.createElement("img",{alt:"",style:{height:"100%",maxWidth:"100%"},src:this.props.url}))),a.a.createElement(w,null,this.props.title),a.a.createElement(q,null,this.props.info)))}}]),e}(n.Component),A=[{id:0,title:"Corvette",info:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',url:"./images/USC90CHC063A021001.jpg"},{id:1,title:"Dodge Viper",info:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',url:"./images/316_main_l.jpg"},{id:2,title:"Audi R8",info:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',url:"./images/Webp.net-resizeimage.jpg"},{id:3,title:"Aventador",info:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',url:"./images/lamborghini-forsennato-concept.jpg"},{id:4,title:"Mom van",info:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',url:"./images/van.jpg"},{id:5,title:"CAT",info:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',url:"./images/71F3C8xHxfL._SL1500_.jpg"},{id:6,title:"Dog",info:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',url:"./images/bd18bl-bernese-mountain-dog-adult-standing.png"},{id:7,title:"Elise",info:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',url:"./images/elise.jpg"}];function O(){var t=Object(f.a)(["\n   &:hover {\n  -webkit-transform: scale(1.2);\n        -ms-transform: scale(1.2);\n        transform: scale(1.2);\n        cursor: pointer;\n  }\n  @media (max-width: 600px) {\n    position: absolute;\n    bottom: 0;\n    this.props.icon = 'hi';\n}\n"]);return O=function(){return t},t}function k(){var t=Object(f.a)(["\n   &:hover {\n  -webkit-transform: scale(1.2);\n        -ms-transform: scale(1.2);\n        transform: scale(1.2);\n        cursor: pointer;\n  }\n  @media (max-width: 600px) {\n    position: absolute;\n    top: 0;\n}\n"]);return k=function(){return t},t}var S=g.a.div(k()),L=g.a.div(O()),D=i(23),z=i(25),U=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(c.a)(this,Object(d.a)(e).call(this))).toggleRightArrow=function(){t.state.totalCars+1>t.state.rightCounter&&t.setState({defaultView:!1,rightCounter:t.state.rightCounter+1,leftCounter:t.state.leftCounter+1,newArray:t.state.carArray.slice(t.state.rightCounter).concat(t.state.carArray.slice(0,t.state.rightCounter))}),t.state.rightCounter>=t.state.totalCars&&t.setState({rightCounter:1,newArray:t.state.carArray.slice(t.state.rightCounter).concat(t.state.carArray.slice(0,t.state.rightCounter))}),t.state.leftCounter>t.state.totalCars-3&&t.setState({leftCounter:-1})},t.toggleLeftArrow=function(){t.state.totalNegCars-1<t.state.leftCounter&&t.setState({defaultView:!1,leftCounter:t.state.leftCounter-1,rightCounter:t.state.rightCounter-1,newArray:t.state.carArray.slice(t.state.leftCounter).concat(t.state.carArray.slice(0,t.state.leftCounter))}),t.state.leftCounter<=t.state.totalNegCars&&t.setState({leftCounter:-1,newArray:t.state.carArray.slice(t.state.leftCounter).concat(t.state.carArray.slice(0,t.state.leftCounter))}),t.state.rightCounter<t.state.totalNegCars+3&&t.setState({rightCounter:1})},t.state={carArray:A,newArray:[0,1],totalCars:A.length,totalNegCars:-A.length,pictures:A.map(function(t,e){return a.a.createElement(j,{id:e,key:t.title,title:t.title,info:t.info,url:t.url})}),rightCounter:1,leftCounter:-1,flipSlider:!1,defaultView:!0},t}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){var t=window.innerWidth<=760;t!==this.state.flipSlider&&this.setState({flipSlider:t})}},{key:"render",value:function(){var t=this.state.newArray.map(function(t,e){return a.a.createElement(j,{id:e,key:t.title,title:t.title,info:t.info,url:t.url})});return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{onClick:this.toggleLeftArrow},a.a.createElement(D.a,{style:{fontSize:"80px"},rotation:this.state.flipSlider?90:0,icon:z.a})),!0===this.state.defaultView?a.a.createElement("div",null,this.state.pictures):a.a.createElement("div",null,t),a.a.createElement(L,{onClick:this.toggleRightArrow},a.a.createElement(D.a,{style:{fontSize:"80px"},rotation:this.state.flipSlider?90:0,icon:z.b})))}}]),e}(n.Component);function F(){var t=Object(f.a)(["\n  height: 20vh;\n  background: #ffffff;\n"]);return F=function(){return t},t}function V(){var t=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n  -moz-box-shadow: inset 1px -1px 34px #111111;\n  -webkit-box-shadow: inset 1px -1px 34px #111111;\n  box-shadow: inset 1px -1px 70px #111111;\n  border-radius: 2px;\n"]);return V=function(){return t},t}function N(){var t=Object(f.a)(["\n  height: 60vh;\n  background-color: #ffffff;\n  overflow: scroll;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);return N=function(){return t},t}function W(){var t=Object(f.a)(["\n  height: 20vh;\n  background: #ffffff;\n"]);return W=function(){return t},t}var _=g.a.div(W()),H=g.a.div(N()),M=g.a.div(V()),R=g.a.div(F()),J=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,null),a.a.createElement(H,null,a.a.createElement(M,null,a.a.createElement(l.a,{exact:!0,path:"/",component:U})),a.a.createElement(l.a,{path:"/detailpage/:id",component:p})),a.a.createElement(R,null))},B=(i(46),a.a.createElement(E.a,null,a.a.createElement(J,null)));o.a.render(B,document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.71a36035.chunk.js.map