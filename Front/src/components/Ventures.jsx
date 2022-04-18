import React from 'react';

function Ventures() {
    return (
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
    )
}

export default Ventures;
