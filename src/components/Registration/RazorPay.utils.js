import { registrationEventAxios } from '../../axios/registration.axios';
import { toast } from 'react-toastify';

import {
	BACKEND_BASE_URL,
	RAZORPAY_LIVE_API_KEY
} from '../../environment.utils';

const loadScript = (src) => {
	return new Promise((resolve) => {
		const script = document.createElement('script');
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
};

export const displayRazorpay = async (
	name,
	email,
	phone,
	department,
	year,
	college,
	event,
	amount
) => {
	const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

	if (!res) {
		// alert("Razorpay SDK failed to load. Are you online?");
		toast.error('Some error occurred. Please try again later.');
		return;
	}

	const data = await fetch(`${BACKEND_BASE_URL}/razorpay`, {
		method: 'POST',
		body: JSON.stringify({
			amount
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((t) => t.json());

	const options = {
		key: RAZORPAY_LIVE_API_KEY,
		currency: data.currency,
		amount: data.amount.toString(),
		order_id: data.id,
		name: 'Trojans event registration payment gateway',
		description: `Registration for ${event.current.value} event`,
		phone: phone.current.value,

		// image: "http://localhost:8080/logo",
		handler: async function (response) {
			// alert(response.razorpay_signaturare);
			await registrationEventAxios(
				name.current.value,
				email.current.value,
				phone.current.value,
				department.current.value,
				year.current.value,
				college.current.value,
				event.current.value,
				response.razorpay_payment_id,
				response.razorpay_order_id
			).then((res) => {
				if (res.status === 200) {
					name.current.value = '';
					email.current.value = '';
					phone.current.value = '';
					department.current.value = 'Select Department';
					year.current.value = 'Select Year';
					college.current.value = 'Select College';
					event.current.value = 'Select Event';

					toast.success('Hooray! You are registered successfully.');
				} else {
					toast.error(
						'Oops! Registration failed. Please try again in a moment.'
					);
				}
			});
		},
		prefill: {
			name: name.current.value,
			email: email.current.value,
			phone: phone.current.value
		}
	};
	const paymentObject = new window.Razorpay(options);
	paymentObject.open();
};
