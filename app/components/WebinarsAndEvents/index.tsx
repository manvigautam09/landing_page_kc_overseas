import Image, { StaticImageData } from "next/image";

import USA from "../../assets/USA.jpg";
import UK from "../../assets/UK.jpg";
import NewZealand from "../../assets/NewZealand.jpg";

interface Event {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  date: string;
}
const highlightEvent: Event = {
  image: USA,
  alt: "USA",
  title: "USA Virtual Admission Day",
  description:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  date: "Mar 19  05:00 PM to 07:30 PM",
};

const events: Event[] = [
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

const Event = ({ event, split }: { event: Event; split?: boolean }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[512px] ${
        split ? "h-[250px] flex" : ""
      }`}
    >
      <Image
        src={event.image}
        alt={event.alt}
        className={`object-cover ${
          split ? "w-[195px] h-full" : "w-full h-[200px] sm:h-[300px]"
        }`}
      />
      <div className={`${split ? "p-2 sm:p-4" : "p-4 sm:p-6"}`}>
        <p className="text-[#226CF5] text-sm sm:text-base">{event.date}</p>
        <h3 className="text-base sm:text-lg font-semibold mt-2">
          {event.title}
        </h3>
        <p className="mt-2 text-sm sm:text-base">{event.description}</p>
        <p className="text-[#FF7361] text-base font-semibold mt-4">
          Register Now {">"}
        </p>
      </div>
    </div>
  );
};

const WebinarsAndEvents = () => {
  return (
    <section className="bg-white py-8 sm:py-12">
      <h2 className="text-center text-2xl sm:text-4xl font-semibold">
        Webinars & Events
      </h2>
      <div className="mt-4 sm:mt-8 flex justify-center w-full">
        <div className="max-w-5xl flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <Event event={highlightEvent} />
          <div className="flex flex-col space-y-3">
            {events.map((event, index) => (
              <Event key={index} event={event} split />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="text-[#FF7361] text-base font-semibold">
          See More {">"}
        </button>
      </div>
    </section>
  );
};

export default WebinarsAndEvents;
