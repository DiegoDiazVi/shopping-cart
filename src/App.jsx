import { Card } from './components/Card';
import { useFetchProducts } from './hooks/useFetchProducts'

function App() {
  const { data, loading} = useFetchProducts();
  return (
    <main className='container'>
      <Card data={data} loading={loading}/>
    </main>
  )
}

export default App
