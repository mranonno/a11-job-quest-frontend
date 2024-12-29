import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twiter.svg";

const Footer = () => {
  return (
    <footer className="bg-[#82C5C8] bg-opacity-40 pt-6 flex flex-col font-poppins mt-12">
      <div className="md:flex-row text-center md:gap-12 gap-5 lg:gap-48 px-4">
        <aside>
          <p data-aos="fade-down" data-aos-duration="1000" className="text-4xl font-medium">Job Quest
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" className="opacity-80 my-4">
            Empowering careers, one search at a time. Explore, apply, succeed.
            <br className="hidden lg:flex"/> Your dream job is within reach, right here
          </p>
        </aside>
      </div>
      <div className="my-2 flex items-center justify-center gap-8">
        <img data-aos="zoom-in" data-aos-duration="1000" src={facebook} alt="" />
        <img data-aos="zoom-in" data-aos-duration="1000" src={github} alt="" />
        <img data-aos="zoom-in" data-aos-duration="1000" src={instagram} alt="" />
        <img data-aos="zoom-in" data-aos-duration="1000" src={twitter} alt="" />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 justify-center items-center">
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Contact US</Link>
              <Link>Blogs</Link>
              <Link>News</Link>
          </div>
      <div className="w-full mt-4 flex justify-center bg-opacity-40 bg-[#82C5C8] py-4">
        <p>
          @ 2024, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
