import React from "react";

const NewUI = () => {
  return (
    <div>
      {/* Webinars & Events Section */}
      <section className="bg-white py-12">
        <h2 className="text-center text-2xl font-bold">Webinars & Events</h2>
        <div className="flex justify-center mt-8 space-x-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/public/student-counselling.jpg"
              alt="Event"
              className="rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-4">
              USA Virtual Admission Day
            </h3>
            <p>March 19 - 09:00 PM to 02:30 PM</p>
            <p>Register Now {">"}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/public/student-counselling.jpg"
              alt="Event"
              className="rounded-t-lg"
            />
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

      {/* Our Students Love Us Section */}
      <section className="bg-pink-100 py-12">
        <h2 className="text-center text-2xl font-bold">Our students love us</h2>
        <div className="flex justify-center mt-8 space-x-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>
              Thank you, KC, for all the support you have provided right from
              shortlisting the university to the visa interview preparation.
            </p>
            <p className="mt-4 font-semibold">Mandar Suryaawanshi</p>
            <p>Northeastern University, USA</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>
              The team made the entire process very easy. Everyone is very
              helpful and cooperative throughout.
            </p>
            <p className="mt-4 font-semibold">Aarchi Sighat</p>
            <p>University of South Australia, Australia</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>
              Helped with counseling and making the right decision...great
              staff...would definitely recommend.
            </p>
            <p className="mt-4 font-semibold">Susan Mendonca</p>
            <p>Conestoga College, Canada</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewUI;
