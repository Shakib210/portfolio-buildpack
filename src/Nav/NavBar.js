import React, { Component } from 'react'
import { Navbar,Nav} from 'react-bootstrap'
import '../App.css'


export class NavBar extends Component {
    render() {
        return (
            <div>
    <Navbar className="nav_bg" variant="dark">
    <div className="container">
    <Navbar.Brand href="/"><h3>Shakib</h3></Navbar.Brand>
    <Nav className="ml-auto">
    <Nav.Link href="/">About</Nav.Link>
    <Nav.Link onClick={this.props.skillHandler}>Skills</Nav.Link>
    <Nav.Link onClick={this.props.Projecthandler}>Project</Nav.Link>
    <Nav.Link href="#Contact">Contact me</Nav.Link>
    
    </Nav>
    </div>
  </Navbar>                
            </div>
        )
    }
}

export default NavBar
