import React, { useState, useEffect } from "react";
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
import {CodersChemistry, MasterMinds} from "../../datas/events.data";

import Technical from '../../components/events/Technical';
import Tablet from '../../components/events/Tablet';
import { technicalevents } from '../../datas/technical.data';

const EventsPage = () => {
  const [currentPage, setCurrentPage] = useState(technicalevents);
  const [isphoneopen, setisphoneopen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(CodersChemistry);
  const [clickedEvent, setClickedEvent] = useState('');
  const [isTabletOpen, setisTabletOpen] = useState(false);

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

  const phoneClick = (e) => {
    console.log(window.screen.width);
    if (isphoneopen === true) {
      setisphoneopen(false);
      setClickedEvent("");
    }
  }

  useEffect(() => {
    console.log('clicked useeffect');
    if(clickedEvent === 'Coders Chemistry'){
      setCurrentEvent(CodersChemistry);
    }else if(clickedEvent === 'Master Minds'){
      console.log('Master Minds');
      setCurrentEvent(MasterMinds);
    }else if(clickedEvent === 'Site-ing'){
      setCurrentEvent(CodersChemistry);
    }else if(clickedEvent === 'Paper Bytes'){
      setCurrentEvent(CodersChemistry);
    }else if(clickedEvent === 'Goose chase'){
      setCurrentEvent(CodersChemistry);
    }else if(clickedEvent === "Trojan's Throttle"){
      setCurrentEvent(CodersChemistry);
    }else if(clickedEvent === 'Technical'){
      setCurrentEvent(CodersChemistry);
    }else if(clickedEvent === 'Technical'){
      setCurrentEvent(CodersChemistry);
    }else if(clickedEvent === 'Technical'){
      setCurrentEvent(CodersChemistry);
    }else if(clickedEvent === 'Technical'){
      setCurrentEvent(CodersChemistry);
    }else if(clickedEvent === 'Technical'){
      setCurrentEvent(CodersChemistry);
    }

  }, [clickedEvent]);




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
        <div className="right" onClick={phoneClick}>
          <Rightone isphoneopen={isphoneopen}>
            <Threeddiv openorclose={isphoneopen}>
              <Threed />
            </Threeddiv>
          </Rightone>
          <Righttwo openorclose={isphoneopen}>
            <Technical setCurrentEvent={setCurrentEvent} currentEvent={currentEvent} currentPage={currentPage} setCurrentPage={setCurrentPage} clickedEvent={clickedEvent} setClickedEvent={setClickedEvent} isTabletOpen={isTabletOpen} setisTabletOpen={setisTabletOpen}/>
          </Righttwo>
        </div>
      </HeroSection>
      <Tabletdiv  isTabletOpen={isTabletOpen}  setisTabletOpen={setisTabletOpen}>
          <div onClick={closetab}  className="forclose"></div>
          <Tablet currentEvent={currentEvent}/>
      </Tabletdiv>
    </>
  );
};

export default EventsPage;
