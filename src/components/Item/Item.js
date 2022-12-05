import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import './Styles.css';



const Item = ( { prod } ) => {  
    const {id, nombre, precio, imagen} = prod || {};  
    const { addToCart } = useContext(CartContext);

    return (
    <div className="cardContainer">
        <div className="cardImageContainer">
            <img className="cardImage" src={imagen} alt={nombre} />
        </div>
        <div className="cardInfo">
            <Link to={`/item/${id}`}>
                <h3 className="cardName"> {nombre} </h3>
            </Link>
            <p className="cardPrice"> {Intl.NumberFormat("es-AR", {currency: "ARS", style:"currency"}).format(precio)} </p>
            <button className="btn-card" onClick={() => {addToCart(prod, 1)}}>Agregar al carrito</button>
        </div>

    </div>
    )
}

export default Item