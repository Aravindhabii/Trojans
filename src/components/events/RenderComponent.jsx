import React, { useEffect, useState } from 'react';
import {
	technicalevents,
	nontechnicalevents,
	workshops,
	gamming
} from '../../datas/technical.data';
import { Eventslist } from '../../pages/Events/Events.styles';
import { gsap } from 'gsap';

const RenderComponent = (props) => {
	const {
		currentPage,
		setCurrentPage,
		clickedEvent,
		setClickedEvent,
		isTabletOpen,
		setisTabletOpen,
		setCurrentEvent,
		selectedEvent,
		setSelectedEvent
	} = props;
	const [previousPage, setPreviousPage] = useState('');

	const click = (e) => {
		if (isTabletOpen === false) {
			setisTabletOpen(true);
			setSelectedEvent(e.target.innerText);
		}
	};

	useEffect(() => {
		if (clickedEvent === 'technicalevents') {
			setCurrentPage(technicalevents);
		} else if (clickedEvent === 'nontechnicalevents') {
			setCurrentPage(nontechnicalevents);
		} else if (clickedEvent === 'workshops') {
			setCurrentPage(workshops);
		} else if (clickedEvent === 'gamming') {
			setCurrentPage(gamming);
		}
	}, [clickedEvent]);

	useEffect(() => {
		let t1 = gsap.timeline();
		const t2 = gsap.timeline();
		const mainelement = document.querySelector('.rightTwo');
		const element = document.querySelectorAll('.eventlist');
		t1.from(element, {
			duration: 1,
			opacity: 0,
			ease: 'easInOut'
		});
		t1.to(element, {
			ease: 'easInOut',
			opacity: 1,
			duration: 1
		});
	}, [currentPage]);

	return (
		<div className='eventlistdiv'>
			{currentPage.map((event) => (
				<Eventslist onClick={click}>
					<h3 className='heading' key={event.id}>
						{event.name}
					</h3>
				</Eventslist>
			))}
		</div>
	);
};

export default RenderComponent;
