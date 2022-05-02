import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSpring, animated } from "react-spring";

import Navbar from "../../components/Navbar/Navbar.component";
import Threed from "./threed";
import LaptopModel from "./RenderModels/LaptopModel";
import GamingModel from "./RenderModels/GamingModel";
import SquidModel from "./RenderModels/SquidModel";
import BitCoinModel from "./RenderModels/BitCoinModel";

import {
  HeroSection,
  Button,
  Threeddiv,
  Righttwo,
  Rightone,
  Tabletdiv,
} from "./Events.styles";
import {
  CodersChemistry,
  MasterMinds,
  SiteIng,
  PaperBytes,
  GooseChase,
  TrojansThrottle,
} from "../../datas/events.data";

import Technical from "../../components/events/Technical";
import Tablet from "../../components/events/Tablet";
import {
  technicalevents,
  nontechnicalevents,
  workshops,
  gamming,
} from "../../datas/technical.data";

const EventsPage = (props) => {
  const { page } = props;
  const [currentPage, setCurrentPage] = useState(technicalevents);
  const [isphoneopen, setisphoneopen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(CodersChemistry);
  const [clickedEvent, setClickedEvent] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [isTabletOpen, setisTabletOpen] = useState(false);

  const animation = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  const closetab = () => {
    setisTabletOpen(false);
  };

  const phoneClick = (e) => {
    if (isphoneopen === true) {
      setisphoneopen(false);
      setClickedEvent("");
    }
  };
  
  useEffect(() => {
    if (page === "technicalevents") {
      setCurrentPage(technicalevents);
      setClickedEvent("technicalevents");
      setisphoneopen(true);
    } else if (page === "nontechnicalevents") {
      setCurrentPage(nontechnicalevents);
      setClickedEvent("nontechnicalevents");
      setisphoneopen(true);
    } else if (page === "gamming") {
      setCurrentPage(gamming);
      setClickedEvent("gamming");
      setisphoneopen(true);
    } else if (page === "workshops") {
      setCurrentPage(workshops);
      setClickedEvent("workshops");
      setisphoneopen(true);
    }
  }, [page]);

  useEffect(() => {
    console.log(clickedEvent, "clickedEvent");
    if (selectedEvent === "CODERS CHEMISTRY") {
      setCurrentEvent(CodersChemistry);
      console.log("CodersChemistry");
    } else if (selectedEvent === "MASTER MINDS") {
      console.log("Master mind");
      setCurrentEvent(MasterMinds);
    } else if (selectedEvent === "SITE-ING") {
      setCurrentEvent(SiteIng);
    } else if (selectedEvent === "PAPER BYTES") {
      setCurrentEvent(PaperBytes);
    } else if (selectedEvent === "GOOSE CHASE") {
      setCurrentEvent(GooseChase);
    } else if (selectedEvent === "TROJAN'S THROTTLE") {
      setCurrentEvent(TrojansThrottle);
    } else if (selectedEvent === "TROJANCTF") {
      setCurrentEvent(CodersChemistry);
    } else if (selectedEvent === "SHUTTER STOP") {
      setCurrentEvent(CodersChemistry);
    } else if (selectedEvent === "SHIP WRECK") {
      setCurrentEvent(CodersChemistry);
    } else if (selectedEvent === "TALENT FEST") {
      setCurrentEvent(CodersChemistry);
    } else if (selectedEvent === "SQUID GAME") {
      setCurrentEvent(CodersChemistry);
    } else if (selectedEvent === "BOX CRICKET") {
      setCurrentEvent(CodersChemistry);
    } else if (selectedEvent === "ADVERTISEMENT") {
      setCurrentEvent(CodersChemistry);
    } else if (selectedEvent === "MACHINE LEARNING") {
      setCurrentEvent(CodersChemistry);
    } else if (selectedEvent === "BLOCKCHAIN") {
      setCurrentEvent(CodersChemistry);
    } else if (selectedEvent === "VALORANT") {
      setCurrentEvent(CodersChemistry);
    } else if (selectedEvent === "BGMI") {
      setCurrentEvent(CodersChemistry);
    } else if (selectedEvent === "FREE FIRE") {
      setCurrentEvent(CodersChemistry);
    }
  }, [selectedEvent]);

  const ThreedModel = () => {
    if (clickedEvent === "technicalevents") {
      return <LaptopModel />;
    } else if (clickedEvent === "nontechnicalevents") {
      return <SquidModel />;
    } else if (clickedEvent === "gamming") {
      return <GamingModel />;
    } else if (clickedEvent === "workshops") {
      return <BitCoinModel />;
    } else {
      return <GamingModel />;
    }
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
    <section
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Helmet>
        <title>EVENTS | TROJANS</title>
      </Helmet>
      <Navbar active={{ route: "events", scroll: 2 }} />
      <HeroSection>
        <div className="left">
          <Button value="technicalevents" onClick={click}>
            Technical
          </Button>
          <Button value="nontechnicalevents" onClick={click}>
            Non-Technical
          </Button>
          <Button value="gamming" onClick={click}>
            Gamming
          </Button>
          <Button value="workshops" onClick={click}>
            Workshops
          </Button>
        </div>
        <div className="right" onClick={phoneClick}>
          <Rightone isphoneopen={isphoneopen}>
            <Threeddiv openorclose={isphoneopen}>
              {/* <div> */}

              <ThreedModel />

              {/* </div> */}
            </Threeddiv>
          </Rightone>
          <Righttwo openorclose={isphoneopen}>
            <Technical
              setCurrentEvent={setCurrentEvent}
              currentEvent={currentEvent}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              clickedEvent={clickedEvent}
              setClickedEvent={setClickedEvent}
              selectedEvent={selectedEvent}
              setSelectedEvent={setSelectedEvent}
              isTabletOpen={isTabletOpen}
              setisTabletOpen={setisTabletOpen}
            />
          </Righttwo>
        </div>
      </HeroSection>
      <Tabletdiv isTabletOpen={isTabletOpen} setisTabletOpen={setisTabletOpen}>
        <div onClick={closetab} className="forclose"></div>
        <Tablet currentEvent={currentEvent} />
      </Tabletdiv>
    </section>
  );
};

export default EventsPage;
