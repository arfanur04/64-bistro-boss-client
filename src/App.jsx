import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
	useEffect(() => {
		AOS.init({
			offset: 120,
			delay: 0,
			duration: 400,
			easing: "ease",
			once: false,
			mirror: false,
			anchorPlacement: "top-bottom",
		});

		// Reinitialize AOS on route change
		AOS.refresh();
	}, []);

	return <></>;
}

export default App;
