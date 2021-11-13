// Types

export const ADD_HERO = 'ADD_HERO';

export const DELETE_HERO = 'DELETE_HERO';

export const SEE_MORE = 'SEE_MORE';


export const initialState = {
    heroesTeam: [],
  };

// Dispatch

export const addHero = ( hero ) =>({
    type: ADD_HERO,
    payload: hero,
});


// Reducer
export const heroTeamReducer = ( state = initialState, action){
    
}