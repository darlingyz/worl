var Mock = require('mockjs');
var http = require("http");
var personBizInfo = Mock.mock({
	'person': {
		'img': Mock.Random.image('192x127', '#894FC4', '#FFF', 'png', '!'),
		'name': '@cname',
		mobile: /^1[0-9]{10}$/,
		'id|+1': 1,
		"org|1-10": "★",
	},
	'bizProcessing|1-10': [{
		'id|+2': 1,              //业务ID
		'bizName|1': [
				{'task':'技术合同认定登记','bg':'#545CA6'},
				{'task':'技术贸易资格证业务','bg':'#4DB6CB'},
				{'task':'技术转移业务','bg':'#F45391'},
				{'task':'服务机构入驻管理','bg':'#1BB668'},			
				{'task':'创客创业服务','bg':'#FFCC00'},
				{'task':'项目申报咨询管理','bg':'#E64F4E'},
				{'task':'科技创新券服务管理','bg':'#157BBB'}
			],
		"orgName|1-10": "★",
		'lastperson': '@cname',  //经手人
		'status|1-5': 1,       //业务状态
	}],	
	'bizCompleted|10': [{
		'id|+2': 1,              //业务ID
		'bizName|1':['技术合同认定登记','技术贸易资格证业务','技术转移业务','服务机构入驻管理','创客创业服务','项目申报咨询管理','科技创新券服务管理'],	
		"orgName|1-10": "★",
		'lastperson': '@cname',  //经手人
		'startDate':Mock.Random.date(),
		'endDate':Mock.Random.date(),
	}],
});

http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.writeHead(200, {
		"Content-Type": "text/html;charset=utf-8"
	});
	res.write(JSON.stringify(personBizInfo));
	res.end()
}).listen(8100)
// 输出结果
console.log("your server is running at http://localhost:8100");

//, [], [], [], ['','#'], ['','#'],['','#']	