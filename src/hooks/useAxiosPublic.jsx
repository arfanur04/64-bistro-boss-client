import axios from "axios";
import { apiURL } from "../utility/utility";

const axiosPublic = axios.create({
	baseURL: apiURL,
});

const useAxiosPublic = () => {
	return axiosPublic;
};

export default useAxiosPublic;
