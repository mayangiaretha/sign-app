import React, { useState } from 'react';
import SignUp from './signUp';
import './signUp.css';

export const Logic = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [signedIn, setSignedIn] = useState(false);

    const signOut = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setSignedIn(false);
    };
    const handleSignUp = (e) => {
        e.preventDefault();
        setSignedIn(true);
    };

    return (
        <div>
            {firstName !== '' && signedIn ? (
                <div className="welcome">
                    <h2>
                        Hallo,  {firstName}
                        <button onClick={signOut} className="btn">Log Out</button>
                    </h2>
                </div>
            ) : (
                <SignUp
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setError={setError}
                    LastName={lastName}
                    FirstName={firstName}
                    Email={Email}
                    Error={error}
                    password={password}
                    handleSignUp={handleSignUp}
                />
            )}
        </div>
    );
};

export default Logic;
