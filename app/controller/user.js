'use strict';

const Controller = require('egg').Controller;
const _ = require('lodash');

class UserController extends Controller {
  async index() {
    const data = {};
    const { ctx } = this;
    let configure = await ctx.service.home.findAllData("configure");
    data.configure = configure.result[0];
    ctx.body = await ctx.renderView('user.nj', data);
  }

  async create() {
    const { ctx } = this;
    const createRule = {
        username: {
            type: 'email',
        },
        password: {
            type: 'password',
            compare: 're-password',
        },
    };
    const params = ctx.request.body;
    try {
        ctx.validate(createRule);
    }catch(error) {
        console.log(error)
    }
    await ctx.service.home.insert(10,params.user, params.password);
    ctx.body = params;
  }
}

module.exports = UserController;
