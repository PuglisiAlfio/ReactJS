import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function GithubUserList() {

    const [name, setName] = useState([]);
    const [item, setItem] = useState([]);

    const handleSetList = () => {
        setItem([...item, name]);
    }

    return <>
            <input type="text" onChange={(event) => setName(event.target.value)}/>
            <button onClick={handleSetList}>Add</button>
            <ul>
                {item.map((element, index) => {
                    return <li key={index}><Link to={element}>{element}</Link></li>
                    })
                }
            </ul>
            <Outlet/>
            </>

}

export default GithubUserList;