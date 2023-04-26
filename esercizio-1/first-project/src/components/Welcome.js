import Age from "./Age"

function Welcome(props){
    return <div>
                {props.name === "John"
                ?<div>
                    <p>Welcome {props.name}!</p> 
                    <Age age = {17}/> 
                    </div>
                : <p>Error</p>}
                </div>
}

export default Welcome