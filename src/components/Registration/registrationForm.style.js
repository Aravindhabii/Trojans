import styled, {keyframes} from 'styled-components';

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

	button {
		width: 50vw;
		padding: 0.8rem;
		text-align: center;
		border-radius: 10px;
		margin: 1rem 0;
		color: white;
		background-color: green;
		outline: none;
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
		padding: 1.1rem 0.8rem;
		border-radius: 10px;
		background-color: black;
		box-shadow: 0 0 5px #c4c4, 0 0 15px #c4c4;
		margin: 1rem 0;
	}
	
	option {
		color: white;
		padding: 1.1rem 0.8rem;
	}
	
	select {
		outline: none;
		font-size: 1rem;
		border: none;
		width: 100%;
		padding: 1.1rem 0.8rem;
		border-radius: 10px;
		background-color: black;
		box-shadow: 0 0 5px #c4c4, 0 0 15px #c4c4;
		margin: 1rem 0;
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
