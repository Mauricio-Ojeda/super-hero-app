import React, { useContext } from 'react'
import { TeamContext } from '../../../../context/teamContext/Store';
import { addHero } from '../../../../context/teamContext/teamReducer';


const Card = ({ hero }) => {

    const [ globalState, dispatch, ,setError ] = useContext( TeamContext );
    // Destructuring
    const { id, name, image } = hero;
    const { heroesTeam } = globalState;

    
    const handleClick = ( ) => {
        //validations
        const heroExist = heroesTeam.map( hero => hero.id ).includes( id ); // test if hero already exist in team
        const heroGoodBad = heroesTeam.filter( hero => hero.alingment === good ).reduce( acu )
        ( heroExist ) ? 
                        setError( true )
                      ? ( ( hero.alingment === 'good' ) && ( goodHero < 4 ) ) ?  
                        
                      : 
                        dispatch( addHero( hero ) );
        setTimeout(() => {
            setError( false );              
            
        }, 3500);
    }
    
    return( 
        
            <div className="card col-md-5 mb-4" >
                <img className="card-img-top" src={ image.url } alt={ name }/>
                <div className="card-body">
                    <h4 className="card-title">{ name }</h4>                            
                    <button className="btn btn-primary w-100 stretched-link" onClick={ handleClick }>add</button>
                </div>
            </div>
        
    ) 
}

export default Card
