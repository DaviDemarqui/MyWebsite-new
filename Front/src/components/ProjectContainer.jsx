import React from 'react';
// import Table from 'react-bootstrap/Table';
import {Card, Button, CardGroup} from 'react-bootstrap';
import logo from '../img/project.png';
import facebook from '../img/facebook.png';
import bottas from '../img/bottas.png';


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
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>TC Electronics API</Card.Title>
                <Card.Text>
                    This is an API I'm building for my brother company called TC Electronics  
                </Card.Text>
                </Card.Body>
                <Button variant="primary" href='https://github.com/DaviDemarqui/tc-api' target="_blank" rel="noopener noreferrer">Go to the repository</Button>
            </Card>
            <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>NetRunner</Card.Title>
                <Card.Text>
                    This is a game i'm currently building when a have free time
                </Card.Text>
                </Card.Body>
                <Button variant="primary" href='https://github.com/DaviDemarqui/NetRunner' target="_blank" rel="noopener noreferrer">Go to the repository</Button>
            </Card>
            </CardGroup>

            </div>
            <div className="lrn">
                <div className="btn">
                    <ul>
                        <li><div className="close"></div></li>
                        <li><div className="minimize"></div></li>
                        <li><div className="expand"></div></li>
                    </ul>
                </div>
                <h4>Future Ventures<span>_</span></h4>
                <section className='venture-list'>
                    <ul className='l1'>
                        <li>Java - Evolve my knowledge in frameworks like SpringBoot and Hibernate for web development.</li>
                        <li>Python - Learn the framework Django and flask for web development. Start to learn more about Machine learning/AI.</li>
                        <li>C++ - Learn more for game development for more complex projects.  </li>
                        <li>Learn Angular for front-end web dev and learn React Native for mobile development.</li>
                    </ul>
                    {/* <ul className='l2'>
                        <li>C++</li>
                        <li>Angular</li>
                        <li>Machine Learning/AI</li>
                        <li>Electrical engineering</li>
                    </ul>
                    <ul className='l3'>
                        <li>C++</li>
                        <li>Angular</li>
                        <li>Machine Learning/AI</li>
                        <li>Electrical engineering</li>
                    </ul>
                    <ul className='l4'>
                        <li>C++</li>
                        <li>Angular</li>
                        <li>Machine Learning/AI</li>
                        <li>Electrical engineering</li>
                    </ul> */}
                </section>
            </div>
        </div>
    )
}

export default ProjectContainer
