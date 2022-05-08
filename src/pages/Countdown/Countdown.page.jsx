import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';

import { CountdownContainer, CountdownCircleStyle } from './Countdown.style';

import TrojansGold from '../../assets/Trojans_logo/trojans-compressed.webp';
const targetTime = moment('25-05-2022', 'DD-MM-YYYY');

const CountdownCircle = ({ time, timeType, strokeDashOffset, color }) => {
	const circleRef = useRef();
	const dotsRef = useRef();

	useEffect(() => {
		gsap.to(circleRef.current, {
			strokeDashoffset: 320 - (time * 320) / strokeDashOffset
		});
		gsap.to(dotsRef.current, {
			rotation: time * (360 / strokeDashOffset),
			ease: 'none'
		});
	}, [time, timeType, strokeDashOffset]);

	return (
		<>
			<CountdownCircleStyle time={time} timeType={time} color={color}>
				<div className='dots' ref={dotsRef}></div>
				<svg>
					<circle cx={65} cy={65} r={50} />
					<circle id={timeType} cx={65} cy={65} r={50} ref={circleRef} />
				</svg>
				<div>
					<span>{time}</span>
					<span>{timeType}</span>
				</div>
			</CountdownCircleStyle>
		</>
	);
};
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
	}, [setShowCountdown, timeBetween]);

	return (
		<CountdownContainer>
			<Helmet>
				<title>TROJANS | COUNTDOWN</title>
			</Helmet>
			<div>
				<h2>A NATIONAL LEVEL TECHNICAL SYMPOSIUM</h2>
				<img src={TrojansGold} alt='Trojans' />
				<h2>TICK TICK TICK, COUNT ON YOUR WATCH FOR THE BOOM</h2>
				<div className='countdown-container'>
					<CountdownCircle
						time={timeBetween.days()}
						timeType='Days'
						strokeDashOffset={24}
						color='red'
					/>
					<CountdownCircle
						time={timeBetween.hours()}
						timeType='Hours'
						strokeDashOffset={24}
						color='blue'
					/>
					<CountdownCircle
						time={timeBetween.minutes()}
						timeType='Minutes'
						strokeDashOffset={60}
						color='green'
					/>
					<CountdownCircle
						time={timeBetween.seconds()}
						timeType='Seconds'
						strokeDashOffset={60}
						color='yellow'
					/>
				</div>
			</div>
		</CountdownContainer>
	);
};

export default Countdown;
