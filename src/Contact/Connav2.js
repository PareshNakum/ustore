import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { GoLocation } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { BiTime } from "react-icons/bi";
import { Routes, Route } from "react-router-dom";


function Nav2() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="d-lg-flex justify-content-between spacer">
                            <div>
                                <h1 className="fs-2 fw-bold">Contact Info</h1>
                                <p className="text-secondary">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem<br></br> quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis<br></br> sed odio sit amet nibh.</p>
                                <div className="contact-info d-flex mb-2">
                                    <i><GoLocation></GoLocation></i>
                                    <div className="ms-3">
                                        <h4>Udesign Address</h4>
                                        <address>123 Street Name, City, England</address>
                                    </div>
                                </div>
                                <div className="contact-info d-flex mb-2">
                                    <i><IoCallOutline></IoCallOutline></i>
                                    <div className="ms-3">
                                        <h4>Phone Number</h4>
                                        <address>(0)123-456-7890, (0)321-456-7890</address>
                                    </div>
                                </div>
                                <div className="contact-info d-flex align-content-center mb-2">
                                    <i><BiTime></BiTime></i>
                                    <div className="ms-3">
                                        <h4>Opening Hours</h4>
                                        <address>Mon - Sat / 8:00 - 18:00</address>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="fs-2 fw-bold">Send us Message</h1>
                                <p className="text-secondary">Your email address will not be published. Required fields are marked.</p>
                                <div>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>
                                        <Button variant="success" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="App">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.1993960357!2d-0.119554!3d51.503297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1678177953973!5m2!1sen!2sus" className="w-100 h-100"></iframe>
                </div>
            </Container>
            
        </>
    )
}

export default Nav2;