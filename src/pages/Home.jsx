import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

import { SiCss3, SiExpress, SiHtml5, SiJavascript, SiPostgresql, SiReact } from "react-icons/si";
import { Link } from "react-router-dom";


function Home() {
    const iconSize = 100;

    return (
        <Container>
            <Row>
                <Col sm={4} className='p-2'>
                    <Container >
                        <h1 className="mt-5" style={{ fontWeight: 'bolder' }}>Hi! I'm <Button className="bg-dark border-dark"> UI/UX</Button></h1>
                        <h1 style={{ fontWeight: 'bolder' }}>Edgar Espinoza</h1>

                        <h5>Developing full stack web applications for over <span style={{ fontWeight: 'bolder' }}>2 years.</span> </h5>
                    </Container>

                    <Row className="p-3">
                        <Col className="d-grid ">
                            <Link to={"/portfolio/my-resume"}><Button size="lg" variant="outline-info">See my Resumee</Button></Link>                            </Col>
                    </Row>

                    <Container className="mt-3" style={{ minWidth: '100vh' }}>
                        <h4 style={{ fontWeight: 'bolder' }}>Contact</h4>
                        <h5>edgar.esp.carrion@gmail.com</h5>
                    </Container>

                    <Container className="mt-5" style={{ minWidth: '100vh' }}>
                        <h4 style={{ fontWeight: 'bolder' }}>LinkedIn</h4>
                        <Link to={'https://shorturl.at/irAR3'} target='_blank' style={{ textDecoration: 'none' }}><h5 >edgarespnz</h5></Link>
                    </Container>

                    <Container className="mt-5" style={{ minWidth: '100vh', fontStyle: 'oblique'}}>
                        <h5 className="text-warning" style={{ fontWeight: 'bolder' }}>Note</h5>
                        <p style={{columnCount: '3'}}>This project is made only for desktop 
                            , it will possibly break on Mobile</p>
                    </Container>


                </Col>

                <Col className="bg-light" sm={8} style={{ minHeight: '91vh' }}>
                    <h2 className="text-center mt-5">I've created this portfolio using the following technologies.</h2>
                    <Row className="p-5">
                        <Col className="d-flex  justify-content-around" >

                            <SiReact size={iconSize} />
                            <SiJavascript size={iconSize} />
                            <SiHtml5 size={iconSize} />

                        </Col>
                    </Row>

                    <Row className="p-5 mt-5">
                        <Col className="d-flex  justify-content-around" >

                            <SiCss3 size={iconSize} />
                            <SiExpress size={iconSize} />
                            <SiPostgresql size={iconSize} />

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default Home;