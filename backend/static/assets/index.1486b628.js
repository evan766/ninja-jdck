var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(a,o,s)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,r=(e,a)=>{for(var o in a||(a={}))t.call(a,o)&&c(e,o,a[o]);if(s)for(var o of s(a))n.call(a,o)&&c(e,o,a[o]);return e},i=(e,s)=>a(e,o(s));import{p as l,a as d,o as u,c as m,r as p,b as g,w as y,F as v,k,C as f,_ as h,d as b,e as w,t as P,f as _,g as j,u as C,h as A,i as q,j as I,l as Q,m as L,n as S,q as x}from"./vendor.86da75b9.js";l("data-v-4b23e37a"),d();const R={},U={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};R.render=function(e,a){return u(),m("img",U)};const O={components:{Logo:R}},V=y("data-v-0236bd5a");l("data-v-0236bd5a");const D={class:"header"},z={class:"header-wrapper"},B={class:"flex items-center"},N=g("p",{class:"pl-3 select-none"},"JD",-1);d();const E=V(((e,a,o,s,t,n)=>{const c=p("Logo");return u(),m("div",D,[g("div",z,[g("div",B,[g(c,{class:"h-10 w-10"}),N])])])}));O.render=E,O.__scopeId="data-v-0236bd5a";const T={class:"main"},$={setup:e=>(e,a)=>{const o=p("router-view");return u(),m(v,null,[g(O),g("div",T,[g(o)])],64)}};const J=k.create({prefixUrl:"/api",retry:{limit:0}});new f(".copyBtn2").on("success",(function(e){h.success("复制成功，可以直接粘贴到QQ搜索群号"),e.clearSelection()}));const K={setup(){const e=C();A();let a=b({nickName:void 0,timestamp:void 0,userRemark:void 0});const o=async()=>{try{const e=localStorage.getItem("eid");if(!e)return void s();const o=await function(e){const a=new URLSearchParams;return a.set("eid",e),J.get("userinfo",{searchParams:a}).json()}(e);if(!o)return h.error("获取用户信息失败，请重重新登录"),void s();a.nickName=o.data.nickName,a.timestamp=new Date(o.data.timestamp).toLocaleString()}catch(e){console.error(e)}};w(o);const s=()=>{localStorage.removeItem("eid"),e.push("/login")};return i(r({},P(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:o,logout:s,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return J.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?h.error(a.message):(h.success(a.message),setTimeout((()=>{s()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)},updateRemark:async()=>{try{const e=localStorage.getItem("eid"),o=await function(e){return J.post("update/remark",{json:e}).json()}({eid:e,remark:a.userRemark});200!==o.code?h.success(o.message):(h.success(o.message),setTimeout((()=>{s()}),1e3))}catch(e){console.error(e)}}})}},Z={class:"content"},F={class:"card"},H=g("div",{class:"card-header"},[g("p",{class:"card-title"},"个人中心")],-1),W={class:"card-body"},X={class:"card-footer"},G=q("返回登录其他账号"),M=q("         "),Y=q("不想玩了，退出挂机"),ee={class:"card"},ae=g("div",{class:"card-header"},[g("div",{class:"flex items-center justify-between"},[g("p",{class:"card-title"},"修改备注，用于账号失效通知提醒")])],-1),oe={class:"card-body text-center"},se=q("提交"),te=g("div",{class:"card-footet"},null,-1),ne=g("div",{class:"card"},[g("p",null,"加入QQ群接收失效提示和农场等收取提醒"),g("p",null,[q("群号： "),g("input",{value:"821526314",id:"qq_group_id"}),g("button",{style:{display:"inline"},class:"copyBtn2","data-clipboard-target":"#qq_group_id"}," 复制 ")])],-1),ce=g("div",{class:"card"},[g("div",{class:"card-header"}," 手机QQ扫码加群 "),g("img",{width:"250",src:"/assets/qq_group.6fe44924.png",alt:""})],-1);K.render=function(e,a,o,s,t,n){const c=p("el-button"),r=p("el-input");return u(),m("div",Z,[g("div",F,[H,g("div",W,[g("p",null,"昵称："+_(e.nickName),1),g("p",null,"更新时间："+_(e.timestamp),1)]),g("div",X,[g(c,{size:"small",auto:"",onClick:s.logout},{default:j((()=>[G])),_:1},8,["onClick"]),M,g(c,{type:"danger",size:"small",auto:"",onClick:s.delAccount},{default:j((()=>[Y])),_:1},8,["onClick"])])]),g("div",ee,[ae,g("div",oe,[g(r,{placeholder:"这里填写当前账号的备注",modelValue:e.userRemark,"onUpdate:modelValue":a[1]||(a[1]=a=>e.userRemark=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),g(c,{type:"primary",size:"small",round:"",onClick:s.updateRemark},{default:j((()=>[se])),_:1},8,["onClick"])]),te]),ne,ce])},new f(".copyBtn").on("success",(function(e){h.success("复制成功，可以直接粘贴到QQ搜索群号"),e.clearSelection()}));const re={setup(){const e=C();A();let a=b({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1});const o=async()=>{try{const e=(await J.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd}catch(e){console.error(e)}},s=async()=>{};return w((()=>{o(),s()})),i(r({},P(a)),{getInfo:o,getQrcode:s,showQrcode:async()=>{a.qrCodeVisibility=!0},ckeckLogin:async()=>{try{const o=await function(e){return J.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies});switch(null==o?void 0:o.data.errcode){case 0:localStorage.setItem("eid",o.data.eid),h.success(o.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:h.error(o.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(o){clearInterval(a.timer),a.waitLogin=!1}},jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const o=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],s=a.cookie.match(/pt_pin=(.*?);/)&&encodeURIComponent(a.cookie.match(/pt_pin=(.*?);/)[1]);if(o&&s){const a=await function(e){return J.post("cklogin",{json:e}).json()}({pt_key:o,pt_pin:s});if(console.log(a),console.log(a.code),console.log(a.data),a.code)return void h.success(a.message);a.data&&a.data.eid?(localStorage.setItem("eid",a.data.eid),h.success(a.message),e.push("/")):h.error(a.message||"cookie 解析失败，请检查后重试！")}else h.error("cookie 解析失败，请检查后重试！")}catch(o){console.error(o)}}})}},ie={class:"content"},le={class:"card"},de={class:"card-header"},ue={class:"flex items-center justify-between"},me=g("p",{class:"card-title"},"JD CK 登录",-1),pe={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},ge=g("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1),ye={class:"card-body text-center"},ve=q("登录"),ke=g("div",{class:"card"},[g("p",null,"加入QQ群接收失效提示和农场等收取提醒"),g("p",null,[q("群号： "),g("input",{value:"821526314",id:"qq_group_id"}),g("button",{style:{display:"inline"},class:"copyBtn","data-clipboard-target":"#qq_group_id"}," 复制 ")])],-1),fe=g("div",{class:"card"},[g("div",{class:"card-header"}," 手机QQ扫码加群 "),g("img",{width:"250",src:"/assets/qq_group.6fe44924.png",alt:""})],-1);re.render=function(e,a,o,s,t,n){const c=p("el-input"),r=p("el-button");return u(),m("div",ie,[g("div",le,[g("div",de,[g("div",ue,[me,g("span",pe,"余量："+_(e.marginCount),1)]),ge]),g("div",ye,[g(c,{modelValue:e.cookie,"onUpdate:modelValue":a[1]||(a[1]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),g(r,{type:"primary",size:"small",round:"",onClick:s.CKLogin},{default:j((()=>[ve])),_:1},8,["onClick"])])]),ke,fe])};const he=[{path:"/",component:K},{path:"/login",component:re}],be=I({history:Q(),routes:he}),we=[S,x,h],Pe=[h],_e=L($);we.forEach((e=>{_e.component(e.name,e)})),Pe.forEach((e=>{_e.use(e)})),_e.use(be),_e.mount("#app");