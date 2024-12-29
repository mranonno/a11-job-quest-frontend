import groupImg from "../../../assets/teamgroup.jpg";
import { motion } from "framer-motion";
const GettingApplicant = () => {
  return (
    <div className=" flex flex-col md:flex-row mt-8 md:justify-between font-poppins md:mx-20 mx-4 md:gap-56">
      {/***** Title Side *****/}
      <div>
        <h3
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-4xl font-bold"
        >
          Getting Applied by <br />
          an Expert Talent
        </h3>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="opacity-80 my-8"
        >
          Search and connect with the right candidate faster. This Talent{" "}
          <br className="hidden md:flex" />
          Search gives you the opportunity to find candidates who may be a
          perfect for your role.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="bg-primary px-8 mb-5 text-white font-medium rounded-lg py-3"
        >
          Search Candidate
        </motion.button>
      </div>
      {/***** banner side *****/}
      <div className="relative">
        <div className="border-8  shadow-2xl overflow-hidden">
          <img src={groupImg} alt="" />
        </div>
        <motion.div
      animate={{
        scale: [1, 1.25, 1.25, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 2
      }}
          className=" shadow-2xl rounded-xl  lg:absolute top-32 -left-28 z-20 mt-4"
        >
          <h3 className="text-lg text-center font-medium bg-blue-50 py-3">
            New Applicants
          </h3>
          <div className="px-4 space-y-4 py-4 bg-white">
            <div className="flex gap-4 items-center">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Rakibul Hassan</h3>
                <p>Marketing Officer</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Riya Khatun</h3>
                <p>Sub Assistance Engineer</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Mehedi Hassan</h3>
                <p>Junior Web Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GettingApplicant;
