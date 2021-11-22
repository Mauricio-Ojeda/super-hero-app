import React, { useContext, useState } from 'react'
import { TeamContext } from '../../../../context/teamContext/Store';
import { deleteHero } from '../../../../context/teamContext/teamReducer';

import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HorizontalBarChart from './HorizontalBarChart';


const Card = ({ hero }) => {

    const { id, name, image, powerstats, appearance, biography, work } = hero;
    
    const [ , dispatch ] = useContext( TeamContext )

    const handleDeleteClick = ( ) => {
           
        dispatch( deleteHero( id ) );
    }

    // Modal state
  
    const [show, setShow] = useState(false);
    
    // Modal Handle
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    
    return( 
        
            <div className="card col-md-5 mb-4" >
                <img className="card-img-top" src={ image.url } alt={ name }/>
                <div className="card-body">
                    <h4 className="card-title">{ name }</h4>
                    <div className="row" >
                        {/* <ul>
                            <li> intelligence: { powerstats.intelligence === 'null' ? 'unknown' : powerstats.intelligence} </li>
                            <li> strength: { powerstats.strength === 'null' ? 'unknown' : powerstats.strength } </li>
                            <li> speed: { powerstats.speed === 'null' ? 'unknown' : powerstats.speed } </li>
                            <li> durability: { powerstats.durability === 'null' ? 'unknown' : powerstats.durability } </li>
                            <li> power: { powerstats.power === 'null' ? 'unknown' : powerstats.power }</li>
                            <li> combat: { powerstats.combat === 'null' ? 'unknown' : powerstats.combat } </li>
                        </ul> */}
                        <HorizontalBarChart />
                    </div> 
                   
                    <button className="btn btn-primary" onClick={ () => handleDeleteClick( ) }>Delete</button>
                    <Button variant="primary" onClick={handleShow}>
                        See More
                    </Button>

                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{ name }</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                Aliases: { biography.aliases }
                                <br />
                                Weight: { appearance.weight[1] }
                                <br />
                                Height: { appearance.height[1] }
                                <br />
                                Eye Color: { appearance["eye-color"] }
                                <br />
                                Hair Color: { appearance["hair-color"] }
                                <br />
                                Work Base: { work.base }

                            </p>
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
