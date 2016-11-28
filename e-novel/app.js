var accounts = require('./config').accounts;
var task = require('./controller/task');
var workAdd = require('./controller/workAdd');

// 定时执行
task({h: [18], m: [0]}, function () {
    accounts.forEach(function (v) {
        workAdd(v);
    });
});

console.log('======', '自动签到服务运行中..', '======');