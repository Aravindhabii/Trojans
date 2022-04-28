import styled, {keyframes} from "styled-components";

export const ContactSection = styled.section`
    background-color: #f5f5f5;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
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
                outline: none;
            }
        }
    }
`;

export const ContactPerson = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    width: 80%;
    height: 4rem;
`;

export const HoverConatct = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    span {
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        transform: rotate(calc(36deg * var(--i)));
    }
    span::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: transparent;
        border: 4px solid #00efff;
    }
`;
