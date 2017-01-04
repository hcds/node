var config = require('./config.1');
var task = require('./controller/task');
var workAdd = require('./controller/workAdd');
var moment = require("moment");


var account = config.account;
var tasks = config.tasks;

// 定时执行
tasks.forEach(function(t) {
    task(t.time, function () {
        //workAdd(account, t.address, t.inOut);
        console.log("address : " + t.address.name);
    })
});

console.log('======', '自动登录服务运行中..', '======');