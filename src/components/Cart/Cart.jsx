import { useId } from "react";
import './Cart.css'

function listCart({ image, description, productName, price, quantity }) {
    return(
        <>
            <li>
                <img src={image} alt={description} />
                <div>
                    <strong>{productName}</strong> - ${price}
                </div>

                <footer>
                    <small>
                        Qty: {quantity}
                    </small>
                    <button>+</button>
                </footer>
            </li>
        </>
    )
}

function Cart() {
    const cartCheckboxId = useId();
    return (
    <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <p> 🛒 </p>
        </label>
        <input type="checkbox" id={cartCheckboxId} hidden />

        <aside className='cart'>
            <ul>
                <listCart />
            </ul>

            <button>🗑️</button>
        </aside>
    </>
    );
}

export default Cart;