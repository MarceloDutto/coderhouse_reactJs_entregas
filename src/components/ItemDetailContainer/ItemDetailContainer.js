import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";


const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([])

    useEffect (() => {
        setLoading(true);
        const db = getFirestore();
        const itemRef = doc(db, 'productos', itemId );

        getDoc(itemRef).then((snapshot) => {
            if(snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() });
            }
        }).finally (
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        )
        
    }, [itemId]); 

    
    return (
        <div className="containerDetail">
            {loading ? 
            <Loader />
            :
            <ItemDetail item={item} />
            }
        </div> 
    )
    
} 

export default ItemDetailContainer;