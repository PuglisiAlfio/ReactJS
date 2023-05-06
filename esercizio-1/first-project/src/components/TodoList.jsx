import { useState, useRef } from "react";


const TodoList = (props) => {

    //destructuring per usare useState
    const [name, setName] = useState("");
    const [item, setItem] = useState(props.name);
    const [reset, setReset] = useState('')
    let clearInput = useRef('');
    let clearList = useRef('');
   




    //funzione per manipolare l'input
    const setNameHandler = () => {
        setItem([...item, name]);
        //con l'useRef, una volta cliccato il bottone, aggiorniamo la text area dell'input con un valore vuoto ('' o null);
        clearInput.current.value = null //oppure ''
      };

      //funzione per resettare la lista
      const setResetHandler = () => {
        setItem([...reset])
        clearList.current = []
      }
    
    return(
        <>
            <h3>Todo List</h3>
            <input onChange={(event) => setName(event.target.value)} ref={clearInput}/>
            <button type="button" onClick={setNameHandler}>Add Item</button>
            <button type="button" onClick={setResetHandler}>Reset List</button>
            <ul ref={clearList} onChange={(event) => setReset(event.target.value)}>
                {item.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}

export default TodoList