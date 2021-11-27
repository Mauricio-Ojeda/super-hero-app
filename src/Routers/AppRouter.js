import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from '../components/login/Login';
import { HomeRouter } from './HomeRouter';



export const AppRouter = () => {

    return( 
        <BrowserRouter>            
            <Routes>
                
                <Route exact path='/login' element={ <Login />} />
                <Route exact path='/*' element={<HomeRouter /> } />
            </Routes>
        </BrowserRouter>
    )
}