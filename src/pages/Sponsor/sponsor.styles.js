import styled, {keyframes} from "styled-components";

const turning1 = keyframes`
    0% {
        left: -8%;
    }
    50% {
        left: 48%;
    }
    100% {
        left: -8%;
    }
`;
const turning2 = keyframes`
    0% {
        left: 10%;
    }
    50% {
        left: -10%;
    }
    100% {
        left: 10%;
    }
`;

export const SponsorSection = styled.section`
    /* @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"); */
    background-color: black;
    padding-top: 4rem;
    /* padding-bottom: rem; */
    h1 {
        color: white;
        font-size: 4rem;
        text-align: center;
        padding-top: 4rem;
    }
    h2 {
        font-size: 1.5rem;
        color: white;
        text-shadow: 0 0 5px #9900f0, 0 0 10px #9900f0, 0 0 25px #9900f0;
    }
    .sp1 {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 3;
        border-radius: 10px;
    }
    .mainmain {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        display: grid;
        row-gap: 3rem;
        /* justify-content: space-evenly;
     */
        margin-top: 2rem;
        position: relative;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }
    .main2 {
        flex-direction: row-reverse !important;
    }
    .main {
        position: relative;
        height: 18rem;
        width: 18rem;
        background-color: white;
        margin: 3rem 0rem;
        border: 2px solid rgba(153, 0, 240, 1);
        z-index: 4;
        transition: all 2s ease-in-out;
        border-radius: 10px;
    }
    .overlay {
        position: absolute;
        left: 10%;
        height: 15%;
        width: 100%;
        top: 90%;
        /* border-radius: 10px; */
        background-color: #9900f0;
        box-shadow: 5px 5px 50px rgba(153, 0, 240, 1);
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .overlay2 {
        position: absolute;
        left: -8%;
        height: 50%;
        width: 60%;
        top: -8%;
        border-radius: 10px;
        background-color: rgb(56, 232, 255);
        box-shadow: 2px 2px 30px rgb(56, 232, 255);
        z-index: 1;
        transition: all 2s ease-in-out;
    }
    .main:hover .overlay {
        animation: ${turning2} 4s linear infinite;
    }
    .main:hover .overlay2 {
        animation: ${turning1} 4s linear infinite;
    }
    .overlay3 {
        background-color: #5534a5;
        opacity: 0.8;
        height: 150px;
        width: 30%;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        position: absolute;
        z-index: 3;
    }
    .overlay33 {
        background-color: #5534a5;
        opacity: 0.8;
        height: 150px;
        width: 30%;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        position: absolute;
        z-index: 3;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`;

export const MembersSection = styled.section`
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MembersDiv = styled.section`
    width: 18rem;
    height: 18rem;
    /* border: 1px solid #9900f0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    position: relative;
    align-items: center;
    transform: perspective(2000px);
    transform-style: preserve-3d;
    .shadow_conatiner {
        position: absolute;
        width: 100%;
        height: 5rem;
        display: flex;
        background: ${({color}) => color};
        box-shadow: 0 0 5px ${({color}) => color},
            0 0 5px ${({color}) => color},
            0 0 15px ${({color}) => color} /* 0 0 40px ${({color}) => color} */;
        z-index: 1;
        transition: all 0.5s ease-in-out;
    }
    /* 0 0 3px #fffff0, 0 0 2px #fffff0, 0 0 15px #fffff0 */
    &:hover .shadow_conatiner {
        height: 100%;
    }
    .image_div {
        position: relative;
        width: 10rem;
        height: 10rem;
        border: 1px solid #000;
        border-radius: 50%;
        z-index: 2;
        top: 15%;
        overflow: hidden;
        transition: all 0.5s ease-in-out;
        transform: translateZ(50px);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .content_div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        text-align: center;
        z-index: 2;
        transition: all 0.5s ease-in-out;
        color: black;
        opacity: 0;
        transform: perspective(2000px);
        transform-style: preserve-3d;
        h2 {
            transform: translateZ(45px);
        }
        p {
            transform: translateZ(40px);
        }
        div {
            width: 100%;
            height: 3rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            position: relative;
            text-align: center;
            transform: translateZ(35px);
        }
    }
    &:hover .image_div {
        top: -5%;
    }
    &:hover .content_div {
        opacity: 1;
    }
    &:hover {
        height: 23rem;
    }
`;
