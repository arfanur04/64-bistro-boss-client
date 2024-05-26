import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../providers/AuthProvider";

const Menu = () => {
	return (
		<>
			<Helmet>
				<title>{websiteTitle} - Menu</title>
			</Helmet>
			<div>
				<h2>This is Menu</h2>
			</div>
		</>
	);
};

export default Menu;
