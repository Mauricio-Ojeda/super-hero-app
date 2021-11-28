import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import FormLogin from './FormLogin'; 
import Error from '../error/Error';

import { AuthContext } from '../../auth/AuthContext';
import { login} from '../../auth/authReducer';

import './login.scss';

const Login = () => {

    const [formValues, setFormValues] = useState( null );
    const [error, setError] = useState( false );
    
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
               
                dispatch(login({
                    email: formValues.email,
                    token,
                })) 
                                   
                navigate('/');                    
               
            })
            .catch( error => {
                console.log( error );
                setError( true );                
            });
        }
        
    }, [formValues, navigate, dispatch]);



  
    

    return (
        <div className="container" id="login">
           <div className="h-100 d-flex justify-content-center align-items-center ">
                    { error && <Error message="Please provide valid email and password" /> }
                    <FormLogin
                        setFormValues={ setFormValues }
                        setError={ setError }                                                
                    />                 
            </div>
        </div>
    )
}

export default Login
