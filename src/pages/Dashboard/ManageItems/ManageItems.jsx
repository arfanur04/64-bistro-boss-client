import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../utility/utility";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import FaTrashAltC from "../../IconComponent/FaTrashAltC";
import FaEditC from "../../IconComponent/FaEditC";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
	const [menu, , refetch] = useMenu();
	const axiosSecure = useAxiosSecure();

	const handleDeleteItem = (item) => {
		try {
			Swal.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, delete it!",
			}).then(async (result) => {
				if (result.isConfirmed) {
					const res = await axiosSecure.delete(`/menu/${item._id}`);
					// console.log(res.data);
					if (res.data.deletedCount > 0) {
						// refetch to update the ui
						refetch();

						Swal.fire({
							title: "Deleted",
							text: `${item.name} has been deleted`,
							icon: "success",
							showConfirmButton: false,
							timer: 1500,
						});
					}
				}
			});
		} catch (error) {
			console.error("error: ", error);
			Swal.fire({
				icon: "error",
				title: "Oops ...",
				text: `${error.message}`,
			});
		}
	};

	// const handleUpdateItem = async (item) => {
	// 	try {
	// 		console.log(item);
	// 		// const res = await axiosSecure.patch(`/menu/${item._id}`);
	// 	} catch (error) {
	// 		console.error("error: ", error);
	// 		Swal.fire({
	// 			icon: "error",
	// 			title: "Oops ...",
	// 			text: `${error.message}`,
	// 		});
	// 	}
	// };

	return (
		<>
			<Helmet>
				<title>{websiteTitle} - MangeItems</title>
			</Helmet>
			<div>
				<SectionTitle
					heading={"Manage All Items"}
					subHeading={"Hurry up"}
				/>
				<div>
					<div className="overflow-x-auto">
						<table className="table w-full">
							{/* head */}
							<thead>
								<tr>
									<th>#</th>
									<th>Image</th>
									<th>Name</th>
									<th>Price</th>
									<th>Update</th>
									<th>Delete</th>
								</tr>
							</thead>
							<tbody>
								{menu.map((item, index) => (
									<tr key={item._id}>
										<td>{index + 1}</td>
										<td>
											<div className="flex items-center gap-3">
												<div className="avatar">
													<div className="w-12 h-12 mask mask-squircle">
														<img
															src={item.image}
															alt="Avatar Tailwind CSS Component"
														/>
													</div>
												</div>
											</div>
										</td>
										<td>{item.name}</td>
										<td className="text-right">${item.price}</td>
										<td>
											<Link to={`/dashboard/updateItem/${item._id}`}>
												<button className="bg-orange-500 btn btn-ghost">
													<FaEditC />
												</button>
											</Link>
										</td>
										<td>
											<button
												className="btn btn-ghost"
												onClick={() => handleDeleteItem(item)}
											>
												<FaTrashAltC />
											</button>
										</td>
									</tr>
								))}
							</tbody>
							{/* foot */}
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default ManageItems;
