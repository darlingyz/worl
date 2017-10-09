import React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import "./../sass/login.scss";
import MyAjax from "./../md/MyAjax.js";
export default class Login extends React.Component {
	constructor(props) {
		super(props);

	}
	componentWillMount() {

	}
	toHome() {
	
			var patrn = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			var userID = $("#useroBtn").val();
			var password = $("#psdoBtn").val();
			if(userID == "" && password == "") {
				$(".Userwaring").show()
				$(".pswempty").show();
			} else if(userID != "" && password == "") {
				$(".pswempty").show();
			} else if(userID == "" && password != "") {
				$(".Userwaring").show()
			}
			if(!(patrn.test(userID))) {
				$(".Userwaring").show();
			} else {
				console.log("登陆成功！")
				
			
				{
					/*//var url = "http:/#==========#/?status=login&userID=" + userID + "&password=" + password; //登陆地址

									//		$("#loginBtn").attr("disabled", "disabled"); //保证用户不可以连续点击
									//		$("#loginBtn").val("正在登录...");
									//		$("#loginBtn").css({"background":"#DCE0E8","color":"#95989A"});
									//		MyAjax.fetch(url, function(data) {
									//			$("#loginBtn").removeAttr("disabled") 
									//			$("#loginBtn").css({"background":"#fff","color":"#157BBB"});
									//			$("#loginBtn").val("登录")
									//			if(data == "0") {//用户名错误
									//				$(".Userwaring").show()
									//			} else if(data=="1"){ //密码错误
									//				$(".Pswwaring").show();
									//			}else{
									//				$("#userRight").show()
									//				$("#pswright").show()
									//				console.log("登录成功！")//登录成功
									//				//如果登陆成功则本地模拟一个状态
									//				localStorage.setItem("isLogin", "1");
									//				localStorage.setItem("userID", userID);
									//			}
									//		}, function(err) {
									//			$("#loginBtn").removeAttr("disabled") //保证用户不可以连续点击
									//			$("#loginBtn").val("登录")
									//			console.log(err);
									//		});*/
				}
				
				hashHistory.push({					
					pathname: "/home"
					
				}) 
				window.history.go(0)


			}


	}
	render() {

		return(
			<div className="styles">
			<header>			
			<div className="bgColors">
				<canvas id="display"></canvas>
				<div id="blachole"></div>
				<div id="login">
					<div className="loginTop">
						<div className="loginTCont">
							<img src="./../img/logos.png" />
							<p>兰州科技大市场业务服务管理系统 V1.0 </p>
							<h1>系统登录</h1>
						</div>

					</div>
					<div className="loginDown">
						<div className="downConts">

							<div className="username">
								<img src="./../img/users.png" />
								<input type="text" placeholder="用户名" id="useroBtn" />
								<img src="./../img/yes.png" id="userRight"/>
								<p className="Userwaring">
									<span>用户名错误请重新填写!</span>
									<img src="./../img/waring.png"/>
								</p>
							</div>

							<div className="psd">
								<img src="./../img/psw.png"/>
								<input type="password" placeholder="密码" id="psdoBtn" />
								<img src="./../img/yes.png" id="pswright" />
								<p className="Pswwaring">
									<span>密码错误请重新填写！</span>
									<img src="./../img/waring.png"/>
								</p>
								<p className="pswempty">
									<span>密码不能为空!</span>
									<img src="./../img/waring.png"/>
								</p>
							</div>
							<p className="remberUser">
								<img src="./../img/checks.png" />
								<span>记住密码</span>
							</p>
							<input type="button" value="登录" id="loginBtn" onClick={this.toHome.bind(this)}/>
						</div>

					</div>
				</div>
			</div>
		</header>
</div>
		)
	}
	componentDidMount() {
	$("#loginBtn").on("click",function(){
	var userID=$("#useroBtn").val();	
	console.log(userID)
	localStorage.setItem("id",userID);
	})
	
	}
}