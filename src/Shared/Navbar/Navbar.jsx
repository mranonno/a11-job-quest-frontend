import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../Provider/AuthProvider";
import { handleTheme, setTheme } from "../../handleTheme/handleTheme";
import axios from "axios";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthContext);
  const [themeStage, setThemeStage] = useState("light");
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setThemeStage(theme);
    setTheme(theme);
  }, []);

  const handleLogOut = () => {
    userLogout()
      .then(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
          withCredentials: true,
        });
        toast.success("Logout Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast(error);
      });
  };

  const [isOpen, setOpen] = useState(false);
  const handleDrop = () => {
    setOpen(!isOpen);
  };

  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-primary text-white rounded-md py-1 px-3 transition duration-1000"
            : " hover:text-primary transition duration-1000"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-primary text-white rounded-md py-1 px-3 transition duration-1000"
            : " hover:text-primary transition duration-1000"
        }
        to={"/allJobs"}
      >
        All Jobs
      </NavLink>

      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white rounded-md py-1 px-3 transition duration-1000"
              : " hover:text-primary transition duration-1000"
          }
          to={"/appliedJobs"}
        >
          Applied Jobs
        </NavLink>
      )}
      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white rounded-md py-1 px-3 transition duration-1000"
              : " hover:text-primary transition duration-1000"
          }
          to={"/addJob"}
        >
          Add A Job
        </NavLink>
      )}
      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-primary text-white rounded-md py-1 px-3 transition duration-1000"
              : " hover:text-primary transition duration-1000"
          }
          to={"/myJobs"}
        >
          My Jobs
        </NavLink>
      )}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-primary text-white rounded-md py-1 px-3 transition duration-1000"
            : "  hover:text-primary transition duration-1000"
        }
        to={"/blogs"}
      >
        Blogs
      </NavLink>
      {user && (
        <button
          className="text-start md:hidden rounded-md border border-primary text-primary py-1 px-3"
          onClick={handleLogOut}
        >
          Logout
        </button>
      )}
      {!user && (
        <Link
          className="text-start md:hidden rounded-md border border-primary text-primary py-1 px-3"
          to={"/register"}
        >
          Register
        </Link>
      )}
    </>
  );
  return (
    <div className="flex items-center justify-between bg-base-100 py-4 md:px-8 px-2 shadow-lg font-poppins z-10">
      {/***** Navbar Start *****/}
      <div
        className="relative flex items-center gap-1"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div onClick={handleDrop} className="md:hidden flex flex-col">
          {!isOpen ? (
            <AiOutlineMenu
              className="text-2xl"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          ) : (
            <RxCross2
              className="text-2xl"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          )}

          <ul
            className={`flex flex-col absolute shadow-lg ${
              isOpen ? "top-12 left-0" : "top-12 -left-48 "
            } transform duration-1000  pr-12 pl-4 border py-3 gap-2 z-10 bg-white rounded-xl`}
          >
            {links}
          </ul>
        </div>
        {/***** Logo & Title *****/}
        <div className="flex items-center gap-2">
          <img className="size-8" src="/logo.png" alt="logo" />
          <Link
            to={"/"}
            className="text-2xl md:text-3xl font-poppins font-bold"
          >
            Job<span className="text-primary">Quest</span>
          </Link>
        </div>
      </div>
      {/***** Center Nav Link *****/}
      <div
        data-aos-duration="1000"
        data-aos="fade-up"
        className="lg:flex items-center gap-4 hidden"
      >
        {links}
      </div>
      {/***** Navbar End *****/}

      <div className="flex items-center gap-4">
        {/***** theme controller *****/}
        {themeStage === "light" ? (
          <input
            data-aos-duration="1000"
            data-aos="zoom-in"
            onClick={handleTheme}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
          />
        ) : (
          <input
            data-aos-duration="1000"
            data-aos="zoom-in"
            onClick={handleTheme}
            defaultChecked
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
          />
        )}

        {/***** User profile *****/}
        {user ? (
          user?.photoURL ? (
            <div className="flex items-center gap-4">
              <div className="z-20" data-aos="zoom-in" data-aos-duration="1000"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
              >
                <Tooltip id="my-tooltip" />
                <img
                  className="size-8 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
              <button
                className="font-medium hidden md:flex hover:text-cyan-500"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <FaUserCircle className="text-3xl text-primary" />
              <button
                className="font-medium hidden md:flex hover:text-primary"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          )
        ) : (
          <div className="flex items-center">
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              className="hidden md:flex font-medium hover:text-primary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-primary hidden md:flex text-white px-2 py-1 md:px-4 md:py-2 rounded-md md:ml-4 ml-2 hover:bg-opacity-60"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-primary md:hidden text-white px-3 py-1  rounded-md hover:bg-opacity-60"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
