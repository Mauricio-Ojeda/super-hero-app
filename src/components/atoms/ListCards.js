import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import Error from '../error/Error';
import Card from './Card';

const ListCards = () => {

    const { heroesData, searchValue } = useContext( SearchContext );
    
    console.log(heroesData);
        // hero dont exits    
        if(typeof heroesData === 'string'){
            return( 
                <div className="container text-center">
                    <Error message={ heroesData } />
                </div>    
            )
        }else{

                return (
                
                    <>      
                            { heroesData ? <h3 className="text-center text-capitalize">{ searchValue }</h3> : <h3> Find your hero </h3>}                   
                            <div className="card-deck container">
                                <div className="d-flex justify-content-between flex-wrap">    
                                    { heroesData && heroesData.map( hero =>{ 

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
}

export default ListCards
