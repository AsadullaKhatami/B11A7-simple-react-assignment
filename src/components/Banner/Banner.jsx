import React from 'react';
import './banner.css'
import banner from "./../../assets/Banner-min.jpg";

const Banner = () => {
    const containerStyle = {
      backgroundImage: `url(${banner})`,
      backgroundSize: "cover", // Optional: cover the entire container
      backgroundRepeat: "no-repeat", // Optional: prevent image repetition
      height: "100vh", // Optional: set a height for visibility
    };
    return (
      <div style={containerStyle}>
        <div className="flex flex-col items-start justify-center h-[100%] container sora">
          <h1 className="text-5xl text-white font-semibold">
            <p>Bid on Unique Items from</p>
            <p>Around the World</p>
          </h1>
          <h5 className="font-light text-2xl opacity-75 text-white sora my-5">
            <p>Discover rare collectibles, luxury goods, and vintage</p>
            <p>treasures in our curated auctions</p>
          </h5>
          <button className="bg-white text-black px-4 py-2 rounded-4xl">
            Explore Auctions
          </button>
        </div>
      </div>
    );
};

export default Banner;