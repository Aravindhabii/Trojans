import React, { useRef, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import OTPInput from 'otp-input-react';

import {
	handleTextValidation,
	handleEmailValidation,
	handlePhoneValidation,
	handleDropdownValidation,
	handleSubDropdownValidation,
	handleSubmit
} from './registrationFormValidation.utils';

// import { verifyPost } from '../../axios/verifyEmail.axios';

import {
	InputContainerStyle,
	FormContainerStyle,
	NoticeDivStyle
} from './registrationForm.style';
// import {OTPPopup} from "../../pages/Registration/Registration.style";

// const OTPComponent = ({fetchedOTP, setIsOTPRequested, setIsEmailVerified}) => {
//     const [OTP, setOTP] = useState("");

//     return (
//         <OTPPopup>
//             <div className="otp-popup">
//                 <h1>Enter OTP</h1>
//                 <p>OTP is sent to your email.</p>
//                 <p style={{width: "75%", textAlign: "center"}}>
//                     Do check your spam folder once if u haven't recieved the
//                     OTP.
//                 </p>
//                 <div className="">
//                     <OTPInput
//                         value={OTP}
//                         onChange={setOTP}
//                         autoFocus
//                         OTPLength={6}
//                         otpType="number"
//                     />
//                 </div>
//                 <button
//                     onClick={() => {
//                         if (OTP.length && parseInt(OTP) === fetchedOTP) {
//                             toast.success("OTP verified successfully");
//                             setIsOTPRequested(false);
//                             setIsEmailVerified(true);
//                         } else {
//                             toast.error("Please enter valid OTP");
//                         }
//                     }}
//                     type="button"
//                 >
//                     Submit
//                 </button>
//             </div>
//         </OTPPopup>
//     );
// };

const RegistrationForm = () => {
	const name = useRef('');
	const email = useRef('');
	const phone = useRef('');
	const department = useRef('');
	const year = useRef('');
	const college = useRef('');
	const event = useRef('');
	const workshops = useRef('');
	const gaming = useRef('');
	const paper = useRef('');
	const abstract = useRef('');
	const presentation = useRef('');

	const [uploadPaper, setUploadPaper] = useState(null);
	const [uploadAbstract, setUploadAbstract] = useState(null);
	const [uploadPresentation, setUploadPresentation] = useState(null);

	const [formInputValid, setformInputValid] = useState({
		name: false,
		email: false,
		phone: false,
		department: false,
		year: false,
		college: false,
		event: false,
		workshops: event.current.value === 'workshops' ? false : true,
		gaming: event.current.value === 'gaming' ? false : true,
		abstract: event.current.value === 'Paper Bytes' ? false : true,
		presentation: event.current.value === 'Paper Bytes' ? false : true
	});

	// const [isEmailVerified, setIsEmailVerified] = useState(false);
	const [isButtonEnabled, setIsButtonEnabled] = useState(false);
	// const [isOTPRequested, setIsOTPRequested] = useState(false);
	// const [fetchedOTP, setFetchedOTP] = useState("");
	const [isWorkshopDropdownVisible, setIsWorkshopDropdownVisible] =
		useState(false);
	const [isGamingDropdownVisible, setIsGamingDropdownVisible] = useState(false);
	const [isPaperBytesVisible, setIsPaperBytesVisible] = useState(false);

	useEffect(() => {
		const isFormValid = Object.values(formInputValid).every(
			(value) => value === true
		);
		setIsButtonEnabled(isFormValid);
	}, [formInputValid]);

	// const generateOTP = async (email) => {
	// 	try {
	// 		await verifyPost(email.current.value).then((res) => {
	// 			if (res.data === 'error') {
	// 				toast.error('Error in sending OTP, Try again.');
	// 				setIsOTPRequested(false);
	// 			} else {
	// 				setFetchedOTP(res.data.otp);
	// 			}
	// 		});
	// 	} catch (err) {
	// 		console.log(err);
	// 		toast.error('Error in sending OTP, Try again.');
	// 		setIsOTPRequested(false);
	// 	}
	// };

	return (
		<FormContainerStyle
			onSubmit={(e) =>
				handleSubmit(
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
					// setIsEmailVerified,
					setformInputValid,
					formInputValid
				)
			}
		>
			<h1 style={{ color: 'white' }}>Registration</h1>
			<NoticeDivStyle>
				<p>
					Note: Participants can also register for any event through offline
					mode on the day of the event
				</p>
			</NoticeDivStyle>
			{/* <p
                style={{
                    color: "#c264e7",
                    margin: "2% 0",
                    fontSize: "1.4rem",
                    textShadow:
                        "0 0 4px #bc13fe, 0 0 11px #bc13fe, 0 0 19px #bc13fe",
                }}
            >
                Offline Registration Available
            </p> */}
			{/* {isOTPRequested && (
                <OTPComponent
                    email={email}
                    setIsOTPRequested={setIsOTPRequested}
                    fetchedOTP={fetchedOTP}
                    setFetchedOTP={setFetchedOTP}
                    generateOTP={generateOTP}
                    setIsEmailVerified={setIsEmailVerified}
                />
            )} */}

			{/* <div className="email"> */}
			<InputContainerStyle>
				<label>Email</label>
				<input
					name='email'
					type='email'
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
			{/* <button
                    type="button"
                        !formInputValid.email
                            ? true
                            : isEmailVerified
                            ? true
                            : false
                    }
                    onClick={() => {
                        setIsOTPRequested(true);
                        generateOTP(email);
                    }}
                >
                    {!isEmailVerified ? "Verify" : "Verified"}
                </button> */}
			{/* </div> */}
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
				/>
			</InputContainerStyle>
			<InputContainerStyle>
				<label>What's app number</label>
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
						required
						name='department'
						defaultValue='Select Department'
						ref={department}
						onChange={() =>
							handleDropdownValidation(
								department,
								setIsButtonEnabled,
								setformInputValid,
								formInputValid,
								setIsWorkshopDropdownVisible,
								setIsGamingDropdownVisible
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
						<option value='Other'>Other</option>
					</select>
				</InputContainerStyle>
				<InputContainerStyle>
					<label>Year</label>
					<select
						required
						name='year'
						defaultValue='Select Year'
						ref={year}
						onChange={() =>
							handleDropdownValidation(
								year,
								setIsButtonEnabled,
								setformInputValid,
								formInputValid,
								setIsWorkshopDropdownVisible,
								setIsGamingDropdownVisible
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
					required
					name='event'
					defaultValue='Select Event'
					ref={event}
					onChange={() => {
						handleDropdownValidation(
							event,
							setIsButtonEnabled,
							setformInputValid,
							formInputValid,
							setIsWorkshopDropdownVisible,
							setIsGamingDropdownVisible,
							setIsPaperBytesVisible
						);
					}}
				>
					<option value='Select Event' disabled>
						Select Event
					</option>
					<option value='Technical'>Technical</option>
					<option value='Non-Technical'>Non-Technical</option>
					<option value='Trojans CTF'>Trojans CTF</option>
					<option value='Gaming'>Gaming</option>
					<option value='Workshops'>Workshops</option>
					<option value='Paper Bytes'>Paper Bytes</option>
				</select>
			</InputContainerStyle>
			{isWorkshopDropdownVisible && (
				<InputContainerStyle>
					<label>Select Workshop</label>
					<select
						required
						name='workshop'
						defaultValue='Select Workshop'
						ref={workshops}
						onChange={() =>
							handleSubDropdownValidation(
								workshops,
								setIsButtonEnabled,
								setformInputValid,
								formInputValid
							)
						}
					>
						<option value='Select Workshop' disabled>
							Select Workshop
						</option>
						<option value='Machine Learning'>Machine Learning</option>
						<option value='Blockchain Technology'>Blockchain Technology</option>
						<option value='entrepreneurship'>entrepreneurship</option>
					</select>
				</InputContainerStyle>
			)}
			{isGamingDropdownVisible && (
				<InputContainerStyle>
					<label>Select Game</label>
					<select
						required
						name='gaming'
						defaultValue='Select Gaming'
						ref={gaming}
						onChange={() =>
							handleSubDropdownValidation(
								gaming,
								setIsButtonEnabled,
								setformInputValid,
								formInputValid
							)
						}
					>
						<option value='Select Gaming' disabled>
							Select Gaming
						</option>
						<option value='Valorant'>Valorant</option>
						<option value='BGMI'>BGMI</option>
						<option value='Free Fire'>Free Fire</option>
					</select>
				</InputContainerStyle>
			)}
			{isPaperBytesVisible && (
				<>
					<InputContainerStyle>
						<label>Paper (not required)</label>
						<input
							type='file'
							name='uploadPaper'
							ref={paper}
							onChange={(e) => setUploadPaper(e.target.files[0])}
							accept='application/pdf'
						/>
					</InputContainerStyle>
					<InputContainerStyle>
						<label>Abstract (PDF)</label>
						<input
							type='file'
							name='uploadAbstract'
							ref={abstract}
							onChange={(e) => setUploadAbstract(e.target.files[0])}
							accept='application/pdf'
						/>
					</InputContainerStyle>
					<InputContainerStyle>
						<label>Presentation (PPT)</label>
						<input
							type='file'
							name='uploadPresentation'
							ref={presentation}
							onChange={(e) => setUploadPresentation(e.target.files[0])}
							accept='application/vnd.ms-powerpoint'
						/>
					</InputContainerStyle>
				</>
			)}

			<button disabled={!isButtonEnabled}>Submit</button>
		</FormContainerStyle>
	);
};

export default RegistrationForm;
