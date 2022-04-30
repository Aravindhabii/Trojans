import styled, {keyframes} from "styled-components";
// import footerGif from "../../assets/footer/footer1.gif";
import footerGif from "../../assets/footer/footer2.jpeg";

export const FooterContainer = styled.section`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #000;
    @media (max-width: 700px) {
        padding: 5% 0;
        height: fit-content;
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
        box-shadow:  0 0 40px #00efff;
    }
    20%,
    24%,
    55% {
        box-shadow: none;
    }
`;

export const FooterDiv = styled.section`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    background: #000;
    /* border-radius: 10px; */
    /* box-shadow:  0 0 40px #00efff; */
    /* animation: ${flickerBox} 1s infinite; */
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const FooterSubDiv = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    p {
        color: #fff;
        padding: 2% 7%;
        font-size: 1.2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        a {
            margin-left: 10px;
        }
    }
    div {
        position: relative;
        width: 18rem;
        height: 12rem;
        /* background: url(${footerGif}) center/cover no-repeat; */
        span:nth-child(1) {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            height: 3px;
            background: #00efff;
            box-shadow: 0 0 10px #00efff;
            z-index: 5;
            transform: translateX(-5%);
        }
        span:nth-child(2) {
            position: absolute;
            width: 3px;
            top: 0;
            left: 0;
            height: 100%;
            background: #00efff;
            box-shadow: 0 0 10px #00efff;
            transform: translateY(5%);
            z-index: 5;
        }
        span:nth-child(3) {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            height: 3px;
            background: #00efff;
            z-index: 5;
            box-shadow: 0 0 10px #00efff;
            transform: translateX(5%);
        }
        span:nth-child(4) {
            position: absolute;
            width: 3px;
            top: 0;
            right: 0;
            height: 100%;
            background: #00efff;
            box-shadow: 0 0 10px #00efff;
            transform: translateY(-5%);
            z-index: 5;
        }
    }
    @media (max-width: 600px) {
        width: 90%;
        div {
            width: 13rem;
            height: 10rem;
        }
        p {
            padding: 2% 5%;
            font-size: 1.3rem;
        }
    }
`;
