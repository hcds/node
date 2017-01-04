var config = require('./config');
var task = require('./controller/task');
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

console.log('======', '自动登录服务运行中..', '======');cd