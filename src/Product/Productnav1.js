import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Productnav1() {
    return (
        <>
            <div className="bgImg-product">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-white fw-bolder text-center">Product Details</h1>
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
                                Shop
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="#">
                                Good stuff, Nutmeat
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="#">
                                Highly Nutritious Peanut
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
        </>
    )
}

export default Productnav1;