import React from 'react'

const Login = () => {
    return (
        <div className='bg-img'>
        <div className='login-box container mx-auto'>
            <div className="row justify-content-center align-items-center vh-100 p-4">
                <div className="col-lg-4 col-md-8 border border-secondary rounded p-3 bg-white bg-opacity-50">
                    <h1 className='text-center'>Login</h1>
                    <form>
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email.</small>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" name='password' className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className='d-grid mt-3'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
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