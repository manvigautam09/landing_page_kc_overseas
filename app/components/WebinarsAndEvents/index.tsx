import Image from "next/image";

import USA from "../../assets/USA.jpg";
import UK from "../../assets/UK.jpg";
import NewZealand from "../../assets/NewZealand.jpg";

const events = [
  {
    image: USA,
    alt: "USA",
    title: "USA Virtual Admission Day",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Mar 19  05:00 PM to 07:30 PM",
  },
  {
    image: NewZealand,
    alt: "New Zealand",
    title: "New Zealand Virtual Admissions Week",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    date: "May 18 - May 21 . 04:30 PM to 06:30 PM",
  },
  {
    image: UK,
    alt: "UK",
    title: "UK Virtual Admissions Week",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    date: "May 24 - May 28 . 04:00 PM to 06:00 PM",
  },
];

const WebinarsAndEvents = () => {
  return (
    <section className="bg-white py-12">
      <h2 className="text-center text-4xl font-semibold">Webinars & Events</h2>
      <div className="flex justify-center mt-8 space-x-4 flex-wrap">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={event.image}
              alt={event.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-blue-500">{event.date}</p>
              <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
              <p className="mt-2">{event.description}</p>
              <p className="text-orange-500 mt-4">Register Now {">"}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="text-orange-500">See More {">"}</button>
      </div>
    </section>
  );
};

export default WebinarsAndEvents;
