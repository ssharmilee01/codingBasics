import { useEffect, useState } from "react"

const FetchAPI = () => {
    const [result, setResult] = useState([])

    useEffect(() => {
        async function fetchdata() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/10")
            const data = await response.json()
            setResult(data)
        }
        fetchdata()
    }, [])
    return (<>Fetched Data : {JSON.stringify(result)}</>)


}

export default FetchAPI