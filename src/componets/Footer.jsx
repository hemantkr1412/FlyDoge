import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <img className="footerlogo" src={"/813.png"} style={{
            width: "70px",
            borderRadius: "50%"
          }}
            alt="" />
          <div class="heading">
            FlyDoge
          </div>
        </div>
        <div className="footer-right">
          <img onClick={() => {
            window.open("https://x.com/flydoge_sol")
          }} className="frame" alt="Frame" src="Xicon.svg" />
          <img onClick={() => {
            window.open("https://t.co/MqW7E73hNs")
          }} className="frame" alt="Frame" src="TeliIcon.svg" />
          {/* <div className="buy-container2">
            <div className="buy-content2">
              <div className="buy-text2">Buy $ADOGE</div>
            </div>
          </div> */}
        </div>
      </div>
      <div>
        <p className="disclaimer">
          Disclaimer :$FlyDoge is a meme token made for fun
        </p>
        <p className="copyRight">&copy; <span id="year">2024</span> FlyDoge All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
