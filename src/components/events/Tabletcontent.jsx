import React, { useEffect, useState } from "react";
import {
    TabletScreen,
    Register,
    Closebtn,
} from "../../pages/Events/Events.styles";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Tabletcontent = (props) => {
    const { currentEvent, isTabletOpen, setisTabletOpen } = props;
    const [pageno, setpageno] = useState(1);
    const tabclose = () => {
        setisTabletOpen(false);
    };

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

    useEffect(() => {
        if (isTabletOpen === false) {
            setpageno(1);
        }
    }, [isTabletOpen]);
    return (
        <TabletScreen pageno={pageno}>
            <LeftCircleOutlined onClick={handleLeft} className="leftarrow" />
            <RightCircleOutlined onClick={handleRight} className="rightarrow" />
            <Closebtn onClick={tabclose} />
            <Link style={{ textDecoration: "none" }} to="/registration">
                <Register>
                    <p>Register</p>
                </Register>
            </Link>
            {/* <Closebtn onClick={tabclose} /> */}
            <div className="description">
                {/* <h2>Description</h2> */}
                {currentEvent.duration ? (
                    <h3>
                        <b>Duration:</b> {currentEvent.duration}
                    </h3>
                ) : null}
                {currentEvent.timestamp ? (
                    <h3>
                        <b>Timings:</b> {currentEvent.timestamp}
                    </h3>
                ) : null}
                <p>{currentEvent.description.split("_")[0]}</p>
                <br />
                <p>{currentEvent.description.split("_")[1]}</p>
            </div>
            <div className="rules">
                <h2>Rules</h2>
                <ul>
                    {currentEvent.rules.map((event, index) => (
                        <li key={index}>{event}</li>
                    ))}
                </ul>
            </div>
            <div className="students">
                <h2>Student Coordinators</h2>
                {currentEvent.studentCordinators.map((student, index) => (
                    <div className="studentscontainer" key={index}>
                        <h4 className="name">{student.name}</h4>
                        <h4 className="phoneno">{student.phoneNo}</h4>
                    </div>
                ))}
            </div>
        </TabletScreen>
    );
};

export default Tabletcontent;

// {
//     <h3 className="name">Name -</h3>
//     <h3 className="phoneno">Phone No.</h3>
// }

// {
//     <ul>
//         <li>A single Team should consist of two members. </li>
//         <li>
//             The time limit of the task is about 30 min and should be strictly
//             adhered to.
//         </li>
//         <li> The 30 min is split up into three 10 minute sessions. </li>
//         <li>
//             There shall be no switching in between each session and will happen
//             after each session finishes.{" "}
//         </li>
//         <li>Cheating and Plagiarism will lead to disqualification. </li>
//         <li>
//             Winner of the physical task can discuss with the teammate in that 10
//             min for about 2 minutes only.{" "}
//         </li>
//         <li>After 10 mins the teammates should swap their roles.</li>
//     </ul>;
// }
