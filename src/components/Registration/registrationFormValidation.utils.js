// import { displayRazorpay } from './RazorPay.utils';
// import { verifyPost } from '../../axios/verifyEmail.axios';

import { registrationEventAxios } from '../../axios/registration.axios';
import { toast } from 'react-toastify';

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
	if (/[ `!#$%^&*()_+\-=[\]{};':"\\|,<>/?~]/.test(email.current.value))
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
	formInputValid,
	setIsWorkshopDropdownVisible,
	setIsGamingDropdownVisible,
	setIsPaperBytesVisible
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
		if (value.current.value === 'Workshops') {
			setIsWorkshopDropdownVisible(true);
			setIsGamingDropdownVisible(false);
			setIsPaperBytesVisible(false);
		} else if (value.current.value === 'Gaming') {
			setIsWorkshopDropdownVisible(false);
			setIsGamingDropdownVisible(true);
			setIsPaperBytesVisible(false);
		} else if (value.current.value === 'Paper Bytes') {
			setIsWorkshopDropdownVisible(false);
			setIsGamingDropdownVisible(false);
			setIsPaperBytesVisible(true);
		} else {
			setIsGamingDropdownVisible(false);
			setIsWorkshopDropdownVisible(false);
		}
		setIsButtonEnabled(true);
	}
};

export const handleSubDropdownValidation = (
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
	workshops,
	gaming,
	uploadPaper,
	uploadAbstract,
	uploadPresentation,
	setIsButtonEnabled,
	setIsWorkshopDropdownVisible,
	setIsGamingDropdownVisible,
	setIsPaperBytesVisible,
	setIsEmailVerified,
	setformInputValid,
	formInputValid
) => {
	e.preventDefault();
	setIsButtonEnabled(false);
	// let amount =
	// 	event.current.value === 'Technical and Non-Technical'
	// 		? 100
	// 		: event.current.value === 'Tojans CTF'
	// 		? 200
	// 		: event.current.value === 'Gaming'
	// 		? 200
	// 		: 100;
	// displayRazorpay(name, email, phone, department, year, college, event, amount);
	await registrationEventAxios(
		name.current.value,
		email.current.value,
		phone.current.value,
		department.current.value,
		year.current.value,
		college.current.value,
		event.current.value,
		workshops.current ? workshops.current.value : null,
		gaming.current ? gaming.current.value : null,
		uploadPaper,
		uploadAbstract,
		uploadPresentation
	).then((res) => {
		if (res.status === 200) {
			email.current.removeAttribute('disabled');
			name.current.value = '';
			email.current.value = '';
			phone.current.value = '';
			department.current.value = 'Select Department';
			year.current.value = 'Select Year';
			college.current.value = 'Select College';
			event.current.value = 'Select Event';
			event.current.removeAttribute('disabled');
			Object.keys(formInputValid).forEach((key) => {
				setformInputValid({ ...formInputValid, [key]: false });
			});

			setIsWorkshopDropdownVisible(false);
			setIsGamingDropdownVisible(false);
			setIsPaperBytesVisible(false);
			setIsEmailVerified(false);
			// workshops.current.value = 'Select Workshop';
			// gaming.current.value = 'Select Game';
			setIsButtonEnabled(false);
			toast.success('Hooray! You are registered successfully.');
			window.location.reload();
		} else {
			setIsButtonEnabled(true);
			toast.error('Oops! Registration failed. Please try again in a moment.');
		}
	});
};
