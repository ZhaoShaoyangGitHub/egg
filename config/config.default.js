/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550474592739_2046';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf:false
  };
  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
    mapping: {
      '.nj': 'nunjucks',
      defaultViewEngine: 'nunjucks',
      defaultExtension: '.nj',
    },
  }
  config.mysql = {
    client: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '',
        database: 'boke'
    },
    app: true,
    agent: false,
  }
  
  return {
    ...config,
    ...userConfig,
  };
};


