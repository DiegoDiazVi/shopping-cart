import { useState } from 'react';
function useFilters () {
    const [ filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return { filters, setFilters}
}

export { useFilters }