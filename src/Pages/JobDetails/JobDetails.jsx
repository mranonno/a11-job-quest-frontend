import { useContext, useEffect, useState } from "react";
import { FaMoneyBillWave, FaUserCheck } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { MdDateRange, MdKeyboardArrowLeft } from "react-icons/md";
import { PiBagSimpleBold } from "react-icons/pi";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

const JobDetails = () => {
  const navigate = useNavigate();
  const jobInfo = useLoaderData();
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const {
    applicantsNumber,
    jobCategory,
    jobDesc,
    jobTitle,
    photoURL,
    postDate,
    salaryFrom,
    salaryTo,
    userName,
    userEmail,
    deadline,
    _id,
  } = jobInfo;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleApplyButton = () => {
    if (user?.email === userEmail) {
      return toast.error("You can't apply on this job!");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpenModal(!openModal);
  };

  
  const handleApplyJob = (e) => {
    e.preventDefault();
    const applicantName = e.target.applicantName.value;
    const applicantEmail = e.target.applicantEmail.value;
    const resumeLink = e.target.resumeLink.value;
    const jobId = _id;
    const appliedJob = {
      jobId,
      salaryFrom,
      salaryTo,
      deadline,
      jobTitle,
      jobCategory,
      applicantEmail,
      applicantName,
      resumeLink,
      userName,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/applyJob`, appliedJob)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Applied Successfully!");
          setOpenModal(!openModal);
          axios.patch(`${import.meta.env.VITE_API_URL}/job/${_id}`);
        }
      })
      .catch((error) => {
        if (error.response.data) {
          e.target.reset();
          return toast.error(error.response.data);
        }
        toast.error(error.message);
      });
  };

  {
    /***** compare date *****/
  }

  useEffect(() => {
    setDate(new Date(Date.now()));
  }, []);

  const deadlineDate = new Date(deadline).toLocaleDateString();
  const currentDate= new Date(date).toLocaleDateString()
  const comparedDate = deadlineDate > currentDate;

  return (
    <div className="mx-36 font-poppins">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 my-10 text-lg"
      >
        <MdKeyboardArrowLeft className="text-2xl" />
        <button className="text-lg">Back</button>
      </div>
      <div className="bg-slate-300 shadow-lg bg-opacity-20 rounded-xl p-16">
        <div>
          <div className="flex gap-8 items-center relative">
            <img
              className="rounded-xl object-cover w-48 h-28"
              src={photoURL}
              alt="Banner"
            />
            <div>
              <h3 className="text-4xl font-semibold">{jobTitle}</h3>
              <h3 className="text-lg opacity-70 mt-2">Posted By: {userName}</h3>
              <div className="flex items-center gap-2 absolute right-0 bottom-0">
                <MdDateRange className="text-primary" />
                <h3 className="text-lg opacity-50 font-medium ">Posted on:</h3>
                <p className="font-medium text-lg">
                  {new Date(postDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <hr className="border-dashed my-12 border-primary" />

          <div className="flex gap-96 items-center">
            <div>
              <div>
                <h3 className="text-lg flex items-center gap-2 opacity-50 font-medium ">
                  <FaMoneyBillWave />
                  Salary Range
                </h3>
                <p className="font-medium text-lg">
                  ${salaryFrom} - ${salaryTo}
                </p>
              </div>
              <div>
                <h3 className="text-lg mt-16 opacity-50 font-medium flex items-center gap-2 ">
                  <FaUserCheck />
                  No of Applicant
                </h3>
                <p className="font-medium text-lg">{applicantsNumber}</p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-lg opacity-50 flex items-center gap-2 font-medium ">
                  <PiBagSimpleBold />
                  Job Type
                </h3>
                <p className="font-medium text-lg">{jobCategory}</p>
              </div>
              <div>
                <h3 className="text-lg opacity-50 mt-16 font-medium flex items-center gap-2">
                  <MdDateRange />
                  Deadline
                </h3>
                <p className="font-medium text-lg">
                  {new Date(deadline).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <hr className="border-dashed my-12 border-primary" />
          <div>
            <h3 className="text-3xl font-semibold mb-5">Job Description</h3>
            <p>{jobDesc}</p>
          </div>
          <button
            disabled={comparedDate!==true}
            onClick={handleApplyButton}
            className={comparedDate?"bg-primary text-white text-lg hover:bg-orange-600 mt-8 transition duration-500 py-2 px-6 rounded-full":"bg-primary opacity-50  text-white text-lg  mt-8 py-2 px-6 rounded-full"}
          >
            
            {comparedDate ? <h3 className="flex items-center gap-3">
              <GiClick />Apply Now
            </h3>:"Deadline Over"}
          </button>
        </div>
      </div>

      {/***** Apply job *****/}

      {openModal && (
        <div className="absolute z-50 w-screen right-0 top-0 bg-opacity-15  bg-black h-screen text-center flex justify-center items-center">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="w-1/3 bg-white opacity-100 rounded-2xl relative py-8"
          >
            <button
              onClick={() => setOpenModal(!openModal)}
              className="btn btn-circle absolute right-3 top-3 text-xl"
            >
              X
            </button>
            <form
              onSubmit={handleApplyJob}
              className="flex justify-center flex-col px-6 items-center text-start py-2"
            >
              <h3 className="text-3xl font-semibold mb-8 text-slate-800">
                Apply for the job?
              </h3>
              <div className="w-full">
                <div>
                  <label htmlFor="applicantName">Applicant Name:</label>
                  <input
                    disabled
                    id="applicantName"
                    type="text"
                    name="applicantName"
                    defaultValue={user?.displayName}
                    className="input input-bordered w-full mb-4"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="applicantEmail">Applicant Email:</label>
                  <input
                    disabled
                    id="applicantEmail"
                    type="text"
                    name="applicantEmail"
                    defaultValue={user?.email}
                    className="input input-bordered w-full mb-4"
                  />
                </div>
                <div>
                  <label htmlFor="applicantEmail">Resume Link:</label>
                  <input
                    required
                    id="resumeLink"
                    type="text"
                    name="resumeLink"
                    placeholder="http://example.com/resume.pdf"
                    className="input input-bordered w-full mb-4"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="submit"
                    value="Submit Application"
                    className="bg-primary text-white text-lg hover:bg-orange-600 transition duration-500 py-2 rounded-full w-full"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
