import { Helmet } from "react-helmet-async";

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
				<h2>This is Home</h2>
			</div>
		</>
	);
};

export default Home;
