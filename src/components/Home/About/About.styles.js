import styled from 'styled-components';
import bg from '../../../assets/about/2.jpg';
export const HeroSection = styled.section`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
	width: 100%;
	height: fit-content;
	background: black;

	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	position: relative;
	&:before {
	}
	div {
		// width: 80%;
		height: fit-content;
		background: #100c0c;
		border-radius: 15px;
		border: 5px solid #30aadd;
		padding: 4rem;
		padding-top: 6rem;
		padding-bottom: 6rem;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	video {
		width: 100%;
		object-fit: cover;
		height: fit-content;
		position: fixed;
		top: 0;
		left: 0;
		/* z-index: 100; */
	}
	.paradiv {
		position: relative;
	}

	.speaker {
		position: absolute;
		top: 50%;
		left: 2%;
		transform: translateY(-50%);
		height: 80px;
		width: 10px;
		border: 3px solid #30aadd;
		border-radius: 20%;
	}
	.cam1 {
		position: absolute;
		bottom: 12%;
		left: 1.5%;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		border: 5px solid #30aadd;
	}
	.cam2 {
		position: absolute;
		bottom: 3%;
		left: 1%;
		height: 30px;
		width: 30px;
		border-radius: 50%;
		border: 5px solid #30aadd;
	}
	.cam3 {
		position: absolute;
		bottom: 47%;
		right: 2.5%;
		height: 30px;
		width: 30px;
		border-radius: 50%;
		border: 5px solid #30aadd;
	}

	.contentextra {
		display: ${({ contentTrigger }) => (contentTrigger ? 'none' : 'block')};
	}
	h1 {
		font-size: 2.2rem;
		text-align: left;
		font-weight: bold;
		color: #fff;
		padding-bottom: 3rem;
		z-index: 2;
		width: 90%;
	}

	.about-title {
		transform: translateY(20%);
		display: flex;
		align-items: center;
		justify-content: space-between;

		img {
			width: 16rem;
		}
	}

	p {
		width: 95%;
		font-size: 1rem;
		line-height: 2.3rem;
		color: white;
		// margin-left:6%;
		transform: translateY(20%);
		font-weight: 300;
	}
	.btn1:hover {
		transform: scale(1.3) rotate(180deg);
	}
	.btn2:hover {
		transform: scale(1.3);
	}
	.para2 {
		/* display: none; */
	}
	.btn1 {
		position: absolute;
		bottom: 25%;
		right: 2%;
		height: 40px;
		width: 40px;
		background-color: #30aadd;
		box-shadow: 2px 2px 20px rgb(56, 232, 255);
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		transform: rotate(180deg);
		transition: all 0.2s ease-in-out;
		border-radius: 10%;
	}
	.btn2 {
		position: absolute;
		box-shadow: 2px 2px 20px #d31360;
		background-color: #d31360;
		transition: all 0.2s ease-in-out;
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		top: 25%;
		/* transform: rotate(-90deg); */
		height: 40px;
		width: 40px;
		right: 2%;
	}
	@media (max-width: 1150px) {
		p {
			line-height: 1.75rem;
		}
	}
	@media (max-width: 950px) {
		.btn2:hover {
			transform: scale(1.3) rotate(270deg);
		}
		.btn1:hover {
			transform: scale(1.3) rotate(90deg);
		}
		div {
			/* transform: rotate(-180deg); */
		}
		.cam2 {
			position: absolute;
			top: 3%;
			left: 3%;
			height: 30px;
			width: 30px;
			border-radius: 50%;
			border: 5px solid #30aadd;
		}
		.cam1 {
			position: absolute;
			top: 4%;
			left: 12%;
			height: 20px;
			width: 20px;
			border-radius: 50%;
			border: 5px solid #30aadd;
		}
		.speaker {
			position: absolute;
			top: 4%;
			left: 50%;
			transform: translateX(-50%);
			width: 80px;
			height: 10px;
			border: 3px solid #30aadd;
			border-radius: 20%;
		}
		.btn1 {
			position: absolute;

			height: 30px;
			width: 30px;
			background-color: #30aadd;
			box-shadow: 2px 2px 20px rgb(56, 232, 255);
			clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
			transform: rotate(90deg);
			transition: all 0.2s ease-in-out;
			border-radius: 10%;
			top: 91.5%;
			right: 25%;
			transform: rotate(90deg);
		}
		.btn2 {
			transform: rotate(-90deg);
			position: absolute;
			left: 25%;
			top: 91.5%;
			box-shadow: 2px 2px 20px #d31360;
			background-color: #d31360;
			transition: all 0.2s ease-in-out;
			clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

			height: 30px;
			width: 30px;
		}
		.cam3 {
			position: absolute;
			bottom: 3%;
			/* transform: translateX(-50%); */
			right: 47%;
			height: 30px;
			width: 30px;
			border-radius: 50%;

			border: 5px solid #30aadd;
		}

		.about-title {
			transform: translateX(5%);
		}
		p {
			transform: translateX(5%);
			line-height: 1.65rem;
			text-align: justify;
		}
		h1 {
			font-size: 1.5rem;
			padding-bottom: 1rem;
		}
	}
	@media (max-width: 780px) {
		div {
			padding: 5rem 1rem;
		}
	}
	@media (max-width: 700px) {
		div {
			padding: 5rem 1rem;
		}
		p {
			line-height: 1.6rem;
		}
		h1 {
			padding-bottom: 1rem;
		}
	}
	@media (max-width: 600px) {
		.para,
		.about-title {
			transform: translate(15px, 0px) !important;
		}
		
		.btn1 {
			top: 93%;
		}
		.btn2 {
			top: 93%;
		}
		div {
			padding: 5rem 1rem !important;
			width: 90%;
			height: fit-content;
			padding: 0.5rem;
			min-height: fit-content;
		}
		p {
			text-align: justify;
		}
	}
`;
