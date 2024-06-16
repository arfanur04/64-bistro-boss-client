import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../utility/utility";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
	const { register, handleSubmit } = useForm();
	const axiosPublic = useAxiosPublic();

	const onSubmit = async (data) => {
		console.log(data);
		// image upload to ImgBB and then get the url
		const imageFile = { image: data.image[0] };
		const res = await axiosPublic.post(image_hosting_api, imageFile, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		console.log(res.data);
	};
	return (
		<>
			<Helmet>
				<title>{websiteTitle} - AddItems</title>
			</Helmet>
			<div>
				<SectionTitle
					heading={"add a item"}
					subHeading={"What's New?"}
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
									defaultValue={""}
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
								{...register("recipe")}
								className="h-24 textarea textarea-bordered"
								placeholder="Bio"
							></textarea>
						</label>
						<div className="w-full my-6 form-control">
							<input
								{...register("image", { required: true })}
								type="file"
								className="w-full max-w-xs file-input"
							/>
						</div>
						<button className="btn">
							Add Item <FaUtensils className="ml-4" />
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddItems;
