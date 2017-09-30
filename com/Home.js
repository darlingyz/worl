import React from "react";
import ReactDom from "react-dom";
import { Router,Route,hashHistory,IndexRoute } from "react-router";
import { Input,Menu, Dropdown, Icon,Breadcrumb,Table,Popconfirm , Spin } from 'antd';
import MyAjax from "./../md/MyAjax.js";

import "./../sass/home.scss"
const Search = Input.Search;
const dataSource = [{
  key: '1',
  works: '技术贸易资格证业务',
  name: '张三',
  phone: '13855544666',
  time:'6/17 09:30'
}, {
  key: '2',
  works: '技术贸易资格证业务',
  name: '李三',
  phone: '13855544666',
  time:'6/17 09:30'
},{
  key: '3',
  works: '技术贸易资格证业务',
  name: '王三',
  phone: '13855544666',
  time:'6/17 09:30'
}, {
  key: '4',
  works: '技术贸易资格证业务',
  name: '啊三',
  phone: '13855544666',
  time:'6/17 09:30'
},{
  key: '5',
  works: '技术贸易资格证业务',
  name: '李四',
  phone: '13855544666',
  time:'6/17 09:30'
}, {
  key: '6',
  works: '技术贸易资格证业务',
  name: '赵四',
  phone: '13855544666',
  time:'6/17 09:30'
}];

const columns = [{
  title: '业务',
  dataIndex: 'works',
  key: 'works',
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '电话',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '时间',
  dataIndex: 'time',
  key: 'time',
}];

export default class Home extends React.Component{
constructor(props){
		super(props);
		this.state={
			userList:[]
		}
	}
		componentWillMount(){
			var that=this;
			const code=1;
		{/*===后台发送过来匹配的后的数据，如果发送的code==1，则表示匹配成功，表示用户存在，如果发送过的code==0,表示没有这个用户，则提示添加用户=====*/}
		if(code==1){				
				{/*MyAjax.fetchJsonp(url,function(res){
					console.log(res)
				var datas=res;	
			
				that.setState({
						userList:datas
					})	
				},function(err){
					console.log(err)
				})*/}
		$.ajax({
			type:"get",
			url:"http://localhost:8000",
			async:true,
			success:function(data){
				var datas=JSON.parse(data)
				console.log(datas);
				that.setState({
						userList:datas.list
				})
			}
})
		}else{
			console.log("用户不存在，请新建业务！")			
		}							
	}
	render(){	
		var that=this;
		var userDetail=that.state.userList;
		var arr=[];
		console.log(userDetail);  
		for(var i in userDetail){
					arr.push(
						<li key={i} className="userdetail">
							<img src={userDetail[i].img}/>
							<p>{userDetail[i].id}</p>
							<p>{userDetail[i].average}</p>
							<p className="MakeDetail font_S1801">确认身份</p>
						</li>
						
					)
		}
		return(
			
			<div className="CenterMiddle">
				{/*----客户列表以及业务需求----*/}
	                  			
			<div className="CMTop">
				<div className="userDatail">
					<ul>
						{arr}
					</ul>
				</div>
			
			<div className="TopContent">
					{/*----左边客户列表----*/}
				<div className="CTLeft">
							<div className="DetailList font_S14">
							<ol className="Detaildel CLB_19r28g32b">
								<li>咨询人</li>
								<li>电话</li>
								<li>企业/团队名称</li>
								<li>申请咨询业务</li>
							</ol>
							<ul className="DetailName CLB_8r10g10b">
								<li>张三</li>
								<li>13855544666</li>
								<li>科技有限公司</li>
								<li>技术贸易资格证业务</li>						
							</ul>					
						</div>		
				</div>
					{/*----中间拍照识别----*/}
				<div className="CTMiddle">				
					<video id="video"></video>
							<canvas id="myCanvas" width="540" height="360"></canvas>
							<button id="picture" className="takePic font_S14 CLB_5r31g40b">点击识别</button>						
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
							<img className="Backarea" src="./../img/Group 114.png"/>
							<img className="LeftCema" src="./../img/Group 113.png"/>
							<div className="ClickName font_S12 CLB_5r31g40b">点击拍照</div>
						</div>
						{/*----右边用户详情------*/}
						<div className="ACRight">
							<p>
								<span>用户姓名</span>
								<input type="text" placeholder="请输入用户姓名" className="username"/>
								<img className="searchICon" src="./../img/Group 115.png"/>
							</p>
							<p>
							<span>手机</span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" placeholder="请输入手机号" className="phone"/>
								
							</p>
							<p>
							<span>企业名称</span>
									<input type="text" placeholder="请输入企业名称" className="Business"/>
							</p>
							<div className="addCustom .font_S141">
								<input type="button" value="添加" id="btn"/>
								<input type="button" value="取消" id="cancel"/>							
							</div>
							
						</div>
					</div>					
				</div>												
		</div>
				{/*-------客户列表----------*/}
			<div className="CMDown">
			<ul className="LeftStaus">
				<li>
					<p><img src="./../img/Group 110.png"/></p>
				</li>
				<li>
					<img src="./../img/Group 111.png"/>
					<img className="points" src="./../img/Oval-2.png"/>
				</li>
				<li><img src="./../img/Group 111.png"/></li>					
				<li><img src="./../img/Group 111.png"/></li>
				<li><img src="./../img/Group 111.png"/></li>
				<li><img src="./../img/Group 111.png"/></li>
				<li><img src="./../img/Group 111.png"/></li>							
			</ul>
			<ul className="CustomList font_S14">
					<li>
						<table>
							<tbody>					
									<tr>
									
										<th>技术贸易资格证业务</th>
										<th>张三</th>
										<th>13855544666</th>
										<th>6/17 09:30</th>
								</tr>							
							</tbody>   
						</table>
					</li>
				<li>
						<table>
							<tbody>					
									<tr>						
										<th>技术贸易资格证业务</th>
										<th>李四</th>
										<th>13855544666</th>
										<th>6/17 09:30</th>
								</tr>							
							</tbody>   
						</table>
					</li>
			<li>
						<table>
							<tbody>					
									<tr>
								
										<th>技术贸易资格证业务</th>
										<th>王五</th>
										<th>13855544666</th>
										<th>6/17 09:30</th>
								</tr>							
							</tbody>   
						</table>
					</li>	
					<li>
						<table>
							<tbody>					
									<tr>
								
										<th>技术贸易资格证业务</th>
										<th>赵四</th>
										<th>13855544666</th>
										<th>6/17 09:30</th>
								</tr>							
							</tbody>   
						</table>
						
					</li>
				<li>
						<table>
							<tbody>					
									<tr>						
										<th>技术贸易资格证业务</th>
										<th>王二麻子</th>
										<th>13855544666</th>
										<th>6/17 09:30</th>
								</tr>							
							</tbody>   
						</table>
					</li>
			<li>
						<table>
							<tbody>					
									<tr>
								
										<th>技术贸易资格证业务</th>
										<th>老王</th>
										<th>13855544666</th>
										<th>6/17 09:30</th>
								</tr>							
							</tbody>   
						</table>
					</li>	
					<li>
						<table>
							<tbody>					
									<tr>
								
										<th>技术贸易资格证业务</th>
										<th>老大</th>
										<th>13855544666</th>
										<th>6/17 09:30</th>
								</tr>							
							</tbody>   
						</table>
						
					</li>
				</ul>		
			</div>
		</div>
	)
}

componentDidMount(){
	var oDownCenter=document.getElementById("DownCenter")
	var oCenterMiddle=document.getElementsByClassName("CenterMiddle")[0];
	oDownCenter.appendChild(oCenterMiddle);
	//点击查找客户//点击搜索功能没有写，Enter和点击搜索功能随后添加  
		$(".search").on("click",function(event){
			event.stopPropagation()
			$(".Searchother").show();
				$(".ant-input-search-icon").on("click",function(){
			$(".Searchother").hide();
			
		})
		})
	//点击添加用户
	$(".adds").on("click",function(){
		$(".AddCustom").show();
	})
	$("#cancel").on("click",function(){
		$(".AddCustom").hide();
	})
	//点击识别等待

	
	}
}

	



