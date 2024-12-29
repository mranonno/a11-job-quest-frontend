import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  {
    /***** handle login with email and password *****/
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          { email: res?.user?.email },
          { withCredentials: true }
        );
        toast.success("Login Successfully!!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  {
    /***** handle login with google *****/
  }
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          { email: res?.user?.email },
          { withCredentials: true }
        );
        toast.success("Login Successfully!!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <Helmet>
        <title>JobQuest | Log In</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="flex md:flex-row flex-col items-center gap-5 lg:gap-12 lg:mx-12">
        {/***** Title side *****/}
        <div className="text-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="flex items-center justify-center gap-2 md:mb-4"
          >
            <img className="size-7" src="/logo.png" alt="logo" />
            <p className="text-4xl uppercase font-bold font-poppins text-orange-500">
              Job Quest
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <h3 className="font-medium text-3xl text-blue-900 mt-4">
              Welcome Back!!
            </h3>
            <p className="text-xl">
              Launch Your Career Journey Here! Explore Limitless{" "}
              <br className="hidden lg:flex" />
              Opportunities Below!
            </p>
          </div>
        </div>
        {/***** Form side *****/}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="rounded-3xl border-t-2 border-primary shadow-xl lg:px-8 px-4 py-8"
        >
          <form onSubmit={handleLogin} className="flex flex-col items-center">
            <h3 className="text-3xl font-semibold mb-4">Log In</h3>
            <div className="w-full">
              <label htmlFor="userEmail">Email Address:</label>
              <input
                required
                id="userEmail"
                type="email"
                name="email"
                placeholder="name@example.com"
                className="input input-bordered w-full mb-4"
              />
            </div>
            <div className="w-full relative">
              <label htmlFor="userPassword">Password:</label>
              <input
                required
                id="userPassword"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
              <div
                className="absolute right-4 top-10"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
              </div>
              <p className="text-slate-500">Forgot password?</p>
            </div>
            <input
              type="submit"
              value="Login"
              className="input focus:outline-none w-full bg-orange-500 text-white font-medium my-4 cursor-pointer"
            />
            <h3 className="text-slate-500">
              {"Don't have an account? "}
              <span>
                <Link
                  to={"/register"}
                  className="font-bold text-orange-500 opacity-100"
                >
                  Register
                </Link>
              </span>
            </h3>
          </form>
          <div>
            <div className="my-2 w-full gap-4 flex items-center justify-center">
              <hr className="w-[10%]" />
              <p>Or</p>
              <hr className="w-[10%]" />
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleLoginWithGoogle}
                className="border rounded-full px-8 py-2 flex items-center gap-5 justify-center"
              >
                {" "}
                <span>
                  <FcGoogle />
                </span>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
