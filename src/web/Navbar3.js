import Navbar from "./Navbar"

function Navbar3(){
    return(

        <div class="nav3-bgImg">
            <h5 className="pt-5 text-center text-success fs-6 fw-bolder">ABOUT US</h5>
            <h1 className="text-center">100% Natural, 100% Organic!</h1>
            <div class="row m-5 gx-lg-5">
                <div class="col-12 col-md-6 col-lg-6 w-md-100 cards text-lg-left p-4">
                    <img src={require('../web/image/nav1.png')}></img>
                    <h2 className="fs-5 p-2 fw-bolder">Always Fresh</h2>
                    <p className="p-2">We aim to providevarious products with manynutritions<br></br> to make delicious healthy diet and control your <br></br>weight and well-being.</p>
                    <button className="bttn">Read more</button>
                </div>
                <div class="col-12 col-md-6 col-lg-6 w-md-100 cards text-lg-end p-4">
                    <img src={require('../web/image/nav2.png')}></img>
                    <h2 className="fs-5 p-2 fw-bolder">Our Vision</h2>
                    <p className="p-2">We expands our store to serveral farms and<br></br> trying to get more and more products from<br></br> farmers and farms with quality.</p>
                    <button className="bttn">Read more</button>
                </div>
                <div class="col-12 col-md-6 col-lg-6 w-md-100 cards text-lg-left p-4">
                    <img src={require('../web/image/nav3.png')}></img>
                    <h2 className="fs-5 p-2 fw-bolder">Our Mission</h2>
                    <p className="p-2">We aim to provide various products with many<br></br> nutritions to make delicious healthy diet and<br></br> control your weight and well-being.</p>
                    <button className="bttn">Read more</button>
                </div>
                <div class="col-12 col-md-6 col-lg-6 w-md-100 cards text-lg-end p-4">
                    <img src={require('../web/image/nav4.png')}></img>
                    <h2 className="fs-5 p-2 fw-bolder">100% Natural</h2>
                    <p className="p-2">We always ordered products from organic<br></br> farms, to ensure that all products are perfectly<br></br> natural and absolutely organic.</p>
                    <button className="bttn">Read more</button>
                </div>
            </div>
        </div>

    )
}

export default Navbar3;