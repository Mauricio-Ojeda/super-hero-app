import { useContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext';

import Login from '../components/login/Login';
import { HomeRouter } from './HomeRouter';
import PrivateRoute from './PrivateRoute';



export const AppRouter = () => {

    const { user } = useContext(AuthContext)

    return( 
        <BrowserRouter>            
            <Routes>
                
                <Route exact path='/login' element={ <Login />} />
                <Route 
                    exact path='/*'
                    
                    element={
                        <PrivateRoute 
                            isAuthenticated={ user.logged } 
                        >  
                            <HomeRouter />
                        </PrivateRoute>   
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}