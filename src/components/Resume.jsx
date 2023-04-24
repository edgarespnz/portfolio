import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FaReact } from 'react-icons/fa'
import { DiJavascript1, DiHtml5, DiCss3, DiPostgresql, DiWordpress } from 'react-icons/di';
import { SiBootstrap, SiOracle } from 'react-icons/si'
import { Link } from 'react-router-dom';

export default function Resume() {
    let iconSize = 20;

    return (
        <div className="main d-flex">
            <Container className='p-5 '>
                <Row className='rounded' style={{ minHeight: '300px', maxHeight: 'fit-content', fontFamily: 'montserrat' }}>
                    <Col className='bg-light' sm={4}>
                    </Col>

                    <Col className='bg-white' sm={8}>
                        <div className="title bg-white border border-dark text-center" style={{ maxWidth: 'fit-content', padding: '5rem', marginLeft: '-150px', marginTop: '50px' }}>
                            <h2 className=' text-uppercase' style={{ letterSpacing: '3px', fontWeight: '900' }}>Edgar Espinoza</h2>
                            <h5 className='text-secondary text-uppercase' style={{ letterSpacing: '5px' }}>System Engineering</h5>
                        </div>
                    </Col>
                </Row>

                <Row className='rounded' style={{ fontFamily: 'montserrat'}}>
                    <Col className='bg-light' sm={4}>
                        <ul className='p-3' style={{ listStyleType: 'none', letterSpacing: '3px' }}>
                            <li>
                                <li className='mb-3' style={{ borderBottom: '2px solid black' }}>
                                    <h3 className='text-uppercase' style={{ fontSize: 'large' }}>Details</h3>
                                </li>
                                <h4 style={{ fontSize: 'small', color: 'black', fontWeight: 'bold' }}>Adress</h4>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>Park City</h5>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>United States</h5>

                                <li className='mt-4'>
                                    <h4 style={{ fontSize: 'small', color: 'black', fontWeight: 'bold' }}>Phone</h4>
                                    <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>385 433 8846 / +51 923496702</h5>
                                </li>

                                <li className='mt-4'>
                                    <h4 style={{ fontSize: 'small', color: 'black', fontWeight: 'bold' }}>Email</h4>
                                    <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' , overflowWrap: 'break-word' }} className='text-secondary'>
                                        edgar.esp.carrion@gmail.com
                                    </h5>
                                </li>

                                <li className='mt-4'>
                                    <h4 style={{ fontSize: 'small', color: 'black', fontWeight: 'bold' }}>GitHub</h4>
                                    <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' , overflowWrap: 'break-word' }} className='text-secondary'>
                                        <Link to={"https://github.com/edgarespnz"} target='_blank'>https://github.com/edgarespnz</Link>
                                    </h5>
                                </li>

                            </li>
                        </ul>

                        <ul className='p-3' style={{ listStyleType: 'none', letterSpacing: '3px' }}>
                            <li>
                                <li className='mb-3' style={{ borderBottom: '2px solid black' }}>
                                    <h3 className='text-uppercase' style={{ fontSize: 'large' }}>Skills</h3>
                                </li>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>React <FaReact size={iconSize} /></h5>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>JavaScript <DiJavascript1 size={iconSize} /></h5>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>HTML & CSS <DiHtml5 size={iconSize} /> <DiCss3 size={iconSize} /></h5>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>Bootstrap <SiBootstrap size={iconSize} /></h5>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>PostgreSQL <DiPostgresql size={iconSize} /></h5>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>WordPress <DiWordpress size={iconSize} /></h5>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>Oracle <SiOracle size={iconSize} /></h5>
                            </li>
                        </ul>

                        <ul className='p-3' style={{ listStyleType: 'none', letterSpacing: '3px' }}>
                            <li>
                                <li className='mb-3' style={{ borderBottom: '2px solid black' }}>
                                    <h3 className='text-uppercase' style={{ fontSize: 'large' , overflowWrap: 'break-word' }}>Languages</h3>
                                </li>
                              
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>English {'(fluent)'}</h5>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>Spanish  {'(native)'}</h5>
                            </li>
                        </ul>
                    </Col>

                    <Col className='bg-white' sm={8}>
                        <ul className='p-3' style={{ listStyleType: 'none', letterSpacing: '3px' }}>
                            <li>
                                <li className='mb-3' style={{ borderBottom: '2px solid black' }}>
                                    <h3 className='text-uppercase' style={{ fontSize: 'large' }}>Profile</h3>
                                </li>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>
                                    System engineer student with experience on full stack web applications development using React
                                    , Bootstrap , HTML & CSS  , JavaScript , Node.JS and PostgreSQL. Adept at developing and deploying complex
                                    full stack applications , web services and databases.
                                </h5>
                            </li>
                        </ul>

                        <ul className='p-3' style={{ listStyleType: 'none', letterSpacing: '3px' }}>
                            <li>
                                <li className='mb-3' style={{ borderBottom: '2px solid black' }}>
                                    <h3 className='text-uppercase' style={{ fontSize: 'large' }}>Employment History</h3>
                                </li>

                                <h4 style={{ fontSize: 'small', color: 'black', fontWeight: 'bold' }}>Full Stack Web Developer  , Selltech Nutrition</h4>
                                <h4 style={{ fontSize: 'small', color: 'black', fontWeight: 'bold' }} className='text-secondary'>August 2022 - Mar 2023</h4>

                                <ul>
                                    <li>
                                        <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>
                                            Used JavaScript , React , HTML , CSS and PostgreSQL to develop the full e-commerce website.
                                        </h5>
                                    </li>

                                    <li>
                                        <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>
                                            Mantained the infrastructure to implement new features and plan for future services or requirements.
                                        </h5>
                                    </li>

                                    <li>
                                        <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>
                                            Reviewed code  , debugged problems and corrected issues.
                                        </h5>
                                    </li>

                                </ul>

                                <h4 className='mt-5' style={{ fontSize: 'small', color: 'black', fontWeight: 'bold' }}>Freelance Web Developer  , AnimalShop Peru</h4>
                                <h4 style={{ fontSize: 'small', color: 'black', fontWeight: 'bold' }} className='text-secondary'>July 2022 - March 2023</h4>

                                <ul>
                                    <li>
                                        <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>
                                            Developed all the front-end website using React and Bootstrap.
                                        </h5>
                                    </li>

                                    <li>
                                        <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>
                                            Developed an automatized process to backup the customer data daily on wordpress.
                                        </h5>
                                    </li>

                                    <li>
                                        <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>
                                            Collaborated with the marketing team to stablish advertisement goals  , projections and milestones.
                                        </h5>
                                    </li>

                                    <li>
                                        <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>
                                            SEO writing to reach good positioning at google ads.
                                        </h5>
                                    </li>

                                </ul>

                            </li>
                        </ul>

                        <ul className='p-3' style={{ listStyleType: 'none', letterSpacing: '3px' }}>
                            <li>
                                <li className='mb-3' style={{ borderBottom: '2px solid black' }}>
                                    <h3 className='text-uppercase' style={{ fontSize: 'large' }}>Education</h3>
                                </li>
                                <h4 style={{ fontSize: 'small', color: 'black', fontWeight: 'bold' }}>4th year,  University of Lima</h4>
                                <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>August 2016 - August 2024</h5>
                            </li>
                            <ul>
                                <li>
                                    <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>
                                        Currently enrolled in system engineering , 4th year  , estimated graduation year 2024.
                                    </h5>
                                </li>

                                <li>
                                    <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>
                                        Recognized as part of the upper middle in average grades all over the faculty.
                                    </h5>
                                </li>

                                <li>
                                    <h5 style={{ fontSize: 'small', color: 'black', fontWeight: 'light' }} className='text-secondary'>
                                        Member of computer science programming team.
                                    </h5>
                                </li>

                            </ul>
                        </ul>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}
