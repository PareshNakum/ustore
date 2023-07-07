
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { BsCheckLg, BsArrowRight } from "react-icons/bs";
import Image from 'react-bootstrap/Image'

function Nav4() {
    return (
        <>
            <Container className="spacer">
                <Row>
                    <Col lg={12} sm={12}>
                        <div className="who-info p-2 d-lg-flex justify-content-lg-between">
                            <div className="why-info-right align-self-center">
                                <p className="h5 text-success fw-bolder mb-3">WHY CHOOSE US</p>
                                <h3 className="fs-2 fw-bolder mb-3">Our Services</h3>
                                <p className="fs-6 text-secondary mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed addo eiadipiu doeiusmod temport ut labore et dolore and mag eadipi aner ermt leabor magna in aliqua. Venenatis tellus in metus vulpue...</p>
                                <div>
                                    <p className="text-success fw-bold">Performance 86%</p>
                                </div>
                                <div>
                                    <p className="text-success fw-bold">Average Improvements 98%</p>
                                </div>
                                <div>
                                    <p className="text-success fw-bold">Promotion 69%</p>
                                </div>
                            </div>
                            <div className="why-img">
                                <img src={require('../web/image/about/asset 3.jpeg')}></img>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Nav4;