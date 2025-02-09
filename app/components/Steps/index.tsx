import Image from "next/image";

import inkNib from "../../assets/ink-arc.svg";
import circleArc from "../../assets/circle-arc.svg";

const StepsToDreamUniversity = [
  {
    title: "Counseling",
    description: "Plan your Academic and Career Goals",
    icon: circleArc,
  },
  {
    title: "Test Preparation",
    description: "Appear for Standardized Tests",
    icon: inkNib,
  },
  {
    title: "University Selection",
    description: "Select the Right University",
    icon: circleArc,
  },
  {
    title: "Application",
    description: "Apply to your Dream University",
    icon: inkNib,
  },
  {
    title: "Visa Application",
    description: "Apply for your Student Visa",
    icon: circleArc,
  },
  {
    title: "Accommodation",
    description: "Find the Right Accommodation",
    icon: inkNib,
  },
  {
    title: "Travel",
    description: "Travel to your Dream Destination",
    icon: circleArc,
  },
];

const Steps = () => {
  return (
    <section className="bg-[#DBD9FF] text-center py-12 overflow-hidden">
      <h2 className="text-4xl font-semibold">
        7 Easy Steps to Land in your Dream University
      </h2>
      <div className="flex ml-[40%] w-full mt-8">
        <div className="flex mt-12 overflow-x-scroll space-x-5 max-w-[800px]">
          {StepsToDreamUniversity.map((item, index) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="bg-white shadow h-10 w-10 rounded-full mb-10 flex justify-center items-center">
                {index + 1}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md min-w-[400px] flex flex-col items-center">
                <Image src={item.icon} alt={item.title} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-10 font-semibold text-base">
        <button className="text-[#FF7361]">{"<"} Previous Step</button>
        <button className="text-[#FF7361]">Next Step {">"}</button>
      </div>
    </section>
  );
};

export default Steps;
