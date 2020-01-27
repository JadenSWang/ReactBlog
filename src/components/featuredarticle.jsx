/**
 * Article featured at the top of the landing page
 */
import React, { Component } from "react";

class FeaturedArticle extends Component {
	render() {
		var article = getArticle(
			require("../articles.json"),
			this.props.articleId
		);

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

function getArticle(articles, id) {
	var article;
	for (var i = 0; i < articles.length; i++) {
		if (articles[i].id == id) {
			article = articles[i];
			i = articles.length;
		}
	}

	return article;
}

export default FeaturedArticle;
