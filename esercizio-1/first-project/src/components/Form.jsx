import { useState } from "react"
import DisplayInfo from "./DisplayInfo";
import Fetcher from "./Fetcher";

function Form() {
    const [userData, setUserData] = useState([]);

    const handleSubmitData = (event) => {
        event.preventDefault();
        const userArr = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        setUserData([...userData,userArr]);
        event.target.username.value = '';
        event.target.password.value = ''
     }

    const handleResetData = () => {
        setUserData([])
    }


    return <>
            <form onSubmit={handleSubmitData}>
                <label>Name:</label>
                <input type="text" name="username"/>
                <br />
                <label>Password:</label>
                <input type="password" name="password" />
                <br />
                <button type="submit">Load</button>
                <button onClick={handleResetData}>Reset</button>
            </form>
            <DisplayInfo userArr={userData}/>
            <Fetcher id={'5'}/>
            </>
} 

export default Form