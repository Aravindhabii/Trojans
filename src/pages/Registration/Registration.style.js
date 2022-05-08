import styled from 'styled-components';

export const RegistrationContainer = styled.div`
	width: 100%;
	height: fit-content;
	position: relative;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;

	.dropdown-container {
		display: flex;
		width: 100%;
		@media (max-width: 400px) {
			flex-direction: column;
		}
	}

	button:disabled {
		color: #530074;
		border: 1px solid #530074;
		box-shadow: 0 0 5px #530074, 0 0 5px #530074 inset;

		&:hover:after {
			background: none;
			box-shadow: none;
		}
	}
`;

export const OTPPopup = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;

	.otp-popup {
		padding: 3rem;
		height: fit-content;
		background-color: white;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 5px black, 0 0 5px black inset;
		background-color: #100c0c;
		color: white;

		p {
			margin-bottom: 1rem;
		}
	}
	button {
		margin: 2rem;
	}

	div[data-testid='otp-resend-root'] {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 1rem;

		button {
			width: auto;
			background: none;
			outline: none;
			border: none;
			box-shadow: none;
			padding: 0;
			margin: 0;
			margin-right: 1rem;

			&:hover {
				cursor: pointer;
				background-color: none;
				color: white;
			}

			&::after {
				display: none;
			}
		}
	}
`;
