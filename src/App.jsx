import Header from './components/Header/Header.jsx';
import { Card } from './components/Card/Card.jsx';
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
