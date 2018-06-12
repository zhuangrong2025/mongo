var User = require("./user.js");

/**
 * 插入
 */
function insert() {

	var user = new User({
		username : "John",                 //用户账号
		userpwd: "efgh",                            //密码
		userage: 27,                                //年龄
		logindate : new Date()                      //最近登录时间
	});

	user.save(function (err, res) {

		if (err) {
			console.log("Error:" + err);
		}
		else {
			console.log("Res:" + res);
		}

	});
}

insert();
