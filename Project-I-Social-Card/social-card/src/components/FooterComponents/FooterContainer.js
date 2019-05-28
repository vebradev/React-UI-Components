import React from "react";
import FooterIcons from "./FooterIcons";
import "./Footer.css";

function FooterContainer() {
  return (
    <div className="footerContainer">
        <FooterIcons comments="" retweets="6" likes="4"/>
    </div>
  );
}

export default FooterContainer;
