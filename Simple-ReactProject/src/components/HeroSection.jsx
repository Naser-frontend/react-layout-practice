import { Link } from "react-router-dom";
import Heroimg from "../assets/images/icons/Illustration.svg";

function HeroSection() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto grid min-h-[480px] w-full max-w-7xl items-center gap-10 px-6 py-14 sm:px-8 md:grid-cols-2 md:py-20 lg:px-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold leading-tight text-gray-700 sm:text-5xl lg:text-6xl">Lessons and insights <span className="block text-green-600">from 8 years</span></h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">Where to grow your business as a photographer: site or social media?</p>
          <Link className="mt-7 inline-flex rounded-md bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700" to="/Register">Register</Link>
        </div>
        <div className="flex justify-center md:justify-end"><img className="w-full max-w-[400px]" src={Heroimg} alt="People working with a digital platform" /></div>
      </div>
    </section>
  );
}

export default HeroSection;
