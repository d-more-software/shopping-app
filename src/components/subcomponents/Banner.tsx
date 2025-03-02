import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
	const getImageHeight = (): number => {
		if (window.innerWidth <= 768) return 250; // Mobile
		if (window.innerWidth <= 1024) return 450; // Tablette
		return 500; // Desktop
	};

	const [imageHeight, setImageHeight] = useState<number>(getImageHeight());

	useEffect(() => {
		const handleResize = () => setImageHeight(getImageHeight());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Carousel className="sm:h-40px">
			<Carousel.Item interval={1500}>
				<img
					className="d-block w-100 "
					style={{
						height: `${imageHeight}px`,
						objectFit: "cover",
						width: "100vw",
					}}
					src="/banner/bannerImage1.webp"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Special Promo</h3>
					<p>Take advantage of our exceptional offers!</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item interval={1000}>
				<img
					className="d-block w-100  "
					style={{
						height: `${imageHeight}px`,
						objectFit: "cover",
						width: "100vw",
					}}
					src="/banner/bannerImage2.webp"
					alt="Second slide"
				/>
				<Carousel.Caption>
					<h3>New products</h3>
					<p>Discover our fresh and organic fruits.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;
