import styled from 'styled-components';

export const PreLoaderContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: black;
	z-index: 9999;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	color: white;
	font-family: trojans;
    font-size: 8rem;

	img {
		width: 11rem;
	}
`;
