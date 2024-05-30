import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Tooltip } from "react-tooltip";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<HelmetProvider>
				<div className="max-w-screen-xl mx-auto">
					<App />
					<RouterProvider router={router} />
					<Tooltip id="my-tooltip" />
				</div>
			</HelmetProvider>
		</AuthProvider>
	</React.StrictMode>
);
