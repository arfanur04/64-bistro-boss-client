import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../providers/AuthProvider";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/salad-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useData from "../../../hooks/useData";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
	const [menu] = useData(`menu.json`);
	const desserts = menu.filter((item) => item.category === "dessert");
	const soup = menu.filter((item) => item.category === "soup");
	const salad = menu.filter((item) => item.category === "salad");
	const pizza = menu.filter((item) => item.category === "pizza");
	const offered = menu.filter((item) => item.category === "offered");

	return (
		<div>
			<Helmet>
				<title>{websiteTitle} - Menu</title>
			</Helmet>

			{/* ------------------------------- main cover ------------------------------- */}
			<Cover
				img={menuBg}
				title={"Our Menu"}
			/>

			<SectionTitle
				subHeading={"Don't Miss"}
				heading={"Today's Offer"}
			/>

			{/* --------------------------- offered menu items --------------------------- */}
			<MenuCategory items={offered} />

			{/* --------------------------- dessert menu items --------------------------- */}
			<MenuCategory
				items={desserts}
				title={"dessert"}
				img={desertImg}
			/>

			{/* ---------------------------------- pizza --------------------------------- */}
			<MenuCategory
				items={pizza}
				title={"pizza"}
				img={pizzaImg}
			/>

			{/* ---------------------------------- soup --------------------------------- */}
			<MenuCategory
				items={soup}
				title={"soup"}
				img={soupImg}
			/>

			{/* ---------------------------------- salad --------------------------------- */}
			<MenuCategory
				items={salad}
				title={"salad"}
				img={saladImg}
			/>
		</div>
	);
};

export default Menu;
