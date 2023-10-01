import React, { useState } from 'react'
import './css/Auth.css'
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {
    let navigate = useNavigate();
    const [credential, setCredential] = useState({ name: "", email: "", password: "" });

    const onSubmit = async (e) => {
        try{
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
                    <label htmlFor="exampleInputText" className="form-label">Name</label>
                    <input type="text" name='name' className="form-control" id="exampleInputText" onChange={onChange} required minLength={3} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" onChange={onChange} required minLength={5} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" name='cpassword' className="form-control" id="exampleInputPassword2" onChange={onChange} required minLength={5} />
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