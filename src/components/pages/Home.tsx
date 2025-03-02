import Banner from "../subcomponents/Banner";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div
				style={{
					minHeight: "100vh",
					// width: "50vw",
					// margin: "auto",
					// padding: "1.3rem",
				}}
			>
				<Banner />
				<Container className="text-center py-5">
					<h1>Welcome to FreshMarket</h1>
					<p className="lead">
						Discover a wide selection of fresh and organic fruits
						delivered straight to your doorstep. Enjoy the best
						quality at unbeatable prices.
					</p>
					<Button  variant="success" size="lg" >
						<Link style={{color:"white", textDecoration:"none" }} to="/store">Visit the Store</Link>
					</Button>
				</Container>
			</div>
		</>
	);
}
