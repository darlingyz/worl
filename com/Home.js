import React from "react";
import { Router, IndexLink,Route, hashHistory, IndexRoute } from "react-router";
export default class home extends React.Component {
		constructor(props) {
			super(props);
		}

		render() {

			return(
				<div className="content">
						{this.props.styles}
						
						<ul>
							<li>
							<IndexLink to="/"></IndexLink>
							</li>
							<li>
							<IndexLink to="/App" id="App"></IndexLink>
							</li>
						</ul>
					
						
				</div>
			)
		}
		
	}