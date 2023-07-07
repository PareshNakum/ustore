import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { BsCheckLg, BsArrowRight } from "react-icons/bs";

function Nav2() {
    return (
        <>
            <Container className="spacer">
                <Row>
                    <Col lg={12} sm={12}>
                        <div className="who-info p-2 d-lg-flex justify-content-lg-between">
                            <div className="who-img">
                                <img src={require('../web/image/about/asset 2.jpeg')}></img>
                            </div>
                            <div className="who-info-right align-self-center">
                                <p className="h5 text-success fw-bolder">WHO WE ARE</p>
                                <h3 className="fs-3 fw-bolder">The best trusted farms</h3>
                                <p className="fs-4">Join over <span className="text-success fw-bolder">50,000+</span> users who love it!</p>
                                <div className="who-check">
                                    <p className="fs-6 text-secondary"><i><BsCheckLg></BsCheckLg></i><span className="ms-2">Restaurant id cursus metus aliquam urnitues caisowne tellus.</span></p>
                                    <p className="fs-6 text-secondary"><i><BsCheckLg></BsCheckLg></i><span className="ms-2">Vel pretium lectus quam id in vitae turpis massa incididunt growing.</span></p>
                                    <p className="fs-6 text-secondary"><i><BsCheckLg></BsCheckLg></i><span className="ms-2">Eget sit amet tellus cras adipiscing enim eu prsonal ertion.</span></p>
                                    <p className="fs-6 text-secondary"><i><BsCheckLg></BsCheckLg></i><span className="ms-2">Tellus rutrum tellus pellentesque eu tincidunt.</span></p>
                                </div>
                                <div className="who-btn">
                                    <button className='bttn'>Contact Us &nbsp; <i><BsArrowRight></BsArrowRight></i></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Nav2;