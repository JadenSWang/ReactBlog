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
						<div
							className="card hoverable waves-effect waves-block waves-light"
							href="#!">
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
					</div>
				</div>
			</div>
		);
	}
}

export default ArticlePreview;
