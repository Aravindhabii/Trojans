import styled from 'styled-components';

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
		/* display: grid;
        grid-template-columns: 1fr 1fr 1fr; */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		.footer-logo-container {
			display: flex;
			/* display: none; */
			flex-direction: row;
			align-items: center;
			justify-content: center;

			div {
				display: block !important;
			}
			@media (max-width: 900px) {
				display: none;
			}
		}

		img {
			width: 8vw;

			@media (max-width: 1050px) {
				width: 14vw;
			}
		}
		.citLogo {
			width: 11vw;

			@media (max-width: 1050px) {
				width: 14vw;
			}
		}

		div:nth-of-type(2) {
			display: flex;
			width: 100%;
			flex-direction: row;

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
			@media (max-width: 900px) {
				/* flex-direction: column; */

				.footer-links-container {
					padding: 2rem;
				}
			}
			@media (max-width: 350px) {
				/* flex-direction: column; */

				.footer-links-container {
					padding: 1rem;
				}
			}
			@media (max-width: 300px) {
				/* flex-direction: column; */

				.footer-links-container {
					padding: 0.5rem;
				}
			}
			@media (max-width: 900px) {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
			}
		}
	}

	.copyright {
		padding: 1rem 0;
	}

	@media (max-width: 900px) {
		.footer-top {
			padding: 1rem;
			grid-template-columns: repeat(2, 1fr);
		}
	}
`;
