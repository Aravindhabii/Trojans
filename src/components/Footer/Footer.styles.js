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
	box-shadow: 0 5px 30px #03e9f4;

	.footer-top {
		padding: 0 6rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-top: 3rem;
		margin-bottom: 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		.footer-logo-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			div {
				display: block !important;
			}
		}

		img:nth-of-type(1) {
			width: 12rem;
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
