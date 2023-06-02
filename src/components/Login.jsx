import React, { useState } from 'react'
import axios from "axios"
const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ""
    });
const [error, setError] = useState("")
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(form.email  === "" || form.password === ''){
            setError("Enter email and password correctly")
        }
        else{

            axios.post("http://127.0.0.1:8000/login", form).then((response) => {
                console.log("object")
                console.log(response)
                if(response.data.Status === 'Error'){
                    setError(response.data.Error)
                }
                else{
                    setError("");
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }
    return (
        <div className='bg-img'>
            <div className='login-box container mx-auto'>
                <div className="row justify-content-center align-items-center vh-100 p-4">
                    <div className="col-lg-4 col-md-8 border border-secondary rounded p-3 bg-white bg-opacity-50">
                        <h1 className='text-center'>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name='email' className="form-control" value={form.email} id="email" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' value={form.password} className="form-control" id="password" onChange={handleChange} placeholder="Password" />
                            </div>
                            <div className='d-grid mt-3'>
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        <p className='text-center text-danger'>
                            {error}
                        </p>
                        <div className='d-grid'>
                            <p className='text-center mt-2'>OR</p>
                            <button type="submit" className="btn btn-secondary">Create account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login