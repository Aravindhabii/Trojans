import React from 'react';

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
