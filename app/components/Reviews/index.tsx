const Reviews = () => {
  return (
    <section className="bg[#FFDCD8] py-12">
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
            The team made the entire process very easy. Everyone is very helpful
            and cooperative throughout.
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
  );
};

export default Reviews;
