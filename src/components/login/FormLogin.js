import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import './form-login.scss';


const FormLogin = ({ setFormValues, setError, }) => {


   
    return (
        <Formik
            initialValues={{
                    email: '',
                    password: '',
                    
                }}
            validate = {( values ) =>{
                let error = {};
                const { email, password } = values;
                if( !email ){
                    error.email = 'Please enter your Email'
                };

                if( !password || password.trim() === ''){
                    error.password = 'Please enter your password'
                } else if ( password.length < 4 ){
                    error.password = 'Minimum length is 4 characters'
                } 

                return error;
            }}

            onSubmit ={ ( values, { resetForm } ) => {
                    resetForm();
                    setFormValues( values );
                    setError(false);
                  
            }} 
        >{ ( { errors } ) => (
            <div className="col-md-5 mx-auto">
                <Form className="form-group ">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <Field 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email"
                                aria-describedby="emailHelp"

                            />
                            <ErrorMessage name="email" component={ () =>( <p className="bg-danger text-white mt-1 p-2">{ errors.email }</p> )} />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <Field 
                                type="password" 
                                className="form-control" 
                                id="Password"
                                name="password"
                                autoComplete="off"

                            />
                            <ErrorMessage name="password" component={ () =>( <p className="bg-danger text-white mt-1 p-2">{ errors.password }</p> )} />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary ">Login</button>
                        </div>
                </Form>
            </div> 
        )}
        </Formik>          
        
    )
}

export default FormLogin
