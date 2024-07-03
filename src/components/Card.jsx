import './Card.css'

function Card({data, loading}) {
    return (
        <ul className='card'>
            {loading ? <p>Cargando...</p> : data?.products.map((product) => {
            return (
                <li className='card-list' key={product.id}>
                    <p className='card-title'>{product.title}</p>
                    <img className='card-image' src={'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-5__en-IN.jpg?v=1715760161&width=823'} alt={product.description} />
                    <p className='card-price'>${product.price}</p>
                    <button className='card-button'> Add to cart 🛒 </button>
                </li>
                )
            })}
        </ul>
    )
}
export { Card }