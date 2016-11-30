module.exports = {
	// 某通账户
	"accounts": [
		{
			"user": "09397",
			"password": "09397"
		}
	],

	// 邮件账户
	smtpConfig : {
		host: 'smtp.gmail.com',
		port: 465,
		secure: true, // use SSL
		auth: {
			user: 'songshu0616@gmail.com',
			pass: '93md5syqqv'
		}
	},

	task_time : [
		{dw: [1,7], h: [7], m: [16]},
		{dw: [1,7], h: [8], m: [32]},
		{dw: [1,7], h: [9], m: [25]},
		{dw: [1,7], h: [11], m: [5]},
		{dw: [1,7], h: [11], m: [32]},
		{dw: [1,7], h: [12], m: [40]}
  	]	
};