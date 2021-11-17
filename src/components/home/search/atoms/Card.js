import React, { useContext } from 'react'
import { TeamContext } from '../../../../context/teamContext/Store';
import { addHero } from '../../../../context/teamContext/teamReducer';


const Card = ({ hero }) => {

    const { id, name, image } = hero;

    const [ , dispatch ] = useContext( TeamContext )

    const handleClick = ( ) => {
        dispatch( addHero( hero ) );
        console.log(hero + id );
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
