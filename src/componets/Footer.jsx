import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <img src={"/src/assets/footerlogo.svg"} alt="" />
          <p className="disclaimer">
            Disclaimer
            <br />
            $ADOGE is a meme token made for fun
          </p>
        </div>
        <div className="footer-right">
          <img className="frame" alt="Frame" src="https://c.animaapp.com/MIx9ki2W/img/frame-21.svg" />
          <div className="buy-container2">
            <div className="buy-content2">
              <div className="buy-text2">Buy $ADOGE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
