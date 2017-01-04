var request = require('superagent');
var cheerio = require("cheerio");


var origin = 'https://www.e-novel.ne.jp',
    urls = {
        getCookie: origin + '/eik/users/login',
        login: origin + '/eik/users/login?guid=ON',
        add: origin + '/eik/work_logs/add',
        confirm: origin + '/eik/work_logs/index_all'
    };

var headers = {
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Content-Type': 'application/x-www-form-urlencoded',
    DNT: 1,
    Host: 'www.e-novel.ne.jp',
    Origin: 'https://www.e-novel.ne.jp',
    Referer: '',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'ja,en-US;q=0.8,en;q=0.6,zh-CN;q=0.4',
    Connection: 'keep-alive',
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
};

var cookie = {
    value: null
}

// var getCookie = function (fc) {

//     request
//         .get(urls.getCookie)
//         .end(function (err, result) {
//             if (err) {
//                 console.log("err: " + err);
//             } else {
//                 cookie.value = result.headers['set-cookie'].join(',').match(/(PHPSESSID=.+?);/)[1]
//                 console.log("getCookie cookie.value: " + cookie.value);
//                 fc(confirm);
//             }
//         });
// }

var login = function (fc) {

    headers.Referer = 'https://www.e-novel.ne.jp/eik/users/login';
    request
        .post(urls.login)
        .set(headers)
        .type('form')
        .send({
            '_method': 'POST',
            'data[User][loginID]': '09397',
            'data[User][loginPW]': '09397'
        })
        .redirects(0)
        .end(function (err, result) {

            cookie.value = result.headers['set-cookie'].join(',').match(/(PHPSESSID=.+?);/)[1]
            fc();

            //console.log("login result: " + result);
        });
}

var confirm = function () {

    headers.Referer = 'https://www.e-novel.ne.jp/eik/work_logs/index_all';
    request
        .post(urls.confirm)
        .set(headers)
        .set('Cookie', cookie.value)
        .type('form')
        .send({
            '_method': 'POST',
            'data[search][start]': '2016-11-29',
            'data[search][end]': '2016-11-29',
            'data[search][group_id]': '',
            'data[search][user_id]': '38'
        })
        .end(function (err, result) {
            $ = cheerio.load(result.text);
            // console.log($('p + table').html());
            $('p + table').each(function () {
                var text = '';
                $(this).find('td').each(function () {
                    if (!text) {
                        text = $(this).text().replace(/\n|\t|\s/g, '');
                    } else {
                        text = text + ',' + $(this).text().replace(/\n|\t|\s/g, '');
                    }
                });
                console.log(text.replace(/Map,,/g, "Map\n"));
            }) ;
        });
}

login(confirm);
