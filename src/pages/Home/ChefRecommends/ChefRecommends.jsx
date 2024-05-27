import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../Shared/FoodCard/FoodCard";

const ChefRecommends = () => {
	const [menu] = useMenu();
	const sliceMenu = menu.slice(0, 3);

	return (
		<section className="mb-12">
			<SectionTitle
				heading={"Chef Recommends"}
				subHeading={"Should Try"}
			></SectionTitle>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{sliceMenu?.map((item) => (
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
