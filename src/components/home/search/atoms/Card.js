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
        let goods = [];
        let bads = [];
        const heroExist = heroesTeam.map( hero => hero.id ).includes( id ); // test if hero already exist in team
        goods = heroesTeam.filter( hero => hero.alignment === 'good' );
        bads = heroesTeam.filter(hero => hero.alignment === 'bad' );
               
        if( heroExist ){
            setError( true );
            setTimeout(() => {
                setError( false );              
                
            }, 3500);
            return;            
        } else if ( ( hero.biography.alignment === 'good' ) && ( goods.length < 3 ) ){            
                  
            console.log('goods: ' + goods.length);
            dispatch( addHero( hero ) );
            return;
        }else if ( ( hero.biography.alignment === 'bad' ) && ( bads.length < 3 ) ){
           
            console.log('bads: '+ bads.length);
            dispatch( addHero( hero ) )
            return;
        } else { 
            setError( true );
            setTimeout(() => {
                setError( false );              
                
            }, 3500);        
        }
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
