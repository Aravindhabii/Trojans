import axios from 'axios';

import { BACKEND_BASE_URL } from '../environment.utils';

export const contactPost = (name, email, message) =>
	axios.post(`${BACKEND_BASE_URL}/contact`, { name, email, message });
