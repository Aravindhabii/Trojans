import React from "react";

const Switch = ({key}) => {
  // switch (key) {
  //   case value:
  //     break;

  //   default:
  //     break;
  // }
};

const RenderComponent = (props) => {
  const key = props.key;
  return <>{Switch(key)}</>;
};

export default RenderComponent;




// const mapping = (currentPage) => {
//     if (currentPage === "technicalevents") {
//       return (
//         <div className="eventlistdiv" ref={listEvents}>
//           {technicalevents.map((event) => (
//             <Eventslist>
//               <h3 className="heading" key={event.id}>
//                 {event.name}
//               </h3>
//             </Eventslist>
//           ))}
//         </div>
//       );
//     } else if (currentPage === "nontechnicalevents") {
//       return (
//         <div className="eventlistdiv" ref={listEvents}>
//           {nontechnicalevents.map((event) => (
//             <Eventslist>
//               <h3 key={event.id}>{event.name}</h3>
//             </Eventslist>
//           ))}
//         </div>
//       );
//     } else if (currentPage === "workshops") {
//       return (
//         <div className="eventlistdiv" ref={listEvents}>
//           {workshops.map((event) => (
//             <Eventslist>
//               <h3 key={event.id}>{event.name}</h3>
//             </Eventslist>
//           ))}
//         </div>
//       );
//     }
//   };