import React, { useState } from 'react';
import './css/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Signup = (props) => {
    const navigate = useNavigate();
    const [credential, setCredential] = useState({ name: "", email: "", password: "", cpassword: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
            const { name, email, password } = credential;
            const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json();
            console.log(json.token)

            if (json.success) {
                localStorage.setItem('token', json.token)
                navigate('/')
                props.showAlert('Account created successfully!!', 'success')
            } else {
                alert('This email is already existed!!')
                props.showAlert('This email already exist!!', 'danger')
            }

        } catch (e) {
            console.log(e)
            props.showAlert('Check your internet connectivity!!', 'danger');
        }
    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    }

    const checkConfirmation = (e) => {
        let exampleInputPassword1 = document.getElementById('exampleInputPassword1');

        if (e.value.length > 0) {
            if (e.value !== exampleInputPassword1.value) {
                document.getElementById('confirmText').innerText = "** Password doesn't match!!"
            } else {
                document.getElementById('confirmText').innerText = ""
            }
        } else {
            document.getElementById('confirmText').innerText = "** Please, enter confirm password!!"
        }
    }

    return (
        <>
            <div className='container d-flex flex-column align-item-center auth-container signin-container'>
                <form className='container' onSubmit={onSubmit}>
                    <h2 className='text-center mb-4'> Register Here</h2>
                    <div className="mb-3">
                        <div className='inputBox d-flex align-item-center'>
                            <FontAwesomeIcon icon={faUser} className='eyeIconClass' />
                            <input type="text" name='name' className="form-control" id="exampleInputText" placeholder='Enter Username' onChange={onChange} required minLength={3} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className='inputBox d-flex align-item-center'>
                            <FontAwesomeIcon icon={faEnvelope} className='eyeIconClass' />
                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" placeholder='Enter Email ID' onChange={onChange} required />
                        </div>
                    </div>
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
                    <div className="mb-3">
                        <div className='inputBox d-flex align-item-center'>
                            <FontAwesomeIcon icon={faLock} className='eyeIconClass' />
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name='cpassword'
                                className="form-control"
                                id="exampleInputPassword2"
                                placeholder='Confirm Password'
                                onChange={onChange}
                                onKeyUp={(e) => checkConfirmation(e.target)}
                                required
                                minLength={5}
                            />
                            <FontAwesomeIcon
                                icon={showConfirmPassword ? faEyeSlash : faEye}
                                className='eyeIconClass'
                                onClick={() => togglePasswordVisibility('cpassword')}
                            />
                        </div>
                        <span id='confirmText'> </span>
                    </div>
                    <div className="mb-3">
                        <Link to='/'>Already have an account ?? Login Here !!</Link>
                    </div>
                    <button type="submit" className="btn btn-success px-3 auth-btn">Signup</button>
                </form>

                <hr />

                <div className='container firebaseContainer d-flex justify-content-center'>
                    
                    <button className='btn btn-primary mx-4 px-2'><FontAwesomeIcon icon={faGoogle} className='mx-1'/> Continue With Google</button>
                    <button className='btn btn-dark mx-4 px-2'><FontAwesomeIcon icon={faGithub} className='mx-1'/> Continue With GitHub</button>
                </div>
            </div>
        </>
    )
}

export default Signup;
