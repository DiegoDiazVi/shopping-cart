import { useReducer } from "react";
import { createContext } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

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