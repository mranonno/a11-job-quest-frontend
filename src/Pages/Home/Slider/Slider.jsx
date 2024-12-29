import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./Slider.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Slider = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="font-poppins">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
      >
        {/***** Slider 1 *****/}
        <SwiperSlide>
          <div className="slider1 slider lg:pl-24 px-8 lg:h-[550px] h-96">
            <div className="bg-gray-900 md:bg-transparent md:p-0 p-2 bg-opacity-20">
              <h3
                data-aos="fade-down"
                data-aos-duration="1000"
                className="lg:text-5xl text-start text-xl font-bold text-slate-900"
              >
                Explore Exciting Jobs
                <br />
                Opportunities Now <br /> With
                <span className="text-primary"> JobQuest.</span>
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="opacity-80 md:my-8 my-4"
              >
                Endless opportunities and unlock your full potential with our
                platform, where <br className="hidden lg:flex" />
                you'll find the ideal job that perfectly aligns with your skills
                and goals.
              </p>
              <form
                // onSubmit={handleSearch}
                className="border-2 ml-4 text-end px-4 rounded-md py-2 w-80 justify-between end flex bg-white"
              >
                <input
                  className="focus:outline-none focus:bg-none"
                  placeholder="Find jobs..."
                  type="text"
                  name="search"
                />
                <input
                  className="bg-primary hover:bg-orange-700 text-white px-4 py-1 rounded-full"
                  type="submit"
                  value="SEARCH"
                />
              </form>
            </div>
          </div>
        </SwiperSlide>
        {/***** Slider 2 *****/}
        <SwiperSlide>
          <div className="slider2 slider lg:pr-24 pr-8 items-end lg:h-[550px] h-96">
            <div className="bg-gray-900 md:bg-transparent md:p-0 p-2 bg-opacity-20">
              <h3
                data-aos="fade-down"
                data-aos-duration="1000"
                className="text-xl text-slate-900 md:text-5xl font-bold"
              >
                Find Best Employee <br />
                For Your Company
              </h3>
              <h3 className="text-yellow-500 font-bold text-xl md:text-5xl mt-2">
                With Us!
              </h3>

              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="opacity-80 my-5"
              >
                Come join us and we will help grow <br />
                your company with best employee.
              </p>
              <Link
                to={user ? "/" : "/register"}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="bg-primary px-5 py-2 rounded-lg text-lg font-medium text-white"
              >
                JOIN NOW
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/***** Slider 3 *****/}
        <SwiperSlide>
          <div className="slider3 items-center text-center slider lg:h-[550px] h-96">
            <div>
              <h3
                data-aos="fade-down"
                data-aos-duration="1000"
                className="text-white text-2xl lg:text-7xl md:text-4xl font-medium"
              >
                WE ARE AVAILABLE ON JOB STOCK
              </h3>
              <h3 className="text-white font-medium text-xl md:text-3xl mt-2">
                Find Jobs, Employment & Career Opportunities
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-white opacity-80 my-5 px-8"
              >
                Advanced search filters and tools to refine job searches based
                on specific criteria such as job title, location,
                <br className="hidden md:flex" /> salary range, company size,
                and employment type full-time, part-time, contract, etc.
              </p>
              <button
                data-aos="fade-up"
                data-aos-duration="1000"
                className="border-2 border-primary px-5 py-2 rounded-lg text-lg font-medium text-primary"
              >
                Find A Job
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/***** Slider 4 *****/}
      </Swiper>
    </div>
  );
};

export default Slider;
