import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
	return (
		<div className="grid gap-10 md:grid-cols-3 ">
			{items.map((item) => (
				<FoodCard
					key={item._id}
					item={item}
				/>
			))}
		</div>
	);
};

export default OrderTab;
