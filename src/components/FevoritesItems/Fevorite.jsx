import React from "react";
import { CiHeart } from "react-icons/ci";
import FavoriteBid from "../FavoriteBid/FavoriteBid";

const Favorite = ({ favBid, clsBtn }) => {
  return (
    <div className="bg-white rounded-3xl p-5">
      <div className="flex justify-center items-center p-2">
        <CiHeart size={28} />
        <h1>Favorite Items</h1>
      </div>
      <div className="border-y-1">
        {favBid.map((Bid) => (
          <FavoriteBid clsBtn={clsBtn} key={Bid.id} Bid={Bid}></FavoriteBid>
        ))}
      </div>
      <div className="flex justify-between items-center p-8">
        <p>
          Total bids Amount <span>$</span>
          <span>0000</span>
        </p>
      </div>
    </div>
  );
};

export default Favorite;
