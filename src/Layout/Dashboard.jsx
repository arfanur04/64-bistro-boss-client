import {
	FaBook,
	FaCalendar,
	FaEnvelope,
	FaHome,
	FaList,
	FaSearch,
	FaShoppingCart,
	FaSignOutAlt,
	FaUsers,
	FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";

const Dashboard = () => {
	const { logOut } = useAuth();
	const [cart] = useCart();
	const navigate = useNavigate();

	// todo: get isAdmin value from the database
	const [isAdmin] = useAdmin();

	return (
		<div className="flex">
			{/* Dashboard sidebar */}
			<div className="w-64 bg-orange-400 min-h-svh">
				<ul className="menu">
					{isAdmin ? (
						/* ------------------------------- admin user */
						<>
							<li>
								<NavLink to={"/dashboard/adminHome"}>
									<FaHome />
									Admin Home
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/addItems"}>
									<FaUtensils />
									Add Items
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/manageItems"}>
									<FaList />
									Manage Items
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/bookings"}>
									<FaBook />
									Manage Bookings
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/users"}>
									<FaUsers />
									All Users
								</NavLink>
							</li>
						</>
					) : (
						/* ------------------------------- normal user */
						<>
							<li>
								<NavLink to={"/dashboard/userHome"}>
									<FaHome />
									User Home
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/reservation"}>
									<FaCalendar />
									Reservation
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/cart"}>
									<FaShoppingCart />
									My Cart ({cart?.length})
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/addAReview"}>
									<FaBook />
									Add a review
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/myBooking"}>
									<FaList />
									My Booking
								</NavLink>
							</li>
						</>
					)}
					<div className="divider"></div>
					{/* -------------------------- shared nav links */}
					<>
						<li>
							<NavLink to={"/"}>
								<FaHome />
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to={"/menu"}>
								<FaList />
								Menu
							</NavLink>
						</li>
						<li>
							<NavLink to={"/order/salad"}>
								<FaSearch />
								Order Food
							</NavLink>
						</li>
						<li>
							<NavLink to={"/order/salad"}>
								<FaEnvelope />
								Contact (order food)
							</NavLink>
						</li>
						<li>
							<NavLink to={"/dashboard/cart"}>
								<FaEnvelope />
								Cart (Temporary)
							</NavLink>
						</li>
						<li
							onClick={() => {
								logOut()
									.then(() => navigate("/"))
									.catch((error) => console.error("error: ", error));
							}}
						>
							<div>
								<FaSignOutAlt />
								LogOut
							</div>
						</li>
					</>
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
