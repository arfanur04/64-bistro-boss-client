import axios from "axios";
import { apiURL } from "../providers/AuthProvider";

export const axiosPublic = axios.create({
	baseURL: apiURL,
});

const useAxiosPublic = () => {
	return axiosPublic;
};

export default useAxiosPublic;
