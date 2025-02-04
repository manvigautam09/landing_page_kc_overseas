import Image from "next/image";

import USA from "../../assets/USA.jpg";
import UK from "../../assets/UK.jpg";
import NewZealand from "../../assets/NewZealand.jpg";

const WebinarsAndEvents = () => {
  return (
    <section className="bg-white py-12">
      <h2 className="text-center text-4xl font-semibold">Webinars & Events</h2>
      <div className="flex justify-center mt-8 space-x-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image src={USA} alt="USA" className="rounded-t-lg" />

          <h3 className="text-lg font-semibold mt-4">
            USA Virtual Admission Day
          </h3>
          <p>March 19 - 09:00 PM to 02:30 PM</p>
          <p>Register Now {">"}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image src={UK} alt="UK" className="rounded-t-lg" />
          <h3 className="text-lg font-semibold mt-4">
            UK Virtual Admissions Week
          </h3>
          <p>May 21 - 04:00 PM to 06:00 PM</p>
          <p>Register Now {">"}</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="text-orange-500">See More {">"}</button>
      </div>
    </section>
  );
};

export default WebinarsAndEvents;
