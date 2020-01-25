import React, { Component } from "react";

class Article extends Component {
	render() {
		var article = require("../articles/" + this.props.articleName + ".json");

		return (
			<div class="row">
				<div class="col s12 m2"></div>
			</div>
		);
	}
}

export default Article;
