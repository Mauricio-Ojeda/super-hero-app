import React, { useEffect, useState } from 'react'
import FormLogin from './FormLogin'
import axios from 'axios';

const Login = () => {

    const [formData, setFormData] = useState( null );

    useEffect(() => {
        if( formData ){
            const { email, password} = formData;
            const url = 'http://challenge-react.alkemy.org:80';
            axios.post(url,{
                email: email,
                password: password
            })
            .then( response => console.log( 'correcto '+ response.status ) )
            .catch( error => console.log( 'hubo un error, ' + error ) );
        }
        
    }, [formData])
    



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
