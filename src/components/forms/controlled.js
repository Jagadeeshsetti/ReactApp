import React, { useState } from 'react';
import './styles.css';

function ControlledComponents() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("Male");
    const [loginSuccess, setLoginSuccess] = useState(false);

    const [formErrors, setFormErrors] = useState({
        usernameError: null,
        passwordError: null,
    });

    const userNameHandler = (event) => {
        const userEnteredUsername = event.target.value;
        setUsername(userEnteredUsername);

        // Validation for username
        const usernameRegex = /^[a-z]{3,}$/;
        const testCasePassed = usernameRegex.test(userEnteredUsername);

        if (testCasePassed) {
            setFormErrors({ ...formErrors, usernameError: null });
        } else {
            setFormErrors({ ...formErrors, usernameError: "Invalid username. Only lowercase letters are allowed." });
        }
    };

    const passwordHandler = (event) => {
        const userEnteredPassword = event.target.value;
        setPassword(userEnteredPassword);

        const testCasePassed = userEnteredPassword.length <= 10;
        if (testCasePassed) {
            setFormErrors({ ...formErrors, passwordError: null });
        } else {
            setFormErrors({ ...formErrors, passwordError: "Invalid password. Maximum 10 characters allowed." });
        }
    };

    const genderHandler = (event) => {
        const userEnteredGender = event.target.value;
        setGender(userEnteredGender);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        clientPostServer();
    };

    const clientPostServer = () => {
        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 30,
            }),
        })
            .then(res => res.json())
            .then((response) => {
                if (response.message) {
                    setLoginSuccess(false);
                } else {
                    setLoginSuccess(true);
                }
            });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-content">
                <div className="mb-3 mt-3">
                    <label htmlFor="username" className="form-label">
                        Username:
                    </label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.usernameError ? 'is-invalid' : ''}`}
                        id="username"
                        placeholder="Enter username"
                        name="username"
                        value={username}
                        onChange={userNameHandler}
                    />
                    {formErrors.usernameError && <span className="error-message">{formErrors.usernameError}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        className={`form-control ${formErrors.passwordError ? 'is-invalid' : ''}`}
                        id="pwd"
                        placeholder="Enter password"
                        name="pswd"
                        value={password}
                        onChange={passwordHandler}
                    />
                    {formErrors.passwordError && <span className="error-message">{formErrors.passwordError}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                        Gender:
                    </label>
                    <select value={gender} onChange={genderHandler} className="form-control">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                {!formErrors.usernameError && !formErrors.passwordError && (
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                )}
                {loginSuccess && <div className="success-message">Welcome, user!</div>}
            </form>
        </div>
    );
}

export default ControlledComponents;

