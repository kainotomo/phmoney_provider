var i=Object.defineProperty,_=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var a=(t,e,s)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,r=(t,e)=>{for(var s in e||(e={}))C.call(e,s)&&a(t,s,e[s]);if(o)for(var s of o(e))d.call(e,s)&&a(t,s,e[s]);return t},n=(t,e)=>_(t,p(e));import{_ as f,d as h,r as l,o as c,c as m,w,a as v,i as y}from"./main.ff91f6f2.js";import{C as b}from"./CustomersEdit.517ea25f.js";const g={class:"bg-white shadow mt-4 prose max-w-none"},k={async created(){await this.store.get("/phmoney/business/customers/create")}},x=h(n(r({},k),{name:"CustomersCreate",setup(t){return(e,s)=>{const u=l("FormLayout");return c(),m(u,{title:"Create Customer"},{default:w(()=>[v("div",g,[e.store.processing?y("v-if",!0):(c(),m(b,{key:0}))])]),_:1})}}}));var N=f(x,[["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/views/business/customers/CustomersCreate.vue"]]);export{N as default};