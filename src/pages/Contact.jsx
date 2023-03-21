import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Envelope, Google } from "react-bootstrap-icons";
import { useState } from "react";

const logoSize = 35;

function Contact() {

    const [message, setMessage] = useState("")
   

    return (
        <main className="d-flex  align-items-center justify-content-center p-5 " style={{ backgroundColor: 'rgb(40, 44, 52)', height: '92.5vh' }}>
            <Container className="w-100 p-3 bg-white rounded border border-0" style={{ maxWidth: '700px' }}>
                <Row>
                    <Col className="col-sm-4 d-flex flex-column justify-content-center" style={{ borderRight: '0.3rem solid' }}>
                        <p className="font-weight-bold text-center">This form was made with: </p>

                        <div className="d-flex align-items-center justify-content-evenly mt-3">
                            <Google width={logoSize} height={logoSize} />
                            <Image src="logo192.png" width={logoSize + 10} height={logoSize + 10} />
                            <Image src="icons8-firebase-120.png" width={logoSize + 10} height={logoSize + 10}/>
                        </div>
                    </Col>

                    <Col className="col-sm-8" >
                        <Form>
                            <h1>Send me a message! <Envelope /></h1>
                            <Form.Group>
                                <Form.Label >Name or Company Name</Form.Label>
                                <Form.Control className="mb-3" type="text" placeholder="Your Name" />

                                <Form.Label>Email Address </Form.Label>
                                <Form.Control className="mb-3" type="email" placeholder="example@gmail.com" />

                                <Form.Label> Message </Form.Label>
                                <Form.Control style={{ maxHeight: '10rem' }} className="mb-3" as='textarea'
                                    rows={3} placeholder="I like your job! i would like to talk to you about an oportunity " 
                                    value={message}
                                    onChange={message.length < 500 ? (evt)=>(setMessage(evt.target.value)) : setMessage("")}
                                />

                                <div className="d-grid"><Button size="lg">Send Message</Button></div>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Contact;