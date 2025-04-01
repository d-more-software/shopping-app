import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="bg-dark text-light py-4">
			<Container>
				<Row>
					<Col md={4}>
						<h5>Navigation</h5>
						<ul className="list-unstyled">
							<li>
								<Link to="/" className="text-light">
									Home
								</Link>
							</li>
							<li>
								<Link to="/store" className="text-light">
									Store
								</Link>
							</li>

							<li>
								<Link to="/contact" className="text-light">
									Contact
								</Link>
							</li>
						</ul>
					</Col>

					<Col md={4}>
						<h5>Contact</h5>
						<a
							style={{
								textDecoration: "none",
								color: "white",
							}}
							href="mailto:dmore.software@gmail.com"
						>
							Email : dmore.software@gmail.com
						</a>
						{/* <p>Adresse : Turquie</p> */}
						{/* <p>Téléphone : +33 1 23 45 67 89</p> */}
					</Col>

					<Col md={4}>
						<h5>Follow me</h5>
						<div className="d-flex gap-3">
							<a
								style={{ color: "white" }}
								href="https://www.linkedin.com/in/david-more-soft/"
								target="_blank"
							>
								<BsLinkedin />
							</a>
							<a
								style={{ color: "white" }}
								href="https://github.com/d-more-software"
								target="_blank"
							>
								<FaGithub />
							</a>
						</div>
					</Col>
				</Row>

				<hr className="my-3 border-light" />
				<p className="text-center">
					© {new Date().getFullYear()} FreshMarket made by David More
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
