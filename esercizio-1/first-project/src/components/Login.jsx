
const Login = (props) => {

    const onLogin = (event) => {
        event.preventDefault();
    let values = {
        name: props.name,
        lastName: props.lastName,
        password: props.pass,
    }
    console.log(values)
    }

    const resetContent = () => {
        let values = {
            name: '',
            lastName: '',
            password: '',
        }
        return values
    }

    
        return(
            <>
                <button disabled={!props.name || !props.pass ||!props.lastName} onClick={onLogin}>Login</button>
                <button onClick={resetContent}>Reset Content</button>
            </>
        )
}

export default Login