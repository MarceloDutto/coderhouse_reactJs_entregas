import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../Context/CartContext";
import EmptyCart from "./EmptyCart";
import './Styles.css';


const Cart = () => {
    const { cartContent, removefromCart, clearCart, cartTotalPrice } = useContext(CartContext);

    return (
        <div>
            { !cartContent.length > 0 ?
                <EmptyCart />
            :
                <>
                <div className="cart-container">
                <h3 className="cart-title">Carrito de compras</h3>
                <div className="cart-content">
                    <div className="cart-header">
                        <h4>Producto</h4>
                        <h4>Subtotal</h4>
                    </div> 
                    <div className="cart-list">
                        {cartContent && cartContent.map((prod) => (
                            <CartItem item={prod} removeItem={() =>removefromCart(prod.id) } key={prod.id} />
                        ))
                        }

                    </div>
                    <div className="cart-total">
                        <h4>Total</h4>
                        <h4> {Intl.NumberFormat("es-AR", {currency: "ARS", style:"currency"}).format(cartTotalPrice())} </h4>
                    </div>
                    <div className="cart-actions">
                        <Link to='/productos' >
                            <button className="btn-link">Ver más productos</button>
                        </Link>
                        <button className="btn-light" onClick={clearCart}>Vaciar carrito</button>
                        <Link to='/checkout' >
                            <button className="btn-action">Iniciar compra</button>
                        </Link>
                    </div>
                </div>
                </div>
                </>
            }
            
        </div>
    )
}

export default Cart;