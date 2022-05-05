import axios from 'axios';

import { BACKEND_BASE_URL } from '../environment.utils';

export const registrationEventAxios = (
	name,
	email,
	phone,
	department,
	year,
	college,
	event,
	transactionID,
	orderID,
	date
) =>
	axios.post(`${BACKEND_BASE_URL}/data`, {
		name,
		email,
		phone,
		department,
		year,
		college,
		event,
		transactionID,
		orderID,
		date
	});
