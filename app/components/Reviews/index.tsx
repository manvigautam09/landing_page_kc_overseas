import Image from "next/image";
import quotes from "../../assets/quotes.svg";

const Reviews = () => {
  const studentReviews = [
    {
      message:
        "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
      name: "Mandar Suryaawanshi",
      institution: "Northeastern University, USA",
    },
    {
      message:
        "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
      name: "Aarchi Sighat",
      institution: "University of South Australia, Australia",
    },
    {
      message:
        "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
      name: "Susan Mendonca",
      institution: "Conestoga College, Canada",
    },
  ];

  return (
    <section className="bg-[#FFDCD8] py-12">
      <h2 className="text-center text-2xl font-bold">Our students love us</h2>
      <div className="flex justify-center mt-8 space-x-4">
        {studentReviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md w-[300px] h-[300px] flex flex-col justify-between"
          >
            <div>
              <Image src={quotes} alt="Quotes" />
              <p className="w-[250px] mt-4">{review.message}</p>
            </div>
            <div>
              <p className="mt-4 font-semibold">{review.name}</p>
              <p className="text-[#64647A] text-sm">{review.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
