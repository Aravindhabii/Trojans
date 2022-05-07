import styled, {keyframes} from "styled-components";

export const SectionGuide = styled.section`
    /* background-color: white; */
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
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
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 100%;
        height: 10rem;
        background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    }
`;

export const SecondContainer = styled.div`
    width: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    .maindiv {
        width: 70%;
        margin-bottom: 1rem;
        display: flex;
        height: fit-content;
        position: relative;
    }
    .black {
        height: 5%;
        width: 100%;
        background-color: black;
        position: absolute;
        /* box-shadow: 2px 2px 40px blac; */
        top: 0;
    }
    .sideline {
        width: 20%;
        height: 95%;
        left: 0;
        bottom: 0;
        position: absolute;
        background-color: #ab46d2;
        box-shadow: 5px 5px 20px rgba(255, 127, 255, 0.8);
        z-index: 4;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 2rem 2rem 2rem 2rem;
        .sidebar-div {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            .bar-div {
                width: 10%;
                height: 85%;
                margin: 2%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                transition: all 0.5s ease-in-out;
                /* &:hover {
                    background-color: #ab46d2;
                    box-shadow: 5px 5px 10px rgba(255, 127, 255, 0.8);
                } */
            }
            p {
                width: 70%;
                height: 100%;
            }
        }
    }
    span {
        padding: 1rem;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border: 5px solid white;
        background-color: black;
        font-size: 1.5rem;
        font-weight: bold;
    }
    p {
        color: white;
        padding: 2rem;
        line-height: 3rem;
        width: 75%;
        border-bottom: 5px solid #ab46d2;
    }
    @media (max-width: 1100px) {
        .maindiv {
            width: 90%;
        }
        p {
            width: 70%;
        }
    }
    @media (max-width: 768px) {
        .maindiv {
            width: 95%;
        }
        p {
            line-height: 1.5rem;

            padding: 1rem;
        }
        .sideline {
            width: 15%;
            display: none;
        }
        .content {
            padding: 0rem;
            align-items: center;
            /* width: 80%; */
        }
        p {
            width: 90%;
        }
        span {
            width: 30px;
            height: 30px;
            font-size: 1rem;
        }
    }
`;
export const GuideContainer = styled.div`
    /* background: url("https://img.freepik.com/free-vector/colors-neon-frame-stacking-style-design_1017-29813.jpg?w=826&t=st=1650907396~exp=1650907996~hmac=4fdace09c25fa4e3b24655951274906ec4744415a8116636b5bc23be54077e47")
        center/cover no-repeat; */
    /* background: url("https://img.freepik.com/free-vector/realistic-neon-speed-motion-background_23-2148971519.jpg?w=740&t=st=1650907401~exp=1650908001~hmac=65746c1c34a4945dcb7e8d93e4a635a141b480f5498043371b95a5acc8a467b8")
        center/cover no-repeat; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    overflow: hidden;
    /* backdrop-filter: blur(10px); */
    text-shadow: 0 0 10px black;

    h1 {
        font-size: 3.5rem;
        margin: 5% 0;
        font-weight: bold;
        color: rgba(255, 127, 255, 0.98);
        text-shadow: 0 0 5px rgba(255, 127, 255, 0.3),
            0 0 10px rgba(255, 127, 255, 0.3), 0 0 25px rgba(255, 127, 255, 0.3);
    }
    h1:hover {
        text-shadow: 0 0 6px rgba(255, 127, 255, 0.98),
            0 0 30px rgba(255, 127, 255, 0.42),
            0 0 12px rgba(255, 127, 255, 0.5);
    }
    p {
        font-size: 1.5rem;
        width: 80%;
        text-align: center;
        margin: 2%;
    }
    @media (max-width: 700px) {
        h1 {
            font-size: 2.5rem !important;
        }
        p {
            font-size: 1.2rem !important;
        }
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
        box-shadow:  0 0 40px #bc13fe;
    }
    20%,
    24%,
    55% {
        box-shadow: none;
    }
`;

const exploreSVG = keyframes`

	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(10px);
	}
	100% {
		transform: translateY(0);
	}
`;

export const ImageDiv = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    img {
        position: relative;
        width: 5rem;
        height: 5rem;
        transition: all 1s ease-in-out;
        border-radius: 50%;
        z-index: 100;
    }
    div {
        position: absolute;
        width: 10rem;
        height: 5rem;
        border-radius: 10px;
        transform: translateY(100%);
        animation: ${flickerBox} 2s alternate infinite;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        p {
            text-shadow: 0 0 7px #bc13fe, 0 0 10px #bc13fe, 0 0 21px #bc13fe;
            font-size: 1rem;
        }
    }
    svg {
        width: 2rem;
        height: 2rem;
        color: white;
        animation: ${exploreSVG} 1s ease-in-out infinite;
    }
    @media (max-width: 700px) {
        div {
            display: flex !important;
        }
    }
`;

export const GuideContainerDiv = styled(GuideContainer)`
    width: 40%;
    height: 50%;
    background: transparent;
    overflow: visible;
    &::after {
        content: "";
        position: absolute;
        display: none;
    }
    @media (max-width: 700px) {
        width: 90%;
        font-size: 1.4rem;
    }
`;

export const NeonButton = styled.a`
    a {
        position: relative;
        display: inline-block;
        padding: 12px 25px;
        color: rgba(255, 127, 255, 1);
        background-color: transparent;
        text-transform: uppercase;
        letter-spacing: 4px;
        text-decoration: none;
        font-size: 20px;
        overflow: hidden;
        transition: 0.2s;
        margin: 10% 0;
    }

    a:hover {
        color: #fff;
        background: rgba(255, 127, 255, 1);
        box-shadow: 0 0 10px rgba(255, 127, 255, 1),
            0 0 40px rgba(255, 127, 255, 1), 0 0 80px rgba(255, 127, 255, 1);
        transition-delay: 1s;
    }

    a span {
        position: absolute;
        display: block;
    }

    a span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(255, 127, 255, 1));
    }

    a:hover span:nth-child(1) {
        left: 100%;
        transition: 1s;
    }

    a span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(
            270deg,
            transparent,
            rgba(255, 127, 255, 1)
        );
    }

    a:hover span:nth-child(3) {
        right: 100%;
        transition: 1s;
        transition-delay: 0.5s;
    }

    a span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(
            180deg,
            transparent,
            rgba(255, 127, 255, 1)
        );
    }

    a:hover span:nth-child(2) {
        top: 100%;
        transition: 1s;
        transition-delay: 0.25s;
    }

    a span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(
            360deg,
            transparent,
            rgba(255, 127, 255, 1)
        );
    }

    a:hover span:nth-child(4) {
        bottom: 100%;
        transition: 1s;
        transition-delay: 0.75s;
    }
`;

export const NeonATag = styled.a`
    a {
        font-size: 25px;
        height: 60px;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Balsamiq Sans", cursive;
        text-decoration: none;
        color: rgba(255, 127, 255, 1);
        border: rgba(255, 127, 255, 1) 3px solid;
        background-color: transparent;
        border-radius: 0.25em;
        box-shadow: inset 0 0 0.5em 0 rgba(255, 127, 255, 1) 0 0 0.5em 0
            rgba(255, 127, 255, 1);
        transition: all 0.5s;
    }

    a:hover {
        background-color: rgba(255, 127, 255, 1);
        color: #fff;
        box-shadow: 0 0 10px rgba(255, 127, 255, 1),
            0 0 40px rgba(255, 127, 255, 1), 0 0 80px rgba(255, 127, 255, 1);
    }
`;

export const GuidelinesPoints = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* height: fit-content; */
    height: 125vh;
    position: relative;
    background-color: rgba(0, 0, 0, 1);
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    text-shadow: 0 0 10px black;
    @media (max-width: 700px) {
        height: fit-content;
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

export const GuidelinesPointsDiv = styled.div`
    /* background: url("https://img.freepik.com/free-vector/colors-neon-frame-stacking-style-design_1017-29813.jpg?w=826&t=st=1650907396~exp=1650907996~hmac=4fdace09c25fa4e3b24655951274906ec4744415a8116636b5bc23be54077e47")
        center/cover no-repeat; */
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    position: relative;
    color: white;
    font-size: 1.5rem;
    text-shadow: 0 0 10px black;
    p {
        font-size: 1.2rem;
        margin: 2% 0;
    }
    div {
        width: 100%;
        height: 40vh;
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 5%;
        h1 {
            color: black;
            font-size: 3rem !important;
            animation: ${flicker} 2s linear infinite;
        }
        p {
            text-align: center;
            font-size: 1.3rem;
        }
        @media (max-width: 700px) {
            p {
                font-size: 1rem !important;
            }
        }
    }
`;

export const GridSection = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 80vh;
    justify-items: center;
    align-content: center;
    grid-column-gap: 5rem;
    grid-row-gap: 5rem;
    div {
        width: 90%;
        height: 12rem;
        margin: 1%;
        border-radius: 10px;
        animation: ${flickerBox} 4s alternate infinite;
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        height: fit-content;
    }
`;
