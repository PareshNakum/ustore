import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsArrowRight } from "react-icons/bs";
function Slider() {
    return (
        <Carousel variant="dark" md={12}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../web/image/asset 2.jpeg')}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Row>
                        <Col>
                            <div className='slider1-caption'>
                                <p>From ustore farm</p>
                                <h5>Fresh vegetables</h5>
                                <h3>for good health!</h3>
                                <span>100% natural & best quality in the market</span>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../web/image/asset 3.jpeg')}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <Row>
                        <Col>
                            <div className='slider2-caption'>
                                <p>From ustore farm</p>
                                <h5>Organic Store</h5>
                                <span>100% natural & best quality in the market</span><br></br>
                                <button className='bttn'>Shop Now &nbsp; <i><BsArrowRight></BsArrowRight></i></button>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;