'use strict';

const _ = require('lodash');
const moment = require("moment");

module.exports = {
    /**
     * 格式化时间
     * @param date
     * @param format
     * @return {string}
     */
    momentTime(date, format = 'MM-DD') {
        if (format === 'MM-DD') {
            if (moment().format('YYYY') !== moment(date).format('YYYY')) {
                return moment(date).format('YYYY-MM-DD');
            }
        }
        return moment(date).format(format);
    },
}