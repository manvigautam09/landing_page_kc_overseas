import Image from "next/image";
import footerBg from "../../assets/footer-bg.svg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <Image src={footerBg} alt="footerBg" />
      <div className="absolute inset-0 top-14">
        <div className="container mx-auto py-12 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Stay updated with KC Overseas
          </h2>
          <div className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="Email ID"
              className="w-64 px-4 py-2 rounded-md text-gray-700 focus:outline-none"
            />
            <select className="w-48 px-4 py-2 rounded-md text-gray-700 focus:outline-none appearance-none">
              <option>I&apos;m Interested in</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <button className="bg-[#FF9B51] text-white px-6 py-2 rounded-md hover:bg-[#f08080] focus:outline-none">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
