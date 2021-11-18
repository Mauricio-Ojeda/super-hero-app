import React, { useContext } from 'react';
import { Store } from '../../../../context/teamContext/Store';
import Error from '../../../error/Error';
import Card from './Card';

const ListCards = () => {

    const [ globalState, ] = useContext( Store );

      
    return (
                
         <>      
                                    
            <div className="card-deck">
                <div className="d-flex justify-content-between flex-wrap">    
                    { globalState && globalState.map( hero =>{
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
