import {
	FaAd,
	FaCalendar,
	FaHome,
	FaList,
	FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="flex">
			{/* Dashboard sidebar */}
			<div className="w-64 min-h-svh bg-orange-400">
				<ul className="menu">
					<li>
						<NavLink to={"/dashboard/userHome"}>
							<FaHome />
							My Cart
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
							My Cart
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
				</ul>
			</div>
			{/* Dashboard content */}
			<div className="flex-1">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
