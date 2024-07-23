import { useReducer } from "react";
import { createContext } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";

/**
 * @fileoverview This file exports the CartContext object.
 * @module CartContext
 */
export const CartContext = createContext(null);

/**
 * Provides a context for managing the shopping cart.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactNode} The rendered component.
 */
function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, cartInitialState)

    const addCart = (product) => {
        dispatch({
            type: 'ADD_CART',
            product
        })
    }

    const clearCart = () => {
        dispatch({
            type: 'DELETE_CART'
        })
    }

    const removeProductInCart = (id) => {
        dispatch({
            type: 'REMOVE_PRODUCT_CART',
            id
        })
    }

    return (
        <CartContext.Provider value={{ cart, addCart, clearCart, removeProductInCart }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartProvider;