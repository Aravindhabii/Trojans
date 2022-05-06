const __DEV__ = document.domain === 'localhost';

export const BACKEND_BASE_URL = __DEV__
	? 'http://localhost:8080/api'
	: 'https://trojanscit.com/api';

export const REACT_BASE_URL = __DEV__
	? 'http://localhost:3000'
	: 'https://trojanscit.com';

export const RAZORPAY_LIVE_API_KEY = 'rzp_live_e1A3Qm8JDCHeHx';
