import { displayRazorpay } from './RazorPay.utils';
import { verifyPost } from '../../axios/verifyEmail.axios';

export const handleTextValidation = (
	value,
	setIsButtonEnabled,
	setformInputValid,
	formInputValid
) => {
	if (value.current.value.length < 3) {
		value.current.classList.add('error');
		value.current.classList.remove('success');
		setformInputValid({ ...formInputValid, [value.current.name]: false });
		setIsButtonEnabled(false);
	} else {
		value.current.classList.remove('error');
		value.current.classList.add('success');
		setformInputValid({ ...formInputValid, [value.current.name]: true });
		setIsButtonEnabled(true);
	}
};

export const handleEmailValidation = (
	email,
	setIsButtonEnabled,
	setformInputValid,
	formInputValid
) => {
	if (/[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/.test(email.current.value))
		email.current.value = email.current.value.slice(0, -1);
	if (
		!(
			email.current.value.includes('@') &&
			(email.current.value.includes('.com') ||
				email.current.value.includes('.net'))
		)
	) {
		email.current.classList.add('error');
		email.current.classList.remove('success');
		setformInputValid({ ...formInputValid, email: false });
		setIsButtonEnabled(false);
	} else {
		email.current.classList.remove('error');
		email.current.classList.add('success');
		setformInputValid({ ...formInputValid, email: true });
		setIsButtonEnabled(true);
	}
};

export const handlePhoneValidation = (
	phone,
	setIsButtonEnabled,
	setformInputValid,
	formInputValid
) => {
	if (/[a-zA-Z]/.test(phone.current.value))
		phone.current.value = phone.current.value.replace(/[a-zA-Z]/g, '');
	if (phone.current.value.length < 10) {
		phone.current.classList.add('error');
		phone.current.classList.remove('success');
		setformInputValid({ ...formInputValid, phone: false });
		setIsButtonEnabled(false);
	} else if (phone.current.value.length > 10) {
		phone.current.value = phone.current.value.slice(0, 10);
	} else {
		phone.current.classList.remove('error');
		phone.current.classList.add('success');
		setformInputValid({ ...formInputValid, phone: true });
		setIsButtonEnabled(true);
	}
};

export const handleDropdownValidation = (
	value,
	setIsButtonEnabled,
	setformInputValid,
	formInputValid
) => {
	if (value.current.value.includes('Select')) {
		value.current.classList.add('error');
		value.current.classList.remove('success');
		setformInputValid({ ...formInputValid, [value.current.name]: false });
		setIsButtonEnabled(false);
	} else {
		value.current.classList.remove('error');
		value.current.classList.add('success');
		setformInputValid({ ...formInputValid, [value.current.name]: true });
		setIsButtonEnabled(true);
	}
};

export const handleSubmit = async (
	e,
	name,
	email,
	phone,
	department,
	year,
	college,
	event,
	setIsButtonEnabled
) => {
	e.preventDefault();
	let amount =
		event.current.value === 'Technical'
			? 1
			: event.current.value === 'Non-Technical'
			? 100
			: event.current.value === 'Tojans CTF'
			? 200
			: event.current.value === 'Gaming'
			? 200
			: 100;
	name.current.setAttribute('disabled', true);
	email.current.setAttribute('disabled', true);
	phone.current.setAttribute('disabled', true);
	department.current.setAttribute('disabled', true);
	year.current.setAttribute('disabled', true);
	college.current.setAttribute('disabled', true);
	event.current.setAttribute('disabled', true);
	setIsButtonEnabled(false);

	displayRazorpay(
		name,
		email,
		phone,
		department,
		year,
		college,
		event,
		amount,
		setIsButtonEnabled
	);
};
