import Image from "next/image";

import Header from "./components/Header";
import landingSvg from "./assets/landing-bg.svg";
import arrowDown from "./assets/arrow-down.svg";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-scroll">
      <Image src={landingSvg} alt="landing-bg" className="bg-cover w-full" />
      <Header />
      <div className="absolute top-[100px] flex flex-col items-center justify-center text-center px-4 w-full text-white">
        <div className="flex items-center gap-2 my-4 font-semibold text-base">
          <span className="opacity-50">Home</span>
          <span>•</span>
          <span>Pune Branch</span>
        </div>

        <div className="font-semibold text-4xl mt-4">
          <span>KC Overseas Education </span>
          <br />
          Pune
        </div>

        <div className="max-w-3xl text-lg mb-8">
          We value your career aspirations, which is why we map your preferences
          with the best that <br />
          our global universities have to offer. Thousands of our students are
          pursuing their programs and aspirations in eminent universities
          globally and we welcome you to pursue yours!
        </div>

        <div className="flex gap-4">
          <button
            style={{
              backgroundImage: "linear-gradient(to right, #FF6A56, #FDAF4D)",
            }}
            className="px-6 rounded-md text-white font-bold hover:opacity-80"
          >
            Enquire Now
          </button>

          <button className="flex items-center space-x-2 text-base hover:shadow-lg hover:shadow-gray-300 rounded-md p-2">
            <div className="bg-white rounded-full p-2 w-10 h-10 flex justify-center items-center">
              <Image alt="arrowDown" src={arrowDown} />
            </div>
            <div>Branch Address</div>
          </button>
        </div>
      </div>

      {/* Services Section */}
      {/* <div className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Services we provide
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-4">
            <Image src="/window.svg" alt="Test Prep" width={40} height={40} />
            <div>
              <h3 className="font-semibold text-xl mb-2">
                Test Preparing & Coaching
              </h3>
              <p className="text-gray-600">
                Expert guidance and comprehensive preparation for international
                education tests
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-4">
            <Image
              src="/globe.svg"
              alt="Course Selection"
              width={40}
              height={40}
            />
            <div>
              <h3 className="font-semibold text-xl mb-2">
                Course, Country & University Selection
              </h3>
              <p className="text-gray-600">
                Personalized assistance in choosing the right path for your
                academic journey
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-4">
            <Image src="/file.svg" alt="Application" width={40} height={40} />
            <div>
              <h3 className="font-semibold text-xl mb-2">
                Application Assistance
              </h3>
              <p className="text-gray-600">
                Complete support throughout your university application process
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-4">
            <Image
              src="/window.svg"
              alt="Scholarships"
              width={40}
              height={40}
            />
            <div>
              <h3 className="font-semibold text-xl mb-2">Scholarships</h3>
              <p className="text-gray-600">
                Access to exclusive scholarship opportunities and application
                support
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#F4804E] text-white px-8 py-3 rounded-lg">
            Enquire Now
          </button>
        </div>
      </div> */}

      {/* Global Ambitions Section */}
      {/* <div className="bg-gray-50 py-20 px-4">
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
      </div> */}
    </div>
  );
}
