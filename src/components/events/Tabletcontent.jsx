import React, { useState } from "react";
import { TabletScreen } from "../../pages/Events/Events.styles";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";

const Tabletcontent = (props) => {
  const { currentEvent } = props;
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
        <p>{currentEvent.description}</p>
      </div>
      <div className="rules">
        <h2>Rules</h2>
        <ul>
          {currentEvent.rules.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </div>
      <div className="students">
        <h2>Student Coordinators</h2>
        {currentEvent.studentCordinators.map((student) => (
          <div className="studentscontainer">
            <h3 className="name">{student.name}</h3>
            <h3 className="phoneno">{student.phoneNo}</h3>
          </div>
        ))}
      </div>
    </TabletScreen>
  );
};

export default Tabletcontent;

{
  /* <h3 className="name">Name -</h3>
          <h3 className="phoneno">Phone No.</h3> */
}

{
  /* <ul>
          <li>A single Team should consist of two members. </li>
          <li>
            The time limit of the task is about 30 min and should be strictly
            adhered to.
          </li>
          <li> The 30 min is split up into three 10 minute sessions. </li>
          <li>
            There shall be no switching in between each session and will happen
            after each session finishes.{" "}
          </li>
          <li>Cheating and Plagiarism will lead to disqualification. </li>
          <li>
            Winner of the physical task can discuss with the teammate in that 10
            min for about 2 minutes only.{" "}
          </li>
          <li>After 10 mins the teammates should swap their roles.</li>
        </ul> */
}
