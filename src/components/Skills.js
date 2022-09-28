import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import firebase from "../assets/img/firebase.png";
import restapi from "../assets/img/restapi.png";
import redux from "../assets/img/redux.svg";
import json from "../assets/img/json.png";
import typescript from "../assets/img/typescript.png";
import nextjs from "../assets/img/nextjs.png";
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import github from "../assets/img/github.png";

import colorSharp from "../assets/img/color-sharp.png";

function Skills() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
			slidesToSlide: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 664 },
			items: 2,
			slidesToSlide: 2,
		},
		mobile: {
			breakpoint: { max: 664, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<Container>
				<Row>
					<Col>
						<div className="skill-bx">
							<h2>Skills</h2>
							{/* <p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p> */}
							<Carousel
								responsive={responsive}
								infinite={true}
								className="skill-slider"
								containerClass="carousel-container"
								// swipeable={false}
								// draggable={false}
							>
								<div className="item">
									<img src={restapi} alt="skillImage" />
									<h3>REST API</h3>
									<h5>Skilled</h5>
								</div>
								<div className="item">
									<img src={firebase} alt="skillImage" />
									<h3>Firebase SDK</h3>
									<h5>Skilled</h5>
								</div>
								<div className="item">
									<img src={github} alt="skillImage" />
									<h3>Git Version Control</h3>
									<h5>Beginner</h5>
								</div>
								<div className="item">
									<img src={redux} alt="skillImage" />
									<h3>Redux Toolkit</h3>
									<h5>Skilled</h5>
								</div>
								<div className="item">
									<img src={json} alt="skillImage" />
									<h3>JSON</h3>
									<h5>Skilled</h5>
								</div>
								<div className="item">
									<img src={typescript} alt="skillImage" />
									<h3>TypeScript</h3>
									<h5>Beginner</h5>
								</div>
								<div className="item">
									<img src={nextjs} alt="skillImage" />
									<h3>NextJS</h3>
									<h5>Beginner</h5>
								</div>
								<div className="item">
									<img src={css} alt="skillImage" />
									<h3>CSS</h3>
									<h5>Skilled</h5>
								</div>
								<div className="item">
									<img src={html} alt="skillImage" />
									<h3>HTML</h3>
									<h5>Skilled</h5>
								</div>
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
			<img
				className="background-image-left"
				src={colorSharp}
				alt="colorSharp"
			/>
		</section>
	);
}

export default Skills;
