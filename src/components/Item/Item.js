import React from "react";
import { Link } from 'react-router-dom';


const Item = ( { prod } ) => {  
    const {id, nombre, precio, imagen} = prod

    return (
    <div className="cardContainer">
        <div className="cardImageContainer">
            <img className="cardImage" src={require(`../../catalog/imagenes/${imagen}.jpg`)} alt={nombre} />
        </div>
        <div className="cardInfo">
            <Link to={`/Item/${id}`}>
            <h3 className="cardName"> {nombre} </h3>
            </Link>
            <p className="cardPrice"> $ {precio} </p>
        </div>
    </div>
    )
}

export default Item