import React from 'react';
// import Table from 'react-bootstrap/Table';
import {Card, Button, CardGroup} from 'react-bootstrap';
import facebook from '../img/facebook.png';
import bottas from '../img/bottas.png';
import pong from '../img/pong.jpg';
import zap from '../img/zap.jpg'


const ProjectContainer = () => {
    return (
        <div className='MyPojects'>
            <h3  id='projects'>My Favorite Projects</h3>
            <div className="projects">
            <CardGroup>
            <Card className='card'>
                <Card.Img variant="top" src={bottas} />
                <Card.Body>
                <Card.Title>BOTTAS</Card.Title>
                <Card.Text>
                    Simple Discord Bot made in python using discord library.
                </Card.Text>
                </Card.Body>
                <Button variant="primary" href='https://github.com/DaviDemarqui/BOTTAS' target="_blank" rel="noopener noreferrer">Go to the repository</Button>
            </Card>
            <Card>
                <Card.Img variant="top" src={facebook} />
                <Card.Body>
                <Card.Title>Facebook Clone</Card.Title>
                <Card.Text>
                    Facebook clone made using ReactJS
                </Card.Text>
                </Card.Body>
                <Button variant="primary" href='https://github.com/DaviDemarqui/facebook-clone' target="_blank" rel="noopener noreferrer">Go to the repository</Button>
            </Card>
            <Card>
                <Card.Img variant="top" src={pong} />
                <Card.Body>
                <Card.Title>Pong Game</Card.Title>
                <Card.Text>
                    The classic pong game :D  
                </Card.Text>
                </Card.Body>
                <Button variant="primary" href='https://github.com/DaviDemarqui/Java-Pong-Game' target="_blank" rel="noopener noreferrer">Go to the repository</Button>
            </Card>
            <Card>
                <Card.Img variant="top" src={zap} />
                <Card.Body>
                <Card.Title>Node Message App</Card.Title>
                <Card.Text>
                    This is a message app made in NodeJS, MongoDB and HTLM/CSS
                </Card.Text>
                </Card.Body>
                <Button variant="primary" href='https://github.com/DaviDemarqui/node-message-app' target="_blank" rel="noopener noreferrer">Go to the repository</Button>
            </Card>
            </CardGroup>
            </div>
        </div>
    )
}

export default ProjectContainer
