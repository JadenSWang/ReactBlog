import React, { Component } from "react";

class SignInModal extends Component {
	state = {};
	render() {
		return (
			<div id="SignInModal" className="modal modal-fixed-footer">
				<div className="modal-content">
					<h4>Save Your Progress</h4>

					<div
						className="g-signin2"
						data-onsuccess="onSignIn"
						data-theme="dark"></div>
				</div>
				<div className="modal-footer">
					<a
						id="modalclosebutton"
						href="#!"
						className="modal-close waves-effect waves-green btn-flat">
						Agree
					</a>
				</div>
			</div>
		);
	}
}

export default SignInModal;
