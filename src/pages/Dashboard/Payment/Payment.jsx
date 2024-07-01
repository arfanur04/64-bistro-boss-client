import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../utility/utility";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// todo: add publishable key
const stripePromise = loadStripe("");

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
				<div>
					<Elements stripe={stripePromise}>
						
					</Elements>
				</div>
			</div>
		</>
	);
};

export default Payment;
