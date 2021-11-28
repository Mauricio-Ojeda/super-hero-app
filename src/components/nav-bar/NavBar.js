
import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { logout } from '../../auth/authReducer';


export const Navbar = () => {

    const { user:{ email }, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogOut = () => {
        
        dispatch(logout());
        navigate('/login');
    }  


    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark  px-3">
           <div className="container justify-content-center">
               <div className="nav navbar-nav flex-fill w-100 flex-nowrap">
                <Link 
                    className="navbar-brand fw-bold " 
                    to="/"
                >
                    SuperHeroApp
                </Link>
                

                <div className="collapse navbar-collapse">
                    <div className="navbar-nav ">

                        <NavLink 
                            
                            className="nav-item nav-link" 
                            to="/team"
                        >
                            Team
                        </NavLink>

                        <NavLink 
                            
                            className="nav-item nav-link" 
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse justify-content-md-end order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-white bold">
                            { email }
                        </span>
                        <button                       
                            className="nav-item nav-link btn" 
                            onClick={ handleLogOut }
                            
                        >
                            Logout
                        </button>
                    </ul>
                    </div>    
                </div>
            </div>
        </nav>
    )
}