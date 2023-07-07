import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Nav1() {
    return (
        <>
            <div className="bgImg-contact">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-white fw-bolder text-center">Contact Us</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col>
                        <Breadcrumb className="pt-3">
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">
                                Contact Us
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
        </>
    )
}

export default Nav1;