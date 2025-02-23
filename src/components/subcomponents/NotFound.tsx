import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 5000);
	}, []);

	return (
		<div>
			Page not found. You are about to be redirected to landing page in a
			couple of seconds.
		</div>
	);
}
