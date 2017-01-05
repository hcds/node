var config = require('./config');
var task = require('./controller/task');
var moment = require("moment");
var later = require('later');


var account = config.account;
later.date.localTime();

// 定时执行
var workTime = [
    {h: [17], m: [03]},
    {h: [17], m: [15]}
];

var exception = [
    {dw: [1,7]}
];

var workSched = {
        schedules: workTime,
        exceptions:exception
};

var now = new Date();
var h = later.hour.val(now);
var m = later.minute.val(now);
console.log("h : " + h);
console.log("m : " + m);
var workInterval = later.setInterval(function () {

    var now = new Date();
    var h = later.hour.val(now);
    var m = later.minute.val(now);
    console.log("h : " + h);
    console.log("m : " + m);

    var tasks = config.createTasks(h, m);

    tasks.forEach(function(t) {
        task(t.time, function () {
            var now = new Date();
            console.log("----------start---------");
            console.log("now : "+ now +  " address : " + t.address.name);
            console.log("geo_lat : "+ t.address.geo_lat +  " geo_lon : " + t.address.geo_lon);
            console.log("----------end-----------");
        })
    });

}, workSched);
