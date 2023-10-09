import React, { useState } from 'react';
import './css/Auth.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';

const ResetPassword = (props) => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {id, token} = useParams()

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else if (field === 'cpassword') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    }

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`http://localhost:5000/api/auth/resetpassword/${id}/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: password }),
            });
            const json = await response.json();
            console.log(json);

            if (json.success) {
                navigate('/')
                props.showAlert('Password is Changed successfully!!', 'success');
            }
        } catch (e) {
            console.log(e);
            props.showAlert('Sorry, Some error occurred!!', 'danger');
        }
    };

    const onChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <div className='container d-flex flex-column align-item-center auth-container login-container'>
                <form className="container" onSubmit={onSubmit}>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    <div className="mb-3">
                        <div className='inputBox d-flex align-item-center'>
                            <FontAwesomeIcon icon={faLock} className='eyeIconClass' />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder='Enter Password'
                                onChange={onChange}
                                required
                                minLength={5}
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className='eyeIconClass'
                                onClick={() => togglePasswordVisibility('password')}
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

export default ResetPassword;
