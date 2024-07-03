import { useId } from 'react';
import './Filters.css'

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
        <div className='filters'>
            <section>
                <label className='input-label' htmlFor={idPrice}>Precio</label>
                <input className='input' id={idPrice} type="range" min='0' max='2000' onChange={handlerSetPrice} />
                <span className='input-price'>$ {filters.minPrice}</span>
            </section>
            <section>
                <label className='select-label'  htmlFor={idCategory}>Categoria</label>
                <select className='select'name='category' id={idCategory} defaultValue={'all'} onChange={handlerSetCategory}>
                    <option value='all'>Todos</option>
                    <option value='beauty'>Belleza</option>
                    <option value='fragrances'>Fragancias</option>
                    <option value='furniture'>Muebles</option>
                    <option value='groceries'>Comida</option>
            </select>
        </section>
        </div>
    );
}

export default Filters;