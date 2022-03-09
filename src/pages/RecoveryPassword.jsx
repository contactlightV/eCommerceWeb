import React from "react";
import '../styles/RecoveryPassword.scss';
import logo from '@logos/logo_yard_sale.svg';
import email_image from '@icons/email.svg';

const RecoveryPassword = () => {
    return(
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset your password</p>
                <div className="email-image">
                    <img src={email_image} alt="email-image" />
                </div>
                <button className="primary-button">Login</button>
                <p className="resend">
                <span>Didn't receive the email?</span>
                <a href="/">Resend</a>
                </p>
            </div>
        </div>

    );
}

export default RecoveryPassword;