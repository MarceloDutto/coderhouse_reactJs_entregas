import React from "react";
import { Link } from "react-router-dom";
import removeImage from './remove.png'

const CartItem = ( {item, removeItem} ) => {
    const { id, nombre, imagen, precio, quantity } = item;

    return (
        <div className="cartItem-container">
            <div className="cartItem-product">
                <div className="cartItem-img">
                    <img className="cartItem-img-img" src={imagen} alt={nombre}></img>
                </div>
                <div className="cartItem-detail">
                    <Link to={`/item/${id}`}>
                    <h3 className="cartItem-name"> {nombre} </h3>
                    </Link>
                    <h4 className="cartItem-price"> {Intl.NumberFormat("es-AR", {currency: "ARS", style:"currency"}).format(precio)} x {quantity} unidades</h4>
                </div>
            </div>
            <div className="cartItem-subtotal">
                <div className="cartItem-subtotal-price">
                    <h3> {Intl.NumberFormat("es-AR", {currency: "ARS", style:"currency"}).format(precio * quantity)} </h3>
                </div>
                <div className="cartItem-remove">
                    <img src={removeImage} onClick={() => removeItem()}></img>
                </div>
            </div>  
        </div>
    )
}

export default CartItem;