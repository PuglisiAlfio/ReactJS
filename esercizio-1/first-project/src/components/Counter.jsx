import { useState } from "react"


function Counter() {

    const [counter, setCount] = useState(0);
    const increase = () => {
        setCount(count => count + 1)
    }

    



    return <>
            <h2>Count: {counter}</h2>
            <button onClick={increase}>Click</button>
            </>
}

export default Counter