import Filters from "./Filters";

function Header({ filters, handlerChangeInput, handlerSelectCategory }) {

    return (
        <header>
            <h1>React Shop 🛒</h1>
            <Filters filters={filters} handlerChangeInput={handlerChangeInput} handlerSelectCategory={handlerSelectCategory} />
        </header>
    );
}

export default Header;