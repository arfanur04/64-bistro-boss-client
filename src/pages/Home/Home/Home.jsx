import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import CallUs from "../CallUs/CallUs";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>
					{/* {websiteTitle} */}
					Bistro Boss
				</title>
			</Helmet>
			<div>
				<Banner />
				<Category />
				<PopularMenu />
				<CallUs />
				<ChefRecommends />
				<Featured />
				<Testimonials />
			</div>
		</>
	);
};

export default Home;
