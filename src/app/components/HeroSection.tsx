import React from "react";

const HeroSection = () => {
  return (
    <div
      className=" flex items-center justify-center relative gap-80 bg-no-repeat bg-cover bg-center"
      style={{
        width: "100%",
        height: "500px",
        backgroundImage: "url('/hero-banner.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
      <div className=" text-white flex-col flex items-center justify-center gap-10  z-10 ">
        <h1 className="text-5xl">
          Choosen Delicious <span className="font-semibold">Dish</span>
        </h1>
        <button className="text-3xl border border-white px-4 py-2">
          For More
        </button>
      </div>
      <div className="w-[40%] relative flex items-center justify-center z-10">
        <input
          type="text"
          placeholder="What are we cookin today?"
          className="py-4 w-full  px-4 rounded-md"
        />
        <button className="absolute top-0 right-0 bg-green-700 text-white h-full px-4 rounded-r-md hover:bg-green-800">
          Search
        </button>
      </div>
      {/* içine koymak istesyedik resmi -> <Image
        src="/hero-banner.png"
        alt="Description of the image"
        layout="fill"
        objectFit="cover" 
      /> */}
    </div>
  );
};

export default HeroSection;
