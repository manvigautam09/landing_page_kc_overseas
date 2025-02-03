import Image from "next/image";

import Header from "./components/Header";
import landingSvg from "./assets/landing-bg.svg";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-scroll">
      <Image src={landingSvg} alt="landing-bg" className="bg-cover w-full" />
      <Header />

      <div className="absolute">
        <h1 className="text-5xl font-bold">KC Overseas Education</h1>
        <p className="text-2xl">Pune</p>
        <div>
          We value your career aspirations, which is why we map your preferences
          with the best that our global universities have to offer. Thousands of
          our students are pursuing their programs and aspirations in eminent
          universities globally and we welcome you to pursue yours!
        </div>
      </div>
    </div>
  );
}
