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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import RenderComponent from '../../components/events/RenderComponent'


// import Phone from '../../assets/events/image-from-rawpixel-id-2836046-original.png'
import Phone from "../../assets/events/phonepng.png";

console.log(Eventslist, "eventlist");
const Technical = (props) => {
  const { currentPage, isphoneopen, setCurrentPage } = props;
  const [isEvent, setIsEvent] = useState(false);
  // gsap
  const listEvents = useRef();

  useEffect(() => {
    let t1 = gsap.timeline();
    const element = document.querySelectorAll(".eventlist");
    console.log(element);
    t1.from(element, {
      duration: 1,
      // x: 400,
      // display: "none",
      opacity: 0,
      ease: "easInOut",
    });
    t1.to(element, {
      // x: 0,
      ease: "easInOut",
      // display: "flex",
      opacity: 1,
      duration: 1,
    });
  }, [currentPage]);

  // mapping

  // return
  return (<Eventsdiv phoneimg={Phone}>
    {/* {mapping(currentPage)} */}
    <RenderComponent setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    
    </Eventsdiv>);
};

export default Technical;
