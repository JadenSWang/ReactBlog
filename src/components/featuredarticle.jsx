import React, { Component } from "react";

class FeaturedArticle extends Component {
	render() {
		var article = require("../articles/" + this.props.articleName + ".json");

		return (
			<React.Fragment>
				<div class="col s12 m8">
					<div class="card horizontal">
						<div class="card-stacked">
							<div class="card-content">
								<h6>FEATURED</h6>
								<h3>{article.title}</h3>
								<h6>{article.description}</h6>
							</div>
							<div class="card-action">
								<a href="#!">Continue Reading</a>
							</div>
						</div>
						<div class="card-image">
							<img src={article.thumbnail} alt="" />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default FeaturedArticle;
