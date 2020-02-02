import React, { Component } from "react";

class SubscribeModal extends Component {
	state = {};
	render() {
		return (
			<div id="SubscribeModal" className="modal modal-fixed-footer">
				<div className="modal-content">
					<h4>Continue Reading?</h4>
					<p>A bunch of text</p>
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

export default SubscribeModal;
