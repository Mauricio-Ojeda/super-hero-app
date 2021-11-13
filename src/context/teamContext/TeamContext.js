import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const TeamContext = createContext();



const TeamProvider = (props) => {

    const [teamValue, setTeamValue] = useState(null);
    const [heroesData, setHeroesData] = useState(null);

    


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
