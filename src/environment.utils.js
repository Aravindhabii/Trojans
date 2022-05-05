const __DEV__ = document.domain === 'localhost';

export const BACKEND_BASE_URL = __DEV__
	? 'http://localhost:8080/api'
	: 'https://trojanscit.com/api';

export const REACT_BASE_URL = __DEV__
	? 'http://localhost:3000'
	: 'https://trojanscit.com';

export const RAZORPAY_KEY = !__DEV__
	? 'rzp_test_o2U8BQRS1aZ9Ww'
	: 'rzp_live_ntnN5NKmqdPeFG';
