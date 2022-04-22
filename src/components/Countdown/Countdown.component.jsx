import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { CountdownContainer } from './Countdown.style';

const targetTime = moment('18-05-2022', 'DD-MM-YYYY');

const Countdown = ({ setShowCountdown }) => {
	const [currentTime, setCurrentTime] = useState(moment());
	const timeBetween = moment.duration(targetTime.diff(currentTime));
	useEffect(() => {
		const interval = setInterval(() => {
			if (timeBetween.milliseconds() < 0) {
				setShowCountdown(false);
				clearInterval(interval);
				return;
			}
			setCurrentTime(moment());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<CountdownContainer>
			<div>
				<span>{timeBetween.days()}d </span>
				<span>{timeBetween.hours()}h </span>
				<span>{timeBetween.minutes()}min </span>
				<span>{timeBetween.seconds()}s </span>
			</div>
		</CountdownContainer>
	);
};

export default Countdown;
