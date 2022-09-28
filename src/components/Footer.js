import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/img/BMine.png";
import linkedin from "../assets/img/nav-icon1.svg";
import github from "../assets/img/githubNav.png";
// import facebook from "../assets/img/nav-icon2.svg";
// import instagram from "../assets/img/nav-icon3.svg";

function Footer() {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<MailchimpForm />
					<Col size={12} sm={6} md={6} lg={6} xs={10}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/krystian-kruszelnicki-bmine/"
							>
								<img src={linkedin} alt="linkedIn" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/Croosheck"
							>
								<img src={github} alt="github" />
							</a>
							{/* <a>
								<img src={facebook} alt="facebook" />
							</a> */}
							{/* <a>
								<img src={instagram} alt="instagram" />
							</a> */}
						</div>
						<p>Copyright 2022. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
