import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../utility/utility";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import FaTrashAltC from "../../IconComponent/FaTrashAltC";
import FaEditC from "../../IconComponent/FaEditC";

const ManageItems = () => {
	const [menu] = useMenu();
	const handleDeleteItem = (item) => {
		console.log(item);
	};

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
											<button className="bg-orange-500 btn btn-ghost">
												<FaEditC />
											</button>
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
