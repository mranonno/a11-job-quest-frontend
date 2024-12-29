import { FaRegBookmark, FaUserCheck } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {


  const {
    jobTitle,
    userName,
    postDate,
    salaryFrom,
    salaryTo,
    applicantsNumber,
    _id,
    deadline,
  } = job;
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="border rounded-xl py-4 px-4 bg-slate-200 bg-opacity-20 relative"
    >
      <div className="absolute right-4 text-xl top-3">
        <FaRegBookmark />
      </div>
      <h3 className="text-2xl font-semibold">{jobTitle}</h3>
      <h3 className="opacity-70">{userName}</h3>
      <div className="flex items-center gap-6 mt-2">
        <p className="flex items-center gap-2">
          <MdOutlineWatchLater />
          <span>{new Date(postDate).toLocaleDateString()}</span>
        </p>
        <h3 className="flex items-center gap-2">
          <TbMoneybag />
          <span>
            ${salaryFrom} - ${salaryTo}
          </span>
        </h3>
        <h3 className="flex items-center gap-2">
          <FaUserCheck />
          No of applicant:{" "}
          <span className="opacity-70">{applicantsNumber}</span>
        </h3>
      </div>
      <hr className="border-dashed my-4" />
      <div className="flex justify-between items-center">
        <h3 className="text-primary bg-primary bg-opacity-10 rounded-full py-1 px-2">
          Deadline: {new Date(deadline).toLocaleDateString()}
        </h3>

        <Link to={`/job/${_id}`}
          className="bg-primary px-3 py-1 rounded-full text-white text-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
