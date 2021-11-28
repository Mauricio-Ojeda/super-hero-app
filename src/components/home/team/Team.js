import React, { useContext } from 'react';
import { TeamContext } from '../../../context/teamContext/Store';
import TeamCards from './atoms/TeamCards'
import PowerStats from './PowerStats'

const Team = () => {

    const [ globalState, ] = useContext( TeamContext );
    
    // Destructuring globalState
    const { heroesTeam } = globalState;

    return (
       
            <div className="container-fluid mb-3">
                <div className="text-center">
                <h2 className="my-5">Your team </h2>
                    { heroesTeam.length === 0 && <p  >Your team is empty. The team must have 6 members. There should be 3 members with good orientation and 3 with
                                                    bad orientation. </p>}               
                </div>  
                <div className="row">
                    <div className="col" name="team" id="team">
                        <TeamCards />
                       
                    </div>                   
                </div>
                <div className="row">
                    <div className="col">
                      {heroesTeam.length > 0 && <PowerStats />} 
                    </div>                   
                </div>
            </div>
       
    
    )
}

export default Team
