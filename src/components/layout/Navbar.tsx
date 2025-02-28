import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBs from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";

import { NavLink, Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";

export default function Navbar() {
	const { cartQuantity, openCart } = useShoppingCart();
	return (
		<NavbarBs sticky="top" bg="dark" data-bs-theme="dark">
			<Container>
				<NavbarBs.Brand as={Link} to="/home">
					Food Store
				</NavbarBs.Brand>
				<Nav className="mr-auto">
					<Nav.Link as={NavLink} to="/home">
						Home
					</Nav.Link>
					<Nav.Link as={NavLink} to="/store">
						Store
					</Nav.Link>
					<Nav.Link as={NavLink} to="/contact">
						Contact
					</Nav.Link>
				</Nav>
				<Button
					style={{ position: "relative" }}
					size="sm"
					variant="outline-light"
					onClick={openCart}
				>
					<FaShoppingCart />
					{cartQuantity !== 0 && (
						<div
							className="rounded-circle bg-danger d-flex justify-content-center align-items-center "
							style={{
								position: "absolute",
								right: 0,
								top: 0,
								width: "1rem",
								height: "1rem",
								transform: "translate(30%, -50%)",
							}}
						>
							{cartQuantity}
						</div>
					)}
				</Button>
			</Container>
		</NavbarBs>
	);
}
