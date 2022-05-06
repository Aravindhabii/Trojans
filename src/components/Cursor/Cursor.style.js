import styled, { keyframes } from 'styled-components';

const cursorColor = keyframes`
	0%{
    filter: hue-rotate(0deg);
	}
	100%{
    filter: hue-rotate(360deg);
	}`;

export const CursorDiv = styled.div.attrs({
	className: 'cursor'
})`
	z-index: 99999999;
	position: fixed;
	background: #2696e8;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	pointer-events: none;
	box-shadow: 0 0 20px #2696e8, 0 0 60px #2696e8, 0 0 100px #2696e8;
	animation: ${cursorColor} 5s linear infinite;
	transform: translate(-50%, -50%);

	&:before {
		content: '';
		position: absolute;
		background: #2696e8;
		width: 50px;
		height: 50px;
		opacity: 0.2;
		transform: translate(-30%, -30%);
		border-radius: 50%;
	}

	@media (max-width: 900px) {
		visibility: hidden;
	}
`;
