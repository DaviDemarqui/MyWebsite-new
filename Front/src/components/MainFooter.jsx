import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainFooter() {
    return (
        <div className="main-footer">
            <ul className='m-footer'> 
                <li><a href="?" className='facebook-icon'><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a></li>
                <li><a href="?" className='linkedin-icon'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                <li><a href="?" className='github-icon'><FontAwesomeIcon icon={['fab', 'github-square']} /></a></li>
                <p>DaviDemarqui 2022</p>
            </ul>
        </div>
    )
}

export default MainFooter;
