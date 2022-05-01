import React from 'react';

import { TabImgContainer } from './EventsTab.style';

const EventsTab = ({ TechnicalBg, title, events }) => {
	return (
		<TabImgContainer url={TechnicalBg}>
			<div className='events-bg-content'>
				<h1>{title}</h1>
				<div>
					{events.map((event) => (
						<p>{event}</p>
					))}
				</div>
				<div className='button'>View Events</div>
			</div>
		</TabImgContainer>
	);
};

export default EventsTab;
