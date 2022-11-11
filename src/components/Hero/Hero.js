import React from "react";
import banner from './img-cocina-1.jpg'

const Hero = ( { greeting }) => {
    return (
        <div className="hero">
            <img src={banner} className="banner-img" alt="mueble-cocina"></img>
            <h1 className="title-greeting">ÉBANO MUEBLES</h1>
            <p className="p-greeting">{ greeting }</p>
        </div>
    )
}

export default Hero;