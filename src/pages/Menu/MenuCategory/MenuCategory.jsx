import SectionButton from "../../../components/SectionButton/SectionButton";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
	return (
		<div className="pt-8">
			{title && (
				<Cover
					img={img}
					title={title}
				></Cover>
			)}
			<div className="grid gap-10 mt-16 md:grid-cols-2">
				{items?.map((item) => (
					<MenuItem
						key={item._id}
						item={item}
					></MenuItem>
				))}
			</div>
			<SectionButton text={"ORDER YOUR FAVORITE FOOD"} />
		</div>
	);
};

export default MenuCategory;
