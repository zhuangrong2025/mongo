var express = require("express");
var router = express.Router();
var db = require("../user.js");
   	Vipuser = db.Vipuser;
/* 点击 新增按钮  post */
router.post("/", function(req, res, next) {
	var newcol = req.body;
	var vipuser = new Vipuser(newcol);

	vipuser.save(function (err, res) {
		if (err) {
			console.log("Error:" + err);
		}
		else {
			console.log("add success");
		}

	});
	//向客户端发送或返回数据
	res.send({ some: "mongo" });
});

//get 跳转到error
router.get("/", function(req, res, next) {
	var msg = "a";
	//res.redirect("http://www.baidu.com");
	res.render("error",{message: msg});
});

module.exports = router;
