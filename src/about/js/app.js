/**
 * @project: 关于页面逻辑
 * @author: leinov
 * @date: 2018-10-08
 */

import React, { Component } from "react";
import Nav from "../../component/nav";
import aboutpic from "../images/about.jpg";
export default class App extends Component {
	render() {
  	return (
  		<div>
  			<Nav />
  			<div className="about">
  				<img src="../images/about.jpg" />
					<p>关于<a href="https://github.com/leinov/webpack-react-multi-page/">webpack-react-multi-page</a></p>
				</div>
			</div>
		);
	}
}
