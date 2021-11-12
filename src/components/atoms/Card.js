import React from 'react'


const Card = ({ hero }) => {

    const { name, image } = hero;
    
    return( 
        
            <div className="card col-md-5 mb-4" >
                <img className="card-img-top" src={ image.url } alt={ name }/>
                <div className="card-body">
                    <h4 className="card-title">{ name }</h4>                            
                    <a href="#home" className="btn btn-primary w-100 stretched-link">add</a>
                </div>
            </div>
        
    ) 
}

export default Card
