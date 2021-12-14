import React from 'react';
import Table from 'react-bootstrap/Table';


const ProjectContainer = () => {
    return (
        <div className='MyPojects'>
            <h3>My Favorite Projects</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
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
                <h4>What i want to learn in 2022<span>_</span></h4>
                <ul>
                    <li>C++</li>
                    <li>Angular</li>
                    <li>Machine Learning/AI</li>
                    <li>Electrical engineering</li>
                </ul>
            </div>
        </div>
    )
}

export default ProjectContainer
