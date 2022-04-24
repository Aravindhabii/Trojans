import styled from "styled-components";
import bg from "../../assets/about/2.jpg";
export const HeroSection = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

  width: 100%;
  height: 200vh;
  /* background: black; */
  /* background: url(${bg}) no-repeat center/cover fixed; */

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  &:before {
  }
  div {
    // width: 80%;
    height: 80vh;
    background: black;
    border-radius: 15px;
    border: 5px solid #30AADD;
    padding:3rem;
    padding-top: 6rem;
    padding-bottom: 6rem;
    // position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  video {
    width: 100%;
    object-fit: cover ;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    /* z-index: 100; */
  }
  .paradiv {
    position: relative;
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
    transform: translateY(30%);
    font-weight: 300;
  }
  .para2 {
    /* display: none; */
  }
  .btn1 {
    position: absolute;
    bottom: 25%;
    right: 2%;
    transform: rotate(90deg);
  }
  .btn2 {
    position: absolute;
    top: 25%;
    transform: rotate(-90deg);
    right: 2%;
  }
  
  
`;
