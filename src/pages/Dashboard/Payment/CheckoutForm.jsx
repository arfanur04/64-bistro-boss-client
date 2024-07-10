import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
	const [error, setError] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [transactionId, setTransactionId] = useState("");
	const stripe = useStripe();
	const elements = useElements();
	const axiosSecure = useAxiosSecure();
	const { user } = useAuth();
	const [cart] = useCart();
	const totalPrice = cart.reduce((total, item) => total + +item.price, 0);

	useEffect(() => {
		axiosSecure
			.post("/create-payment-intent", {
				price: totalPrice,
			})
			.then((res) => {
				console.log(res.data.clientSecret);
				setClientSecret(res.data.clientSecret);
			});
	}, [axiosSecure, totalPrice]);

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
			setError(error.message);
		} else {
			console.log("[paymentMethod]", paymentMethod);
			setError("");
		}

		// confirm payment
		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						email: user?.email || "anonymous",
						name: user?.displayName | "anonymous",
					},
				},
			});

		if (confirmError) {
			console.log("confirmError", confirmError);
			setError(confirmError.message);
		} else {
			console.log("paymentIntent", paymentIntent);
			if (paymentIntent.status === "succeeded") {
				console.log("transaction (paymentIntent) id", paymentIntent.id);
				setTransactionId(paymentIntent.id);
			}
			setError("");
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
				disabled={!stripe || !clientSecret}
				className="my-4 btn btn-sm btn-primary"
			>
				Pay
			</button>
			<p className="text-red-600">{error}</p>
			{transactionId && (
				<p className="text-green-600">
					Your Transaction Id:{" "}
					<span className="font-bold">{transactionId}</span>
				</p>
			)}
		</form>
	);
};

export default CheckoutForm;
