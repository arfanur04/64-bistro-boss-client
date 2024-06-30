import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../utility/utility";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Payment = () => {
	return (
		<>
			<Helmet>
				<title>{websiteTitle} - Payment</title>
			</Helmet>
			<div>
				<SectionTitle
					heading={"Payment"}
					subHeading={"Please pay to eat"}
				/>
				<h2 className="text-4xl">Teka o pakhi tumi uira uira aso</h2>
			</div>
		</>
	);
};

export default Payment;
