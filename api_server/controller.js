//业务处理模块

const conn = require('./db.js')

module.exports = {
    //测试 API 服务器能否正常被请求
    testApi: (req, res) => {
        console.log("测试数据");
        res.send("ok")
    },
    //获取所有英雄
    getAllHero: (req, res) => {
        //查询语句
        const sql = 'select * from heros'
        conn.query(sql, (err, result) => {
            if (err) res.send({ status: 500, msg: err.massage, data: null });
            res.send({ status: 200, data: result })
        })
    },
    //添加英雄
    addHero: (req, res) => {
        let hero = req.body;
        let dt = new Date();
        const y = dt.getFullYear();
        const m = (dt.getMonth() + 1).toString().padStart(2, "0");
        const d = (dt.getDate() + 1).toString().padStart(2, "0");
        const hh = (dt.getHours() + 1).toString().padStart(2, "0");
        const mm = (dt.getMinutes() + 1).toString().padStart(2, "0");
        const ss = (dt.getSeconds() + 1).toString().padStart(2, "0");
        //补全英雄的添加时间
        hero.ctime = `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
        // hero.ctime = y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss
        console.log(hero);
        //添加语句
        const sql = 'insert into heros set ?'
        conn.query(sql, hero, (err, result) => {
            if (err) return res.send({ status: 500, msg: err.massage, data: null })
            res.send({ status: 200, data: result })
        })
    },
    //根据ID获取英雄信息
    getHero: (req, res) => {
        const id = req.params.id
        const sql = 'select * from heros where id =?'
        conn.query(sql, id, (err, result) => {
            if (err) return res.send({ status: 500, msg: err.massage, data: null })
            res.send({ status: 200, data: result })
        })
    },
    //根据 ID 更改英雄信息
    updateHero: (req, res) => {
        const id = req.params.id
        const newInfo = req.body
        console.log(id);
        console.log(newInfo);


        const sql = 'update heros set ? where id =?'
        conn.query(sql, [newInfo, id], (err, result) => {
            if (err) return res.send({ status: 500, msg: err.massage, data: null })
            res.send({ status: 200, msg: 'ok', data: result })
        })
    },
    //根据 ID  删除英雄信息
    deleteHero: (req, res) => {
        const id = req.params.id
        const sql = 'update heros set isdel=1 where id=?'
        conn.query(sql, id, (err, result) => {
            if (err) return res.send({ status: 500, msg: err.message, data: null })
            res.send({ status: 200, msg: 'ok', data: result })
        })
    }
}