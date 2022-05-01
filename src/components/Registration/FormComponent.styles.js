import styled from "styled-components";

export const RegistrationDivForm = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    color: #fff;
    width: 60%;
    background-color: #000;
    overflow: scroll;
    padding: 3% 0;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        font-family: "Open Sans", sans-serif;
    }
    .data_events {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 5rem;
        margin: 2%;
        padding: 1%;
        label {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-size: 1.5rem;
            margin: 1%;
        }
        input {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 70%;
            font-size: 1.1rem;
            padding: 1% 3%;
            outline: none;
            border: none;
            background: #000;
            box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4;
            border-radius: 10px;
            color: #fff;
        }
    }

    .events_checkbox {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70%;
        /* height: 5rem; */
        margin: 2%;
        padding: 1%;
        span {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-size: 1.5rem;
            box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4;
            border-radius: 10px;
        }
        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 1%;
            padding: 1% 15%;
        }
        label {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-size: 1.5rem;
            margin: 1%;
        }
        input {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            padding: 1% 3%;
            outline: none;
            border: none;
            background: #000;
            /* box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4; */
            border-radius: 10px;
            color: #fff;
        }
    }
    .buttonDiv {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 1%;
    }
    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        /* width: 30%; */
        width: 10rem;
        height: 3rem;
        margin: 1%;
        padding: 1%;
        font-size: 1.5rem;
        background-color: #000;
        box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4;
        color: #03e9f4;
        border: none;
        outline: none;
        border-radius: 10px;
    }
    button:hover {
        background-color: #03e9f4;
        color: #000;
    }

    input[type="checkbox"] {
        display: none;
    }
    .checkbox {
        position: relative;
        padding: 1px 0 1px 55px;
        color: #fff;
        font-size: 32px;
        letter-spacing: 2px;
        cursor: pointer;
    }
    .checkbox::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 25px;
        height: 25px;
        border:2px solid #fff;
        border-radius: 4px;
        content: "";
    }
    .checkbox::after {
        opacity: 0;
        position: absolute;
        top: 0px;
        left: 10px;
        transform: rotate(45deg);
        width: 8px;
        height: 18px;
        border-right: 3px solid #fff;
        border-bottom: 3px solid #fff;
        filter: drop-shadow(2px 2px 2px #03e9f4)
            drop-shadow(-2px -2px 2px #03e9f4);
        content: "";
    }
    input[type="checkbox"]:checked + .checkbox {
        text-shadow: 2px 2px 8px #03e9f4, -2px -2px 8px #03e9f4,
            4px 4px 10px #03e9f4, -4px -4px 10px #03e9f4;
    }
    input[type="checkbox"]:checked + .checkbox::before {
        box-shadow: 1px 1px 10px #03e9f4, -1px -1px 10px #03e9f4,
            inset 1px 1px 10px #03e9f4, inset -1px -1px 10px #03e9f4;
    }
    input[type="checkbox"]:checked + .checkbox::after {
        opacity: 1;
    }

    @media (max-width: 500px) {
        width: 100%;
        h1 {
            font-size: 2.3rem !important;
        }
        .data_events label {
            margin-bottom: 1rem;
        }
        .data_events input {
            width: 80%;
        }
        .events_checkbox {
            width: 95%;
            label {
                margin-bottom: 1rem;
            }
        }
    }
`;
