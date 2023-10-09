import React, { useState } from 'react';
import './css/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = (props) => {
    const navigate = useNavigate();

    const [credential, setCredential] = useState({ name: '', email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: credential.email, password: credential.password }),
            });
            const json = await response.json();
            console.log(json);

            if (json.success) {
                localStorage.setItem('token', json.token);
                localStorage.setItem('userName', json.userName);
                navigate('/homepage');
                props.showAlert('Logged in successfully!!', 'success');
            } else {
                props.showAlert('Invalid Credentials!!', 'danger');
            }
        } catch (e) {
            console.log(e);
            props.showAlert('Check your internet connectivity!!', 'danger');
        }
    };

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className='container d-flex flex-column align-item-center auth-container login-container'>
                <form className="container" onSubmit={onSubmit}>
                    <h2 className="text-center mb-4">Login Here</h2>
                    <div className="mb-3">
                        <div className="inputBox d-flex align-item-center">
                            <FontAwesomeIcon icon={faEnvelope} className='eyeIconClass' />
                            <input
                                type="email"
                                name="email"
                                value={credential.email}
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter your email id"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="inputBox d-flex align-item-center">
                            <FontAwesomeIcon icon={faLock} className='eyeIconClass' />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={credential.password}
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Enter the password"
                                onChange={onChange}
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className="eyeIconClass"
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <Link to='#'>Forget password?</Link>
                        <Link to='/signup'>New user? Register Here !!</Link>
                    </div>
                    <button type="submit" className="btn btn-success px-3 auth-btn">
                        Login
                    </button>
                </form>

                <hr />

                <div className='container firebaseContainer d-flex justify-content-center'>
                    <button className='btn btn-primary mx-4 px-2'><FontAwesomeIcon icon={faGoogle} className='mx-1' /> Continue With Google</button>
                    <button className='btn btn-dark mx-4 px-2'><FontAwesomeIcon icon={faGithub} className='mx-1' /> Continue With GitHub</button>
                </div>
            </div>
        </>
    );
};

export default Login;
