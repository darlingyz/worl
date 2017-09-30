import React from "react";
import ReactDom from "react-dom";
import { Link, IndexLink, hashHistory } from "react-router";
import { Input,Menu, Dropdown, Icon,Breadcrumb,Table,Popconfirm } from 'antd';
import FullScreen from "./../md/FullScreen.js";
import Home from "./Home.js";
import "./../sass/App.scss";
const Search = Input.Search;
export default class App extends React.Component {
	constructor(props){
		super(props);
	}
	componentWillMount(){
		var that=this;
	}
	render(){		
		
		
		return (
			<div id="container">
				{this.props.type}
			<div id="content">
					{/*-----------标题栏-----------*/}
				<div className="Title">
					<div className="TitleLeft">
					<a href="javascript:void(0)">
						<img src="./../img/logo.png"/>
						<div className="TitleName font_S14 CLB_5r31g40b">
							<p>兰州科技大市场 </p>
							<p>业务服务管理系统</p>
						</div>  
					</a>	
					</div>	    	
				<div className="TitleRight">
						 <ul>
						 	<li>
						 		<img src="./../img/na.png"/>
						 	</li>
						 	<li>
						 		<img src="./../img/user.png"/>
						 		<span className="userNames font_S14">刘璇</span>
						 	</li>
						 	<li >
						 		<img className="FullScreen" src="./../img/Shape.png"/>
						 	</li> 
						 </ul>
					</div>			 																																											              
			</div>
				{/*--------列表以及右上--------*/}	
		<div className="ContentDown">
				{/*--------左边业务栏--------*/}	
			<div className="DownLeft">
				 <div className="HomeLeft">
			 	<div className="HLtop">
			 			<div className="navTilte CLB_18r20g26b font_S12">
			 				综合业务服务 系统
			 			</div>
			 		<ol className="navList">			 			
			 			<li className="font_S14 CL_wite">
				 			<img src="./../img/Group 59.png"/>
				 			<p>
				 				<a href="javascript:void(0)">技术合同认定登记业务</a>
				 			</p>
			 			</li>
			 			<li className="font_S14 CL_wite">
				 			<img src="./../img/books.png"/>
				 			<p>
				 				<a href="javascript:void(0)">技术贸易资格证业务</a>				 			
				 			</p>
			 			</li>
			 			<li className="font_S14 CL_wite">
				 			<img src="./../img/Group 50.png"/>
				 			<p>
				 				<a href="javascript:void(0)">技术转移业务</a>
				 			</p>
			 			</li>
			 			<li className="font_S14 CL_wite">
				 			<img src="./../img/Group 62.png"/>
				 			<p>
				 			<a href="javascript:void(0)">服务机构入驻管理</a>
				 			</p>
			 			</li>
			 			<li className="font_S14 CL_wite">
				 			<img src="./../img/Group 90.png"/>
				 			<p>
				 			<a href="javascript:void(0)">创客创业服务</a>
				 		 	</p>
			 			</li>
			 			<li className="font_S14 CL_wite">
				 			<img src="./../img/Group 91.png"/>
				 			<p>
				 			<a href="javascript:void(0)">项目申报咨询管理</a>
				 			</p>
			 			</li>
			 			<li className="font_S14 CL_wite">
				 			<img src="./../img/Group 65.png"/>
				 			<p>
				 				<a href="javascript:void(0)">科技创新券服务管理</a> 
				 			</p>
			 			</li>
			 		</ol>
			 	</div>
			 <div className="HLdown">
			 	<h2 className="CLB_18r20g26b font_S12">
			 		会议室预约系统
			 	</h2>			 	
			 <ul className="NavList CL_wite font_S14">
			 	<li>
			 		<img src="./../img/Group 51.png" />
			 		<p><a href="javascript:void(0)">会议室管理</a></p>
			 	</li>
			 	<li>
			 		<img src="./../img/Fill-1.png" />
			 		<p><a href="javascript:void(0)">查询 </a></p>
			 	</li>
			 	<li>
			 		<img src="./../img/Group 67.png" />
			 		<p><a href="javascript:void(0)">预约系统 </a> </p>
			 	</li>
			 	<li>
			 		<img src="./../img/Group 57.png" />
			 		<p><a href="javascript:void(0)">参会记录 </a></p>
			 	</li>
			 </ul>
			 </div>			 
		 </div>		
				         
		</div>
				{/*-------中间导航栏----------*/}
			<div className="NavLists">			
				 <div className="CTLeft">
				 	<img src="./../img/Group 72.png"/>	
					<Breadcrumb className="font_S14">
					    <Breadcrumb.Item>首页</Breadcrumb.Item>
					    <Breadcrumb.Item><a href="javascript:void(0)">列表页</a></Breadcrumb.Item>
					    <Breadcrumb.Item><a href="javascript:void(0)">当前页</a></Breadcrumb.Item>
					  </Breadcrumb>				 
				 </div>
				<div className="CTRight">
					<ul>
						<li>
							<img src="./../img/list.png"/>
							<img src="./../img/Path-5.png"/>
						</li>
						<li>
							<img src="./../img/Group 86.png"/>
							<img src="./../img/Path-5.png"/>
						</li>
						<li>
							<img src="./../img/Symbol 7 – 7.png"/>
							<img src="./../img/Path-5.png"/>
						</li>
					</ul>
				</div>				 								
			</div>
				{/*--------中间路由模块--------*/}	
					<div id="DownCenter">
						
					</div>
				{/*--------右边新建模块--------*/}	
			<div className="DownRight">
				<div className="CentRight CL_wite">
		<dl>
			<dt><img src="./../img/Group 112.png"/></dt>
			<dd>
				<p>新建</p>
				<p>技术合同认定登记</p>
			</dd>
		</dl>
		
		<dl>
			<dt><img src="./../img/Group 112.png"/></dt>
			<dd>
				<p>新建</p>
				<p>技术合同认定登记</p>
			</dd>
		</dl>
		<dl>
			<dt><img src="./../img/Group 112.png"/></dt>
			<dd>
				<p>新建</p>
				<p>技术合同认定登记</p>
			</dd>
		</dl>
		<dl>
			<dt><img src="./../img/Group 112.png"/></dt>
			<dd>
				<p>新建</p>
				<p>技术合同认定登记</p>
			</dd>
		</dl>
		<dl>
			<dt><img src="./../img/Group 112.png"/></dt>
			<dd>
				<p>新建</p>
				<p>技术合同认定登记</p>
			</dd>
		</dl>
		<dl>
			<dt><img src="./../img/Group 112.png"/></dt>
			<dd>
				<p>新建</p>
				<p>技术合同认定登记</p>
			</dd>
		</dl>
		<dl>
			<dt><img src="./../img/Group 112.png"/></dt>
			<dd>
				<p>新建</p>
				<p>技术合同认定登记</p>
			</dd>
		</dl>		  
		</div>				
			</div>
		</div>												
		</div>		
	</div>
	)     
}
	componentDidMount(){
			//全屏模式
		function ck(){
			  screenfull && screenfull.request();
		}
		$(".FullScreen").on("click",function(){
			ck();
			
		});
		
		
	}
}
