import React from "react";
import { Link } from "react-router-dom";
import emptyCartImg from './emptyCart-icon.png';


const EmptyCart = () => {
    return (
        <div className="cartEmpty-container">
            <img className="cartEmpty-img" src={emptyCartImg}></img>
            <h3 className="cartEmpty-text">El carrito de compras está vacío.</h3>
            <Link to="../productos" >
                <button className="cartEmpty-btn" >Ver productos</button>
            </Link>

        </div>
    )
}

export default EmptyCart;