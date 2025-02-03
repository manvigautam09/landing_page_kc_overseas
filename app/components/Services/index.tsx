import Image from "next/image";

import hand from "../../assets/hand.svg";
import star from "../../assets/star.svg";
import badge from "../../assets/badge.svg";
import location from "../../assets/location.svg";

const Services = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Services we provide
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-4">
          <Image src={hand} alt="hand" width={40} height={40} />
          <div>
            <h3 className="font-semibold text-xl mb-2">
              Test Preparing & Coaching
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-4">
          <Image src={location} alt="location" width={40} height={40} />
          <div>
            <h3 className="font-semibold text-xl mb-2">
              Course, Country & University Selection
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-4">
          <Image src={badge} alt="badge" width={40} height={40} />
          <div>
            <h3 className="font-semibold text-xl mb-2">
              Application Assistance
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg flex items-start gap-4">
          <Image src={star} alt="star" width={40} height={40} />
          <div>
            <h3 className="font-semibold text-xl mb-2">Scholarships</h3>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button
          style={{
            backgroundImage: "linear-gradient(to right, #FF6A56, #FDAF4D)",
          }}
          className="h-12 px-6 rounded-md text-white font-bold hover:shadow-lg hover:shadow-gray-400"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};
export default Services;
