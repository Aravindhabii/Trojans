import styled from 'styled-components';

// import HexImg from '../../../assets/home/Hexagon.svg';
// import HexImageWhite from '../../../assets/home/Hexagon-white-1.png';

export const HexBgStyle = styled.div`
	height: 100vh;
	background: #000;
	z-index: 1;
	position: absolute;
	width: 100%;
	overflow: hidden;

	.hex {
		background: url(${({svg})=> svg}) repeat;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: 350px;
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(
				${({ direction }) => direction},
				rgba(0, 0, 0, 0) 70%,
				rgba(0, 0, 0, 1) 100%
			);
			z-index: -1;
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.3);
			z-index: -1;
		}
	}
	.bg {
		position: absolute;
		height: 300px;
		width: 300px;
		/* background: linear-gradient(90deg, #9500ff 0%, #ff41df 100%); */
		background: ${({ color }) => (color ? color : "linear-gradient(90deg, #9500ff 0%, #ff41df 100%);")};
		filter: blur(20px);
		z-index: 0;
		border-radius: 50%;
	}
`;
