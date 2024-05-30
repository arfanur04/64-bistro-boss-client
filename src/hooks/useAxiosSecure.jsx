import axios from "axios";
import { apiURL } from "../providers/AuthProvider";

export const axiosSecure = axios.create({
	baseURL: apiURL,
});

const useAxiosSecure = () => {
	return axiosSecure;
};

export default useAxiosSecure;
