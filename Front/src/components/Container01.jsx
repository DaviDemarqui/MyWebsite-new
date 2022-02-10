import React from 'react';
import me from '../img/me.jpg';

function Container01() {
    return (
        <div className="container-01">
            <div id='home'></div>
            <h3 className="hello-C1">Hello World<span>_</span></h3>
            <br />
            <h1>I'm Davi Demarqui</h1>
            <br />
            <h3>Self taught software developer from Brazil guided by the desire to evolve and innovate.</h3>
            <br />
            <h4 className='ddb0'>Full Stack Software Engineer</h4>
            <div className="image">
                <img src={me} alt="me with a computer" className='me' />
            </div>
        </div>
    )
}

export default Container01;