import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../utility/utility";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
	const [updateImage, setUpdateImage] = useState(null);
	const { id } = useParams();
	const axiosPublic = useAxiosPublic();
	const axiosSecure = useAxiosSecure();

	const { data: item = {}, refetch } = useQuery({
		queryKey: ["update-item"],
		queryFn: async () => {
			const res = await axiosPublic.get(`/menu/${id}`);
			return res.data;
		},
	});
	const { _id, name, category, recipe, price, image } = item;

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setUpdateImage(imageUrl);
		}
	};

	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async (data) => {
		try {
			console.log("hook form", data);

			// image upload to ImgBB and then get the url
			const imageFile = { image: data.image[0] };

			const res = await axios.post(image_hosting_api, imageFile, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log("imgBB", res.data);

			if (res.data.success) {
				// now send the menu item to the server with the image
				const menuItem = {
					name: data.name,
					recipe: data.recipe,
					image: res.data.data.display_url,
					delete_url: res.data.data.delete_url,
					category: data.category,
					price: +data.price,
					//
					// createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
					updatedLocal: new Date().toLocaleString(undefined, {
						timeZoneName: "long",
					}),
				};
				//
				const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
				console.log("mongoDb", menuRes.data);

				if (menuRes.data.modifiedCount > 0) {
					// show success message
					reset();
					setUpdateImage(null);
					refetch();
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: `${data.name} is updated to the menu`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			}
		} catch (error) {
			console.error("error: ", error);
		}
	};

	return (
		<>
			<Helmet>
				<title>{websiteTitle} - UpdateItem</title>
			</Helmet>
			<div>
				<SectionTitle
					heading={"Update an Item"}
					subHeading={"Update Info"}
				/>
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label className="w-full my-6 form-control">
							<div className="label">
								<span className="label-text">Recipe Name*</span>
							</div>
							<input
								{...register("name", { required: true })}
								type="text"
								defaultValue={name}
								placeholder="Type here"
								className="w-full input input-bordered"
							/>
						</label>
						<div className="flex gap-6">
							{/* category */}
							<label className="w-full my-6 form-control">
								<div className="label">
									<span className="label-text">Category*</span>
								</div>
								<select
									defaultValue={category}
									{...register("category", { required: true })}
									className="w-full select select-bordered"
								>
									<option
										disabled
										value={""}
									>
										Select a category
									</option>
									<option value={"salad"}>Salad</option>
									<option value={"pizza"}>Pizza</option>
									<option value={"soup"}>Soup</option>
									<option value={"dessert"}>Dessert</option>
									<option value={"drinks"}>Drinks</option>
								</select>
							</label>
							{/* price */}
							<label className="w-full my-6 form-control">
								<div className="label">
									<span className="label-text">Price*</span>
								</div>
								<input
									{...register("price", { required: true })}
									type="number"
									defaultValue={price}
									placeholder="Type here"
									className="w-full input input-bordered"
								/>
							</label>
						</div>
						{/* recipe details */}
						<label className="w-full my-6 form-control">
							<div className="label">
								<span className="label-text">Recipe Details</span>
							</div>
							<textarea
								defaultValue={recipe}
								{...register("recipe")}
								className="h-24 textarea textarea-bordered"
								placeholder="Bio"
							></textarea>
						</label>
						<div className="w-full my-6 form-control">
							<div className="flex items-center gap-6 mb-2">
								<img
									className="w-24"
									src={updateImage ? updateImage : image}
									alt=""
								/>
							</div>
							<input
								{...register("image", { required: true })}
								type="file"
								onChange={handleFileChange}
								className="w-full max-w-xs file-input"
							/>
						</div>
						<button className="btn btn-outline">Update Menu Item</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default UpdateItem;
