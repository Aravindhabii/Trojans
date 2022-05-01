import styled, {keyframes} from "styled-components";

export const GalleryDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100%;
    background-color: #000;
    color: #000;
    /* overflow: scroll; */
    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #000;
`;

export const ImageMainDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    padding-top: 15%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    object-fit: contain;
    background: #000;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 20px;
    }
`;

const flicker = keyframes`
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
        text-shadow: 0 0 4px #bc13fe, 0 0 11px #bc13fe, 0 0 19px #bc13fe, 0 0 40px #bc13fe
            ;
    }

    20%,
    24%,
    55% {
        text-shadow: none;
    }
`;

const flickerBox = keyframes`
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
        box-shadow:  0 0 20px #bc13fe;
    }
    20%,
    24%,
    55% {
        box-shadow: none;
    }
`;

export const ImageDiv = styled.div`
    position: relative;
    width: 480px;
    height: 240px;
    display: flex;
    flex-direction: column;
    object-fit: contain;
    align-items: center;
    justify-content: center;
    margin: 3%;
    transition: all 0.3s ease-in-out;
    /* right: 0; */
    box-shadow: 0 0 5px #bc13fe, 0 0 15px #bc13fe, 0 0 5px #bc13fe;
    /* animation: ${flickerBox} 1s infinite alternate; */

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: contain;
    }
    video {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    h1 {
        position: absolute;
        color: #fff;
        font-size: 1.5rem;
        transition: all 0.3s ease-in-out;
        z-index: 5;
        animation: ${flicker} 2s linear infinite;
        opacity: 1;
        text-align: center;
    }
    span {
        content: "";
        position: absolute;
        top: 0;
        width: 50%;
        height: 100%;
        /* background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); */
        transition: all 0.3s ease-in-out;
        background: #000;
    }
    span:nth-child(1) {
        left: 0;
    }
    span:nth-child(2) {
        right: 0;
    }
    &:hover span:nth-child(1) {
        width: 0%;
    }
    &:hover span:nth-child(2) {
        width: 0%;
    }
    &:hover h1 {
        opacity: 0;
    }
    @media (max-width: 500px) {
        h1 {
            width: 80%;
        }
    }
`;
