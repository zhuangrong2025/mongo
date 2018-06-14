var User = require("./opration.js");


// var query =  User.getJedisQuery();
// query.exec(function(err,jedis){
// 	if(err)
// 		return console.log(err);
// 	jedis.forEach(function(jedi){
// 		console.log(jedi.username);
// 	});
// });

//处理异步promise
var promise = User.getJedisPromise();
promise.then(function(jedis){
	jedis.forEach(function(jedi){
		console.log(jedi.username);
	});
});
