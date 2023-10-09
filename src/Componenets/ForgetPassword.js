import React, { useState } from 'react';
import './css/Auth.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FrogetPassword = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`http://localhost:5000/api/auth/forgetpassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const json = await response.json();
            console.log(json);

            if (json.success) {
                navigate('/')
                props.showAlert('We have sent the reset password link, check your mail!!', 'success');
            }
        } catch (e) {
            console.log(e);
            props.showAlert('Check your internet connectivity!!', 'danger');
        }
    };

    const onChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <>
            <div className='container d-flex flex-column align-item-center auth-container login-container'>
                <form className="container" onSubmit={onSubmit}>
                    <h2 className="text-center mb-4">Forget Password</h2>
                    <div className="mb-3">
                        <div className="inputBox d-flex align-item-center">
                            <FontAwesomeIcon icon={faEnvelope} className='eyeIconClass' />
                            <input
                                type="email"
                                name="email"
                                value={email}
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter your email id"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success px-3 auth-btn">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default FrogetPassword;
