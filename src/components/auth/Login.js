import React from 'react'

const Login = () => {
    return (
        <div className="container">
           <div className="h-100  d-flex justify-content-center align-items-center ">
                <form className="form-group col-md-4">
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label for="Password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="Password"/>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary ">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
