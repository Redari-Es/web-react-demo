import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<MailChimpForm />
					<Col size={12} sm={6}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a href="#">
								<img src={navIcon1} alt="Icon" />
							</a>
							<a href="#">
								<img src={navIcon2} alt="Icon" />
							</a>
							<a href="#">
								<img src={navIcon3} alt="Icon" />
							</a>
						</div>
						<p>
							Copyright &copy; 2021 - 2023
							<a href="http://redaries.xyz/">Redari-ES的小行星</a>
							All Rights Reserved.
						</p>
						<p>
							<a href="https://beian.miit.gov.cn" target="_blank">
								粤ICP备2021174112号
							</a>
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
