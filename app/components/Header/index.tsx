"use client";
import Image from "next/image";
import { useState } from "react";

import logo from "../../assets/logo.svg";
import close from "../../assets/close.svg";
import hamburger from "../../assets/hamburger.svg";

const navItems = [
  { label: "Study Destinations" },
  { label: "Services" },
  { label: "Company" },
  { label: "Upcoming events" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 flex items-center h-20 px-12 py-2 justify-between">
      <Image src={logo} alt="logo" width={205} height={45} />
      <Image
        src={hamburger}
        alt="hamburger"
        className="lg:hidden cursor-pointer z-10"
        onClick={() => setIsMenuOpen(true)}
      />

      <div className="hidden lg:flex flex-wrap space-x-10 text-white font-semibold text-base items-center">
        {navItems.map((item) => (
          <nav key={item.label}>{item.label}</nav>
        ))}
        <button className="border border-white rounded px-4 py-2">
          Course Finder
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "translate-y-0 backdrop-blur-sm" : "-translate-y-full"
        } fixed top-0 right-0 bg-[#6C48F0] z-50 px-8 py-8 w-full ease-in-out duration-500 lg:hidden`}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="flex justify-end ml-auto"
          title="Close Menu"
        >
          <Image src={close} alt="close" />
        </button>
        <div className="flex flex-col gap-8 text-lg items-center text-white font-semibold">
          {navItems.map((item) => (
            <nav key={item.label}>{item.label}</nav>
          ))}
          <button className="border border-white rounded px-4 py-2">
            Course Finder
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
