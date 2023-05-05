const UncontrolledLogin = () => {

    const handleChangeForm = (event) => {
      event.preventDefault();
  
      const username = event.target.username.value;  //con la Classe "event.target.element.username.value"
      const password = event.target.password.value;
      const checkbox = event.target.checkbox.checked;
  
      console.log({
        username, password, checkbox
      })
    }
  
    return <>
            <h3>Uncontrolled Form</h3>
            <form onSubmit={handleChangeForm}>
              <input type="text" name="username"/>
              <input type="password" name = "password" />
              <input type="checkbox" name = "checkbox"/>
              <button type="submit">Login</button>
            </form>
              
          </>
  }
  
  export default UncontrolledLogin

  
// const Login = (props) => {

//     const onLogin = (event) => {
//         event.preventDefault();
//     let values = {
//         name: props.name,
//         lastName: props.lastName,
//         password: props.pass,
//     }
//     console.log(values)
//     }

//     const resetContent = (event) => {
//         event.preventDefault();
//         props.emptyName.current.value = '';
//         props.emptyLastName.current.value = '';
//         props.emptyPass.current.value = '';
//     }

    
//         return(
//             <>
//                 <button disabled={!props.name || !props.pass ||!props.lastName} onClick={onLogin}>Login</button>
//                 <button onClick={resetContent}>Reset Content</button>
//             </>
//         )
// }

// export default Login