import styled from "styled-components";

export const HeroSection = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  div {
    width: 80%;
    height: 75%;
    border-radius: 15px;
    border: 5px solid #30AADD;
    padding:3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    text-align: left;
    font-weight: bold;
    color: #fff;
    /* padding: 5% 10%; */
    padding-bottom: 3rem;
    z-index: 2;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    width:100%;
    font-size: 1.2rem;
    line-height: 2.3rem;
    color: white;
    font-weight: 300;
  }
  
  }
`;
