import React, { use } from 'react';
import './auctions.css'
import Auction from '../Auction/Auction';
import Fevorite from '../FevoritesItems/Fevorite';

const Auctions = ({ bidsPromise }) => {
    const { bids } = use(bidsPromise);
    // console.log(bids);
  return (
    <div className="auction-bg py-[120px]">
      <div className="container">
        <h2 className="text-2xl font-semibold text-slate-800">
          Active Auctions
        </h2>
        <p className="text-slate-500 mb-6">
          Discover and bid on extraordinary items
        </p>
      </div>
      <div className="container md:flex gap-6 w-screen">
        <div className="bg-white rounded-3xl p-5 w-[70%]">
          <Auction bids={bids}></Auction>
        </div>
        <div className='w-[33%]'>
          <Fevorite></Fevorite>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Auctions;