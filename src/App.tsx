import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import Contact from "./components/pages/Contact";
import NotFound from "./components/subcomponents/NotFound";

import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Navigate to="home" /> },
			{ path: "home", element: <Home /> },
			{ path: "store", element: <Store /> },
			{ path: "contact", element: <Contact /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
