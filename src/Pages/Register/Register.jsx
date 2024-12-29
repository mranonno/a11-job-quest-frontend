import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, userLogout, updateUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.name.value;
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long!");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain at least one uppercase letter!"
      );
    }
    if (!/[a-z]/.test(password)) {
      return toast.error(
        "Password must contain at least one lowercase letter!"
      );
    }
    createUser(email, password)
      .then(() => {
        toast.success("Account Create Successfully!!");
        updateUser(name, photo);
        userLogout();
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <Helmet>
        <title>JobQuest | Register</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="flex md:flex-row flex-col items-center gap-5 lg:gap-12 lg:mx-12">
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
              Sign Up Now!!
            </h3>
            <p className="text-xl mt-2">
              Awaits! Begin Your Career Adventure Today and
              <br className="hidden lg:flex"/> Shape Tomorrow!
            </p>
          </div>
        </div>

        <form
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          onSubmit={handleRegister}
          className="flex flex-col items-center shadow-lg rounded-3xl lg:px-8 lg:py-8 border-t-2 px-4 py-4 border-primary"
        >
          <h3 className="text-3xl font-semibold mb-4">Register Now</h3>
          {/***** Name Field *****/}
          <div className="w-full">
            <label htmlFor="userName">Your Full Name:</label>
            <input
              id="userName"
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full mb-4"
            />
          </div>
          {/***** Email Field *****/}
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
          {/***** Photo URL Field *****/}
          <div className="w-full">
            <label htmlFor="userPhoto">Photo URL:</label>
            <input
              id="userPhoto"
              type="text"
              name="photo"
              placeholder="http://example.com/picture.jpg"
              className="input input-bordered w-full mb-4"
            />
          </div>
          {/***** Password Field *****/}
          <div className="w-full relative">
            <label htmlFor="userPassword">Password:</label>
            <input
              required
              id="userPassword"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full mb-4"
            />
            <div
              className="absolute right-4 top-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <input
            type="submit"
            value="Register"
            className="input focus:outline-none w-full bg-primary text-white font-medium my-4 cursor-pointer"
          />
          <h3 className="text-slate-500">
            {"Already have an account? "}
            <span>
              <Link
                to={"/login"}
                className="font-bold text-primary opacity-100"
              >
                Login
              </Link>
            </span>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Register;
