import { useState, useEffect } from "react"


function Counter() {

    const [counter, setCount] = useState(0);

    //a side effect quando il componente è renderizzato per la prima volta
    useEffect(() => {
        console.log(`il counter è montato`)
    }, [])


    //a side effect ogni volta che il componente viene re-renderizzato
    useEffect(() => {
        console.log(`il counter è ${counter}`);
        //funzione OPZIONALE, dopo ogni re-rendering con valori cambiati, questa funzione (cleanup function) verrà eseguita con il vecchio valore
        return () => {
            console.log(`il counter era ${counter}`);
        }
    }, [counter])

    const increase = () => {
        setCount(count => count + 1)
    }

    const decrease = () => {
        if (counter > 0) {
            setCount(count => count - 1);
        }
      };

    



    return <>
            <h2>Count: {counter}</h2>
            <button onClick={increase}>Incrementa</button>
            <button onClick={decrease}>Decrementa</button>
            </>
}

export default Counter