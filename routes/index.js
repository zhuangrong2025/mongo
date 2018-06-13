var express = require("express");
var router = express.Router();
var User = require("../user.js");

var allname = [];

//读取数据user
function find(){
	var wherestr = {};
	User.find(wherestr, function(err, res){
  	if (err) {
  		console.log("Error:" + err);
  	}
  	else {
  		//console.log("Res:" + res);
  		res.forEach(function(item){
  			allname.push(item.username);
  		});
  		console.log(allname);
  	}
	});
}
find();
/* GET home page. */
router.get("/", function(req, res, next) {

	res.render("index", { username: allname });
});

module.exports = router;
