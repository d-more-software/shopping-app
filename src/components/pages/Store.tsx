import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import productItems from "../../data/products.json";
import ProductItem from "../subcomponents/ProductItem";

export default function Store() {
	return (
		<div 	style={{
            minHeight: "100vh",
            width: "90vw",
            margin: "auto",
            padding: "1.3rem",
        }}>
			<h1>Store</h1>
			<Row xs={1} md={2} lg={3} className="g-3">
				{productItems.map((item) => (
					<Col key={item.id}>
						<ProductItem {...item} />
					</Col>
				))}
			</Row>
		</div>
	);
}
