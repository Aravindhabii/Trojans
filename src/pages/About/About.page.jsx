import React from 'react';
import { useRef, useEffect } from "react";
import { useLayoutEffect } from 'react';
import './about.css'
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";
import Navbar from '../../components/Navbar/Navbar.component';
import { HeroSection } from './About.styles';
const AboutPage = () => {
	
	// const handleScroll = (e) => {
	gsap.registerPlugin(ScrollTrigger)
	// 	const scrollY = window.scrollY
	// 	console.log('====================================');
	// 	console.log(scrollY);
	// 	console.log('====================================');
	// }
	// window.addEventListener('scroll', handleScroll);
	const tab = useRef();
	useEffect(() => {
		let t1 = gsap.timeline();
		const element = tab.current;
		
			t1.to(element, {
				scrollTrigger: {
					trigger: element,
					
					pin: true,
					start: 'top 50%',
            		end: 'bottom -100%',
					// scroller: window,
					// scroller: window,
					scrub: true,
					markers: true,
					pinSpacer: true,
					pinSpacing: false,
	
	
					
				}
			})
			
		ScrollTrigger.refresh()
      t1.to( element.querySelector('.para') , {
        y: 0,
		
      })
	  
	},[]);
	return (
		<>
			<Navbar />
			<HeroSection>
				<div ref={tab} className='tab' >
					<span className="speaker"></span>
					<span className='cam1'></span>
					<span className='cam2'></span>
					<h1>We Introduce Ourselves.</h1>
					<p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam, quos aspernatur qui corporis
            odit. Aut voluptas rerum minima veniam natus molestiae. Omnis sit maxime exercitationem hic consequatur
            corrupti ratione. Quaerat repellat corporis ab enim dolorum veniam consectetur suscipit totam nisi quo
            doloribus perspiciatis officiis non, molestias libero quisquam reiciendis harum? Aut, minus voluptates? Sit
            optio ex officia consequatur non saepe error excepturi, quas autem, exercitationem atque. Voluptatum quidem
            iusto molestias, consequuntur fugiat possimus minima quasi aliquam! Necessitatibus obcaecati doloribus
            dolores vel ut autem numquam. Autem, earum delectus mollitia natus blanditiis laborum in cumque sequi dolore
            ut neque, et minus.</p>
				</div>
			</HeroSection>
			
		</>
	);
};

export default AboutPage;
