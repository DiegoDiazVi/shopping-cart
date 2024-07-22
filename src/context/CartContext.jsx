import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCard] = useState([])

    const addCart = (product) => {
        setCard(product)
    }

    const clearCart = () => {
        setCard([])
    }
    return (
        <CartContext.Provider value={{ cart, addCart, clearCart }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartProvider;