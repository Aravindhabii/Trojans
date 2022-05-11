import styled from "styled-components";

export const HeroSection = styled.section`
  /* background-color: #1e1e1e; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 3rem;
  z-index: 2;

  .left {
    position: relative;
    height: 90%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: rgb(0,0,0); */
  }

  .right {
    position: relative;
    height: 100%;
    width: 70%;
    display: flex;
  }

  .threedwrapper {
    position: absolute;
    height: 100%;
    width: 50%;
    display: flex;
    bottom: 0;
    left: 0%;
  }

  .canvas {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 910px) {
    .left {
      width: 100%;
      z-index: 2;
    }
    .right {
      width: 100%;
      position: absolute;
      z-index: 3;
      display: ${({ isphoneopen }) => (isphoneopen ? "flex" : "none")};
    }
  }
`;

export const Rightone = styled.div`
  position: relative;
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1150px) {
    display: ${({ isphoneopen }) => (!isphoneopen ? "flex" : "none")};
  }
  @media (max-width: 910px) {
    display: none;
  }
`;

export const Righttwo = styled.div.attrs({
  className: "rightTwo",
})`
  position: relative;
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  overflow-y: hidden;
  align-items: center;
  transform: ${({ openorclose }) =>
      openorclose ? "translateX(0)" : "translateX(200%)"}
    rotate(0deg);
  transition: transform 0.5s ease-in-out;
  @media (max-width: 1150px) {
    width: 100%;
    z-index: 5;
  }
  @media (max-width: 560px) {
    width: 100%;
    background: #000;
  }
`;

export const Button = styled.button`
  position: relative;
  border: none;
  width: 70%;
  height: 17%;
  border-radius: 5px;
  color: #fff;
  background: black;
  font-size: 1.6rem;
  font-weight: bold;
  /* padding: 10% 10%; */
  margin-top: 1rem;
  text-align: center;
  border: 1px solid #03e9f4;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(46, 255, 171, 0.86);
  -moz-box-shadow: 0px 0px 10px 0px rgba(46, 255, 171, 0.86);
  box-shadow: 0px 0px 10px 0px rgba(46, 255, 171, 0.86);
  &:hover {
    color: rgba(46, 255, 171, 0.86);
    text-shadow: 0px 0px 10px rgba(46, 255, 171, 0.86);
    -webkit-box-shadow: 0px 0px 30px 0px rgba(46, 255, 171, 0.86);
    -moz-box-shadow: 0px 0px 30px 0px rgba(46, 255, 171, 0.86);
    box-shadow: 0px 0px 30px 0px rgba(46, 255, 171, 0.86);
  }
  @media (max-width: 910px) {
    width: 70%;
    height: 30%;
  }
`;

export const Eventsdiv = styled.div.attrs({
  className: "rightTwo",
})`
  position: absolute;
  width: 95%;
  height: 85%;
  color: #fff;
  background: ${({ phoneimg }) =>
    phoneimg ? `url(${phoneimg})` : "palevioletred"};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  align-items: center;
  border-radius: 60px;
  box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4,
    inset 0 0 5px rgba(3, 233, 244, 0.5), inset 0 0 15px rgba(3, 233, 244, 0.5),
    inset 0 0 5px rgba(3, 233, 244, 0.5);
  .eventlistdiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85%;
    width: 95%;
  }
  .closediv {
    position: absolute;
    bottom: 2%;
    right: 50%;
    height: 25px;
    width: 25px;
    display: inline-block;
    transform: translateX(50%);
    border-radius: 50%;
    box-shadow: 0 0 1px #03e9f4, 0 0 2px #03e9f4, 0 0 1px #03e9f4,
    inset 0 0 5px rgba(3, 233, 244, 0.5), inset 0 0 15px rgba(3, 233, 244, 0.5),
    inset 0 0 5px rgba(3, 233, 244, 0.5);
  }
  /* .closeone{
    position: absolute;
    height: 100%;
    width: 20%;
    background: #fff;
    transform: rotate(45deg);
    
  }
  .closetwo{
    position: absolute;
    height: 100%;
    width: 20%;
    background: #fff;
    transform: rotate(-45deg);
    box-shadow: 0 0 1px #03e9f4, 0 0 2px #03e9f4, 0 0 1px #03e9f4,
    inset 0 0 5px rgba(3, 233, 244, 0.5), inset 0 0 15px rgba(3, 233, 244, 0.5),
    inset 0 0 5px rgba(3, 233, 244, 0.5);
  } */

  @media (max-width: 1150px) {
    background: rgba(0, 0, 0, 0.9);
    width: 40%;
    left: 30%;
  }
  @media (max-width: 710px) {
    left: 50%;
    width: 100%;
  }
  @media (max-width: 560px) {
    left: 16%;
    width: 70%;
  }
  @media (max-width: 440px) {
    height: 80%;
    width: 75%;
    left: 13%;
    /* font-size: 1rem; */
    border-radius: 40px;
  }
`;

export const Register = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  background: transparent;
  color: rgba(3, 233, 244, 0.5);
  /* font-size: 1.2rem; */
  font-weight: bold;
  padding: 15px 25px;

  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4,
    inset 0 0 5px rgba(3, 233, 244, 0.5), inset 0 0 15px rgba(3, 233, 244, 0.5),
    inset 0 0 5px rgba(3, 233, 244, 0.5);
  &:hover {
    box-shadow: 0 0 1px rgba(3, 233, 244, 0.5),
      0 0 2px rgba(3, 233, 244, 0.5),
      0 0 1px rgba(3, 233, 244, 0.5),
      inset 0 0 5px rgba(3, 233, 244, 0.5),
      inset 0 0 15px rgba(3, 233, 244, 0.5),
      inset 0 0 5px rgba(3, 233, 244, 0.5);
  }
  /* @media (max-width: 1150px) {
    display: none;
  }
  @media (max-width: 710px) {
    display: none;

  } */
  @media (max-width: 560px) {
    display: none;
  }
  @media (max-width: 440px) {
    display: none;
  }

`

export const Closebtn = styled.div`
  position: absolute;
  bottom: 5%;
  right: 50%;
  height: 40px;
  width: 40px;
  /* border: 1px solid #fff; */
  transform: translateX(50%);
  border-radius: 50%;
  box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4,
    inset 0 0 5px rgba(3, 233, 244, 0.5), inset 0 0 15px rgba(3, 233, 244, 0.5),
    inset 0 0 5px rgba(3, 233, 244, 0.5);

`

export const Tabletdiv = styled.div.attrs({
  className: "tabletdiv",
})`
  position: absolute;
  width: 100%;
  height: 100vh;
  color: #fff;
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
  top: 0;
  transform: ${({ isTabletOpen }) =>
    isTabletOpen ? "translateX(0)" : "translateX(200%)"};
  transition: all 0.7s ease-in-out;
  z-index: 3;
  .forclose {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 3;
  }
`;

export const Tabletcont = styled.div.attrs({
  className: "tabletcont",
})`
  position: relative;
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: ${({ tab }) => (tab ? `url(${tab})` : "palevioletred")}; */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 55px;
  overflow-x: hidden;
  z-index: 4;
  border-width: 30px 35px;
  border-style: solid;
  border-color: #000;
  background: #000;
  box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4,
    inset 0 0 5px rgba(3, 233, 244, 0.5), inset 0 0 15px rgba(3, 233, 244, 0.5),
    inset 0 0 5px rgba(3, 233, 244, 0.5);
  h1 {
    position: absolute;
    top: 10%;
    font-size: 4rem;
    font-weight: bold;
    font-family: "trojans", sans-serif;
    color: #B08016 !important;
  }
  @media (max-width: 850px) {
    border-width: 12px 12px;
    height: 78%;
    margin-top: 14%;
  }
`;

export const TabletScreen = styled.div.attrs({
  className: "tabletScreen",
})`
  position: relative;
  width: 94%;
  height: 90%;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .leftarrow {
    position: absolute;
    display: ${({ pageno }) => (pageno > 1 ? "block" : "none")};
    bottom: 5%;
    left: 10%;
    font-size: 40px;
    color: #fff;
    z-index: 5;
    box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4;
    border-radius: 50%;
  }
  .rightarrow {
    position: absolute;
    display: ${({ pageno }) => (pageno < 3 ? "block" : "none")};
    bottom: 5%;
    right: 10%;
    font-size: 40px;
    color: #fff;
    z-index: 5;
    box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4;
    border-radius: 50%;
  }
  .description {
    position: absolute;
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${({ pageno }) =>
      pageno === 1 ? "translateX(0)" : "translateX(200%)"};
    transition: all 0.5s ease-in-out;
  }
  h2 {
    position: relative;
    margin-bottom: 1%;
    align-self: flex-start;
    font-size: 2rem;
  }
  h3 {
    position: relative;
    margin-bottom: 2%;
    align-self: flex-start;
  }
  p {
    position: relative;
    align-self: center;
    font-weight: 500;
    /* font-size: 1.5rem; */
  }
  .rules {
    position: relative;
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${({ pageno }) =>
      pageno === 2 ? "translateX(0)" : "translateX(200%)"};
    transition: all 0.5s ease-in-out;
  }
  ul {
    position: relative;
    list-style: circle;
    height: 60%;
    list-style-position: inside;
    overflow-y: scroll;
  }
  li {
    position: relative;
    margin-bottom: 2%;
    /* font-size: 1.2rem; */
    font-weight: 500;
  }
  .students {
    position: absolute;
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${({ pageno }) =>
      pageno === 3 ? "translateX(0)" : "translateX(200%)"};
    transition: all 0.5s ease-in-out;
  }
  .studentscontainer {
    position: relative;
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .name {
    position: relative;
    /* font-size: 1.4rem; */
    font-weight: 700;
    padding-bottom: 2%;
  }
  .phoneno {
    position: relative;
    /* font-size: 1.4rem; */
    font-weight: 700;
    margin-left: 1%;
  }

  @media (max-width: 1150px) {
    p {
      /* font-size: 1.1rem; */
    }
  }
  @media (max-width: 700px) {
    h2 {
      font-size: 1.3rem;
    }
    .rules {
      height: 60%;
      width: 90%;
      align-items: center;
    }
    .description {
      height: 60%;
      width: 85%;
    }
    ul {
      height: 20rem;
      position: relative;
      overflow-y: scroll;
      width: 90%;
      list-style: circle;
      list-style-position: inside;
    }
    .description p {
      height: 15rem;
      overflow-y: scroll;
    }
  }
`;

export const Eventslist = styled.button.attrs({
  className: "eventlist",
})`
  position: relative;
  width: 70%;
  height: 11%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  /* font-size: 1.2rem; */
  font-weight: bold;
  text-shadow: 0px 0px 10px #03e9f4;
  box-shadow: 0px 0px 10px 0px #03e9f4, inset 0px 0px 4px 0px #03e9f4;
  background: black;
  color: #03e9f4;
  align-items: center;
  justify-content: center;
  opacity: 0;
  margin: 1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #03e9f4;
    color: #000;
  }
  @media (max-width: 410px) {
    margin: 0.6rem;
    height: 20%;
  }
`;

export const Threeddiv = styled.div`
  position: absolute;
  height: 100%;
  width: 70%;
  display: flex;
  bottom: 0;
  left: ${({ openorclose }) => (openorclose ? "10%" : "40%")};
  transition: all 0.5s ease-in-out;
`;

// background: ${({ phoneimg }) =>
// phoneimg ? `url(${phoneimg})` : "palevioletred"};
// background-size: 100% 100%;
// background-repeat: no-repeat;
// background-position: center;
