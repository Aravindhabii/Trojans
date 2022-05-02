import styled from 'styled-components';

export const FormContainerStyle = styled.form`
	position: relative;
	width: 50vw;
	button {
		width: 50vw;
		padding: .8rem;
		text-align: center;border-radius:5px;
		margin: 1rem 0;
	}
`;

export const InputContainerStyle = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	width: 100%;

	input {
		outline: none;
		border: none;
		color: white;
		height: 2rem;
		width: 100%;
		padding: 0.5rem;
		border-radius: 5px;
		background-color: black;
		box-shadow: 0 0 5px #c4c4, 0 0 15px #c4c4;
		margin: 1rem 0;
	}

	select {
		outline: none;
		border: none;
		color: white;
		height: 2rem;
		width: 100%;
		padding: 0.5rem;
		border-radius: 5px;
		background-color: black;
		box-shadow: 0 0 5px #c4c4, 0 0 15px #c4c4;
		margin: 1rem 0;
	}

	input.error {
		box-shadow: 0 0 5px red, 0 0 15px red;
	}

	input.success {
		box-shadow: 0 0 5px green, 0 0 15px green;
	}
`;
