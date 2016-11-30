var config = require('./config');
var task = require('./controller/task');
var workAdd = require('./controller/workAdd');


var accounts = config.accounts;
var task_time = config.task_time;
// 定时执行
task(task_time[0], function () {
    accounts.forEach(function (v) {
        workAdd(v);
    });
});

// 定时执行
task(task_time[0], function () {
    accounts.forEach(function (v) {
        workAdd(v);
    });
});

workAdd(accounts[0]);

console.log('======', '自动签到服务运行中..', '======');