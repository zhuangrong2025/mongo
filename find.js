var User = require("./user.js");

/**
 * 读取数据find({}, function(err, res){})
 */
function find() {
	var wherestr = {};
	User.find(wherestr, function(err, res){
		if (err) {
			console.log("Error:" + err);
		}
		else {
			console.log("Res:" + res);
		}
	});
}

find();
