import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { websiteTitle } from "../../../utility/utility";

const AllUsers = () => {
	const axiosSecure = useAxiosSecure();
	const { data: users = [], refetch } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosSecure.get("/users", {
				headers: {
					authorization: `Bearer ${localStorage.getItem("access-token")}`,
				},
			});
			return res.data;
		},
	});

	const handleMakeAdmin = (user) => {
		axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
			console.log(res.data);
			if (res.data.modifiedCount > 0) {
				refetch();
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `${user.name} is an admin Now!`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

	const handleDelete = (user) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/users/${user._id}`).then((res) => {
					if (res.data.deletedCount > 0) {
						refetch();
						Swal.fire({
							title: "Deleted!",
							text: "User has been deleted.",
							icon: "success",
							timer: 1500,
						});
					}
				});
			}
		});
	};

	return (
		<>
			<Helmet>
				<title>{websiteTitle} - AllUsers</title>
			</Helmet>
			<div>
				<div className="flex my-4 justify-evenly">
					<h2 className="text-3xl">All Users</h2>
					<h2 className="text-3xl">Total Users: {users.length}</h2>
				</div>
				<div className="overflow-x-auto">
					<table className="table w-full table-zebra">
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Email</th>
								<th>Roll</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{users.map((user, index) => (
								<tr key={user._id}>
									<th>{index + 1}</th>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>
										{user.role === "admin" ? (
											"Admin"
										) : (
											<button
												onClick={() => handleMakeAdmin(user)}
												className="bg-orange-500 btn"
											>
												<FaUsers className="text-2xl text-white" />
											</button>
										)}
									</td>
									<td>
										<button
											onClick={() => handleDelete(user)}
											className="btn btn-ghost"
										>
											<FaTrash className="text-lg text-red-600" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default AllUsers;
