import React from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="mw__nav">
      <div className="head1">Overview</div>
      <div className="mw__compo">
        <div className="mw__search">
          <button className="mw__search_button">
            <BsSearch />
            <p>Search</p>
          </button>
        </div>
        <div className="mw__month">
          <button className="mw__month_button">Days</button>
          <button className="mw__month_button">Weeks</button>
          <button className="mw__month_button">Months</button>
        </div>

        <div className="mw__time">
          <button className="mw__time_button">
            <BsFillFileEarmarkArrowDownFill />
            <p>Jan, 2019 - Dec,2019</p>
          </button>
        </div>
        <div className="mw__notifi">
          <div>
            <IoIosNotificationsOutline className="mw__noti" />
          </div>
          <div>
            <AiOutlineUser className="mw__user" />
            <FaGreaterThan className="mw__arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
