import React, { createContext,  useReducer } from 'react';


export const TeamContext = createContext();



const TeamProvider = ({ children, initialState, reducer }) => {

    const [ globalState, dispatch ] = useReducer( reducer, initialState )   

    console.log(globalState);

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
