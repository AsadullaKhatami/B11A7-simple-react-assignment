import React from 'react';

const Auction = ({bid}) => {
    console.log(bid);
    return (
      <div>
        <p className="col-span-2">{bid.title}</p>
        <p>Current bid</p>
        <p>Time Lift</p>
        <p>bid now</p>
      </div>
    );
};

export default Auction;