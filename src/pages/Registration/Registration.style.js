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

	.dropdown-container {
		display: flex;
		width: 100%;
		@media (max-width: 400px) {
			flex-direction: column;
		}
	}

	.email {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;

		button {
			margin: 0;
			margin-top: 0.5rem;
			padding: 1rem 0.8rem;
			margin-left: 0.5rem;
			font-size: 1.1rem;
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
