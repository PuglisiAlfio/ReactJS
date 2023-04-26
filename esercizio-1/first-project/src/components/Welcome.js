import Age from "./Age"

function Welcome(props){
    return <div>
                <p>Welcome <strong>{props.name}</strong>!</p>
                <Age age="32"/>
            </div>
}

export default Welcome