var Mock = require('mockjs');
var http = require("http");
var customList = Mock.mock({	
	'customList|1-10': [{
		'id|+2': 1,              //个人ID
		'bizName|1': ['技术合同认定登记', '技术贸易资格证业务', '技术转移业务', '服务机构入驻管理', '创客创业服务', '项目申报咨询管理', '科技创新券服务管理'],
		'person': '@cname',  //办理人
		'status|1-5': 1,       //业务状态
		mobile: /^1[0-9]{10}$/ ,//电话
		'Date':Mock.Random.date(),
		"org|1-10": "★",
	}]
	
});

http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.writeHead(200, {
		"Content-Type": "text/html;charset=utf-8"
	});
	res.write(JSON.stringify(customList));
	res.end()
}).listen(8200)
// 输出结果
console.log("your server is running at http://localhost:8200");