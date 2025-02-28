import { Button, Stack } from "react-bootstrap";
import ProductItem from "../../data/products.json";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type CartItemProps = {
	id: number;
	quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
	const { removeFromCart } = useShoppingCart();
	 const item = ProductItem.find((i) => i.id === id);
    console.log(item);
    
	if (item === null) return null;

	return (
		<Stack
			direction="horizontal"
			gap={2}
			className="d-flex align-items-center"
		>
			<img
				src={item?.image}
				alt={item?.name}
				style={{ width: "125px", height: "75px", objectFit: "cover" }}
			/>

			<div className="me-auto">
				<div>
					{item?.name}{" "}
					{quantity > 1 && (
						<span
							className="text-muted"
							style={{ fontSize: ".65rem" }}
						>
							x{quantity}
						</span>
					)}
				</div>
				<div className="text-muted" style={{ fontSize: ".75rem" }}>
                {item?.currency} {item?.price}
				</div>
			</div>
			<div> {item?.currency} {item?.price ? item.price * quantity : null} </div>
			<Button
				variant="outline-danger"
				size="sm"
				onClick={() => {
					item?.id ? removeFromCart(item?.id) : null;
				}}
			>
				&times;
			</Button>
		</Stack>
	);
}
