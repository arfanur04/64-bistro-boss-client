import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../../utility/utility";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
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
						<input {...register("name")} />
						<select
							{...register("category")}
							className="select select-bordered w-full max-w-xs"
						>
							<option
								disabled
								// value={""}
							>
								Select a category
							</option>
							<option value={"salad"}>Salad</option>
							<option value={"pizza"}>Pizza</option>
							<option value={"soup"}>Soup</option>
							<option value={"dessert"}>Dessert</option>
							<option value={"drinks"}>Drinks</option>
						</select>
						<input type="submit" />
					</form>
				</div>
			</div>
		</>
	);
};

export default AddItems;
