import React, { createContext,  useReducer, useState } from 'react';


export const TeamContext = createContext();



const TeamProvider = ({ children, initialState, reducer }) => {

    const [error, setError] = useState( false );
    const [ globalState, dispatch ] = useReducer( reducer, initialState )   

    console.log(globalState);
       
    return (
        <TeamContext.Provider
            value= {
                   [ globalState, dispatch, error, setError ]
            }
        >
            { children }
        </TeamContext.Provider>
    )
}

export default TeamProvider;
