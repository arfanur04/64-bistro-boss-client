import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
	const location = useLocation();

	const noHeaderFooter =
		location.pathname.includes("login") ||
		location.pathname.includes("sign-up");
	return (
		<div>
			<NavBar />
			{/* {noHeaderFooter || <NavBar />} */}
			<Outlet />
			{noHeaderFooter || <Footer />}
		</div>
	);
};

export default Main;
