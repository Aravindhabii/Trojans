import React from 'react';
import { Link } from 'react-router-dom';

import { TabImgContainer } from './EventsTab.style';

const EventsTab = ({ imgUrl, title, events }) => {
	return (
		<TabImgContainer imgUrl={imgUrl}>
			<div className='events-bg-content'>
				<h1>{title}</h1>
				<div>
					{events.map((event) => (
						<p>{event}</p>
					))}
				</div>
				<Link to='/events'>View</Link>
			</div>
		</TabImgContainer>
	);
};

export default EventsTab;
