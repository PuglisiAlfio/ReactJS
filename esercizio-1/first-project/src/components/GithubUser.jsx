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
            <input />
            <button>Search</button>
            <div>
                {data && <a href={data.html_url}>{data.login}</a>}
            </div>
        </>
}

export default GithubUser;