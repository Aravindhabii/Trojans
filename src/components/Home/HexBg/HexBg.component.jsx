import React from 'react';
import gsap from 'gsap';

import { HexBgStyle } from './HexBg.style';

const HexBg = ({ direction }) => {
	return (
		<HexBgStyle direction={direction}>
			<div className='hex'></div>
			<div className='bg'></div>
		</HexBgStyle>
	);
};

export default HexBg;
