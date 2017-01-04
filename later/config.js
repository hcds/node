module.exports = {
	// 账户
	"account":
	{
		"user": "09397",
		"password": "09397"
	},

	// 邮件账户
	smtpConfig: {
		host: 'smtp.gmail.com',
		port: 465,
		secure: true, // use SSL
		auth: {
			user: 'songshu0616@gmail.com',
			pass: '93md5syqqv'
		}
	},
	//メールの内容
	mailOptions: {
		from: '大澍<songshu0616@gmail.com>',
		to: 'songs0616@163.com',
		subject: ''
	},

	//タスク時間
	tasks: [
	    { time: { h: [7], m: [28], s:[] }, address: { name: "相模大野 in", geo_lat: "35.531664", geo_lon: "139.435499" }, inOut: "1" },
		{ time: { h: [8], m: [40] }, address: { name: "相模大野 out", geo_lat: "35.531556", geo_lon: "139.435439" }, inOut: "2" },
		{ time: { h: [9], m: [12] }, address: { name: "町田 in", geo_lat: "35.544766", geo_lon: "139.446115" }, inOut: "1" },
		{ time: { h: [10], m: [45] }, address: { name: "町田 out", geo_lat: "35.544770", geo_lon: "139.446210" }, inOut: "2" }
		// { time: { h: [7], m: [11] }, address: { name: "八王子 in", geo_lat: "35.658268", geo_lon: "139.336210" }, inOut: "1" },
		// { time: { h: [8], m: [23] }, address: { name: "八王子 out", geo_lat: "35.658260", geo_lon: "139.336329" }, inOut: "2" },
		// { time: { h: [9], m: [10] }, address: { name: "町田 in", geo_lat: "35.544756", geo_lon: "139.446195" }, inOut: "1" },
		// { time: { h: [10], m: [45] }, address: { name: "町田 out", geo_lat: "35.544750", geo_lon: "139.446290" }, inOut: "2" },
		// { time: { h: [11], m: [18] }, address: { name: "相模大野 in", geo_lat: "35.531644", geo_lon: "139.435412" }, inOut: "1" },
		// { time: { h: [12], m: [33] }, address: { name: "相模大野 out", geo_lat: "35.531546", geo_lon: "139.435429" }, inOut: "2" }
	]
};