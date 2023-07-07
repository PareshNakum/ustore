import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AiFillFacebook, AiFillTwitterSquare, AiFillGooglePlusSquare, AiFillLinkedin,AiFillStar,AiOutlineStar } from "react-icons/ai";


function Footer() {
    return (
        <>

            <div className='bgBlack p-5 pb-0'>
                <Container>
                    <Row className='justify-content-evenly'>
                        <Col md={3} lg={3} className='text-muted me-3'>
                            <div className='footer-img mb-3'>
                                <img src={require('./image/asset 45.png')}></img>
                            </div>
                            <p>Fringilla urna porttitor rhoncus dolor purus luctus venenatis lectus magna fringilla diam maecenas ultricies mi eget mauris.</p>
                            <a>farmstore@example.com</a>
                        </Col>
                        <Col md={2} lg={2} className='text-muted'>
                            <h4 className='mb-3 text-white'>About</h4>
                            <li><a>About us</a></li>
                            <li><a>Order History</a></li>
                            <li><a>Returns</a></li>
                            <li><a>Custom Service</a></li>
                            <li><a>Terms & Conditions</a></li>
                        </Col>
                        <Col md={2} lg={2} className='text-muted'>
                            <h4 className='mb-3 text-white'>My Account</h4>
                            <li><a>Sign In</a></li>
                            <li><a>View Cart</a></li>
                            <li><a>My Wishlist</a></li>
                            <li><a>Track My Order</a></li>
                            <li><a>Help</a></li>
                        </Col>
                        <Col md={3} lg={3} className='text-muted'>
                            <h4 className='mb-3 text-white'>Customer Service</h4>
                            <li><a>Payment Methods</a></li>
                            <li><a>Money-back Guarantee!</a></li>
                            <li><a>Returns</a></li>
                            <li><a>Custom Service</a></li>
                            <li><a>Terms & Conditions</a></li>
                        </Col>
                        <hr className='text-white mt-2 mb-2'></hr>
                    </Row>
                    <Row>
                        <Col>
                            <div className='row footer-info2 d-flex justify-content-lg-between mb-1'>
                                <div className='col-sm-12 col-md-4 mt-2 text-sm-center'>
                                    <img src={require('./image/asset 46.png')}></img>
                                </div>
                                <div className='col-sm-12 col-md-4 mt-3 text-sm-center'>
                                    <p className='text-muted'>UDesign WordPress © 2023. All Rights Reserved</p>
                                </div>
                                <div className='col-sm-12 col-md-4 icons text-sm-center text-muted'>
                                    <i><AiFillFacebook></AiFillFacebook></i>
                                    <i><AiFillTwitterSquare></AiFillTwitterSquare></i>
                                    <i><AiFillGooglePlusSquare></AiFillGooglePlusSquare></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
export default Footer;