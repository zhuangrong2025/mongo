/* 用户信息 */
var db = require("./user.js"),
	User = db.users,
	Vipuser = db.vipusers;
/*
 * 新增 *
*/
function add(){
	//添加数据
	var user =  new User({
		username : "Messi",
		userpwd: "mmmm",
		userage: 26,
		logindate : new Date()
	});
	//save
	user.save(function (err, res) {
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
function query(condition){
	Vipuser.find({username : condition},{multi: false},function (err, res) {
		if (err) {
			console.log("Error:" + err);
		}
		else {
			console.log("Res:" + res);
		}
	});
}

exports.add = add;
exports.query = query;
