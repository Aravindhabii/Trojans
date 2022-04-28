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
      openorclose ? "translateX(0)" : "translateX(100%)"}
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

export const Tabletdiv = styled.div.attrs({
  className: "tabletdiv",
})`
  position: absolute;
  width: 100%;
  height: 100vh;
  color: #fff;
  display: flex;
  background: #1e1e1e;
  justify-content: center;
  align-items: center;
  top: 0;
`;

export const Tabletcont = styled.div.attrs({
  className: "tabletcont",
})`
  position: relative;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ tab }) => (tab ? `url(${tab})` : "palevioletred")};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 55px;
  overflow-x: hidden;
  h1 {
    position: absolute;
    top: 10%;
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const TabletScreen = styled.div.attrs({
  className: "tabletScreen",
})`
  position: relative;
  width: 94%;
  height: 90%;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .leftarrow{
    position: absolute;
    display: ${({ pageno }) => (pageno > 1 ? "block" : "none")};
    top: 10%;
    left: 10%;
    font-size: 40px;
    color: #fff;
    z-index: 5;
  }
  .rightarrow{
    position: absolute;
    display: ${({ pageno }) => (pageno < 3 ? "block" : "none")};
    top: 10%;
    right: 10%;
    font-size: 40px;
    color: #fff;
    z-index: 5;
  }
  .description {
    position: absolute;
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${({pageno}) => pageno === 1 ? "translateX(0)" : "translateX(200%)"};
    transition: all 0.5s ease-in-out;

  }
  h2 {
    position: relative;
    margin-bottom: 6%;
    align-self: flex-start;
    font-size: 2rem;
  }
  p {
    position: relative;
    align-self: center;
    font-weight: 500;
    font-size: 1.5rem;
  }
  .rules {
    position: absolute;
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${({pageno}) => pageno === 2 ? "translateX(0)" : "translateX(200%)"};
    transition: all 0.5s ease-in-out;

  }
  ul {
    position: relative;
    list-style: '->   ' ;
    list-style-position: outside;
    align-self: center;
  }
  li {
    position: relative;
    margin-bottom: 5%;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .students{
    position: relative;
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${({pageno}) => pageno === 3 ? "translateX(0)" : "translateX(200%)"};
    transition: all 0.5s ease-in-out;
  }
  .studentscontainer{
    position: relative;
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
 
  }
  .name{
    position: relative;
    font-size: 1.4rem;
    font-weight: 500;

  }
  .phoneno{
    position: relative;
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 1%;
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

// background: ${({ phoneimg }) =>
// phoneimg ? `url(${phoneimg})` : "palevioletred"};
// background-size: 100% 100%;
// background-repeat: no-repeat;
// background-position: center;
