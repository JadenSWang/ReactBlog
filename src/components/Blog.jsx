import React, { Component } from "react";
// import * as RNFS from "react-native-fs";

class Blog extends Component {
	render() {
		return (
			<React.Fragment>
				<div class="row">{loadPreviews()}</div>
			</React.Fragment>
		);
	}
}

function loadPreviews() {}

function LoadPreview(props) {
	return (
		<div class="blogPreview">
			<div class="col s12 m4">
				<div class="z-depth-0">
					<div class="card hoverable waves-effect waves-block waves-light">
						<div class="card-image">
							<img src="/pictures/duck.jpg" alt="" />
							<span class="card-title">{props.title}</span>
						</div>
						<div class="card-content">
							<p>{props.description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
