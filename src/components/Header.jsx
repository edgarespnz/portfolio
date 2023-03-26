import React from "react";
import Container from 'react-bootstrap/esm/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Github, Linkedin} from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { SiReact } from "react-icons/si";


function Header() {
    return (
        <>
            <NavBar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavBar.Brand className="d-flex align-items-center justify-content-center" href='/portfolio' >
                        <SiReact  size={30}/>
                        <h2  style={{fontSize:'larger' , marginLeft: '10px'}}>Edgar</h2>
                    </NavBar.Brand>
                    
                    <Nav className="d-flex align-items-center">
                    <Link className="mr-5"  to={'/portfolio'} style={{textDecoration: 'none' , marginRight : '1.5rem'}} ><Nav.Item className="text-secondary" >Home</Nav.Item></Link>
                    <Link to={'/portfolio/contact'} style={{textDecoration: 'none'}} ><Nav.Item className="text-secondary" >Contact</Nav.Item></Link>
                    <Link to={'/portfolio/my-resume'} style={{textDecoration: 'none' , marginLeft: '25px'}} ><Nav.Item className="text-secondary">My resumee</Nav.Item></Link>
                        <NavDropdown title="Projects" style={{marginLeft: '1.5rem'}} >
                            <Link to={'/portfolio/searchbar'}><NavDropdown.Item >Word Searchbar</NavDropdown.Item></Link>
                            <Link to={'/portfolio/todolist'}><NavDropdown.Item > To do List</NavDropdown.Item></Link>
                            <Link to={'/portfolio/musicplayer'}><NavDropdown.Item > Music Player</NavDropdown.Item></Link>
                            
                            
                            
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