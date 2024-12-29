import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const AxiosProtect = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
const useAxiosProtect = () => {
  const { userLogout } = useAuth();
  const navigate = useNavigate();

  //interceptor

  AxiosProtect.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      // console.log('Error from interceptor ',error.response);
      if (error.response.status === 401 || error.response.status === 403) {
        await userLogout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return AxiosProtect;
};

export default useAxiosProtect;
