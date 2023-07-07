import Footer from "../web/footer";
import Header from "../web/Header";
import React from 'react';
import Productnav1 from "./Productnav1";
import Productnav2 from "./Productnav2";
import Productnav3 from "./Productnav3";

function Product(){
    return(
        <>
            <Header/>
            <Productnav1/>
            <Productnav2/>
            <Productnav3/>
            <Footer/>
        </>
    )
}

export default Product;