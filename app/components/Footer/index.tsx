import Image from "next/image";
import footerBg from "../../assets/footer-bg.svg";
import arrowDown from "../../assets/arrow-down.svg";
import mobileFooterBg from "../../assets/mobile-footer-bg.svg";

const Footer = () => {
  return (
    <footer className="relative">
      <Image src={footerBg} alt="footerBg" className="hidden md:block" />
      <Image
        src={mobileFooterBg}
        alt="footerBg"
        width={768}
        height={300}
        className="md:hidden max-h-[650px]"
      />
      <div className="absolute md:inset-0 md:top-10 inset-0 top-40">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 max-w-[335px] md:max-w-full text-center">
            Stay updated with KC Overseas
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <input
              type="email"
              placeholder="Email ID"
              className="w-64 px-4 py-2 rounded-md text-gray-700 focus:outline-none"
            />
            <div className="relative w-64">
              <select className="w-full px-4 py-2 rounded-md text-gray-700 focus:outline-none appearance-none">
                <option>I&apos;m Interested in</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <Image src={arrowDown} alt="Arrow Down" className="w-4 h-4" />
              </div>
            </div>
            <button
              style={{
                backgroundImage: "linear-gradient(to right, #FF6A56, #FDAF4D)",
              }}
              className="w-64 h-10 px-6 rounded-md text-white font-bold hover:shadow-lg hover:shadow-gray-400"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
