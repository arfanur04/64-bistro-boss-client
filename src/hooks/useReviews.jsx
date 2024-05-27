import { useEffect, useState } from "react";
import { apiURL } from "../providers/AuthProvider";

const useReviews = () => {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${apiURL}/reviews`)
			.then((res) => res.json())
			.then((data) => {
				setReviews(data);
				setLoading(false);
			});
	}, []);
	return [reviews, loading];
};

export default useReviews;
