(this["webpackJsonptip-calculator"]=this["webpackJsonptip-calculator"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),l=n(4),s=n.n(l),a=n(2),o=n(0);function r(e){var t,n,i=Object(c.useState)(0),l=Object(a.a)(i,2),s=l[0],r=l[1],u=Object(c.useState)(0),j=Object(a.a)(u,2),b=j[0],d=j[1];return Object(c.useEffect)((function(){console.log(e),isNaN(e.billAmount)||isNaN(e.peopleNum)||0===e.billAmount||0===e.peopleNum||""===e.billAmount||""===e.peopleNum||(t=(e.billAmount+e.tipPerc*e.billAmount/100)/e.peopleNum,n=(e.billAmount+e.tipPerc*e.billAmount/100-e.billAmount)/e.peopleNum),r(parseFloat(t).toFixed(2)),d(parseFloat(n).toFixed(2))}),[e]),Object(o.jsxs)("div",{className:"total-amount-container",children:[Object(o.jsxs)("div",{className:"amount-container",children:[Object(o.jsxs)("div",{className:"amount-desc",children:[Object(o.jsx)("h3",{children:"Tip Amount"}),Object(o.jsx)("p",{children:"/ person"})]}),Object(o.jsxs)("h1",{children:["$",isNaN(b)?"0.00":b]})]}),Object(o.jsxs)("div",{className:"amount-container",children:[Object(o.jsxs)("div",{className:"amount-desc",children:[Object(o.jsx)("h3",{children:"Total"}),Object(o.jsx)("p",{children:"/ person"})]}),Object(o.jsxs)("h1",{children:["$",isNaN(s)?"0.00":s]})]}),Object(o.jsx)("button",{className:"reset-btn",onClick:e.handleReset,children:"RESET"})]})}function u(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],i=t[1],l=Object(c.useState)(5),s=Object(a.a)(l,2),u=s[0],j=s[1],b=Object(c.useState)(),d=Object(a.a)(b,2),p=d[0],m=d[1],O=function(e,t){var n=t.target.value?parseInt(t.target.value):"";"bill"===e?i(n):"tip"===e?j(n):m(n)},h=function(e){document.getElementById("billing-form-custom-input").value="",j(parseInt(e))};return Object(o.jsxs)("div",{className:"billing-form-container",children:[Object(o.jsxs)("form",{className:"billing-form",children:[Object(o.jsxs)("div",{className:"input-container",children:[Object(o.jsx)("label",{children:"Bill:"}),Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){return O("bill",e)},id:"billing-form-bill"})]}),Object(o.jsxs)("div",{className:"input-container",children:[Object(o.jsx)("label",{children:"Select Tip %:"}),Object(o.jsxs)("div",{className:"billing-form-tip",value:u,children:[Object(o.jsx)("div",{className:"tip-container".concat(5===u?" selected-tip":""),onClick:function(){return h("5")},children:"5%"}),Object(o.jsx)("div",{className:"tip-container".concat(10===u?" selected-tip":""),onClick:function(){return h("10")},children:"10%"}),Object(o.jsx)("div",{className:"tip-container".concat(15===u?" selected-tip":""),onClick:function(){return h("15")},children:"15%"}),Object(o.jsx)("div",{className:"tip-container".concat(25===u?" selected-tip":""),onClick:function(){return h("25")},children:"25%"}),Object(o.jsx)("div",{className:"tip-container".concat(50===u?" selected-tip":""),onClick:function(){return h("50")},children:"50%"}),Object(o.jsx)("input",{type:"text",id:"billing-form-custom-input",placeholder:"Custom",onChange:function(e){return O("tip",e)}})]})]}),Object(o.jsxs)("div",{className:"input-container",children:[Object(o.jsx)("label",{children:"No. of People:"}),Object(o.jsx)("input",{type:"text",value:p,onChange:function(e){return O("people",e)},id:"billing-form-bill"})]})]}),Object(o.jsx)(r,{billAmount:n,tipPerc:u,handleReset:function(){i(0),j(5),m(0),document.getElementById("billing-form-custom-input").value=""},peopleNum:p})]})}n(10);var j=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(u,{})})};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.ff14fa49.chunk.js.map