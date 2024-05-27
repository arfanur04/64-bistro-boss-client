import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../providers/AuthProvider";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
	return (
		<>
			<Helmet>
				<title>{websiteTitle} - Menu</title>
			</Helmet>
			<Cover
				img={menuBg}
				title={"Our Menu"}
			></Cover>
		</>
	);
};

export default Menu;
