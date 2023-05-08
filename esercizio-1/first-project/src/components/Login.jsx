const Login = (props) => {

    const onLogin = (event) => {
        event.preventDefault();
    let values = {
        name: props.name,
        password: props.pass,
        checkbox: props.check
    }
    console.log(values)
    }

    const resetContent = (event) => {
        event.preventDefault();
        props.emptyName.current.value = '';
        props.emptyPass.current.value = '';
        props.emptyCheck.current.checked = false
    }

    
        return(
            <>
                <button disabled={!props.name || !props.pass} onClick={onLogin}>Login</button>
                <button onClick={resetContent}>Reset Content</button>
            </>
        )
}

export default Login