import React from 'react';

const Footer = () => {
    return (
      <div className="flex flex-col justify-center items-center py-33 w-[100%]">
        <div className="text-3xl">
          <p>
            <span className="text-[#003EA4]">Action</span>
            <span className="text-[#FFD337]">Gallery</span>
          </p>
        </div>
        <div className="py-5">
          <ul className="flex menu">
            <li>Bin </li>
            <li>Win </li>
            <li>Own</li>
          </ul>
        </div>
        <div className="border-t-1 border-[#003EA4] border-dashed w-[60%]"></div>
        <div>
          <ul className="flex menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Auctions</li>
            </a>
            <a href="#">
              <li>Categories</li>
            </a>
            <a href="#">
              <li>How to works</li>
            </a>
          </ul>
        </div>
        <div className="py-5">
          <p>&#169; 2025 AuctionHub. All rights reserved.</p>
        </div>
      </div>
    );
};

export default Footer;