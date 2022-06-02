import React from 'react';

const SignUp = ({
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    password,
    LastName,
    FirstName,
    Email,
    error,
    handleSignUp,
}) => {
    return (
        <div >
            <form onSubmit={handleSignUp} className="container">
                <div>
                    <i class="fa fa-lock" aria-hidden="true"></i>
                </div>
                <h1>signUp</h1>
                {error !== '' ? <div className="error">{error}</div> : ''}
                <div className="text">
                    <input
                        type="FirstName"
                        placeholder="FirstName"
                        name="FirstName"
                        className="input-field"
                        required
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="text">
                    <input
                        type="lastName"
                        placeholder="lastName"
                        name="lastName"
                        className="input-field"
                        required
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="text">
                    <input
                        type="email"
                        placeholder="email"
                        name="Email"
                        className="input-field"
                        required
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="text">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="input-field"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <p>
                        I want to receive inspiration,marketing promotions and
                        updates via email.
                    </p>
                </div>
                <input className="btn" type="submit" value="SIGN UP" />
            </form>
        </div>
    );
};

export default SignUp;
