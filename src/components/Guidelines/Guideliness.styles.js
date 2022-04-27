import styled, { keyframes } from 'styled-components';

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
		content: '';
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
	font-family: 'Roboto', sans-serif;
	font-size: 1.5rem;
	overflow: hidden;
	/* backdrop-filter: blur(10px); */
	text-shadow: 0 0 10px black;

	h1 {
		font-size: 3.5rem;
		margin: 5% 0;
		font-weight: bold;
		text-shadow: 0 0 2px rgba(255, 127, 255, 0.9),
			0 0 10px rgba(255, 127, 255, 0.3), 0 0 4px rgba(255, 127, 255, 0.5),
			0 0 7px rgba(255, 127, 255, 0.9), 0 0 11px rgba(255, 127, 255, 0.7),
			0 0 16px rgba(255, 127, 255, 0.9);
	}
	h1:hover {
		text-shadow: 0 0 6px rgba(255, 127, 255, 0.98),
			0 0 30px rgba(255, 127, 255, 0.42), 0 0 12px rgba(255, 127, 255, 0.5),
			0 0 22px rgba(255, 127, 255, 0.8), 0 0 38px rgba(255, 127, 255, 0.8),
			0 0 60px rgba(255, 127, 255, 0.1);
	}
	p {
		font-size: 1.5rem;
		width: 80%;
		text-align: center;
		margin: 2%;
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
			text-shadow: 0 0 7px #bc13fe, 0 0 10px #bc13fe, 0 0 21px #bc13fe,
				0 0 42px #bc13fe, 0 0 82px #bc13fe, 0 0 92px #bc13fe, 0 0 102px #bc13fe,
				0 0 151px #bc13fe;
		}
	}
`;

export const GuideContainerDiv = styled(GuideContainer)`
	width: 40%;
	height: 50%;
	background: transparent;
	overflow: visible;
	&::after {
		content: '';
		position: absolute;
		display: none;
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
		box-shadow: 0 0 10px rgba(255, 127, 255, 1), 0 0 40px rgba(255, 127, 255, 1),
			0 0 80px rgba(255, 127, 255, 1);
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
		background: linear-gradient(270deg, transparent, rgba(255, 127, 255, 1));
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
		background: linear-gradient(180deg, transparent, rgba(255, 127, 255, 1));
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
		background: linear-gradient(360deg, transparent, rgba(255, 127, 255, 1));
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
		font-family: 'Balsamiq Sans', cursive;
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
		box-shadow: 0 0 10px rgba(255, 127, 255, 1), 0 0 40px rgba(255, 127, 255, 1),
			0 0 80px rgba(255, 127, 255, 1);
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
	font-family: 'Roboto', sans-serif;
	font-size: 1.5rem;
	text-shadow: 0 0 10px black;
`;

const flicker = keyframes`
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
        text-shadow: 0 0 4px #bc13fe, 0 0 11px #bc13fe, 0 0 19px #bc13fe, 0 0 40px #bc13fe,
            0 0 80px #bc13fe, 0 0 90px #bc13fe, 0 0 100px #bc13fe, 0 0 150px #bc13fe;
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
			font-size: 3rem;
			animation: ${flicker} 2s linear infinite;
		}
		p {
			text-align: center;
			font-size: 1.3rem;
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
		box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
			0 0 0.8rem #bc13fe, 0 0 0.2rem #bc13fe, inset 0 0 1.3rem #bc13fe;
		animation: ${flickerBox} 4s alternate infinite;
	}
`;
