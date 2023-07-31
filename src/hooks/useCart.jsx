import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export function useCart () {
    const {cart, addToCart, removeFromCart, clearCart} = useContext(cartContext)

    if(!cart) {
        console.log("can't use cart here")
    }
    return {
        cart,
        addToCart,
        clearCart,
        removeFromCart
    }
}