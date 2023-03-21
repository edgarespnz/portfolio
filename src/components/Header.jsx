import React from "react";
import Container from 'react-bootstrap/esm/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Github, Linkedin} from 'react-bootstrap-icons';
import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <NavBar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavBar.Brand href='/' >
                        <img
                            src='logo192.png'
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            style={{marginRight: '5px'}}
                        />
                        DQ Tech
                    </NavBar.Brand>
                    
                    <Nav className="d-flex align-items-center">
                    <Link to={'/contact'} style={{textDecoration: 'none'}} ><Nav.Item className="text-secondary" >Contact</Nav.Item></Link>
                    <Link to={'/'} target="_blank" download={'edgar_espinoza_resume.pdf'} style={{textDecoration: 'none' , marginLeft: '25px'}} ><Nav.Item className="text-secondary">Download my resume</Nav.Item></Link>
                        <NavDropdown title="Projects" style={{marginLeft: '1.5rem'}} >
                            <NavDropdown.Item href="/searchbar" >Word Searchbar</NavDropdown.Item>
                            <NavDropdown.Item href= 'todolist'> To do List</NavDropdown.Item>
                            <NavDropdown.Item href='/musicplayer'> Music Player</NavDropdown.Item>
                        </NavDropdown>
                    <Nav.Item style={{marginLeft: '1.5rem'}}><Link to={'https://github.com/edgarespnz?tab=repositories'} target="_blank" ><Github color="white" size={25}/></Link></Nav.Item>
                    <Nav.Item style={{marginLeft: '1.5rem'}}><Linkedin color="white" size={25}/></Nav.Item>
                    </Nav>
                </Container>
            </NavBar>
            <Container>

            </Container>
        </>
    );
}
export default Header;