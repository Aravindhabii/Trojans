import styled from "styled-components";

export const HeroSection = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

  width: 100%;
  height: 200vh;
  background: black;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  div {
    // width: 80%;
    height: 80vh;
    
    border-radius: 15px;
    border: 5px solid #30AADD;
    padding:3rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    // position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .speaker {
    position: absolute;
    top: 50%;
    left:2%;
    transform: translateY(-50%);
    height: 80px;
    width: 10px;
    border: 3px solid #30AADD;
    border-radius: 20%;

  }
  .cam1 {
    position: absolute;
    bottom : 12%;
      left: 1.5%;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 5px solid #30AADD;
  }
  .cam2 {
    position: absolute;
    bottom : 3%;
      left: 1%;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      border: 5px solid #30AADD;

}
  
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    text-align: left;
    font-weight: bold;
    color: #fff;
    /* padding: 5% 10%; */
    padding-bottom: 3rem;
    // margin-left:6%;
    z-index: 2;
    width:90%;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    width:90%;
    font-size: 1.2rem;
    line-height: 2.3rem;
    color: white;
    // margin-left:6%;
    transform: translateY(50%);
    font-weight: 300;
  }
  
  }
`;
