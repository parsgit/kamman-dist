import{n as C,l as B,r as s,o as R,c as N,i as f,v as x,u as y,g as a,w,a as l,P as b,b as _}from"./index-_F2UExgB.js";import{_ as k,a as u}from"./MyInput-H1r5De2n.js";import{_ as P}from"./MyCaptcha-RD27w7p8.js";const T={class:"flex flex-col gap-6"},V=l("div",{class:"mt-8 text-center text-lg"},[l("p",null,"ما یک کد امنیتی ۵ رقمی به شماره شما پیامک کردیم"),l("p",null,"پس از دریافت آن را در کادر زیر وارد کنید")],-1),D={class:"mt-8"},j={__name:"UserRegister",setup(E){const v=C(),g=B(),i=s(""),r=s(""),o=s(""),c=s(""),p=s(""),m=s(""),d=s(""),I=()=>{b("auth/new/user",{name:i.value,code:r.value,mobile:o.value,password:p.value,confirm_password:m.value,captcha:c.value},n=>{n.ok&&g.replace({hash:"#confirm"})})},$=()=>{b("auth/code/confirm",{mobile:o.value,code:d.value},n=>{n.ok&&n.login&&(_.setToken(n.auth_token,"user"),_.initToken())})};return(n,t)=>(R(),N("div",null,[f(a(k,{class:"max-w-xl mx-auto text-primary",title:"ورود به حساب کاربری"},{default:w(()=>[l("div",T,[a(u,{value:i.value,onInput:t[0]||(t[0]=e=>i.value=e),"input-class":"input-primary",title:"نام و نام خانوادگی"},null,8,["value"]),a(u,{value:r.value,onInput:t[1]||(t[1]=e=>r.value=e),"input-class":"input-primary",type:"number",title:"کد ملی"},null,8,["value"]),a(u,{value:o.value,onInput:t[2]||(t[2]=e=>o.value=e),"input-class":"input-primary",type:"mobile",title:"شماره همراه"},null,8,["value"]),a(u,{value:p.value,onInput:t[3]||(t[3]=e=>p.value=e),"input-class":"input-primary",title:"رمزعبور",type:"password"},null,8,["value"]),a(u,{value:m.value,onInput:t[4]||(t[4]=e=>m.value=e),"input-class":"input-primary",title:"تکرار رمزعبور",type:"password"},null,8,["value"]),a(P,{onInput:t[5]||(t[5]=e=>c.value=e),"input-class":"input-primary","reload-btn":"true"}),l("button",{onClick:t[6]||(t[6]=e=>I()),class:"btn btn-primary"},"ورود")])]),_:1},512),[[x,y(v).hash==""]]),f(a(k,{class:"max-w-xl mx-auto text-primary",title:"تایید شماره همراه"},{default:w(()=>[V,l("div",null,[a(u,{onInput:t[7]||(t[7]=e=>d.value=e),"title-class":"text-lg","input-class":"input-primary",title:"کد دریافتی"})]),l("div",D,[l("button",{onClick:t[8]||(t[8]=e=>$()),class:"btn btn-primary w-full"},"تایید و ورود به حساب کاربری")])]),_:1},512),[[x,y(v).hash=="#confirm"]])]))}};export{j as default};
