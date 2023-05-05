import { useState } from "react";

const TodoList = (props) => {

    //destructuring per usare useState
    const [name, setName] = useState("");
    const [item, setItem] = useState(props.name)


    //funzione per manipolare l'input
    const setNameHandler = () => {
        setItem([...item, name]);
        setName('');
      };
    
    return(
        <>
        <h3>Todo List</h3>
        <input onChange={(event) => setName(event.target.value)}/>
        <button type="button" onClick={setNameHandler}>Add Item</button>
        <ul>
            {item.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        </>
    )
}

export default TodoList

//funzione per aggiungere l'input alla li, al click del bottone
    // const onAddItem = (event) => {
    //     event.preventDefault();
    //     let values = name;
    //     console.log(values)
    // }


    //costante che mappa ogni elemento di un array in ingresso come prop
    //e che restituirà un "li" per ogni elemento dell'array mappato
    // const items = props.name.map((item,index) => {
    //     return <li key={index}>{item}</li>
    // })    <=== questa constante items è la stessa cosa scritta dentro il tag "<ul></ul>"