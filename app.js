import React from "react";
import ReactDom from "react-dom";
import { Router,Route,hashHistory,IndexRoute } from "react-router";
import "./sass/main.scss";
import DatePicker from 'antd/lib/date-picker'; 
import home from "./com/App.js";
import login from "./com/Login.js"
import Home from "./com/home.js";
ReactDom.render(
	( 
	<Router history = {hashHistory}>
		<Route path="/" component={Home}>
		<IndexRoute components={{styles:login}}/>	
		<Route path="/home" components = {{styles:home}}/>		
		</Route>
	</Router>	
),document.getElementById("app"))

