import logo from "../../assets/logo.svg";
import Image from "next/image";

const navItems = [
  { label: "Study Destinations" },
  { label: "Services" },
  { label: "Company" },
  { label: "Upcoming events" },
];

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 flex items-center h-20 px-12 py-2 justify-between ">
      <Image src={logo} alt="logo" width={205} height={45} />
      <div className="flex space-x-10 text-white font-semibold text-base items-center">
        {navItems.map((item) => (
          <nav key={item.label}>{item.label}</nav>
        ))}
        <button className="border border-white rounded px-4 py-2">
          Course Finder
        </button>
      </div>
    </header>
  );
};

export default Header;
