import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const [isAdmin, isAdminLoading] = useAdmin();
	const location = useLocation();

	if (loading || isAdminLoading) {
		return <progress className="w-56 progress"></progress>;
	}

	if (user && isAdmin) {
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

export default AdminRoute;
