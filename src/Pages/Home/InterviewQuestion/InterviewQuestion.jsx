import interview1 from "../../../assets/interview1.jpg";
const InterviewQuestion = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:mx-20 lg:mt-28 lg:gap-24">
      <div className="flex flex-col lg:flex-row gap-4 mx-4 lg:gap-11">
        <div data-aos="zoom-in"
      data-aos-duration="1000" className="card card-compact lg:w-80 p-5 bg-base-100 shadow-xl">
          <figure>
            <img className="min-h-36" src={interview1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              How to prepare yourself for your caching job interview.
            </h2>
            <div className="card-actions justify-end">
              <button className="opacity-80">Read More</button>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in"
      data-aos-duration="1000" className="card card-compact lg:w-80 p-5 bg-base-100 shadow-xl">
          <figure>
            <img className="min-h-36" src={interview1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Easy way to handle yourself at your work interview.{" "}
            </h2>
            <div className="card-actions justify-end">
              <button className="opacity-80">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 data-aos="fade-down"
      data-aos-duration="1000" className="text-4xl text-center lg:text-start font-bold mt-5 lg:mt-0">
          Popular Tip On Job <br />
          Interview
        </h3>
        <p data-aos="fade-up"
      data-aos-duration="1000"  className="opacity-80 text-center lg:text-start lg:py-6 py-2">
          Preparation for common <br className="hidden lg:flex"/>
          interview questions
        </p>
      </div>
    </div>
  );
};

export default InterviewQuestion;
