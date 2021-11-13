import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const SearchContext = createContext();



const SearchProvider = (props) => {

    const [searchValue, setSearchValue] = useState(null);
    const [heroesData, setHeroesData] = useState(null);
    const [error, setError] = useState(false)

    useEffect(() => {
        if( searchValue ){
          
            const requestAPI = async () => {
                const url = `/api/10225366705148006/search/${ searchValue }`;
                await axios.get( url )
                    .then( response => {
                            if(response.data.response === 'success'){
                               setHeroesData( response?.data ); 
                            } else{
                               setHeroesData( response.data.error ); 
                                
                            }
                        })
                    .catch( error => {
                        console.log( error );
                        setError( true );
                    })
            }
                        
            setSearchValue(null);
            requestAPI();
        }

        
    }, [ searchValue, setSearchValue ])


    return (
        <SearchContext.Provider
            value= {{ 
                    setSearchValue,
                    setError,
                    error, 
                    heroesData,
            }}
        >
            { props.children }
        </SearchContext.Provider>
    )
}

export default SearchProvider;
