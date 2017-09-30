import React from "react";
import ReactDom from "react-dom";
import { Router,Route,hashHistory,IndexRoute } from "react-router";
import "./sass/main.scss";
import DatePicker from 'antd/lib/date-picker'; 
import App from "./com/App.js";
import Home from "./com/Home.js"
import Detail from "./com/Detail.js";
ReactDom.render(
	(
	<Router history = {hashHistory}>
		<Route path="/" component={App}>
		<IndexRoute components={{type:Home}}/>	
		</Route>
		<Route path="/Datail" component = {Detail}></Route>	
	</Router>	
),document.getElementById("app"))

