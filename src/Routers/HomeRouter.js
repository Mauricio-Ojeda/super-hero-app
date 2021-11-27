import { Routes, Route} from 'react-router-dom';

import Home from '../components/home/Home';
import Search from '../components/home/search/Search';
import Team from '../components/home/team/Team';
import { Navbar } from '../components/nav-bar/NavBar';


export const HomeRouter = () => {

    return( 
         <>
            <Navbar />
            <Routes>
                <Route exact path='team' element={<Team /> } />
                <Route exact path='search' element={<Search /> } />
                <Route exact path='/' element={<Home /> } />
              
            </Routes>
        </>    
    )
}