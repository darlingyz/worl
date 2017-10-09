import React from "react";
import ReactDom from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { Input, Menu, Dropdown, Icon, Breadcrumb, Table, Popconfirm, Spin, message, Modal, Button } from 'antd';
import MyAjax from "./../md/MyAjax.js";
import "./../sass/detail.scss"
const Search = Input.Search;

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			onready: [],
			userList: [],
			personList: [],
			companyList: [],
			readyCustom: [],
		}
	}

	componentWillMount() {
		var that = this;

		$.ajax({ //用户等待请求
			type: "get",
			url: "http://localhost:8200",
			async: true,
			success: function(data) {
				var res = JSON.parse(data);
				console.log(res)
				that.setState({
					readyCustom: res.customList

				})
			}
		})
		$.ajax({ //确认身份的请求
			type: "get",
			url: "http://localhost:8000",
			async: true,
			success: function(data) {
				var datas = JSON.parse(data);
				console.log(datas.person)
				that.setState({
					userList: datas.person
				})
			}
		})
		$.ajax({
			type: "get",
			url: "http://localhost:8100",
			async: true,
			success: function(data) {
				var res = JSON.parse(data);
				console.log(res)
				var personData = res.person; //个人详情
				var oBizProcessing = res.bizProcessing; //正在办理
				var oBizCompleted = res.bizCompleted; //历史业务
				that.setState({
					personList: personData,
					companyList: oBizProcessing,
					historyList: oBizCompleted
				})
			}
		})

		{
			/*	var socket=io.connect("http://127.0.0.1:9200")//用户等待列表
									socket.on('push message', function(data) {			
										console.log(data.text);				
										var res=data.text;
										console.log("###########################");
										console.log(res);
										for(var i=0;i<res.length;i++){
											console.log(res.length)
											resarr.push()
										}
										that.setState({
											readyCustom:data.text
										})
									})
							}*/
		}

	}
	render() {
		var that = this;
		var Onready = that.state.readyCustom; //用户等待列表		
		var userDetail = that.state.userList; //用户 个人确认信息列表
		var personDetail = that.state.personList; //个人列表
		var companyDetail = that.state.companyList; //代办列表
		var historyDetail = that.state.historyList; //历史列表
		var arr = [];
		var busList = [];
		var oPerson = [];
		var oCompany = [];
		var oHistory = [];
		var oDetiList = []
		for(var i in Onready) { //等待用户列表
			busList.push(
				<li key={i} data-Id={Onready[i].id}>
				<table>
					<tbody>
						<tr>
						<td className="imgStaus">
							<img src="./../img/Group 111.png"/>
							<img className="point" src="./../img/Oval-2.png"/>
						</td>
						<td>{Onready[i].bizName}</td>	
						<td>{Onready[i].person}</td>	
						<td>{Onready[i].mobile}</td>	
						<td>{Onready[i].Date}</td>	
						</tr>
					</tbody>
				</table>
			</li>
			)
		}
		for(var i in Onready) { //==================
			oDetiList.push(
				<li key={i}>
				<p>{Onready[i].person}</p>
				<p>{Onready[i].mobile}</p>
				<p>{Onready[i].bizName}</p>
			</li>
			)
		}

		for(var i in userDetail) { ///确认身份列表
			arr.push(
				<dl key={i} className="userdetail" >
							<img src={userDetail[i].img}/>
						<dt className="font_S14">
								<p>咨询人</p> 
								<p>电话</p>
								<p>企业/团队名称</p>
						</dt>
						<dd className="font_S14">
								<p>{userDetail[i].name}</p>
								<p>{userDetail[i].mobile}</p>
								<p>{userDetail[i].org}</p>							
						</dd>
						 <input type="button" value="确认身份"  className="MakeDetail font_S1801" id="DetailBtn" data-ID={userDetail[i].id}/>							
						</dl>
			)
		}
		for(var i in companyDetail) { //正在办理列表
			oCompany.push(
				<table key={i}>
					<tbody>
						<tr>
							<td className="oBusWork" data-Bg={companyDetail[i].bizName.bg} >{companyDetail[i].bizName.task}</td>
							<td className="oBuscompany">{companyDetail[i].orgName}</td>
							<td className="oBusStatus">{companyDetail[i].status}</td>
							<td className="oBg"> > </td>
						</tr>						
					</tbody>
				</table>
			)
		}
		for(var i in historyDetail) { //历史业务
			oHistory.push(
				<table key={i}>
				<tbody>
					<tr>
						<td>{historyDetail[i].bizName}</td>
						<td>{historyDetail[i].orgName}</td>
						<td>{historyDetail[i].lastperson}</td>
						<td>{historyDetail[i].endDate}</td>
					</tr>
				</tbody>
			</table>
			)
		}

		return(
			<div className="type">
			<div className="CenterMiddle">
			{/*----客户列表以及业务需求----*/}	                  			
			<div className="CMTop">
				<div className="userDatails">				
						{arr}
						<div className="returnBack font_S1801">重新识别</div>
				</div>	
			{/*----确认身份后出现的详细的用户界面------*/	/*=================*/}
				<div className="SuperDetail">
					<div className="SDetailTop">
						<dl className="personTop font_S14">
							<img src={personDetail.img} />
							<dt>
								<p>咨询人</p> 
								<p>电话</p>
								<p>企业/团队名称</p>

							</dt>
							<dd>
								<p>{personDetail.name}</p>
								<p>{personDetail.mobile}</p>
								<p>{personDetail.org}</p>	
							</dd>
						</dl>
						<p className="OverSer font_S14 CL_wite">结束本次服务</p>	
					
					</div>
					<div className="SDetailDown font_S14">
						<div className="SDetailDownleft">
						<p className="onworking">正在办理</p>
							<div className="onWorks">								
								<div className="onWList CL_black">							
									{oCompany}						
								</div>    
							</div>
							<p className="histortWork">历史业务</p>
							<div className="onHistory">
									{oHistory}
							</div>
						</div>
						<div className="SDetailDownright font_S24">
							<p>请在右侧新建业务</p>
						</div>										
					</div>
				</div>								
				{/*=================以上为用户的详细的操作界面=================================*/}
				{/*===========================咨询信息表====================*/}
		<div className="mask">			
		<div className="QueryDetail">
			<h1>咨询信息表</h1>
			<div className="otherList font_S14">
				<p>
					接待时间&nbsp;:<span className="dataTime">2017/2/30  10:00</span>
				</p>
				<p>
					信息来源&nbsp;:<span>&nbsp;咨询师 </span>
				</p>
			</div>
			<div className="QDCont font_S14">
				   <table>
				 	<tbody>
				   		<tr>
				   			<td width="100">企业名称</td>
				   			<td width="900" colSpan="3" className="busComName">{personDetail.org}</td>				   					   		
				   		</tr>
				   		<tr>				
				   			<td>联系人</td>
				   			<td width="254" className="phonePer">{personDetail.name}</td>
				   			<td width="90" className="phoneName">联系方式</td>
				   			<td>{personDetail.mobile}</td>
				   		</tr>
				   		<tr>
				   			<td>咨询内容</td>
				   			<td colSpan="3" className="qureDetail"></td>					   				
				   		</tr>
				   </tbody>
				</table>
			</div>
			<div className="WriteCont">
				<textarea rows="3" cols="20" id="WContTop" placeholder="请输入您要咨询的内容..."></textarea>
				<textarea rows="3" cols="20" id="WContDown"></textarea>
			</div>
			{/*----确定是接受业务------*/}
			<div id="BtnStaus">				
			<div className="AllowWork CL_black">受理</div>
				<img className="Allyes" src="./../img/Group 116.png"/>
			<div className="refuseWork CL_black">不受理</div>
				<img className="AllNo" src="./../img/Group 117.png"/>				
			</div>	
			<input type="button" value="退出" id="SureBtn" className="font_S1801"/>
		</div>
	</div>		
				{/*========内容区=======*/}
			<div className="TopContent">
					{/*----左边客户列表----*/}
				<div className="CTLeft">
							<div className="DetailList font_S14">
							<ol className="Detaildel CLB_19r28g32b">
									<li>咨询人</li>
									<li>电话</li>
									<li>申请咨询业务</li>
							</ol>
							<ul className="DetailName CLB_8r10g10b">							
									{oDetiList}
					
							</ul>					
						</div>		
				</div>
					{/*----中间拍照识别----*/}
				<div className="CTMiddle">				
							<video id="video"></video>
							<canvas id="myCanvas" width="540" height="360"></canvas>	
							<input type="button" value="点击识别" id="picture" className="takePic font_S1801 CLB_5r31g40b" />
						<div className="Nextone font_S14">
							办理下一位
						</div>											
					</div>			
					{/*----右边搜索添加用户----*/}
				<div className="CTRight">
				<img className="search" src="./../img/Group 183.png" />										    					   					       					    					    					 				
				<div className="addUser">
					<img className="adds" src="./../img/Group 185.png"/>
					<p className="font_S14">添加用户</p>
				</div>	
			</div>
		</div>
			{/*----用户搜索-----*/}
			<div className="Searchother">
					<Search placeholder="搜索" style={{ width:821,height:86 }} id="sear_box" onSearch={value => console.log(value)}/>
			</div>
					{/*---用户添加----*/}			
					<div className="AddCustom">
						<h1>添加新用户</h1>
					<div className="AddCont">
						{/*----左边拍照区------*/}
						<div className="ACLeft">				
							<video id="videoes" autoPlay="autoPlay"></video>
							<canvas id="otherCanvas" width="540" height="360"></canvas>	
							<div className="ClickName font_S1801 CLB_5r31g40b" id="pictures">点击拍照</div>											
						</div>
						{/*----右边用户详情------*/}
						<div className="ACRight">
							<p>
								<span>用户姓名</span>
								<input type="text" className="username"/>
								<img className="searchICon" src="./../img/Group 115.png"/>
							</p>
							<p>
							<span>手机</span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" className="phone"/>
							</p>
							<p>
							<span>企业名称</span>
									<input type="text" className="Business"/>
							</p>
							<div className="addCustom .font_S141">
								<input type="button" value="添加" id="addbtn"/>
								<input type="button" value="取消" id="cancel"/>							
							</div>
						</div>
					</div>					
				</div>												
		</div>
				{/*-------客户列表----------*/}
		<div className="CMDown">
			<ul className="CustomList font_S14">{/*-----用户等待------*/}
					{busList}
				</ul>		
			</div>
		</div>
	</div>
		)
	}
	componentDidMount() {
		//删除同步客户数据
		$(".Nextone").on("click", function() {
			var oCustomList = document.getElementsByClassName("CustomList")[0];
			var listone = $(".CustomList").find("li").siblings().next();
			var index = $(".CustomList").find("li").siblings().first();
			$(".CustomList").find("li").siblings().first().remove(); //移除第一条数据						
			$(".DetailName").find("li").first().remove(); //移除左边的数据
			var dataId = index[0].dataset.id; //获取删除的用户ID传给后台，后台删除相应的操作			
			//console.log(dataId);

		})
		//点击查找客户//点击搜索功能没有写，Enter和点击搜索功能随后添加  
		$(".search").on("click", function() {
			$(".Searchother").show();
			$(".ant-input-search-icon").on("click", function() {
				$(".Searchother").hide();
			})
		})
		//点击添加用户
		$(".adds").on("click", function() {
			$(".AddCustom").show();
		})
		$("#cancel").on("click", function() {
			$(".AddCustom").hide();
		})
		
		
		
		//新建用户后数据的传递
		$("#addbtn").on("click", function() {
			$("#addbtn").css("background","#138049");
			var username = $(".username").val();
			var phone = $(".phone").val();
			var business = $(".Business").val();
			var obj = {
				usernme: username,
				Phone: phone,
				business: business
			} 
			{
				/*$.ajax({
							type:"POST",
							url:"<%=basePath%>/?method=uploadPic&type=0&IdCard="+IdCard",
							data:{"persondata":obj},
							success:function(data){
								console.log("新建成功！")	
							},
							error:function(err){
								console.log(err.data)
							  	}		  	
							 })  
							  * 这里新建用户成功
							  * 信息提示创建成功确定后跳转到用户详情界面
							  * 后自动跳转到用户详情页。
							  * 
							  * 
							  * 
							  * */
			}

		})

		//选择用户的信息进行页面的样式的改变；	
		//往后台进行填写数据后的操作//点击识别等待
		$(".takePic").on("click", function() {
			$(".takePic").val("正在识别...");
			$(".takePic").attr("disabled", "disabled");
			$(".takePic").css({"background":"#DCE0E8","color":"#95989A"});
			var Code = localStorage.setItem("code", 1);
			//获取后台传过来的值，如果该值为1则表示库中有此人，否则查无此人新建业务；			
			var timer = setInterval(function() {
				var codes = localStorage.getItem("code");
				if(codes == 1) {
					alert("获取信息成功，请继续下一步操作！")
					$(".takePic").removeAttr("disabled")//保证用户不可以连续点击
					$(".takePic").css({"background":"#FFF","color":"#157BBB"});
					$(".takePic").val("点击识别");
					clearInterval(timer);
					$(".TopContent").hide();
					$(".userDatails").show()
				} else {
					alert("用户不存在！请新建业务");
					$(".takePic").removeAttr("disabled") //保证用户不可以连续点击
					$(".takePic").val("点击识别");
					clearInterval(timer);
				}
			}, 3000)
		});
		//用户拍照之后确认身份的操作。
		$(".returnBack").on("click", function() { //拍照找不到该人，返回继续新建业务或者搜索查找此人
			$(".TopContent").show();
			$(".userDatails").hide();

		})
		//事件委托来获获取此处的id值
		var perents = document.getElementsByClassName("userDatails")[0];
		var odl = document.getElementsByTagName("dl");
		perents.onclick = function(e) {
			var evt = e || event;
			var ele = evt.target || evt.srcElement;
			//console.log(ele.nodeName)
			if(ele.nodeName.toUpperCase() == "INPUT") {
				console.log(e.target.dataset.id) //用户的ID
				var userId = e.target.dataset.id;
				//此处可以引入加载等待的图标//Ajax请求完成之后进行渲染页面
				//		$.ajax({//用户的Id传给后台，后台返回该用户的办理业务的一些数据，模拟该数据，确认身份直接跳转
				//				type:"POST",
				//				url:"<%=basePath%>/?method=uploadID&type=0&userId="+userId",
				//				async:true,
				//				success:function(data){
				//					console.log("userId成功发送给后台！")	
				//				},
				//			error:function(err){
				//		  		console.log(err.data)
				//		  	}
				//			})
				$(".userDatails").hide();
				$(".SuperDetail").show();
			}
		}

		$(".onworking").on("click", function() {
			$(".onWorks").show();
			$(".onHistory").hide();
			$(".onworking").css({
				"background": "#fff",
				"color": "#9E9E9E"
			});
			$(".histortWork").css({
				"color": "#fff",
				"background": "#ACB3BF"
			});
		});
		$(".histortWork").on("click", function() {
			$(".onHistory").show();
			$(".onWorks").hide();
			$(".histortWork").css({
				"background": "#fff",
				"color": "#9E9E9E"
			});
			$(".onworking").css({
				"color": "#fff",
				"background": "#ACB3BF"
			});
		})
		$(".CentRight dl").on("click", function() { //确认界面操作
			var code = localStorage.getItem("code") //存储一个状态代表确认了用户
			console.log(code)
			if(code == "1") {
				var vals = $(this).find(".busineWork")[0].innerHTML;
				console.log(vals);
				$(".qureDetail").html(vals);
				$(".mask").show();
			} else {
				alert("请先确认用户身份后新建业务！")
			}

		});
		$(".workList dl").on("click", function() { //新建业务显示
			var vals = $(this).find(".WorkName")[0].innerHTML;
			$(".QueryDetail").show();
			$(".qureDetail").html(vals);
		});
		$("#SureBtn").on("click", function() {
			alert("确定要退出么？")
			$(".mask").hide()
		})

		$(".onWList").on("click", 'tr', function(event) {
			var oBg = event.target.dataset.bg;
			console.log(event.target.dataset.bg)
			console.log(event)
			var tar = $(event.target);
			tar.parents("table").siblings().find(".oBg").css("background", "");
			tar.siblings(".oBg").css("background", oBg);
			var valus = $(this)[0].cells[0].innerHTML;
			$(".qureDetail").html(valus);
			tar.parents("table").siblings().css("background", "");
			tar.not($(".oBg")[0]).parents("table").css("background", '#545CA6')
			$(".mask").show();
		})
		$(".OverSer").on("click", function() {
			$(".SuperDetail").hide();
			$(".TopContent").show();
		})
	}
}