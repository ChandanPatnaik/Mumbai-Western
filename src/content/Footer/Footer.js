import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
      <div className="mw__footer">
        <div className="mw__footer_part">
          <div className="first">
            <h2>MG Coins </h2>
            <p>Distributed </p>
            <p>Reedemed </p>
          </div>
          <div className="second">
            <h2>90</h2>
            <p>100</p>
            <p>100</p>
          </div>
        </div>
        <div className="mw__footer_part">
          <div className="first">
            <h2>All Garages </h2>
            <p>Active </p>
            <p>Inactive </p>
          </div>
          <div className="second">
            <h2>90</h2>
            <p>100</p>
            <p>100</p>
          </div>
        </div>
        <div className="mw__footer_part">
          <div className="first">
            <h2>Tickets </h2>
            <p>Open </p>
            <p>Closed</p>
          </div>
          <div className="second">
            <h2>90</h2>
            <p>100</p>
            <p>100</p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
