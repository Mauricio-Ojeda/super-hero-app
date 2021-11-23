import React, { useContext } from 'react';
import { SearchContext } from '../../../../context/SearchContext';
import Error from '../../../error/Error';
import Card from './Card';

const ListCards = () => {

    const { heroesData } = useContext( SearchContext );

      
    
        // hero dont exits    
        if(typeof heroesData === 'string'){
            
            return( 
                <div className="container text-center text-capitalize">
                    <Error message={ heroesData } />
                </div>    
            )
        }else{
               

                return (
                
                    <>      
                            { heroesData ? <h3 className="text-center text-capitalize my-5"> Results For: { heroesData[ "results-for" ]}</h3> : <h3> Find your hero </h3>}                   
                          
                                <div className="row mt-5">    
                                    { heroesData && heroesData.results.map( hero =>{ 

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
}

export default ListCards
