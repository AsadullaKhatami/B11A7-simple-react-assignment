import React from 'react';

const FavoriteBid = ({ Bid, clsBtn }) => {
  // console.log(Bid);
  // console.log(idBid);
  const {id, image, title, currentBidPrice, bidsCount } = Bid;
  return (
    <div className="p-3 grid grid-cols-4 gap-5">
      <div className="w-[100%]">
        <img className="w-[100%]" src={image} alt="" />
      </div>
      <div className="col-span-2">
        <p>{title}</p>
        <div className="flex gap-5">
          <p>
            <span>$</span> {currentBidPrice}
          </p>
          <p>Bids: {bidsCount}</p>
        </div>
      </div>
      <div>
        <button onClick={() => clsBtn(id)} className="cursor-pointer">
          X
        </button>
      </div>
    </div>
  );
};

export default FavoriteBid;
