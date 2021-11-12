import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const SearchContext = createContext();



const SearchProvider = (props) => {

    const [searchValue, setSearchValue] = useState(null);
    const [searchData, setSearchData] = useState(null);

    useEffect(() => {
        if( searchValue ){
          
            console.log(searchValue);
            const requestAPI = async () => {
                const url = `/api/10225366705148006/search/${ searchValue }`;
                await axios.get( url )
                    .then( response => {
                            if(response.data.response === 'success'){
                                console.log(response.data.results);
                                setSearchData( response.data.results ); 
                            } else{
                               setSearchData( response.data.error ); 
                               console.log(response.data.error);     
                            }
                        })
                    .catch( error => console.log(error.response) )
            }
            
            
            setSearchValue(null)
            console.log(setSearchValue+' search value useeffect');

            requestAPI();
        }

        
    }, [ searchValue, setSearchValue, setSearchData ])


    return (
        <SearchContext.Provider
            value= {{ 
                    setSearchValue, 
                    searchData,
                }}
        >
            { props.children }
        </SearchContext.Provider>
    )
}

export default SearchProvider;
