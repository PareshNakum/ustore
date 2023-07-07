import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navbar2() {
    return (

        <div class="pb-4">
            <h4 class="text-center fw-bold text-success">100% NATURAL</h4>
            <h1 class="text-center text-dark">Our Categories</h1>
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-3 col-sm-6">
                        <div class="card text-center">
                            <img src={require('../web/image/asset 4.jpeg')} class="card-img-top w-100" alt="..."></img>
                            <div class="card-body">
                                <button className='btn1'>Fresh Fruits</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card text-center">
                            <img src={require('../web/image/asset 5.jpeg')} class="card-img-top w-100" alt="..."></img>
                            <div class="card-body">
                                <button className='btn1'>Drink</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card text-center">
                            <img src={require('../web/image/asset 6.jpeg')} class="card-img-top w-100" alt="..."></img>
                            <div class="card-body">
                                <button className='btn1'>Vegetables</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card text-center">
                            <img src={require('../web/image/asset 7.jpeg')} class="card-img-top w-100" alt="..."></img>
                            <div class="card-body">
                                <button className='btn1'>Good Stuff</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Navbar2;