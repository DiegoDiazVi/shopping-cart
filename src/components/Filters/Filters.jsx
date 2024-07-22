import { useId } from 'react';
import './Filters.css'
import { useContext } from 'react';
import { FilterContext } from '../../context/FiltersContext';

function Filters() {
    const { filters, handlerChangeInput, handlerSelectCategory } = useContext(FilterContext);
    const idPrice = useId();
    const idCategory = useId();

    return (
        <div className='filters'>
            <section>
                <label className='input-label' htmlFor={idPrice}>Precio</label>
                <input className='input' id={idPrice} type="range" min='0' max='2000' onChange={(e) => handlerChangeInput(e.target.value)} />
                <span className='input-price'>$ {filters.minPrice}</span>
            </section>
            <section>
                <label className='select-label'  htmlFor={idCategory}>Categoria</label>
                <select className='select'name='category' id={idCategory} defaultValue={'all'} onChange={(e) => handlerSelectCategory(e.target.value)}>
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