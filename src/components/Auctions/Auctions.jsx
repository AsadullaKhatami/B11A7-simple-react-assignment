import React, { use } from 'react';
import './auctions.css'
import Auction from '../Auction/Auction';

const Auctions = ({ bidsPromise }) => {
    const bids = use(bidsPromise);
    // console.log(bids.bids);
  return (
    <div className="auction-bg">
      <div className="container">
        <h1>Active Auctions</h1>
        <p>Discover and bid on extraordinary items</p>
        <div className="parent flex w-[100%] border">
          <div className="items w-[70%]">
            <div>
              <p className="col-span-2">items</p>
              <p>Current bid</p>
              <p>Time Lift</p>
              <p>bid now</p>
            </div>
            {bids.bids.map((bid) => (
              <div>
                <Auction bid={bid}></Auction>
              </div>
            ))}
          </div>

          <div className="fevorite-items"></div>
        </div>
      </div>
    </div>
  );
};

export default Auctions;