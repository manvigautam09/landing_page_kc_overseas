import Image from "next/image";

import listStar from "../../assets/list-star.svg";
import studentCounselling from "../../assets/student-counselling.jpg";

const AmbitionsList = [
  {
    label: "Virtual & In Person Coaching and Counselling",
  },
  {
    label: "Comprehensive Assistance for Applications, Admissions & Visas",
  },
  {
    label: "High Value Scholarships and Study Loans",
  },
];

const Ambitions = () => {
  return (
    <div className="pb-20 px-4 flex flex-col justify-center items-center w-full">
      <div className="w-[100%] max-w-6xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-8">
        <div className="relative bg-[#FFE7C9] rounded-lg shadow-md h-[300px] w-[300px] md:h-[400px] md:w-[450px]">
          <Image
            src={studentCounselling}
            alt="Student Counselling"
            className="absolute rounded-lg top-6 left-6 h-[300px] w-[300px] md:h-[400px] md:w-[450px]"
          />
        </div>

        <div>
          <div className="text-xl md:text-2xl font-semibold text-center md:text-left">
            Realize your global ambitions with us
          </div>
          <p className="mt-3 text-center md:text-left">
            With a keen ear for your choices and preferences, our counselling
            <br />
            experience is so seamless that you will land in your dream
            <br />
            university even before you do!
          </p>

          <div className="space-y-4 mt-5">
            {AmbitionsList.map((item) => (
              <div className="flex items-center gap-3" key={item.label}>
                <div className="bg-white rounded-full p-2 shadow-sm">
                  <Image src={listStar} alt="list star" />
                </div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ambitions;
