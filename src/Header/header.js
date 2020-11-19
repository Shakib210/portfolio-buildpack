import React, { Component } from 'react'
import Pic from '../Image/image.jpg'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

class Header extends Component {
    render() {
        return (
           
                <section class="header-section" id="about">
                   <div class="center-div">
                    <img class="img-rounded" src={Pic} alt="" srcset="" />
                        <h3 class="font-weight-bold">Nazmus Shakib</h3>
                        <h4>Problem Solver | Web Developer | Engineer</h4>
                        <p>I am Nazmus Shakib.I count myself as a hardworking and punctual person.<br/>My passion is learning and creating. I find happiness in being <br/>
a better me today than yesterday.</p>
                        <p>Email: nshakib70@gmail.com</p>
                        <div class="header-icons" style={{marginBottom:"20px"}}>
                          <a href="https://github.com/Shakib210"><FontAwesomeIcon icon={faGithub } size="lg" /></a>
                          <a href="https://www.linkedin.com/in/nazmus-shakib-054297194/"><FontAwesomeIcon icon={faLinkedin } size="lg" /></a>
                          <a href="https://www.facebook.com/nazmusshakib70/"><FontAwesomeIcon icon={faFacebook } size="lg" /></a>
                        </div>

                    </div>
                        
                </section>
      
        )
    }
}

export default Header
