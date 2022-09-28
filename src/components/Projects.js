import React, { useEffect, useState } from "react";

import jsp1 from "../assets/img/jsp1.jpg";
import jsp2 from "../assets/img/jsp2.jpg";
import jsp3 from "../assets/img/jsp3.jpg";
import jsp4 from "../assets/img/jsp4.jpg";
import jsp5 from "../assets/img/jsp5.jpg";

import rjsp1 from "../assets/img/rjsp1.jpg";
import rjsp2 from "../assets/img/rjsp2.jpg";
import rjsp3 from "../assets/img/rjsp3.jpg";
import rjsp4 from "../assets/img/rjsp4.jpg";

import rnp1 from "../assets/img/rnp1.jpg";
import rnp2 from "../assets/img/rnp2.jpg";
import rnp3 from "../assets/img/rnp3.jpg";
import rnp4 from "../assets/img/rnp4.jpg";

import rnp1Vid from "../assets/vids/rnp1.mp4";
import rnp2Vid from "../assets/vids/rnp2.mp4";
import rnp3Vid from "../assets/vids/rnp3.mp4";
import rnp4Vid from "../assets/vids/rnp4.mp4";

import colorSharp2 from "../assets/img/color-sharp2.png";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
// import { Tab } from "bootstrap";

import ProjectCard from "./ProjectCard";
import VerticallyCenteredModal from "./VerticallyCenteredModal";

function Projects() {
	const [offset, setOffset] = useState(500);
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);
	const [partialVisibility, setPartialVisibility] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalDetails, setModalDetails] = useState({
		video: null,
		title: null,
	});

	const jsProjects = [
		{
			title: "Countries Flags",
			description: "Coords based app",
			imgUrl: jsp1,
			demoUrl: "https://mycountries-flags.netlify.app/",
			gitUrl:
				"https://github.com/Croosheck/JavaScript/tree/master/Countries-Promises",
		},
		{
			title: "Pig Game",
			description: "2-6: adds up; 1: player switch. Limit: 100.",
			imgUrl: jsp2,
			demoUrl: "https://mypig-game-app.netlify.app/",
			gitUrl: "https://github.com/Croosheck/JavaScript/tree/master/Pig-Game",
		},
		{
			title: "Bankist Website",
			description: "Promoting Page",
			imgUrl: jsp3,
			demoUrl: "https://mybankist-site.netlify.app/",
			gitUrl:
				"https://github.com/Croosheck/JavaScript/tree/master/Bankist-site",
		},
		{
			title: "Bankist Account App",
			description: "Ac1: js/1111; Ac2: jd/2222, Ac3: stw/3333",
			imgUrl: jsp4,
			demoUrl: "https://mybankist-app.netlify.app/",
			gitUrl: "https://github.com/Croosheck/JavaScript/tree/master/Bankist-app",
		},
		{
			title: "Mapty App",
			description: "Cycling & running locations",
			imgUrl: jsp5,
			demoUrl: "https://mymapty-site.netlify.app/",
			gitUrl: "https://github.com/Croosheck/JavaScript/tree/master/Mapty-app",
		},
	];

	const reactjsProjects = [
		{
			title: "Croose Website",
			description: "Travel Website",
			imgUrl: rjsp1,
			demoUrl: "https://croose.netlify.app/",
			gitUrl:
				"https://github.com/Croosheck/ReactJS/tree/master/react-travel-website",
		},
		{
			title: "Deliciouss App",
			description: "Recipe Finder",
			imgUrl: rjsp2,
			demoUrl: "https://deliciouss-app.netlify.app/",
			gitUrl: "https://github.com/Croosheck/ReactJS/tree/master/deliciouss-app",
		},

		{
			title: "Authentication Page",
			description: "Authentication with help of Firebase",
			imgUrl: rjsp3,
			demoUrl: "https://authentication-react-website.netlify.app/",
			gitUrl:
				"https://github.com/Croosheck/ReactJS/tree/master/07-authentication",
		},
		{
			title: "Delivery Website",
			description: "Ordering system with Firebase Real-time Database",
			imgUrl: rjsp4,
			demoUrl: "https://mydelivery-site.netlify.app/",
			gitUrl: "https://github.com/Croosheck/ReactJS/tree/master/Food-delivery",
		},
	];

	const rnProjects = [
		{
			title: "Guess My Number",
			description: "As the name says ;-)",
			imgUrl: rnp1,
			video: rnp1Vid,
			gitUrl:
				"https://github.com/Croosheck/React-Native/tree/master/Guess-My-Number",
		},
		{
			title: "Meals App",
			description: "Favorite recipe finder",
			imgUrl: rnp2,
			video: rnp2Vid,
			gitUrl: "https://github.com/Croosheck/React-Native/tree/master/Meals-App",
		},
		{
			title: "Expenses App",
			description: "Expenses manager",
			imgUrl: rnp3,
			video: rnp3Vid,
			gitUrl:
				"https://github.com/Croosheck/React-Native/tree/master/Expenses-App",
		},
		{
			title: "Favorite Places",
			description:
				"Firebase SDK backend based app (Authentication, Firestore & Storage) with Google Maps API and Redux Toolkit",
			imgUrl: rnp4,
			video: rnp4Vid,
			gitUrl:
				"https://github.com/Croosheck/React-Native/tree/master/Favorite-Places",
		},
	];

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

		if (windowDimensions.width < 576) {
			setOffset(800);
			setPartialVisibility(true);
		} else {
			setOffset(800);
			setPartialVisibility(false);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [windowDimensions]);

	const openInNewTab = (url) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	function onDemoClickHandler(project) {
		setShowModal(true);
		setModalDetails({
			video: project.video,
			title: project.title,
		});
	}

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility
							offset={offset}
							partialVisibility={partialVisibility}
						>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__lightSpeedInRight"
											: "animate__animated animate__fadeOut"
									}
								>
									<h2>Projects</h2>
									{/* <p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry.
									</p> */}
									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Nav
											variant="pills"
											className="nav-pills mb-5 justify-content-center align-items-center"
											id="pills-tab"
										>
											<Nav.Item>
												<Nav.Link eventKey="first">Vanilla JS</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">ReactJS</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="third">React Native</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id="slideInUp"
											className={
												isVisible
													? "animate__animated animate__fadeIn"
													: "animate__animated animate__lightSpeedOutLeft"
											}
										>
											<Tab.Pane eventKey="first">
												<Row>
													{jsProjects.map((project, index) => {
														return (
															<ProjectCard
																key={index}
																{...project}
																onDemoClick={() =>
																	openInNewTab(project.demoUrl)
																}
																onGitClick={() => openInNewTab(project.gitUrl)}
															/>
														);
													})}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<Row>
													{reactjsProjects.map((project, index) => {
														return (
															<ProjectCard
																key={index}
																{...project}
																onDemoClick={() =>
																	openInNewTab(project.demoUrl)
																}
																onGitClick={() => openInNewTab(project.gitUrl)}
															/>
														);
													})}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<Row>
													{rnProjects.map((project, index) => {
														return (
															<ProjectCard
																key={index}
																{...project}
																md={3}
																onDemoClick={() => onDemoClickHandler(project)}
																onGitClick={() => openInNewTab(project.gitUrl)}
															/>
														);
													})}
												</Row>
												{/* <h2>Soon...</h2> */}
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img
				className="background-image-right"
				src={colorSharp2}
				alt="backgroundImageRight"
			/>
			<VerticallyCenteredModal
				show={showModal}
				onHide={() => setShowModal(false)}
				title={modalDetails.title}
				src={modalDetails.video}
			/>
		</section>
	);
}

export default Projects;
