import React from "react";
import { SecondContainer } from "./Guideliness.styles";
function SecondSection() {
  return (
    <SecondContainer>
      {/* <h1>Guidelines</h1> */}
      <div className="maindiv">
        <div className="sideline"><span>1</span><span>2</span><span>3</span><span>4</span></div>
        <div className="content">
          <p>
          Every participant should carry their college identity card along with them.<br/> 
          Students participating in the event should register in the symposium’s official website.
          </p>
          <p>
          Any violation of the event rules will lead to disqualification.<br/>
          All the events will be held at the scheduled time and punctuality should be followed.
          </p>
          <p>
          A participant is not limited to participate in any number of events as long as the event timings don’t clash.<br/>
          Rules are subject to change at the discretion of the event organiser.
          </p>
          <p>
          Rules are subject to change at the discretion of the event organiser.<br/>
          The judge’s decision on the winners will be final.
          </p>
        </div>
      </div>
    </SecondContainer>
  );
}

export default SecondSection;
