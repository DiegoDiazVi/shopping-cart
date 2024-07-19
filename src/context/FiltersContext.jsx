import { createContext, useState, useEffect } from "react";
import { useFilters } from "../hooks/useFilters";
import { useFetchProducts } from "../hooks/useFetchProducts";

export const FilterContext = createContext(null);

function FiltersProvider({ children }) {
    const { products, isLoading } = useFetchProducts('https://dummyjson.com/products');
    const { filters, setFilters } = useFilters()
    const [ filterProducts, setFilteredProducts ] = useState(products.products)

    const handlerChangeInput = (value) => {
        setFilters(prevState => {
            return {
                ...prevState,
                minPrice: value
            }
        })
    }

    const handlerSelectCategory = (value) => {
        setFilters(prevState => {
            return {
                ...prevState,
                category: value
            }
        })
    }

    useEffect(() => {
        handlerFilterProducts(products)
    }, [ filters ])

    const handlerFilterProducts = (products) => {
    const filterProducts = products.products?.filter( product => {
        return (filters.category === 'all' || product.category === filters.category) && product.price >= filters.minPrice
    })
    setFilteredProducts(filterProducts)
    }
    return (
        <FilterContext.Provider value={{ handlerChangeInput, handlerSelectCategory, filters, filterProducts, isLoading }}>
            { children }
        </FilterContext.Provider>
    );
}

export default FiltersProvider;