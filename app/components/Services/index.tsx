import Image from "next/image";

import hand from "../../assets/hand.svg";
import star from "../../assets/star.svg";
import badge from "../../assets/badge.svg";
import location from "../../assets/location.svg";

const ProvidedServices = [
  {
    icon: hand,
    title: "Test Preparing & Coaching",
  },
  {
    icon: location,
    title: "Course, Country & University Selection",
  },
  {
    icon: badge,
    title: "Application Assistance",
  },
  {
    icon: star,
    title: "Scholarships",
  },
];

const Services = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-semibold text-center my-16">
        Services we provide
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {ProvidedServices.map((service) => (
          <div
            className="bg-white rounded-xl p-8 shadow-2xl flex items-center gap-4 justify-start"
            key={service.title}
          >
            <Image src={service.icon} alt="hand" width={30} height={30} />
            <div className="font-semibold text-lg">{service.title}</div>
          </div>
        ))}
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
