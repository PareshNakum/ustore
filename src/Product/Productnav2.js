import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import { AiFillStar, AiOutlineShoppingCart, AiOutlineHeart,AiOutlineInstagram } from "react-icons/ai";
import { GiInjustice } from "react-icons/gi";
import { ImPinterest2 } from "react-icons/im";
import { CiTwitter, CiFacebook,CiLinkedin } from "react-icons/ci";

function Productnav2() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="d-lg-flex justify-content-lg-between justify-content-center">
                            <div className="Product-Img p-3">
                                <img src={require('../web/image/product/asset 4.jpeg')}></img>
                            </div>
                            <div className="product-info p-3">
                                <h3 className="fs-2 fw-bolder mb-3">Highly Nutritious Peanut</h3>
                                <i className="text-warning"><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar>&nbsp;&nbsp;(2)</i>
                                <p className="mt-3 text-secondary">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.Sed lectus te et vulputate aucibus adipiscing. Sed lectus. us adipiscing. Sed lectus.</p>
                                <p className="text-secondary"><h5>Categories :</h5> Good Stuff, Nutmeat</p>
                                <h1 className="text-success fw-bolder">$78.64</h1>
                                <button className="bttn"><i><AiOutlineShoppingCart></AiOutlineShoppingCart></i>&nbsp; Add to Cart</button>
                                <div className="product-like d-flex pt-2 text-secondary">
                                    <div className="product-like-info d-flex me-3">
                                        <i className="me-2"><AiOutlineHeart></AiOutlineHeart></i>
                                        <p className="p-1"> Add to wishlist</p>
                                    </div>
                                    <div className="product-like-info d-flex">
                                        <i className="me-2"><GiInjustice></GiInjustice></i>
                                        <p className="p-1">Compare</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="product-icons">
                                    <i className="text-primary"><CiFacebook></CiFacebook></i>
                                    <i className="text-info"><CiTwitter></CiTwitter></i>
                                    <i className="text-warning"><ImPinterest2></ImPinterest2></i>
                                    <i className="text-danger"><AiOutlineInstagram></AiOutlineInstagram></i>
                                    <i className="text-primary"><CiLinkedin></CiLinkedin></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Productnav2;