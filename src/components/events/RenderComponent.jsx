import React, { useEffect, useState } from "react";
import {
  technicalevents,
  nontechnicalevents,
  workshops,
} from "../../datas/technical.data";
import { Eventslist } from "../../pages/Events/Events.styles";
import { gsap } from "gsap";

const RenderComponent = (props) => {
  const { currentPage, setCurrentPage, clickedEvent, setClickedEvent, isTabletOpen, setisTabletOpen } = props;
  const [previousPage, setPreviousPage] = useState("");

  const click = (e) => {
    if (isTabletOpen === false) {
      setisTabletOpen(true);
    }
  };

  useEffect(() => {
    if (clickedEvent === "technicalevents") {
      setCurrentPage(technicalevents);
    } else if (clickedEvent === "nontechnicalevents") {
      setCurrentPage(nontechnicalevents);
    } else if (clickedEvent === "workshops") {
      setCurrentPage(workshops);
    }
  }, [clickedEvent]);

  useEffect(() => {
    let t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const mainelement = document.querySelector(".rightTwo");
    const element = document.querySelectorAll(".eventlist");
    t1.from(element, {
      duration: 1,
      opacity: 0,
      ease: "easInOut",
    });
    t1.to(element, {
      ease: "easInOut",
      opacity: 1,
      duration: 1,
    });
  }, [currentPage]);

  return (
    <div className="eventlistdiv">
      {currentPage.map((event) => (
        <Eventslist onClick={click} value={event.name}>
          <h3 className="heading" key={event.id}>
            {event.name}
          </h3>
        </Eventslist>
      ))}
    </div>
  );
};

export default RenderComponent;
