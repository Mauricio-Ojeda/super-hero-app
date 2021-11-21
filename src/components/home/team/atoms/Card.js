import React, { useContext, useState } from 'react'
import { TeamContext } from '../../../../context/teamContext/Store';
import { deleteHero } from '../../../../context/teamContext/teamReducer';

import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Card = ({ hero }) => {

    const { id, name, image, powerstats } = hero;

    const [ , dispatch ] = useContext( TeamContext )

    const handleDeleteClick = ( ) => {
           
        dispatch( deleteHero( id ) );
    }

    // Modal
  
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    
    return( 
        
            <div className="card col-md-5 mb-4" >
                <img className="card-img-top" src={ image.url } alt={ name }/>
                <div className="card-body">
                    <h4 className="card-title">{ name }</h4>
                    <div className="container">
                        <ul>
                            <li> intelligence: { powerstats.intelligence === 'null' ? 'unknown' : powerstats.intelligence} </li>
                            <li> strength: { powerstats.strength === 'null' ? 'unknown' : powerstats.strength } </li>
                            <li> speed: { powerstats.speed === 'null' ? 'unknown' : powerstats.speed } </li>
                            <li> durability: { powerstats.durability === 'null' ? 'unknown' : powerstats.durability } </li>
                            <li> power: { powerstats.power === 'null' ? 'unknown' : powerstats.power }</li>
                            <li> combat: { powerstats.combat === 'null' ? 'unknown' : powerstats.combat } </li>
                        </ul>
                    </div> 
                   
                    <button className="btn btn-primary" onClick={ () => handleDeleteClick( ) }>Delete</button>
                    <Button variant="primary" onClick={handleShow}>
                        See More
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Woohoo, you're reading this text in a modal!
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    
                </div>
            </div>
        
    ) 
}

export default Card
