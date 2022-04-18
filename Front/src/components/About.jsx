import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="abt-me-container" id='about'>
                <h2>About-Me</h2>
                <br />
                <p>
                    I never was the best student in my time in school, however I was always hungry for knowledge because I always knew that with the right knowledge I could conquer all my dreams.
                    With this mindset when I was 10 years old, I got to know programming through a classmate when I was in the United States,
                    since then I have been teaching myself to program through courses on youtube and tutorials. <br />
                    Back in Brazil and studying it was very difficult to find a job as a developer because I live in a very small town.
                    But on a afternoon on August 23, 2021 after many nights awake studying and looking for a job finally got a great opportunity in a company in my city.
                    I got my first job as a Web Developer! <br />
                    Nowadays I work in this incredible company as Back-End Developer and I also work as a freelancer.
                    On this journey I learned that not only with knowledge but with great dedication I can conquer everything that I dream.
                    We just have to remain hungry for knowledge and move on.                
                </p>
                <br />
                <div className="kn-list">
                    <h3>Software Development</h3>
                    <p>Java, Spring Boot</p>
                    <p>Python, TypeScript</p>
                    <p>React, Sass, Angular</p>
                </div>
                <br />
                <div className="w-xp">
                    <h3>Working Experience</h3>
                    <br />
                    <ul>
                        <li><p>Genesys Software <br /> <span>August/2021 - Today</span></p></li>
                        <li><p>Freelancer <br /> <span>March/2021 - Today</span></p></li>
                    </ul>
                </div>
            </div>
    )}
}