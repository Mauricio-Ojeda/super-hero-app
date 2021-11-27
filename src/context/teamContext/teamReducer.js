// Types

export const ADD_HERO = 'ADD_HERO';

export const DELETE_HERO = 'DELETE_HERO';

export const SEE_MORE = 'SEE_MORE';

// initial state
export const initialState = {
    heroesTeam: [],
  };


// Dispatch

export const addHero = ( hero ) =>({
    type: ADD_HERO,
    payload: hero,
});

export const deleteHero = ( hero ) =>({
    type: DELETE_HERO,
    payload: hero,
});


// Reducer
export const heroTeamReducer = ( state = initialState, action) => {
    switch ( action.type ) {
      case ADD_HERO:
        return{
          
          ...state,
          heroesTeam: state.heroesTeam.concat( action.payload ),
        };
      case DELETE_HERO:
        return{         
          heroesTeam: state.heroesTeam.filter( hero => hero.id !== action.payload )
        }
      case SEE_MORE:
        return{
          ...state,
          heroesTeam: state.heroesTeam.concat( action.payload ),
        };
        
       
    
      default:
       return state;
    }
}