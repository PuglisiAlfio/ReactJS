import { useEffect, useState } from "react";

function GithubUser(props) {

    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${props.username}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setData(json)
        });
    }, [props.username])

    return <>
            {data && (
                <div>
                <h4>{data.name}</h4>
                <p>{data.login}</p>
                </div>
            )}
        </>
}

export default GithubUser;