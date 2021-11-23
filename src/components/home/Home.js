import React from 'react'
import Search from './search/Search'
import Team from './team/Team'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col ">
                        <Search />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Team />
                    </div>
                </div>    
            </div>

            
        </>
    )
}

export default Home
