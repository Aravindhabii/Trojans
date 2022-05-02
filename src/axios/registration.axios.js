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
	axios.post(`http://localhost:8080/api/data`, {
		name,
		email,
		phone,
		department,
		year,
		college,
		event
	});
