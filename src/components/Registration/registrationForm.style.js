import styled, { keyframes } from 'styled-components';

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

export const FormContainerStyle = styled.form`
	position: relative;
	width: 50vw;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	button {
		width: 20vw;
		padding: 10px 25px;
		background: transparent;
		transition: all 0.3s ease;
		position: relative;
		color: #bc13fe;
		z-index: 1;
		margin-bottom: 3rem;
		margin-top: 1rem;
		border-radius: 10px;

		color: #bc13fe;
		border: 1px solid #bc13fe;
		box-shadow: 0 0 5px #bc13fe, 0 0 5px #bc13fe inset;
		transition: all 0.3s ease;
		overflow: hidden;
		cursor: pointer;

		&:after {
			position: absolute;
			content: ' ';
			z-index: -1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			transition: all 0.3s ease;
		}
		&:hover {
			color: #000;
		}
		&:hover:after {
			background: #bc13fe;
			-webkit-transform: scale(2) rotate(180deg);
			transform: scale(2) rotate(180deg);
			box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 1),
				-4px -4px 6px 0 rgba(116, 125, 136, 0.2),
				inset -4px -4px 6px 0 rgba(255, 255, 255, 1),
				inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
		}
	}
`;

export const InputContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	font-size: 1.3rem;

	label {
		color: violet !important;
		text-shadow: 0 0 5px violet, 0 0 15px violet;
		animation: ${flicker} 2s infinite alternate;
	}

	input {
		font-size: 1rem;
		outline: none;
		border: none;
		color: white;
		width: 100%;
		padding: 1rem 0.8rem;
		border-radius: 10px;
		background-color: black;
		box-shadow: 0 0 5px #bc13fe, 0 0 15px #bc13fe;
		margin: 1rem 0;
		border: 1px solid #bc13fe;
		margin-bottom: 2rem;
	}

	option {
		color: white;
		padding: 1rem 0.8rem;
	}

	select {
		outline: none;
		font-size: 1rem;
		border: none;
		width: 100%;
		padding: 1rem 0.8rem;
		border-radius: 10px;
		background-color: black;
		box-shadow: 0 0 5px #bc13fe, 0 0 15px #bc13fe;
		margin: 1rem 0;
		margin-bottom: 2rem;
		color: white;
	}

	select[name='department'] {
		width: auto;
		margin-right: 0.3rem;
	}

	select[name='year'] {
		width: auto;
		margin-left: 0.3rem;
	}

	input:focus,
	select:focus {
		box-shadow: 0 0 5px white, 0 0 15px white;
	}

	input.error,
	select.error {
		box-shadow: 0 0 5px red, 0 0 15px red;
	}
	input.success,
	select.success {
		box-shadow: 0 0 5px green, 0 0 15px green;
	}
`;
