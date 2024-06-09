import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { websiteTitle } from "../../utility/utility";

const Login = () => {
	const axiosPublic = useAxiosPublic();
	//: delete this useState and uncomment next one to validate reCaptcha
	const [disabled, setDisabled] = useState(false);
	// const [disabled, setDisabled] = useState(true);
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	// console.log("location.state in login page", location.state);
	const captchaRef = useRef(null);

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		// console.log(email, password);
		signIn(email, password)
			.then((result) => {
				const user = result.user;
				const userInfo = {
					name: user.displayName,
					email: user.email,
					//
					updatedAt: new Date().toISOString(),
					updatedLocal: new Date().toLocaleString(undefined, {
						timeZoneName: "long",
					}),
				};
				axiosPublic.post("/users", userInfo).then((res) => {
					console.log(res.data);
					if (res.data[1]?.modifiedCount > 0 || res.data.insertedId) {
						Swal.fire({
							title: "User Login Successful",
							showClass: {
								popup: `
								 animate__animated
								 animate__fadeInUp
								 animate__faster
							  `,
							},
							hideClass: {
								popup: `
								 animate__animated
								 animate__fadeOutDown
								 animate__faster
							  `,
							},
						});
						navigate(from, { replace: true });
					}
				});
			})
			.catch((error) => {
				console.error("error: ", error);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: `${error.message}`,
				});
			});
	};

	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	const handleValidateCaptcha = () => {
		const user_captcha_value = captchaRef.current.value;
		if (validateCaptcha(user_captcha_value)) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	};

	return (
		<>
			<Helmet>
				<title>{websiteTitle} - Login</title>
			</Helmet>
			<div className="min-h-screen hero bg-base-200">
				<div className="flex-col justify-center w-full hero-content lg:flex-row-reverse">
					<div className="max-w-sm text-center md:w-1/2 lg:text-left">
						<h1 className="text-5xl font-bold">Login now!</h1>
						<p className="py-6"></p>
					</div>
					<div className="w-full max-w-sm shadow-2xl md:w-1/2 card bg-base-100 shrink-0">
						<form
							onSubmit={handleLogin}
							className="card-body"
						>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="email"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									name="password"
									placeholder="password"
									className="input input-bordered"
									required
								/>
								<label className="label">
									<a
										href="#"
										className="label-text-alt link link-hover"
									>
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control">
								<label className="label">
									<LoadCanvasTemplate />
								</label>
								<input
									type="text"
									name="captcha"
									ref={captchaRef}
									placeholder="type the captcha above"
									className="input input-bordered"
								/>
								<input
									onClick={handleValidateCaptcha}
									className="mt-2 btn btn-outline btn-xs"
									type="button"
									value="Validate"
								/>
							</div>
							<div className="mt-6 form-control">
								<input
									disabled={disabled}
									className="btn btn-primary"
									type="submit"
									value="Login"
								/>
							</div>
						</form>

						<p className="px-8">
							<small>
								New Here?{" "}
								<Link
									className="font-bold link text-primary"
									to={"/sign-up"}
								>
									Create an Account
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

export default Login;
