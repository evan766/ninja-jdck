var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,c=(e,a)=>{for(var o in a||(a={}))s.call(a,o)&&r(e,o,a[o]);if(t)for(var o of t(a))n.call(a,o)&&r(e,o,a[o]);return e},l=(e,t)=>a(e,o(t));import{p as i,a as d,o as u,c as m,r as p,b as g,w as k,F as y,k as f,C as v,_ as h,d as w,e as b,t as P,f as j,g as _,u as C,h as A,i as I,j as L,l as x,m as R,n as S,q as Q}from"./vendor.86da75b9.js";i("data-v-4b23e37a"),d();const U={},q={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};U.render=function(e,a){return u(),m("img",q)};const O={components:{Logo:U}},V=k("data-v-0236bd5a");i("data-v-0236bd5a");const D={class:"header"},z={class:"header-wrapper"},N={class:"flex items-center"},B=g("p",{class:"pl-3 select-none"},"JD",-1);d();const E=V(((e,a,o,t,s,n)=>{const r=p("Logo");return u(),m("div",D,[g("div",z,[g("div",N,[g(r,{class:"h-10 w-10"}),B])])])}));O.render=E,O.__scopeId="data-v-0236bd5a";const T={class:"main"},$={setup:e=>(e,a)=>{const o=p("router-view");return u(),m(y,null,[g(O),g("div",T,[g(o)])],64)}};const J=f.create({prefixUrl:"/api",retry:{limit:0}});new v(".copyBtn2").on("success",(function(e){h.success("复制成功，可以直接粘贴到QQ搜索群号"),e.clearSelection()}));const K={setup(){const e=C();A();let a=w({nickName:void 0,timestamp:void 0,userRemark:void 0});const o=async()=>{try{const e=localStorage.getItem("eid");if(!e)return void t();const o=await function(e){const a=new URLSearchParams;return a.set("eid",e),J.get("userinfo",{searchParams:a}).json()}(e);if(!o)return h.error("获取用户信息失败，请重重新登录"),void t();console.log("user-info"),console.log(o),a.nickName=o.data.nickName,a.userRemark=o.data.remark,a.timestamp=new Date(o.data.timestamp).toLocaleString()}catch(e){console.error(e)}};b(o);const t=()=>{localStorage.removeItem("eid"),e.push("/login")};return l(c({},P(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:o,logout:t,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return J.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?h.error(a.message):(h.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)},updateRemark:async()=>{try{const e=localStorage.getItem("eid"),o=await function(e){return J.post("update/remark",{json:e}).json()}({eid:e,remark:a.userRemark});console.log(o),200!==o.code?h.error(o.message):(h.success(o.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}}})}},Z={class:"content"},F={class:"card"},H=g("div",{class:"card-header"},[g("p",{class:"card-title"},"个人中心")],-1),W={class:"card-body"},X={class:"card-footer"},G=I("返回登录其他账号"),M=I("         "),Y=I("不想玩了，退出挂机"),ee={class:"card"},ae=g("div",{class:"card-header"},[g("div",{class:"flex items-center justify-between"},[g("p",{class:"card-title"},"修改备注，用于账号失效通知提醒")])],-1),oe={class:"card-body text-center"},te=I("提交"),se=g("div",{class:"card-footet"},null,-1),ne={class:"card"},re=g("p",null,"加入QQ群接收失效提示和农场等收取提醒",-1),ce=I("群号： "),le=g("input",{value:"821526314",id:"qq_group_id2",style:{width:"90px"}},null,-1),ie=I(" 复制 "),de=g("div",{class:"card"},[g("div",{class:"card-header"}," 手机QQ扫码加群 "),g("img",{width:"250",src:"/assets/qq_group.6fe44924.png",alt:""})],-1);K.render=function(e,a,o,t,s,n){const r=p("el-button"),c=p("el-input");return u(),m("div",Z,[g("div",F,[H,g("div",W,[g("p",null,"昵称："+j(e.nickName),1),g("p",null,"备注："+j(e.userRemark),1),g("p",null,"更新时间："+j(e.timestamp),1)]),g("div",X,[g(r,{size:"small",auto:"",onClick:t.logout},{default:_((()=>[G])),_:1},8,["onClick"]),M,g(r,{type:"danger",size:"small",auto:"",onClick:t.delAccount},{default:_((()=>[Y])),_:1},8,["onClick"])])]),g("div",ee,[ae,g("div",oe,[g(c,{placeholder:"这里填写当前账号的备注",modelValue:e.userRemark,"onUpdate:modelValue":a[1]||(a[1]=a=>e.userRemark=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),g(r,{type:"primary",size:"small",round:"",onClick:t.updateRemark},{default:_((()=>[te])),_:1},8,["onClick"])]),se]),g("div",ne,[re,g("p",null,[ce,le,g(r,{type:"primary",size:"mini",round:"",class:"copyBtn2","data-clipboard-target":"#qq_group_id2"},{default:_((()=>[ie])),_:1})])]),de])},new v(".copyBtn").on("success",(function(e){h.success("复制成功，可以直接粘贴到QQ搜索群号"),e.clearSelection()}));const ue={setup(){const e=C();A();let a=w({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1});const o=async()=>{try{const e=(await J.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd}catch(e){console.error(e)}},t=async()=>{};return b((()=>{o(),t()})),l(c({},P(a)),{getInfo:o,getQrcode:t,showQrcode:async()=>{a.qrCodeVisibility=!0},ckeckLogin:async()=>{try{const o=await function(e){return J.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies});switch(null==o?void 0:o.data.errcode){case 0:localStorage.setItem("eid",o.data.eid),h.success(o.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:h.error(o.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(o){clearInterval(a.timer),a.waitLogin=!1}},jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const o=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],t=a.cookie.match(/pt_pin=(.*?);/)&&encodeURIComponent(a.cookie.match(/pt_pin=(.*?);/)[1]);if(o&&t){const a=await function(e){return J.post("cklogin",{json:e}).json()}({pt_key:o,pt_pin:t});if(console.log(a),console.log(a.code),console.log(a.data),a.code)return void h.error(a.message);a.data&&a.data.eid?(localStorage.setItem("eid",a.data.eid),h.success(a.message),e.push("/")):h.error(a.message||"cookie 解析失败，请检查后重试！")}else h.error("cookie 解析失败，请检查后重试！")}catch(o){console.error(o)}}})}},me={class:"content"},pe={class:"card"},ge={class:"card-header"},ke={class:"flex items-center justify-between"},ye=g("p",{class:"card-title"},"JD CK 登录",-1),fe={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},ve=g("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1),he={class:"card-body text-center"},we=I("登录");ue.render=function(e,a,o,t,s,n){const r=p("el-input"),c=p("el-button");return u(),m("div",me,[g("div",pe,[g("div",ge,[g("div",ke,[ye,g("span",fe,"余量："+j(e.marginCount),1)]),ve]),g("div",he,[g(r,{modelValue:e.cookie,"onUpdate:modelValue":a[1]||(a[1]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),g(c,{type:"primary",size:"small",round:"",onClick:t.CKLogin},{default:_((()=>[we])),_:1},8,["onClick"])])])])};const be=[{path:"/",component:K},{path:"/login",component:ue}],Pe=L({history:x(),routes:be}),je=[S,Q,h],_e=[h],Ce=R($);je.forEach((e=>{Ce.component(e.name,e)})),_e.forEach((e=>{Ce.use(e)})),Ce.use(Pe),Ce.mount("#app");
