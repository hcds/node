var mailer = require('nodemailer');

//SMTPの設定
var setting = {
    //SMTPサーバーを使う場合
    host: 'smtp.163.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'songshu0616@163.com',
        pass: '93md5syqqv@1224#',
    }

    /*
    //Webサービスを使う場合
    service: 'サービス名', //'Gmail'、'Hotmail'、'Yahoo Mail'など
    auth: {
        user: 'アカンと名',
        pass: 'パスワード',
        port: 'ポート番号' //'25'など
    }
    */
};

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'songshu0616@gmail.com',
        pass: '93md5syqqv'
    }
};

//メールの内容
var mailOptions = {
    from: '大澍<songshu0616@gmail.com>',
    to: 'songs0616@163.com, yangshuai0206@163.com',
    subject: '宝贝宝贝大宝贝 success!',
    text:'来吧!!!!',
    html: '<html><header></header><body><p>来吧来吧来吧来吧来吧</p></body></html>' //HTMLタグが使えます
};

//SMTPの接続
var smtp = mailer.createTransport(smtpConfig);

//メールの送信
smtp.sendMail(mailOptions, function(err, res){
    //送信に失敗したとき
    if(err){
        console.log("err : " + err);
    //送信に成功したとき
    }else{
        console.log('Message sent: ' + res.response);
    }
    //SMTPの切断
    smtp.close();
});