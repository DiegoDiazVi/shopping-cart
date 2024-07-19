import Filters from "./Filters";
import './Header.css'

function Header() {

    return (
        <header className='header'>
            <h1>React Shop 🛒</h1>
            <Filters/>
        </header>
    );
}

export default Header;