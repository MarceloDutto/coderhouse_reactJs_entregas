import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Modal = ({ showModal, setShowModal, orderId }) => {
    const { clearCart } = useContext(CartContext)


    return (
        <>
            {// eslink-disable-next-line
            showModal, orderId &&
                <div className="modal-container">
                    <div className="modal">
                        <div className="modal-notification">
                            <h3>¡La compra fue realizada con éxito!</h3>
                            <p>Nos comunicaremos a la brevedad para coordinar la entrega</p>
                            <p>Puede hacer seguimiento del pedido con su número de orden:</p>
                            <p> {orderId} </p>
                        </div>
                        <div className="modal-button">
                            <Link to='/'>
                                <button className="btn-action" onClick={clearCart}>Aceptar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default Modal;