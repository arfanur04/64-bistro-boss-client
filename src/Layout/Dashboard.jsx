import {
	FaAd,
	FaCalendar,
	FaEnvelope,
	FaHome,
	FaList,
	FaSearch,
	FaShoppingCart,
	FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import useAuth from "../hooks/useAuth";
import { logoutFn } from "../utility/firebaseMethod";

const Dashboard = () => {
	const { logOut } = useAuth();
	const [cart] = useCarts();

	// todo: get isAdmin value from the database
	// const isAdmin = true;

	return (
		<div className="flex">
			{/* Dashboard sidebar */}
			<div className="w-64 min-h-svh bg-orange-400">
				<ul className="menu">
					<li>
						<NavLink to={"/dashboard/userHome"}>
							<FaHome />
							User Home
						</NavLink>
					</li>
					<li>
						<NavLink to={"/dashboard/userReservation"}>
							<FaCalendar />
							Reservation
						</NavLink>
					</li>
					<li>
						<NavLink to={"/dashboard/cart"}>
							<FaShoppingCart />
							My Cart ({cart.length})
						</NavLink>
					</li>
					<li>
						<NavLink to={"/dashboard/review"}>
							<FaAd />
							Add a Review
						</NavLink>
					</li>
					<li>
						<NavLink to={"/dashboard/bookings"}>
							<FaList />
							My Bookings
						</NavLink>
					</li>
					{/* ----------------------------------------------- */}
					{/* shared nav links */}
					<div className="divider"></div>
					<li>
						<NavLink to={"/"}>
							<FaHome />
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to={"/order/salad"}>
							<FaSearch />
							Menu
						</NavLink>
					</li>
					<li>
						<NavLink to={"/order/salad"}>
							<FaEnvelope />
							Contact
						</NavLink>
					</li>
					<li onClick={() => logoutFn(logOut)}>
						<div>
							<FaSignOutAlt />
							LogOut
						</div>
					</li>
				</ul>
			</div>
			{/* Dashboard content */}
			<div className="flex-1 p-8">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
