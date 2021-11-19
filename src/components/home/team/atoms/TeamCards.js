import React, { useContext } from 'react';
import { TeamContext } from '../../../../context/teamContext/Store';
import Card from './Card';

const ListCards = () => {

    const [ globalState, ] = useContext( TeamContext );
    
    // Destructuring globalState
    const { heroesTeam } = globalState;
              
    return (
                
         <>      
                                    
            <div className="card-deck">
                <div className="d-flex justify-content-between flex-wrap">    
                    { heroesTeam && heroesTeam.map( hero =>{
                        return(
                            <Card 
                                key={ hero.id }
                                hero={ hero }
                            />
                        )}
                    )}
                </div>    
            </div>
         </>                    
    )
                                         
}

export default ListCards
