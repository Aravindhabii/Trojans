import React, { useEffect, useRef, useState } from "react";
import {
  Eventsdiv,
  Eventslist,
  righttwo,
} from "../../pages/Events/Events.styles";
import {
  technicalevents,
  nontechnicalevents,
  workshops,
} from "../../datas/technical.data";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import RenderComponent from "../../components/events/RenderComponent";

import Phone from "../../assets/events/phonepng.png";
import tablet from "../../assets/events/pngtablet.png"

const Technical = (props) => {
  const {
    currentPage,
    isphoneopen,
    setCurrentPage,
    setClickedEvent,
    clickedEvent,
  } = props;

  // return
  return (
    <Eventsdiv phoneimg={Phone}>
      <RenderComponent
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        clickedEvent={clickedEvent}
        setClickedEvent={setClickedEvent}
      />
    </Eventsdiv>

  );
};

export default Technical;