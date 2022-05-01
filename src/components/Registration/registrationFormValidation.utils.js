import { registrationEventAxios } from '../../axios/registration.axios';

export const handleTextValidation = (
	value,
	setIsButtonEnabled,
	setformInputValid,
	formInputValid
) => {
	if (value.current.value.length < 3) {
		value.current.classList.add('error');
		setformInputValid({ ...formInputValid, [value.current.name]: false });
		setIsButtonEnabled(false);
	} else {
		value.current.classList.remove('error');
		setformInputValid({ ...formInputValid, [value.current.name]: true });
		setIsButtonEnabled(true);
	}
};

export const handleEmailValidation = (
	e,
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
		setformInputValid({ ...formInputValid, email: false });
		setIsButtonEnabled(false);
	} else {
		email.current.classList.remove('error');
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
		setformInputValid({ ...formInputValid, phone: false });
		setIsButtonEnabled(false);
	} else if (phone.current.value.length > 10) {
		phone.current.value = phone.current.value.slice(0, 10);
	} else {
		phone.current.classList.remove('error');
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
		setformInputValid({ ...formInputValid, [value.current.name]: false });
		setIsButtonEnabled(false);
	} else {
		value.current.classList.remove('error');
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
	event
) => {
	e.preventDefault();
	await registrationEventAxios(
		name.current.value,
		email.current.value,
		phone.current.value,
		department.current.value,
		year.current.value,
		college.current.value,
		event.current.value
	).then((res) => {
		if (res.status === 200) {
			alert('Registration Successful');
		}
	});
};
