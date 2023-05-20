import { useEffect, useState } from "react";

function Fetcher() {
    const [data, setData] = useState('')

useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://swapi.dev/api/people/1/')
        const newData = await response.json();
        setData(newData);
        console.log(newData)
    }
    fetchData();
 }, [])

 return <>
        <p>{data.name} {data.height}</p>
        </>
}

export default Fetcher;