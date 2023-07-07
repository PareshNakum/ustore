import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Main1() {
    return (
        <>
            <div className="bgImg-blog">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-white fw-bolder text-center">Blog</h1>
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
                                Blog
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
        </>
    )
}
export default Main1;