import React, { Component } from "react";

class Article extends Component {
	render() {
		var article = require("../articles/" + this.props.articleName + ".json");

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

export default Article;
