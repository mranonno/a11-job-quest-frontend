import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../JobCard/JobCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Provider/AuthProvider";

const CategoryTabs = () => {
  const { loading } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [filterJobs, setFilterJobs] = useState(jobs);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/jobs`)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);
  useEffect(() => {
    if (tabIndex == 0) {
      setFilterJobs(jobs);
    }
    if (tabIndex == 1) {
      const onSiteJobs = jobs?.filter((job) => "On-Site" === job.jobCategory);
      setFilterJobs(onSiteJobs);
    }
    if (tabIndex == 2) {
      const remote = jobs?.filter((job) => "Remote" === job.jobCategory);
      setFilterJobs(remote);
    }
    if (tabIndex == 3) {
      const partTime = jobs?.filter((job) => "Part-Time" === job.jobCategory);
      setFilterJobs(partTime);
    }
    if (tabIndex == 4) {
      const onSiteJobs = jobs?.filter((job) => "Hybrid" === job.jobCategory);
      setFilterJobs(onSiteJobs);
    }
  }, [tabIndex, jobs, setFilterJobs]);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <div className="md:px-8 px-4 md:py-8 py-5 mx-auto font-poppins">
        <div className="text-center">
          <h3 data-aos="fade-down"
      data-aos-duration="1000" className="md:text-4xl text-2xl font-bold">Explore Jobs By Categories</h3>
          <p data-aos="fade-up"
      data-aos-duration="1000" className="opacity-60 my-6">
            Here are some rewarding careers worth exploring categories. They are
            On-Site, Remote, <br />
            Part-Time and Hybrid. Explore them by clicking on the tabs below.
          </p>
        </div>
        <div data-aos="flip-up"
      data-aos-duration="1000" className="flex justify-center items-center">
          <TabList>
            <Tab>All Jobs</Tab>
            <Tab>On-Site</Tab>
            <Tab>Remote</Tab>
            <Tab>Part-Time</Tab>
            <Tab>Hybrid</Tab>
          </TabList>
        </div>
        <TabPanel>
          {!loading ? (
            <div className="grid lg:mt-8 mt-4 grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-12">
              {filterJobs?.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          ) : (
            <div className="flex mt-5 justify-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {!loading ? (
            <div className="grid grid-cols-2 gap-6 mx-12 mt-5">
              {filterJobs?.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          ) : (
            <div className="flex mt-5 justify-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {!loading ? (
            <div className="grid grid-cols-2 gap-6 mx-12 mt-5">
              {filterJobs?.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          ) : (
            <div className="flex mt-5 justify-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {!loading ? (
            <div className="grid grid-cols-2 gap-6 mx-12 mt-5">
              {filterJobs?.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          ) : (
            <div className="flex mt-5 justify-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {!loading ? (
            <div className="grid grid-cols-2 gap-6 mx-12 mt-5">
              {filterJobs?.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          ) : (
            <div className="flex mt-5 justify-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          )}
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default CategoryTabs;
