<template>
  <div class="content">
    <div class="card">
      <div class="card-header">
        <p class="card-title">个人中心</p>
      </div>
      <div class="card-body">
        <p>昵称：{{ nickName }}</p>
        <p>备注：{{ userRemark }}</p>
        <p>更新时间：{{ timestamp }}</p>
      </div>
      <div class="card-footer">
        <el-button size="small" auto @click="logout">返回登录其他账号</el-button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button type="danger" size="small" auto @click="delAccount"
          >不想玩了，退出挂机</el-button
        >
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="flex items-center justify-between">
          <p class="card-title">修改备注，用于账号失效通知提醒</p>
        </div>
      </div>
      <div class="card-body text-center">
        <el-input placeholder="这里填写当前账号的备注" v-model="userRemark" size="small" clearable class="my-4 w-full" />
        <el-button type="primary" size="small" round @click="updateRemark"
        >提交</el-button
        >
      </div>
      <div class="card-footet"></div>
    </div>
  </div>
</template>

<script>
import {getUserInfoAPI, delAccountAPI, updateUserRemark} from '@/api/index'
import { onMounted, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
// 1.需要用到的地方引入 Clipboard
import Clipboard from 'clipboard'

// 2.用触发操作对象实例化一个 clipboard 对象
let clipboard = new Clipboard(".copyBtn2");

clipboard.on('success', function(e) {
  ElMessage.success('复制成功，可以直接粘贴到QQ搜索群号')
  e.clearSelection();
});
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    let data = reactive({
      nickName: undefined,
      timestamp: undefined,
      userRemark: undefined,
    })

    const getInfo = async () => {
      const eid = localStorage.getItem('eid')
      if (!eid) {
        logout()
        return
      }
      const userInfo = await getUserInfoAPI(eid)
      if (!userInfo) {
        ElMessage.error('获取用户信息失败，请重重新登录')
        logout()
        return
      }

      // console.log('user-info')
      // console.log(userInfo)

      data.nickName = userInfo.data.nickName
      data.userRemark = userInfo.data.remark
      data.timestamp = new Date(userInfo.data.timestamp).toLocaleString()
    }

    onMounted(getInfo)

    const logout = () => {
      localStorage.removeItem('eid')
      router.push('/login')
    }

    const delAccount = async () => {
      const eid = localStorage.getItem('eid')
      const body = await delAccountAPI({ eid })
      if (body.code !== 200) {
        ElMessage.error(body.message)
      } else {
        ElMessage.success(body.message)
        setTimeout(() => {
          logout()
        }, 1000)
      }
    }

    const updateRemark = async () => {
      const eid = localStorage.getItem('eid')
      const body = await updateUserRemark({ eid:eid,remark:data.userRemark })
      // console.log(body)
      if (body.code !== 200) {
        ElMessage.error(body.message)
      } else {
        ElMessage.success(body.message)
        setTimeout(() => {
          logout()
        }, 1000)
      }
    }

    const openUrlWithJD = (url) => {
      const params = encodeURIComponent(
        `{"category":"jump","des":"m","action":"to","url":"${url}"}`
      )
      window.location.href = `openapp.jdmobile://virtual?params=${params}`
      console.log(window.location.href)
    }

    const activity = [
      {
        name: '玩一玩（可找到大多数活动）',
        address: '京东 APP 首页-频道-边玩边赚',
        href: 'https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html',
      },
      {
        name: '宠汪汪',
        address: '京东APP-首页/玩一玩/我的-宠汪汪',
      },
      {
        name: '东东萌宠',
        address: '京东APP-首页/玩一玩/我的-东东萌宠',
      },
      {
        name: '东东农场',
        address: '京东APP-首页/玩一玩/我的-东东农场',
      },
      {
        name: '东东工厂',
        address: '京东APP-首页/玩一玩/我的-东东工厂',
      },
      {
        name: '东东超市',
        address: '京东APP-首页/玩一玩/我的-东东超市',
      },
      {
        name: '领现金',
        address: '京东APP-首页/玩一玩/我的-领现金',
      },
      {
        name: '东东健康社区',
        address: '京东APP-首页/玩一玩/我的-东东健康社区',
      },
      {
        name: '京喜农场',
        address: '京喜APP-我的-京喜农场',
      },
      {
        name: '京喜牧场',
        address: '京喜APP-我的-京喜牧场',
      },
      {
        name: '京喜工厂',
        address: '京喜APP-我的-京喜工厂',
      },
      {
        name: '京喜财富岛',
        address: '京喜APP-我的-京喜财富岛',
      },
      {
        name: '京东极速版红包',
        address: '京东极速版APP-我的-红包',
      },
    ]

    return {
      ...toRefs(data),
      activity,
      getInfo,
      logout,
      delAccount,
      openUrlWithJD,
      updateRemark,
    }
  },
}
</script>
