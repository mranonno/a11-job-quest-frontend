import {  useEffect, useState } from "react";
import TableRow from "./TableRow/TableRow";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "react-toastify";
import useAxiosProtect from "../../hooks/useAxiosProtect";
import useAuth from "../../hooks/useAuth";

const AppliedJobs = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [dropdownText, setDropdownText] = useState(0);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const { loading, user } = useAuth()
  const [filterJobs, setFilterJobs] = useState(appliedJobs);
  const AxiosProtect = useAxiosProtect();

  const handleDropdown = () => {
    setDropdownMenu(!dropdownMenu);
  };

  useEffect(() => {
    AxiosProtect.get(`/appliedJobs/${user?.email}`)
      .then((res) => {
        setAppliedJobs(res.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [user]);

  useEffect(() => {
    if (dropdownText == 0) {
      setFilterJobs(appliedJobs);
    }
    if (dropdownText == 1) {
      const onSiteJobs = appliedJobs?.filter(
        (job) => "On-Site" === job.jobCategory
      );
      setFilterJobs(onSiteJobs);
    }
    if (dropdownText == 2) {
      const remote = appliedJobs?.filter((job) => "Remote" === job.jobCategory);
      setFilterJobs(remote);
    }
    if (dropdownText == 3) {
      const partTime = appliedJobs?.filter(
        (job) => "Part-Time" === job.jobCategory
      );
      setFilterJobs(partTime);
    }
    if (dropdownText == 4) {
      const onSiteJobs = appliedJobs?.filter(
        (job) => "Hybrid" === job.jobCategory
      );
      setFilterJobs(onSiteJobs);
    }
  }, [dropdownText, appliedJobs, setFilterJobs]);

  {
    /***** handle filter text *****/
  }
  const handleFilter = (value) => {
    if (value === "AllJobs") {
      handleDropdown(!dropdownMenu);
      setDropdownText(0);
    } else if (value === "OnSite") {
      handleDropdown(!dropdownMenu);
      setDropdownText(1);
    } else if (value === "Remote") {
      handleDropdown(!dropdownMenu);
      setDropdownText(2);
    } else if (value === "PartTime") {
      handleDropdown(!dropdownMenu);
      setDropdownText(3);
    } else if (value === "Hybrid") {
      handleDropdown(!dropdownMenu);
      setDropdownText(4);
    }
  };
  {
    /***** Filtering Jobs *****/
  }
  // console.log(appliedJobs);
  // console.log(filterJobs);
  return (
    <div className="lg:mx-12 lg:mt-8 mx-4 mt-5">
      <h3 className="text-4xl font-semibold text-center mb-8">Applied Jobs</h3>
      <section className="container px-4 mx-auto">
        <div className="flex relative flex-col">
          <button
            onClick={handleDropdown}
            className="bg-primary w-48 py-3 rounded-lg text-lg font-semibold border border-transparent text-white z-10 green-hover transform duration-500"
          >
            {dropdownText === 0 ? (
              <h3 className="flex justify-center items-center gap-5">
                All Jobs
                <span>
                  <IoIosArrowDown className="text-2xl" />
                </span>
              </h3>
            ) : dropdownText === 1 ? (
              <h3 className="flex justify-center items-center gap-5">
                On-Site
                <span>
                  <IoIosArrowDown className="text-2xl" />
                </span>
              </h3>
            ) : dropdownText === 2 ? (
              <h3 className="flex justify-center items-center gap-5">
                Remote
                <span>
                  <IoIosArrowDown className="text-2xl" />
                </span>
              </h3>
            ) : dropdownText === 3 ? (
              <h3 className="flex justify-center items-center gap-5">
                Part-Time
                <span>
                  <IoIosArrowDown className="text-2xl" />
                </span>
              </h3>
            ) : (
              <h3 className="flex justify-center items-center gap-5">
                Hybrid
                <span>
                  <IoIosArrowDown className="text-2xl" />
                </span>
              </h3>
            )}
          </button>
          <div
            className={
              dropdownMenu
                ? "bg-gray-100 transform duration-500 rounded-b-lg w-48 absolute top-[50px]"
                : "hidden"
            }
          >
            <ul className="my-3 px-2">
              <li
                onClick={() => handleFilter("AllJobs")}
                className="text-[#131313CC] transform text-lg duration-500 text-center hover:cursor-pointer rounded-lg hover:bg-slate-200 py-1"
              >
                All Jobs
              </li>
              <li
                onClick={() => handleFilter("OnSite")}
                className="text-[#131313CC] transform text-lg duration-500 text-center hover:cursor-pointer rounded-lg hover:bg-slate-200 py-1"
              >
                On-Site
              </li>
              <li
                onClick={() => handleFilter("Remote")}
                className="text-[#131313CC] transform text-lg duration-500 text-center hover:cursor-pointer rounded-lg hover:bg-slate-200 py-1"
              >
                Remote
              </li>
              <li
                onClick={() => handleFilter("PartTime")}
                className="text-[#131313CC] transform text-lg duration-500 text-center hover:cursor-pointer rounded-lg hover:bg-slate-200 py-1"
              >
                Part-Time
              </li>
              <li
                onClick={() => handleFilter("Hybrid")}
                className="text-[#131313CC] transform text-lg duration-500 text-center hover:cursor-pointer rounded-lg hover:bg-slate-200 py-1"
              >
                Hybrid
              </li>
            </ul>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center mt-8">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-400 bg-opacity-10 ">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                        >
                          <span>SL. No </span>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                        >
                          <span>Job Title</span>
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Applicant Email</span>
                          </button>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Job Type</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                        >
                          Salary Range
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                        >
                          Deadline
                        </th>
                      </tr>
                    </thead>

                    {/***** Table body row *****/}
                    <tbody className="bg-white bg-opacity-10 divide-y divide-gray-200  ">
                      {filterJobs?.map((job, index) => (
                        <TableRow key={job._id} index={index} job={job} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AppliedJobs;
