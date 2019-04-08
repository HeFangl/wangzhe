//路由模块 本质:就是 URL 地址到 处理函数之间的对应关系
const express = require('express');
const router = express.Router();
//导入自己的 业务逻辑处理模块
const ctrl = require('./controller.js')

//只要有人请求 后台的 / 根路径地址 就提示他  请求API 服务器成功了!
router.get('/', ctrl.testApi)

//查询用户信息 API
router.get('/getallhero', ctrl.getAllHero)

//添加英雄信息 API
router.post('/addhero', ctrl.addHero)

//根据ID获取用户信息 API
router.get("/gethero/:id", ctrl.getHero)

//根据ID修改用户信息 API
router.post("/updatehero/:id", ctrl.updateHero)

//根据ID删除用户信息 API
router.get('/deletehero/:id', ctrl.deleteHero)

module.exports = router;