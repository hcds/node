var smtpConfig = require('../config.js').smtpConfig;
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(smtpConfig);

/**
 * 发送邮件
 * @param contents
 */
module.exports = function (contents) {
  transporter.sendMail({
    from: '大澍<songshu0616@gmail.com>',
    to: 'songs0616@163.com',
    subject: '宝贝宝贝大宝贝 success!',
    html: contents
  }, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent: " + response.response);
    }

    transporter.close(); // 如果没用，关闭连接池
  });
};