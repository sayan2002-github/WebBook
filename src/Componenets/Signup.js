import React, { useState } from 'react'
import './css/Auth.css'
import { Link, useNavigate } from 'react-router-dom';
import eyeOpen from './images/eye-open.png'
import eyeClose from './images/eye-close.png'

const Signup = (props) => {
    let navigate = useNavigate();
    const [credential, setCredential] = useState({ name: "", email: "", password: "" });

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
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    if (document.getElementById('eyeIcon') !== null) {
        let eyeIcon = document.getElementById('eyeIcon')
        let eyeIconC = document.getElementById('eyeIconC')

        eyeIcon.onclick = function () {
            let exampleInputPassword1 = document.getElementById('exampleInputPassword1');

            if (exampleInputPassword1.type === 'password') {
                exampleInputPassword1.type = 'text'
                eyeIcon.src = eyeOpen
            } else {
                exampleInputPassword1.type = 'password'
                eyeIcon.src = eyeClose
            }
        }

        eyeIconC.onclick = function () {
            let exampleInputPassword2 = document.getElementById('exampleInputPassword2');

            if (exampleInputPassword2.type === 'password') {
                exampleInputPassword2.type = 'text'
                eyeIconC.src = eyeOpen
            } else {
                exampleInputPassword2.type = 'password'
                eyeIconC.src = eyeClose
            }
        }
    }

    return (
        <div>
            <form className='container auth-container' onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Name</label>
                    <input type="text" name='name' className="form-control" id="exampleInputText" onChange={onChange} required minLength={3} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <div className='inputBox d-flex align-item-center'>
                        <input type="password" name='password' className="form-control" id="exampleInputPassword1" onChange={onChange} required minLength={5} />
                        <img src={eyeClose} alt='image1' id='eyeIcon' />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <div className='inputBox d-flex align-item-center'>
                        <input type="password" name='cpassword' className="form-control" id="exampleInputPassword2" onChange={onChange} required minLength={5} />
                        <img src={eyeClose} alt='image1' id='eyeIconC' />
                    </div>
                </div>
                <div className="mb-3">
                    <Link to='/'>Already have an account ?? Login Here!!</Link>
                </div>
                <button type="submit" className="btn btn-primary px-3">Signup</button>
            </form>
        </div>
    )
}

export default Signup