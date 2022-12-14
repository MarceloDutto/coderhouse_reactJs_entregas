import React, { useContext, useState } from "react";
import OrderForm from "./OrderForm";
import Modal from "../Modal/Modal";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import './Styles.css';




const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { cartContent, cartTotalPrice } = useContext(CartContext);
    
    
    const createOrder = (e) => {
        e.preventDefault()

        const order = {};
        order.buyer = { name, email, phone };
        order.total = cartTotalPrice();
        order.items = cartContent.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio;
            const cantidad = cartItem.quantity;
            return { id, nombre, precio, cantidad };
        })
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)     
            .then((docRef) => {
                setOrderId(docRef.id);
            })
            .catch(err => console.log('ERROR AL GENERAL LA ORDEN', err))
            .finally()
    }


    const notValid = !(name.length && email.length && phone.length > 0);


    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Completá tus datos</h2>
            <p className="checkout-p">Esto nos permitirá confirmar la compra</p>
            
            <OrderForm 
            createOrder={createOrder}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            notValid={notValid}
            phone={phone}
            setPhone={setPhone}
            setShowModal={setShowModal} />

            <Modal 
            showModal={showModal}
            setShowModal={setShowModal}
            orderId={orderId} />
        </div>
    )

}

export default Checkout;