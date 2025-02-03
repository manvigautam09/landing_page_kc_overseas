import circleArc from "../../assets/circle-arc.svg";
import inkNib from "../../assets/ink-arc.svg";

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
    <section className="bg-[#DBD9FF] text-center py-12">
      <h2 className="text-4xl font-semibold">
        7 Easy Steps to Land in your Dream University
      </h2>
      <div className="flex justify-center mt-8">
        {StepsToDreamUniversity.map((item) => (
          <div className="bg-white p-6 rounded-lg shadow-md" key={item.title}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button className="text-orange-500">{"<"} Previous Step</button>
        <button className="text-orange-500">Next Step {">"}</button>
      </div>
    </section>
  );
};

export default Steps;
