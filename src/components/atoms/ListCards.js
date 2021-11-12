import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const ListCards = () => {

    const { SearchData } = useContext( SearchContext );

    return (
        <div>
            { SearchData && SearchData.map( data => {

                const { id, name, image } = data;

               return( 
                    <div key={ id } className="card" >
                        <img className="card-img-top" src={ image.url } alt={ name }/>
                        <div className="card-body">
                            <h4 className="card-title">{ name }</h4>                            
                            <a href="#home" className="btn btn-block btn-primary st">add</a>
                        </div>
                    </div>
                ) 
            } ) }
        </div>
    )
}

export default ListCards
