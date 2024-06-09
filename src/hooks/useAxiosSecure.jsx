import axios from "axios";
import { apiURL } from "../utility/utility";

export const axiosSecure = axios.create({
	baseURL: apiURL,
});

const useAxiosSecure = () => {
	return axiosSecure;
};

export default useAxiosSecure;
