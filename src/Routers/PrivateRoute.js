import React from 'react'
import PropTypes from 'prop-types'


import { Navigate } from 'react-router-dom';

const PrivateRoute = ({
    isAuthenticated,    
    children
}) => {
    return (
        ( isAuthenticated )
            ? ( { children } )
            : ( <Navigate to="/login" /> )
      
    )
}


export default PrivateRoute

PrivateRoute.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
}