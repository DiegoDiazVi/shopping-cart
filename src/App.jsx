import Header from './components/Header';
import { Card } from './components/Card';
import FiltersProvider from './context/FiltersContext';

function App() {
  return (
      <main className='container'>
        <FiltersProvider>
          <Header />
          <Card />
        </FiltersProvider>
      </main>
    )
}

export default App
