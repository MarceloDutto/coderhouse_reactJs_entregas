import React from "react";
import cartIcon from './CartIcon.png';

const cartWidget = () => {
    return (
        <div className="cartIcon">
            <img src={ cartIcon } alt="cart-icon" ></img>
            <p className="cartNotification">0</p>
        </div>
    )
}

export default cartWidget;