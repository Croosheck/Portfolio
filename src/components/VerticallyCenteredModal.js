import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// const MODAL_STYLES = {
// 	position: "fixed",
// 	top: "50%",
// 	left: "50%",
// 	transform: "translate(-50%, -50%)",
// 	backgroundColor: "#fff",
// 	padding: "50px",
// 	zIndex: 1000,
// };

// const OVERLAY_STYLES = {
// 	position: "fixed",
// 	top: 0,
// 	left: 0,
// 	right: 0,
// 	bottom: 0,
// 	backgroundColor: "rgba(0, 0, 0, .7)",
// 	zIndex: 1000,
// };

function VerticallyCenteredModal({ show, onHide, title, src }) {
	const [offset, setOffset] = useState({
		width: null,
		height: null,
	});
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);
	// 	if (!open) return null;

	// 	return (
	// 		<>
	// 			<div style={OVERLAY_STYLES} />
	// 			<div style={MODAL_STYLES}>
	// 				<button onClick={onClick}>Close Modal</button>
	// 				{children}
	// 			</div>
	// 		</>
	// 	);

	function getWindowDimensions() {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	}

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		// console.log(windowDimensions);

		// if (windowDimensions.width < 420 && windowDimensions.height < 870) {
		// 	setOffset({ width: 350, height: 550 });
		// } else {
		// 	setOffset({ width: 400, height: 300 });
		// }

		setOffset({
			width: windowDimensions.width * 0.5,
			height: windowDimensions.height * 0.55,
		});

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [windowDimensions]);

	return (
		<Modal
			show={show}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			contentClassName="modal__content"
			className="modal"
			onHide={onHide}
		>
			<Modal.Header closeButton>
				<Modal.Title
					id="contained-modal-title-vcenter"
					className="modal__header"
				>
					{title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="modal__video">
					<video
						className="video__player"
						width={offset.width}
						height={offset.height}
						controls
						muted
					>
						<source src={src} type="video/mp4" />
					</video>
				</div>
			</Modal.Body>
			{/* <Modal.Footer>
				<Button onClick={onHide}>Close</Button>
			</Modal.Footer> */}
		</Modal>
	);
}

export default VerticallyCenteredModal;
