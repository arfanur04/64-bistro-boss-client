import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../providers/AuthProvider";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {
	const captchaRef = useRef(null);
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
	};

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
				<div className="flex-col hero-content lg:flex-row-reverse">
					<div className="text-center md:w-1/2 lg:text-left">
						<h1 className="text-5xl font-bold">Login now!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
					<div className="max-w-sm shadow-2xl md:w-1/2 card bg-base-100">
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
								<button
									onClick={handleValidateCaptcha}
									className="mt-2 btn btn-outline btn-xs"
								>
									Validate
								</button>
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
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
