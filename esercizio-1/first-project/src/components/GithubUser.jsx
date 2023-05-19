import { useGithubUser } from "./useGithubUser";

function GithubUser({username}){
    const {data} = useGithubUser(username)
    
    return <div>
        {data && ( 
            <div>
                <h3>{data.name}</h3>
                <p>{data.login}</p>
            </div>
        )}
    </div>
}

export default GithubUser;