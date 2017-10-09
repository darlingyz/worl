$("#loginBtn").on("click", function() {
	var patrn = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	var userID = $("#userBtn").val();
	var password = $("#psdBtn").val();
	console.log(password)
	if(userID == "" && password == "") {
		$(".Userwaring").show()
		$(".pswempty").show();
	} else if(userID != "" && password == "") {
		$(".pswempty").show();
	} else if(userID == "" && password != "") {
		$(".Userwaring").show()
	}
	if(!(patrn.test(userID))){
		$(".Userwaring").show()
	}else if{
		//var url = "http:/#==========#/?status=login&userID=" + userID + "&password=" + password; //登陆地址
		
		/*$("#loginBtn").attr("disabled", "disabled"); //保证用户不可以连续点击
		$("#loginBtn").val("正在登录...");
		$("#loginBtn").css({"background":"#DCE0E8","color":"#95989A"});
		MyAjax.fetch(url, function(data) {
			$("#loginBtn").removeAttr("disabled") 
			$("#loginBtn").css({"background":"#fff","color":"#157BBB"});
			$("#loginBtn").val("登录")
			if(data == "0") {//用户名错误
				$(".Userwaring").show()
			} else if(data=="1"){ //密码错误
				$(".Pswwaring").show();
			}else{
				$("#userRight").show()
				$("#pswright").show()
				console.log("登录成功！")//登录成功
				//如果登陆成功则本地模拟一个状态
				localStorage.setItem("isLogin", "1");
				localStorage.setItem("userID", userID);
			}
		}, function(err) {
			$("#loginBtn").removeAttr("disabled") //保证用户不可以连续点击
			$("#loginBtn").val("登录")
			console.log(err);
		});

		*/
		console.log("登陆成功！")
		
	}
	
})