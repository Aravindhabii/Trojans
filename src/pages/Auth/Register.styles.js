import styled from "styled-components";

export const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
`;

export const SingleContainer = styled.div`
    width: 100%;
    /* height: 5rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    label {
        font-size: 1.2rem;
        font-family: "MontserratMedium", cursive;
        margin-bottom: 0.5rem;
        text-align: left;
        color: #fff;
    }
    input {
        width: 50%;
        height: 2rem;
        border: 1px solid #fff;
        outline: none;
        background-color: transparent;
        color: #fff;
        font-size: 1rem;
    }
`;
