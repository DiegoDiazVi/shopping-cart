import { useId } from 'react';

function Filters({filters, handlerChangeInput, handlerSelectCategory}) {
    const idPrice = useId();
    const idCategory = useId();

    const handlerSetPrice = (evt) => {
        handlerChangeInput(evt.target.value)
    }
    const handlerSetCategory = (evt) => {
        handlerSelectCategory(evt.target.value)
    }
    return (
        <>
            <section>
                <label htmlFor={idPrice}>Precio</label>
                <input id={idPrice} type="range" min='0' max='2000' onChange={handlerSetPrice} />
                <span>$ {filters.minPrice}</span>
                </section>
                <section>
                <label htmlFor={idCategory}>Categoria</label>
                <select name='category' id={idCategory} defaultValue={'all'} onChange={handlerSetCategory}>
                    <option value='all'>Todos</option>
                    <option value='beauty'>Belleza</option>
                    <option value='fragrances'>Fragancias</option>
                    <option value='furniture'>Muebles</option>
                    <option value='groceries'>Comida</option>
            </select>
        </section>
        </>
    );
}

export default Filters;