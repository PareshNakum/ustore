import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiMail } from "react-icons/ci";


function Navbar8() {
    return (

        <Container>
            <Row>
                <Col>
                    <div className="bgImg-news p-3 mb-5 d-md-flex justify-content-evenly">
                        <div className="text-success newsletter-info text-sm-center mb-sm-2">
                            <i className="me-2 fs-lg-1 text-white"><CiMail></CiMail></i>
                            <label className="fs-lg-3 fw-bolder text-white">SIGN UP TO OUR NEWSLETTER</label>
                        </div>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar8;