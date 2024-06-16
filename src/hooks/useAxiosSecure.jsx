import axios from "axios";
import { apiURL } from "../utility/utility";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
	baseURL: apiURL,
});

const useAxiosSecure = () => {
	const navigate = useNavigate();
	const { logOut, setLoading } = useAuth();
	// request interceptors to add Authorization header for every secure call to fetch api
	axiosSecure.interceptors.request.use(
		function (config) {
			// console.log("request stopped by interceptors");
			const token = localStorage.getItem("access_token");
			config.headers.Authorization = `Bearer ${token}`;
			return config;
		},
		function (error) {
			// do something with error
			return Promise.reject(error);
		}
	);

	// intercepts 401 and 403 status
	axiosSecure.interceptors.response.use(
		function (response) {
			return response;
		},
		async (error) => {
			const status = error.response.status;
			// console.log("status error in the interceptors", status);
			if (status === 401 || status === 403) {
				await logOut();
				setLoading(false);
				navigate("/login");
				// logOut()
				// 	.then(() => {
				// 		navigate("/login");
				// 	})
				// 	.catch((error) => console.error("error: ", error));
			}

			return Promise.reject(error);
		}
	);

	return axiosSecure;
};

export default useAxiosSecure;
