var express = require("express");
var router = express.Router();

var User = require("../opration.js");



router.get("/", function(req, res, next) {
	var promise = User.getJedisPromise();
	promise.then(function(jedis){
		res.render("index", { username: jedis });
	});

});

module.exports = router;
