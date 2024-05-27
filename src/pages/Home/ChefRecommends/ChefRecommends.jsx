import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useData from "../../../hooks/useData";
import FoodCard2 from "../../Shared/FoodCard2/FoodCard2";

const ChefRecommends = () => {
	const [menu] = useData(`menu.json`);
	const sliceMenu = menu.slice(0, 3);

	return (
		<section className="mb-12">
			<SectionTitle
				heading={"Chef Recommends"}
				subHeading={"Should Try"}
			></SectionTitle>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{sliceMenu?.map((item) => (
					<FoodCard2
						key={item._id}
						item={item}
					></FoodCard2>
				))}
			</div>
		</section>
	);
};

export default ChefRecommends;
