import React, { createContext,  useReducer, useState } from 'react';


export const TeamContext = createContext();



const TeamProvider = ({ children, initialState, reducer }) => {

    const [error, setError] = useState( false );
    const [goodHero, setGoodHero] = useState( 0 );
    const [badHero, setBadHero] = useState( 0 );
    const [ globalState, dispatch ] = useReducer( reducer, initialState )   

    console.log(globalState);
       
    return (
        <TeamContext.Provider
            value= {
                   [ globalState, dispatch, error, setError, goodHero, setGoodHero, badHero, setBadHero ]
            }
        >
            { children }
        </TeamContext.Provider>
    )
}

export default TeamProvider;
