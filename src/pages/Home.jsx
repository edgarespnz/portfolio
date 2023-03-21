import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Image from 'react-bootstrap/Image'

function Home() {
    const iconsWidth = 100;
    const iconsHeight = 100;

    return (
        <main className='index-MastHead d-flex flex-column align-items-center justify-content-center' style={{ backgroundColor: '#282c34' , height: '92.5vh'}}>
                <Card className=" mb-4 p-2" style={{ margin: '15px'}} >
                    <Card.Body>
                        <Card.Title style={{ fontSize: 'xx-large' , fontWeight: 'bolder', textAlign:'center'}}>Welcome to my portfolio!</Card.Title>
                        <Card.Text style={{textAlign: 'center'}}>
                            In this page you will see all my skills , developments and real life projects that i've done
                        </Card.Text>
                       
                    </Card.Body>
                    <Container className="d-grid gap-2 mb-3">
                        <Button variant="dark" size="lg" href="/contact">Contact me</Button>
                        <Button variant="dark" size='lg' href="/my-resume">See my Resume</Button>
                    </Container>
                </Card>

                <Card className="m-2">
                    <Card.Body>
                        <Card.Text style={{fontSize: 'x-large', fontWeight: 'bold' ,textAlign: 'center'}}>
                            I've used all of this technologies for the development of this portfolio
                        </Card.Text>
                            <Col className="d-flex justify-content-around align-items-center mt-5">
                                <Image src="./logo192.png" rounded width={iconsWidth} height={iconsHeight} />
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab05l3ndGtZqyqxgTeOkmB7g2eDGyYrQp60gRu108tIEXOLQTl8tf9Jpx90UiNJEIv1Q&usqp=CAU" rounded width={iconsHeight} height={iconsHeight} />
                                <Image src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" rounded width={iconsHeight} height={iconsHeight} />

                            </Col>
                            <Col className="d-flex justify-content-around align-items-center mt-5">
                                <Image src="https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo" rounded width={iconsWidth} height={iconsHeight} />
                                <Image src="https://miro.medium.com/max/1400/1*XP-mZOrIqX7OsFInN2ngRQ.png" rounded  width={'fit-content'} height={iconsHeight} style={{minWidth: 'auto'}}/>
                                <Image src="https://audviklabs.in/wp-content/uploads/2022/01/postgreSQL.png" rounded width={'fit-content'} height={iconsHeight} style = {{minHeight: 'auto'}}/>

                            </Col>
                    </Card.Body>
                </Card>
        </main>
    );
}

export default Home;