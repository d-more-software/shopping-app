import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useShoppingCart } from "../../context/ShoppingCartContext";


type ProductItemsProps = {
	id: number;
	name: string;
	image: string;
	price: number;
	currency: string;
	category?: string;
	description?: string;
	stock?: number;
};

export default function ProductItem({
	id,
	name,
	image,
	price,
	currency,
}: ProductItemsProps) {
	const {
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
		getItemQuantity,
	} = useShoppingCart();

	
		let quantity = getItemQuantity(id);
	

	return (
		<Card className="h-100">
			<Card.Img
				variant="top"
				src={image}
				height="300px"
				style={{ objectFit: "cover", cursor: "pointer" }}
			/>
			<Card.Body>
				<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
					<span className=""> {name} </span>
					<span className="ms-2 text-muted">
						{" "}
						{currency}
						{price}
					</span>
				</Card.Title>
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button
							className="w-100"
							onClick={() => increaseCartQuantity(id)}
						>
							{" "}
							+ Add To Cart{" "}
						</Button>
					) : (
						<div
							className="d-flex align-items-center flex-column"
							style={{ gap: ".5rem" }}
						>
							<div
								className="d-flex justify-content-center"
								style={{ gap: ".5rem" }}
							>
								<Button
									onClick={() => decreaseCartQuantity(id)}
								>
									-
								</Button>
								<div>
									<span className="fs-3"> {quantity} </span>
									in cart
								</div>
								<Button
									onClick={() => increaseCartQuantity(id)}
								>
									+
								</Button>
							</div>
							<Button
								variant="danger"
								size="sm"
								onClick={() => removeFromCart(id)}
							>
								{" "}
								Remove{" "}
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
}
