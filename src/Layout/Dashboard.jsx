import {
	FaAd,
	FaCalendar,
	FaHome,
	FaList,
	FaSearch,
	FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";

const Dashboard = () => {
	const [cart] = useCarts();

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
