export const types = {
    login: '[auth].login',
    logout: '[auth].logout',
}

// Dispatch

export const login = ( login ) =>({
    type: types.login,
    payload: login,
});

export const logout = ( ) =>({
    type: types.logout,
    payload: {
        logged: false,
    }
});

export const authReducer = ( state = {}, action ) => {
    switch (action.type) {
        case types.login:
            return{
                ...action.payload,
                logged: true
            }
        case types.logout:
            return{
                state: action.payload,
            }
            
            
        default:
            return state;
    }
}