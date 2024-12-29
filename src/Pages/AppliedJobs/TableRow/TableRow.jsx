import React from "react";

const TableRow = ({ job, index }) => {
  const {
    jobTitle,
    userName,
    applicantEmail,
    jobCategory,
    salaryFrom,
    salaryTo,
    deadline,
  } = job;
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <div>
            <h2 className="font-medium">{index + 1}</h2>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <div>
            <h2 className="font-medium text-lg  ">{jobTitle}</h2>
            <p className="text-sm font-normal opacity-40 ">{userName}</p>
          </div>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-purple-500 bg-opacity-10 ">
          <h2 className=" font-normal text-purple-500">{applicantEmail}</h2>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-500 bg-opacity-10 ">
          <h2 className="text-lg font-normal text-emerald-500">
            {jobCategory}
          </h2>
        </div>
      </td>

      <td className="px-4 py-4 text-lg  whitespace-nowrap">
        ${salaryFrom} - ${salaryTo}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p className="px-3 py-1  text-primary rounded-full  bg-primary bg-opacity-10">
            {new Date(deadline).toLocaleDateString()}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
