import { useId } from "react";
import './Cart.css'
import { useCart } from "../../hooks/useCart";

function ListCart ({ thumbnail, title, price, quantity, addToCart }) {
    return(
        <>
            <li>
                <img src={thumbnail} alt={title} />
                <div>
                    <strong>{title}</strong> - ${price}
                </div>

                <footer>
                    <small>
                        Qty: {quantity}
                    </small>
                    <button onClick={addToCart}>➕</button>
                </footer>
            </li>
        </>
    )
}

function Cart() {
    const { cart, clearCart, addCart } = useCart()
    const cartCheckboxId = useId();
    return (
    <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <p> 🛒 </p>
        </label>
        <input type="checkbox" id={cartCheckboxId} hidden />

        <aside className='cart'>
            <ul>
                {cart.map(item => {
                    return(
                        <ListCart key={item.id} {...item} addToCart={() => addCart(item)}/>
                    )
                })}
            </ul>

            <button onClick={clearCart}>🗑️</button>
        </aside>
    </>
    );
}

export default Cart;