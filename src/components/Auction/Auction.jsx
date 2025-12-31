import React from "react";
import { CiHeart } from "react-icons/ci";

const Auction = ({ bids }) => {
  console.log(bids);
  return (
    <div>
      <div className="grid grid-cols-5 ">
        <p className="col-span-2">Items</p>
        <p>Current Bid</p>
        <p>Lift Time</p>
        <p>Bid Now</p>
      </div>

      <div>
        {bids.map((bid) => {
          const { image, currentBidPrice, timeLeft, title } = bid;
          return (
            <div className="grid grid-cols-5 py-5 border-t-1 gap-12">
              <div className="flex gap-5 pl-5 col-span-2">
                <img className="w-33" src={image} alt="" />
                <p>{title}</p>
              </div>
              <p className="flex items-center pl-2">
                <span>$</span>
                {currentBidPrice}
              </p>
              <p className="flex items-center pl-2">{timeLeft} time left</p>
              <button className="cursor-pointer pr-4">
                <CiHeart size={28} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Auction;
