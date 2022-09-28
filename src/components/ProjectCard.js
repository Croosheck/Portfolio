import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({
	title,
	description,
	imgUrl,
	onClick,
	onDemoClick,
	onGitClick,
	md = 4,
}) {
	return (
		<Col sm={6} md={md} onClick={onClick}>
			<div className="proj-imgbx">
				<img src={imgUrl} alt="cardImg" />
				<div className="proj-txtx">
					<h4>{title}</h4>
					<span>{description}</span>
					<div className={"btns__container"}>
						<button className={"btns__button"} onClick={onGitClick}>
							<h5>GIT</h5>
						</button>
						<button className={"btns__button"} onClick={onDemoClick}>
							<h5>DEMO</h5>
						</button>
					</div>
				</div>
			</div>
		</Col>
	);
}

export default ProjectCard;
