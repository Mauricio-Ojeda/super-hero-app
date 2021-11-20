import React, { createContext,  useReducer, useState } from 'react';


export const TeamContext = createContext();



const TeamProvider = ({ children, initialState, reducer }) => {

    const [ error, setError ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState( '' );
    const [ globalState, dispatch ] = useReducer( reducer, initialState )   

    console.log(globalState);
       
    return (
        <TeamContext.Provider
            value= {
                   [ globalState, dispatch, error, errorMessage, setErrorMessage, setError ]
            }
        >
            { children }
        </TeamContext.Provider>
    )
}

export default TeamProvider;
