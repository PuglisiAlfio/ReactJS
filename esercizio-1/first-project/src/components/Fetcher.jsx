import { useEffect, useState } from "react"

const Fetcher = (props) =>{

    const [data, setData] = useState('')
    
    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch(`https://swapi.dev/api/people/${props.id}/`)
            const newData = await response.json()
            setData(newData);
            console.log(newData)
        }

        fetchData()
    } ,[props.id]);

    return <>
            <h3>Fetch request:</h3>
            <p>{data.name} - {data.height}</p>
            </>
}

export default Fetcher