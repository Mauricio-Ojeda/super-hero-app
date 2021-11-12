import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const SearchContext = createContext();



const SearchProvider = (props) => {

    const [searchValue, setSearchValue] = useState(null);
    const [heroesData, setHeroesData] = useState(null);

    useEffect(() => {
        if( searchValue ){
          
            console.log(searchValue);
            const requestAPI = async () => {
                const url = `/api/10225366705148006/search/${ searchValue }`;
                await axios.get( url )
                    .then( response => {
                            if(response.data.response === 'success'){
                                console.log(response.data.results);
                                setHeroesData( response?.data.results ); 
                            } else{
                               setHeroesData( response.data.error ); 
                               console.log(response.data.error);     
                            }
                        })
                    .catch( error => console.log(error.response) )
            }
                        
            //setSearchValue(null);
            requestAPI();
        }

        
    }, [ searchValue, setSearchValue, setHeroesData ])


    return (
        <SearchContext.Provider
            value= {{ 
                    setSearchValue, 
                    heroesData,
                    searchValue,
                }}
        >
            { props.children }
        </SearchContext.Provider>
    )
}

export default SearchProvider;
