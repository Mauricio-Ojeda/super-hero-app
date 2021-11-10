import React, { useEffect, useState } from 'react'
import FormLogin from './FormLogin'
import axios from 'axios';
import Error from '../error/Error';

const Login = () => {

    const [formValues, setFormValues] = useState( null );
    const [error, setError] = useState( false );

    useEffect(() => {
        if( formValues ){
            const url = 'http://challenge-react.alkemy.org:80';
            axios.post(url, {
                email:formValues.email,
                password:formValues.password,
            })
            .then( response => {
                const token = response.data
                localStorage.setItem( 'token', JSON.stringify( token) ); 
            })
            .catch( error => {
                console.log( error );
                setError( true );
            });
        }
        
    }, [formValues])
    



    return (
        <div className="container">
           <div className="h-100 d-flex justify-content-center align-items-center ">
                    { error && <Error menssage="Please provide valid email and password" /> }
                    <FormLogin
                        setFormValues={ setFormValues }
                        setError={ setError }
                    />
                   
            </div>
        </div>
    )
}

export default Login
