import styled, {keyframes} from "styled-components";

export const ContactSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: #000;
    overflow: hidden;
    video {
        width: 100%;
        object-fit: cover;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, transparent 80%, rgba(0, 0, 0, 1));
        z-index: 1;
    }
    @media (max-width: 700px) {
        flex-direction: column;
        height: fit-content;
    }
    @media (max-width: 400px) {
        flex-direction: column;
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
        box-shadow:  0 0 40px #bc13fe,
            0 0 40px #bc13fe;
    }
    20%,
    24%,
    55% {
        box-shadow: none;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    background: #000;
    color: #fff;
    overflow: visible;
    /* z-index: 2; */
    h1 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        color: black;
        /* text-shadow: 0 0 7px #bc13fe, 0 0 10px #bc13fe, 0 0 21px #bc13fe,
                0 0 42px #bc13fe, 0 0 82px #bc13fe, 0 0 92px #bc13fe,
                0 0 102px #bc13fe, 0 0 151px #bc13fe; */
        text-shadow: 2px 0 0 #bc13fe, -2px 0 0 #bc13fe, 0 2px 0 #bc13fe,
            0 -2px 0 #bc13fe, 1px 1px #bc13fe, -1px -1px 0 #bc13fe,
            1px -1px 0 #bc13fe, -1px 1px 0 #bc13fe, 0 0 7px #bc13fe,
            0 0 10px #bc13fe, 0 0 21px #bc13fe;
        z-index: 100;
    }
    p {
        padding: 0 10%;
        font-size: 1.1rem;
        color: white;
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div {
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 6.5rem;
            label {
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
            }
            input {
                width: 100%;
                height: 2rem;
                border: none;
                background: #000;
                outline: none;
                color: #fff;
                font-size: 1.2rem;
                box-shadow: 0 0 4px #bc13fe, 0 0 11px #bc13fe, 0 0 19px #bc13fe;
                border-radius: 10px;
                padding: 0 0.8rem;
                margin-bottom: 0.5rem;
                z-index: 5;
            }
            button {
                width: 30%;
                height: 3rem;
                background: #000;
                outline: none;
                color: #fff;
                font-size: 1.3rem;
                border: none;
                padding: 0 1rem;
                box-shadow: 0 0 4px #bc13fe, 0 0 11px #bc13fe, 0 0 19px #bc13fe;
                border-radius: 10px;
                /* animation: ${flickerBox} 2s alternate infinite; */
                align-self: center;
                transition: all 0.2s ease-in-out;
                z-index: 5;
                margin-top: 2rem;
            }
            button:hover {
                background: #bc13fe;
            }
        }
        div:nth-of-type(3) {
            height: 12rem;
            textarea {
                width: 100%;
                height: 10rem;
                border: none;
                background: #000;
                box-shadow: 0 0 4px #bc13fe, 0 0 11px #bc13fe, 0 0 19px #bc13fe;
                color: #fff;
                border-radius: 10px;
                font-size: 1.1rem;
                padding: 1rem;
                z-index: 5;
                outline: none;
            }
        }
    }
    @media (max-width: 700px) {
        width: 100%;
        padding-top: 5%;
        h1 {
            font-size: 3rem !important;
        }
        form {
            div {
                button {
                    width: 55%;
                }
            }
        }
    }
    @media (max-width: 400px) {
        width: 100%;
        padding-top: 15%;
        h1 {
            font-size: 3rem !important;
        }
        form {
            div {
                button {
                    width: 55%;
                }
            }
        }
    }
`;

export const ContactPerson = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    width: 80%;
    height: 4rem;
    z-index: 5;
`;

const hovereffectanimation = keyframes`
    0% {
        transform: rotate(0deg);
        filter: hue-rotate(0deg);
    }
    0% {
        transform: rotate(360deg);
        filter: hue-rotate(360deg);
    }
`;

export const HoverConatct = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    margin: 10%;
    transition: 5s;
    span {
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
    }
    span::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: transparent;
        border: 4px solid #00efff;
        box-sizing: border-box;
        box-shadow: 0 0 20px #00efff, -200px -200px 0px #00efff,
            -200px -200px 20px #00efff, 200px 200px 0px #00efff,
            200px 200px 20px #00efff, -200px 200px 0px #00efff,
            -200px 200px 0px #00efff, 200px -200px 20px #00efff,
            200px -200px 20px #00efff;
        transform-origin: 250px;
        animation: ${hovereffectanimation} 5s linear infinite;
    }
`;
