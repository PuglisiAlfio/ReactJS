import { useEffect, useState } from "react"
import Data from "./Data"

function Fetcher() {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const newData = await response.json();
            const filteredData = newData.filter((item, index) => index < 20)
            setData(filteredData);
        }
        fetchData()
    },[])

    

    return( 
            <div>
                {data.map((item) => {
                   return <Data title={item.title} completed={item.completed.toString()}/>  
                })}
            </div>
    )
            
}

export default Fetcher