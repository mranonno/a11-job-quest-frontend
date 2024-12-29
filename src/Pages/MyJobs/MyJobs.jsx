import axios from "axios";
import { toast } from "react-toastify";
import MyJobsTableRow from "./MyJobsTableRow/MyJobsTableRow";
import swal from "sweetalert";
import useAxiosProtect from "../../hooks/useAxiosProtect";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const MyJobs = () => {
  const { user } = useAuth();
  const AxiosProtect = useAxiosProtect();

  {
    /***** TanStack Query *****/
  }
  const {
    data: myJobs = [],
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    enabled: !!user?.email,
    queryFn: () => getJobData(),
    queryKey: ["jobs"],
  });

  const getJobData = async () => {
    const { data } = await AxiosProtect.get(`/myJobs/${user?.email}`);
    return data;
  };

  const {mutateAsync} = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/job/${id}`
      );
    },
    onSuccess: () => {
      refetch()
    }
  });

  const handleDeletePost = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Tourists spot!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        mutateAsync(id)
        swal("Done! Your Job has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Job is safe!");
      }
    });
  };

  if (isLoading)
    return (
      <div className="text-center mt-20">
        <span className="loading border loading-ring loading-lg"></span>
      </div>
    );
  if (isError || error) return toast.error(error.message);
  return (
    <div className="lg:mx-16 lg:mt-12 mx-4 mt-5 mb-5 font-poppins">
      <div>
        <h3 className="text-4xl text-center font-medium">My Posted Jobs</h3>
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
                        Applicants Number
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
                        Edit
                      </th>
                    </tr>
                  </thead>

                  {/***** Table body row *****/}
                  <tbody className="bg-white bg-opacity-10 divide-y divide-gray-200  ">
                    {myJobs?.map((job) => (
                      <MyJobsTableRow
                        key={job._id}
                        handleDeletePost={handleDeletePost}
                        job={job}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/***** date compare *****/}








    </div>
  );
};

export default MyJobs;
