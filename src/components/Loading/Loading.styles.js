import styled, {keyframes} from "styled-components";

const loaders = keyframes`
    0% {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
`;
const loader = keyframes`
    0% {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
`;

export const LoadingScreen = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    /* padding: -50px;
    margin: -50px; */
    background: #000;

    #loading-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    #loading-text {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        color: #999;
        width: 100px;
        /* height: 30px; */
        text-align: center;
        transform: translate(-50%, -45%);
        font-family: "PT Sans Narrow", sans-serif;
    }

    #loading-text img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #loading-content {
        display: block;
        position: relative;
        left: 50%;
        top: 50%;
        width: 170px;
        height: 170px;
        margin: -85px 0 0 -85px;
        border: 3px solid #f00;
    }

    #loading-content:after {
        content: "";
        position: absolute;
        border: 3px solid #0f0;
        left: 15px;
        right: 15px;
        top: 15px;
        bottom: 15px;
    }

    #loading-content:before {
        content: "";
        position: absolute;
        border: 3px solid #00f;
        left: 5px;
        right: 5px;
        top: 5px;
        bottom: 5px;
    }

    #loading-content {
        border: 3px solid transparent;
        border-top-color: #4d658d;
        border-bottom-color: #4d658d;
        border-radius: 50%;
        animation: ${loader} 2s linear infinite;
    }

    #loading-content:before {
        border: 3px solid transparent;
        border-top-color: #d4cc6a;
        border-bottom-color: #d4cc6a;
        border-radius: 50%;
        animation: ${loader} 3s linear infinite;
    }

    #loading-content:after {
        border: 3px solid transparent;
        border-top-color: #84417c;
        border-bottom-color: #84417c;
        border-radius: 50%;
        animation: ${loader} 1.5s linear infinite;
    }

    #content-wrapper {
        color: #fff;
        position: fixed;
        left: 0;
        top: 20px;
        width: 100%;
        height: 100%;
    }

    #header {
        width: 800px;
        margin: 0 auto;
        text-align: center;
        height: 100px;
        background-color: #666;
    }

    #content {
        width: 800px;
        height: 1000px;
        margin: 0 auto;
        text-align: center;
        background-color: #888;
    }
`;
