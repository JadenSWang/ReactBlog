/**
 * Article gallery previewer
 */

import React, { Component } from "react";

class ArticlePreview extends Component {
	render() {
		var article = this.props.article;

		return (
			<div className="blogPreview">
				<div className="col s12 m4">
					<div className="z-depth-0">
						<a href={"article/" + article.id}>
							<div className="card hoverable waves-effect waves-block waves-light black-text">
								<div className="card-image">
									<img src={article.thumbnail} alt="" />
									<span className="card-title">
										{article.title}
									</span>
								</div>
								<div className="card-content">
									<p>{article.description}</p>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ArticlePreview;
