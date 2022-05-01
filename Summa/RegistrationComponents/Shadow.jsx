import React, { useState, useEffect } from 'react';
import './Shadow.css';

function Shadow({ isClicked, setIsClicked }) {
	function getWindowDimensions() {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height
		};
	}
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	const [noOfDivs, setNoOfDivs] = useState([]);

	useEffect(() => {
		const width = Math.ceil(window.innerWidth / 60);
		const height = Math.ceil(window.innerHeight / 60);
		setNoOfDivs(Array(width * height).fill(0));
		window.addEventListener('resize', () =>
			setNoOfDivs(Array(width * height).fill(0))
		);
		return () =>
			window.removeEventListener(
				'resize',
				setNoOfDivs(Array(Math.ceil(window.innerWidth / 80)).fill(0))
			);
	}, []);

	return (
		<>
			<div className='section-box'>
				{noOfDivs.map((div, index) => {
					return (
						<div
							key={index}
							className='box-shadow'
							style={{
								opacity: isClicked ? 0 : 1
							}}
							onClick={() => setIsClicked(!isClicked)}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Shadow;
