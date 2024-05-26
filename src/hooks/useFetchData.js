import { useEffect, useState } from "react";

const useFetchData = () => {
	const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		fetch(`menu.json`)
			.then((res) => res.json())
			.then((data) => {
				// const popularItems = data.filter((item) => item.category === "popular");
				setMenuItems(data);
			});
	}, []);
	return menuItems;
};

export default useFetchData;
