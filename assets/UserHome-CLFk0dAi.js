import{j as i,o as a,f as n,w as u,a as e,u as c,b as p,t as _,R as m,r as f,c as l,F as h,k as x,G as g}from"./index-Bk4oFuCi.js";const k=["src"],v={class:"w-full text-center mt-4 text-lg"},w=i({__name:"UserProductCard",props:{product:{default:{}}},setup(r){const t=r;return(d,s)=>(a(),n(c(m),{target:"_blank",to:{name:"product_info",params:{code:t.product.code,title:t.product.url}},class:"shadow shadow-primary p-2 rounded-xl hover:scale-105 duration-200 hover:text-primary bg-black/20"},{default:u(()=>[e("img",{class:"w-72 rounded-xl",src:c(p).makeUrl(t.product.image),alt:""},null,8,k),e("div",null,[e("h4",v,_(t.product.title),1)])]),_:1},8,["to"]))}}),b={class:""},y=e("div",{class:"mt-32 flex"},[e("h3",{class:"text-3xl font-bold bg-primary text-white p-2 rounded-xl"},"جدید ترین محصولات :")],-1),B={class:"flex gap-8 justify-center mt-8"},U={__name:"UserHome",setup(r){const t=f([]);return(()=>{g("product/list",{},s=>{s.ok&&(t.value=s.list)})})(),(s,L)=>(a(),l("div",b,[e("div",null,[y,e("div",B,[(a(!0),l(h,null,x(t.value.new,o=>(a(),n(w,{key:o.id,product:o},null,8,["product"]))),128))])])]))}};export{U as default};
