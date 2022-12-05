import React, { useContext } from "react";
import cartIcon from '../../images/CartIcon.png';
import { CartContext } from "../Context/CartContext";

const cartWidget = () => {
    const { cartTotalItemsAmount } = useContext(CartContext)
    return (
        <div className="cartIcon">
            <img src={ cartIcon } alt="cart-icon" ></img>
            <p className="cartNotification"> { cartTotalItemsAmount() } </p>
        </div>
    )
}

export default cartWidget;