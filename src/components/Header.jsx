import Filters from "./Filters";
import './Header.css'

function Header({ filters, handlerChangeInput, handlerSelectCategory }) {

    return (
        <header className='header'>
            <h1>React Shop 🛒</h1>
            <Filters filters={filters} handlerChangeInput={handlerChangeInput} handlerSelectCategory={handlerSelectCategory} />
        </header>
    );
}

export default Header;