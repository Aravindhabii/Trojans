import React from "react";
import { Eventsdiv, Eventslist, righttwo } from "../../pages/Events/Events.styles";
import {
  technicalevents,
  nontechnicalevents,
  workshops,
} from "../../datas/technical.data";
// import Phone from '../../assets/events/image-from-rawpixel-id-2836046-original.png'
import Phone from "../../assets/events/phonepng.png";

console.log(Phone);
const Technical = (props) => {
  const { currentPage, isphoneopen } = props;
  console.log(currentPage);
  const mapping = (currentPage) => {
    if (currentPage === "technicalevents") {
      return (
        <div className="eventlistdiv">
          {technicalevents.map((event) => (
            <Eventslist>
              <h3 key={event.id}>{event.name}</h3>
            </Eventslist>
          ))}
        </div>
      );
    } else if (currentPage === "nontechnicalevents") {
      return (
        <div className="eventlistdiv">
          {nontechnicalevents.map((event) => (
            <Eventslist>
              <h3 key={event.id}>{event.name}</h3>
            </Eventslist>
          ))}
        </div>
      );
    } else if (currentPage === "workshops") {
      return (
        <div className="eventlistdiv">
          {workshops.map((event) => (
            <Eventslist>
              <h3 key={event.id}>{event.name}</h3>
            </Eventslist>
          ))}
        </div>
      );
    }
  };
  return (
    <Eventsdiv phoneimg={Phone}>
      {mapping(currentPage)}
    </Eventsdiv>
  );
};

export default Technical;
