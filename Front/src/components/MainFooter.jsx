import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainFooter() {
    return (
        <div className="main-footer">
            <div className="contact"></div>
            <ul className='m-footer' id='contact'> 
                <li><a href="https://www.facebook.com/profile.php?id=100073432942739" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>

                <li><a href="https://www.linkedin.com/in/davi-demarqui-a875a2218/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>

                <li><a href="https://github.com/DaviDemarqui" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>

                <li><a href="https://twitter.com/DemarquiDavi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>

                <li><a href="https://www.instagram.com/ddb.jpg/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                
            </ul>
        </div>
    )
}

export default MainFooter;
