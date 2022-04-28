import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import Threed from "./threed";
import {
  HeroSection,
  Button,
  Threeddiv,
  Righttwo,
  Rightone,
  Tabletdiv
} from "./Events.styles";
import Technical from "../../components/events/Technical";
import Tablet from "../../components/events/Tablet";
import {technicalevents } from "../../datas/technical.data";

const EventsPage = () => {
  const [currentPage, setCurrentPage] = useState(technicalevents);
  const [currentEvent, setCurrentEvent] = useState("technicalevents");
  const [clickedEvent, setClickedEvent] = useState('');
  const [isphoneopen, setisphoneopen] = React.useState(false);
  const [isTabletOpen, setisTabletOpen] = React.useState(false);
  const closetab = () => {
    setisTabletOpen(false);
  };
  const click = (e) => {
    if (e.target.value !== clickedEvent) {
      setClickedEvent(e.target.value);
      setisphoneopen(true);
    } else {
      setisphoneopen(false);
      setClickedEvent("");
    }
  };

  return (
    <>
      <Navbar active={{ route: "events", scroll: 2 }} />
      <HeroSection>
        <div className="left">
          <Button value="technicalevents" onClick={click}>
            Technical
          </Button>
          <Button value="nontechnicalevents" onClick={click}>
            Non-Technical
          </Button>
          <Button value="workshops" onClick={click}>
            Workshops
          </Button>
        </div>
        <div className="right">
          <Rightone>
            <Threeddiv openorclose={isphoneopen}>
              <Threed />
            </Threeddiv>
          </Rightone>
          <Righttwo openorclose={isphoneopen}>
            <Technical currentPage={currentPage} setCurrentPage={setCurrentPage} clickedEvent={clickedEvent} setClickedEvent={setClickedEvent} isTabletOpen={isTabletOpen} setisTabletOpen={setisTabletOpen}/>
          </Righttwo>
        </div>
      </HeroSection>
      <Tabletdiv  isTabletOpen={isTabletOpen} setisTabletOpen={setisTabletOpen}>
          <div onClick={closetab} className="forclose"></div>
          <Tablet />
      </Tabletdiv>
    </>
  );
};

export default EventsPage;
