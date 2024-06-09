import { useEffect, useState } from "react";
import { apiURL } from "../utility/utility";

const useFetch = (route) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log(route);
		fetch(`${apiURL}${route}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, [route]);
	return [data, loading];
};

export default useFetch;
