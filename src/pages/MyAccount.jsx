import React from "react";
import '../styles/MyAccount.scss';

const MyAccount = () => {
    return(
        <div className="MyAccount">
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
                    <button className="secondary-button">Edit</button>
                </form>
            </div>
        </div>

    );
}

export default MyAccount;