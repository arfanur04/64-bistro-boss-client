import SecondaryButton from "../SecondaryButton/SecondaryButton";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../../providers/AuthProvider";

const FoodCard = ({ item }) => {
	const { name, image, price, recipe, _id } = item;
	const { user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const handleAddToCart = (item) => {
		if (user && user.email) {
			// send cart item to database
			console.log(item, user?.email);
			const cartItem = {
				menuId: _id,
				email: user.email,
				name,
				image,
				price,
			};

			axios.post(apiURL + "/carts", cartItem).then((res) => {
				console.log(res.data);
				if (res?.data?.insertedId) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: `${name} added your cart`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
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
					navigate("/login", { state: { from: location } });
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
