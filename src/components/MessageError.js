import React from "react";

function MessageError() {
	return (
		<div className="danger__container">
			<p className="danger">
				🔥 Something went wrong, please try again later or contact me directly:
			</p>
			<a href="mailto:krystian.kruszelnicki1@gmail.com">
				<p className="danger__email">krystian.kruszelnicki1@gmail.com</p>
			</a>
		</div>
	);
}

export default MessageError;
