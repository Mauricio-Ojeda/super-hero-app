import React, { useContext } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { SearchContext } from '../../../context/SearchContext';


const FormSearch = () => {
    
    const { setSearchValue, setError } = useContext( SearchContext );

    return (
        <Formik
            initialValues={{
                    search: '',
                                        
                }}
            validate = {( values ) =>{
                let error = {};
                const { search } = values;
                if( !search ){
                    error.search = 'Please enter a SuperHero name'
                };
                
                return error;
            }}

            onSubmit ={ ( values, { resetForm } ) => {            
                    setSearchValue( values.search );
                    setError( false );
                    resetForm();
                                                       
                }} 
        >{ ( { errors } ) => (
            <Form className=" form-group mb-3">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Search a SuperHero</label>
                        <Field 
                            type="text" 
                            className="form-control" 
                            id="search" 
                            name="search"
                            aria-describedby="emailHelp"
                            placeholder="Search your next Team Mate"
                            autocomplete="off"

                        />
                        <ErrorMessage name="search" component={ () =>( <p className="bg-danger text-white mt-1 p-2">{ errors.search }</p> )} />
                        
                    </div>
                  
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary ">Search</button>
                    </div>
                </Form> 
        )}
        </Formik>          
        
    )
}

export default FormSearch

