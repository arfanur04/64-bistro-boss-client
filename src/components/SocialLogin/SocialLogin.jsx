import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
	const { setLoading, googleSignIn } = useAuth();
	const axiosPublic = useAxiosPublic();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				// console.log(result.user);
				const userInfo = {
					email: result.user?.email,
					name: result.user?.displayName,
					//
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
					updatedLocal: new Date().toLocaleString(undefined, {
						timeZoneName: "long",
					}),
				};
				axiosPublic.post("/users", userInfo).then((res) => {
					console.log(res.data);
					navigate(from, { replace: true });
				});
			})
			.catch((error) => {
				console.log("error: ", error.message);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: `${error.message}`,
				});
				setLoading(false);
			});
	};

	return (
		<div className="px-8 mb-8">
			<div className="divider"></div>
			<div>
				<button
					onClick={handleGoogleSignIn}
					className="btn"
				>
					<FaGoogle className="mr-2" />
					Google
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
