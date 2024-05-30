import SecondaryButton from "../SecondaryButton/SecondaryButton";

const FoodCard = ({ item }) => {
	const { name, image, price, recipe } = item;

	const handleAddToCart = (food) => {
		console.log(food);
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
