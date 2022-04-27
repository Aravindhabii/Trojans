import styled, {keyframes} from "styled-components";

export const ContactSection = styled.section`
    background-color: #f5f5f5;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: "Roboto", sans-serif;
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
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
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
`;
