import styled from 'styled-components';

export const HeroSection = styled.section`
	background-color: #1e1e1e;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow-x: hidden;

	.left {
		position: relative;
		height: 100%;
		width: 30%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* background-color: rgb(0,0,0); */
	}

	.right {
		position: relative;
		height: 100%;
		width: 70%;
		display: flex;
	}

	.threedwrapper {
		position: absolute;
		height: 100%;
		width: 50%;
		display: flex;
		bottom: 0;
		left: 0%;
	}
  
	.canvas {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const Rightone = styled.div`
	position: relative;
	height: 100%;
	width: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Righttwo = styled.div.attrs({
	className: 'rightTwo'
})`
	position: relative;
	height: 100%;
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: ${({ openorclose }) =>
			openorclose ? 'translateX(0)' : 'translateX(100%)'}
		rotate(0deg);
	transition: transform 0.5s ease-in-out;
`;

export const Button = styled.button`
	position: relative;
	background-color: #fff;
	border: none;
	width: 70%;
	border-radius: 5px;
	color: #000;
	font-size: 1.2rem;
	font-weight: bold;
	padding: 3rem 1rem;
	margin-top: 1rem;
	&:hover {
		background-color: #000;
		color: #fff;
	}
`;

export const Eventsdiv = styled.div.attrs({
	className: 'rightTwo'
})`
	position: absolute;
	width: 95%;
	height: 85%;
	color: #fff;
	background: ${({ phoneimg }) =>
		phoneimg ? `url(${phoneimg})` : 'palevioletred'};
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center;
	left: 0%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow-x: hidden;
	align-items: center;
	.eventlistdiv {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 85%;
		width: 95%;
	}
`;

export const Eventslist = styled.button.attrs({
	className: 'eventlist'
})`
	position: relative;
	width: 70%;
	height: 9%;
	border: none;
	/* display: none; */
	align-items: center;
	justify-content: center;
	background: #000;
	border-radius: 5px;
	font-size: 1.2rem;
	font-weight: bold;
	color: #fff;
	opacity: 0;
	/* transform: translateX(400%); */
	margin: 1rem;
	&:hover {
		background-color: #fff;
		color: #000;
	}
`;

export const Threeddiv = styled.div`
	position: absolute;
	height: 100%;
	width: 50%;
	display: flex;
	bottom: 0;
	left: ${({ openorclose }) => (openorclose ? '10%' : '40%')};
	transition: all 0.5s ease-in-out;
`;
