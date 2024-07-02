import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log("paymentError", error);
		} else {
			console.log("[paymentMethod]", paymentMethod);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement
				options={{
					style: {
						base: {
							fontSize: "16px",
							color: "#424770",
							"::placeholder": {
								color: "#aab7c4",
							},
						},
						invalid: {
							color: "#9e2146",
						},
					},
				}}
			></CardElement>
			<button
				type="submit"
				disabled={!stripe}
				className="my-4 btn btn-sm btn-primary"
			>
				Pay
			</button>
		</form>
	);
};

export default CheckoutForm;
