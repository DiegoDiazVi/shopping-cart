import { useContext } from 'react'
import { FilterContext } from '../../context/FiltersContext.jsx'
import './Card.css'

function Card() {
    const { filterProducts, isLoading } = useContext(FilterContext)
    return (
        <ul className='card'>
            {isLoading ? <p>Cargando...</p> : filterProducts?.map((product) => {
            return (
                <li className='card-list' key={product.id}>
                    <p className='card-title'>{product.title}</p>
                    <img className='card-image' src={product.thumbnail} alt={product.description} />
                    <p className='card-price'>${product.price}</p>
                    <button className='card-button'> Add to cart 🛒 </button>
                </li>
                )
            })}
        </ul>
    )
}
export { Card }