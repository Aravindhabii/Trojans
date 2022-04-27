import React from 'react';
import { useRef, useEffect,useState } from "react";
import { useLayoutEffect } from 'react';
import './about.css'
// import Tilt from 'react-tilt'
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";
import Navbar from '../../components/Navbar/Navbar.component';
import { HeroSection } from './About.styles';
import video from '../../assets/about/Frame11.mp4';
import btn1 from '../../assets/about/btn1.png';
import btn2 from '../../assets/about/btn2.png';
const AboutPage = () => {
	const [display, setDisplay] = useState(1);
	const [contentTrigger,setContentTrigger] = useState(false)
	gsap.registerPlugin(ScrollTrigger)

	const handleScroll = (e) => {
		const scrollY = window.scrollY
		console.log('====================================');
		console.log(scrollY);

		if(scrollY > 230){
			setDisplay(2);
		} else {
			setDisplay(1);
		}
		console.log('====================================');
	}
	window.addEventListener('scroll', handleScroll);
	const tab = useRef();
	useEffect(() => {
		if(window.innerWidth < '780') {
			setContentTrigger(true)
		}
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
					// markers: true,
					pinSpacer: true,
					pinSpacing: false,
	
	
					
				}
			})
			
		ScrollTrigger.refresh()
      t1.to( element.querySelectorAll('.para') , {
        y: 0,
		ease: "easeInOut",
		duration: 1,
      })
	  
	},[display]);
	const handleClick = (type) => {
		if(type == 'goBack') {
			return display == 1 ? null : setDisplay(display - 1) ;
			
		} else {
			return display == 2 ? null : setDisplay(display + 1) ;
		}
	}
	return (
		<>
			<Navbar active={{ route: 'about', scroll: 1 }} />
			<HeroSection contentTrigger={contentTrigger}>
				<video className='video' loop autoPlay muted>
					<source src={video} type="video/mp4"/>
				</video>
				<div ref={tab} className='tab' >
					<span className='btn1' onClick={()=>handleClick('goDown')}></span>
					<span className='btn2' onClick={()=>handleClick('goBack')}></span>
					<span className="speaker"></span>
					<span className='cam1'></span>
					<span className='cam2'></span>
					<span className='cam3'></span>
					{display == 1 ? <p className='para para1'>
					<h1>We Introduce Ourselves.</h1>

						Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam, quos aspernatur qui corporis
            odit. Aut voluptas rerum minima veniam natus molestiae. Omnis sit maxime exercitationem hic consequatur
            corrupti ratione. Quaerat repellat corporis ab enim dolorum veniam consectetur suscipit totam nisi quo
            doloribus perspiciatis officiis non, molestias libero quisquam reiciendis harum? Aut, minus voluptates? Sit
            optio ex officia consequatur non saepe error excepturi, quas autem, exercitationem atque.<span className='contentextra'>Voluptatum quidem
            iusto molestias, consequuntur fugiat possimus minima quasi aliquam! Necessitatibus obcaecati doloribus
            dolores vel ut autem numquam. Autem, earum delectus mollitia natus blanditiis laborum in cumque sequi dolore
            ut neque, et minus.</span></p> : null}
			{display == 2 ? <p className='para para2'>
			<h1>screen2</h1>
				santy sit amet consectetur adipisicing elit. Recusandae ipsam, quos aspernatur qui corporis
            odit. Aut voluptas rerum minima veniam natus molestiae. Omnis sit maxime exercitationem hic consequatur
            corrupti ratione. Quaerat repellat corporis ab enim dolorum veniam consectetur suscipit totam nisi quo
            doloribus perspiciatis officiis non, molestias libero quisquam reiciendis harum? Aut, minus voluptates? Sit
            optio ex officia consequatur non saepe error excepturi, quas autem, exercitationem atque. Voluptatum quidem
            iusto molestias, consequuntur fugiat possimus minima quasi aliquam! Necessitatibus obcaecati doloribus
            dolores vel ut autem numquam. Autem, earum delectus mollitia natus blanditiis laborum in cumque sequi dolore
            ut neque, et minus.</p> : null}
				</div>
			</HeroSection>
		</>
	);
};

export default AboutPage;
