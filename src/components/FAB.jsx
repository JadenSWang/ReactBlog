import React, { Component } from "react";

class FAB extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="fixed-action-btn">
					<a className="btn-floating btn-large white">
						<div id="nav-icon3">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</a>
					<ul>
						<li>
							<a
								className="waves-effect btn-floating tooltipped white pulse modal-trigger"
								data-position="left"
								data-tooltip="Subscribe"
								href="#subscribemodal">
								<i className="material-icons black-text">
									notifications_active
								</i>
							</a>
						</li>
						<li>
							<a
								className="waves-effect btn-floating tooltipped white"
								data-position="left"
								data-tooltip="Sign In"
								href="#signinmodal">
								<i className="material-icons black-text">
									account_circle
								</i>
							</a>
						</li>
						<li>
							<a
								className="waves-effect btn-floating tooltipped white"
								data-position="left"
								data-tooltip="I am a tooltip">
								<i className="material-icons black-text">
									publish
								</i>
							</a>
						</li>
						<li>
							<a
								className="waves-effect btn-floating tooltipped white"
								data-position="left"
								data-tooltip="I am a tooltip">
								<i className="material-icons black-text">
									attach_file
								</i>
							</a>
						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default FAB;
