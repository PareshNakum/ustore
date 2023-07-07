import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BsArrowRight } from "react-icons/bs";


function Navbar6() {
    return (
        <div class="mt-2 mb-5 bgImg-summer">
            <Container>
                <Row>
                    <Col>
                        <span><label>Hello!</label> Extra <label>30% off</label> Online</span>
                        <h1>Hot Summer Sale</h1>
                        <p>Get free shipping on order over $99</p>
                        <button className='bttn'>Shop Now &nbsp; <i><BsArrowRight></BsArrowRight></i></button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Navbar6;