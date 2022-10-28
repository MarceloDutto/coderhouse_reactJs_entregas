import React from "react";
import image from './img-cocina-1.jpg'


const ItemListContainer = ({greeting}) => {
    return (
        <div className="containerItemList">
            <img src={image} className="banner-img" alt="mueble-cocina"></img>
            <h1 className="title-greeting">ÉBANO MUEBLES</h1>
            <p className="p-greeting">{ greeting }</p>
        </div>
    )
}

export default ItemListContainer;