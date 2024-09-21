import React from "react";
import "./howtobuy.css"

const Howtobuy = () => {
  return (
    <section id="how-to-buy" className="how-to-buy-section">
      <div className="how-to-buy-wrapper">
        <div className="how-to-buy-title">HOW TO BUY?</div>
        <div className="how-to-buy-grid">
          <div id="how-to-buy-card1" className="how-to-buy-card">
            {/* <img src={"/src/assets/htb1.svg"} alt="Download MetaMask" /> */}
            <div className="how-to-buy-cardSub1">
                <div className="containerHowTo">
                    <div className="outer-square"></div>
                    <div className="inner-rectangle">
                    <p>1</p>
                    </div>
                </div>
            </div>
            <div className="how-to-buy-cardSub2"  >
                <p>
                Download the MetaMask wallet and install it in your browser.
                </p>
            </div>
          </div>
          <div id="how-to-buy-card2" className="how-to-buy-card">
          <div className="how-to-buy-cardSub1">
            <div className="containerHowTo">
                    <div className="outer-square"></div>
                    <div className="inner-rectangle">
                    <p>3</p>
                    </div>
                </div>
            </div>
            <div className="how-to-buy-cardSub2"  >
            <p>
              Change the network from Ethereum to Ambrosus. RPC
              <br />
              used{" "}
              <a href="https://ambrosus.io" target="_blank" className="underline">
                https://network.ambrosus.io
              </a>
            </p>
            </div>
          </div>
          <div id="how-to-buy-card3" className="how-to-buy-card">
            {/* <img src={"/src/assets/htb3.svg"} alt="Load Wallet with AMB" /> */}
            <div className="how-to-buy-cardSub1">
            <div className="containerHowTo">
                <div className="outer-square"></div>
                <div className="inner-rectangle">
                <p>3</p>
                </div>
            </div>
            </div>
            <div className="how-to-buy-cardSub2">
            <p>

              Load your wallet with AMB tokens. You can send them to your wallet
              from CEXs or bridge from other chains.
            </p>
            </div>
          </div>
          <div id="how-to-buy-card4" className="how-to-buy-card">
          <div className="how-to-buy-cardSub1">
          <div className="containerHowTo">
                <div className="outer-square"></div>
                <div className="inner-rectangle">
                <p>4</p>
                </div>
            </div>
            </div>
            <div className="how-to-buy-cardSub2">
            <p>
              Go to ASTRA dex, connect your wallet, and provide the AM token CA
              <br/>
              mentioned above, then press swap.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howtobuy;
