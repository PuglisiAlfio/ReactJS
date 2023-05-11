import { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUserList() {

    const [name, setName] = useState([]);
    const [item, setItem] = useState([]);

    const handleSetList = () => {
        setItem([...item, name]);
    }

    return <>
            <input type="text" onChange={(event) => setName(event.target.value)}/>
            <button onClick={handleSetList}>Search</button>
            <GithubUser username = {name}/>

            <ul>
                {item.map((element, index) => {
                    return <li key={index}>{element}</li>
                    })
                }
            </ul>
            </>

}

export default GithubUserList;