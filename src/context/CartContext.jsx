import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addCart = (product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }
        return setCart([
            ...cart,
            {
                ...product,
                quantity: 1
            }])
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