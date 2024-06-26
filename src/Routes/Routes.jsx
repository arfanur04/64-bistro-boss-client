import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import HomeRoute from "./HomeRoute";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "menu",
				element: <Menu />,
			},
			{
				path: "order/:category",
				element: <Order />,
			},
			{
				path: "login",
				element: (
					<HomeRoute>
						<Login />
					</HomeRoute>
				),
			},
			{
				path: "sign-up",
				element: (
					<HomeRoute>
						<SignUp />
					</HomeRoute>
				),
			},
			{
				path: "secret",
				element: (
					<PrivateRoute>
						<Secret />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "dashboard",
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		errorElement: <ErrorPage />,
		children: [
			//: normal user routes
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "payment",
				element: <Payment />,
			},
			//: admin only routes
			{
				path: "addItems",
				element: (
					<AdminRoute>
						<AddItems />
					</AdminRoute>
				),
			},
			{
				path: "manageItems",
				element: (
					<AdminRoute>
						<ManageItems />
					</AdminRoute>
				),
			},
			{
				path: "updateItem/:id",
				element: (
					<AdminRoute>
						<UpdateItem />
					</AdminRoute>
				),
				// loader: ({ params }) => fetch(`${apiURL}/menu/${params.id}`),
			},
			{
				path: "users",
				element: (
					<AdminRoute>
						<AllUsers />
					</AdminRoute>
				),
			},
		],
	},
]);
