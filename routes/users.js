var express = require("express");
var router = express.Router();
var User = require("../user.js");

/* 点击 新增按钮  post */
router.post("/", function(req, res, next) {
	var newcol = req.body;
	var user = new User(newcol);

	user.save(function (err, res) {
		if (err) {
			console.log("Error:" + err);
		}
		else {
			console.log("Res:" + res);
		}

	});
	//向客户端发送或返回数据
	// res.send({ some: "mongo" });
});

module.exports = router;
