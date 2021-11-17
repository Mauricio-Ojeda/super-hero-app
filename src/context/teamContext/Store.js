import React, { createContext,  useReducer,  useState } from 'react';


export const TeamContext = createContext();



const TeamProvider = ({ children, initialState, reducer }) => {

    const [ globalState, dispatch ] = useReducer( reducer, initialState )   


    return (
        <TeamContext.Provider
            value= {
                   [ globalState, dispatch ]
            }
        >
            { children }
        </TeamContext.Provider>
    )
}

export default TeamProvider;
