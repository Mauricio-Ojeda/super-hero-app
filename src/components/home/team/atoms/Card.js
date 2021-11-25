import React, { useContext, useState } from 'react'
import { TeamContext } from '../../../../context/teamContext/Store';
import { deleteHero } from '../../../../context/teamContext/teamReducer';


import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HorizontalBarChart from './HorizontalBarChart';
import './card.scss';


const Card = ({ hero }) => {

    const { id, name, image, powerstats, appearance, biography, work } = hero;

    const aliases = biography.aliases.map( alias => alias ).join(', ');
        
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
            <div className="card-container col-lg-4 col-md-5 d-flex align-items-stretch mb-4 ">
                <div className="card-flip " >
                    <div className="card front"> 
                        <img className="card-img h-100" src={ image.url } alt={ name }/>
                        <div className="card-img-overlay">
                            <h4 className="card-title text-white text-center">{ name }</h4>
                        </div>
                    </div>    
                    <div className="card back">    
                                               
                        <div >
                            <HorizontalBarChart 
                                
                                data = {   
                                      {
                                        labels: ['Intel', 'Str', 'Speed', 'Durab', 'Pw', 'Cmbt'],
                                        datasets: [
                                            {
                                            data: [ powerstats.intelligence, powerstats.strength, powerstats.speed, powerstats.durability, powerstats.power, powerstats.combat ],
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)',
                                                'rgba(54, 162, 235, 0.2)',
                                                'rgba(255, 206, 86, 0.2)',
                                                'rgba(75, 192, 192, 0.2)',
                                                'rgba(153, 102, 255, 0.2)',
                                                'rgba(255, 159, 64, 0.2)',
                                            ],
                                            borderColor: [
                                                'rgba(255, 99, 132, 1)',
                                                'rgba(54, 162, 235, 1)',
                                                'rgba(255, 206, 86, 1)',
                                                'rgba(75, 192, 192, 1)',
                                                'rgba(153, 102, 255, 1)',
                                                'rgba(255, 159, 64, 1)',
                                            ],
                                            borderWidth: 1,
                                            },
                                        ],
                                        }
                                    } 
                                
                            />
                            <div className="card-footer mt-5">
                                <div className="d-flex justify-content-between p-md-1 ">                    
                                    <button className="btn  btn-danger me-2" onClick={ () => handleDeleteClick( ) }>Delete</button>
                                    <Button variant="info" onClick={handleShow}>
                                        Details
                                    </Button>
                                </div>

                            </div>    

                            <Modal show={show} onHide={handleClose} centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{ name }</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>
                                            Aliases: { aliases }
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
                </div>
            </div>
        
    ) 
}

export default Card
