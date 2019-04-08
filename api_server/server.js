const express = require('express');
const app = express();

//注册 body-parser 中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//在 API 服务器端，启用 CORS 跨域资源共享
const cors = require('cors')
app.use(cors())
    //引入路由模块
const router = require('./router.js')
    //将路由模块挂在到服务器上
app.use(router)

// 让 后端项目 运行在 5001 端口
app.listen(5001, () => {
    console.log("server running at http://127.0.0.1:5001");
})