import { useState, useEffect } from 'react';
import Header from './components/Header';
import { Card } from './components/Card';
import { useFetchProducts } from './hooks/useFetchProducts'
import { useFilters } from './hooks/useFilters';

function App() {
  const { products, isLoading } = useFetchProducts('https://dummyjson.com/products');
  const { filters, setFilters } = useFilters()
  const [ filterProducts, setFilteredProducts ] = useState(products.products)

  useEffect(() => {
    setFilteredProducts(products.products)
  }, [products])

  useEffect(() => {
    handlerFilterProducts(products)
  }, [ filters, products ])

  const handlerChangeInput = (value) => {
    setFilters(prevState => {
      return {
        ...prevState,
        minPrice: value
      }
    })
  }

  const handlerSelectCategory = (value) => {
    setFilters(prevState => {
      return {
        ...prevState,
        category: value
      }
    })
  }

  const handlerFilterProducts = (products) => {
    const filterProducts = products.products?.filter( product => {
      return (filters.category === 'all' || product.category === filters.category) && product.price >= filters.minPrice
    })
    setFilteredProducts(filterProducts)
  }
  console.log(filters)
  return (
    <main className='container'>
      <Header filters={filters} handlerChangeInput={handlerChangeInput} handlerSelectCategory={handlerSelectCategory} />
      <Card data={filterProducts} loading={isLoading}/>
    </main>
  )
}

export default App
