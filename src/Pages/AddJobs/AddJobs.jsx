import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";

const AddJobs = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoURL = form.photoURL.value;
    const jobTitle = form.jobTitle.value;
    const jobCategory = form.jobCategory.value;
    const salaryFrom = parseInt(form.salaryFrom.value);
    const salaryTo = parseInt(form.salaryTo.value);
    const postDate = startDate;
    const deadline = endDate;
    const jobDesc = form.jobDesc.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const applicantsNumber = parseInt(form.applicantsNumber.value);

    const jobInfo = {
      jobTitle,
      photoURL,
      jobCategory,
      salaryFrom,
      salaryTo,
      postDate,
      jobDesc,
      userEmail,
      userName,
      applicantsNumber,
      deadline
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/jobs`, jobInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Job Added Successfully!");
        }
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-12 mx-4 font-poppins">
        <Helmet>
          <title>JobQuest | Add A Job</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <form
          data-aos="zoom-in"
          data-aos-duration="1000"
          onSubmit={handleAddJob}
          className="flex flex-col lg:w-2/3 items-center border-t-4 shadow-xl border-primary rounded-2xl px-4 lg:px-8 py-5"
        >
          <h3 className="text-3xl font-semibold mb-8">Add A New Job</h3>
          <div className="flex flex-col lg:flex-row w-full lg:gap-5">
            <div className="w-full">
              <label htmlFor="photoURL">Photo URL:</label>
              <input
                id="photoURL"
                type="text"
                name="photoURL"
                placeholder="http://example.com/picture.jpg"
                defaultValue={""}
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
                placeholder="Job title"
                defaultValue={""}
                className="input input-bordered w-full mb-4"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:gap-5">
            <div className="w-full">
              <label htmlFor="country">Job Category:</label>
              <select
                defaultValue={""}
                name="jobCategory"
                className="select select-bordered w-full mb-4"
              >
                <option value="" disabled>
                  Select Category...
                </option>
                <option value="On-Site">On-Site</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="salaryFrom">Salary Range:</label>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <input
                  id="salaryFrom"
                  type="number"
                  required
                  name="salaryFrom"
                  placeholder="$ from"
                  defaultValue={""}
                  className="input input-bordered w-full mb-4"
                />
                <input
                  id="salaryTo"
                  type="number"
                  required
                  name="salaryTo"
                  placeholder="$ to"
                  defaultValue={""}
                  className="input input-bordered w-full mb-4"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-2 lg:gap-5">
            <div className="w-full flex flex-col lg:flex-row gap-4">
              <div>
                <label htmlFor="postDate">Posting Date</label>
                <br className="flex lg:hidden"/>
                <DatePicker className="border py-3 rounded-lg"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div>
                <label htmlFor="season">Deadline:</label>
                <br className="flex lg:hidden"/>
                <DatePicker className="input input-bordered py-2"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="applicantsNumber">Applicants Number:</label>
              <input
                id="applicantsNumber"
                type="number"
                name="applicantsNumber"
                defaultValue={0}
                className="input input-bordered w-full mb-4"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="w-full">
              <label htmlFor="userName">User Name:</label>
              <input
                id="userName"
                type="text"
                name="userName"
                disabled
                defaultValue={user?.displayName}
                className="input input-bordered w-full mb-4"
              />
            </div>
            <div className="w-full">
              <label htmlFor="userEmail">User Email:</label>
              <input
                id="userEmail"
                type="text"
                name="userEmail"
                disabled
                defaultValue={user?.email}
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
              placeholder="Description..."
              defaultValue={""}
              className="input input-bordered pb-10 h-20 w-full mb-4"
            />
          </div>
          <input
            type="submit"
            value="Add Job"
            className="input focus:outline-none w-full hover:bg-opacity-80 transition duration-500 bg-primary text-white font-medium my-4 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
