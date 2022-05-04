import React, { useRef, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import OTPInput, { ResendOTP } from 'otp-input-react';

import {
	handleTextValidation,
	handleEmailValidation,
	handlePhoneValidation,
	handleDropdownValidation,
	handleSubmit
} from './registrationFormValidation.utils';

import { verifyPost } from '../../axios/verifyEmail.axios';

import {
	InputContainerStyle,
	FormContainerStyle
} from './registrationForm.style';
import { OTPPopup } from '../../pages/Registration/Registration.style';

const OTPComponent = ({
	email,
	generateOTP,
	fetchedOTP,
	setIsOTPRequested,
	setIsEmailVerified
}) => {
	const [OTP, setOTP] = useState('');

	return (
		<OTPPopup>
			<div className='otp-popup'>
				<h1>Enter OTP</h1>
				<p>OTP is sent to your email.</p>
				<div className=''>
					<OTPInput
						value={OTP}
						onChange={setOTP}
						autoFocus
						OTPLength={6}
						otpType='number'
						disabled={false}
					/>
					<ResendOTP onResendClick={() => generateOTP(email)} />
				</div>
				<button
					onClick={() => {
						if (OTP.length && parseInt(OTP) === fetchedOTP) {
							toast.success('OTP verified successfully');
							setIsOTPRequested(false);
							setIsEmailVerified(true);
						} else {
							toast.error('Please enter valid OTP');
						}
					}}
					type='button'
				>
					Submit
				</button>
			</div>
		</OTPPopup>
	);
};

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

	const [isEmailVerified, setIsEmailVerified] = useState(false);
	const [isButtonEnabled, setIsButtonEnabled] = useState(false);
	const [isOTPRequested, setIsOTPRequested] = useState(false);
	const [fetchedOTP, setFetchedOTP] = useState('');

	useEffect(() => {
		const isFormValid = Object.values(formInputValid).every(
			(value) => value === true
		);
		setIsButtonEnabled(isFormValid);
	}, [formInputValid]);

	const generateOTP = async (email) => {
		await verifyPost(email.current.value).then((res) => {
			if (res.data === 'error') {
				toast.error('Error in sending OTP, Try again.');
			} else {
				setFetchedOTP(res.data.otp);
			}
		});
	};

	return (
		<FormContainerStyle
			onSubmit={(e) =>
				handleSubmit(e, name, email, phone, department, year, college, event)
			}
		>
			{isOTPRequested && (
				<OTPComponent
					email={email}
					setIsOTPRequested={setIsOTPRequested}
					fetchedOTP={fetchedOTP}
					setFetchedOTP={setFetchedOTP}
					generateOTP={generateOTP}
					setIsEmailVerified={setIsEmailVerified}
				/>
			)}

			<div className='email'>
				<InputContainerStyle>
					<label>Email</label>
					<input
						name='email'
						type='email'
						disabled={isEmailVerified}
						autoFocus
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
				<button
					type='button'
					disabled={
						!formInputValid.email ? true : isEmailVerified ? true : false
					}
					onClick={() => {
						setIsOTPRequested(true);
						generateOTP(email);
					}}
				>
					{!isEmailVerified ? 'Verify' : 'Verified'}
				</button>
			</div>
			<InputContainerStyle>
				<label>Name</label>
				<input
					disabled={!isEmailVerified || !formInputValid.email}
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
				/>
			</InputContainerStyle>
			<InputContainerStyle>
				<label>What's app number</label>
				<input
					disabled={!isEmailVerified || !formInputValid.email}
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
						disabled={!isEmailVerified || !formInputValid.email}
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
						disabled={!isEmailVerified || !formInputValid.email}
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
					disabled={!isEmailVerified || !formInputValid.email}
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
					disabled={!isEmailVerified || !formInputValid.email}
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
