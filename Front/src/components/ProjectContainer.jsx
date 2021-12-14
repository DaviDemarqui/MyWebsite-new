import React from 'react';
import Table from 'react-bootstrap/Table';


const ProjectContainer = () => {
    return (
        <div className='MyPojects'>
            <h3>My Favorite Projects</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>title</th>
                    <th>Description</th>
                    <th>Language</th>
                    <th>Stars</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><a href='https://github.com/DaviDemarqui/BOTTAS'>BOTTAS</a></td>
                    <td>Discord bot</td>
                    <td>Python</td>
                    <td>1</td>
                    </tr>
                    <tr>
                    <td><a href='https://github.com/DaviDemarqui/NetRunner'>NETRUNNER</a></td>
                    <td>An retrowave cyberpunk game</td>
                    <td>C#</td>
                    <td>2</td>
                    </tr>
                    <tr>
                    <td><a href='https://github.com/DaviDemarqui/MyWebsite-new'>THIS WEBSITE</a></td>
                    <td>this is the website you are using now :D</td>
                    <td>JavaScript/Java</td>
                    <td>5</td>
                    </tr>
                </tbody>
            </Table>
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
                        <li>Start to learn about C and C++ for game development and for other projects.  </li>
                        <li>Learn Angular for front-end web dev and learn react native for mobile development.</li>
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
