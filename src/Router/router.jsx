import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AddJobs from "../Pages/AddJobs/AddJobs";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateJob from "../Pages/MyJobs/UpdateJob/UpdateJob";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/allJobs",
        element: <AllJobs />,
      },
      {
        path: "/addJob",
        element: <AddJobs />,
      },
      {
        path: "/myJobs",
        element: <MyJobs />,
      },
      {
        path: "/update/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
    ],
  },
]);

export default router;
