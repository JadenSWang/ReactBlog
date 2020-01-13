import React, { Component } from "react";

class FeaturedArticle extends Component {
	state = { articleName: "something.txt" };
	render() {
		return (
			<React.Fragment>
				<div class="col s12 m8">
					<div class="card horizontal">
						<div class="card-stacked">
							<div class="card-content">
								<h6>FEATURED</h6>
								<h3>Inflatable Duck in Hong Kong Harbor</h3>
								<h6>
									GIANT RUBBER DUCK SPOTTED IN HONG KONG HARBOR. EXPERTS
									CONFUSED SAYING THIS MAY BE THE WORK OF GOD OR SOME
									EXTRATERRESTRIAL BEING.
								</h6>
							</div>
							<div class="card-action">
								<a href="#!">Continue Reading</a>
							</div>
						</div>
						<div class="card-image">
							<img
								src="https://inhabitat.com/wp-content/blogs.dir/1/files/2013/05/Rubber-Duck-Florentijin-Hofman-1.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default FeaturedArticle;
