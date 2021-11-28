import React from 'react';
import Search from './search/Search';
import Team from './team/Team';

import './home.scss';

const Home = () => {
    return (
        <>
            <div className="container" id="home">
                <div className="row justify-content-center">
                    <div className="col " >
                        <Search />
                    </div>
                </div>
                <div className="row">
                    <div className="col" name="team">
                        <Team />
                    </div>
                </div>    
            </div>

            
        </>
    )
}

export default Home
