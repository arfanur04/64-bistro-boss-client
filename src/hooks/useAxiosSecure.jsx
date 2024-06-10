import axios from "axios";
import { apiURL } from "../utility/utility";

export const axiosSecure = axios.create({
	baseURL: apiURL,
});

const useAxiosSecure = () => {
	// request interceptors to add Authorization header for every secure call to fetch api
	axiosSecure.interceptors.request.use(
		function (config) {
			console.log("request stopped by interceptors");
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
		(error) => {
			const status = error.response.status;
			console.log("status error in the interceptors", status);
			return Promise.reject(error);
		}
	);

	return axiosSecure;
};

export default useAxiosSecure;
