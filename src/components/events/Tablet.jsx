import React from "react";
import { Tabletcont } from "../../pages/Events/Events.styles";
// import tab from "../../assets/events/tabletpng.png"
// import tab from "../../assets/events/pngtablet.png"
import tab from "../../assets/events/pngtablet-compressed.png";
import Tabletcontent from "./Tabletcontent";

const Tablet = (props) => {
  const { isTabletOpen, setisTabletOpen, currentEvent } = props;

  return (
    <Tabletcont tab={tab}>
      <h1>{currentEvent.name}</h1>
      <Tabletcontent
        currentEvent={currentEvent}
        isTabletOpen={isTabletOpen}
        setisTabletOpen={setisTabletOpen}
      />
    </Tabletcont>
  );
};

export default Tablet;
