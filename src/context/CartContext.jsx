import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addCart = (product) => {
        setCart([...cart, product])
    }

    const clearCart = () => {
        setCart([])
    }

    const removeProductInCart = (id) => {
        setCart(prevState => {
            return prevState.filter(cart => cart.id !== id)
        })
    }
    return (
        <CartContext.Provider value={{ cart, addCart, clearCart, removeProductInCart }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartProvider;