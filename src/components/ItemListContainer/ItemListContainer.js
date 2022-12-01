import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";


const ItemListContainer = () => {
    const [catalogo, setCatalogo] =  useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    
    useEffect (() => {
        setLoading(true)
        const db = getFirestore();
        const dbQuery = categoryId ? query(collection(db,'productos'), where('categoryId', "==", categoryId)) : query(collection(db,'productos'));

        getDocs(dbQuery).then((snapshot) => {
            if(snapshot.size === 0) {
                console.log('no hay productos');
            }
            setCatalogo(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }) .finally (
            setLoading(false)
        )
    }, [categoryId]);

    return (
        <div className="ItemListContainer">
            
            {loading ? 
            <Loader />
            :
            <ItemList productosListados={ catalogo } />}
            
        </div>
    )
}

export default ItemListContainer;