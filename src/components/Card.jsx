import './Card.css'

function Card({data, loading}) {
    return (
        <ul className='card'>
            {loading ? <p>Cargando...</p> : data?.map((product) => {
            return (
                <li className='card-list' key={product.id}>
                    <p className='card-title'>{product.title}</p>
                    <img className='card-image' src={product.images} alt={product.description} />
                    <p className='card-price'>${product.price}</p>
                    <button className='card-button'> Add to cart 🛒 </button>
                </li>
                )
            })}
        </ul>
    )
}
export { Card }