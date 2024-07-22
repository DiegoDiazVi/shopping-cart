import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
}