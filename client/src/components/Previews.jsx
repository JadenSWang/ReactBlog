/**
 * Holds and renders all previews inside the gallery
 */

import React, { Component } from "react";
import ArticlePreview from "./ArticlePreview";

class Previews extends Component {
	state = { articles: [] };

	componentDidMount() {
		fetch("/allarticles")
			.then(res => res.json())
			.then(articles => this.setState({ articles }));
	}

	render() {
		return (
			<React.Fragment>
				<div className="row">
					{generatePreviews(this.state.articles)}
				</div>
			</React.Fragment>
		);
	}
}

function generatePreviews(articles) {
	var toReturn = [];

	for (var i = 0; i < articles.length; i++) {
		toReturn.push(<ArticlePreview article={articles[i]} />);
	}

	return toReturn;
}

export default Previews;
