import React, { useRef, useState, useEffect } from 'react';

import {
	handleTextValidation,
	handleEmailValidation,
	handlePhoneValidation,
	handleDropdownValidation,
	handleSubmit,
	handleFocus,
	handleBlur
} from './registrationFormValidation.utils';
import {
	InputContainerStyle,
	FormContainerStyle
} from './registrationForm.style';

const RegistrationForm = () => {
	const name = useRef('');
	const email = useRef('');
	const phone = useRef('');
	const department = useRef('');
	const year = useRef('');
	const college = useRef('');
	const event = useRef('');

	const [formInputValid, setformInputValid] = useState({
		name: false,
		email: false,
		phone: false,
		department: false,
		year: false,
		college: false,
		event: false
	});
	const [isButtonEnabled, setIsButtonEnabled] = useState(false);

	useEffect(() => {
		const isFormValid = Object.values(formInputValid).every(
			(value) => value === true
		);
		setIsButtonEnabled(isFormValid);
	}, [formInputValid]);

	return (
		<FormContainerStyle
			onSubmit={(e) =>
				handleSubmit(e, name, email, phone, department, year, college, event)
			}
		>
			<InputContainerStyle>
				<label>Name</label>
				<input
					name='name'
					type='text'
					className='focused'
					onChange={() =>
						handleTextValidation(
							name,
							setIsButtonEnabled,
							setformInputValid,
							formInputValid
						)
					}
					ref={name}
					autoFocus
				/>
			</InputContainerStyle>
			<InputContainerStyle>
				<label>Email</label>
				<input
					name='email'
					type='email'
					onChange={() =>
						handleEmailValidation(
							email,
							setIsButtonEnabled,
							setformInputValid,
							formInputValid
						)
					}
					ref={email}
				/>
			</InputContainerStyle>
			<InputContainerStyle>
				<label>Phone</label>
				<input
					name='phone'
					type='text'
					onChange={() =>
						handlePhoneValidation(
							phone,
							setIsButtonEnabled,
							setformInputValid,
							formInputValid
						)
					}
					ref={phone}
				/>
			</InputContainerStyle>
			<div className='dropdown-container'>
				<InputContainerStyle>
					<label>Department</label>
					<select
						name='department'
						defaultValue='Select Department'
						ref={department}
						onChange={() =>
							handleDropdownValidation(
								department,
								setIsButtonEnabled,
								setformInputValid,
								formInputValid
							)
						}
					>
						<option value='Select Department' disabled>
							Select Department
						</option>
						<option value='IT'>IT</option>
						<option value='CSE'>CSE</option>
						<option value='ECE'>ECE</option>
						<option value='EEE'>EEE</option>
						<option value='MECH'>MECH</option>
						<option value='CIVIL'>CIVIL</option>
						<option value='MBBS'>MBBS</option>
					</select>
				</InputContainerStyle>
				<InputContainerStyle>
					<label>Year</label>
					<select
						name='year'
						defaultValue='Select Year'
						ref={year}
						onChange={() =>
							handleDropdownValidation(
								year,
								setIsButtonEnabled,
								setformInputValid,
								formInputValid
							)
						}
					>
						<option value='Select Year' disabled>
							Select Year
						</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
					</select>
				</InputContainerStyle>
			</div>
			<InputContainerStyle>
				<label>College</label>
				<input
					name='college'
					type='text'
					onChange={() =>
						handleTextValidation(
							college,
							setIsButtonEnabled,
							setformInputValid,
							formInputValid
						)
					}
					ref={college}
				/>
			</InputContainerStyle>
			<InputContainerStyle>
				<label>Event</label>
				<select
					name='event'
					defaultValue='Select Event'
					ref={event}
					onChange={() =>
						handleDropdownValidation(
							event,
							setIsButtonEnabled,
							setformInputValid,
							formInputValid
						)
					}
				>
					<option value='Select Event' disabled>
						Select Event
					</option>
					<option value='Technical'>Technical</option>
					<option value='Trojans CTF'>Trojans CTF</option>
					<option value='Non-Technical'>Non-Technical</option>
					<option value='Gaming'>Gaming</option>
					<option value='Workshops'>Workshops</option>
				</select>
			</InputContainerStyle>
			<button disabled={!isButtonEnabled}>Submit</button>
		</FormContainerStyle>
	);
};

export default RegistrationForm;
