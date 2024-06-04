import { FaTrash } from "react-icons/fa6";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
	const [cart, refetch] = useCarts();
	const totalPrice = cart.reduce((total, item) => total + item.price, 0);
	const axiosSecure = useAxiosSecure();

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Yes, delete it!",
			cancelButtonText: "No, cancel!",
			reverseButtons: true,
		}).then((result) => {
			if (result.isConfirmed) {
				// Code to execute when confirmed
				axiosSecure
					.delete(`/carts/${id}`)
					.then((res) => {
						if (res.data.deletedCount > 0) {
							Swal.fire("Deleted!", "Your file has been deleted.", "success");
							refetch();
						}
					})
					.catch((error) => {
						console.error("error: ", error);
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: `${error.message}`,
						});
					});
			}
		});
	};

	return (
		<div>
			<div className="flex justify-evenly mb-8">
				<h2 className="text-4xl">Items: {cart.length}</h2>
				<h2 className="text-4xl">Total Price : {totalPrice}</h2>
				<button className="btn btn-primary">Pay</button>
			</div>
			<div className="overflow-x-auto ">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Image</th>
							<th>Name</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{cart.map((item, index) => (
							<tr key={item._id}>
								<th>{index + 1}</th>
								<td>
									<div className="flex items-center gap-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src={item.image}
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
									</div>
								</td>
								<td>{item.name}</td>
								<td>${item.price}</td>
								<th>
									<button
										onClick={() => handleDelete(item._id)}
										className="btn btn-ghost"
									>
										<FaTrash className="text-red-600 text-lg" />
									</button>
								</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Cart;