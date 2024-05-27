import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
	const [menu] = useMenu();
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
			<PrimaryButton text={"View Full Menu"} />
		</section>
	);
};

export default PopularMenu;
