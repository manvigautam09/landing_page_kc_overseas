import Image from "next/image";
import AIRC from "../../assets/AIRC.png";
import stars from "../../assets/stars.svg";
import BritishCouncil from "../../assets/BritishCouncil.png";
import updatedBg from "../../assets/updates-bg.svg";

const LatestKCUpdates = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Latest KC Updates</h2>
      <div className="max-w-full flex justify-center">
        <div className="flex flex-wrap justify-center space-x-6 max-w-[500px] md:max-w-full space-y-6 md:space-y-0">
          <div className="bg-[#FDAF4D] p-6 rounded-lg shadow-md flex flex-col md:max-w-[500px] relative h-[380px] justify-between">
            <Image
              src={updatedBg}
              alt="updatedBg"
              className="absolute bottom-0 right-0 h-[150px] w-[190px]"
            />
            <div>
              <h3 className="text-4xl font-semibold mb-6">
                We&apos;re Hiring!
              </h3>
              <p className="mb-4 text-xl max-w-[300px]">
                KC continues recruitments for its offices across India and Asia
                even during the unprecedented times of Covid.
              </p>
            </div>

            <button className="bg-white text-[#FF7361] w-[130px] font-semibold py-2 px-4 rounded">
              Apply now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-[270px] flex flex-col items-center">
            <div className="h-[120px]">
              <Image src={AIRC} alt="AIRC Logo" className="mx-auto mb-4" />
            </div>
            <div className="h-[50px] mt-2">
              <h4 className="text-lg text-[#0E1B2C]">
                American International Recruitment Council
              </h4>
            </div>
            <Image src={stars} alt="stars" className="my-4" />
            <p className="text-[#226CF5] text-xl">Certified Agents</p>
            <span className="text-[#64647A] text-lg mt-2">
              October 2018 - 2028
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-[270px] flex flex-col items-center">
            <div className="h-[120px]">
              <Image
                src={BritishCouncil}
                alt="BritishCouncil Logo"
                className="mx-auto mb-4 mt-2"
              />
            </div>

            <div className="h-[50px] mt-2">
              <h4 className="text-lg text-[#0E1B2C]">The British Council</h4>
            </div>
            <Image src={stars} alt="stars" className="my-4" />
            <p className="text-[#226CF5] text-xl">Advanced Agent Certificate</p>
            <span className="text-[#64647A] text-lg mt-2">
              August 2016 - 2018
            </span>
          </div>
        </div>
      </div>

      <a className="block text-center text-[#FF7361] mt-8 font-semibold">
        More News {">"}
      </a>
    </div>
  );
};

export default LatestKCUpdates;
