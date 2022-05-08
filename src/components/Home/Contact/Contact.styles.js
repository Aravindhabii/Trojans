import styled, { keyframes } from 'styled-components';

export const ContactSection = styled.section`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
	/* background: #000; */
	overflow: hidden;
	/* background: url("https://img.freepik.com/free-vector/stream-binary-code-design_53876-97406.jpg?t=st=1651815297~exp=1651815897~hmac=aedd8249ae37373f7ae5a42405426e257bb7da6a320ebf549ee76219407a4dcb&w=740") center/cover no-repeat; */
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
	align-items: flex-start;
	justify-content: center;
	width: 50%;
	height: 100%;
	/* background: #000; */
	color: #fff;
	overflow: visible;
	/* z-index: 2; */
	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: black;
		width: 100%;
		/* text-shadow: 0 0 7px #bc13fe, 0 0 10px #bc13fe, 0 0 21px #bc13fe,
                0 0 42px #bc13fe, 0 0 82px #bc13fe, 0 0 92px #bc13fe,
                0 0 102px #bc13fe, 0 0 151px #bc13fe; */
		text-shadow: 2px 0 0 #bc13fe, -2px 0 0 #bc13fe, 0 2px 0 #bc13fe,
			0 -2px 0 #bc13fe, 1px 1px #bc13fe, -1px -1px 0 #bc13fe, 1px -1px 0 #bc13fe,
			-1px 1px 0 #bc13fe, 0 0 7px #bc13fe, 0 0 10px #bc13fe, 0 0 21px #bc13fe;
		z-index: 2;
	}
	p {
		font-size: 1.2rem;
		color: white;
		width: 100%;
	}

	a {
		text-decoration: none;
		color: white;
	}
	form {
		width: 100%;
		height: 80%;
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
			margin-bottom: 1rem;

			label {
				font-size: 1.5rem;
			}
			input {
				width: 100%;
				outline: none;
				color: #fff;
				font-size: 1.2rem;
				padding: 1rem 0.8rem;
				border-radius: 10px;
				background: #000;
				box-shadow: 0 0 5px #bc13fe, 0 0 15px #bc13fe;
				margin: 1rem 0;
				border: 1px solid #bc13fe;
				border: none;
				margin-bottom: 0.5rem;
				z-index: 5;
			}

			input[disabled] {
				box-shadow: 0 0 5px #530074, 0 0 15px #530074;
				border: 1px solid #530074;
			}
			input:focus {
				box-shadow: 0 0 5px white, 0 0 15px white;
			}

			input.error {
				box-shadow: 0 0 5px red, 0 0 15px red;
				border: 1px solid red;
			}
			input.success {
				box-shadow: 0 0 5px green, 0 0 15px green;
				border: 1px solid green;
			}

			button {
				width: 10rem;
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
				margin-top: 1rem;

				&:hover {
					background: #bc13fe;
				}

				&:disabled {
					box-shadow: 0 0 4px #bc13fe, 0 0 11px #bc13fe, 0 0 19px #bc13fe;
					cursor: pointer;
				}

				&:disabled:hover {
					background: none;
				}
			}
		}
		div:nth-of-type(3) {
			height: 12rem;
			textarea {
				width: 100%;
				height: 10rem;
				padding: 1rem 0.8rem;
				border-radius: 10px;
				background-color: black;
				box-shadow: 0 0 5px #bc13fe, 0 0 15px #bc13fe;
				margin: 1rem 0;
				border: 1px solid #bc13fe;
				color: #fff;
				border-radius: 10px;
				font-size: 1.1rem;
				z-index: 5;
				outline: none;
				margin-bottom: 0.5rem;

				&:focus {
					box-shadow: 0 0 5px white, 0 0 15px white;
				}

				&.error {
					box-shadow: 0 0 5px red, 0 0 15px red;
					border: 1px solid red;
				}
				&.success {
					box-shadow: 0 0 5px green, 0 0 15px green;
					border: 1px solid green;
				}
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

export const HoverContact = styled.div`
	position: absolute;
	width: 1000px;
	height: 200px;
	margin: 10%;
	right: -60%;
	transition: all 10s ease 0s;
	span {
		position: absolute;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
	}
	span::before {
		content: '';
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
		animation: ${hovereffectanimation} 10s linear infinite;
	}
`;
