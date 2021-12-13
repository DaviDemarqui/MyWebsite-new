import React from 'react';
import Profile from '../img/User-Profile-PNG.png';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (
        <div className="abt-me-container">
            <h2>About Me</h2>
            <br />
            <img src={Profile} 
            alt="My face" 
            className='myProfilePic' />
            <p>Lorem ipsum dolor, 
                sit amet consectetur 
                adipisicing elit. 
                Dolore sit veniam 
                iure deserunt ex ab temporibus 
                quod facere soluta, illum laboriosam
                dolorum iste in molestias eum
                quidem alias ad eligendi velit
                tenetur nisi quia officia. Iusto,
                earum vel. Officia, quisquam?
                Debitis sunt minus aliquam 
                dolores laudantium perferendis
                corporis dolore dolorum! 
                Dolores, sequi! Minus aut
                quo similique, possimus
                voluptates aliquam 
                temporibus libero
                ratione, dolore
                labore repellendus,
                et provident.
                Necessitatibus
                distinctio consequatur vitae
                recusandae labore eos laborum minus
                officiis ut et architecto illo quibusdam
                maiores eum aliquam accusantium. 
                Suscipit animi illo nisi?
            </p>
        </div>
    )
}

export default About;