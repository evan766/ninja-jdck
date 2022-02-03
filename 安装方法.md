ninja 整个目录放置在青龙的config目录中


### - 在青龙config/extra.sh 新增下面的代码
```
#启动Ninja提交CK工具
cd /ql/config/ninja/backend && pm2 start
```

##frontend 前端目录
- 主要是页面和请求backend提供的接口的代码
- 如果需要修改代码，修改后需要构建才生效。
- 构建命令 `pnpm install && pnpm run build`


##backend 后端目录
- 主要是和青龙接口交互的代码
```asciidoc
docker exec -it qinglong sh

#进入后端目录
cd /ql/config/ninja/backend

#根据package.json安装pnpm依赖，如果没有安装pnpm需要先安装npmn
pnpm install

#启动服务
pm2 start
```

## backend .env 的配置

```asciidoc
ALLOW_ADD=true

#允许添加账号的最大数量
ALLOW_NUM=40

#Ninja 运行端口
NINJA_PORT=5701

#Ninja 是否发送通知
NINJA_NOTIFY=true

#user-agent
NINJA_UA=""

#已经改为使用青龙的openapi接口, QL_DIR不需要配置了
#QL_DIR=/ql

QL_URL=http://10.0.0.1:5700

#青龙的appid和QL_APP_SECRET
QL_APPID="ycSoZTYeBV6_"
QL_APP_SECRET="B1_D7v4qFVJdVycR7mpwbc78"
```
