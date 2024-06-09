import { Helmet } from "react-helmet-async";
import { AuthContext, websiteTitle } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
	const axiosPublic = useAxiosPublic();
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		createUser(data.email, data.password)
			.then(() => {
				// const loggedUser = result.user;
				updateUserProfile(data.name, data.photoURL)
					.then(() => {
						const userInfo = {
							name: data.name,
							email: data.email,
							createdAt: new Date().toISOString(),
							updatedAt: new Date().toISOString(),
							updatedLocal: new Date().toLocaleString(undefined, {
								timeZoneName: "long",
							}),
						};
						axiosPublic.post("/users", userInfo).then((res) => {
							console.log(res.data);
							if (res.data[1]?.modifiedCount > 0 || res.data.insertedId) {
								reset();
								Swal.fire({
									position: "top-end",
									icon: "success",
									title: "User created successfully",
									showConfirmButton: false,
									timer: 1500,
								});
								navigate("/");
							}
						});

						// logOut user
						// logOut()
						// 	.then(() => {
						// 		navigate("/login");
						// 	})
						// 	.catch((error) => console.error("error: ", error));
					})
					.catch((error) => {
						console.error("error: ", error);
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: `${error.message}`,
						});
					});
			})
			.catch((error) => {
				console.log(error);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: `${error.message}`,
				});
			});
	};

	const handleReset = () => {
		const emptyValues = Object.keys(getValues()).reduce((acc, key) => {
			acc[key] = "";
			return acc;
		}, {});
		reset(emptyValues);
	};

	return (
		<>
			<Helmet>
				<title>{websiteTitle} - SignUp</title>
			</Helmet>
			<div className="min-h-screen hero bg-base-200">
				<div className="flex-col w-full hero-content lg:flex-row-reverse">
					<div className="max-w-sm text-center lg:text-left md:w-1/2">
						<h1 className="text-5xl font-bold">Sign up now!</h1>
						<p className="py-6"></p>
					</div>
					<div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100 md:w-1/2">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="card-body"
						>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
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
									<span className="label-text">Photo URL</span>
								</label>
								<input
									type="text"
									name="photoURL"
									{...register("photoURL", { required: true })}
									placeholder="Photo URL"
									className="input input-bordered"
								/>
								{errors.photoURL && (
									<span className="text-red-600">PhotoURL is required</span>
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
										pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
									})}
									placeholder="password"
									className="input input-bordered"
								/>
								{errors.password?.type === "required" && (
									<span className="text-red-600">Password is required</span>
								)}
								{errors.password?.type === "minLength" && (
									<p className="text-red-600">Password must be 6 character</p>
								)}
								{errors.password?.type === "maxLength" && (
									<p className="text-red-600">
										Password must be less than 20 character
									</p>
								)}
								{errors.password?.type === "pattern" && (
									<p className="text-red-600">
										Password must have one uppercase, one lowercase, one number,
										and one special characters
									</p>
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
							<div>
								<input
									className="link"
									type="button"
									value="Reset"
									onClick={handleReset}
								/>
							</div>
							<div className="mt-6 form-control">
								<input
									className="btn btn-primary"
									type="submit"
									value="SignUp"
								/>
							</div>
						</form>
						<p className="px-8">
							<small>
								Already have a account?{" "}
								<Link
									className="font-bold link text-primary"
									to={"/login"}
								>
									Login
								</Link>
							</small>
						</p>
						<SocialLogin />
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
