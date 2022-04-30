import styled from "styled-components";

export const SponserSection = styled.section`
/* @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"); */
    
background-color: black;
/* height: 100vh; */
h1 {
    color: white;
    font-size: 4rem;
    text-align: center;
    padding-top: 4rem;
}
h2 {
    /* color: white; */
    font-size: 1.5rem;

    color: white;
    text-shadow: 0 0 5px #9900F0,
            0 0 10px #9900F0, 0 0 25px #9900F0;
}
.sp1 {
    
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    border-radius: 10px;
    
}
.mainmain {
    width:90%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    display: grid;
    row-gap: 3rem;
    /* justify-content: space-evenly;
     */
    margin-top: 2rem;
    position: relative;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
}
.main2 {
    flex-direction:row-reverse !important;
}
.main {
    position: relative;
    height: 360px;
    width:260px;
    background-color:white;
    margin: 4rem 0rem 4rem 0rem;
    border: 2px solid rgba(153, 0, 240, 1);
    z-index: 4;
    border-radius: 10px;
    
}
.overlay {
    position: absolute;
    left:10%;
    height: 15%;
    width: 100%;
    top: 90%;
    /* border-radius: 10px; */
    background-color: #9900F0;
    box-shadow: 5px 5px 50px rgba(153, 0, 240, 1);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
}
.overlay2 {
    position: absolute;
    left: -3%;
    height: 50%;
    width: 60%;
    top: -2%;
    border-radius: 10px;
    background-color: rgb(56, 232, 255);
    box-shadow: 2px 2px 30px rgb(56, 232, 255);
    z-index: 1; 
}
.overlay3 {
    background-color: #5534A5;
    opacity: .8;
    height : 150px;
    width: 30%;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    position:absolute;
    z-index: 3;
}
.overlay33 {
    background-color: #5534A5;
    opacity: .8;
    height : 150px;
    width: 30%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    position:absolute;
    z-index: 3;
}

img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

`