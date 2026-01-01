import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Auction = ({ bids, handelHeart, idBid }) => {
  // console.log(bids);
  // console.log(idBid)

  const checkHeart = (id) => {
    for(let i = 0; i<idBid.length; i++){
      if(idBid[i] === id){
        return true;
      }
    }
    return false;
  }
  
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
          const { id, image, currentBidPrice, timeLeft, title } = bid;
          return (
            <div key={id} className="grid grid-cols-5 py-5 border-t-1 gap-12">
              <div className="flex gap-5 pl-5 col-span-2">
                <img className="w-33" src={image} alt="" />
                <p>{title}</p>
              </div>
              <p className="flex items-center pl-2">
                <span>$</span>
                {currentBidPrice}
              </p>
              <p className="flex items-center pl-2">{timeLeft} time left</p>
              <button
                onClick={() => {
                  handelHeart(bid);
                }}
                className="cursor-pointer pr-4"
              >
                {checkHeart(id) ? (
                  <FaHeart color="red" size={28} />
                ) : (
                  <CiHeart color="red" size={28} />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Auction;
