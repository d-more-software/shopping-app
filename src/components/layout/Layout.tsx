import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
	return (
		<>
			<Navbar />
			<div
				style={{
					minHeight: "100vh",
					width: "90vw",
					margin: "auto",
					padding: "1.3rem",
				}}
			>
				<Outlet />
			</div>

			<Footer />
		</>
	);
}
