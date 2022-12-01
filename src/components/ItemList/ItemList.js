import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productosListados }) => {
    return (
        <div className="ItemList">
            {productosListados && productosListados.map((producto) => (
                <Item prod={producto} key={producto.id} />
            ))}
        </div>
    )

}

export default ItemList