import React from "react";
import { SponsorSection } from "./sponsor.styles";
import img from "../../assets/about/1.jpg";
import img2 from "../../assets/about/4.jpg";
import img3 from "../../assets/about/5.jpg";
function sponsor() {
  return (
    <SponsorSection>
      <h1>sponsors</h1>
      <div className="mainmain">
        
        <div className="main">
          <div className="sp1">
            <img src={img2} alt="" />
          </div>
          <div className="overlay"><h2>Poorvika</h2></div>
          <div className="overlay2"></div>
        </div>
       
      
      
      <div className="main">
          <div className="sp1">
            <img src={img3} alt="" />
          </div>
          <div className="overlay"><h2>Poorvika</h2></div>
          <div className="overlay2"></div>
        </div>
        <div className="main">
          <div className="sp1">
            <img src={img} alt="" />
          </div>
          <div className="overlay"><h2>Poorvika</h2></div>
          <div className="overlay2"></div>
        </div>
        <div className="main">
          <div className="sp1">
            <img src={img} alt="" />
          </div>
          <div className="overlay"><h2>Poorvika</h2></div>
          <div className="overlay2"></div>
        </div>
        <div className="main">
          <div className="sp1">
            <img src={img} alt="" />
          </div>
          <div className="overlay"><h2>Poorvika</h2></div>
          <div className="overlay2"></div>
        </div>
        <div className="main">
          <div className="sp1">
            <img src={img} alt="" />
          </div>
          <div className="overlay"><h2>Poorvika</h2></div>
          <div className="overlay2"></div>
        </div>
        
        
      </div>
      <div className="team">
        <div className="members">Prasanna</div>
        <div className="members">Loki</div>
        <div className="members">Abi</div>
        <div className="members">Santy</div>
      </div>
    </SponsorSection>
  );
}

export default sponsor;
