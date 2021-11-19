// Types

export const ADD_HERO = 'ADD_HERO';

export const DELETE_HERO = 'DELETE_HERO';

export const SEE_MORE = 'SEE_MORE';


export const initialState = {
    heroesTeam: [],
  };

export const badHero = [];  
export const goodHero = [];  

// Dispatch

export const addHero = ( hero ) =>({
    type: ADD_HERO,
    payload: {
      id: hero.id,
      name: hero.name,
      image: hero.image,
      powerstats: hero.powerstats,
      alignment: hero.biography.alignment,
  },
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
          //Hero is in the team
          {heroesTeam.includes( action.payload.id )}
         //(action.payload.alignment === 'good') ? goodHero.concat( action.payload.id ) : badHero.concat( action.payload.id ); ,
         { ...state,
          heroesTeam: state.heroesTeam.concat( action.payload ),}
        };
      case DELETE_HERO:
        return state.filter( hero => hero.id !== action.payload )
      case SEE_MORE:
        return{
          ...state,
          heroesTeam: state.heroesTeam.concat( action.payload ),
        };
        
       
    
      default:
       return state;
    }
}