var later = require('later');
later.date.localTime();

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
	// tasks: [
	//     { time: { h: [15], m: [33], s:[01] }, address: { name: "1 in", geo_lat: "35.531664", geo_lon: "139.435499" }, inOut: "1" },
	// 	{ time: { h: [15], m: [33], s:[05] }, address: { name: "1 out", geo_lat: "35.531556", geo_lon: "139.435439" }, inOut: "2" },
	// 	{ time: { h: [15], m: [33], s:[10] }, address: { name: "2 in", geo_lat: "35.544766", geo_lon: "139.446115" }, inOut: "1" },
	// 	{ time: { h: [15], m: [33], s:[30] }, address: { name: "2 out", geo_lat: "35.544770", geo_lon: "139.446210" }, inOut: "2" }
	// ]

	createTasks : function(h, m) {

		var t = parseInt(m);
    	console.log("minute :: " + t);

		var tasks = [];
		tasks[0] = {time:{h:[h], m:this.random(t + 1, t + 2), s:this.random(0, 60) }, address: { name: "1 in", geo_lat: "35.5316" + this.random(0, 99), geo_lon: "139.435" + this.random(1, 599) }, inOut: "1" },
		tasks[1] = {time:{h:[h], m:this.random(t + 3, t + 4), s:this.random(0, 60) }, address: { name: "1 out", geo_lat: "35.5315" + this.random(0, 99), geo_lon: "139.435" + this.random(1, 599) }, inOut: "2" },
		tasks[2] = {time:{h:[h], m:this.random(t + 5, t + 6), s:this.random(0, 60) }, address: { name: "2 out", geo_lat: "35.5447" + this.random(0, 99), geo_lon: "139.4461" + this.random(0, 99), }, inOut: "1" },
		tasks[3] = {time:{h:[h], m:this.random(t + 7, t + 8), s:this.random(0, 60) }, address: { name: "2 out", geo_lat: "35.5447" + this.random(0, 99), geo_lon: "139.4462" + this.random(0, 99), }, inOut: "2" }

		var now = new Date();
		var d5 = later.dayOfWeek.val(now);
		if (d5 != 5) {
			tasks[2] = {time:{h:[h], m:this.random(t + 9, t + 10), s:this.random(0, 60) }, address: { name: "3 in", geo_lat: "35.5447" + this.random(0, 99), geo_lon: "139.4461" + this.random(0, 99), }, inOut: "1" },
			tasks[3] = {time:{h:[h], m:this.random(t + 11, t + 12), s:this.random(0, 60) }, address: { name: "3 out", geo_lat: "35.5447" + this.random(0, 99), geo_lon: "139.4462" + this.random(0, 99), }, inOut: "2" }
		}

		return tasks;
	},

	random : function(min, max) {
		var arr = [];
		arr[0] = Math.floor(Math.random() * (max - min + 1)) + min;
		return arr;
	}
};

