import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";
import CategoryTabs from "./CategoryTabs/CategoryTabs";
import GettingApplicant from "./GettingApplicant/GettingApplicant";
import InterviewQuestion from "./InterviewQuestion/InterviewQuestion";

const Home = () => {
    return (
        <div>
            <Helmet>
          <title>JobQuest | Home</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
            <Slider />
            <CategoryTabs />
            <GettingApplicant />
            <InterviewQuestion/>
        </div>
    );
};

export default Home;