import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import FormLogin from './FormLogin'; 
import Error from '../error/Error';
import { types } from '../auth/authReducer';


const Login = () => {

    const [formValues, setFormValues] = useState( null );
    const [error, setError] = useState( false );
    const [token, setToken] = useState( null );
    const [success, setSuccess] = useState( false );

    const { dispatch } = useContext( AuthContext );
    const navigate = useNavigate();


    
    //Request token
    useEffect(() => {
        if( formValues ){
            const url = 'http://challenge-react.alkemy.org:80';
            axios.post(url, {
                email:formValues.email,
                password:formValues.password,
            })
            .then( response => {
                const { token } = response.data;
                dispatch({
                    type: types.login,
                    payload:{
                        email: formValues.email,
                        token,
                    }
                })                    
                navigate('/');                      
               
            })
            .catch( error => {
                console.log( error );
                setError( true );
                setSuccess( false );
            });
        }
        
    }, [formValues]);



  
    

    return (
        <div className="container">
           <div className="h-100 d-flex justify-content-center align-items-center ">
                    { error && <Error message="Please provide valid email and password" /> }
                    <FormLogin
                        setFormValues={ setFormValues }
                        setError={ setError }
                        token={ token }
                        success={ success }
                        
                    />
                   
            </div>
        </div>
    )
}

export default Login
