import { useEffect, useState } from "react";
import { apiURL } from "../utility/utility";

const useMenu = () => {
	const [menu, setMenu] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${apiURL}/menu`)
			.then((res) => res.json())
			.then((data) => {
				setMenu(data);
				setLoading(false);
			});
	}, []);
	return [menu, loading];
};

export default useMenu;
