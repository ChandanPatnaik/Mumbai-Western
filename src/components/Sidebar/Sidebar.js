import React from "react";
import "./Sidebar.css";
import { IoLogoChrome } from "react-icons/io";
import { CgChevronDoubleDown } from "react-icons/cg";
import { IoLogoElectron } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { GiBattery0 } from "react-icons/gi";
import { SiApacherocketmq } from "react-icons/si";
import { AiFillShop } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineCodeSandbox } from 'react-icons/ai'
const Sidebar = () => {
  return (
    <div className="mw__main">
      <div className="mw__logo">
        <IoLogoElectron className="logo__main" />
      </div>
      <div className="mw__heading">
        <IoLogoChrome className="second__logo" />
        <div className="head__second">
          Mumbai Western <br /> <p>Mira Road</p>
        </div>
        <CgChevronDoubleDown className="arrow__button" />
      </div>
      <div className="options">
        <div className="options__menu">
          <MdDashboard className="options__button" />
          <p className="options__scrool">Dashboard</p>
        </div>

        <div className="options__menu">
          <GiBattery0 className="options__button" />
          <p className="options__scrool">Bookings</p>
        </div>

        <div className="options__menu">
          <SiApacherocketmq className="options__button" />
          <p className="options__scrool">Products & Services</p>
        </div>

        <div className="options__menu">
          <AiFillShop className="options__button" />
          <p className="options__scrool">Garages</p>
        </div>

        <div className="options__menu">
          <BsEmojiSmile className="options__button" />
          <p className="options__scrool">Users</p>
        </div>

        <div className="options__menu">
          <IoRocketOutline className="options__button" />
          <p className="options__scrool">Consultation</p>
        </div>

        <div className="options__menu">
          <FaFileInvoice className="options__button" />
          <p className="options__scrool">Invoices</p>
        </div>

        <div className="options__menu">
          <FiSettings className="options__button" />
          <p className="options__scrool">MG World</p>
        </div>

        <div className="options__menu">
          <AiOutlinePlayCircle className="options__button" />
          <p className="options__scrool">Promotions</p>
        </div>

        <div className="options__menu">
          <RiTeamLine className="options__button" />
          <p className="options__scrool">Team</p>
        </div>

        <div className="options__menu">
          <FiDatabase className="options__button" />
          <p className="options__scrool">Data Insights</p>
        </div>

        <div className="options__menu">
          <FaRupeeSign className="options__button" />
          <p className="options__scrool">Finance</p>
        </div>

        <div className="options__menu">
          <AiOutlineCodeSandbox className="options__button" />
          <p className="options__scrool">Autobox</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
