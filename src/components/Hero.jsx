import heroimg from "../assets/Image/heroimg.jpg";
import {useMemo} from "react";

const Hero = () => {
  const backgroundStyle =  useMemo(() => ({
    backgroundImage: `url(${heroimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }), [heroimg]);


  return (
    <div className="relative">
      <div 
        className="h-[500px] bg-cover bg-center" 
        style={backgroundStyle}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Supreme Land<br />for Sale Worldwide
          </h1>
          <p className="text-white max-w-md mb-6">
            We feature selling landholdings direct to you, connecting worldwide investors,
            tailored marketing, and creating unique high-end land listings.
          </p>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors w-fit">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
