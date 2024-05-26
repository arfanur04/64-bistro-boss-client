import { useEffect, useState } from "react";

const useMenuItems = () => {
	const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		fetch(`menu.json`)
			.then((res) => res.json())
			.then((data) => {
				setMenuItems(data);
			});
	}, []);
	return menuItems;
};

export default useMenuItems;
