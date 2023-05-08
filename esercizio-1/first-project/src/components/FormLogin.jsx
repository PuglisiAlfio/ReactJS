import { useState } from "react";

function FormLogin() {

    //facciamo un unico useState per i 3 input dichiarando il valore iniziale di ogni input
    const [data, setData] = useState({
        username: '',
        password: '',
        checkbox: false
    })

    //funzione di manipolazione
    function handleData(event) {

        //dichiariamo una costante di valori e con il ternary operator stabiliamo che la key name verrà aggiornata in base al type di ogni input
        const {name, type, checked, value} = event.target;
        setData((data) => {
           return{ 
            ...data, [name]: type === 'checkbox' ? checked : value 
        }})
    }
    console.log(data)

    return <>
            <input onChange={handleData} type="text" name="username" value={data.username}/>
            <input onChange={handleData} type="text" name="password" value={data.password}/>
            <input onChange={handleData} type="checkbox" name="checkbox" checked={data.checkbox}/>
            </>
}

export default FormLogin;