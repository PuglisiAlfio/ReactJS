import { useState, useRef } from "react";
import LanguageContext from "./LanguageContext";

const String = {
    english:{CURRENT_LIST: 'Todo List'},
    italiano:{CURRENT_LIST: 'Lista di cose da fare'}
}

const StringButton = {
    english:{CURRENT_BUTTON: 'Add item'},
    italiano:{CURRENT_BUTTON: 'Aggiungi elemento'}
}

const RemoveList = {
    english:{CURRENT_BUTTON: 'Delete item'},
    italiano:{CURRENT_BUTTON: 'Resetta Lista'}
}

const TodoList = (props) => {

    //destructuring per usare useState
    const [name, setName] = useState("");
    const [item, setItem] = useState(props.name);
    const [reset, setReset] = useState('')
    let clearInput = useRef('');
    let clearList = useRef('');
    //let clearItem = useRef('');
   
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
      //rimuovere elemento corrispondente
      const setRemoveItemHandler = (id) => {
        const updateItems = [...item];
        updateItems.splice(id, 1);
        setItem(updateItems)
      }
    
    return(
        <>
            <LanguageContext.Consumer>

                {language => {
                    return(<>
                        <h3>{String[language].CURRENT_LIST}</h3>
                        <input onChange={(event) => setName(event.target.value)} ref={clearInput}/>

                        <button type="button" onClick={setNameHandler}>{StringButton[language].CURRENT_BUTTON}</button>

                        <button type="button" onClick={setResetHandler}>{RemoveList[language].CURRENT_BUTTON}</button>

                        <ul ref={clearList} onChange={(event) => setReset(event.target.value)}>

                            {item.map((item, id) => <>
                                                        <li key={id} index={id}>{item}</li>
                                                        <button onClick={() => {setRemoveItemHandler(id)}}>Delete item</button>
                                                        </>)}
                        </ul>
                        </>
                    )
                }}
            </LanguageContext.Consumer>
        </>
    )
}

export default TodoList