import React, { Component } from "react";
import SubscribeModal from "./SubscribeModal";
import SignInModal from "./SignInModal";

class FAB extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="fixed-action-btn">
					<a
						className="btn-floating btn-large white"
						href="#SubscribeModal">
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
								href="#SubscribeModal">
								<i className="material-icons black-text">
									notifications_active
								</i>
							</a>
						</li>
						<li>
							<a
								className="waves-effect btn-floating tooltipped white pulse modal-trigger"
								data-position="left"
								data-tooltip="Sign In"
								href="#SignInModal">
								<i className="material-icons black-text">
									account_circle
								</i>
							</a>
						</li>
						<li>
							<a
								className="waves-effect btn-floating tooltipped white"
								data-position="left"
								data-tooltip="I am a tooltip"
								href="#!">
								<i className="material-icons black-text">
									publish
								</i>
							</a>
						</li>
						<li>
							<a
								className="waves-effect btn-floating tooltipped white"
								data-position="left"
								data-tooltip="I am a tooltip"
								href="#!">
								<i className="material-icons black-text">
									attach_file
								</i>
							</a>
						</li>
					</ul>
				</div>

				<SubscribeModal />
				<SignInModal />
			</React.Fragment>
		);
	}
}

export default FAB;
