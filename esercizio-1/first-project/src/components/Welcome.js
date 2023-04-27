function Welcome(props){
    let strongProp = <strong>{props.name}</strong>
    return <div>
             <p>Welcome {strongProp}!</p>
            </div>
}

export default Welcome