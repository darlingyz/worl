import React from "react";
import ReactDom from "react-dom";
import { Router,Route,hashHistory,IndexRoute } from "react-router";
import { Table, Input, Popconfirm } from "antd";
import Home from "./Home.js";
export default class WorkList extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div></div>
		)
	}
	
}
ReactDom.render(<WorkList />, document.getElementById("CMDown"))
