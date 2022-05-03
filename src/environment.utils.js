const __DEV__ = document.domain === 'localhost';

export const BACKEND_BASE_URL = __DEV__
	? 'http://localhost:8080'
	: 'https://trojans-server.herokuapp.com';

export const REACT_BASE_URL = __DEV__
	? 'http://localhost:3000'
	: 'https://trojans-cit.herokuapp.com';

export const RAZORPAY_KEY = __DEV__
	? 'rzp_test_o2U8BQRS1aZ9Ww'
	: 'rzp_live_MclbQXG3g9lyBX';
