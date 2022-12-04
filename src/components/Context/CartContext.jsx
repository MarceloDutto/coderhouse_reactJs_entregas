import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {
    const [cartContent, setCartContent] = useState([]);

    const addToCart = (item, itemAmount) => {
        const itemQuery = cartContent.findIndex(i => i.id === item.id);
        if(itemQuery > -1) {
            const currentQty = cartContent[itemQuery].quantity;
            cartContent.splice(itemQuery, 1);
            setCartContent([...cartContent, {...item, quantity: itemAmount + currentQty}]);
        } else {
            setCartContent([...cartContent, {...item, quantity: itemAmount}]);
        }
    }

    const isInCart = (itemId) => {
        return cartContent.includes((prod) => prod.id === itemId)
    }

    const removefromCart = (itemId) => {
        setCartContent(cartContent.filter((prod) => prod.id !== itemId));
    }

    const clearCart = () => {
        setCartContent([])
    }

    const cartTotalItemsAmount = () => {
        return cartContent.length;
    }

    const cartTotalPrice = () => {
        return cartContent.reduce( (acc, prod) => (acc + (prod.quantity * prod.precio)), 0 );
    }

    return (
        <CartContext.Provider value={{
            cartContent,
            addToCart,
            isInCart,
            removefromCart,
            clearCart,
            cartTotalItemsAmount,
            cartTotalPrice
            }
        } >
            {children}
        </CartContext.Provider>
    )

}