import Image from "next/image";

import listStar from "../../assets/list-star.svg";

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
    <div className="pb-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative bg-[#FFE7C9] rounded-lg shadow-md h-[400px] w-[450px]">
          <Image
            src="/student-counselling.jpg"
            alt="Student Counselling"
            width={450}
            height={400}
            className="absolute rounded-lg top-6 left-6"
          />
        </div>

        <div>
          <div className="text-2xl font-semibold">
            Realize your global ambitions with us
          </div>
          <p className="mt-3">
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
