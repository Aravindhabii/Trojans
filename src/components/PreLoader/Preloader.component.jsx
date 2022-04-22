import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import { PreLoaderContainer } from './PreLoader.style';

import TrojansLogo from '../../assets/Trojans_logo/OnlyLogo_White.png';

const Preloader = () => {
	const preLoaderRef = useRef();
	const spans = gsap.utils.selector(preLoaderRef);

	useEffect(() => {
		gsap
			.timeline()
			.fromTo(
				spans('img'),
				{
					duration: 1,
					rotation: 360,
					scale: 2
				},
				{
					duration: 1,
					rotation: 0,
					scale: 1
				}
			)
			.fromTo(
				spans('span'),
				{
					duration: 0.8,
					autoAlpha: 0,
					y: 100,
					stagger: 0.2
				},
				{
					duration: 0.8,
					autoAlpha: 1,
					y: 0,
					stagger: 0.2
				},
				'-=0.5'
			)
			.fromTo(
				preLoaderRef.current,
				{
					duration: 1,
					autoAlpha: 1,
					zIndex: 999
				},
				{
					duration: 1,
					autoAlpha: 0,
					zIndex: -100
				},
				'+=1'
			);
	}, []);

	return (
		<PreLoaderContainer ref={preLoaderRef}>
			<span>T</span>
			<span>R</span>
			<img src={TrojansLogo} alt='TROJANS' />
			<span>J</span>
			<span>A</span>
			<span>N</span>
			<span>S</span>
		</PreLoaderContainer>
	);
};

export default Preloader;
