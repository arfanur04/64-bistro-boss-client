import {
	FaBook,
	FaEnvelope,
	FaHome,
	FaList,
	FaSearch,
	FaSignOutAlt,
	FaUsers,
	FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { logoutFn } from "../utility/firebaseMethod";

const Dashboard = () => {
	const { logOut } = useAuth();
	// const [cart] = useCarts();

	// todo: get isAdmin value from the database
	const isAdmin = true;

	return (
		<div className="flex">
			{/* Dashboard sidebar */}
			<div className="w-64 min-h-svh bg-orange-400">
				<ul className="menu">
					{isAdmin ? (
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
						<></>
					)}
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
					{/* <li>
						<NavLink to={"/dashboard/cart"}>
							<FaShoppingCart />
							Cart
						</NavLink>
					</li> */}
					<li>
						<NavLink to={"/order/salad"}>
							<FaEnvelope />
							Contact (order food)
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
