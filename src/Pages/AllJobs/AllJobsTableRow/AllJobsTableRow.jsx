import React from "react";
import { Link } from "react-router-dom";

const AllJobsTableRow = ({ job }) => {
    return (
       
    <tr>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <div>
            <h2 className="font-medium text-lg">{job.jobTitle}</h2>
            <p className="text-sm font-normal opacity-40">{job.userName}</p>
          </div>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-purple-500 bg-opacity-10">
          <h2 className=" font-normal text-purple-500">
            {new Date(job.postDate).toLocaleDateString()}
          </h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p className="px-3 py-1  text-primary rounded-full  bg-primary bg-opacity-10">
            {new Date(job.deadline).toLocaleDateString()}
          </p>
        </div>
      </td>

      <td className="px-4 py-4 text-gray-500 text-lg  whitespace-nowrap">
        ${job.salaryFrom} - ${job.salaryTo}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <Link to={`/job/${job._id}`} className="border border-primary rounded-full px-3 text-lg text-primary py-1 hover:bg-primary hover:text-white transition transform duration-1000">View Details</Link>
      </td>
    </tr>
  );
};

export default AllJobsTableRow;
