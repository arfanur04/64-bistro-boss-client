import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

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
			</div>
		</>
	);
};

export default Home;
