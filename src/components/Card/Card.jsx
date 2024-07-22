import { useContext } from 'react'
import { FilterContext } from '../../context/FiltersContext.jsx'
import './Card.css'
import { useCart } from '../../hooks/useCart.js';

function Card() {
    const { filterProducts, isLoading } = useContext(FilterContext);
    const { addCart, cart, removeProductInCart } = useCart();

    const checkProductsInCart = (product) => {
        return cart.some(cart => cart.id === product.id)
    }
    return (
        <ul className='card'>
            {isLoading ? <p>Cargando...</p> : filterProducts?.map((product) => {
            const isProductInCart = checkProductsInCart( product )
            return (
                <li className='card-list' key={product.id}>
                    <p className='card-title'>{product.title}</p>
                    <img className='card-image' src={product.thumbnail} alt={product.description} />
                    <p className='card-price'>${product.price}</p>
                    <button className='card-button' onClick={() => isProductInCart ? removeProductInCart(product.id) : addCart(product)}>
                        { isProductInCart ? 'Remove product ❌' : 'Add to cart 🛒' }
                    </button>
                </li>
                )
            })}
        </ul>
    )
}
export { Card }