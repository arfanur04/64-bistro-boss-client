import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../utility/utility";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// todo: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

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
						<CheckoutForm />
					</Elements>
				</div>
			</div>
		</>
	);
};

export default Payment;
