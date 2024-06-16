import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const HomeRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return <progress className="w-56 progress"></progress>;
	}

	if (!user) {
		return children;
	}

	return (
		<Navigate
			to={"/"}
			state={{ from: location }}
			replace
		/>
	);
};

export default HomeRoute;
