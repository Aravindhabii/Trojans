import styled from 'styled-components';

export const TabImgContainer = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	background: black url(${({ imgUrl }) => imgUrl}) no-repeat center/cover;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: relative;

	.events-bg-content {
		transform-style: preserve-3d;
		transform: perspective(2000px);
	}

	h1,
	p {
		font-family: StrongBrain !important;
		letter-spacing: 2px;
	}

	h1 {
		margin-bottom: 2rem;
		transform: translateZ(500px);
	}

	p {
		font-size: 1.5rem;
	}
`;
