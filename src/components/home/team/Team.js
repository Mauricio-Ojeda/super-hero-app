import React from 'react';
import TeamCards from './atoms/TeamCards'
import PowerStats from './PowerStats'

const Team = () => {

    

    return (
       
            <div className="container-fluid mb-3">
                <h2 className="text-center">Your team </h2>                
                <div className="row">
                    <div className="col" name="team" id="team">
                        <TeamCards />
                       
                    </div>                   
                </div>
                <div className="row">
                    <div className="col">
                       <PowerStats />
                    </div>                   
                </div>
            </div>
       
    
    )
}

export default Team
