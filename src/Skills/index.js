import React from 'react';
import '../App.css'
import { Row, Col } from 'react-bootstrap'

const Skills = (props) => {
    return (
        <div className="skill" ref={props.refe}>
            <div className="container">
            <h1 className='pt-4'>Skills</h1>
            <Row className='pb-5'>
                <Col md={3} className="mt-3 mb-4">
                    <h3>Os Platforms</h3>
                    <ul>

                        <li>Windows</li>
                        <li>Linux</li>
                    </ul>
                </Col>

                <Col md={3} className="mt-3">
                    <h3>Languages</h3>
                    <ul>

                        <li>C</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>Node js</li>
                        <li>Php</li>
                    </ul>
                </Col>

                <Col md={3} className="mt-3">
                    <h3>Frameworks</h3>
                    <ul>

                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Express js</li>
                        <li>jQuery</li>
                    </ul>
                </Col>

                <Col md={3} className="mt-3">
                    <h3>Databases</h3>
                    <ul>

                        <li>Oracle</li>
                        <li>Firebase</li>
                        <li>Mongo DB</li>
                        <li>SQLite</li>
                    </ul>
                </Col>
            </Row>
            </div>
          
            
        </div>
    );
};



export default Skills;
