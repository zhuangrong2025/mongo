/* 用户信息 */
var mongoose = require("./db.js"),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	username : { type: String },
	userpwd: {type: String},
	userage: {type: Number},
	logindate : { type: Date}
});

//创建2个集合模型model，在操作数据时候可以选择其中一个
var users = mongoose.model("User", UserSchema, "users");
var vipusers = mongoose.model("Vipuser", UserSchema, "vipusers");

module.exports = {
	users: users,
	vipusers: vipusers
};
// exports.users = users;
// exports.vipusers = vipusers;
