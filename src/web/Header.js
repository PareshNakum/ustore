import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { Link } from "react-router-dom";

import { RxEnvelopeClosed } from "react-icons/rx";
import { HiOutlineClock } from "react-icons/hi2";
import { AiOutlineInfoCircle, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineNewLabel } from "react-icons/md";

function Header() {
    return (

        <>
            {/* ----start Header-----*/}
            <header>
                <hr></hr>
                <Container>
                    <Row>
                        <Col xs={12} md={6} sm={12} className='top-header1 d-none d-sm-block text-sm-center text-md-start text-xs-center'>
                            <i className='me-2'><RxEnvelopeClosed></RxEnvelopeClosed></i>
                            <label>to@example.com</label>

                            <div className='vr'></div>

                            <i className='me-2'><HiOutlineClock></HiOutlineClock></i>
                            <label>Mon – Sat 8:00 – 18:00, Sunday-CLOSED</label>

                        </Col>
                        <Col xs={12} md={6} sm={12} md="auto" className='top-header2 d-none d-sm-block text-sm-center text-md-start text-xs-center ms-auto'>
                            <i className='me-2'><AiOutlineInfoCircle></AiOutlineInfoCircle></i>
                            <label>Need Help</label>
                            <div className='vr'></div>
                            <i className='me-2'><CgProfile></CgProfile></i>
                            <label>Sign In / Register</label>
                            <div className='vr'></div>
                            <i><FiFacebook></FiFacebook></i>
                            <div className='vr'></div>
                            <i><FiTwitter></FiTwitter></i>
                            <div className='vr'></div>
                            <i><FiLinkedin></FiLinkedin></i>
                        </Col>
                    </Row>
                </Container>
                <hr className='d-none d-sm-block'></hr>
            </header>
            <header>
                <Container>
                    <Row>
                        <Col sm={3} md={2} lg={2} xxs={12} className='logo-header text-center'>
                            <img src={require('../web/image/asset 0.png')}></img>
                        </Col>
                        <Col sm={4} md={7} lg={7} xxs={12} className='search-button'>
                            <Form className="d-flex w-lg-25">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Col>
                        <Col sm={5} md={3} lg={3} xxs={12} md="auto" className='cart-buttons d-flex justify-content-end justify-content-center'>
                            <i><IoCallOutline></IoCallOutline></i>
                            <div className='vr'></div>
                            <i><AiOutlineHeart></AiOutlineHeart></i>
                            <div className='vr'></div>
                            <div className='d-flex'>
                                <div className='shopping d-xs-none d-md-none d-lg-block'>
                                    <label>Shopping Cart:</label>
                                    <p className='fw-bolder text-success'>$0.00</p>
                                </div>
                                <i><BsBag></BsBag></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                <Container>
                    <Row className='d-flex'>
                        <Col className='justify-content-xs-center'>
                            <Navbar expand="lg" className='main-menu'>
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                                            <Nav.Link href="#link"><Link to="/About">About</Link></Nav.Link>
                                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Shop Page</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    Product Page
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Miscellaneous</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                            </NavDropdown>
                                            <Nav.Link href="#link"><Link to="/Product">Product</Link></Nav.Link>
                                            <Nav.Link href="#link"><Link to="/Blog">Blog</Link></Nav.Link>
                                            <Nav.Link href="#link"><Link to="/Contact">Contact Us</Link></Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                        <Col>
                            <div className='d-flex discount align-middle justify-content-xxs-center justify-content-md-end'>
                                <div className='d-flex track'>
                                    <i><CiLocationOn></CiLocationOn></i>
                                    <label className='d-none d-md-block d-lg-block'>Track Order</label>
                                </div>
                                <div className='d-flex deals'>
                                    <i><MdOutlineNewLabel></MdOutlineNewLabel></i>
                                    <label className='d-none d-md-block d-lg-block'>Daily Deals</label>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            {/*------- End Header ------*/}
        </>


    )
}
export default Header;