import React, { useState } from 'react'
import FormLogin from './FormLogin'


const Login = () => {

    const [formData, setFormData] = useState( null );

    return (
        <div className="container">
           <div className="h-100 d-flex justify-content-center align-items-center ">
                  
                    <FormLogin
                        setFormData={ setFormData }
                    />
                   
            </div>
        </div>
    )
}

export default Login
