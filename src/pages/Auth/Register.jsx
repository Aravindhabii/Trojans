import React, {useState, useEffect, useRef} from "react";
import {db, auth} from "../../firebase-config";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import {collection, getDocs, addDoc} from "firebase/firestore";

import {MainContainer, SingleContainer} from "./Register.styles";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState(0);
    const [nameOfTheCollege, setNameOfTheCollege] = useState("");
    const [department, setDepartment] = useState("");

    const collectionRef = collection(db, "users");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(collectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(collectionRef, {
                name,
                email,
                password,
                phone: Number(phone),
                nameOfTheCollege,
                department,
            });
            await sendEmailVerification(auth.currentUser, {
                url: "http://localhost:3000",
            })
                .then(() => {
                    alert("Verification email sent");
                })
                .catch((error) => {
                    alert("Verification email not sent");
                    alert(error.message);
                });
        } catch (error) {
            alert(error.message);
        }
    };



    const [formInputValid, setformInputValid] = useState({
        name: false,
        email: false,
        phone: false,
        department: false,
        year: false,
        college: false,
        event: false,
    });
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        const isFormValid = Object.values(formInputValid).every(
            (value) => value === true
        );
        setIsButtonEnabled(isFormValid);
    }, [formInputValid]);

    return (
        <>
            <MainContainer>
                <SingleContainer>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </SingleContainer>
                <SingleContainer>
                    <label htmlFor="firstName">Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={(e) => setName(e.target.value)}
                    />
                </SingleContainer>
                <SingleContainer>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </SingleContainer>
                <SingleContainer>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </SingleContainer>
                <SingleContainer>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </SingleContainer>
                <SingleContainer>
                    <label htmlFor="nameOfTheCollege">
                        Name Of The College
                    </label>
                    <input
                        type="text"
                        id="nameOfTheCollege"
                        name="nameOfTheCollege"
                        onChange={(e) => setNameOfTheCollege(e.target.value)}
                    />
                </SingleContainer>
                <SingleContainer>
                    <label htmlFor="department">Department</label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                </SingleContainer>
                <SingleContainer>
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        id="year"
                        name="year"
                        onChange={(e) => setYear(e.target.value)}
                    />
                </SingleContainer>
                <SingleContainer>
                    <button onClick={handleSubmit}>Submit</button>
                </SingleContainer>
            </MainContainer>
        </>
    );
}

export default Register;
