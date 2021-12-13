import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainFooter() {
    return (
        <div className="main-footer">
            <ul className='m-footer'> 
                <li><a href="?"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a></li>
                <li><a href="?"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                <li><a href="?"><FontAwesomeIcon icon={['fab', 'github-square']} /></a></li>
                <p>DaviDemarqui 2022</p>
            </ul>
        </div>
    )
}

export default MainFooter;
