(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{9994:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listings/[id]",function(){return t(1263)}])},1263:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return b}});var l=t(5893),a=t(9008),d=t.n(a),n=t(1163),i=t(7294),c=t(2834),o=t(8168),r=t(7782),x=t(6355),m=t.n(x),h=t(5554),u=t.n(h),p=t(6148),f=t.n(p),w=t(5434),v=t(8193),j=t(3750),g=t(1664),N=t.n(g);function b(){let[e,s]=(0,i.useState)(!1),[t,a]=(0,i.useState)(null),x=(0,n.useRouter)(),{id:h}=x.query,p="application/json";(0,i.useEffect)(()=>{let e=async()=>{if(x.isReady)try{let e=await fetch("/api/listings/".concat(h),{method:"GET",headers:{Accept:p,"Content-Type":p}}),s=await e.json();if(!e.ok)throw Error(s.error);a(s.data)}catch(e){x.push("/")}};e()},[x.isReady]);let g=()=>{navigator.clipboard.writeText("Check out the property at ".concat(null==t?void 0:t.address," via this link: ").concat("http://localhost:3000/listings","/").concat(h))},b=()=>{let e=null==t?void 0:t.agent.phone.replace(/[^\w\s]/gi,"").replace(/ /g,""),s="https://web.whatsapp.com/send?phone=".concat(e);s+="&text=".concat(encodeURI("Hi. I am interested to discuss about your listing at ".concat(null==t?void 0:t.address)),"&app_absent=0"),window.open(s)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d(),{children:(0,l.jsx)("title",{children:"Proptory listing"})}),(0,l.jsxs)("div",{className:"w-full px-4 pt-4 grid md:grid-cols-2 max-md:grid-cols-1",children:[(0,l.jsx)("div",{className:"bg-red-200 h-96 text-2xl text-slate-500",children:null==t?void 0:t.address}),(0,l.jsxs)("div",{className:"flex flex-col space-x-8 space-y-4 px-4 py-4 bg-red-50",children:[(0,l.jsxs)("div",{className:"flex flex-row space-x-8 justify-between px-4 py-4 bg-red-50",children:[(0,l.jsxs)("div",{className:"flex flex-row space-x-8",children:[(0,l.jsx)(j.Mp,{className:"max-md:w-10 max-md:h-10 md:w-12 md:h-12",onClick:()=>s(!0)}),(0,l.jsx)(f(),{className:"max-md:w-10 max-md:h-10 md:w-12 md:h-12 rounded-md",onClick:b})]}),(0,l.jsx)("div",{className:"text-lg font-bold text-pink-650",children:(0,l.jsx)(N(),{href:"/listings/view3d/".concat(null==t?void 0:t.matterportId),className:"",children:"View in 3D"})})]}),(0,l.jsx)("div",{className:"text-2xl font-bold",children:null==t?void 0:t.name}),(0,l.jsx)("div",{className:"text-xl break-words",children:null==t?void 0:t.description}),(0,l.jsx)("div",{className:"text-lg font-bold text-pink-650",children:(0,l.jsx)(N(),{href:"/agents/".concat(null==t?void 0:t.agent.id),className:"",children:"Agent Details"})}),(0,l.jsxs)("div",{className:"text-xl",children:["\uD83D\uDEC1 ",null==t?void 0:t.bathrooms]}),(0,l.jsxs)("div",{className:"text-xl",children:["\uD83D\uDECF️ ",null==t?void 0:t.bedrooms]}),(0,l.jsxs)("div",{className:"text-4xl font-bold text-right",children:["RM",null==t?void 0:t.price]})]})]}),e&&(0,l.jsxs)("div",{className:"w-full h-full fixed backdrop-blur-sm space-x-4 space-y-4 shadow-lg z-50 top-0 flex flex-col items-center justify-center",children:[(0,l.jsxs)("div",{className:"bg-white shadow-lg rounded-md px-12 py-12 flex flex-row space-x-4",children:[(0,l.jsx)(c.Z,{url:"Check out the property at ".concat(null==t?void 0:t.address," via this link: ").concat("http://localhost:3000/listings","/").concat(null==t?void 0:t.matterportId),children:(0,l.jsx)(f(),{className:"rounded-md max-md:w-10 max-md:h-10"})}),(0,l.jsx)(u(),{url:"".concat("http://localhost:3000/listings","/").concat(null==t?void 0:t.matterportId),children:(0,l.jsx)(m(),{className:"rounded-md max-md:w-10 max-md:h-10"})}),(0,l.jsx)(o.Z,{url:"Check out the property at ".concat(null==t?void 0:t.address," via this link: ").concat("http://localhost:3000/listings","/").concat(null==t?void 0:t.matterportId),children:(0,l.jsx)(r.Z,{className:"rounded-md max-md:w-10 max-md:h-10"})}),(0,l.jsx)(w.Fqs,{className:"rounded-md max-md:w-10 max-md:h-10 md:w-16 md:h-16",onClick:g})]}),(0,l.jsx)("div",{className:"flex flex-row items-center justify-center",children:(0,l.jsx)(v.LHV,{className:"rounded-md max-md:w-10 max-md:h-10 md:w-16 md:h-16",onClick:()=>s(!1)})})]})]})}}},function(e){e.O(0,[228,13,617,342,774,888,179],function(){return e(e.s=9994)}),_N_E=e.O()}]);