import React, { useState, useContext } from 'react'
import './css/Auth.css'
import { Link, useNavigate } from 'react-router-dom';
import authContext from '../Context/Auths/AuthContext';

const Login = (props) => {
    const navigate = useNavigate()
    const context = useContext(authContext)
    const { setProfile } = context;

    const [credential, setCredential] = useState({ name: "",  email: "", password: "" });

    const onSubmit = async (e) => {
        try{
            e.preventDefault();
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: credential.email, password: credential.password })
            });
            const json = await response.json();
            console.log(json)
    
            if (json.success) {
                localStorage.setItem('token', json.token)
                setProfile(json.userName)
                navigate('/homepage')
                props.showAlert('Logged in successfully!!', 'success');
            } else {
                props.showAlert('Invalid Credetials!!', 'danger');
            }
        }catch(e){
            console.log(e)
            props.showAlert('Check your internet connectivity!!', 'danger');
        }
    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form className='container auth-container' onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' value={credential.email} className="form-control" id="exampleInputEmail1" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' value={credential.password} className="form-control" id="exampleInputPassword1" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <Link to='/signup'>Don't have an account ? Signup Here!!</Link>
                </div>
                <button type="submit" className="btn btn-primary px-3">Login</button>
            </form>
        </div>
    )
}

export default Login