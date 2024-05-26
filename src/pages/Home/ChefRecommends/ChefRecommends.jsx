import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useFetchData from "../../../hooks/useFetchData";
import FoodCard from "../../Shared/FoodCard/FoodCard";

const ChefRecommends = () => {
	const menuItems = useFetchData().slice(0, 3);

	return (
		<section className="mb-12">
			<SectionTitle
				heading={"Chef Recommends"}
				subHeading={"Should Try"}
			></SectionTitle>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{menuItems?.map((item) => (
					<FoodCard
						key={item._id}
						item={item}
					></FoodCard>
				))}
			</div>
		</section>
	);
};

export default ChefRecommends;
