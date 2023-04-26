import Age from "./Age"

function Welcome(props){
    return <div> 
            <p>Welcome {props.name}!</p>
            <Age/>
        </div>
}

export default Welcome