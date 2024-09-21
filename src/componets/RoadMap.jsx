import React from "react";

import './Roadmap.css';  // Import the CSS file

const Roadmap = () => {
  return (
    <>
    <section id="roadmap" className="roadmap-section">
      <div className="roadmap-container">
        <div className="roadmap-title">ROADMAP</div>
        <img src={"/rdmap.svg"} alt="Roadmap" className="roadmap-image" />
      </div>
    </section>
    <section id="roadmap" className="roadmap-section-mobile">
       <div className="roadmap-title">ROADMAP</div>
       <div style={{
        marginTop:"2rem",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        gap:"4rem"
       }}>
          <img  src="/ellips.svg" />
          <img src="/ellips2.svg" />
       </div>

    </section>
    </>
  );
};

export default Roadmap;
