import React, { useRef, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { ContactContainer } from '../Contact.styles';

import {
	handleTextValidation,
	handleEmailValidation
} from '../../../Registration/registrationFormValidation.utils';
import { contactPost } from '../../../../axios/contact.axios';

const ContactForm = () => {
	const name = useRef('');
	const email = useRef('');
	const message = useRef('');

	const [formInputValid, setformInputValid] = useState({
		name: false,
		email: false,
		message: false
	});
	const [isButtonEnabled, setIsButtonEnabled] = useState(false);

	useEffect(() => {
		const isFormValid = Object.values(formInputValid).every(
			(value) => value === true
		);
		setIsButtonEnabled(isFormValid);
	}, [formInputValid]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await contactPost(
			name.current.value,
			email.current.value,
			message.current.value
		).then((res) => {
			if (res.data === 'success') {
				toast.success('Message sent successfully!');
				name.current.value = '';
				email.current.value = '';
				message.current.value = '';
				name.current.focus();
			} else {
				toast.error('Message not sent!');
			}
		});
	};
	return (
		<ContactContainer>
			<h1 style={{ textAlign: 'center' }}>Feedback</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						ref={name}
						id='name'
						onChange={() =>
							handleTextValidation(
								name,
								setIsButtonEnabled,
								setformInputValid,
								formInputValid
							)
						}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						onChange={() =>
							handleEmailValidation(
								email,
								setIsButtonEnabled,
								setformInputValid,
								formInputValid
							)
						}
						ref={email}
						id='email'
					/>
				</div>
				<div>
					<label htmlFor='name'>Message</label>
					<textarea
						name='message'
						ref={message}
						id='message'
						onChange={() => {
							handleTextValidation(
								message,
								setIsButtonEnabled,
								setformInputValid,
								formInputValid
							);
						}}
					></textarea>
				</div>
				<div>
					<button disabled={!isButtonEnabled} type='submit'>
						Submit
					</button>
				</div>
			</form>
		</ContactContainer>
	);
};

export default ContactForm;
