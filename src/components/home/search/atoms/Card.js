import React, { useContext, useState } from 'react'
import { TeamContext } from '../../../../context/teamContext/Store';
import { addHero } from '../../../../context/teamContext/teamReducer';
import Error from '../../../error/Error';


const Card = ({ hero }) => {

    const [ globalState, dispatch, ] = useContext( TeamContext );
    // Destructuring
    const { id, name, image } = hero;
    const { heroesTeam } = globalState;

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false)

    
    const handleClick = () => {
        
        let goods = [];
        let bads = [];
        const heroExist = heroesTeam.map( hero => hero.id ).includes( id ); // test if hero already exist in team
        goods = heroesTeam.filter( hero => hero.biography.alignment === 'good' );
        bads = heroesTeam.filter(hero => hero.biography.alignment === 'bad' );
        
        //validations
        if( heroExist ){
            setErrorMessage( "Hero already in your team" );
            setError( true );
            setTimeout(() => {
                setError( false );              
                
            }, 3500);
            return;            
        } 

        if ( heroesTeam.length === 6 ) {
            setErrorMessage( "you can't have more than 6 heroes" );
            setError( true );
            setTimeout(() => {
                setError( false );              
                
            }, 3500);
            return;
        }
        
        if ( ( hero.biography.alignment === 'good' ) && ( goods.length < 3 ) ){ // dont be more that 3 good heroes           
                       
            dispatch( addHero( hero ) );
            setSuccess(true);
            
            setTimeout(() => {
                setSuccess(false);
            }, 3500);
            return;
            
        }else if ( ( hero.biography.alignment === 'bad' ) && ( bads.length < 3 ) ){ // dont be more that 3 bad heroes  
          
            dispatch( addHero( hero ) );
            setSuccess(true);
            
            setTimeout(() => {
                setSuccess(false);
            }, 3500);
            return;

        } else if( hero.biography.alignment === 'neutral' ){

            dispatch( addHero( hero ) );
            setSuccess(true);
            
            setTimeout(() => {
                setSuccess(false);
            }, 3500);
            return;

        }else {

            setErrorMessage( `you can't have more than 3 ${ hero.biography.alignment } heroes` ); 
            setError( true );
            setTimeout(() => {
                setError( false );              
                
            }, 3500);        
        }
    }
    
    return( 
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div className="card mb-3 " >
                <img className="card-img-top h-100" src={ image.url } alt={ name }/>
                <div className="card-body text-center">
                    <h4 className="card-title ">{ name }</h4>
                    <p className="text-capitalize">{`( ${ hero.biography.alignment } )`}</p> 
                    <div>
                        { ( error ) && <Error message={ errorMessage } /> }
                        { ( success ) && <p className="text-success" > Hero added to your Team ✔ </p> }
                    </div>                           
                    <button className="btn btn-primary w-100 stretched-link" onClick={ handleClick }>add</button>
                </div>
            </div>
            </div>
    ) 
}

export default Card
