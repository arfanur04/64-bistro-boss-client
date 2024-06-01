import { Link } from "react-router-dom";

const SecondaryButton = ({ text, route, handleAddToCart, item }) => {
	return (
		<div className="my-4 text-center">
			<Link to={route ? route : ""}>
				<button
					onClick={item ? () => handleAddToCart(item) : handleAddToCart}
					className="mt-4 text-center border-0 border-b-4 btn btn-outline text-[#BB8506] bg-[#E8E8E8] text-xl font-medium hover:text-[#BB8506]"
				>
					{text ? text : "Secondary Button"}
				</button>
			</Link>
		</div>
	);
};

export default SecondaryButton;
