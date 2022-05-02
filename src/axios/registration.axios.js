import axios from 'axios';

export const registrationEventAxios = (
	name,
	email,
	phone,
	department,
	year,
	college,
	event
) =>
	axios.post(`https://trojans-cit.herokuapp.com/api/data`, {
		name,
		email,
		phone,
		department,
		year,
		college,
		event
	});
