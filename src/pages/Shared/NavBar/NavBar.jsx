import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.error("error: ", error));
	};

	const navOptions = (
		<>
			<li>
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<li>
				<NavLink to={"/menu"}>Our Menu</NavLink>
			</li>
			<li>
				<NavLink to={"/order/salad"}>Order Food</NavLink>
			</li>
			<li>
				<NavLink to={"/secret"}>Secret</NavLink>
			</li>
			<li>
				<NavLink to={"/"}>
					<button className="btn btn-sm">
						<FaShoppingCart className="mr-2" />
						<div className="badge badge-secondary">+0</div>
					</button>
				</NavLink>
			</li>

			{user ? (
				<>
					{/* user image */}
					<div>
						<img
							className="btn btn-sm btn-circle"
							src={user?.photoURL}
							alt=""
							data-tooltip-id="my-tooltip"
							data-tooltip-html={`${user?.displayName},<br />${user?.email}`}
						/>
					</div>
					<button
						onClick={handleLogOut}
						className="btn btn-ghost btn-sm"
					>
						Logout
					</button>
				</>
			) : (
				<>
					<li>
						<NavLink to={"/login"}>Login</NavLink>
					</li>
					<li>
						<NavLink to={"/sign-up"}>SignUp</NavLink>
					</li>
				</>
			)}
		</>
	);

	return (
		<>
			<div className="fixed z-10 max-w-screen-xl text-white bg-black navbar bg-opacity-30">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navOptions}
						</ul>
					</div>
					<Link
						to={"/"}
						className="text-xl btn btn-ghost"
					>
						Bistro Boss
					</Link>
				</div>
				<div className="hidden navbar-center lg:flex">
					<ul className="items-center px-1 menu menu-horizontal">
						{navOptions}
					</ul>
				</div>
				<div className="navbar-end">
					<a className="btn">Button</a>
				</div>
			</div>
		</>
	);
};

export default NavBar;
