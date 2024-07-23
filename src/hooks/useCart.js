import { useContext } from "react";
import { CartContext } from "../context/CartContext";

/**
 * Custom hook that provides access to the cart context.
 * @returns {Object} The cart object from the cart context.
 */
export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
}