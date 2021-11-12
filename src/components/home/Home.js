import React from 'react'
import Search from './search/Search'
import Team from './team/Team'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Search />
                    </div>
                    <div className="col-md-6">
                        <Team />
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Home
