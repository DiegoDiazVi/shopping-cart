import { useEffect, useState } from "react"

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