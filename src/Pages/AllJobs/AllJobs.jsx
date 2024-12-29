import axios from "axios";
import AllJobsTableRow from "./AllJobsTableRow/AllJobsTableRow";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const AllJobs = () => {
  const [search, setSearch] = useState("");

  const {
    data: allJobs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getJobData(search),
    queryKey: ["allJobs", { search }],
  });

  const getJobData = async (search) => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/jobs?search=${search}`
    );
    return data;
  };

  {
    /***** handle search *****/
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearch(search);
  };
  // console.log(allJobs);

  if (isLoading)
    return (
      <div className="text-center mt-20">
        <span className="loading border loading-ring loading-lg"></span>
      </div>
    );
  if (isError || error) return toast.error(error.message);

  return (
    <div className="lg:mx-16 lg:mt-12 mx-4 mt-4">
      <div className=" flex mr-4 justify-end">
        <form
          onSubmit={handleSearch}
          className="border-2 ml-4 text-end px-4 rounded-md py-2 w-80 justify-between flex"
        >
          <input
            className="focus:outline-none focus:bg-none"
            placeholder="Search..."
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

      <section className="container px-4 mx-auto">
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
                        <span>Job Title</span>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Posted Date</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Deadline
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
                      ></th>
                    </tr>
                  </thead>

                  {/***** Table body row *****/}
                  <tbody className="bg-white bg-opacity-10 divide-y divide-gray-200  ">
                    {allJobs?.map((job) => (
                      <AllJobsTableRow key={job._id} job={job} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllJobs;
