import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

export const Navbar = () => {

    const { user:{ email }, dispatch } = useContext(AuthContext);
    console.log(email);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand fw-bold" 
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

            <div className="navbar-collapse collapse w-100 d-flex justify-content-end order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-white fw-bold">
                        { email }
                    </span>
                    <NavLink 
                        
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}