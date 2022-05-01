import styled from 'styled-components';

export const TabImgContainer = styled.div`
	width: 93%;
	height: 92%;
	border-radius: 10px;
	background: url(${({ url }) => url}) no-repeat center/cover;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	transform-style: preserve-3d;
	transform: perspective(2000px);

	.events-bg-content {
    }
    
	h1,
	p {
        font-family: StrongBrain !important;
		letter-spacing: 2px;
	}
    
	h1 {
        transform: translateZ(50px);
		margin-bottom: 2rem;
	}

	p {
		font-size: 1.5rem;
	}
`;
