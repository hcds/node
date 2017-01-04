var request = require('superagent');
var sendEmail = require('./sendEmail');
var cheerio = require("cheerio");
var moment = require("moment");

var headers = {
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Content-Type': 'application/x-www-form-urlencoded',
    DNT: 1,
    Host: 'www.e-novel.ne.jp',
    Origin: 'https://www.e-novel.ne.jp',
    Referer: 'https://www.e-novel.ne.jp/eik/users/login',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'ja,en-US;q=0.8,en;q=0.6,zh-CN;q=0.4',
    'Cache-Control': 'max-age=0',
    Connection: 'keep-alive',
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
};

var origin = 'https://www.e-novel.ne.jp/eik',
    urls = {
        login: origin + '/users/login?guid=ON',
        add: origin + '/work_logs/add',
        confirm: origin + '/work_logs/index_all'
    };


/**
 * 自动
 * @param account {object}
 * @constructor
 */
function WorkAdd(account, address, inOut) {
    this.account = account;
    this.address = address;
    this.inOut = inOut;

    this.cookie = {
        value: null,
        expires: null
    };

    this.init();
}

WorkAdd.prototype = {
    constructor: WorkAdd,

    init: function () {
        var that = this;

        that._login(function (title, contents) {
            sendEmail(title, contents);
        });
    },

    // 登录
    _login: function (fc) {
        console.log('=========== 登录 Start :' + new Date().toLocaleString() + ' ==========');
        var that = this;
        headers.Referer = 'https://www.e-novel.ne.jp/eik/users/login';
        request
            .post(urls.login)
            .set(headers)
            .type('form')
            .send({
                '_method': 'POST',
                'data[User][loginID]': that.account.user,
                'data[User][loginPW]': that.account.password
            })
            .redirects(0)
            .end(function (err, result) {

                that.cookie.value = result.headers['set-cookie'].join(',').match(/(PHPSESSID=.+?);/)[1]
                if (that.cookie.value) {
                    console.log('=========== 登录成功 :' + new Date().toLocaleString() + ' ==========');
                }
                that.add(fc);
            });
    },

    // 确认
    add: function (cb) {
        var that = this;
        console.log('=========== 地址添加 Start :' + new Date().toLocaleString() + ' ==========');
        headers.Referer = 'https://www.e-novel.ne.jp/eik/workLogs/add';
        request
            .post(urls.add)
            .set(headers)
            .set('Cookie', that.cookie.value)
            .type('form')
            .send({
                '_method':'POST',
                'data[WorkLog][stamp_type_id]':that.inOut,
                'data[WorkLog][comment]':"",
                'data[WorkLog][geo_lat]':that.address.geo_lat,
                'data[WorkLog][geo_lon]':that.address.geo_lon
            })
            .end(function (err, result) {
                if (result.text.indexOf("データを保存しました。") > -1) {
                    console.log('=========== 地址添加成功 :' + that.address.name + ' ==========');
                }
                that.confirm(cb);
            });
    },

    // 确认
    confirm: function (cb) {
        var that = this;

        var date = moment().format("YYYY-MM-DD");
        headers.Referer = 'https://www.e-novel.ne.jp/eik/work_logs/index_all';
        request
            .post(urls.confirm)
            .set(headers)
            .set('Cookie', that.cookie.value)
            .type("form")
            .send({
                '_method': "POST",
                'data[search][start]': date,
                'data[search][end]': date,
                'data[search][group_id]': "",
                'data[search][user_id]': "5"
            })
            .end(function (err, result) {
                // $ = cheerio.load(result.text);
                // $('p + table').each(function () {
                //     var text = '';
                //     $(this).find('td').each(function () {
                //         if (!text) {
                //             text = $(this).text().replace(/\n|\t|\s/g, '');
                //         } else {
                //             text = text + ',' + $(this).text().replace(/\n|\t|\s/g, '');
                //         }
                //     });
                //     console.log(text.replace(/Map,,/g, "Map\n"));
                // });
                cb(that.address.name, result.text);
            });
    }
};


module.exports = function (account, address, inOut) {
    return new WorkAdd(account, address, inOut);
};