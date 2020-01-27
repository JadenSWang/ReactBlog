import React, { Component } from "react";
import ReactDOM from "react-dom";
import ArticlePreview from "./ArticlePreview";

class Previews extends Component {
	render() {
		return (
			<React.Fragment>
				<div class="row">{generatePreviews()}</div>
			</React.Fragment>
		);
	}
}

function generatePreviews() {
	var articles = require("../articles.json");
	var toReturn = [];

	for (var i = 0; i < articles.length; i++) {
		toReturn.push(<ArticlePreview article={articles[i]} />);
	}

	return toReturn;
}

export default Previews;
