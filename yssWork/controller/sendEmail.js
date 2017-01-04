var smtpConfig = require('../config.js').smtpConfig;
var mailOptions = require('../config.js').mailOptions;
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(smtpConfig);

/**
 * 发送邮件
 * @param contents
 */
module.exports = function (title, contents) {
  transporter.sendMail({
    from: mailOptions.from,
    to: mailOptions.to,
    subject: mailOptions.subject + title,
    html: contents
  }, function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log("发送邮件成功Message : " + response.response);
    }

    transporter.close(); // 如果没用，关闭连接池
  });
};