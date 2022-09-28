import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

function Banner() {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 180);

	const [offset, setOffset] = useState();
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	const toRotate = ["Frontend Developer", "Mobile Developer", "UI/UX Designer"];

	const period = 1000;

	function tick() {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta(70);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		}

		if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(200);
		}
	}

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => clearInterval(ticker);
	});

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

		if (windowDimensions.width < 768 && windowDimensions.height < 600) {
			setOffset(350);
		} else {
			setOffset(600);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [windowDimensions]);

	return (
		<Router>
			<section className="banner" id="home">
				<Container>
					<Row className="align-items-center">
						<Col xc={12} md={6} xl={7}>
							<TrackVisibility offset={offset}>
								{({ isVisible }) => (
									<div
										className={
											isVisible
												? "animate__animated animate__bounce  animate__fadeIn"
												: "animate__animated animate__bounceOut  animate__fadeOut"
										}
									>
										<span className="tagline">Welcome to my Portfolio</span>
										<h1>
											{`Hi, I am Krystian.`}
											<br />
											<div className="wrap__container">
												<span className="wrap">{text}</span>
											</div>
										</h1>
										{/* <p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p> */}
										<HashLink to="#connect">
											<button>
												Let's Connect <ArrowRightCircle size={25} />
											</button>
										</HashLink>
									</div>
								)}
							</TrackVisibility>
						</Col>
						<Col xc={12} md={6} xl={5}>
							<img src={headerImg} alt="Header Img" />
						</Col>
					</Row>
				</Container>
			</section>
		</Router>
	);
}

export default Banner;
