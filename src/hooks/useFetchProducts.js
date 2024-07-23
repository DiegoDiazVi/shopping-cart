import { useEffect, useState } from "react"

/**
 * Custom hook to fetch products from a given URL.
 *
 * @param {string} url - The URL to fetch the products from.
 * @returns {Object} An object containing the fetched products and a loading state.
 */
function useFetchProducts(url) {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setIsLoading(false)
            return setProducts(json)
        })
        .catch(error => console.error(error))
    }, [url])

    return { products, isLoading }
}

export { useFetchProducts }