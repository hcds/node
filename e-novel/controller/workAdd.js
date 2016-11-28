var request = require('superagent');
var sendEmail = require('./sendEmail');

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
    'Content-Length': 80,
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
};

var origin = 'https://www.e-novel.ne.jp/eik',
    urls = {
        login: origin + '/users/login?guid=ON',
        add: origin + '/work_logs/add',
        confirm: origin + 'work_logs/index_all'
    };


/**
 * 自动签到
 * @param account {object}
 * @constructor
 */
function WorkAdd(account) {
    this.account = account;

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

        that.confirm(function () {
            sendEmail(that.account.user + '，签到完毕。 ' + new Date());
            console.log('======', '签到完毕，' + that.account.user, '======');
        });
    },

    // 验证登录，如果凭证没过期，无需重新验证
    _verify: function (cb) {
        this._login(cb);
        //Date.now() > this.cookie.expires ? this._login(cb) : cb(this.cookie);
    },

    // 登录
    _login: function (cb) {
        var that = this;

        request
            .post(urls.login)
            .set(headers)
            .type('form')
            .send({
                '_method': 'POST',
                'data[User][loginID]': that.account.user,
                'data[User][loginPW]': that.account.password
            })
            .redirects(0) // 防止页面重定向
            .end(function (result) {
                var cookie = result.headers['set-cookie'];
                that.cookie = {
                    value: cookie
                };

                cb(that.cookie);
            });
    },

    // 签到
    confirm: function (cb) {
        var that = this;

        that._verify(function (cookie) {
            request
                .post(urls.confirm)
                .set(headers)
                .set('Cookie', cookie.value)
                .type('form')
                .send({
                    '_method': 'POST',
                    'data[search][start]': '2016-11-28',
                    'data[search][end]':'2016-11-28',
                    'data[search][group_id]':'',
                    'data[search][user_id]':'5'
                })
                .end(cb);
        });
    }
};


module.exports = function (account) {
    return new WorkAdd(account);
};