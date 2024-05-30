import SecondaryButton from "../SecondaryButton/SecondaryButton";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
	const { name, image, price, recipe } = item;
	const { user } = useAuth();
	const navigate = useNavigate();

	const handleAddToCart = (food) => {
		console.log(food, user?.email);
		if (user && user.email) {
			// send cart item to database
		} else {
			Swal.fire({
				title: "You are not logged in",
				text: "Please login to add to the cart",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, login",
			}).then((result) => {
				if (result.isConfirmed) {
					// send to the user to the login page
					navigate("/login");
				}
			});
		}
	};

	return (
		<div className="shadow-xl card bg-base-100">
			<figure>
				<img
					src={image}
					alt="Shoes"
				/>
			</figure>
			<p className="absolute right-0 px-4 mt-4 mr-4 text-white bg-slate-900">
				${price}
			</p>
			<div className="flex flex-col items-center card-body">
				<h2 className="card-title">{name}</h2>
				<p>{recipe}</p>
				<div className="justify-end card-actions">
					<SecondaryButton
						handleAddToCart={handleAddToCart}
						item={item}
						text={"Add to Cart"}
					/>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
