import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://ecom-express-api-one.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
