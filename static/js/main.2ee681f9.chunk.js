(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{17:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(10),a=c.n(s),i=(c(17),c(12)),o=c(6),l=c.n(o),u=c(9),j=c(4),b=c(3),d=c(1),x=function(e){var t=e.icon,c=e.size;switch(t){case"01d":return Object(d.jsx)(b.h,{size:c});case"01n":return Object(d.jsx)(b.k,{size:c});case"02d":return Object(d.jsx)(b.b,{size:c});case"02n":return Object(d.jsx)(b.l,{size:c});case"03d":return Object(d.jsx)(b.c,{size:c});case"03n":return Object(d.jsx)(b.i,{size:c});case"04d":case"04n":return Object(d.jsx)(b.a,{size:c});case"09d":return Object(d.jsx)(b.f,{size:c});case"09n":return Object(d.jsx)(b.n,{size:c});case"10d":return Object(d.jsx)(b.e,{size:c});case"10n":return Object(d.jsx)(b.m,{size:c});case"11d":return Object(d.jsx)(b.g,{size:c});case"11n":return Object(d.jsx)(b.j,{size:c});case"50d":return Object(d.jsx)(b.d,{size:c});case"50n":return Object(d.jsx)(b.o,{});default:return null}},f=c(11),O=function(e){var t=e.city,c=e.cityClicked,r=e.removeCity,s=e.cityList,a="9d9bac1167dc852610be88150148a049",i=Object(n.useState)(""),o=Object(j.a)(i,2),l=o[0],u=o[1],b=Object(n.useState)(""),O=Object(j.a)(b,2),h=O[0],p=O[1],m=Object(n.useState)(""),g=Object(j.a)(m,2),y=g[0],v=g[1];return Object(n.useEffect)((function(){fetch("".concat("https://api.openweathermap.org/data/2.5/weather?q=").concat(t,"&appid=").concat(a,"&units=metric&lang=fa")).then((function(e){return e.json()})).then((function(e){"404"===e.cod&&localStorage.setItem("cityList",JSON.stringify(s.filter((function(e){return e!==t})))),u(e.name),p(e.main.temp),v(e.weather[0].icon)})).catch((function(e){return console.log(e)}))}),[t,a,s]),h?Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsx)("span",{onClick:function(){return r(t)},className:"absolute -top-2 -right-2 text-red-600 text-4xl cursor-pointer",children:Object(d.jsx)(f.a,{})}),Object(d.jsxs)("div",{onClick:function(){return c(t)},className:"bg-white border-blue-400 dark:bg-gray-800 bg-opacity-60 border-opacity-60 | p-2 border-solid rounded-3xl border | flex justify-around cursor-pointer | hover:bg-blue-200 dark:hover:bg-indigo-600 hover:border-blue-600 | transition-colors duration-500",children:[Object(d.jsx)("div",{className:"pt-2",children:Object(d.jsx)(x,{className:"w-16 h-16 object-cover",size:"55px",icon:y})}),Object(d.jsxs)("div",{className:"flex flex-col justify-center",children:[Object(d.jsx)("p",{className:"text-gray-900 dark:text-gray-300 font-semibold",children:l}),Object(d.jsx)("p",{className:"text-black dark:text-gray-100 text-justify font-semibold",children:h})]})]})]}):""},h=function(e){var t=e.cityList,c=e.cityClicked,n=e.removeCity;return Object(d.jsx)("div",{className:"h-auto hidden dark:bg-gray-900 px-44 md:flex flex-col justify-center sm:py-12",children:Object(d.jsx)("div",{className:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4",children:t.map((function(e){return Object(d.jsx)(O,{city:e,cityClicked:c,cityList:t,removeCity:n},e)}))})})},p=function(e){var t=e.icon,c=e.city,n=e.description,r=e.temp;return Object(d.jsxs)("div",{className:"absolute w-80 border border-green-600 bg-gradient-to-b from-blue-100 via-white to-green-50 rounded-3xl flex flex-col justify-center items-center text-center p-6 bg-white",children:[Object(d.jsx)("div",{className:"text-md font-bold flex flex-col text-gray-900",children:Object(d.jsx)("span",{className:"text-2xl",children:c})}),Object(d.jsx)("div",{className:"w-32 h-32 flex items-center justify-center",children:Object(d.jsx)(x,{size:"150px",icon:t})}),Object(d.jsx)("p",{className:"text-gray-700 mb-2",children:n}),Object(d.jsxs)("p",{className:"mx-1 text-4xl font-bold mb-3",children:[r,"\xba"]}),Object(d.jsxs)("div",{className:"flex justify-between w-full",children:[Object(d.jsxs)("div",{className:"flex items-center text-gray-700 px-2",children:[Object(d.jsx)("h1",{children:"svg here"}),"100 l/m",Object(d.jsx)("sup",{children:"2"})]}),Object(d.jsxs)("div",{className:"flex items-center text-gray-700 px-2",children:[Object(d.jsx)("h1",{children:"icon here"}),"20 km/h"]})]}),";"]})},m=function(e){var t=e.submitHandler,c=e.inputValue,n=e.setInputValue;return Object(d.jsx)("div",{className:" my-5 block m-auto text-center px-36",children:Object(d.jsx)("form",{onSubmit:t,children:Object(d.jsx)("input",{type:"text",value:c,placeholder:"\u0646\u0627\u0645 \u0634\u0647\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",onChange:function(e){return n(e.target.value)},className:"text-right py-3 px-16 border border-green-600 rounded-full outline-none |  hover:border-blue-300 | transition duration-200"})})})},g="https://api.openweathermap.org/data/2.5/weather?q=",y="9d9bac1167dc852610be88150148a049",v="tehran";var N=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("selectedCity"))||"\u062a\u0647\u0631\u0627\u0646"),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(j.a)(s,2),o=a[0],b=a[1],x=Object(n.useState)(null),f=Object(j.a)(x,2),O=f[0],N=f[1],w=Object(n.useState)(""),S=Object(j.a)(w,2),k=S[0],z=S[1],C=Object(n.useState)(null),I=Object(j.a)(C,2),L=I[0],J=I[1],E=Object(n.useState)(JSON.parse(localStorage.getItem("cityList"))||[]),F=Object(j.a)(E,2),V=F[0],q=F[1],B=Object(n.useState)(""),D=Object(j.a)(B,2),H=D[0],P=D[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g).concat(v,"&appid=").concat(y,"&units=metric&lang=fa"));case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent||console.log("no data");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g).concat(c,"&appid=").concat(y,"&units=metric&lang=fa"));case 2:return t=e.sent,e.next=5,t.json();case 5:return(n=e.sent).main&&(b(n.name),N(n.main.temp),z(n.weather[0].description),J(n.weather[0].icon)),e.abrupt("return");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(n.useEffect)((function(){localStorage.setItem("cityList",JSON.stringify(V))}),[V]),Object(n.useEffect)((function(){localStorage.setItem("selectedCity",JSON.stringify(c))}),[c]),Object(d.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-blue-200 via-white  to-green-200",children:[V&&Object(d.jsx)(h,{cityList:V,cityClicked:function(e){r(e)},removeCity:function(e){q(V.filter((function(t){return e!==t})))}}),Object(d.jsx)(m,{submitHandler:function(e){e.preventDefault(),r(H),-1===V.indexOf(H)&&H.length>0&&q((function(e){return[].concat(Object(i.a)(e),[H])})),P("")},setInputValue:P,inputValue:H}),Object(d.jsx)("div",{className:"flex justify-center",children:o&&Object(d.jsx)(p,{icon:L,city:o,temp:O,description:k})})]})};var w=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(N,{})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),S()}},[[20,1,2]]]);
//# sourceMappingURL=main.2ee681f9.chunk.js.map