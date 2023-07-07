import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
function Navbar7() {
    return (
        <>
            <div class="spacer">
                <div class="row m-5 mt-0 g-3">
                    <h4 className='text-center text-success fw-bold'>LATEST STORE</h4>
                    <h2 className='text-center mt-1 text-dark fw-bolder'>Recent Articles</h2>
                    <div class="col-lg-4 col-md-12  article1 shadow-sm">
                        <div className="article1-img">
                            <img src={require('./image/asset 32.jpeg')} className='w-100'></img>
                        </div>
                        <div className='article1-info p-5'>
                            <p className="text-muted mb-2">19 September 2021</p>
                            <h4 className="mb-2">Tropical fruit mix smoothie</h4>
                            <span className="text-muted mb-2">Lorem ipsum dolor sit amet, consectetuer<br></br> adipiscing elit. Phasellus hendrerit.<br></br> Pellentesque aliquet nibh nec urna...</span>
                            <div className="d-flex mt-2 justify-content-between">
                                <h6>by <span className="fw-bolder">Jhon Doe</span></h6>
                                <div className="d-flex justify-content-between">
                                    <i><AiOutlineHeart></AiOutlineHeart></i>&nbsp;<span className="fw-bolder">0</span>&nbsp;
                                    <i><FaRegComment></FaRegComment></i>&nbsp;<span className="fw-bolder">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12  article1 shadow-sm">
                        <div className="article1-img">
                            <img src={require('./image/asset 33.jpeg')} className='w-100'></img>
                        </div>
                        <div className='article1-info p-5'>
                            <p className="text-muted mb-2">19 September 2021</p>
                            <h4 className="mb-2 fs-5">True Farm: The story of one farmer</h4>
                            <span className="text-muted mb-2">Lorem ipsum dolor sit amet, consectetuer<br></br> adipiscing elit. Phasellus hendrerit.<br></br> Pellentesque aliquet nibh nec urna...</span>
                            <div className="d-flex mt-2 justify-content-between">
                                <h6>by <span className="fw-bolder">Jhon Doe</span></h6>
                                <div className="d-flex justify-content-between">
                                    <i><AiOutlineHeart></AiOutlineHeart></i>&nbsp;<span className="fw-bolder">1</span>&nbsp;
                                    <i><FaRegComment></FaRegComment></i>&nbsp;<span className="fw-bolder">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12  article1 shadow-sm">
                        <div className="article1-img">
                            <img src={require('./image/asset 34.jpeg')} className='w-100'></img>
                        </div>
                        <div className='article1-info p-5'>
                            <p className="text-muted mb-2">19 September 2021</p>
                            <h4 className="mb-2 fs-5">Cooking together: ORGANIC SPICES</h4>
                            <span className="text-muted mb-2">Lorem ipsum dolor sit amet, consectetuer<br></br> adipiscing elit. Phasellus hendrerit.<br></br> Pellentesque aliquet nibh nec urna...</span>
                            <div className="d-flex mt-2 justify-content-between">
                                <h6>by <span className="fw-bolder">Jhon Doe</span></h6>
                                <div className="d-flex justify-content-between">
                                    <i><AiOutlineHeart></AiOutlineHeart></i>&nbsp;<span className="fw-bolder">0</span>&nbsp;
                                    <i><FaRegComment></FaRegComment></i>&nbsp;<span className="fw-bolder">0</span>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </>

    )
}

export default Navbar7;