(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2485)}])},925:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),s=r(8794);function l(){let[{notification:e},t]=(0,s.K1)(),r=()=>{t((0,s.FV)())};return(0,n.jsx)(n.Fragment,{children:e.message&&(0,n.jsx)("div",{onClick:r,className:"w-full py-4 px-4 text-xl text-center break-words ".concat("success"===e.type?"bg-green-400":"bg-red-400"),children:e.message})})}},2485:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5893);r(4744);var s=r(7294),l=r(8357);function a(e){return(0,l.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",clipRule:"evenodd"}}]})(e)}var c=r(1163),i={src:"/_next/static/media/color_with_background.142c709f.jpg",height:2400,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAwf/2gAMAwEAAhADEAAAAKEpX//EAB0QAAECBwAAAAAAAAAAAAAAABEAEgMTFBUlQpH/2gAIAQEAAT8AxlvLoM+nA2c09K//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAGxEAAQQDAAAAAAAAAAAAAAAAAgABBBIRIkH/2gAIAQMBAT8AjjW+xPkur//Z",blurWidth:8,blurHeight:8},o=r(8794),u=r(925),A=r(5838);function d(){let[{searchVal:e},t]=(0,o.K1)(),[r,l]=(0,s.useState)(e),a=(0,c.useRouter)(),i=e=>{let t=e.target.value;l(t)},u=()=>{if("/listings"!==a.pathname&&a.push("/listings"),r.length<5)return t((0,o.qP)(""));t((0,o.qP)(r.trim()))};return(0,n.jsxs)("div",{className:"flex flex-row justify-around max-md:py-4 max-md:w-full md:w-6/12",children:[(0,n.jsx)("input",{className:"placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-slate-400 focus:ring-1 sm:text-sm text-slate-800",placeholder:"Search for listings",type:"text",name:"search",value:r,onChange:i}),(0,n.jsx)("button",{onClick:u,className:"py-2 px-2 text-white bg-black rounded-r-xl",children:"Search"})]})}let f=["/"];function h(){let[e,t]=(0,s.useState)(!1),[{loggedIn:r},l]=(0,o.K1)();(0,s.useEffect)(()=>{(0,A.L2)("proptory-token")&&(0,A.L2)("proptory-user")?l((0,o.x4)()):l((0,o.kS)())},[]);let h=(0,c.useRouter)();if(f.includes(h.asPath))return null;let p=()=>{l((0,o.kS)()),h.push("/")};return(0,n.jsxs)("div",{className:"bg-pink-650 w-full sticky top-0 z-40",children:[(0,n.jsxs)("nav",{className:"py-5 mx-14 text-white",children:[(0,n.jsxs)("div",{className:"w-full max-md:hidden flex justify-between items-center",children:[(0,n.jsx)("img",{referrerPolicy:"no-referrer",className:"w-12 h-12",src:i.src,alt:"avatar",onClick:()=>{l((0,o.qP)("")),h.push("/listings")}}),(0,n.jsx)(d,{}),(0,n.jsx)("div",{onClick:p,className:r?"hidden":"",children:"Login as agent"}),(0,n.jsxs)("div",{className:r?"flex flex-row space-x-4":"hidden",children:[(0,n.jsx)("div",{onClick:()=>h.push("/agents/".concat((0,A.L2)("proptory-user"))),children:"Profile"}),(0,n.jsx)("div",{onClick:p,children:"Logout"})]})]}),(0,n.jsxs)("div",{className:"w-full md:hidden flex justify-between items-center",children:[(0,n.jsx)("img",{referrerPolicy:"no-referrer",className:"w-12 h-12",src:i.src,alt:"avatar",onClick:()=>h.push("/listings?page=1")}),(0,n.jsx)(a,{className:"fill-white w-12 h-12",onClick:()=>t(!e)})]}),e&&(0,n.jsxs)("div",{className:"w-full md:hidden flex flex-col justify-between space-y-4",children:[(0,n.jsx)(d,{}),(0,n.jsx)("div",{onClick:()=>h.push("/agents/".concat((0,A.L2)("proptory-user"))),className:r?"":"hidden",children:"Profile"}),(0,n.jsx)("div",{onClick:p,className:r?"hidden":"",children:"Login as agent"}),(0,n.jsx)("div",{onClick:p,className:r?"":"hidden",children:"Logout"})]})]}),(0,n.jsx)(u.Z,{})]})}function p(e){let{children:t}=e;return(0,n.jsxs)("div",{className:"flex flex-col w-full h-screen",children:[(0,n.jsx)(h,{}),(0,n.jsx)("main",{className:"w-full h-screen",children:t})]})}var g=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(o.X9,{reducer:o.I6,children:(0,n.jsx)(p,{children:(0,n.jsx)(t,{...r})})})}},8794:function(e,t,r){"use strict";r.d(t,{X9:function(){return h},x4:function(){return i},kS:function(){return o},I6:function(){return s},FV:function(){return a},sc:function(){return l},qP:function(){return c},K1:function(){return p}});var n=r(5838);let s=(e,t)=>{switch(t.type){case"SET_NOTIFICATION":return{...e,notification:{...t.payload}};case"REMOVE_NOTIFICATION":return{...e,notification:{message:"",type:"success"}};case"SET_SEARCH":return{...e,searchVal:t.payload};case"LOGIN":return{...e,loggedIn:!0};case"LOGOUT":return{...e,loggedIn:!1};default:return e}},l=e=>({type:"SET_NOTIFICATION",payload:e}),a=()=>({type:"REMOVE_NOTIFICATION"}),c=e=>({type:"SET_SEARCH",payload:e}),i=()=>({type:"LOGIN"}),o=()=>((0,n.KR)("proptory-token"),(0,n.KR)("proptory-user"),{type:"LOGOUT"});var u=r(5893),A=r(7294);let d={notification:{message:"",type:"success"},searchVal:"",loggedIn:!1},f=(0,A.createContext)([d,()=>d]),h=e=>{let{reducer:t,children:r}=e,[n,s]=(0,A.useReducer)(t,d);return(0,u.jsx)(f.Provider,{value:[n,s],children:r})},p=()=>(0,A.useContext)(f)},5838:function(e,t,r){"use strict";r.d(t,{KR:function(){return l},L2:function(){return n},po:function(){return s}});let n=e=>window.localStorage.getItem(e),s=(e,t)=>window.localStorage.setItem(e,t),l=e=>window.localStorage.removeItem(e)},4744:function(){},1163:function(e,t,r){e.exports=r(880)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(s),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)0>t.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};function i(e){return function(t){return n.createElement(o,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var r,s=e.attr,l=e.size,i=e.title,o=c(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,o,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(s)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);