import React, { useContext } from 'react';
import { TeamContext } from '../../../../context/teamContext/Store';
import Card from './Card';

const ListCards = () => {

    const [ globalState, ] = useContext( TeamContext );
    
    // Destructuring globalState
    const { heroesTeam } = globalState;
              
    return (
                
         <>      
                                  
            
                <div className=" row mt-5 ">    
                    { heroesTeam && heroesTeam.map( hero =>{
                        return(
                            <Card 
                                key={ hero.id }
                                hero={ hero }
                            />
                        )}
                    )}
                </div>    
            
         </>                    
    )
                                         
}

export default ListCards
