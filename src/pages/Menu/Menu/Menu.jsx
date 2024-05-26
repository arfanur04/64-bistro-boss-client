import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../providers/AuthProvider";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

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
			<PopularMenu></PopularMenu>
			<Cover
				img={menuBg}
				title={"Our Menu"}
			></Cover>
			<PopularMenu></PopularMenu>
			<Cover
				img={menuBg}
				title={"Our Menu"}
			></Cover>
			<PopularMenu></PopularMenu>
			<div>
				<h2>This is Menu</h2>
			</div>
		</>
	);
};

export default Menu;
