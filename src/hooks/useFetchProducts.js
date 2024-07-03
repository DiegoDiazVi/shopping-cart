import { useEffect, useState } from "react"

function useFetchProducts() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => {
            setLoading(true)
            return res.json()
        })
        .then(json => setData(json))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }, [])

    return { data, loading }
}

export { useFetchProducts }