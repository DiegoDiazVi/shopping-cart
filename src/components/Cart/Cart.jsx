import { useId } from "react";
import './Cart.css'

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
                <li>
                    <img src="https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png" alt="wiskas" />
                </li>
                <div>
                    <strong>Wiskas</strong> - $9.99
                </div>

                <footer>
                    <small>
                        Qty: 1
                    </small>
                    <button>+</button>
                </footer>
            </ul>

            <button>🗑️</button>
        </aside>
    </>
    );
}

export default Cart;