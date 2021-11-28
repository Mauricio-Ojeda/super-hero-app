import { createContext, useReducer } from "react";


export const AuthContext = createContext(); 

const AuthProvider = ({ children, initialState, reducer }) => {

    const [ user, dispatch ] = useReducer( reducer, initialState )   

           
    return (
        <AuthContext.Provider
            value= {{
                user,
                dispatch
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;
