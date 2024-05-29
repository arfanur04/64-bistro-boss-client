import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<Helmet>
				<title>{websiteTitle} - SignUp</title>
			</Helmet>
			<div className="min-h-screen hero bg-base-200">
				<div className="flex-col hero-content lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Sign up now!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
					<div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="card-body"
						>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="name"
									name="name"
									{...register("name", { required: true })}
									placeholder="name"
									className="input input-bordered"
								/>
								{errors.name && (
									<span className="text-red-600">Name is required</span>
								)}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									{...register("email", { required: true })}
									placeholder="email"
									className="input input-bordered"
								/>
								{errors.email && (
									<span className="text-red-600">Email is required</span>
								)}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									name="password"
									{...register("password", {
										required: true,
										minLength: 6,
										maxLength: 20,
									})}
									placeholder="password"
									className="input input-bordered"
								/>
								{errors.password?.type === "required" && (
									<p className="text-red-600">Password is required</p>
								)}
								<label className="label">
									<a
										href="#"
										className="label-text-alt link link-hover"
									>
										Forgot password?
									</a>
								</label>
							</div>
							<div className="mt-6 form-control">
								<button className="btn btn-primary">SignUp</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
