import React, { useState } from "react";
import { TabletScreen } from "../../pages/Events/Events.styles";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";

const Tabletcontent = () => {
  const [pageno, setpageno] = useState(1);

  const handleLeft = () => {
    if (pageno > 1) {
      setpageno(pageno - 1);
    }
  };
  const handleRight = () => {
    if (pageno < 3) {
      setpageno(pageno + 1);
    }
  };

  return (
    <TabletScreen pageno={pageno}>
      <LeftCircleOutlined onClick={handleLeft} className="leftarrow" />
      <RightCircleOutlined onClick={handleRight} className="rightarrow" />
      <div className="description">
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, urna eu tincidunt consectetur, nisi nisl tincidunt nisi, eget
          congue nisl nisi eu nisi. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur,
          nisi nisl tincidunt nisi, eget congue nisl nisi eu nisi. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Pellentesque euismod,
          urna eu tincidunt consectetur, nisi nisl tincidunt nisi, eget congue
          nisl nisi eu nisi.
        </p>
      </div>
      <div className="rules">
        <h2>Rules</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Pellentesque euismod, urna eu tincidunt consectetur.</li>
          <li>Nisi nisl tincidunt nisi, eget congue nisl nisi eu nisi.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Pellentesque euismod, urna eu tincidunt consectetur.</li>
          <li>Nisi nisl tincidunt nisi, eget congue nisl nisi eu nisi.</li>
        </ul>
      </div>
      <div className="students">
        <h2>Student Coordinators</h2>
        <div className="studentscontainer">
          <h3 className="name">Name -</h3>
          <h3 className="phoneno">Phone No.</h3>
        </div>
      </div>
    </TabletScreen>
  );
};

export default Tabletcontent;
