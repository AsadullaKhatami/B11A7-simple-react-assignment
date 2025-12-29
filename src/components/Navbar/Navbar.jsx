import React from "react";
import { IoIosNotifications } from "react-icons/io";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="w-[100%] h-20 bg-white text-xl">
      <div className="flex justify-between items-center w-[100%] h-[100%]">
        <div>
          <p>
            <span className="text-[#003EA4]">Action</span>
            <span className="text-[#FFD337]">Gallery</span>
          </p>
        </div>

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

        <div className="right-part flex justify-center items-center">
          <IoIosNotifications />
          <div className="rounded-full w-10 bg-white">
            <img
              src="https://i.ibb.co.com/pv2pz9m3/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile.jpg"
              alt="profile pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
