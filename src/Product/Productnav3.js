import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillFacebook, AiFillTwitterSquare, AiFillGooglePlusSquare, AiFillLinkedin,AiFillStar,AiOutlineStar } from "react-icons/ai";

function Productnav3() {
    return (

        <div class="pb-4">
            <h1 class="text-center text-dark">Related Products</h1>
            <div class="container pt-3 pb-4">
                <div class="row g-4">
                    <div class="product col-lg-3 col-sm-6">
                        <div class="sell text-center">
                            <img src={require('../web/image/asset 9.jpeg')} class="card-img-top w-100" alt="..."></img>
                            <div class="cart-body">
                                <button className='btn1'><span>Quick View</span></button>
                            </div>
                            <div className='icons1'>
                                <p><AiFillFacebook></AiFillFacebook>
                                    <AiFillTwitterSquare></AiFillTwitterSquare>
                                    <AiFillGooglePlusSquare></AiFillGooglePlusSquare>
                                    <AiFillLinkedin></AiFillLinkedin></p>
                            </div>
                        </div>
                        <div>
                            <h6 className="pt-2 text-center">High Grade Walnut</h6>
                            <h6 className="text-center"><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiOutlineStar></AiOutlineStar> &nbsp;&nbsp; (4)</h6>
                            <p className="fs-6 fw-bolder hover:d-none text-center">$90.32 &nbsp;<del className="text-secondary">%100.54</del></p>
                        </div>
                    </div>
                    <div class="product col-lg-3 col-sm-6">
                        <div class="sell text-center">
                            <img src={require('../web/image/asset 11.jpeg')} class="card-img-top w-100" alt="..."></img>
                            <div class="cart-body">
                                <button className='btn2'><spna>Quick View</spna></button>
                            </div>
                            <div className='icons2'>
                                <p><AiFillFacebook></AiFillFacebook>
                                    <AiFillTwitterSquare></AiFillTwitterSquare>
                                    <AiFillGooglePlusSquare></AiFillGooglePlusSquare>
                                    <AiFillLinkedin></AiFillLinkedin></p>
                            </div>
                        </div>
                        <div>
                            <h6 className="pt-2 text-center">Greenhouse Bean</h6>
                            <h6 className="text-center"><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiOutlineStar></AiOutlineStar> &nbsp;&nbsp; (4)</h6>
                            <p className="fs-6 fw-bolder hover:d-none text-center">$15.45</p>
                        </div>
                    </div>
                    <div class="product col-lg-3 col-sm-6">
                        <div class="sell text-center">
                            <img src={require('../web/image/asset 13.jpeg')} class="card-img-top w-100" alt="..."></img>
                            <div class="cart-body">
                                <button className='btn3'><span>Quick View</span></button>
                            </div>
                            <div className='icons3'>
                                <p><AiFillFacebook></AiFillFacebook>
                                    <AiFillTwitterSquare></AiFillTwitterSquare>
                                    <AiFillGooglePlusSquare></AiFillGooglePlusSquare>
                                    <AiFillLinkedin></AiFillLinkedin></p>
                            </div>
                        </div>
                        <div>
                            <h6 className="pt-2 text-center">HIgh Nutritious Peanut</h6>
                            <h6 className="text-center"><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar> &nbsp;&nbsp; (5)</h6>
                            <p className="fs-6 fw-bolder hover:d-none text-center">$78.64</p>
                        </div>
                    </div>
                    <div class="product col-lg-3 col-sm-6">
                        <div class="sell text-center">
                            <img src={require('../web/image/asset 15.jpeg')} class="card-img-top w-100" alt="..."></img>
                            <div class="cart-body">
                                <button className='btn4'><span>Quick View</span></button>
                            </div>
                            <div className='icons4'>
                                <p><AiFillFacebook></AiFillFacebook>
                                    <AiFillTwitterSquare></AiFillTwitterSquare>
                                    <AiFillGooglePlusSquare></AiFillGooglePlusSquare>
                                    <AiFillLinkedin></AiFillLinkedin></p>
                            </div>
                        </div>
                        <div>
                            <h6 className="pt-2 text-center">Organic Nut</h6>
                            <h6 className="text-center"><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiOutlineStar></AiOutlineStar> &nbsp;&nbsp; (4)</h6>
                            <p className="fs-6 fw-bolder hover:d-none text-center">$64.27</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Productnav3;