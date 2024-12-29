import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateJob = () => {
  const job = useLoaderData();
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  const {
    applicantsNumber,
    jobCategory,
    jobDesc,
    jobTitle,
    photoURL,
    salaryFrom,
    salaryTo,
    _id,
  } = job;

  const handleUpdateJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoURL = form.photoURL.value;
    const jobTitle = form.jobTitle.value;
    const jobCategory = form.jobCategory.value;
    const salaryFrom = parseInt(form.salaryFrom.value);
    const salaryTo = parseInt(form.salaryTo.value);
    const deadline = endDate;
    const jobDesc = form.jobDesc.value;
    const jobInfo = {
      photoURL,
      jobTitle,
      jobCategory,
      salaryFrom,
      salaryTo,
      deadline,
      jobDesc,
    };
    axios
      .put(`${import.meta.env.VITE_API_URL}/job/${_id}`, jobInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Update Successfully!");
          navigate("/myJobs");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-12 mx-4 font-poppins">
        <Helmet>
          <title>JobQuest | Update A Job</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <form
          data-aos="zoom-in"
          data-aos-duration="1000"
          onSubmit={handleUpdateJob}
          className="flex flex-col lg:w-2/3 items-center border-t-4 shadow-xl border-primary rounded-2xl px-8 py-5"
        >
          <h3 className="text-3xl font-semibold mb-8">Update Job</h3>
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="w-full">
              <label htmlFor="photoURL">Photo URL:</label>
              <input
                id="photoURL"
                type="text"
                name="photoURL"
                defaultValue={photoURL}
                className="input input-bordered w-full mb-4"
              />
            </div>
            <div className="w-full">
              <label htmlFor="jobTitle">Job Title:</label>
              <input
                id="jobTitle"
                type="text"
                required
                name="jobTitle"
                defaultValue={jobTitle}
                className="input input-bordered w-full mb-4"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="w-full">
              <label htmlFor="country">Job Category:</label>
              <select
                defaultValue={jobCategory}
                name="jobCategory"
                className="select select-bordered w-full mb-4"
              >
                <option value="On-Site">On-Site</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="salaryFrom">Salary Range:</label>
              <div className="flex items-center gap-4">
                <input
                  id="salaryFrom"
                  type="number"
                  required
                  name="salaryFrom"
                  defaultValue={salaryFrom}
                  className="input input-bordered w-full mb-4"
                />
                <input
                  id="salaryTo"
                  type="number"
                  required
                  name="salaryTo"
                  defaultValue={salaryTo}
                  className="input input-bordered w-full mb-4"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="w-full">
              <div>
                <label htmlFor="season">Deadline:</label>
                <div>
                  <DatePicker
                    className="input input-bordered w-full py-2"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="applicantsNumber">Applicants Number:</label>
              <input
                disabled
                id="applicantsNumber"
                type="number"
                name="applicantsNumber"
                defaultValue={applicantsNumber}
                className="input input-bordered w-full mb-4"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="jobDesc">Short Description:</label>
            <input
              id="jobDesc"
              type="text"
              name="jobDesc"
              defaultValue={jobDesc}
              className="input input-bordered pb-10 h-20 w-full mb-4"
            />
          </div>
          <input
            type="submit"
            value="Update"
            className="input focus:outline-none w-full hover:bg-opacity-80 transition duration-500 bg-primary text-white font-medium my-4 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
