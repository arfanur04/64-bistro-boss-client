const FoodCard2 = ({ item }) => {
	const { image, name, recipe } = item;
	return (
		<div className="rounded-none shadow-xl card bg-base-100">
			<figure className="">
				<img
					src={image}
					alt="Shoes"
					className="w-full "
				/>
			</figure>
			<div className="items-center text-center bg-[#F3F3F3] card-body">
				<h2 className="card-title">{name}</h2>
				<p>{recipe}</p>
				<div className="card-actions">
					<button className="border border-b-4 border-b-orange-400 btn ">
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard2;
