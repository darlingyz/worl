var Mock = require('mockjs');
var http = require("http");
var preUsers = Mock.mock({
	'person|1-3':[{
		"img": Mock.Random.image('192x127', '#894FC4', '#FFF', 'png', '!'),
		'name': '@cname',
		mobile: /^1[0-9]{10}$/,
		'id|+1': 1,
		"org|1-10": "★",
	}]
});

http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.writeHead(200, {
		"Content-Type": "text/html;charset=utf-8"
	});
	res.write(JSON.stringify(preUsers));
	res.end()
}).listen(8000)
// 输出结果
console.log("your server is running at http://localhost:8000");
