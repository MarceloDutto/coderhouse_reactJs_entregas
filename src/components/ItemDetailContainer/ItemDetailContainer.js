import React, { useState, useEffect } from "react";
import data from "../../catalog/data.json"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ( {id} ) => {
    const [catalogo, setCatalogo] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        const getDB = new Promise((resolve,reject) => {
            setLoading(true)
            setTimeout(() => {
                resolve(
                setCatalogo(data),
                setLoading(false)
            );
            }, 2000);
        });
        getDB.then((result) => {
            console.log('result', result)
        })
    }, []);

    const item = catalogo.find(obj => {
        return obj.id === id;
    });

    return (
        <div className="containerDetail">
            {loading ? <h3 className="loadingMessage">Cargando...</h3>
            :
            <ItemDetail item={item} />
            }
        </div>
    )
    
} 

export default ItemDetailContainer;