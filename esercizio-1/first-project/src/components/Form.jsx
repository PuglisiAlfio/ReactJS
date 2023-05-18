import { useState } from "react"
import DisplayInfo from "./DisplayInfo";

function Form(){

    const [userData, setData] = useState([])

    const onSubmitHandle = (e) => {
        e.preventDefault();
        const userArr = {
                username: e.target.username.value,
                password: e.target.password.value
            };
         setData([...userData, userArr]);

         e.target.username.value = '';
         e.target.password.value = '';  
    }

    const onResetHandle = () => {
        setData([])
    }

    return (
        <>
            <form onSubmit={onSubmitHandle}>
                <label>Name:</label>
                <input type="text" name="username"/>
                <br />
                <label>Password:</label>
                <input type="password" name="password"/>
                <br />
                <button type="submit">Login</button>
                <button onClick={onResetHandle}>Reset</button>
            </form>
            <DisplayInfo userArr={userData}/>
        </>
    )
}

export default Form