import axios from 'axios';

import { BACKEND_BASE_URL } from '../environment.utils';

export const verifyPost = (email) =>
	axios.post(`${BACKEND_BASE_URL}/verify-email`, { email });
