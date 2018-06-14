/* 用户信息 */
var db = require("./user.js"),
	User = db.User,
	Vipuser = db.Vipuser;
/*
 * 新增 *
*/
function add(){
	//添加数据
	var vipuser =  new Vipuser({
		username : "Ronaldo",
		userpwd: "rrr",
		userage: 42,
		logindate : new Date()
	});
	//save
	vipuser.save(function (err, res) {
		if (err) {
			console.log("Error:" + err);
		}
		else {
			console.log("Res:" + res);
		}
	});
}
/*
 * 查找 *
*/
function getJedisPromise(){
	var promise = Vipuser.find().exec();
	return promise;
}


exports.add = add;
exports.getJedisPromise = getJedisPromise;
