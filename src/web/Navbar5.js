import { BsArrowRight } from "react-icons/bs";

function Navbar5() {
    return (
        <>
            <div class="spacer">
                <div class="row m-5 mt-0 g-3">
                    <div class="col-lg-4 col-md-12  new1">
                        <div className="new1-img">
                            <img src={require('./image/asset 18.jpeg')} className='w-100'></img>
                        </div>
                        <div className='new1-info'>
                            <h2 className="fs-md-3 fw-md-bolder">FROZEN NEW</h2>
                            <p className="fs-md-6">STARTING AT $29</p>
                            <hr></hr>
                            <button className='bttn'>Shop Now &nbsp; <i><BsArrowRight></BsArrowRight></i></button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 new2">
                        <div className="new2-img">
                            <img src={require('./image/asset 19.jpeg')} className='w-100'></img>
                        </div>
                        <div className='new2-info'>
                            <h2 className="fs-md-6 fw-bolder text-success">FROM UFARM</h2>
                            <p className="fs-md-2 fw-bolder text-white">New arrivals</p>
                            <button className='bttn'>Shop Now &nbsp; <i><BsArrowRight></BsArrowRight></i></button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 new3">
                        <div className="new3-img">
                            <img src={require('./image/asset 20.jpeg')} className='w-100'></img>
                        </div>
                        <div className='new3-info text-start'>
                            <h2 className="fs-md-3 fw-bolder">FROZEN NEW</h2>
                            <p className="fs-md-6">STARTING AT $29</p>
                            <hr></hr>
                            <button className='bttn'>Shop Now &nbsp; <i><BsArrowRight></BsArrowRight></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Navbar5;