'use strict';

const Controller = require('egg').Controller;
const _ = require('lodash');

class HomeController extends Controller {
  async index() {
    const data = {};
    const { ctx } = this;
    let classification = await ctx.service.home.findAllData("classification");
    let configure = await ctx.service.home.findAllData("configure");
    let article = await ctx.service.home.findAllData("article");
    let articleArry = {}
    _.forEach(article.result, function (value) { 
      if(value) {
        if (typeof(articleArry[value.article_classify_id]) === 'undefined') {
          articleArry[value.article_classify_id] = []
        }
        articleArry[value.article_classify_id].push(value);
      }
    })
    data.article = articleArry;
    data.classification = classification.result;
    data.configure = configure.result[0];
    // const user = await ctx.service.user.find();
    // const allUser = await ctx.service.user.findAllData("user");
    // await ctx.service.user.insert("zhao", '123');
    // await ctx.service.user.delete("hu");
    // ctx.body = data.configure;
    ctx.body = await ctx.renderView('home.nj', data);
  }
}

module.exports = HomeController;
