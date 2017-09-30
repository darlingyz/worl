// 使用 Mock
var Mock = require('mockjs');
var http = require("http");
//var Random = require("random")
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|5': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        "img":Mock.Random.image('352x234', '#894FC4', '#FFF', 'png', '!'),
        name: Mock.Random.cname(),
         mobile:/^1[0-9]{10}$/,      
        'id|+1': 1,
        "average|1-10": "★",
        addr: Mock.mock('@county(true)')
    }]
})

http.createServer((req,res) => {
	res.setHeader("Access-Control-Allow-Origin","*");
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});	
	res.write(JSON.stringify(data));
	res.end()
}).listen(8000)
// 输出结果
console.log("your server is running at http://localhost:8000");