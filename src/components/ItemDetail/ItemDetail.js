import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ( {item} ) => {
    const {id, imagen, nombre, precio, caracteristicas, ancho, alto, profundidad} = item;

    return (
        <div className="itemDetailContainer">
            <div className="item">
                <div className="itemDetailImageContainer">
                    <img className="itemDetailImage" src={imagen} alt={nombre} />
                </div>
                <div className="itemPanel">
                    <div className="itemInfo">
                        <p className="itemDetailNombre"> {nombre} </p>
                        <p className="itemDetailPrecio"> $ {precio} </p>
                    </div>
                    <div className="itemTransaction">
                        <ItemCount start={1} max={10} />
                        <button className="btn-AddToCart">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            <div className="itemFeatures">

                <strong className="featuresTitle">Características: </strong>
                <p> {caracteristicas} </p>

                <strong className="featuresTitle">Medidas finales</strong>              
                <p className="p-medida"> Altura: {alto}</p>
                <p className="p-medida"> Ancho: {ancho}</p>
                <p className="p-medida"> Profundidad: {profundidad}</p>

                <p>Los productos se realizan a medida, consulte si necesita hacer un cambio de medida, diseño o cualquier otra modificacion al mueble.</p>
                <p>Trabajamos sin stock, este producto cuenta con un tiempo estimado de 30 dias de fabricación.</p>
                <p>Saquese todas las dudas que tenga antes de realizar la compra.</p>
                <strong className="featuresTitle">Para presupuestos contactarse por:</strong>
                <strong className="featuresTitle">Whatsapp: +54 9 11 12356578</strong>
                <strong className="featuresTitle">Mail: info@ebanomuebles.com.ar</strong>
            </div>
        </div>
    )

}

export default ItemDetail;