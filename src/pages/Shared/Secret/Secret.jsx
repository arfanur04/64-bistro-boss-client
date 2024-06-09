import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../utility/utility";

const Secret = () => {
	return (
		<>
			<Helmet>
				<title>{websiteTitle} - Secret</title>
			</Helmet>
			<div>
				<h2>This is Secret</h2>
			</div>
		</>
	);
};

export default Secret;
