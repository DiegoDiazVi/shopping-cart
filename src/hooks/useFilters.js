import { useState } from 'react';
/**
 * Custom hook for managing filters.
 *
 * @returns {Object} An object containing the filters and a function to update them.
 */
function useFilters () {
    const [ filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return { filters, setFilters}
}

export { useFilters }