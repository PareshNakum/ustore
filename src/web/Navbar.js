import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Navbar() {
    return (
        <div class="spacer">
            <div class="row m-5 gx-s">
                <div class="col w-50 cards text-center shadow-sm">
                    <img src={require('../web/image/fruits.png')}></img>
                    <h2 className="fs-5 p-2 fw-bolder">100% Natural</h2>
                    <p className="p-2">Instant transport from organic farms and sale in store</p>
                </div>
                <div class="col w-50 cards text-center shadow-sm">
                    <img src={require('../web/image/fruits2.png')}></img>
                    <h2 className="fs-5 p-2 fw-bolder">Best Quality</h2>
                    <p className="p-2">Nutritious and Natural food will be on your dishes</p>
                </div>
                <div class="col w-50 cards text-center shadow-sm">
                    <img src={require('../web/image/fruits3.png')}></img>
                    <h2 className="fs-5 p-2 fw-bolder">Free Shipping & Return</h2>
                    <p className="p-2">Provide free shipping and return on orders as you wish</p>
                </div>
                <div class="col w-50 cards text-center shadow-sm">
                    <img src={require('../web/image/fruits4.png')}></img>
                    <h2 className="fs-5 p-2 fw-bolder">Secure Payment</h2>
                    <p className="p-2">We ensure secure payment through Paypal, Bitcoin and so on</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar;