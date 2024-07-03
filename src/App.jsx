import { useState } from 'react';
import Header from './components/Header';
import { Card } from './components/Card';
import { useFetchProducts } from './hooks/useFetchProducts'

function App() {
  const { products, isLoading } = useFetchProducts('https://dummyjson.com/products');
  const [ filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

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

  return (
    <main className='container'>
      <Header filters={filters} handlerChangeInput={handlerChangeInput} handlerSelectCategory={handlerSelectCategory} />
      <Card data={products} loading={isLoading}/>
    </main>
  )
}

export default App
