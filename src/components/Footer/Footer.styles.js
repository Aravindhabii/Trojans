import styled, { keyframes } from 'styled-components';

export const FooterContainer = styled.section`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	background-color: #100c0c;
	color: white;
	text-align: center;
	padding: 0 6rem;
	box-shadow: 0 5px 30px #03e9f4;

	.footer-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-top: 3rem;
		margin-bottom: 1rem;

		img {
			width: 10rem;
		}

		div:nth-of-type(2) {
			display: flex;
			width: 100%;

			.footer-links-container {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-direction: column;
				width: 100%;
				height: 100%;
				padding: 0 2rem;

				h2 {
					margin-bottom: 1rem;
				}

				ul {
					list-style: none;
				}

				ul a {
					color: #fff;
					text-decoration: none;
					padding: 0.5rem;
					display: block;
				}
			}
		}
	}

	.copyright {
		padding: 1rem 0;
	}
`;
