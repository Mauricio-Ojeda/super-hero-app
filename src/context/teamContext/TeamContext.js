import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const TeamContext = createContext();



const TeamProvider = (props) => {

    const [teamValue, setTeamValue] = useState(null);
    const [heroesData, setHeroesData] = useState(null);

    useEffect(() => {
        if( teamValue ){
          
            const requestAPI = async () => {
                const url = `/api/10225366705148006/team/${ teamValue }`;
                await axios.get( url )
                    .then( response => {
                            if(response.data.response === 'success'){
                               setHeroesData( response?.data ); 
                            } else{
                               setHeroesData( response.data.error ); 
                                
                            }
                        })
                    .catch( error => console.log( error ) )
            }
                        
            setTeamValue(null);
            requestAPI();
        }

        
    }, [ teamValue, setTeamValue, setHeroesData ])


    return (
        <TeamContext.Provider
            value= {{ 
                    setTeamValue, 
                    heroesData,
            }}
        >
            { props.children }
        </TeamContext.Provider>
    )
}

export default TeamProvider;
