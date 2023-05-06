import { useState, useRef } from "react";


const TodoList = (props) => {

    //destructuring per usare useState
    const [name, setName] = useState("");
    const [item, setItem] = useState(props.name);
    let clearInput = useRef('');


    //funzione per manipolare l'input
    const setNameHandler = () => {
        setItem([...item, name]);
        //con l'useRef, una volta cliccato il bottone, aggiorniamo la text area dell'input con un valore vuoto ('' o null);
        clearInput.current.value = null //oppure ''
      };
    
    return(
        <>
            <h3>Todo List</h3>
            <input onChange={(event) => setName(event.target.value)} ref={clearInput}/>
            <button type="button" onClick={setNameHandler}>Add Item</button>
            <ul>
                {item.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}

export default TodoList