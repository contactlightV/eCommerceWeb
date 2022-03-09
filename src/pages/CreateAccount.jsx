import React from "react";
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
    return(
        <div className="CreateAccount">
            <div className="form-container">
                <form action="/" className="form">
                <h1 className="title">My account</h1>
                <div>
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" id="name" placeholder="Your Name" className="input input-name" />
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="email" id="email" placeholder="yard_sale@example.com" className="input input-email" />
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="********" className="input input-password" />
                </div>
                <input type="submit" defaultValue="Create account" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;