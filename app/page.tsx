import Image from "next/image";

import Header from "./components/Header";
import landingSvg from "./assets/landing-bg.svg";
import landingMobileBg from "./assets/landing-mobile-bg.svg";
import arrowDown from "./assets/arrow-down.svg";
import Services from "./components/Services";
import Ambitions from "./components/Ambitions";
import Steps from "./components/Steps";
import WebinarsAndEvents from "./components/WebinarsAndEvents";
import Reviews from "./components/Reviews";
import LatestKCUpdates from "./components/LatestKCUpdates";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-scroll">
      <Image
        src={landingSvg}
        alt="landing-bg"
        className="bg-cover hidden sm:block"
      />
      <Image
        src={landingMobileBg}
        alt="landing-mobile-bg"
        className="w-full sm:hidden max-h-[720px] "
      />

      <Header />
      <div className="absolute top-[100px] sm:top-[40px] lg:top-[100px] flex flex-col items-center lg:justify-center text-center px-4 w-full text-white">
        <div className="flex items-center gap-2 xl:my-4 font-semibold text-base">
          <span className="opacity-50">Home</span>
          <span>•</span>
          <span>Pune Branch</span>
        </div>

        <div className="font-semibold text-3xl md:text-2xl lg:text-3xl xl:text-4xl mt-4">
          <span>KC Overseas Education </span>
          <br />
          Pune
        </div>

        <div className="max-w-3xl sm:text-sm lg:text-lg mb-8">
          We value your career aspirations, which is why we map your preferences
          with the best that <br />
          our global universities have to offer. Thousands of our students are
          pursuing their programs and aspirations in eminent universities
          globally and we welcome you to pursue yours!
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            style={{
              backgroundImage: "linear-gradient(to right, #FF6A56, #FDAF4D)",
            }}
            className="min-h-12 px-6 rounded-md text-white font-bold hover:shadow-lg hover:shadow-gray-400"
          >
            Enquire Now
          </button>

          <button className="flex items-center space-x-2 text-base hover:shadow-lg hover:shadow-gray-300 rounded-md p-2">
            <div className="bg-white rounded-full p-2 w-8 h-8 flex justify-center items-center">
              <Image alt="arrowDown" src={arrowDown} />
            </div>
            <div>Branch Address</div>
          </button>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* Global Ambitions Section */}
      <Ambitions />

      {/* 7 Easy Steps Section */}
      <Steps />

      {/* Webinars & Events Section */}
      <WebinarsAndEvents />

      {/* Reviews Section */}
      <Reviews />

      {/* Latest KC Updates Section */}
      <LatestKCUpdates />

      {/* Footer */}
      <Footer />
    </div>
  );
}
