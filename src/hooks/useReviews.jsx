import { useEffect, useState } from "react";
import { apiURL } from "../utility/utility";

const useReviews = () => {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${apiURL}/reviews`)
			.then((res) => {
				if (res.status === 500) {
					setLoading(false);
				}
				res.json();
			})
			.then((data) => {
				setReviews(data);
				setLoading(false);
			});
	}, []);
	return [reviews, loading];
};

export default useReviews;
