import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

function Nav5() {
    return (
        <div className='spacer'>
            <Carousel variant="dark" md={12}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../web/image/about/asset 12.jpeg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Row>
                            <Col md={12} sm={12}>
                                <div className='why-slider-caption text-center'>
                                    <h6 className='text-success fw-bold mb-1 d-none d-md-block'>WHY CHOOES US</h6>
                                    <h4 className='text-white d-none d-md-block fw-bolder fs-2 mb-3'>Our Clients Say</h4>
                                    <div className='d-none d-xl-block'>
                                        <img src={require('../web/image/about/asset 4.png')}></img>
                                    </div>
                                    <p className='text-secondary d-none d-md-block'>This is simply the best WordPress theme for any kind of website. Just be patient when configuring. There are so many options and you can change everything without coding or technical knowledge. Seriously this is the most versatile and customizable theme, and on top of that, internq7 provides amazing support with quick response times. Thank you!</p>
                                    <i className='text-light d-none d-xl-block'><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar></i>
                                    <p className='text-white d-none fw-bolder d-xl-block'>Damianenco<br></br><label className='text-secondary'>Customer</label></p>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../web/image/about/asset 12.jpeg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Row>
                            <Col md={12} sm={12}>
                                <div className='why-slider-caption text-center'>
                                    <h6 className='text-success fw-bold mb-1 d-none d-md-block'>WHY CHOOES US</h6>
                                    <h4 className='text-white d-none d-md-block fw-bolder fs-2 mb-3'>Our Clients Say</h4>
                                    <div className='d-none d-xl-block'>
                                        <img src={require('../web/image/about/asset 4.png')}></img>
                                    </div>
                                    <p className='text-secondary d-none d-md-block'>This is simply the best WordPress theme for any kind of website. Just be patient when configuring. There are so many options and you can change everything without coding or technical knowledge. Seriously this is the most versatile and customizable theme, and on top of that, internq7 provides amazing support with quick response times. Thank you!</p>
                                    <i className='text-light d-none d-xl-block'><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar></i>
                                    <p className='text-white d-none fw-bolder d-xl-block'>Damianenco<br></br><label className='text-secondary'>Customer</label></p>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default Nav5;