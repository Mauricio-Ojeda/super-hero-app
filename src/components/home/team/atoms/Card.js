import React, { useContext } from 'react'
import { TeamContext } from '../../../../context/teamContext/Store';
import { addHero } from '../../../../context/teamContext/teamReducer';


const Card = ({ hero }) => {

    const { name, image, powerstats } = hero;

    const [ , dispatch ] = useContext( TeamContext )

    const handleClick = ( ) => {
        dispatch( addHero( hero ) );
    }
    
    return( 
        
            <div className="card col-md-5 mb-4" >
                <img className="card-img-top" src={ image.url } alt={ name }/>
                <div className="card-body">
                    <h4 className="card-title">{ name }</h4>
                    <div className="container">
                        <ul>
                            <li> intelligence: { powerstats.intelligence } </li>
                            <li> strength: { powerstats.strength } </li>
                            <li> speed: { powerstats.speed } </li>
                            <li> durability: { powerstats.durability } </li>
                            <li> power: { powerstats.power }</li>
                            <li> combat: { powerstats.combat } </li>
                        </ul>
                    </div>                            
                    <button className="btn btn-primary" onClick={ handleClick }>Delete</button>
                    <button className="btn btn-primary" onClick={ handleClick }>See more</button>
                </div>
            </div>
        
    ) 
}

export default Card
