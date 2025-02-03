import Image from "next/image";

const Ambitions = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden bg-[#FFF1E7] p-6">
          <Image
            src="/student-counselling.jpg"
            alt="Student Counselling"
            width={600}
            height={400}
            className="rounded-2xl w-full h-auto"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Realize your global ambitions with us
          </h2>
          <p className="text-gray-600">
            With a keen ear for your choices and preferences, our counselling
            experience is so seamless that you will land in your dream
            university even before you do!
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-[#F4804E] text-2xl">•</span>
              <p>Virtual & In Person Coaching and Counselling</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#F4804E] text-2xl">•</span>
              <p>
                Comprehensive Assistance for Applications, Admissions & Visas
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#F4804E] text-2xl">•</span>
              <p>High Value Scholarships and Study Loans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ambitions;
