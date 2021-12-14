import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainFooter() {
    return (
        <div className="main-footer">
            <ul className='m-footer'> 
                <li><a href="?"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                <li><a href="?"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                <li><a href="?"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                <li><a href="?"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                <li><a href="?"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                <li><a href="?"><FontAwesomeIcon icon={['fab', 'whatsapp']} /></a></li>
                <p>Davi Demarqui 2022</p>
            </ul>
        </div>
    )
}

export default MainFooter;
