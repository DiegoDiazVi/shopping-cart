import Header from './components/Header/Header.jsx';
import { Card } from './components/Card/Card.jsx';
import FiltersProvider from './context/FiltersContext';
import Cart from './components/Cart/Cart.jsx';
import CartProvider from './context/CartContext.jsx';

function App() {
  return (
      <main className='container'>
        <FiltersProvider>
          <Header />
          <CartProvider>
            <Cart />
          </CartProvider>
          <Card />
        </FiltersProvider>
      </main>
    )
}

export default App
