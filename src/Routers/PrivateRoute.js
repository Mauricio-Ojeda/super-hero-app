import { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';


const PrivateRoute = ({ children }) => {

    const { user } = useContext( AuthContext )
    

    return user.logged
        ? children
        : <Navigate to="/login" />
}

export default PrivateRoute;