import Image from "next/image";
import AIRC from "../../assets/AIRC.png";
import BritishCouncil from "../../assets/BritishCouncil.png";

const LatestKCUpdates = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Latest KC Updates</h2>
      <div className="flex justify-center space-x-6">
        <div className="bg-orange-200 p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">We&apos;re Hiring!</h3>
          <p className="mb-4">
            KC continues recruitments for its offices across India and Asia even
            during the unprecedented times of Covid.
          </p>
          <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded">
            Apply now
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Image src={AIRC} alt="AIRC Logo" className="mx-auto mb-4" />
          <h4 className="text-lg font-semibold">
            American International Recruitment Council
          </h4>
          <p className="text-blue-500">Certified Agents</p>
          <span className="text-gray-500">October 2018 - 2028</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Image
            src={BritishCouncil}
            alt="BritishCouncil Logo"
            className="mx-auto mb-4"
          />
          <h4 className="text-lg font-semibold">The British Council</h4>
          <p className="text-blue-500">Advanced Agent Certificate</p>
          <span className="text-gray-500">August 2016 - 2018</span>
        </div>
      </div>
      <a href="/more-news" className="block text-center text-orange-500 mt-8">
        More News
      </a>
    </div>
  );
};

export default LatestKCUpdates;
