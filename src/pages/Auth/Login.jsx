import React, {useState, useEffect} from "react";

function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    return (
        <>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={(e) => setLoginEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </>
    );
}

export default Login;
