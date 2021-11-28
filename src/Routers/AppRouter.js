
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { HomeRouter } from './HomeRouter';


import Login from '../components/login/Login';



export const AppRouter = () => {

   
    return( 
        <BrowserRouter>            
            <Routes>
                
                <Route 
                    exact
                    path='/login' 
                    element={ 
                        <PublicRoute>    
                            <Login />
                        </PublicRoute>
                    } 

                    />
                <Route 
                     
                    path='/*'                    
                    element={
                        <PrivateRoute> 
                            <HomeRouter />
                        </PrivateRoute>   
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}