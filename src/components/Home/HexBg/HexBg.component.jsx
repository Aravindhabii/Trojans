import React from "react";

import { HexBgStyle } from "./HexBg.style";

const HexBg = ({ direction, svg, color }) => {
  return (
    <HexBgStyle svg={svg} color={color} direction={direction}>
      <div className="hex"></div>
      <div className="bg"></div>
    </HexBgStyle>
  );
};

export default HexBg;
