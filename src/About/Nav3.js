import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Nav3() {
    return (
        <div className='bg-what-we-do p-5'>
            <Container>
                <h5 className="text-center text-success fw-bold">WHAT WE DO</h5>
                <h3 className="text-center fw-bolder">Provide Perfect</h3>
                <Row className='g-2 text-center align-items-center'>
                    <Col md={6} lg={6}>
                        <div className="w-30 p-lg-4 bg-light shadow">
                            <h1 className="text-success">10+</h1>
                            <h4>Business Years</h4>
                            <p>Lorem ipsum dolor sit amet,<br></br> adipisci elit viverra.</p>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className="w-30 p-lg-4 bg-light shadow">
                            <h1 className="text-success">15</h1>
                            <h4>Awards Won</h4>
                            <p>Lorem ipsum dolor sit amet,<br></br> adipisci elit viverra.</p>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className="w-30 p-lg-4 bg-light shadow">
                            <h1 className="text-success">24hr</h1>
                            <h4>Support Available</h4>
                            <p>Lorem ipsum dolor sit amet,<br></br> adipisci elit viverra.</p>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className="w-30 p-lg-4 bg-light shadow">
                            <h1 className="text-success">99%</h1>
                            <h4>Happy Customers</h4>
                            <p>Lorem ipsum dolor sit amet,<br></br> adipisci elit viverra.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Nav3;