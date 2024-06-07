import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
	const axiosSecure = useAxiosSecure();
	const { data: users = 0 } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosSecure.get("/users");
			return res.data;
		},
	});

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
					<table className="table table-zebra">
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Job</th>
								<th>Favorite Color</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{users.map((user, index) => (
								<tr key={user._id}>
									<th>{index + 1}</th>
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>
									<td>Blue</td>
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
