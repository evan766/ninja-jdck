<template>
  <div class="content">
    <div class="card">
      <div class="card-header">
        <div class="flex items-center justify-between">
          <p class="card-title">JD CK 登录</p>
          <span
            class="ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"
            >余量：{{ marginCount }}</span
          >
        </div>
        <span class="card-subtitle"> 请在下方输入您的 cookie 登录。 </span>
      </div>
      <div class="card-body text-center">
        <el-input v-model="cookie" size="small" clearable class="my-4 w-full" />
        <el-button type="primary" size="small" round @click="CKLogin"
          >登录</el-button
        >
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        备用登录网址：
      </div>
      <div class="card-body">
        <p><a href="http://jd1.9cc.space">http://jd1.9cc.space</a></p><br>
        <p><a href="http://jd2.9cc.space">http://jd2.9cc.space</a></p><br>
        <p><a href="http://jd3.9cc.space">http://jd3.9cc.space</a></p><br>
        <p><a href="http://jd4.9cc.space">http://jd4.9cc.space</a></p><br>
      </div>
    </div>

<!--    <div class="card">-->
<!--      <p>加入QQ群接收失效提示和农场等收取提醒</p>-->
<!--      <p>群号：-->
<!--        <input value="821526314" id="qq_group_id" style="width: 90px"/>-->
<!--        <el-button type="primary" size="mini" round class="copyBtn" data-clipboard-target="#qq_group_id">-->
<!--          复制-->
<!--        </el-button>-->
<!--      </p>-->
<!--    </div>-->

<!--    <div class="card">-->
<!--      <div class="card-header">-->
<!--        手机QQ扫码加群-->
<!--      </div>-->
<!--      <img width="250" src="@/assets/qq_group.png" alt="">-->
<!--    </div>-->

  </div>

</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import {
  getInfoAPI,
  getQrcodeAPI,
  CKLoginAPI,
  checkLoginAPI,
} from '@/api/index'

// 1.需要用到的地方引入 Clipboard
import Clipboard from 'clipboard'

// 2.用触发操作对象实例化一个 clipboard 对象
let clipboard = new Clipboard(".copyBtn");

clipboard.on('success', function(e) {
  ElMessage.success('复制成功，可以直接粘贴到QQ搜索群号')
  e.clearSelection();
});

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    let data = reactive({
      marginCount: 0,
      allowAdd: true,
      cookie: '',
      QRCode: undefined,
      qrCodeVisibility: false,
      token: undefined,
      okl_token: undefined,
      cookies: undefined,
      timer: undefined,
      waitLogin: false,
    })

    const getInfo = async () => {
      const info = (await getInfoAPI()).data
      data.marginCount = info.marginCount
      data.allowAdd = info.allowAdd
    }

    const getQrcode = async () => {
      return;
      try {
        const body = await getQrcodeAPI()
        data.token = body.data.token
        data.okl_token = body.data.okl_token
        data.cookies = body.data.cookies
        data.QRCode = body.data.QRCode
        if (data.QRCode) {
          // data.qrCodeVisibility = true
          data.waitLogin = true
          clearInterval(data.timer) // 清除定时器

          // 扫码有问题，先注释掉这个check定时器
          //data.timer = setInterval(ckeckLogin, 3000) // 设置定时器
        }
      } catch (e) {
        console.error(e)
        ElMessage.error('生成二维码失败！请重试或放弃')
      }
    }

    const showQrcode = async () => {
      data.qrCodeVisibility = true
    }

    const jumpLogin = async () => {
      const href = `openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${data.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`
      window.location.href = href
    }

    const ckeckLogin = async () => {
      try {
        const body = await checkLoginAPI({
          token: data.token,
          okl_token: data.okl_token,
          cookies: data.cookies,
        })

        switch (body?.data.errcode) {
          case 0:
            localStorage.setItem('eid', body.data.eid)
            ElMessage.success(body.message)
            clearInterval(data.timer)
            router.push('/')
            break
          case 176:
            break
          default:
            ElMessage.error(body.message)
            data.waitLogin = false
            clearInterval(data.timer)
            break
        }
      } catch (error) {
        clearInterval(data.timer)
        data.waitLogin = false
      }
    }

    const CKLogin = async () => {
      const ptKey =
        data.cookie.match(/pt_key=(.*?);/) &&
        data.cookie.match(/pt_key=(.*?);/)[1]
      const ptPin =
        data.cookie.match(/pt_pin=(.*?);/) &&
          encodeURIComponent(data.cookie.match(/pt_pin=(.*?);/)[1])
      if (ptKey && ptPin) {
        const body = await CKLoginAPI({ pt_key: ptKey, pt_pin: ptPin })

        // console.log(body)
        // console.log(body.code)
        // console.log(body.data)

        if (body.code)
        {
            ElMessage.error(body.message)
            return;
        }

        if (body.data && body.data.eid) {
          localStorage.setItem('eid', body.data.eid)
          ElMessage.success(body.message)
          router.push('/')
        } else {
          ElMessage.error(body.message || 'cookie 解析失败，请检查后重试！')
        }
      } else {
        ElMessage.error('cookie 解析失败，请检查后重试！')
      }
    }

    onMounted(() => {
      getInfo()
      getQrcode()
    })

    return {
      ...toRefs(data),
      getInfo,
      getQrcode,
      showQrcode,
      ckeckLogin,
      jumpLogin,
      CKLogin,
    }
  },
}
</script>

<style scoped></style>
