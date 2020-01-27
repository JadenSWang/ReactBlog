import React, { Component } from "react";

class ArticlePreview extends Component {
	render() {
		var article = getArticle(
			require("../articles.json", this.props.articleId)
		);

		return (
			<div class="blogPreview">
				<div class="col s12 m4">
					<div class="z-depth-0">
						<div class="card hoverable waves-effect waves-block waves-light">
							<div class="card-image">
								<img src={article.thumbnail} alt="" />
								<span class="card-title">{article.title}</span>
							</div>
							<div class="card-content">
								<p>{article.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function getArticle(articles, id) {
	var article;
	for (var i = 0; i < articles.length; i++) {
		if (articles[i].id.equals(id)) {
			article = articles[i];
			i = articles.length;
		}
	}

	return article;
}

export default ArticlePreview;
