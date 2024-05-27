import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useData from "../../../hooks/useData";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
	// const [menu] = useMenu();
	const [menu] = useData(`menu.json`);
	const popular = menu.filter((item) => item.category === "popular");

	return (
		<section className="mb-12">
			<SectionTitle
				heading={"From Our Menu"}
				subHeading={"Popular Items"}
			></SectionTitle>
			<div className="grid gap-10 md:grid-cols-2">
				{popular?.map((item) => (
					<MenuItem
						key={item._id}
						item={item}
					></MenuItem>
				))}
			</div>
			<div className="text-center">
				<button className="mt-4 text-center border-0 border-b-4 btn btn-outline">
					View Full Menu
				</button>
			</div>
		</section>
	);
};

export default PopularMenu;
