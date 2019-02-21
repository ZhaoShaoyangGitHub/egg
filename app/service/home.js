'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
    /**
     * 查询一条数据 get
     * 查询全表 select
     **/
    async find(uid) {
        const user = await this.app.mysql.get('user');
        return { user }
    }

    async findAllData(dataSheet) {
        const result  = await this.app.mysql.select(dataSheet);
        return { result }
    }

    //增加
    async insert(userId, userName, password) {
        const user = await this.app.mysql.insert("user", {
            id: userId,
            name: userName,
            password: password
        })
    } 

    //删除
    async delete (userName) {
        const result = await this.app.mysql.delete("user", {
            name: userName
        })
    }
    //修改

}

module.exports = HomeService;